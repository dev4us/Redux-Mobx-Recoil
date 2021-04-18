import { ActionType, createAction, createReducer } from 'typesafe-actions';

// 액션 type 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성 함수 선언
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

// 액션 객체 타입 만들기
const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

// state
interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

// 리듀서 만들기
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({count : state.count + 1}),
  [DECREASE]: state => ({count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
});

export default counter;
