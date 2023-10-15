// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject('Error: Not all items in the array are strings!');
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.sort())
      : reject('Error: Something went wrong with sorting words.');
  });
};

const textTransform = async (array) => {
  // here
  try {
    const capsArray = await makeAllCaps(array);
    const sortedArray = await sortWords(capsArray);
    return sortedArray;
  } catch (error) {
    return error;
  }
};

(async () => {
  const resultOne = await textTransform(["cucumber", "tomatos", "avocado"]);
  console.log(resultOne);
  const resultTwo = await textTransform(["cucumber", 44, true]);
  console.log(resultTwo)
})();