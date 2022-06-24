/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import DeepTree from './DeepTree';
import TodosDispatch from './createContext';

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, action.text] };
    default:
      throw new Error();
  }
}
/**
 *  在 context 中向下传递 dispatch 而非在 props 中使用独立的回调
 * @returns
 */
function TodosApp() {
  // 提示：`dispatch` 不会在重新渲染之间变化
  const [todos, dispatch] = useReducer(todosReducer, { todos: [] });
  return (
    <TodosDispatch.Provider value={dispatch}>
      <DeepTree {...todos} />
    </TodosDispatch.Provider>
  );
}

export { TodosApp };
