import { useState } from 'react';

export const useCounter = (initialCount = 0, value: number) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + value);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - value);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return { count, increment, decrement, reset };
};
