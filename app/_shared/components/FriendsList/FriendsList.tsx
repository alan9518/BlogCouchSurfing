import { UserFriends } from '@/types/users';
import { ProfilePic } from '../User/ProfileInfo/ProfilePic';

interface FriendsListProps {
  friends: UserFriends[];
}

export const FriendsList = ({ friends }: FriendsListProps) => (
  <section className="flex items-center  rounded-sm w-full p-4 gap-4">
    {friends.map((friend) => (
      <ProfilePic
        key={`friend-${friend.id}`}
        profileId={friend.id}
        showBorder
        size="small"
        link="user"
      />
    ))}
  </section>
);
