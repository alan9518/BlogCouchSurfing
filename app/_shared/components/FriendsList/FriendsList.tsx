import { type SelectUser } from '@/db/schema';
import { ProfilePic } from '../User/ProfileInfo/ProfilePic';

interface FriendsListProps {
  friends: SelectUser[];
}

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <>
      <section className="flex items-center  rounded-sm w-full p-4 gap-4">
        {friends.map((friend) => {
          return (
            <ProfilePic
              key={`friend-${friend.id}`}
              profileId={friend.id}
              showBorder={true}
              size="small"
              link="user"
            />
          );
        })}
      </section>
    </>
  );
};
