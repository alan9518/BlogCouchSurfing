import Image from 'next/image';

import Link from 'next/link';

interface ProfilePicProps {
  profileId: number;
  showBorder: boolean;
  size: 'normal' | 'small';
  link: string;
  useLinkProfileId: boolean;
}
export const ProfilePic = ({
  profileId,
  showBorder,
  size,
  link,
  useLinkProfileId,
}: ProfilePicProps) => {
  const picSize = size === 'normal' ? 75 : 40;
  const profileUrl = `/${link}${useLinkProfileId ? `/${profileId}` : ''}`;

  return (
    <Link href={profileUrl}>
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
