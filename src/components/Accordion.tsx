import { type ReactNode } from 'react';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';

interface AccordionProps {
  title?: string;
  children?: ReactNode;
}

export function Accordion({ title = '', children }: AccordionProps) {
  return (
    <BaseAccordion.Root className="w-full">
      <BaseAccordion.Item className="group">
        <BaseAccordion.Header>
          <BaseAccordion.Trigger className="yorha-gradient-slide flex items-center gap-2 w-full py-2 px-4 border-none cursor-pointer font-yorha font-medium text-[18px] tracking-[1px] list-none [&::-webkit-details-marker]:hidden">
            <span className="yorha-toggle-icon" />
            <span className="flex-1 text-left">{title}</span>
          </BaseAccordion.Trigger>
        </BaseAccordion.Header>
        <BaseAccordion.Panel className="p-4">
          {children}
        </BaseAccordion.Panel>
      </BaseAccordion.Item>
    </BaseAccordion.Root>
  );
}
