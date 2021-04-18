import {useState, ChangeEvent, FormEvent} from 'react';
import useInsertTodo from '../../hooks/useInsertTodo';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const insertTodo = useInsertTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    insertTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={onChange} 
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInsert;