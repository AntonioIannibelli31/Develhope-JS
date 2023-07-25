const number = 15;
let newPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else reject(new Error("Not valid number"));
});

newPromise
  .then((number) => {
    console.log(number);
  })
  .catch((err) => console.error(err));
