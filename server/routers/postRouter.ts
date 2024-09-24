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

const userSchema = z.object({
  id: z.string(), // Use string since NextAuth session id is a string
  name: z.string().nullable().optional(),
  email: z.string().email().nullable().optional(),
  image: z.string().nullable().optional(),
});

export const postRouter = router({
  getAllPosts: publicProcedure.query(
    async (): Promise<SelectPost[]> => db.query.postsTable.findMany()
  ),
  getPostsByUserId: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<FeedPost[]> => {
      const { userId } = input;
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
        .where(eq(postsTable.userId, userId));

      return posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt)
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '/'),
        userName: `${post.firstName} ${post.lastName}`,
      }));
    }),
  getFeedPosts: publicProcedure
    .input(
      z.object({
        user: userSchema,
      })
    )
    .query(async ({ input }): Promise<FeedPost[]> => {
      const { user } = input;

      const friends = await db
        .select({
          friendId: friendshipsTable.friendId,
        })
        .from(friendshipsTable)
        .where(eq(friendshipsTable.userId, parseInt(user.id, 10)));

      const friendIds = friends.map((friend) => friend.friendId);

      if (friendIds.length === 0) {
        return [];
      }

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

      if (!posts) return [];

      return posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt)
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '/'),
        userName: `${post.firstName} ${post.lastName}`,
      }));
    }),
  getPostDetailsById: publicProcedure
    .input(
      z.object({
        postId: z.number(),
      })
    )
    .query(async ({ input }): Promise<FeedPost | null> => {
      const { postId } = input;

      const post = await db
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
        .where(eq(postsTable.id, postId))
        .limit(1);

      if (post.length === 0) return null;

      // Extract the single post from the result
      const posToFormat = post[0];

      return {
        id: posToFormat.id,
        title: posToFormat.title,
        content: posToFormat.content,
        userId: posToFormat.userId,
        createdAt: new Date(posToFormat.createdAt)
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '/'),

        image: posToFormat.image,
        userName: `${posToFormat.firstName} ${posToFormat.lastName}`,
      };
    }),
});

export type PostRouter = typeof postRouter;
