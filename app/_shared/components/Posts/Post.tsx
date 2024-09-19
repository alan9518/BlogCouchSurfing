import Link from 'next/link';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

interface PostProps {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  image: string;
  userName: string;
  userId: number;
}

export const Post = ({
  id,
  title,
  content,
  createdDate,
  image,
  userName,
  userId,
}: PostProps) => {
  const postLink = `blog/post/${id}`;

  return (
    <article className="w-full max-w-[95%] p-4 rounded-sm shadow-md flex flex-col gap-4">
      <PostHeader
        createdDate={createdDate}
        userName={userName}
        userId={userId}
      />
      <Link href={postLink} className="w-full">
        <PostBody content={content} image={image} title={title} />
      </Link>

      <PostFooter />
    </article>
  );
};
