const numbers = [1, 2, 3];

function sum() {
  let arg = [...numbers];
  return arg.reduce((a, b) => a + b);
}

console.log(sum());
