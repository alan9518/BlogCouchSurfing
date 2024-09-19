import Link from 'next/link';
import { ProfileInfo } from '../User/ProfileInfo';
import { NavMenu } from './NavMenu';
export const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-60 py-4 px-2  flex-col items-center h-full bg-greyBase border gap-4 sticky top-0">
      <Link href="feed">
        <h2 className="text-black font-bold ">Couch Surfing Blog</h2>
      </Link>

      <div className="w-full flex flex-col p-2 gap-4">
        <ProfileInfo />
        <NavMenu />
      </div>
    </aside>
  );
};
