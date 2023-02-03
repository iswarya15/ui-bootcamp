import "./style.css";

const starsCount = 5;
let filled = 0;
let unfilled = 0;
let selectedRating = 0;
const smileys = ["😢", "😞", "😐", "😀", "😎"];

const starContainer = document.getElementById("star-container");
const smileyContainer = document.getElementById("smiley-container");

for (let i = 1; i <= starsCount; i++) {
  const div = document.createElement("div");
  div.classList = "star star-empty";
  div.dataset.index = i;
  starContainer.appendChild(div);
}

const stars = document.querySelectorAll(".star");

starContainer.addEventListener("mouseover", hoverListener);
starContainer.addEventListener("mouseleave", leaveListener);
starContainer.addEventListener("click", clickListener);

function clickListener(event) {
  const starElement = event.target;
  if (starElement.classList.contains("star")) {
    selectedRating = starElement.dataset.index;
    fillStars(+selectedRating);
    setSmiley();
  }
}

function fillStars(count) {
  for (let i = filled; i < count; i++) {
    stars[i].classList.remove("star-empty");
    stars[i].classList.add("star-filled");
  }

  for (let i = count; i < unfilled; i++) {
    stars[i].classList.remove("star-filled");
    stars[i].classList.add("star-empty");
  }
  filled = count;
  unfilled = count;
}

function hoverListener(event) {
  const starElement = event.target;
  if (starElement.classList.contains("star")) {
    fillStars(event.target.dataset.index);
  }
}

function leaveListener(event) {
  fillStars(selectedRating);
}

function setSmiley() {
  const index =
    Math.ceil((smileys.length * selectedRating) / smileys.length) - 1;
  smileyContainer.textContent = smileys[index];
}
