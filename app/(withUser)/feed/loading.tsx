import { FriendsListLoader } from '@/components/FriendsList/FriendsListLoader';
import { PostLoaderList } from '@/components/Posts/PostLoader/PostLoaderList';
export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-4 h-full w-5/6 mx-auto my-4">
      <FriendsListLoader />
      <PostLoaderList />
    </div>
  );
}
