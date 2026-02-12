export function SpinLoadingIcon() {
  return (
    <div className="inline-flex items-center justify-center w-[40px] h-[40px]">
      <div className="relative w-[40px] h-[40px] animate-[rotating_1s_linear_infinite]">
        {/* Close ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-primary" />
        {/* Outer ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border-[6px] border-primary opacity-30" />
        {/* Spin ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border-[3px] border-transparent border-r-primary" />
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full bg-primary" />
      </div>
    </div>
  );
}
