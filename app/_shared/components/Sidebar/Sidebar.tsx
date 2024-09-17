import { ProfileCard } from '@/app/_shared/components/User/UserProfile';
import { NavMenu } from './NavMenu';
export const Sidebar = () => {
  return (
    <aside className="w-60 py-4 px-2 flex flex-col items-center h-full bg-greyBase border gap-4 sticky top-0">
      <h2 className="text-black font-bold ">Couch Surfing Social</h2>

      <div className="w-full flex flex-col p-2 gap-4">
        <ProfileCard />
        <NavMenu />
      </div>
    </aside>
  );
};
