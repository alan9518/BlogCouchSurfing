'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const NavItem = ({
  label,
  link,
  isActive,
}: {
  label: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={`px-2 py-1 text-gray-700 transition-colors  hover:text-orangeAccent ${isActive ? 'text-orangeAccent bg-slate-100 rounded-sm' : ''}`}
    >
      <Link href={link}>{label}</Link>
    </li>
  );
};
export const NavMenu = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  return (
    <ul className="flex flex-col p-2 gap-2">
      <NavItem label="Feed" link="/feed" isActive={pathName === '/'} />
      <NavItem
        label="My Profile"
        link={`profile/${userId}`}
        isActive={pathName.includes('profile')}
      />
    </ul>
  );
};
