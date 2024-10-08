import { AuthOptions } from '@/app/_shared/lib/authOptions';
import { serverClient } from '@/app/_trpc/serverClient';
import { getServerSession } from 'next-auth';

import { ProfilePic } from './ProfilePic';

export const ProfileInfo = async () => {
  const session = await getServerSession(AuthOptions);

  const profileInfo = await serverClient.users.getUserById.query({
    userId: parseInt(session?.user?.id || '0', 10),
  });

  if (!profileInfo) return null;

  // Render the profile information
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <ProfilePic
        profileId={profileInfo.id}
        showBorder
        size="normal"
        link="profile"
        useLinkProfileId={false}
      />
      <h2 className="text-black font-semibold capitalize">
        {profileInfo.firstName} {profileInfo.lastName}
      </h2>
      <span className="text-gray-500 text-sm"> {profileInfo.email} </span>
    </div>
  );
};
