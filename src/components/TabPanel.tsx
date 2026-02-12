import { type ReactNode } from 'react';

interface TabPanelProps {
  children?: ReactNode;
}

export function TabPanel({ children }: TabPanelProps) {
  return (
    <div className="flex flex-col bg-surface w-full h-full">
      <div className="yorha-separator">
        <div className="yorha-separator-line" />
        <div className="yorha-separator-dot" />
      </div>
      <div className="flex-1 overflow-y-scroll px-4 yorha-scrollbar">
        {children}
      </div>
      <div className="yorha-separator">
        <div className="yorha-separator-line" />
        <div className="yorha-separator-dot" />
      </div>
    </div>
  );
}
