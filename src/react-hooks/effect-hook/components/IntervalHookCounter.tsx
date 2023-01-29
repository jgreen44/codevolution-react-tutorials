import React, { useEffect, useState } from 'react';

export const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCount(count + 1);
    };

    const interval = setInterval(tick, 1000);
    // this function replicates componentWillUnmount for cleanup
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
};
