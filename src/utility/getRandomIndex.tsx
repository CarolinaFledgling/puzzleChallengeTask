export const getRandomIndex = (arr: Array<object>) => {
  const existingArrLength = arr.length;
  const randomNumber = Math.random();
  const randomElementNumber = randomNumber * (existingArrLength - 1);
  const winnerPositionInArray = Math.round(randomElementNumber);
  return winnerPositionInArray;
};
