import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todo-slice";

const store = configureStore({
  reducer: { todoReducer: todoSlice.reducer },
});

export default store;
