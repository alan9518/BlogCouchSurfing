import { type SelectUser } from '@/db/schema';

export type UserFriends = Omit<SelectUser, 'password'>;
