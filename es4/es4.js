function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 0; i <= 5; i++) {
    sum = i + sum;
  }
  return sum;
}

console.log(sumUntil(5));
