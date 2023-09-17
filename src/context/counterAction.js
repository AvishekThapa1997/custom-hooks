const { COUNTER_ACTIONS_TYPE } = require('./CounterContextProvider');

function increaseCounter() {
  return {
    type: COUNTER_ACTIONS_TYPE.INCREASE_BY_ONE,
  };
}

function decreaseCounter() {
  return {
    type: COUNTER_ACTIONS_TYPE.DECREASE_BY_ONE,
  };
}

export { increaseCounter, decreaseCounter };
