import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MuCard, MuIconButton, MuTypography } from '../../components';
import { viewLinks } from '../../configs/links';
import { stringHelper } from '../../helpers/commonHelper';
import { removeTodoList } from '../../redux/actions/todo-action';

const TodoItem = (props) => {
  const { todo } = props;

  const dispatch = useDispatch();

  const deleteTodoHandler = () => {
    dispatch(removeTodoList(todo.id));
  };

  return (
    <MuCard className='todo_list--item'>
      <MuTypography className='me-auto' variant='h6'>
        {todo.title}
      </MuTypography>
      <MuIconButton onClick={deleteTodoHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </MuIconButton>
      <Link
        to={stringHelper(viewLinks.todoEdit, todo.id)}
        className='todo_list--edit-btn'
      >
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </MuCard>
  );
};

export default TodoItem;
