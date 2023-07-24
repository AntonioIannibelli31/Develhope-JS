// function printAsyncName(name, callback) {
//   setTimeout(() => {
//     console.log(name);
//   }, 2000);
//   setTimeout((callback) => {
//     return callback;
//   }, 1000);
// }
// callback = () => {
//   console.log("Hello");
// };
// printAsyncName("Antonio", callback());

// IL primo ho provato a farlo senza usare il setInterval e viene lo stesso

function printAsyncName(name, callback) {
  let id1 = setInterval(() => {
    console.log(callback);
  }, 1000);
  setTimeout(() => {
    clearInterval(id1);
  }, 1000);
  let id2 = setInterval(() => {
    console.log(name);
  }, 2000);
  setTimeout(() => {
    clearInterval(id2);
  }, 2000);
}

printAsyncName("Antonio", "Hello");
