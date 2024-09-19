import { Feed } from './_Feed';

import { serverClient } from '../_trpc/serverClient';

export default async function Home() {
  const feedPosts = await serverClient.posts.getFeedPosts.query({
    userId: 1,
  });

  const friends = await serverClient.users.getUserFriends.query({ userId: 1 });

  return (
    <main className="flex h-full pt-12 md:pt-0">
      <Feed feedPosts={feedPosts} friends={friends} />
    </main>
  );
}
