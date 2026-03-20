import Image from 'next/image';
import { carattere } from '@/app/ui/fonts';
import arpon from '../public/arpon.webp';
import Join from './Link';

const Hero = () => {
  return (
    <section className='px-[20px] sm-px-[60px] pt-[80px] gap-20 w-full min-h-screen flex flex-col justify-between'>
      <div className='active:outline-1 outline-amber-950 sm:hidden flex fixed bottom-7 px-5 text-[20px] items-center justify-center text-white left-1/2 -translate-x-1/2 h-10 bg-secondary group overflow-hidden z-50'>
        <span>Download CV</span>
        <div className='w-full z-0 aspect-square absolute top-full rounded-full group-hover:top-1/5 left-0 group-active:top-1/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] transition-all duration-700 bg-amber-950'></div>
      </div>
      <div className='flex sm:flex-row flex-col-reverse items-center justify-end sm:justify-between sm:items-start'>
        <div className='flex flex-col'>
          <span
            className={`${carattere.className} antialiased sm:text-[120px] text-[90px]`}
          >
            Welcome
          </span>
          <span className='text-[30px]'>I am Arpon</span>
          <span className='text-[35px] max-w-[500px]'>
            Focused on building creative{' '}
            <strong className='text-blue-600'>MERN</strong> and
            <strong className={`text-blue-600`}> React Native</strong>{' '}
            Application.
          </span>
          <p className='text-[20px] max-w-[500px]'>
            Years ago for the curiosity of exploring web technology i found my
            self on it and despite of all uncertainty i love the most to do it.
          </p>
        </div>
        <Image
          src={arpon}
          width={200}
          height={300}
          alt='arpon'
          className='rounded-full bg-gray-200'
        />
      </div>
    </section>
  );
};

export default Hero;
