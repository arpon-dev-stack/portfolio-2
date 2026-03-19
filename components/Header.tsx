import Join from '@/components/Link';

const Header = () => {
  return (
    <header className='h-[60px] w-full max-w-[1400px] fixed top-0 left-1/2 -translate-x-1/2 flex justify-between px-[20px] shadow-sm items-center bg-white'>
      <span className='text-[35px] text-blue-600 font-bold'>{'<A/D>'}</span>
      <nav className='flex gap-5'>
        <Join text="Let's Talk" link='#contact' showMob={true} />
        <Join text='My CV' link='#mycv' showMob={false} />
      </nav>
    </header>
  );
};

export default Header;
