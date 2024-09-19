import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between py-4 px-2 bg-greyBase border gap-4 fixed top-0 md:hidden">
      <Link href="/feed">
        <h2 className="text-black font-bold ">Couch Surfing Blog</h2>
      </Link>

      <Link href={'/profile/1'}>
        <span className="text-orangeAccent">My Profile</span>
      </Link>
    </div>
  );
};
