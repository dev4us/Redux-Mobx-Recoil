import {ActionType, createAction, createReducer} from 'typesafe-actions';

// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

// 액션들의 타입 묶기
const actions = {addTodo, toggleTodo, removeTodo};
type TodosAction = ActionType<typeof actions>;

// state 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

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