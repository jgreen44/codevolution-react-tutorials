import React, { useContext } from 'react';

import { ChannelContext, UserContext } from '../../../App';

export const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {' '}
      User is {user} and channel is {channel}
    </div>
  );
};
