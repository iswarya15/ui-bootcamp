import "./style.css";

const password = document.getElementById("password");
const progressBar = document.getElementById("progress-bar");

password.addEventListener("input", () => {
  //checks if password contains at-least one number
  const hasNumber = /\d/;

  //checks if password contains at-least one uppercase char
  const hasUpperCase = /[A-Z]/;

  //checks if password contains at-least one lowercase char
  const hasLowerCase = /[a-z]/;

  //checks if password contains at-least one special char
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const value = password.value;

  let strength = Math.min(6, Math.floor(value.length / 3));

  console.log("Strength => ", strength);

  strength +=
    value.length > 3
      ? hasNumber.test(value) +
        hasUpperCase.test(value) +
        hasLowerCase.test(value) +
        hasSpecialChar.test(value)
      : 0;

  console.log("Actual Strength: ", strength);

  progressBar.style.width = strength * 10 + "%";
  if (strength > 8) {
    progressBar.style.background = "green";
  } else if (strength > 5) {
    progressBar.style.background = "orange";
  } else {
    progressBar.style.background = "red";
  }
});
