import { ProfilePic } from '../User/ProfileInfo/ProfilePic';

export const FriendsList = () => {
  const friends = [1, 2, 3, 4, 5, 6];
  return (
    <section className="flex items-center  rounded-sm w-full p-4 gap-4">
      {friends.map((fiend) => {
        return (
          <ProfilePic
            profileId="7"
            showBorder={true}
            size="small"
            link="user"
          />
        );
      })}
    </section>
  );
};
