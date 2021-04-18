// 1.1. 액션
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 1.2. 액션 선언 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

// 1.3. 액션들을 위한 타입 준비
type TodosActions = 
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 2.1. state 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

// 2.2. 초기 값 선언
const initialState: TodosState = [
  { id: 1, text: '상태 관리 패키지 비교해보기!', done: true},
  { id: 2, text: '과제 진행 하기', done: false},
];

// 3.1. 리듀서 구현
const todos = (state: TodosState = initialState, action: TodosActions):TodosState => {
  switch(action.type){
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo => 
          todo.id === action.payload ? { ...todo, done: !todo.done} : todo
        );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;

  