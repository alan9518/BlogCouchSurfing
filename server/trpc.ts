import { initTRPC } from '@trpc/server';

const trpcInstance = initTRPC.create();

export const { router } = trpcInstance;
export const publicProcedure = trpcInstance.procedure;
export const { createCallerFactory } = trpcInstance;
