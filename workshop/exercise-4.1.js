

const request = require("request-promise");

const getDadJoke = async () => {
    try {
        const random = {
          uri: "https://icanhazdadjoke.com/",
          headers: { Accept: "application/json" },
        };
    const response = await request (random);
    const joke = JSON.parse(response);
    return joke.joke;
} catch (error){
    console.error("Error: ", error);
    throw error;
}
    // ha hahahh
};

// 4.1
getDadJoke().then((data) => console.log(data));
