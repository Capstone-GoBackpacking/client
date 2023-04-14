export const article = (word) => {
  const regexs = ["u", "e", "o", "a", "i"];
  let result = "a";
  for (const char of regexs) {
    if (char === word.toLowerCase().slice(0, 1)) {
      result = "an";
      break;
    }
  }
  return result;
};
