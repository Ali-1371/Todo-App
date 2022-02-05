import { constant } from '../configs/constants';

export const isInputValid = (userInput) =>
  userInput?.trim().length > constant.minNumberOfLetters;

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
