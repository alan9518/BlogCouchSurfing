import { router } from '../trpc';

import { authRouter } from './authRouter';
import { postRouter } from './postRouter';
import { userRouter } from './userRouter';

export const appRouter = router({
  posts: postRouter,
  users: userRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
