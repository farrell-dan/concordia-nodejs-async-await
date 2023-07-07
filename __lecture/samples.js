// Pausing with a Promise
const pauseFunction = () => {
  return new Promise(function (resolve, reject) {
    console.log('entering the promised land');
    resolve('resolve');
    console.log('...in limbo...');
    reject('reject');
    console.log('shuffling off...');
  });
};

// pauseFunction()
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// Pausing with a Promise - take 2
const newPauseFunction = (sec) => {
  return new Promise(function (resolve) {
    console.log(`${sec}s pause`);
    setTimeout(() => resolve('resolve'), sec * 1000);
  });
};

// newPauseFunction(1)
//  .then(() => newPauseFunction(2))
//  .then(() => newPauseFunction(3))
//  .then(() => newPauseFunction(3))
//  .then(data => console.log(data));

// Converting Promise to async/await
const asyncPause = async () => {
  try {
    console.log('Go');
    await newPauseFunction(1);
    await newPauseFunction(2);
    await newPauseFunction(3);
    await newPauseFunction(3);
    console.log('Stop');
  } catch (err) {
    console.log(err);
  }
};
asyncPause();
