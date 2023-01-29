import React, { useEffect, useState } from 'react';

export const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect - Updating document title ');
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>useEffect - Click {count} times</button>
    </div>
  );
};
