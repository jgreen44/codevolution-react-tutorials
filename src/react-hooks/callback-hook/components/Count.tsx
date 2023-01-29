import React from 'react';

type PropsType = {
  text: string;
  count: number;
};
export const Count = React.memo(({ text, count }: PropsType) => {
  // eslint-disable-next-line no-console
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
});
