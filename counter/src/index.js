const counter = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");

increment.addEventListener("click", () => {
  counter.textContent = +counter.textContent + changeBy.valueAsNumber;
});

decrement.addEventListener("click", () => {
  counter.textContent = +counter.textContent - changeBy.valueAsNumber;
});

reset.addEventListener("click", () => {
  counter.textContent = 0;
});
