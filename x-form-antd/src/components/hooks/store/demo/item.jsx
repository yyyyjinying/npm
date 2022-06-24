/* eslint-disable react/prop-types */
import React from 'react';
import { useAction } from './state';
function Item(props) {
  const { add, count } = useAction();
  return (
    <li
      onClick={() => {
        add({ text: 'world' });
        count();
      }}
    >
      {props.value}
    </li>
  );
}
export default Item;
