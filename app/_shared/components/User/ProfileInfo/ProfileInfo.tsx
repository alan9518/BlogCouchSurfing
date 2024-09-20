'use client';
import { trpc } from '@/app/_trpc/client';
import { useSearchParams } from 'next/navigation';
import { ProfileInfoLoader } from './ProfileInfoLoader';
import { ProfilePic } from './ProfilePic';

export const ProfileInfo = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const {
    data: profileInfo,
    isLoading,
    isError,
  } = trpc.users.getUserById.useQuery({
    userId: userId ? parseInt(userId) : 1,
  });

  if (isError) return null;

  if (isLoading) return <ProfileInfoLoader />;

  return (
    <>
      <div className="flex flex-col items-center  justify-center mb-4">
        <ProfilePic
          profileId={profileInfo?.id || 1}
          showBorder={true}
          size="normal"
          link="profile"
        />
        <h2 className="text-black font-semibold capitalize">
          {profileInfo?.firstName} {profileInfo?.lastName}{' '}
        </h2>
        <span className="text-gray-500 text-sm"> {profileInfo?.email} </span>
      </div>

      {/* <ProfileMetrics /> */}
    </>
  );
};
