import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Page;
