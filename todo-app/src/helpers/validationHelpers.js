import { constant } from '../configs/constants';

export const isInputValid = (userInput) =>
  userInput?.trim().length > constant.minNumberOfLetters;
