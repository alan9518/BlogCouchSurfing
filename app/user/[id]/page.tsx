import { ContentTabItem, ContentTabs } from '@/components/ContentTabs';
import { Details } from '@/components/User/Details/';
// import { DetailsError } from '@/components/User/Details/DetailsError';
import dynamic from 'next/dynamic';
import { serverClient } from '../../_trpc/serverClient';

const DetailsError = dynamic(() =>
  import('@/components/User/Details/DetailsError').then(
    (mod) => mod.DetailsError
  )
);

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const userDetails = await serverClient.users.getUserById.query({
    userId: parseInt(id),
  });
  console.log('🚀 ~ Profile ~ userDetails:', userDetails);

  const userPosts = await serverClient.posts.getPostsByUserId.query({
    userId: parseInt(id),
  });
  console.log('🚀 ~ Profile ~ userPosts:', userPosts);

  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: userDetails ? (
        <Details
          firstName={userDetails?.firstName}
          lastName={userDetails.lastName}
          email={userDetails.email}
          dateCreated={userDetails.createdAt}
        />
      ) : (
        <DetailsError />
      ),
    },
    {
      tabTitle: 'Posts',
      tabContent: 'null',
    },
  ];
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">My Profile</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <ContentTabs tabsData={tabsData} />
      </div>
    </section>
  );
}
