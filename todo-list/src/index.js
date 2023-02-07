import "./style.css";

const input = document.getElementById("input");

const listTemplate = document.getElementById("todoTemplate");
const todos = ["Javascript", "Angular", "React", "NextJS", "Redux"];
const todosContainer = document.getElementById("todos");

todos.forEach(addTodoItem);

function addTodoItem(todo) {
  const clonedTemplate = listTemplate.content.cloneNode(true);
  const todoLabel = clonedTemplate.querySelector(".text");
  todoLabel.textContent = todo;
  todosContainer.appendChild(clonedTemplate);
}

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter" && event.target.value.trim().length) {
    addTodoItem(event.target.value);
  }
});

todosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("edit")) {
    const edit = e.target;
    const todoLabel = edit.parentElement.querySelector(".text");
    const input = document.createElement("input");
    edit.parentElement.replaceChild(input, todoLabel);
    input.value = todoLabel.textContent;
    edit.textContent = "💾";
    edit.className = "save";
    input.className = "input";
  } else if (e.target.classList.contains("save")) {
    const input = e.target.parentElement.querySelector(".input");
    const span = document.createElement("span");
    span.className = "text";
    e.target.parentElement.replaceChild(span, input);
    span.textContent = input.value;
    e.target.textContent = "✏️";
    e.target.className = "edit";
  }
});
