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
  startGame.setAttribute("disabled", true);
  submit.removeAttribute("disabled");
  console.log(randomNumber);
};

submit.addEventListener("click", () => {
  guessArray.push(input.valueAsNumber);
  guessDisplay.textContent = "Your Guesses " + guessArray;

  if (guessArray.length > 9 && input.valueAsNumber != randomNumber) {
    output.textContent = "You lost! The number is " + randomNumber;
    submit.setAttribute("disabled", true);
    startGame.removeAttribute("disabled");
  } else if (input.valueAsNumber > randomNumber) {
    output.textContent = "Too high!";
  } else if (input.valueAsNumber < randomNumber) {
    output.textContent = "Too low!";
  } else {
    output.textContent = "You Win!! The number is " + randomNumber;
    submit.setAttribute("disabled", true);
    startGame.removeAttribute("disabled");
  }
});

startGame.addEventListener("click", startGame);

onStartGame();
