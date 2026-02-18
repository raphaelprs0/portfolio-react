import React, { useEffect, useRef, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  from = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  to = { opacity: 1, transform: 'translate3d(0,0,0)' },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  // CORRECTION ICI : On découpe par caractère directement pour garder les espaces
  const letters = text.split('');
  
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Au lieu de vérifier une seule fois, on met à jour l'état en continu
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const [springs, api] = useSprings(
    letters.length,
    (i) => ({
      from,
      to: inView
        ? async (next: (arg0: any) => any) => {
          await next(to);
          if (i === letters.length - 1 && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : from,
      delay: i * delay,
      config: { mass: 1, tension: 170, friction: 26 },
    }),
    [inView, letters] // Ajout de letters aux dépendances
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: 'inline-block' }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {/* Si c'est un espace, on force un espace insécable pour qu'il ait une largeur */}
          {letters[index] === ' ' ? '\u00A0' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;