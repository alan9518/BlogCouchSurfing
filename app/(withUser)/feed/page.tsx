import { Feed } from '@/app/_shared/components/Feed';
import { AuthOptions } from '@/app/_shared/lib/authOptions';
import { serverClient } from '@/app/_trpc/serverClient';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  if (!session) return null;
  // let userId;
  let feedPosts;
  let friends;
  try {
    feedPosts = await serverClient.posts.getFeedPosts.query({
      user: session?.user,
    });

    friends = await serverClient.users.getUserFriends.query({
      user: session?.user,
    });
  } catch (error) {
    return null;
  }

  return (
    <main className="flex h-full pt-12 md:pt-0">
      <Suspense fallback={<div />}>
        <Feed feedPosts={feedPosts} friends={friends} />
      </Suspense>
    </main>
  );
}
