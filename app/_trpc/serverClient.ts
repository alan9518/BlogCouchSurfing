import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from '@/server/routers/appRouter';

const URL =
  `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc` ||
  'http://localhost:3000/api/trpc';

export const serverClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: URL,
    }),
  ],
});
