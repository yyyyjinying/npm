/* eslint-disable react/display-name */
import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';

const createStore = (state, reducer, dispatchAction) => {
  const CreateContext = createContext(null);

  //
  function useAction() {
    const dispatch = useContext(CreateContext);
    console.log(CreateContext, dispatch);
    return dispatchAction(dispatch);
  }

  // 包装函数
  function widthStore(SubComponent) {
    return (props) => {
      const obj = useReducer(reducer, state);
      return (
        <CreateContext.Provider value={obj[1]}>
          <SubComponent {...props} {...obj[0]} />
        </CreateContext.Provider>
      );
    };
  }

  return {
    widthStore,
    useAction,
  };
};

export default createStore;
