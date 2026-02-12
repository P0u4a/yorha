interface CursorProps {
  className?: string;
}

export function Cursor({ className }: CursorProps) {
  return (
    <svg
      viewBox="0 0 120 50"
      width="24"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="50,8 100,25 50,42 32,25" className="fill-primary" />
      <circle cx="52" cy="25" r="5" className="fill-muted" />
      <circle cx="100" cy="12" r="2.5" className="fill-primary" />
      <circle cx="100" cy="38" r="2.5" className="fill-primary" />
    </svg>
  );
}
