export const stringHelper = (initialString, ...theArgs) => {
  let modifiedString = initialString;
  for (let i = 0; i < theArgs.length; i++) {
    modifiedString = modifiedString.replace(`{${i}}`, theArgs[i]);
  }
  return modifiedString;
};
