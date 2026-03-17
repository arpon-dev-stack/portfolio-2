import Join from '@/components/Link';

const Header = () => {
  return (
    <header className='h-[70px] w-full flex justify-between px-[20px] shadow-sm items-center'>
      <span className='text-[40px] text-blue-600 font-bold'>{'<A/D>'}</span>
      <nav className='flex gap-5'>
        <Join text="Let's Talk" link='#contact' showMob={true} />
        <Join text='My Cv' link='#mycv' showMob={false} />
      </nav>
    </header>
  );
};

export default Header;
