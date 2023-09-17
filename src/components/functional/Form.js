import React from 'react';

export default function Form({ children, submitButtonLabel, onSubmit }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      {children}
      <div className='text-center mt-6'>
        <button
          type='submit'
          className='border-none tracking-wider capitalize  shadow shadow-slate-400 px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-white'
        >
          {submitButtonLabel}
        </button>
      </div>
    </form>
  );
}
