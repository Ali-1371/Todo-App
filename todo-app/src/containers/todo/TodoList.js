import { Link } from 'react-router-dom';
import MuCard from '../../components/card/MuCard';
import { viewLinks } from '../../configs/links';
import TodoItem from './TodoItem';

const mockTodoList = [
  { title: 'Task 1', id: '1' },
  { title: 'Task 2', id: '2' },
];
const TodoList = () => {
  return (
    <MuCard className='todo p-5'>
      <div className='text-center'>
        <p className='mb-3 fw-bold font-size-large'>Todo list</p>
      </div>
      <Link to={viewLinks.todoAdd} className='todo_add-btn'>
        Add a task
      </Link>
      <div className='text-center'>
        {mockTodoList.map(({ id, title }) => (
          <TodoItem key={id} title={title} />
        ))}
      </div>
    </MuCard>
  );
};

export default TodoList;
