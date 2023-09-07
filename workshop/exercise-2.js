// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request(/* fill this in */);
    const issLocation = JSON.parse(/* fill this in */);
    return {
      lat: /* fill this in */,
      lng: /* fill this in */,
    };
  } catch (err) {
    console.log('Error: ', err);
  }
};

console.log(getIssPosition());
