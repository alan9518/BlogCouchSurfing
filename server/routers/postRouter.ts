import { db } from '@/db';
import {
  friendshipsTable,
  postsTable,
  usersTable,
  type SelectPost,
} from '@/db/schema';
import { FeedPost } from '@/types/post';
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
  getFeedPosts: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<FeedPost[]> => {
      const { userId } = input;

      const friends = await db
        .select({
          friendId: friendshipsTable.friendId,
        })
        .from(friendshipsTable)
        .where(eq(friendshipsTable.userId, userId));

      const friendIds = friends.map((friend) => friend.friendId);

      if (friendIds.length === 0) {
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
          image: postsTable.image,
          firstName: usersTable.firstName,
          lastName: usersTable.lastName,
        })
        .from(postsTable)
        .innerJoin(usersTable, eq(postsTable.userId, usersTable.id))
        .where(inArray(postsTable.userId, friendIds));

      // format dates
      if (!posts) return [];

      return posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt)
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '/'),
        userName: `${post.firstName} ${post.lastName}`,
        // updateAt: new Date(post.updateAt)
        //   .toISOString()
        //   .split('T')[0]
        //   .replace(/-/g, '/'),
      }));
    }),
});

export type PostRouter = typeof postRouter;
