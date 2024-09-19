import { ProfileMetrics } from '../ProfileMetrics';
import { ProfilePic } from './ProfilePic';
export const ProfileInfo = () => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center mb-4">
        <ProfilePic
          profileId={1}
          showBorder={true}
          size="normal"
          link="profile"
        />
        <h2 className="text-black font-semibold">Alan Medina </h2>
        <span className="text-gray-500 text-sm"> @alan95 </span>
      </div>

      <ProfileMetrics />
    </>
  );
};
