import "./style.css";

const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const labelTemplate = document.querySelector(".labelTemplate");
const moveLeft = document.getElementById("move-left");
const moveRight = document.getElementById("move-right");
const moveAllLeft = document.getElementById("move-all-left");
const moveAllRight = document.getElementById("move-all-right");

let leftSectionList = ["JS", "HTML", "CSS", "TS"];
let rightSectionList = ["React", "Angular", "Vue", "Svelte"];

function appendChild() {
  leftSectionList.forEach((label) =>
    leftSection.appendChild(createListNodes(label))
  );
  rightSectionList.forEach((label) =>
    rightSection.appendChild(createListNodes(label))
  );
}

function setControlsState() {
  moveLeft.disabled = !rightSection.querySelector("input:checked");
  moveRight.disabled = !leftSection.querySelector("input:checked");
  moveAllLeft.disabled = !rightSection.childElementCount;
  moveAllRight.disabled = !leftSection.childElementCount;
}

function addEventListeners() {
  moveAllLeft.addEventListener("click", () => {
    const items = rightSection.querySelectorAll(".section");
    items.forEach((item) => leftSection.appendChild(item));
    setControlsState();
  });

  moveAllRight.addEventListener("click", () => {
    const items = leftSection.querySelectorAll(".section");
    items.forEach((item) => rightSection.appendChild(item));
    setControlsState();
  });

  moveLeft.addEventListener("click", () => {
    const items = rightSection.querySelectorAll("input:checked");
    items.forEach((item) => {
      leftSection.appendChild(item.parentElement);
      item.checked = false;
    });
    setControlsState();
  });

  moveRight.addEventListener("click", () => {
    const items = leftSection.querySelectorAll("input:checked");
    items.forEach((item) => {
      rightSection.appendChild(item.parentElement);
      item.checked = false;
    });
    setControlsState();
  });
}

function createListNodes(label) {
  const clonedTemplate = labelTemplate.content.cloneNode(true);
  const textLabel = clonedTemplate.getElementById("label");
  textLabel.textContent = label;
  const input = clonedTemplate.getElementById("checkbox");
  input.addEventListener("change", setControlsState);
  return clonedTemplate;
}

appendChild();
setControlsState();
addEventListeners();
