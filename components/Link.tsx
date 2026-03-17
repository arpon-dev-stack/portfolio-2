const Link = ({
  link,
  text,
  showMob,
}: {
  link: string;
  text: string;
  showMob: boolean;
}) => {
  return (
    <a
      href={link}
      className={`${showMob ? 'block' : 'hidden sm:block'} bg-blue-600 overflow-hidden px-3 py-2 active:outline-1 outline-amber-950 font-semibold text-white relative group`}
    >
      <span className='relative z-10'>{text}</span>
      <div className='w-full z-0 aspect-square absolute top-full rounded-full group-hover:top-1/5 left-0 group-active:top-1/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] transition-all duration-700 bg-amber-950'></div>
    </a>
  );
};

export default Link;
