'use client';
import { trpc } from '@/app/_trpc/client';
import dynamic from 'next/dynamic';

interface DetailsProps {
  userId: number;
}

interface DetailsItemProps {
  detailLabel: string;
  detailData: string;
}

const DetailsError = dynamic(() =>
  import('@/components/User/Details/DetailsError').then(
    (mod) => mod.DetailsError
  )
);

const DetailsItemloader = () => {
  return (
    <div className="flex gap-2">
      <div
        className="animate-pulse bg-gray-200 rounded"
        style={{ width: 100, height: 10, borderRadius: '4px' }}
      />

      <div
        className="animate-pulse bg-gray-200 rounded"
        style={{ width: 100, height: 10, borderRadius: '4px' }}
      />
    </div>
  );
};

const DetailsItem = ({ detailLabel, detailData }: DetailsItemProps) => {
  return (
    <li>
      <span className="text-black font-semibold"> {detailLabel} </span>
      <span className="text-gray-600">{detailData}</span>
    </li>
  );
};

export const Details = ({ userId }: DetailsProps) => {
  const {
    data: userDetails,
    isError,
    isLoading,
  } = trpc.users.getUserById.useQuery({ userId: userId });

  if (isError) return <DetailsError />;

  return (
    <div className="w-full p-4">
      <ul className="flex flex-col items-start justify-between gap-2">
        {isLoading ? (
          <DetailsItemloader />
        ) : (
          <DetailsItem
            detailLabel="User name:"
            detailData={`${userDetails?.firstName} ${userDetails?.lastName} `}
          />
        )}

        {isLoading ? (
          <DetailsItemloader />
        ) : (
          <DetailsItem
            detailLabel="Email:"
            detailData={userDetails?.email || ''}
          />
        )}

        {isLoading ? (
          <DetailsItemloader />
        ) : (
          <DetailsItem
            detailLabel="Member since:"
            detailData={userDetails?.createdAt || ''}
          />
        )}
      </ul>
    </div>
  );
};
