'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const Navbar = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  return (
    <div className="flex w-full justify-between py-4 px-2 bg-greyBase border gap-4 fixed top-0 md:hidden">
      <Link href="/feed" replace>
        <h2 className="text-black font-bold ">Couch Surfing Blog</h2>
      </Link>

      <Link href={`profile/${userId}`}>
        <span className="text-orangeAccent">My Profile</span>
      </Link>
    </div>
  );
};
