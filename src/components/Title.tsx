import { useState, useEffect } from 'react';

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function scramble(
  target: string,
  onUpdate: (val: string) => void
): ReturnType<typeof setInterval> {
  let iteration = 0;
  const interval = setInterval(() => {
    const result = target
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (i < iteration) return target[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');
    onUpdate(result);
    if (iteration >= target.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
  return interval;
}

export function Title({ title = '', subtitle = '' }: TitleProps) {
  const [displayTitle, setDisplayTitle] = useState('');
  const [displaySubtitle, setDisplaySubtitle] = useState('');

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    if (title) {
      intervals.push(scramble(title, setDisplayTitle));
    }
    if (subtitle) {
      intervals.push(scramble(subtitle, setDisplaySubtitle));
    }
    return () => intervals.forEach(clearInterval);
  }, [title, subtitle]);

  return (
    <div className="flex flex-row items-baseline gap-2">
      <h1 className="font-yorha text-[48px] font-light tracking-[8px] text-primary text-shadow-yorha uppercase">
        {displayTitle}
      </h1>
      {subtitle && (
        <h3 className="font-yorha text-2xl font-light tracking-[0px] text-primary">
          -{displaySubtitle}
        </h3>
      )}
    </div>
  );
}
