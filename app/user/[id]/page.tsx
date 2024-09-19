import { UserPostsList } from '@/app/_shared/components/Posts/UserPostsList/PostsList';
import { ContentTabItem, ContentTabs } from '@/components/ContentTabs';
import { Details } from '@/components/User/Details/';

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;

  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: <Details userId={parseInt(id)} />,
    },
    {
      tabTitle: 'Posts',
      tabContent: <UserPostsList userId={parseInt(id)} />,
    },
  ];
  return (
    <section className="w-full bg-white p-4 overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">Profile</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <ContentTabs tabsData={tabsData} />
      </div>
    </section>
  );
}
