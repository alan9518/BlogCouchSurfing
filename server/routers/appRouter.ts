import { router } from '../trpc';

import { postRouter } from './postRouter';

export const appRouter = router({
  posts: postRouter,
});

export type AppRouter = typeof appRouter;
