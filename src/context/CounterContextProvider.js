import { createContext, useReducer } from 'react';

const defaultValue = { value: 0 };
const CounterContext = createContext(defaultValue);

const COUNTER_ACTIONS_TYPE = {
  INCREASE_BY_ONE: 'increase_by_one',
  DECREASE_BY_ONE: 'decrease_by_one',
};
const counterReducer = (prevState, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS_TYPE.INCREASE_BY_ONE: {
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    }
    case COUNTER_ACTIONS_TYPE.DECREASE_BY_ONE: {
      return {
        ...prevState,
        value: prevState.value - 1,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default function CounterContextProvider({ children }) {
  const [counter, dispatch] = useReducer(counterReducer, defaultValue);
  console.log(counter);
  return (
    <CounterContext.Provider
      value={{
        counter,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, COUNTER_ACTIONS_TYPE };
