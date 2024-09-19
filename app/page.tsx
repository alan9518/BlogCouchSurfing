import Link from 'next/link';
import { serverClient } from './_trpc/serverClient';

export default async function Home() {
  const availableUsers = await serverClient.users.getUsers.query();

  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-black mb-4">
        Select User to access blog
      </h2>
      <ul>
        {availableUsers &&
          availableUsers.map((user) => {
            return (
              <Link href={`/feed?userId=${user.id}`}>
                <li className="px-4 py-2 my-4 bg-slate-100 text-center hover:bg-slate-200">
                  {user.email}
                </li>
              </Link>
            );
          })}
      </ul>
    </main>
  );
}
