//Assignment 2
const personName = "John Doe";
const age = 30;
const isStudent = true;
console.log(`Name: ${personName}\tAge: ${age}\tIs Student: ${isStudent}`);

const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
console.log(
  `Sum: ${sum}\tDifference: ${difference}\tProduct: ${product}\tQuotient: ${quotient}`
);

const str = "Hello, I am a string containing a sentence.";
const strLength = str.length;
const firstChar = str.charAt(0);
const lastChar = str.charAt(strLength - 1);
console.log(
  `String: ${str}\tLength: ${strLength}\tFirst Character: ${firstChar}\tLast Character: ${lastChar}`
);

const negNum = -15;
const absValue = Math.abs(negNum);
const sqrt = Math.sqrt(negNum);
const sqrd = Math.pow(negNum, 2);
console.log(
  `Negative Number: ${negNum}\tAbsolute Value: ${absValue}\tSquare Root: ${sqrt}\tSquared: ${sqrd}`
);

const num3 = 5;
const num4 = 3;
if (num3 > num4) {
  console.log(`${num3} is greater than ${num4}`);
} else if (num3 < num4) {
  console.log(`${num3} is less than ${num4}`);
} else {
  console.log(`${num3} is equal to ${num4}`);
}

const isHungry = true;
const isSleepy = false;
console.log(`Is Hungry: ${isHungry}\tIs Sleepy: ${isSleepy}`);
console.log(`Logical AND: ${isHungry && isSleepy}`);
console.log(`Logical OR: ${isHungry || isSleepy}`);
console.log(
  `Logical NOT (isHungry): ${!isHungry}\tLogical NOT (isSleepy): ${!isSleepy}`
);

const firstName = "Jane";
const lastName = "Smith";
const greeting = `Hello, ${firstName} ${lastName}.`;
console.log(greeting);
