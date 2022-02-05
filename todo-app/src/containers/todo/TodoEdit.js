import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MuIconButton from '../../components/button/MuIconButton';
import MuTextField from '../../components/input/textField/MuTextField';
import { constant } from '../../configs/constants';
import { enumeration } from '../../configs/enumeration';
import { isInputValid } from '../../helpers/validationHelpers';
import userInput from '../../hooks/use-input';
import { todoTranslation } from '../../resources/todo/todoTranslation';

const TodoEdit = () => {
  const {
    value: todoValue,
    hasError: isTodoHasError,
    valueChangeHandler,
    inputBlurHandler,
  } = userInput('', isInputValid);

  const editTodoClicked = () => {};
  const handleKeyDown = (e) => {
    if (e.keyCode === enumeration.keyboard.enter) editTodoClicked();
  };
  return (
    <div className='d-flex justify-content-between border border-3 rounded py-2'>
      <MuTextField
        onKeyDown={handleKeyDown}
        error={isTodoHasError}
        fullWidth
        label={todoTranslation.title}
        className='ms-3'
        variant='standard'
        autoFocus
        value={todoValue}
        helperText={
          isTodoHasError &&
          `${todoTranslation.minimumLetter} ${constant.minNumberOfLetters}`
        }
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      />
      <MuIconButton
        className='ms-4'
        onClick={editTodoClicked}
        disabled={isTodoHasError}
      >
        <FontAwesomeIcon icon={faEdit} />
      </MuIconButton>
    </div>
  );
};

export default TodoEdit;
