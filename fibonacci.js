const fib = (num) => {
  const fibonacci = [];
  for (let i = 0; i < num; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
};
console.log(fib(7));
