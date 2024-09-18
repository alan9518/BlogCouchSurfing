import { Feed } from './_feed/Feed';
// import { trpc } from './_trpc/client';

import { serverClient } from './_trpc/serverClient';

interface Props {
  posts: Array<{ postid: number; title: string }>;
}

export default async function Home() {
  const posts = await serverClient.posts.getPosts.query();
  console.log('🚀 ~ Home ~ posts:', posts);

  return (
    <main className="flex h-full">
      {posts && JSON.stringify(posts, null, 2)}
      <Feed posts={posts} />
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const posts = await serverClient.posts.getPosts.query();
//     console.log('Fetched posts:', posts); // Log to ensure you see the posts

//     return {
//       props: {
//         posts: posts || [], // Ensure the posts are properly passed to props
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching posts:', error);

//     return {
//       props: {
//         posts: [], // Fallback to an empty array on error
//       },
//     };
//   }
// };
