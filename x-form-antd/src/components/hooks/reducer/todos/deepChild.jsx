import React, { useContext } from 'react';
import TodosDispatch from './createContext';

// eslint-disable-next-line react/prop-types
function DeepChild() {
  // 如果我们想要执行一个 action，我们可以从 context 中获取 dispatch。
  const dispatch = useContext(TodosDispatch);

  function handleClick() {
    dispatch({ type: 'add', text: 'hello' });
  }

  return (
    <>
      <button onClick={handleClick}>Add todo</button>
    </>
  );
}

export default DeepChild;
