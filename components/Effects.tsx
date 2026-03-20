'use client';

import { useUltraLowPowerSpring } from '@/hooks/useSpringV2';
import { useRef } from 'react';

const ScrollBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useUltraLowPowerSpring(boxRef, 1);

  return (
    <section
      id='about'
      className='w-full flex h-auto bg-red-300 px-5 sm:px-10 sm:py-12 py-2'
      ref={boxRef}
    >
      <div
        className='w-full flex-1 flex flex-col pb-4 bg-gray-100 rounded-xl'
        style={{
          // Instead of JS template literals, use CSS variables:
          // This formula translates to: 0.5 + (0.5 * scrollProgress)
          transform: `scale(calc(0.5 + (var(--scroll-spring, 0) * 0.5)))`,
          willChange: 'transform',
        }}
      >
        <h2 className='text-center lg:text-4xl text-xl sm:text-3xl font-serif mt-4 font-semibold'>
          About Me
        </h2>
        {/* ... Rest of content ... */}
      </div>
    </section>
  );
};

export default ScrollBox;
