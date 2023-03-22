console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test
console.log('helloName - should say "Hello, Stacy!"', helloName('Stacy'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log('addNumbers - should say 42', addNumbers(18, 24));


// 4. Function to multiply three numbers & return the result
function multiplyThree(x, y, z){
  return x * y * z;
}

console.log('multiplyThree - should say 60', multiplyThree(3, 4, 5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  return number > 0;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}

console.log('getLast - should say 3', getLast([1, 2, 3]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log('find - should say true', find(false, [true, false]));
console.log('find - should say false', find(null, [undefined, undefined, undefined, 7]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter === string[0];
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numbers) {
  let sum = 0

  for (const num of numbers) {
    sum += num;
  }

  return sum;
}

console.log('sumAll - should say 39', sumAll([12, 13, 14]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function getAllPositives(numbers) {
  const positives = [];

  for (const num of numbers) {
    if (isPositive(num)) {
      positives.push(num);
    }
  }

  return positives;
}

console.log('getAllPositives - should say [12, 13, 14]', getAllPositives([12, 13, 14]));
console.log('getAllPositives - should say [2]', getAllPositives([2, 0, -2]));
console.log('getAllPositives - should say []', getAllPositives([-3, -4]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
