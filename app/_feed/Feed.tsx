import { Post } from '../_shared/components/Posts/Post';

export const Feed = () => {
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">Your Feed</h2>

      <div>stories</div>

      <div className="flex flex-col items-center justify-center">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};
