import { PostDetailsLoader } from '../_PostDetails/PostDetailsLoader';

export default function Loading() {
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <PostDetailsLoader />
    </section>
  );
}
