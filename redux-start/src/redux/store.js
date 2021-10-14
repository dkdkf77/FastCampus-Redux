import { createStore } from 'redux';
import { todoApp } from './reducers';

// Store 안에다 리듀서를 넣어준다.
//  리듀서에서 설정한 todoApp을 store 변수 처리
const store = createStore(todoApp);

export default store;

//index.js 로 넣어줘서 store가 어떤 객체 인지 확인해 보자 !
