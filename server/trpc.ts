import { initTRPC } from '@trpc/server';

const trpcInstance = initTRPC.create();

export const router = trpcInstance.router;
export const publicProduce = trpcInstance.procedure;
export const createCallerFactory = trpcInstance.createCallerFactory;
