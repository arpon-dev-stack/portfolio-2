import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Page = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <section className='w-full min-h-screen px-[20px] sm-px-[60px] flex flex-col overflow-hidden'>
          <h1 className='text-center text-[35px] font-bold text-blue-600'>
            About
          </h1>
          <p className='mt-5 text-[20px] text-center'>
            My name is Arpon Das, and I am from a small village in Kushtia,
            Bangladesh. Currently, I am pursuing a B.A. in Economics. My
            curiosity for web technology has provided me with the expertise and
            confidence to build high-performance MERN stack and React Native
            applications. I am passionate about using these technologies to
            develop solutions for real-world problems.{' '}
          </p>
          <div className='flex-1 w-full flex flex-col items-center justify-evenly'>
            <h2 className='text-center text-[35px] font-bold text-blue-600 mt-10'>
              My Skills
            </h2>
            <div className='w-full flex-1 flex items-center'>
              <div className='h-24 w-full relative'>
                <div className='h-24 w-[calc(100vw+100px)] bg-alternative relative left-1/2 -translate-x-1/2 -rotate-2 flex items-center animate-marquee'>
                  <li className='marquee-item'>🚀 JavaScript</li>
                  <li className='marquee-item'>🎨 CSS3</li>
                  <li className='marquee-item'>📦 HTML5</li>
                  <li className='marquee-item'>⚡ React</li>
                  <li className='marquee-item'>💎 React Native</li>
                  <li className='marquee-item'>💎 Nextjs</li>
                  <li className='marquee-item'>💎 Nodejs</li>
                  <li className='marquee-item'>💎 Mongodb</li>
                  <li className='marquee-item'>💎 PostgreSql</li>
                  <li className='marquee-item'>💎 Redux</li>

                  <li className='marquee-item'>🚀 JavaScript</li>
                  <li className='marquee-item'>🎨 CSS3</li>
                  <li className='marquee-item'>📦 HTML5</li>
                  <li className='marquee-item'>⚡ React</li>
                  <li className='marquee-item'>💎 React Native</li>
                  <li className='marquee-item'>💎 Nextjs</li>
                  <li className='marquee-item'>💎 Nodejs</li>
                  <li className='marquee-item'>💎 Mongodb</li>
                  <li className='marquee-item'>💎 PostgreSql</li>
                  <li className='marquee-item'>💎 Redux</li>
                </div>
                <div className='h-24 w-[calc(100vw+100px)] absolute top-0 left-1/2 -translate-x-1/2 bg-secondary rotate-10 flex items-center'>
                  <li className='marquee-item'>🚀 JavaScript</li>
                  <li className='marquee-item'>🎨 CSS3</li>
                  <li className='marquee-item'>📦 HTML5</li>
                  <li className='marquee-item'>⚡ React</li>
                  <li className='marquee-item'>💎 React Native</li>
                  <li className='marquee-item'>💎 Nextjs</li>
                  <li className='marquee-item'>💎 Nodejs</li>
                  <li className='marquee-item'>💎 Mongodb</li>
                  <li className='marquee-item'>💎 PostgreSql</li>
                  <li className='marquee-item'>💎 Redux</li>

                  <li className='marquee-item'>🚀 JavaScript</li>
                  <li className='marquee-item'>🎨 CSS3</li>
                  <li className='marquee-item'>📦 HTML5</li>
                  <li className='marquee-item'>⚡ React</li>
                  <li className='marquee-item'>💎 React Native</li>
                  <li className='marquee-item'>💎 Nextjs</li>
                  <li className='marquee-item'>💎 Nodejs</li>
                  <li className='marquee-item'>💎 Mongodb</li>
                  <li className='marquee-item'>💎 PostgreSql</li>
                  <li className='marquee-item'>💎 Redux</li>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full min-h-screen border'></section>
      </main>
    </>
  );
};

export default Page;
