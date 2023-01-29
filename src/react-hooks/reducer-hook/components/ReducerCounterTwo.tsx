import React, { useReducer } from 'react';

interface IState {
  firstCounter: number;
  secondCounter: number;
}
interface IAction {
  type: any;
  value?: number;
}
// Redux Pattern
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value! };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value! };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value! };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value! };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const ReducerCounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div>Second Counter = {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>
      </div>
    </div>
  );
};
