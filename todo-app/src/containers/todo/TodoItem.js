import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import MuIconButton from '../../components/button/MuIconButton';
import MuCard from '../../components/card/MuCard';

const TodoItem = (props) => {
  const { title } = props;

  return (
    <MuCard className='todo_item'>
      <p className='me-auto'>{title}</p>
      <MuIconButton>
        <FontAwesomeIcon icon={faTrash} />
      </MuIconButton>
      <Link to='/' className='todo_edit'>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </MuCard>
  );
};

export default TodoItem;
