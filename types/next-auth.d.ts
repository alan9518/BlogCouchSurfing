// next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Add any additional properties here
    email: string;
    name?: string | null;
    image?: string | null;
  }

  interface Session {
    user: User; // Ensure that the user includes your extended User type
  }

  interface JWT {
    id: string;
    email: string;
    // Add any other properties you might want to include
  }

  interface JWT {
    id: string;
    email: string;
    // Add any other properties you might want to include
  }
}
