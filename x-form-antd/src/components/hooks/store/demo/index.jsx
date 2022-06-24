/* eslint-disable react/prop-types */
import React from 'react';
import Item from './item';
import { widthStore, useAction } from './state';
function Demo({ todos, count }) {
  const action = useAction();
  return (
    <>
      <i>{count}</i>
      <h1 onClick={action.count}>点击count</h1>
      <h1
        onClick={() => {
          action.add();
        }}
      >
        点击demo
      </h1>
      <h1 onClick={action.init}>点击初始化</h1>
      <ul>
        {todos.map((item, index) => {
          return <Item key={index} value={item} />;
        })}
      </ul>
    </>
  );
}

export default widthStore(Demo);
