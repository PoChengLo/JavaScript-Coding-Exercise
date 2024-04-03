let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = Number(
    prompt("Please pick up a number between " + n1 + "~" + n2)
  );

  if (guess < n1 || guess > n2) {
    alert("Please pick up a right number");
    continue;
  }

  if (guess == answer) {
    alert("Congratulations! Your number " + answer + " is the right number!");
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
