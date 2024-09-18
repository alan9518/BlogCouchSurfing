import { db } from '@/db';
import { type SelectPost } from '@/db/schema';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const postRouter = router({
  getAllPosts: publicProcedure.query(async (): Promise<SelectPost[]> => {
    return await db.query.postsTable.findMany();
  }),
  getPostsByUserId: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<SelectPost[]> => {
      const { userId } = input;
      const posts = await db.query.postsTable.findMany({
        where: (posts, { eq }) => eq(posts.userId, userId),
      });
      return posts;
    }),
});

export type PostRouter = typeof postRouter;
