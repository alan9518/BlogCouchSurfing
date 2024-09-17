import { GetServerSideProps } from 'next';
import { Feed } from './_feed/Feed';
import { trpc } from './_trpc/client';

interface Props {
  posts: Array<{ postid: number; title: string }>;
}

export default function Home({ posts }: Props) {
  return (
    <main className="flex h-full">
      <Feed posts={posts} />
    </main>
  );
}

export const getServersideProps: GetServerSideProps = async () => {
  try {
    const posts = await trpc.posts.getPosts.useQuery();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(
      '🚀 ~ constgetServersideProps:GetServerSideProps=async ~ error:',
      error
    );
    return {
      props: {
        posts: [],
      },
    };
  }
};
