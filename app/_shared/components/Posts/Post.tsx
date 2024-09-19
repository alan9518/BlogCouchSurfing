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
}

export const Post = ({
  title,
  content,
  createdDate,
  image,
  userName,
}: PostProps) => {
  return (
    <Link href={`blog/post/${2}`} className="w-full">
      <article className="w-full max-w-[95%] p-4 rounded-sm shadow-md flex flex-col gap-4">
        <PostHeader createdDate={createdDate} userName={userName} />
        <PostBody content={content} image={image} title={title} />

        <PostFooter />
      </article>
    </Link>
  );
};
