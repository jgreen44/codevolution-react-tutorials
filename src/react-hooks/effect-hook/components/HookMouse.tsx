import React, { useEffect, useState } from 'react';

import { ILogMousePosition } from '../../types';

export const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e: ILogMousePosition) => {
    // eslint-disable-next-line no-console
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      // eslint-disable-next-line no-console
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
};
