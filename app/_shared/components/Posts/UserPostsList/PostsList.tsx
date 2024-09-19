'use client';
import { trpc } from '@/app/_trpc/client';
import { Post } from '../Post';

interface UserPostsListProps {
  userId: number;
}

export const UserPostsList = ({ userId }: UserPostsListProps) => {
  const {
    data: userPosts,
    isError,
    isLoading,
  } = trpc.posts.getPostsByUserId.useQuery({ userId });

  if (isLoading) return 'loading posts';

  if (isError) return 'error loading posts';

  if (userPosts.length <= 0) return 'no posts';

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {userPosts.map((post) => {
        return (
          <Post
            key={`post-${post.id}`}
            createdDate={post.createdAt}
            title={post.title}
            content={post.content}
            id={post.id}
            image={post.image}
            userName={'post.userName'}
          />
        );
      })}
    </div>
  );
};
