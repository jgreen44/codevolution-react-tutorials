import React, { useReducer } from 'react';

// Simple State & Action
const initialState = 0;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return state.count + 1;
    case 'decrement':
      return state.count - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const ReducerCounterOne = (initialCount: any) => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};
