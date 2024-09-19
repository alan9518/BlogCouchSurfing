import { PostLoader } from './PostLoader';

export const PostLoaderList = () => {
  const dummyPosts = Array.from({ length: 5 }, (v, i) => i + 1);
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {dummyPosts.map((p) => (
        <PostLoader key={p} />
      ))}
    </div>
  );
};
