import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Page = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <section className='w-full min-h-screen flex flex-col overflow-hidden px-[20px] sm-px-[60px]'>
          <h1 className='text-center text-[35px] px-[20px] sm-px-[60px] font-bold text-blue-600'>
            About
          </h1>
          <p className='mt-5 text-[20px] text-center'>
            My name irom a small village in Kushtia, Bangladesh Arpon Das, and I
            am f. Currently, I am pursuing a B.A. in Economics. My curiosity for
            web technology has provided me with the expertise and confidence to
            build high-performance MERN stack and React Native applications. I
            am passionate about using these technologies to develop solutions
            for real-world problems.{' '}
          </p>
          <div className='shrink-0 w-full flex flex-col items-center gap-10 justify-evenly'>
            <h2 className='text-center text-[35px] font-bold text-blue-600 mt-10'>
              My Skills
            </h2>
            <div className='flex-1 flex sm:gap-4 gap-3 flex-wrap justify-center'>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
              <div className='w-32 h-32 border'></div>
            </div>
          </div>
        </section>
        <section className='w-full min-h-screen border'></section>
      </main>
    </>
  );
};

export default Page;
