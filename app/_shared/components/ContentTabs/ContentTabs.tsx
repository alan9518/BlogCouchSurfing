'use client';
import { useMemo, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export type ContentTabItem = {
  tabTitle: string | JSX.Element;
  tabContent: string | JSX.Element;
};
type ContentTabsProps = {
  tabsData: ContentTabItem[];
  onSelectCallback?: (tabIndex: number) => void;
};

export const ContentTabs = ({
  tabsData,
  onSelectCallback,
}: ContentTabsProps) => {
  const tabsHeaders = useMemo(
    () => tabsData.map((tabItem: ContentTabItem) => tabItem.tabTitle),
    tabsData
  );
  const tabsPanels = useMemo(
    () => tabsData.map((tabItem: ContentTabItem) => tabItem.tabContent),
    tabsData
  );
  const [tabIndex, setTabIndex] = useState<number>(0);

  const onSelectTab = (index: number) => {
    setTabIndex(index);
    if (onSelectCallback) onSelectCallback(index);
  };

  if (!tabsHeaders || !tabsPanels) return null;

  return (
    <Tabs selectedIndex={tabIndex} onSelect={onSelectTab} className={'w-full'}>
      <TabList className="p-x-2 flex w-full justify-start space-x-2 border-b border-solid border-greyBorder">
        {tabsHeaders.map((tabHeader, index) => (
          <Tab
            key={`tabHeader-${index}`}
            className={`w-min-32 mx-1 px-4 py-2 ${
              tabIndex === index
                ? 'border-b-2 border-solid border-primary font-semibold text-darkGreyText'
                : 'font-normal text-greySubtitle'
            } transition-border cursor-pointer duration-100 ease-in`}
          >
            <h6 className="tab-title">{tabHeader}</h6>
          </Tab>
        ))}
      </TabList>
      {tabsPanels.map((tabPanel: string | JSX.Element, index: number) => (
        <TabPanel
          key={`tabPanel-${index}`}
          className="rounded-md-lg w-full bg-white "
        >
          {tabPanel}
        </TabPanel>
      ))}
    </Tabs>
  );
};
