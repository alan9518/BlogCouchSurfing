import {
  ContentTabItem,
  ContentTabs,
} from '@/app/_shared/components/ContentTabs';
import { Details } from '@/components/User/Details/';

export default function Profile() {
  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: <Details />,
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
