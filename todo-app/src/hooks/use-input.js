import { useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  return state;
};

const useInput = (initialValue, validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: initialValue,
    isTouched: false,
  });

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;
  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
