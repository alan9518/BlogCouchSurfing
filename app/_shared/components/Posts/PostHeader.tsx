import Image from 'next/image';
import Link from 'next/link';

interface PostTitleProps {
  createdDate: string;
  userName: string;
  userId: number;
}

export const PostHeader = ({
  userName,
  createdDate,
  userId,
}: PostTitleProps) => {
  const profileLink = `user/${userId}`;
  return (
    <Link href={profileLink} className="w-full">
      <div className="flex items-center justify-start py-1 gap-2">
        <Image
          src={`https://i.pravatar.cc/75?img=${userId}`}
          alt={userName}
          width={30}
          height={30}
          className="rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-black text-md capitalize"> {userName} </span>
          <span className="text-xs text-gray-500 font-light">
            {createdDate}
          </span>
        </div>
      </div>
    </Link>
  );
};
