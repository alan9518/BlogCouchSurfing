import Image from 'next/image';
import { ProfileMetrics } from '../ProfileMetrics';
export const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center mb-4">
        <div className="border border-orangeAccent rounded-full p-2">
          <Image
            src={'https://i.pravatar.cc/150?img=3'}
            alt="profile image"
            width={75}
            height={75}
            className="rounded-full"
          />
        </div>
        <h2 className="text-black font-semibold">Alan Medina </h2>
        <span className="text-gray-500 text-sm"> @alan95 </span>
      </div>

      <ProfileMetrics />
    </>
  );
};
