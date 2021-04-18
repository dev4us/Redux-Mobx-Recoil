import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {toggleTodo, removeTodo} from '../modules/todosBefore';

const useTodoActions = (id:number) => {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

  return {onToggle, onRemove};
}

export default useTodoActions;