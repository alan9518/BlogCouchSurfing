import { Feed } from './_Feed';

import { serverClient } from '../_trpc/serverClient';

interface FeedPageProps {
  searchParams: { userId?: string };
}

export default async function Home({ searchParams }: FeedPageProps) {
  const userId = searchParams?.userId || '1';
  const feedPosts = await serverClient.posts.getFeedPosts.query({
    userId: parseInt(userId),
  });

  const friends = await serverClient.users.getUserFriends.query({
    userId: parseInt(userId),
  });

  return (
    <main className="flex h-full pt-12 md:pt-0">
      <Feed feedPosts={feedPosts} friends={friends} />
    </main>
  );
}
