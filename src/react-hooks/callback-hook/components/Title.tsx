import React from 'react';

export const Title = React.memo(() => {
  // eslint-disable-next-line no-console
  console.log('Rendering Title');
  return <h2>useCallback Hook</h2>;
});
