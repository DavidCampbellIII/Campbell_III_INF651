const numToGuess = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10"));
while (guess !== numToGuess) {
  guess = parseInt(prompt("Wrong! Try again. Guess a number between 1 and 10"));
}
alert("Congratulations! You guessed the number " + numToGuess);

const password = prompt("Enter a password!");
let confirmPassword = "";
do {
  confirmPassword = prompt("Confirm your password!");
  if (confirmPassword !== password) {
    alert("Passwords do not match. Please try again.");
  }
} while (confirmPassword !== password);

const multiplicationTable = parseInt(
  prompt("Enter a number to see its multiplication table:")
);
for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationTable} x ${i} = ${multiplicationTable * i}`);
}

const grade = parseInt(prompt("Enter your grade (0-100):"));
if (grade >= 90 && grade <= 100) {
  console.log("You got an A");
} else if (grade >= 80 && grade < 90) {
  console.log("You got a B");
} else if (grade >= 70 && grade < 80) {
  console.log("You got a C");
} else if (grade >= 60 && grade < 70) {
  console.log("You got a D");
} else {
  console.log("You got an F");
}

const dayOfWeek = parseInt(
  prompt("Enter a number between 1 and 7 to get the day of the week:")
);
switch (dayOfWeek) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input");
}
