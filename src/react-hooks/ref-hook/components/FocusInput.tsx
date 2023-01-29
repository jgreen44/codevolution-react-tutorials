import React, { useEffect, useRef } from 'react';

export const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <a href={'/'} ref={inputRef} />
    </div>
  );
};
