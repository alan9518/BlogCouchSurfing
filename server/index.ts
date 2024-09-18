import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return [{ postid: 1, title: 'title' }];
  }),
});

export type AppRouter = typeof appRouter;
