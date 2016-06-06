// # Functional Programming Style Array Exercises
// Implement all following problems without writing a single loop.

// ## Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var arr = [1, 2, -3, 4, -5];

var posArr = arr.filter(function(n) {
  return n > 0;
});
console.log(posArr);

//or:

function positive(arr) {
  return arr.filter(function(n) {
    return n > 0;
  });
}
var positives = positive(arr);
console.log(positives);

// ## Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

var arr = [1, 2, 3];

var sqArr = arr.map(function(n) {
  return n * n;
});
console.log(sqArr);

//or:

function squares(arr) {
  return arr.map(function(n) {
    return n * n;
  });
}
var squared = squares(arr);
console.log(squared);

// ## Good Job!
// Given an array of people's names, print out 'Good Job, {{name}}!' for each person's name, one on a line. Hint: You can use "\n" as the newline character and array's `join()` method to put together an array of strings.

var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];

var goodJob = people.map(function(n) {
  return 'Good job, ' + n + '!';
}).join('\n');
console.log(goodJob);

//or:

function sayGoodJob(arr) {
  return people.map(function(n) {
    return 'Good job, ' + n + '!';
  }).join('\n');
}
var result = sayGoodJob(people);
console.log(result);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


// ## All A names
// Write a function that takes the array of the student names from the last problem and returns only an array of the students whose names start with an "A".

var aNames = people.filter(function(n) {
  return n.charAt(0) === 'A';
  //return n[0] === 'A';
});
console.log(aNames);

//or:

function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    return true;
  }
}
var aStudents = people.filter(startsWithA);
console.log(aStudents);

// ## Costs
// Given an array of catalog items:

var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];

// 1. Write a function that takes the array and returns a new array containing the individual prices of each item. With the above array you should get [15.99, 8.99, 2.99, 3.99]

var prices = items.map(function(item) {
  return item.price;
});
console.log(prices);

//or:

function getPrices(arr) {
  return items.map(function(item) {
    return item.price;
  });
}
var prices2 = getPrices(items);
console.log(prices2);

// 2. Write a function that task the array and returns only the items with a price over 10 dollars.

var priceOver10 = items.filter(function(item) {
  return item.price > 10;
});
console.log(priceOver10);

//or:

function expensiveItems(arr) {
  return items.filter(function(item) {
    return item.price > 10;
  });
}
var expensive = expensiveItems(items);
console.log(expensive);


// 3. Write a function that takes the array and returns a new array containing the total cost of each item by multiplying the item price by the quantity. For example, the above array should yield: [31.98, 8.99, 2.99, 39.9]

var sums = items.map(function(item) {
  return item.price * item.quantity;
});
console.log(sums);

//or:

function totalCosts(arr) {
  return items.map(function(item) {
    return item.price * item.quantity;
  });
}


// ## Sum the array
// Write a function that takes an array of numbers and returns the sum of the numbers.

var arr = [1, 2, 3, 4];

var sum = arr.reduce(function(currentValue, num) {
  return currentValue + num;
}, 0);

console.log(sum);

//****** ## Get the largest number
// Write a function that takes an array of numbers and returns the largest number in the array. You may assume all numbers are positive.

var arr = [1, 2, 3, -4, 2, 3, 12, -1];

var max = arr.reduce(function(currentValue, num) {
  if (num > currentValue) {
    return num;
  } else {
    return currentValue;
  }
}, arr[0]);

console.log(max);

// ## Total Cost
// Take an array of catalog items as in the "Costs" problem. Calculate the total cost of all the items by multiplying each item's price and quantity and the summing the results.

var totalCost = sums.reduce(function(sum, n) {
  return sum + n;
}, 0);

console.log(totalCost);


// ## Sum array of arrays
// Write a function that takes an array of arrays of numbers and returns the sum of all the numbers within them.

var arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];

var sums = arr.map(function(n) {
  var sum = n.reduce(function(currentValue, n) {
    return currentValue + n;
  }, 0);
  return sum;
});

var finalSum = sums.reduce(function(sum, n) {
  return sum + n;
}, 0);

console.log(finalSum);


// ## Is all positive?
// Write a function which, given an array of numbers, returns true if all the numbers in the array are positive, and returns false otherwise. Implement this function in 2 different ways: first using .every() and then using .some()

var arr = [1, -2, 3];

var positiveArr = arr.every(function(n) {
  return n > 0;
});

console.log(positiveArr);


var arr = [-1, -2, 3];

var positiveArr = arr.some(function(n) {
  return n > 0;
});

console.log(positiveArr);
