import Header from '@/components/Header';
import { carattere } from './ui/fonts';
import Image from 'next/image';
import arpon from '../public/arpon.webp';
import Hero from '@/components/Hero';

const Page = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <section className='w-full min-h-screen'></section>
      </main>
    </>
  );
};

export default Page;
