import React, { useEffect, useRef, useState } from 'react';

export const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef();
  useEffect(() => {
    // @ts-ignore
    interValRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interValRef.current);
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -<button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
    </div>
  );
};
