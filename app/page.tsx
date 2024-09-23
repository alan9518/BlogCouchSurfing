import { LoginForm } from '@/components/LoginForm';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-black mb-4">Blog </h2>

      {session ? (
        <div> welcome {JSON.stringify(session, null, 2)} </div>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
