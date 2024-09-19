import Image from 'next/image';

interface PostTitleProps {
  createdDate: string;
  userName: string;
}

export const PostHeader = ({ userName, createdDate }: PostTitleProps) => {
  return (
    <div className="flex items-center justify-start py-1 gap-2">
      <Image
        src={'https://i.pravatar.cc/75?img=5'}
        alt={userName}
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-black text-md capitalize"> {userName} </span>
        <span className="text-xs text-gray-500 font-light">{createdDate}</span>
      </div>
    </div>
  );
};
