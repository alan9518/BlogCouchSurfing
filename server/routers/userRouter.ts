import { db } from '@/db';
import { friendshipsTable, usersTable, type SelectUser } from '@/db/schema';
import { UserFriends } from '@/types/users';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const userSchema = z.object({
  id: z.string(), // Use string since NextAuth session id is a string
  name: z.string().nullable().optional(),
  email: z.string().email().nullable().optional(),
  image: z.string().nullable().optional(),
});

export const userRouter = router({
  getUsers: publicProcedure.query(async (): Promise<SelectUser[]> => {
    const users = await db.query.usersTable.findMany();
    return users;
  }),
  getUserById: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<SelectUser | null> => {
      console.log('🚀 ~ .query ~ input:', input);
      const { userId } = input;

      const userFromDB = await db.query.usersTable.findFirst({
        where: (users, { eq }) => eq(users.id, userId),
      });

      return userFromDB || null;
    }),
  getUserFriends: publicProcedure
    .input(
      z.object({
        user: userSchema,
      })
    )
    .query(async ({ input }): Promise<UserFriends[]> => {
      const { user } = input;
      const friends = await db
        .select({
          id: usersTable.id,
          firstName: usersTable.firstName,
          lastName: usersTable.lastName,
          email: usersTable.email,
          createdAt: usersTable.createdAt,
        })
        .from(usersTable)
        .innerJoin(
          friendshipsTable,
          eq(friendshipsTable.friendId, usersTable.id)
        )
        .where(eq(friendshipsTable.userId, parseInt(user.id, 10)));

      return friends || [];
    }),
});
