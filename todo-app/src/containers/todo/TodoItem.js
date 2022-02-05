import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { MuCard, MuIconButton } from '../../components';
import { viewLinks } from '../../configs/links';
import { stringHelper } from '../../helpers/commonHelper';

const TodoItem = (props) => {
  const { title } = props;

  return (
    <MuCard className='todo_list--item'>
      <p className='me-auto'>{title}</p>
      <MuIconButton>
        <FontAwesomeIcon icon={faTrash} />
      </MuIconButton>
      <Link
        to={stringHelper(viewLinks.todoEdit, '1')}
        className='todo_list--edit-btn'
      >
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </MuCard>
  );
};

export default TodoItem;
