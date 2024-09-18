import { FriendsList } from '../_shared/components/FriendsList';
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
      <div className="w-5/6 mx-auto my-4">
        <h2 className="text-2xl font-semibold mt-4">Friends</h2>
        <FriendsList />

        <h2 className="text-2xl font-semibold my-4">Feed</h2>
        <div className="flex flex-col items-start justify-start gap-4">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
};
