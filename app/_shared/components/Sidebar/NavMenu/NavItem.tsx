import Link from 'next/link';
export const NavItem = ({
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
