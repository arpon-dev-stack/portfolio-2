import { skills } from '../app/assets';
import Image from 'next/image';

const About = () => {
  return (
    <section className='py-5 w-full min-h-screen flex flex-col overflow-hidden px-[20px] sm:px-[60px]'>
      <h1 className='text-center text-header font-semibold text-primary'>
        About
      </h1>
      <p className='mt-5 text-reading text-center text-primary'>
        I am arpon das from a small village in Kushtia, Bangladesh Arpon Das,
        and Currently I am pursuing a B.A. in Economics. My curiosity for web
        technology has provided me with the expertise and confidence to build
        high-performance MERN stack and React Native applications. I am
        passionate about using these technologies to develop solutions for
        real-world problems.{' '}
      </p>
      <div className='shrink-0 w-full flex flex-col items-center gap-10 justify-evenly'>
        <h2 className='text-center text-header text-primary mt-10 font-semibold'>
          My Skills
        </h2>
        <div className='flex-1 flex sm:gap-y-6 sm:gap-x-4 gap-x-[4px] gap-y-[10px] flex-wrap justify-center'>
          {skills.map((ele) => (
            <div
              className='flex max-w-[138px] justify-between items-center skill-card bg-alternative group rounded-xl flex-col gap-8 shadow-lg hover:scale-105 transition-all duration-100 p-2'
              key={ele.id}
            >
              <Image
                src={ele.src}
                width='96'
                height='96'
                alt={ele.alt}
                className='group-hover:scale-105 w-[60px]'
              />

              {/* Progress Bar Container */}
              <div className='h-3 w-full rounded-xl bg-primary flex overflow-hidden'>
                {/* Dynamic Progress Fill */}
                <div
                  className='bg-secondary h-full rounded-xl transition-all duration-500'
                  style={{ width: `${ele.gain}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
