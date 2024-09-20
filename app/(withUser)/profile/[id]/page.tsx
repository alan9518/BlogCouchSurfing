import { ContentTabItem, ContentTabs } from '@/components/ContentTabs';
import { UserPostsList } from '@/components/Posts/UserPostsList';
import { Details } from '@/components/User/Details';

export default function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: <Details userId={parseInt(id, 10)} />,
    },
    {
      tabTitle: 'Posts',
      tabContent: <UserPostsList userId={parseInt(id, 10)} />,
    },
  ];
  return (
    <section className="pt-12 px-4 md:p-4 w-full bg-white  overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">My Profile</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <ContentTabs tabsData={tabsData} />
      </div>
    </section>
  );
}
