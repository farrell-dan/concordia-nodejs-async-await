const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
    try {
    const options = {
      uri: 'https://v2.jokeapi.dev/joke/Programming',
      qs: {
        blacklistFlags: 'nsfw,religious,political,racist,sexist',
        type: 'single,twopart',
        format: 'json',
      },
    };

    const response = await request(options);
    const joke = JSON.parse(response);

    if (joke.type === 'single') {
      return joke.joke;
    } else if (joke.type === 'twopart') {
      return `${joke.setup} ${joke.delivery}`;
    } else {
      throw new Error('Unexpected joke type');
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

// 4.2
getGeekJoke().then((data) => console.log(data));