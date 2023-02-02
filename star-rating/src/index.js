import "./style.css";

const starCount = 5;
let filled = 0;
let unfilled = 0;
let rating = 0;

const starContainer = document.getElementById("star-container");
const smileyContainer = document.getElementById("smiley-container");
const smileys = ["😢", "😞", "😐", "😀", "😎"];

for (let i = 1; i <= starCount; i++) {
  const div = document.createElement("div");
  div.classList.add("star-empty", "star");
  div.dataset.index = i;
  starContainer.appendChild(div);
}

const stars = starContainer.querySelectorAll(".star");
starContainer.addEventListener("mouseover", hoverListener);
starContainer.addEventListener("mouseleave", leaveListener);
starContainer.addEventListener("click", clickListener);

function hoverListener(event) {
  if (event.target?.classList.contains("star")) {
    const index = event.target.dataset.index;
    fillStars(+index);
  }
}

function fillStars(ratingCount) {
  for (let i = filled; i < ratingCount; i++) {
    stars[i].classList.add("star-filled");
    stars[i].classList.remove("star-empty");
  }

  for (let i = ratingCount; i < unfilled; i++) {
    stars[i].classList.remove("star-filled");
    stars[i].classList.add("star-empty");
  }

  filled = ratingCount;
  unfilled = ratingCount;
}

function leaveListener() {
  fillStars(+rating);
}

function clickListener(event) {
  if (event.target.classList.contains("star")) {
    rating = +event.target.dataset.index;
    setSmiley(+rating);
  }
}

function setSmiley(rating) {
  const index = Math.ceil((rating * smileys.length) / starCount) - 1;
  smileyContainer.textContent = smileys[index];
}
