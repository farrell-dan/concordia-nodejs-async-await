--- 

marp: true

---

# Async / Await

---

Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
- It is built on top of Promises
- is compatible with all existing Promise-based APIs.

---

```js
const newPauseFunction = (sec) => {
  return new Promise((resolve) => {
    console.log(`${sec}s pause`);
    setTimeout(() => resolve("resolve"), sec * 1000);
  });
};

newPauseFunction(1)
  .then(() => newPauseFunction(2))
  .then(() => newPauseFunction(3))
  .then(() => newPauseFunction(3))
  .then((data) => console.log(data));
```

_let's convert it to async/await_

---

### Exercise

Convert the following to async/await

```js
transformText(string)
  .then((str) => allCaps(str))
  .then((str) => trimFirst(str))
  .then((str) => trimLast(str))
  .then((str) => replaceWithX(str))
  .then((str) => {
    console.log(str);
    return str;
  })
  .catch((err) => console.log(err));
```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
  try {
    console.log("Go");
    await newPauseFunction(1);
    await newPauseFunction(2);
    await newPauseFunction(3);
    await newPauseFunction(3);
    console.log("Stop");
  } catch (err) {
    console.log(err);
  }
};
asyncPause();
```
