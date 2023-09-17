// import Child from './components/class/Child';
// import Counter from './components/class/Counter';
// import Errorboundary from './components/class/ErrorBoundary';
// import Parent from './components/class/Parent';

import { Suspense, useCallback, useState, lazy } from 'react';
// import Items from './components/functional/Items';

const Items = lazy(() =>
  import('./components/functional/Items' /* webpackChunkName: "items" */)
);

function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      value: '',
    },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ]);

  const handleInputChange = useCallback(
    (id, value) => _handleInputChange(id, value),
    []
  );
  function _handleInputChange(id, value) {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            value,
          };
        }
        return item;
      })
    );
  }
  return (
    <div className='h-screen grid place-items-center'>
      <div className='w-[50rem]'>
        <p className='text-lg text-center font-bold'>
          Parents hold the state and passes it to items
        </p>
        <p className='text-center font-semibold text-slate-600'></p>
        <Suspense fallback={<Skeleton />}>
          <Items items={items} onChange={handleInputChange} />
        </Suspense>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className='grid grid-cols-3 gap-4 mt-6'>
      {Array(3)
        .fill('')
        .map((_, index) => (
          <div key={index} className='h-32 bg-slate-100 animate-pulse'></div>
        ))}
    </div>
  );
}
