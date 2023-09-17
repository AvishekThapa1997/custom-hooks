import useRenderCounter from '../../hooks/useRenderCounter';
import React, { useRef } from 'react';

export default function Items({ items, onChange }) {
  return (
    <div className='grid grid-cols-3 gap-4 mt-6'>
      {items.map((item) => {
        return <Item key={item.id} onChange={onChange} {...item} />;
      })}
    </div>
  );
}

const Item = React.memo(({ id, value, onChange }) => {
  const renderCount = useRenderCounter();
  return (
    <div className='border-2 border-slate-400 p-4'>
      <p className='text-red-500 font-bold uppercase tracking-wider'>
        re-render - {renderCount}
      </p>
      <label htmlFor={id}>item</label>
      <div className='border-2 mt-2 p-1'>
        <input
          type='text'
          id={id}
          className='outline-none'
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </div>
    </div>
  );
});
// function Item({ id, value, onChange }) {
//   const renderCounter = useRef(0);
//   return (

//   );
// }
