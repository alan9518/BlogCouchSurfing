import { Feed } from './_feed/Feed';

import { serverClient } from './_trpc/serverClient';

interface Props {
  posts: Array<{ postid: number; title: string }>;
}

export default async function Home() {
  const posts = await serverClient.posts.getAllPosts.query();
  const friendsPosts = await serverClient.posts.getFriendsPost.query({
    userId: 1,
  });

  const friends = await serverClient.users.getUserFriends.query({ userId: 1 });

  console.log('🚀 ~ Home ~ posts:', posts);

  return (
    <main className="flex h-full">
      {posts && JSON.stringify(friendsPosts, null, 2)}
      <Feed posts={posts} />
    </main>
  );
}
