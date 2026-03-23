'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'
  >('IDLE');

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string, // Replace with your Service ID
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // Replace with your Template ID
          formRef.current,
          process.env.NEXT_PUBLIC_KEY as string, // Replace with your Public Key
        )
        .then(() => {
          setStatus('SUCCESS');
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('ERROR');
        });
    }
  };

  return (
    <section className='sm:w-1/2 w-full mx-auto p-6 bg-slate-800 rounded-2xl'>
      <h2 className='text-2xl font-bold text-white mb-6'>Message Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <div>
          <label className='block text-slate-300 text-sm mb-1'>Your Name</label>
          <input
            type='text'
            name='from_name' // Match this to your EmailJS template variable
            required
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-slate-300 text-sm mb-1'>
            Email Address
          </label>
          <input
            type='email'
            name='reply_to' // Match this to your EmailJS template variable
            required
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-slate-300 text-sm mb-1'>Message</label>
          <textarea
            name='message' // Match this to your EmailJS template variable
            required
            rows={4}
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500'
          />
        </div>

        <button
          type='submit'
          disabled={status === 'SENDING'}
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition-all disabled:opacity-50'
        >
          {status === 'SENDING' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'SUCCESS' && (
          <p className='text-green-400 text-sm'>
            Email sent directly to my inbox!
          </p>
        )}
        {status === 'ERROR' && (
          <p className='text-red-400 text-sm'>
            Failed to send. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
