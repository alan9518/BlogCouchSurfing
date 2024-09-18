import { router } from '../trpc';

import { postRouter } from './postRouter';
import { userRouter } from './userRouter';

export const appRouter = router({
  posts: postRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
