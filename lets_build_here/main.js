// Function to generate Fibonacci sequence up to n numbers
function fibonacci(n) {
  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function to generate random numbers
function generateRandomNumbers(count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.random());
  }
  return randomNumbers;
}

// Function to sort an array of numbers
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Benchmarking
console.time("fibonacci");
const fibSequence = fibonacci(1000); // Adjust the number as needed
console.timeEnd("fibonacci");

console.time("primeNumbers");
const primeNumbers = [];
for (let i = 0; i < fibSequence.length; i++) {
  if (isPrime(fibSequence[i])) {
    primeNumbers.push(fibSequence[i]);
  }
}
console.timeEnd("primeNumbers");

console.time("factorial");
const factResult = factorial(1000); // Adjust the number as needed
console.timeEnd("factorial");

console.time("randomNumbers");
const randomNumbers = generateRandomNumbers(10000); // Adjust the count as needed
console.timeEnd("randomNumbers");

console.time("sortedNumbers");
const sortedNumbers = sortNumbers(randomNumbers);
console.timeEnd("sortedNumbers");

console.time("reverseString");
const reversedString = reverseString("Hello, World!");
console.timeEnd("reverseString");

console.log("Prime numbers in Fibonacci sequence:", primeNumbers);
console.log("Factorial result:", factResult);
console.log("Reversed string:", reversedString);
