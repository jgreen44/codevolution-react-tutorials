import React from 'react';

type PropsType = {
  handleClick: () => void;
  children: string;
};
export const Button = React.memo(({ handleClick, children }: PropsType) => {
  // eslint-disable-next-line no-console
  console.log('Rendering button - ', children);
  return <button onClick={handleClick}>{children}</button>;
});
