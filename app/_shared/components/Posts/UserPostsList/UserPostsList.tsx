'use client';
import { trpc } from '@/app/_trpc/client';
import dynamic from 'next/dynamic';
import { Post } from '../Post';
import { PostLoaderList } from '../PostLoader/PostLoaderList';

interface UserPostsListProps {
  userId: number;
}

const DynamicNoDataMessage = dynamic(() =>
  import('@/components/NoDataMessage').then((mod) => mod.NoDataMessage)
);

export const UserPostsList = ({ userId }: UserPostsListProps) => {
  const {
    data: userPosts,
    isError,
    isLoading,
  } = trpc.posts.getPostsByUserId.useQuery({ userId });

  if (isError) return <DynamicNoDataMessage message="error loading Posts" />;

  if (isLoading) return <PostLoaderList />;
  if (userPosts.length <= 0)
    return <DynamicNoDataMessage message="No Pots to show" />;

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {userPosts.map((post) => {
        return (
          <Post
            key={`post-${post.id}`}
            userId={post.userId}
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
  );
};
