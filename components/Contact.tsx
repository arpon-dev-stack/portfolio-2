import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className='sm:w-1/2 w-full mx-auto p-6 bg-slate-800 rounded-2xl'>
      <h2 className='text-2xl font-bold text-white mb-6'>Message Me</h2>

      {/* IMPORTANT: 
        1. 'name' is how Netlify identifies this specific form in your dashboard.
        2. 'data-netlify="true"' tells Netlify to handle the backend.
      */}
      <form
        name='portfolio-contact'
        method='POST'
        data-netlify='true'
        className='flex flex-col gap-4'
      >
        {/* You MUST include this hidden input for React apps */}
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
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition-all'
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
