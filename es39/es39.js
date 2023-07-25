const isLogged = true;

function newPromise(isLogged) {
  return new Promise((resolve, reject) => {
    let n = Math.random();
    if (isLogged == true) {
      resolve(n);
    } else reject(new Error("Number is lower than 0.5"));
  });
}

function secProm(n) {
  return new Promise((resolve, reject) => {
    if (n > 0.5) {
      resolve({ name: "John", age: 24 });
    } else reject(new Error("number lower than 0.5"));
  });
}

newPromise(true)
  .then(secProm)
  .then((obj) => console.log(obj))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise ran"));
