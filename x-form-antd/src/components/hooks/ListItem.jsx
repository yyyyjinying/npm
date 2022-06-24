/* eslint-disable react/prop-types */
import React from 'react';
import { useFriendStatus } from './useStatus';

function FriendListItem(props) {
  const { friendID, isOnline, count, setCount } = useFriendStatus(props.friend.friendID);
  return (
    <li
      style={{ color: isOnline ? 'green' : 'black' }}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      friendID:{friendID}-{props.friend.name}-{count}
    </li>
  );
}

export default FriendListItem;
