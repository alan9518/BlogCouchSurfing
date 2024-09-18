import Image from 'next/image';
import Link from 'next/link';
interface ProfilePicProps {
  profileId: string;
  showBorder: boolean;
  size: 'normal' | 'small';
  link: string;
}
export const ProfilePic = ({
  profileId,
  showBorder,
  size,
  link,
}: ProfilePicProps) => {
  const picSize = size === 'normal' ? 75 : 40;
  return (
    <Link href={`/${link}/${profileId}`}>
      <div
        className={` ${showBorder ? 'border border-orangeAccent rounded-full p-2' : ''} `}
      >
        <Image
          src={`https://i.pravatar.cc/150?img=${profileId}`}
          alt="profile image"
          width={picSize}
          height={picSize}
          className="rounded-full"
        />
      </div>
    </Link>
  );
};
