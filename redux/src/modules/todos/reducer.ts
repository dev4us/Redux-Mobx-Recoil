import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

// 초기 값 선언
const initialState: TodosState = [
  { id: 1, text: '상태 관리 패키지 비교해보기!', done: true},
  { id: 2, text: '과제 진행 하기', done: false},
];

// Reducer 생성
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, {payload:text}) => state.concat({
    id: Math.max(...state.map(todo => todo.id)) + 1,
    text,
    done: false
  }),
  [TOGGLE_TODO]: (state, {payload: id}) => 
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done} : todo)),
  [REMOVE_TODO]: (state, {payload: id}) => 
    state.filter(todo => todo.id !== id)
})

export default todos;