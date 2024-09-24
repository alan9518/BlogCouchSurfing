import { Suspense } from 'react';
import { ProfileInfo } from '../ProfileUser/ProfileInfo';
import { NavMenu } from './NavMenu';
import { NavMenuLoader } from './NavMenu/NavMenuLoader';

export const Sidebar = async () => (
  <aside className="hidden md:flex md:w-60 py-4 px-2  flex-col items-center h-full bg-greyBase border gap-4 sticky top-0">
    <h2 className="text-black font-bold ">Couch Surfing Blog</h2>

    <div className="w-full flex flex-col p-2 gap-4">
      <Suspense fallback={<NavMenuLoader />}>
        <ProfileInfo />
        <NavMenu />
      </Suspense>
    </div>
  </aside>
);
