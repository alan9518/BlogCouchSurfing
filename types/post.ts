import { type SelectPost } from '@/db/schema';

export type FeedPost = Omit<
  SelectPost,
  'firstName' | 'lastName' | 'updateAt'
> & {
  userName: string;
};
