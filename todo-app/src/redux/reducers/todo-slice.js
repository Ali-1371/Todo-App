import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  reducers: {
    loading(state) {
      state.isLoading = true;
      state.error = null;
    },
    getTodo(state, action) {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    AddTodo(state, action) {
      state.todos.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    editTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { title: action.payload.title, id: action.payload.id }
          : todo
      );
      state.isLoading = false;
      state.error = null;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.isLoading = false;
      state.error = null;
    },
    error(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
