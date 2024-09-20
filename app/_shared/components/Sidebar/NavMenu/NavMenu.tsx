'use client';

import { deleteCookie, getCookie } from '@/app/_shared/lib/cookie';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  link: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem = ({
  label,
  link,
  isActive,
  onClick = () => {},
}: NavItemProps) => (
  <li
    className={`px-2 py-1 text-gray-700 transition-colors  hover:text-orangeAccent ${isActive ? 'text-orangeAccent bg-slate-100 rounded-sm' : ''}`}
  >
    <Link href={link} onClick={onClick}>
      {label}
    </Link>
  </li>
);
export const NavMenu = () => {
  const pathName = usePathname();
  if (typeof document === 'undefined') return null;
  const currentUserIdFromCookies = getCookie('userId');
  const onLogoutClick = () => deleteCookie('userId');

  return (
    <ul className="flex flex-col p-2 gap-2">
      <NavItem
        label="Feed"
        link={`/feed?userId=${currentUserIdFromCookies}`}
        isActive={pathName === '/'}
      />
      <NavItem
        label="My Profile"
        link={`/profile/${currentUserIdFromCookies}`}
        isActive={pathName.includes('profile')}
      />
      <NavItem
        label="Log Out"
        link="/"
        onClick={onLogoutClick}
        isActive={pathName.includes('profile')}
      />
    </ul>
  );
};
