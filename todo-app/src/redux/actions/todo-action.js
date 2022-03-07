import { todoActions } from '../reducers/todo-slice';
import { apiLinks } from '../../configs/links';
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from '../../services/httpRequest';
import { stringHelper } from '../../helpers/commonHelper';

export const getTodoList = () => (dispatch) => {
  dispatch(todoActions.loading());

  getRequest(apiLinks.todo)
    .then((response) => {
      const todoList = Object.entries(response.data ?? {}).map(
        ([key, value]) => ({
          title: value.title,
          id: key,
        })
      );
      dispatch(todoActions.getTodo(todoList));
    })

    .catch((error) => {
      dispatch(todoActions.error(error.message));
    });
};

export const addTodoList = (todoValue, goTodoList) => (dispatch) => {
  dispatch(todoActions.loading());

  const data = { title: todoValue };
  postRequest(apiLinks.todo, data)
    .then((response) => {
      dispatch(
        todoActions.AddTodo({ title: todoValue, id: response.data.name })
      );
      goTodoList();
    })
    .catch((error) => {
      dispatch(todoActions.error(error.message));
    });
};

export const editTodoList = (todoValue, id, goTodoList) => (dispatch) => {
  dispatch(todoActions.loading());

  const data = { title: todoValue };

  putRequest(stringHelper(apiLinks.editTodo, id), data)
    .then(() => {
      dispatch(todoActions.editTodo({ title: todoValue, id }));
      goTodoList();
    })
    .catch((error) => {
      dispatch(todoActions.error(error.message));
    });
};

export const removeTodoList = (id) => (dispatch) => {
  dispatch(todoActions.loading());

  deleteRequest(stringHelper(apiLinks.deleteTodo, id))
    .then(() => {
      dispatch(todoActions.removeTodo(id));
    })
    .catch((error) => {
      dispatch(todoActions.error(error.message));
    });
};
