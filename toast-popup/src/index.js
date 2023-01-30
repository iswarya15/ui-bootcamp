import "./style.css";

const toastMessage = document.getElementById("message");
const horizontalPosition = document.getElementById("horizontal-position");
const verticalPosition = document.getElementById("vertical-position");
const messageType = document.getElementById("type");
const durationRange = document.getElementById("rangeInput");
const showToastBtn = document.getElementById("showToastBtn");

const leftTopContainer = document.querySelector(".left-top");
const leftBottomContainer = document.querySelector(".left-bottom");
const rightTopContainer = document.querySelector(".right-top");
const rightBottomContainer = document.querySelector(".right-bottom");
const toastTemplate = document.getElementById("toast-template");

toastMessage.value = "This is a toast message!";

const displayToast = () => {
  const message = toastMessage.value;
  const type = messageType.value;
  const horizontalPosValue = horizontalPosition.value;
  const verticalPosValue = verticalPosition.value;
  const duration = +durationRange.value * 100;

  showToast(message, type, horizontalPosValue, verticalPosValue, duration);
};

const showToast = (
  message,
  type,
  horizontalPosValue,
  verticalPosValue,
  duration
) => {
  if (horizontalPosValue == "left") {
    if (verticalPosValue == "top") {
      leftTopContainer.prepend(
        createToast(message, type, duration, horizontalPosValue)
      );
    } else {
      console.log(message);
      leftBottomContainer.append(
        createToast(message, type, duration, horizontalPosValue)
      );
    }
  } else {
    if (verticalPosValue == "top") {
      rightTopContainer.prepend(
        createToast(message, type, duration, horizontalPosValue)
      );
    } else {
      rightBottomContainer.append(
        createToast(message, type, duration, horizontalPosValue)
      );
    }
  }
};

const createToast = (message, type, duration, horizontalPosValue) => {
  const toast = toastTemplate.content.cloneNode(true);
  toast.querySelector("#toast-text").textContent = message;
  toast.querySelector("#toast-content").classList.add(type);
  toast.querySelector("#close").addEventListener("click", removeToast);
  const toastElement = toast.querySelector("#toast-content");

  setTimeout(removeToast, duration);

  function removeToast() {
    toastElement.remove();
  }

  return toast;
};

showToastBtn.addEventListener("click", displayToast);
