import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MuCard } from '../../components';
import { MuTypography } from '../../components';
import { viewLinks } from '../../configs/links';
import { isEmpty } from '../../helpers/validationHelpers';
import { getTodoList } from '../../redux/actions/todo-action';
import {
  commonTranslation,
  todoTranslation,
} from '../../resources/translations';
import TodoItem from './TodoItem';

const mockTodoList = [
  { title: 'Task 1', id: '1' },
  { title: 'Task 2', id: '2' },
];
let isInitial = true;

const TodoList = () => {
  const todoReducer = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getTodoList());
      isInitial = false;
    }
  }, [dispatch]);
  return (
    <MuCard className='todo_list p-5'>
      <div className='text-center'>
        <MuTypography variant='h5' gutterBottom>
          {commonTranslation.todoList}
        </MuTypography>
      </div>
      <Link to={viewLinks.todoAdd} className='todo_list--add-btn'>
        {commonTranslation.addTask}
      </Link>
      <div className='text-center'>
        {isEmpty(todoReducer.todos) && !todoReducer.isLoading ? (
          <MuTypography variant='h6' gutterBottom>
            {todoTranslation.noTask}
          </MuTypography>
        ) : (
          todoReducer.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </MuCard>
  );
};

export default TodoList;
