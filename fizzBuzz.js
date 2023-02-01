function fizzBuzz (n) {
  //Observe that 15 is divisible by 3 and 5, so check 15 first
  const divisors = [[15, 'FizzBuzz'], [5, 'Buzz'], [3, 'Fizz']];
  for (let [divisor, label] of divisors) {
    if (n % divisor == 0) {
      return label;
    }
  }
  return n;
};
    
for (let i=1; i<=100; i++) {
  console.log(fizzBuzz(i))
};