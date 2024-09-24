import { Details } from '@/app/_shared/components/ProfileUser/Details';
import { AuthOptions } from '@/app/_shared/lib/authOptions';
import { ContentTabItem, ContentTabs } from '@/components/ContentTabs';
import { UserPostsList } from '@/components/Posts/UserPostsList';
import { getServerSession } from 'next-auth';

export default async function Profile() {
  const session = await getServerSession(AuthOptions);
  console.log('🚀 ~ Profile ~ session:', session);

  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: <Details userId={parseInt(session.user.id, 10)} />,
    },
    {
      tabTitle: 'Posts',
      tabContent: <UserPostsList userId={parseInt(session.user.id, 10)} />,
    },
  ];
  return (
    <section className="pt-12 px-4 md:p-4 w-full bg-white  overflow-y-auto h-dvh">
      <h2 className="text-2xl font-semibold mt-4">My Profile</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <ContentTabs tabsData={tabsData} />
      </div>
    </section>
  );
}
