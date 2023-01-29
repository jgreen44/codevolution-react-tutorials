import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue('');
  };
  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };
  return { value, bind, reset };
};
