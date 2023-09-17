import { increaseCounter } from '../../context/counterAction';
import useCounter from '../../hooks/useCounter';
import React from 'react';

export default function Child() {
  const { counter, counterDispatcher } = useCounter();
  console.log('CHILD');
  return (
    <div>
      <button
        onClick={(e) => {
          counterDispatcher(increaseCounter());
        }}
        className='bg-slate-500 rounded px-4 py-2 text-white'
      >
        Click Me
      </button>
      <p>Count - {counter.value}</p>
    </div>
  );
}
