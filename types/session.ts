import { Session } from 'next-auth';

// Define your custom session interface
export interface CustomSession extends Session {
  user: {
    id: string; // Ensure this matches your needs
    email: string;
    name: string;
    image: string;
  };
}
