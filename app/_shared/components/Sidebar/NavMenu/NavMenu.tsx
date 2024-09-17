'use client';
import Link from 'next/link';

const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <li className="px-2 py-1 text-gray-700 transition-colors  hover:text-orangeAccent">
      <Link href={link}>{label}</Link>
    </li>
  );
};
export const NavMenu = () => {
  return (
    <ul className="flex flex-col p-2 gap-2">
      <NavItem label="Feed" link="/" />
      <NavItem label="My Profile" link="user/profile" />
      <NavItem label="Explore" link="comingSoon" />
      <NavItem label="Notifications" link="comingSoon" />
      <NavItem label="Settings" link="settings" />
    </ul>
  );
};
