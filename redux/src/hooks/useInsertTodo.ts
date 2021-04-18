import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {addTodo} from '../modules/todosBefore';

const useInsertTodo = () => {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}

export default useInsertTodo;