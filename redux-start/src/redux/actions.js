// 액션 생성 함수 모음
// 1. todo 리스트에 todo를 넣는 액션인 add todo의 탑입을 정의

// 액션의 타입 - 보통 언더바에 대문자로 사용
// 문자열을 상수화
// 액션
export const ADD_TODO = 'ADD_TODO';

// ADD_TODO 타입을 이용하는 액션생성 함수 - 액션 크리에이터
// addTodo 함수는 전역 스테이트 안에 새로운 투두를 넣을 것이다 , 할일 같은 것
// 할일이 들어 있는 상태 객체에 인풋으로 받아온 할일을 넣을 것

// 액션을 생성 할때 어드 투두라고 하는 함수를 실행해서 함수를 생성
// 그때는 어드 투두에다가 할일만 넣으면 됌
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
