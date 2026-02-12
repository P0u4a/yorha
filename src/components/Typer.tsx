import { useState, useEffect, useRef } from 'react';

interface TyperProps {
  text?: string;
  speed?: number;
  onComplete?: () => void;
}

export function Typer({ text = '', speed = 10, onComplete }: TyperProps) {
  const [displayedText, setDisplayedText] = useState('');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let charIndex = 0;
    setDisplayedText('');

    function typeNext() {
      if (charIndex < text.length) {
        charIndex++;
        setDisplayedText(text.slice(0, charIndex));
        timeout = setTimeout(typeNext, speed);
      } else {
        onCompleteRef.current?.();
      }
    }

    let timeout = setTimeout(typeNext, speed);
    return () => clearTimeout(timeout);
  }, [text, speed]);

  const lines = displayedText.split('\n');

  return (
    <div className="font-yorha text-sm text-foreground">
      {lines.map((line, i) => (
        <p
          key={i}
          className="relative inline-block animate-[glitch_1.5s_infinite] m-0 leading-[1.6]"
          data-text={line}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
