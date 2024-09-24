'use client';

import { FriendsList } from '@/components/FriendsList';
import { NoDataMessage } from '@/components/NoDataMessage';
import { Post } from '@/components/Posts/Post';
import { UserFriends } from '@/types/users';

import dynamic from 'next/dynamic';
import { FeedPost } from '../../../../types/post'; // Import the Post type

interface FeedProps {
  feedPosts: FeedPost[];
  friends: UserFriends[];
}

const DynamicNoDataMessage = dynamic(
  () => import('@/components/NoDataMessage').then((mod) => mod.NoDataMessage),
  { ssr: false }
);

export const Feed = ({ feedPosts, friends }: FeedProps) => {
  if (!feedPosts) return <NoDataMessage message="No Posts to show" />;
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <div className="w-full  md:w-5/6 mx-auto my-4">
        <h2 className="text-2xl font-semibold mt-4">Friends</h2>
        <FriendsList friends={friends} />

        <h2 className="text-2xl font-semibold my-4">Feed</h2>
        <div className="flex flex-col items-center  md:items-start justify-start gap-4">
          {feedPosts.length > 0 ? (
            feedPosts.map((post) => (
              <Post
                key={`post-${post.id}`}
                createdDate={post.createdAt}
                title={post.title}
                id={post.id}
                image={post.image}
                userName={post.userName}
                userId={post.userId}
              />
            ))
          ) : (
            <DynamicNoDataMessage message="No Pots to show" />
          )}
        </div>
      </div>
    </section>
  );
};
