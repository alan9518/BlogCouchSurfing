'use client';

import { trpc } from '@/app/_trpc/client';
import dynamic from 'next/dynamic';
import { Post } from '../Post';
import { PostLoaderList } from '../PostLoader/PostLoaderList';

const DynamicNoDataMessage = dynamic(() =>
  import('@/components/NoDataMessage').then((mod) => mod.NoDataMessage)
);

interface UserPostsListProps {
  userId: number;
}

export const UserPostsList = ({ user }: UserPostsListProps) => {
  const {
    data: userPosts,
    isError,
    isLoading,
  } = trpc.posts.getPostsByUserId.useQuery({ user });

  if (isError) {
    return <DynamicNoDataMessage message="error loading Posts" />;
  }

  if (isLoading) {
    return <PostLoaderList />;
  }
  if (userPosts.length <= 0) {
    return <DynamicNoDataMessage message="No Pots to show" />;
  }

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {userPosts.map((post) => (
        <Post
          key={`post-${post.id}`}
          userId={post.userId}
          createdDate={post.createdAt}
          title={post.title}
          id={post.id}
          image={post.image}
          userName={post.userName}
        />
      ))}
    </div>
  );
};
