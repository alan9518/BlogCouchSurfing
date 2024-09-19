export type FeedPost = {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  image: string;
  userName: string;
};

// import { z } from 'zod';

// export const postSchema = z.object({
//   userId: z.number(),
//   id: z.number(),
//   title: z.string(),
//   content: z.string(),
//   createdAt: z.string(),
//   updateAt: z.string().nullable(),
//   image: z.string(),
// });

// export const feedPostSchema = z.object({
//   userId: z.number(),
//   id: z.number(),
//   title: z.string(),
//   content: z.string(),
//   createdAt: z.string(),
//   image: z.string(),
//   userName: z.string(),
// });

// export type Post = z.infer<typeof postSchema>;
// export type FeedPost = z.infer<typeof feedPostSchema>;
