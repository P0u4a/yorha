import { type ReactNode } from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { IconSquare } from './IconSquare';

interface TabItem {
  label: string;
  value: string;
  children: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}

export function Tabs({ tabs, defaultValue }: TabsProps) {
  return (
    <BaseTabs.Root defaultValue={defaultValue ?? tabs[0]?.value}>
      <BaseTabs.List className="flex flex-row gap-[2px]">
        {tabs.map((tab) => (
          <BaseTabs.Tab
            key={tab.value}
            value={tab.value}
            className="yorha-gradient-slide flex items-center gap-2 py-1 px-4 border-none cursor-pointer font-yorha font-medium text-xs uppercase tracking-[2px]"
          >
            <IconSquare />
            <span>{tab.label}</span>
          </BaseTabs.Tab>
        ))}
      </BaseTabs.List>
      {tabs.map((tab) => (
        <BaseTabs.Panel key={tab.value} value={tab.value} className="mt-2">
          {tab.children}
        </BaseTabs.Panel>
      ))}
    </BaseTabs.Root>
  );
}
