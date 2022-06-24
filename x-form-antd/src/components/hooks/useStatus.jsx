import { useState, useEffect } from 'react';
/**
 * 在两个组件中使用相同的 Hook 不会共享 state，所有 state 和副作用都是完全隔离的。
 * @param {*} friendID
 * @returns
 */
function useFriendStatus(friendID) {
  /**
   * useState不仅可以传入基本数据类型，也可以传入函数返回处理后的值；
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  });
   */

  const [isOnline, setIsOnline] = useState(null);
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(friendID);
  useEffect(() => {
    if (friendID == 1) {
      setIsOnline('isOnline');
    } else {
      setIsOnline(null);
    }
    return () => {
      console.log('friendID-', friendID);
    };
  }, [friendID, isOnline, num]);

  return {
    isOnline,
    count,
    num,
    friendID,
    setNum,
    setCount,
  };
}

export { useFriendStatus };
