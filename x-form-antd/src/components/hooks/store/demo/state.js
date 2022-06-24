import createStore from '../createStore.jsx';

// initState
const initState = { todos: [], count: 0 };

// reducer
function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return { todos: [], count: 0 };
    case 'add':
      return { ...state, todos: [...state.todos, action.text] };
    case 'count':
      return { ...state, count: ++state.count };
    default:
      throw new Error();
  }
}

// action
function action(dispatch) {
  return {
    init() {
      dispatch({ type: 'init' });
    },
    add(data = { text: 'hello' }) {
      dispatch({ type: 'add', ...data });
    },
    count() {
      dispatch({ type: 'count' });
    },
  };
}

const { widthStore, useAction } = createStore(initState, reducer, action);
export { widthStore, useAction };
