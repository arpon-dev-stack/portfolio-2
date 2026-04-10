import Image from 'next/image';
import arpon from '../public/arpon.webp';

const Hero = () => {
  return (
    <section className='px-[20px] sm-px-[60px] pt-[80px] gap-20 w-full min-h-screen flex flex-col justify-between sm:pb-40 pb-10 rounded-b-3xl bg-primary'>
      <div className=''>
        <div className='flex justify-center'>
          <div className='flex flex-col items-center'>
            <Image
              src={arpon}
              width={100}
              height={150}
              alt='arpon'
              className='rounded-full bg-gray-200 self-center sm:w-[150px]'
            />
            <p className='mt-1 font-semibold text-secondary grow-0 self-center text-[20px]'>
              Arpon Das
            </p>
          </div>
        </div>
        <div className='mt-[10px]'>
          <div className='flex flex-col'>
            <span className='text-header text-center'>
              Focused on building creative{' '}
              <strong className='text-blue-600'>MERN</strong>.
            </span>
            <p className='text-reading text-center mt-3'>
              Years ago for the curiosity of exploring web technology i found my
              self on it and despite of all uncertainty i love the most to do
              it.
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 justify-center flex-wrap items-start'>
        <a
          href='https://drive.google.com/uc?export=download&id=1jyTiRHhupO1662VDqGIFzJyxQA2ULObW'
          download='Arpon_Das_Resume.pdf'
          className={`inline-flex bg-secondary overflow-hidden px-4 h-10 items-center justify-center active:outline-1 outline-amber-950 font-semibold text-white relative group rounded-full shadow-lg`}
        >
          <span className='flex items-center justify-center text-nowrap shrink-0 text-reading'>
            {'Downlaod CV'}
          </span>
        </a>
        <a
          href='#project'
          className={`inline-flex bg-primary border-secondary border-2 overflow-hidden px-4 h-10 items-center justify-center active:outline-1 outline-amber-950 font-semibold text-secondary relative group rounded-full shadow-lg`}
        >
          <span className='flex text-reading items-center justify-center'>
            {'Projects'}
          </span>
        </a>
        <a
          href='#contact'
          className={`inline-flex bg-primary border-secondary border-2 overflow-hidden px-4 h-10 items-center justify-center active:outline-1 outline-amber-950 font-semibold text-secondary relative group rounded-full shadow-lg`}
        >
          <span className='flex items-center text-reading justify-center'>
            {'Contacts'}
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
