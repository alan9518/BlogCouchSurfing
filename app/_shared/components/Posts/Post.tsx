import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';
export const Post = () => {
  return (
    <article className="w-full max-w-[70%] p-4 rounded-sm shadow-md flex flex-col gap-4">
      <PostHeader />
      <PostBody />

      <PostFooter />
    </article>
  );
};
