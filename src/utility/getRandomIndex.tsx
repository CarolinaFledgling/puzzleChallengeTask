export const getRandomIndex = (arr: Array<object>) => {
  const range = arr.length - 1;
  const randomIndex = Math.floor(Math.random() * range);
  return randomIndex;
};
