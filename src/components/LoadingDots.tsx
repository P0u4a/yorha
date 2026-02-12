import { useState, useEffect } from 'react';

export function LoadingDots() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[1.5em] text-left opacity-80 font-yorha">
      {dots}
    </span>
  );
}
