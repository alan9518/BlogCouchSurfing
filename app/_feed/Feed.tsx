import { FeedPost } from '../../types/post'; // Import the Post type
import { FriendsList } from '../_shared/components/FriendsList';
import { Post } from '../_shared/components/Posts/Post';

interface FeedProps {
  feedPosts: FeedPost[];
  friends: any;
}

export const Feed = ({ feedPosts, friends }: FeedProps) => {
  if (!feedPosts) return 'no posts';
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <div className="w-2/3 mx-auto my-4">
        <h2 className="text-2xl font-semibold mt-4">Friends</h2>
        <FriendsList friends={friends} />

        <h2 className="text-2xl font-semibold my-4">Feed</h2>
        <div className="flex flex-col items-start justify-start gap-4">
          {feedPosts.map((post) => {
            return (
              <Post
                key={`post-${post.id}`}
                createdDate={post.createdAt}
                title={post.title}
                content={post.content}
                id={post.id}
                image={post.image}
                userName={post.userName}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
