import cookie from 'cookie';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { usersTable } from '@/db/schema';
import { db } from '@/db';
import { publicProcedure, router } from '../trpc';

type LoginResponse = {
  cookieHeader: string;
  userId: number;
};

export const authRouter = router({
  login: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }): Promise<LoginResponse> => {
      const { email, password } = input;

      const user = await db
        .select({
          id: usersTable.id,
          firstName: usersTable.firstName,
          lastName: usersTable.lastName,
          email: usersTable.email,
          password: usersTable.password,
          createdAt: usersTable.createdAt,
        })
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .get();

      if (!user) {
        throw new Error('User not found');
      }

      // Check if the password is valid
      //   password should be hashed in real life, just for this ocassion
      // and because there is no CRUD to add new users, im keeping it in plain text
      const passwordValid = password === user?.password;

      if (!passwordValid) {
        throw new Error('Invalid password');
      }

      const cookieHeader = cookie.serialize('userId', user.id.toString(), {
        httpOnly: false,
        maxAge: 604800, // 1 week
        path: '/',
        secure: false,
      });

      return {
        cookieHeader,
        userId: user.id,
      };
    }),
});
