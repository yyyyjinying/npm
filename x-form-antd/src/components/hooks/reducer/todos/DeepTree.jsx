/* eslint-disable react/prop-types */
import DeepChild from './deepChild';
import TodosDispatch from './createContext';
import React, { useContext } from 'react';
function DeepTree({ todos }) {
  const dispatch = useContext(TodosDispatch);

  function handleClick() {
    dispatch({ type: 'add', text: 'world' });
  }
  return (
    <>
      <DeepChild />
      <ul>
        {todos.map((item, index) => (
          <li onClick={handleClick} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeepTree;
