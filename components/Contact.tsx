'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<
    'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'
  >('IDLE');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to a plain object to satisfy TypeScript
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // Now passing a clean, typed object
        body: new URLSearchParams(data).toString(),
      });

      setStatus('SUCCESS');
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <section className='sm:w-1/2 w-full mx-auto p-6 bg-slate-800 rounded-2xl shadow-xl'>
      <h2 className='text-2xl font-bold text-white mb-6'>Message Me</h2>

      <form
        name='portfolio-contact'
        onSubmit={handleSubmit}
        data-netlify='true'
        className='flex flex-col gap-4'
      >
        {/* Hidden input is crucial for React/Netlify integration */}
        <input type='hidden' name='form-name' value='portfolio-contact' />

        <div>
          <label className='block text-slate-300 text-sm mb-1'>Your Name</label>
          <input
            type='text'
            name='name'
            required
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 outline-none'
          />
        </div>

        <div>
          <label className='block text-slate-300 text-sm mb-1'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            required
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 outline-none'
          />
        </div>

        <div>
          <label className='block text-slate-300 text-sm mb-1'>Message</label>
          <textarea
            name='message'
            required
            rows={4}
            className='w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 outline-none'
          />
        </div>

        <button
          type='submit'
          disabled={status === 'SENDING'}
          className={`py-2 rounded-lg font-bold transition-all ${
            status === 'SUCCESS'
              ? 'bg-green-600'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {status === 'SENDING'
            ? 'Sending...'
            : status === 'SUCCESS'
              ? 'Message Sent!'
              : 'Send Message'}
        </button>

        {status === 'ERROR' && (
          <p className='text-red-400 text-sm'>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
