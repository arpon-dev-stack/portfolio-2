const Header = () => {
  return (
    <header className='h-[50px] w-full max-w-[900px] fixed top-1 left-1/2 -translate-x-1/2 flex justify-center px-[20px] items-center z-50'>
      <header className='w-full h-full flex justify-between shadow-lg px-[10px] items-center bg-alternative rounded-full'>
        <span className='text-[20px] text-blue-600 font-bold'>{'<A/D>'}</span>
        <nav className='flex gap-5'>
          <a
            href='#form'
            className={`flex bg-secondary overflow-hidden px-3 h-10 items-center justify-center active:outline-1 outline-amber-950 font-semibold text-white relative group rounded-full shadow-lg`}
          >
            <span className='flex items-center justify-center text-reading'>
              {"Let's Talk"}
            </span>
          </a>
        </nav>
      </header>
    </header>
  );
};

export default Header;
