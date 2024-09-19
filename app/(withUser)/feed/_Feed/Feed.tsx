'use client';
import { NoDataMessage } from '@/app/_shared/components/NoDataMessage';
import { FriendsList } from '@/components/FriendsList';
import { Post } from '@/components/Posts/Post';
import { FeedPost } from '../../../../types/post'; // Import the Post type

interface FeedProps {
  feedPosts: FeedPost[];
  friends: any;
}

export const Feed = ({ feedPosts, friends }: FeedProps) => {
  console.log('🚀 ~ Feed ~ feedPosts:', feedPosts);
  if (!feedPosts) return <NoDataMessage message="No Posts to show" />;
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <div className="w-full  md:w-5/6 mx-auto my-4">
        <h2 className="text-2xl font-semibold mt-4">Friends</h2>
        <FriendsList friends={friends} />

        <h2 className="text-2xl font-semibold my-4">Feed</h2>
        <div className="flex flex-col items-center  md:items-start justify-start gap-4">
          {feedPosts.length > 0 ? (
            feedPosts.map((post) => {
              return (
                <Post
                  key={`post-${post.id}`}
                  createdDate={post.createdAt}
                  title={post.title}
                  content={post.content}
                  id={post.id}
                  image={post.image}
                  userName={post.userName}
                  userId={post.userId}
                />
              );
            })
          ) : (
            <div>no posts</div>
          )}
        </div>
      </div>
    </section>
  );
};
