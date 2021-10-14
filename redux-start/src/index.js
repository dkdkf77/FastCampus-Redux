import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

// 구독하다라는 뜻 - 구독 = 스토어의 변경사항을 받아 온다라는 말
// 구독을 했으니깐 디스패치에 영향을 받아서 함수가 실행될 듯
const unsubscibe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
// console.log(store.getState());
// 초기 값 = [] ; 가 출력 된다 . 그 이유는 크리에이트 스토어 할 때 프리로디드스테이트가 없으므로
// 투두 앱이 최초로 실행되면서 이 투두앱에 프리비어스스테이츠가 언디파인드로 뜨고 이니셜 스테이츠가 출력 됌

//액션 실행 시켜줌으로 reducer의 값을 변경
// addTodo가 coding으로 바뀌어서 날라가게 될꺼고 스토어는 스테이트를 변경하게 되고
// console.log(store.getState()); 를 하게 되면 결과 값이 나올 것
store.dispatch(addTodo('coding'));
store.dispatch(addTodo('React study'));
store.dispatch(addTodo('prey for her'));
store.dispatch(addTodo('coding'));
store.dispatch(addTodo('React study'));
store.dispatch(addTodo('prey for her'));
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
