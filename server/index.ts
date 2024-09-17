import { publicProduce, router } from './trpc';

export const appRouter = router({
  getPosts: publicProduce.query(async () => {
    return [{ postid: 1, title: 'title' }];
  }),
});

export type AppRouter = typeof appRouter;
