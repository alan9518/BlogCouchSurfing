import { publicProduce, router } from '../trpc';

export const postRouter = router({
  getPosts: publicProduce.query(async () => {
    return [{ postid: 1, title: 'title' }];
  }),
});

export type PostRouter = typeof postRouter;
