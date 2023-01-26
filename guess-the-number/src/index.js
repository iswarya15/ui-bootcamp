const input = document.getElementById("input");
const submit = document.getElementById("submit");
const startGame = document.getElementById("start-game");
const output = document.getElementById("output");
const guessDisplay = document.getElementById("guess-display");

let guessArray = [];
let randomNumber = 0;

const onStartGame = () => {
  guessArray = [];
  input.value = "";
  output.textContent = "";
  guessDisplay.textContent = "";

  randomNumber = Math.round(Math.random() * 10);
  startGame.disabled = true;
  submit.disabled = false;
  console.log(randomNumber);
};

submit.addEventListener("click", () => {
  guessArray.push(+input.value);
  guessDisplay.textContent = "Your Guesses " + guessArray;

  if (guessArray.length > 9 && +input.value != randomNumber) {
    output.textContent = "You lost! The number is " + randomNumber;
    submit.disabled = true;
    startGame.disabled = false;
  } else if (+input.value > randomNumber) {
    output.textContent = "Too high!";
  } else if (+input.value < randomNumber) {
    output.textContent = "Too low!";
  } else {
    output.textContent = "You Win!! The number is " + randomNumber;
    submit.disabled = true;
    startGame.disabled = false;
  }
});

startGame.addEventListener("click", onStartGame);

onStartGame();
