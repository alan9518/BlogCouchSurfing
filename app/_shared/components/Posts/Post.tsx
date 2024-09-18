import Link from 'next/link';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';
export const Post = () => {
  return (
    <Link href={`blog/post/${2}`} className="w-full">
      <article className="w-full max-w-[95%] p-4 rounded-sm shadow-md flex flex-col gap-4">
        <PostHeader />
        <PostBody />

        <PostFooter />
      </article>
    </Link>
  );
};
