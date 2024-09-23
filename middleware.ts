import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  const { pathname } = req.nextUrl;

  // Paths that require authentication
  const protectedRoutes = ['/feed', '/blog', '/user', '/profile'];

  // If there is no token (session), redirect to login
  if (!token) {
    // If the user is trying to access protected routes, redirect to the login page
    if (protectedRoutes.includes(pathname)) {
      const loginUrl = new URL('/', req.url); // Redirect to login ("/")
      return NextResponse.redirect(loginUrl);
    }
  }

  // If the user has a valid session and is trying to access the login page, redirect to "/feed"
  if (token && pathname === '/') {
    const feedUrl = new URL('/feed', req.url);
    return NextResponse.redirect(feedUrl);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the paths the middleware should apply to
export const config = {
  matcher: ['/', '/feed', '/blog', '/user', '/profile'],
};
