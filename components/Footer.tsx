import Contact from './Contact';
import { contact } from '../app/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <section
      id='contact'
      className='gap-5 items-center my-5 w-full flex flex-col px-[20px] sm:px-[60px]'
    >
      <div className='w-full flex gap-5 sm:flex-row flex-col-reverse'>
        <Contact />
        <div className='sm:w-1/2 w-full flex-1 self-stretch bg-white rounded-2xl p-6'>
          <h2 className='text-2xl font-bold mb-6'>Contact Me</h2>
          <div className='flex'>
            {contact.map((contact) => (
              <a href={contact.href} key={contact.id}>
                <Image
                  src={contact.src}
                  alt={contact.alt}
                  width={70}
                  height={70}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <span className='text-primary'>All right Resrved | Arpon Das </span>
    </section>
  );
};

export default Footer;
