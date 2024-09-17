'use client';
import { Post } from '../_shared/components/Posts/Post';

interface FeedProps {
  posts: Array<{ postid: number; title: string }>;
}

export const Feed = ({ posts }: FeedProps) => {
  console.log('🚀 ~ Feed ~ posts:', posts);
  // const getPosts = trpc.posts.getPosts.useQuery();
  // console.log('🚀 ~ Feed ~ getPosts:', getPosts);
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">Your Feed</h2>

      <div>stories</div>

      <div className="flex flex-col items-center justify-center">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};
