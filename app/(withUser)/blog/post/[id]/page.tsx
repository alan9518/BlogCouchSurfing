import { serverClient } from '../../../../_trpc/serverClient';
import { PostDetails } from '../_PostDetails/PostDetails';

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;

  const postDetailsData = await serverClient.posts.getPostDetailsById.query({
    postId: parseInt(id, 10),
  });

  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      {postDetailsData && (
        <PostDetails
          title={postDetailsData.title}
          content={postDetailsData.content}
          image={postDetailsData.image}
          author={postDetailsData.userName}
          createdDate={postDetailsData.createdAt}
        />
      )}
    </section>
  );
}
