import Image from 'next/image';
export const PostHeader = () => {
  return (
    <div className="flex items-center justify-around py-1 gap-2">
      <Image
        src={'https://i.pravatar.cc/75?img=5'}
        alt="profile image"
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-black text-md"> Cristina L </span>
        <span className="text-xs text-gray-500 font-light"> 09/15/2024 </span>
      </div>
      <span className="ml-auto">...</span>
    </div>
  );
};
