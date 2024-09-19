import { db } from '@/db';
import { friendshipsTable, postsTable, type SelectPost } from '@/db/schema';
import { eq, inArray } from 'drizzle-orm';
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
  getFriendsPost: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<SelectPost[]> => {
      const { userId } = input;

      const friends = await db
        .select({
          friendId: friendshipsTable.friendId,
        })
        .from(friendshipsTable)
        .where(eq(friendshipsTable.userId, userId));

      const friendIds = friends.map((friend) => friend.friendId);

      if (friendIds.length === 0) {
        // No friends found
        return [];
      }

      // Find posts from those friends
      const posts = await db
        .select({
          id: postsTable.id,
          title: postsTable.title,
          content: postsTable.content,
          userId: postsTable.userId,
          createdAt: postsTable.createdAt,
          updateAt: postsTable.updateAt,
        })
        .from(postsTable)
        .where(inArray(postsTable.userId, friendIds));

      return posts;
    }),
});

export type PostRouter = typeof postRouter;
