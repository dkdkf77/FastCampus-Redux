import { ADD_TODO } from './actions';

// 리듀서 , 아무 변화 없이 액션을 받더라도 프리비우스 스테이츠가 리턴되서 변화가 없을 것이다

// function todoApp(previousState, action) {
// 	return previousState;
// }

// 액션을 받았을 때만 변경 시켜 리턴해주는 방식

// state의 모습을 구상
// ['코딩','점심 먹기'];

// 초기 상태 정의
const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  //  if (previousState === undefined) {
  // 	 return [];
  //  }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
