'use client';
import { trpc } from '@/app/_trpc/client';
import dynamic from 'next/dynamic';

interface DetailsProps {
  userId: number;
}

const DetailsError = dynamic(() =>
  import('@/components/User/Details/DetailsError').then(
    (mod) => mod.DetailsError
  )
);

export const Details = ({ userId }: DetailsProps) => {
  const {
    data: userDetails,
    isError,
    isLoading,
  } = trpc.users.getUserById.useQuery({ userId: userId });

  if (isLoading) return 'loading details';

  if (isError) return <DetailsError />;

  return (
    <div className="w-full p-4">
      <ul className="flex flex-col items-start justify-between gap-2">
        <li>
          <span className="text-black font-semibold"> Full name: </span>
          <span className="text-gray-600">
            {userDetails?.firstName} {userDetails?.lastName}
          </span>
        </li>
        <li>
          <span className="text-black font-semibold"> Email: </span>
          <span className="text-gray-600"> {userDetails?.email} </span>
        </li>
        <li>
          <span className="text-black font-semibold"> Member since: </span>
          <span className="text-gray-600"> {userDetails?.createdAt} </span>
        </li>
      </ul>
    </div>
  );
};
