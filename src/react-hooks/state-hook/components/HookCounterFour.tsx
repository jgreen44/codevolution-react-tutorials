import React, { useState } from 'react';

import { IHookCounterFour } from '../../types';

export const HookCounterFour = () => {
  const [items, setItems] = useState<IHookCounterFour[]>([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
