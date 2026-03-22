'use client';

import React, { useEffect, useRef } from 'react';
import { projects } from '../app/assets';
import Image from 'next/image';

const Projects: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const currentIndex = useRef<number>(1);
  const lastTime = useRef<number>(0);
  const isPaused = useRef<boolean>(false);
  const isVisible = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  // No more hardcoded numbers here
  const slideWidth = useRef<number>(0);
  const AUTO_PLAY_INTERVAL = 3000;

  // Function to get the ACTUAL width of the viewport at this exact moment
  const updateMeasuredWidth = () => {
    if (viewportRef.current) {
      slideWidth.current = viewportRef.current.getBoundingClientRect().width;
    }
  };

  const moveCarousel = (transition: boolean = true): void => {
    if (!trackRef.current || slideWidth.current === 0) return;

    trackRef.current.style.transition = transition
      ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none';

    // Move by the actual measured width
    trackRef.current.style.transform = `translateX(-${slideWidth.current * currentIndex.current}px)`;
  };

  const resetAutoPlayTimer = () => {
    lastTime.current = performance.now();
  };

  const handleNext = (): void => {
    currentIndex.current++;
    moveCarousel(true);
    resetAutoPlayTimer();
  };

  const handlePrev = (): void => {
    currentIndex.current--;
    moveCarousel(true);
    resetAutoPlayTimer();
  };

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    // 1. Initial Measurement
    updateMeasuredWidth();

    // 2. Clone logic
    const slides = Array.from(track.children) as HTMLElement[];
    const firstClone = slides[0].cloneNode(true) as HTMLElement;
    const lastClone = slides[slides.length - 1].cloneNode(true) as HTMLElement;
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    // 3. Move to start position (Slide 1)
    moveCarousel(false);

    // 4. ResizeObserver: Recalculate width if window or element size changes
    const resizeObserver = new ResizeObserver(() => {
      updateMeasuredWidth();
      moveCarousel(false); // Snap to new position without sliding animation
    });
    resizeObserver.observe(viewport);

    const handleTransitionEnd = (): void => {
      const allSlides = track.children;
      if (currentIndex.current >= allSlides.length - 1) {
        currentIndex.current = 1;
        moveCarousel(false);
      } else if (currentIndex.current <= 0) {
        currentIndex.current = allSlides.length - 2;
        moveCarousel(false);
      }
    };

    const animate = (timestamp: number): void => {
      if (!lastTime.current) lastTime.current = timestamp;
      const elapsed = timestamp - lastTime.current;

      if (
        isVisible.current &&
        !isPaused.current &&
        elapsed >= AUTO_PLAY_INTERVAL
      ) {
        currentIndex.current++;
        moveCarousel(true);
        lastTime.current = timestamp;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible.current = entries[0].isIntersecting;
      },
      { threshold: 0.8 },
    );

    intersectionObserver.observe(viewport);
    track.addEventListener('transitionend', handleTransitionEnd);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      track.removeEventListener('transitionend', handleTransitionEnd);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      id='project'
      className='w-full h-auto px-[20px] lg:px-[200px] md:px-[100px] sm:px-[70px] bg-primary pt-5 pb-10 flex flex-col rounded-2xl'
    >
      <h2 className='text-center text-3xl font-semibold text-blue-600 mb-10'>
        My Projects
      </h2>

      <div className='relative w-full border-secondary border-2 mb-3'>
        <div className='w-full absolute top-1/2 -translate-y-1/2 z-10 flex flex-col items-center rounded-xl'>
          <div className='flex gap-4 justify-between flex-1 w-full px-2'>
            <button
              onClick={handlePrev}
              className='bg-secondary text-white h-10 w-10 rounded-full hover:bg-blue-700 transition-colors'
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className='bg-secondary text-white h-10 w-10 rounded-full transition-colors'
            >
              ❯
            </button>
          </div>
        </div>

        <div className='w-full flex justify-center items-center border border-white'>
          <div
            ref={viewportRef}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => {
              isPaused.current = false;
              resetAutoPlayTimer();
            }}
            className='relative overflow-hidden shadow-2xl w-full h-auto'
          >
            <div ref={trackRef} className='flex h-full will-change-transform'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='flex-none w-full h-full relative text-white bg-blue-500'
                >
                  <Image
                    src={project.src}
                    width={1898}
                    height={909}
                    alt={project.alt}
                  />
                  <div className='flex flex-col items-center gap-10 absolute top-1/2 left-1/2 -translate-1/2'>
                    <h3 className='text-header backdrop-blur-sm px-3 rounded-full font-bold text-secondary'>
                      {project.name}
                    </h3>
                    <a
                      href={project.href}
                      className={`inline-flex bg-secondary overflow-hidden px-4 h-10 items-center justify-center active:outline-1 outline-amber-950 font-semibold text-white relative group rounded-full shadow-lg`}
                    >
                      <span className='flex text-reading items-center justify-center text-nowrap shrink-0'>
                        Live Demo
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
