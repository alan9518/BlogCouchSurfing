import { publicProduce, router } from '../trpc';

const dummyPosts = [
  {
    id: 1,
    user_id: 1,
    title: 'post 1',
    content: 'lorem ipsum',
    created_at: '17/09/2024',
    image: 'asdasdasdasd',
  },
  {
    id: 1,
    user_id: 1,
    title: 'post 1',
    content: 'lorem ipsum',
    created_at: '17/09/2024',
    image: 'asdasdasdasd',
  },
  {
    id: 1,
    user_id: 1,
    title: 'post 1',
    content: 'lorem ipsum',
    created_at: '17/09/2024',
    image: 'asdasdasdasd',
  },
];

export const postRouter = router({
  getPosts: publicProduce.query(async () => {
    return dummyPosts;
  }),
});

export type PostRouter = typeof postRouter;
