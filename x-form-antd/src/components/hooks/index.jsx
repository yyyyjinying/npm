import React, { useState, useEffect } from 'react';
import FriendListItem from './FriendListItem';
import ListItem from './ListItem';
import { useFriendStatus } from './useStatus';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import MeasureExample from './MeasureExample';
import Interval from './Interval';
import { Counter } from './reducer/reducerCount';
import { TodosApp } from './reducer/todos';
import Demo from './store/demo';
import { EmpCharts } from './echarts';
import Upload from '@common/components/base/upload';
import { Input } from 'antd';
import './style.less';

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];
/**
 * Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
 * State Hook useState
 * Effect Hook
 */
// 无状态组件 -》“钩入” React 的特性， 函数组件（React state 的能力）
function Example() {
  const [name, setName] = useState('');
  // state hooks
  // Declare a new state variable, which we'll call "count"
  // 这个初始 state 参数0,只有在第一次渲染时会被用到。
  // useState 返回一对值：当前状态/更新函数
  const [count, setCount] = useState(0);
  const [recipientID, setRecipientID] = useState(1);
  const { isOnline } = useFriendStatus(recipientID);

  // 声明多个 state 变量
  //   const [age, setAge] = useState(42);
  //   const [fruit, setFruit] = useState('banana');
  //   const [todos, setTodos] = useState([{ text: '学习 Hook' }]);

  // effect hooks 副作用函数
  // 相当于componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  //   组件加载和更新时执行同样的操作
  //useEffect 会在每次渲染后都执行,不需要考虑挂载和更新；
  // state变-> DOM更改-> 副作用函数
  // Hook 需要在我们组件的最顶层调用。如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部：
  // 清除 effect，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源；
  // 将添加和移除订阅的逻辑放在
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    // function handleStatusChange(status) {
    //   console.log('status' + status);
    //   setIsOnline(status.isOnline);
    // }
    return () => {
      // 为防止内存泄漏，清除函数会在组件卸载前执行
      console.log(count);
    };
  }, [count]);
  // 优化性能前一次渲染和这一次渲染count值变化，才执行useEffect；避免每次渲染都执行useEffect；
  // 如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。

  useEffect(() => {
    document.addEventListener(
      'click',
      function() {
        alert('body');
      },
      false,
    );
  }, []);

  return (
    <div>
      <div className="box-test">
        <span>122</span>
        <span>343</span>
      </div>
      <div>
        Trade
        <div
          onClick={() => {
            alert('外层');
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              alert('内层');
            }}
          >
            点击冒泡测试
          </div>
        </div>
      </div>
      <Input
        placeholder="Please enter item"
        value={name}
        onChange={(value) => {
          setName(value);
        }}
      />
      <Upload />
      <EmpCharts />
      <Demo />
      <div>dfdfd</div>
      <TodosApp />
      <Counter />
      <Interval />
      <MeasureExample />
      <TextInputWithFocusButton />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <select value={recipientID} onChange={(e) => setRecipientID(Number(e.target.value))}>
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
      <p>{isOnline ? 'onLine' : 'notOnline'}</p>
      <ul>
        {[1, 2, 3].map((friendID, index) => {
          return <FriendListItem key={index} friend={{ name: 'zhao', friendID: friendID }} />;
        })}
      </ul>
      <ul>
        {[1, 2, 3].map((friendID, index) => {
          return <ListItem key={index} friend={{ name: 'jin', friendID: friendID }} />;
        })}
      </ul>
    </div>
  );
}

export { Example };
