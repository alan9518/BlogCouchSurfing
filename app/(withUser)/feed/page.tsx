import { Feed } from '@/app/_shared/components/Feed';
import { serverClient } from '@/app/_trpc/serverClient';
import { Suspense } from 'react';

interface FeedPageProps {
  searchParams: { userId?: string };
}

export default async function Home({ searchParams }: FeedPageProps) {
  let userId;
  let feedPosts;
  let friends;
  try {
    userId = searchParams?.userId || '1';
    feedPosts = await serverClient.posts.getFeedPosts.query({
      userId: parseInt(userId, 10),
    });

    friends = await serverClient.users.getUserFriends.query({
      userId: parseInt(userId, 10),
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
