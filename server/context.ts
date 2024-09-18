// import * as trpc from '@trpc/server';
import { inferAsyncReturnType } from '@trpc/server';

export const createContext = async () => {
  // You can add your database connection, auth check, etc.
  return {};
};

// inferAsyncReturnType helps infer the return type of createContext
export type Context = inferAsyncReturnType<typeof createContext>;
