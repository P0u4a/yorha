import { Bar } from "./Bar";

interface FooterProps {
  text?: string;
}

export function Footer({ text = "" }: FooterProps) {
  return (
    <footer className="flex flex-row items-stretch w-full bg-surface min-h-[48px]">
      <Bar tone="primary" />
      <div className="flex items-center flex-1 px-4">
        <span className="font-yorha text-2xl font-normal text-primary tracking-[1px]">
          {text}
        </span>
      </div>
    </footer>
  );
}
