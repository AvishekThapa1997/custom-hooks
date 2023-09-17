import { CounterContext } from '../context/CounterContextProvider';
import { useContext } from 'react';

function useCounter() {
  const { counter, dispatch: counterDispatcher } = useContext(CounterContext);
  return { counter, counterDispatcher };
}

export default useCounter;
