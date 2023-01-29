import "./style.css";
const themeSwitch = document.getElementById("themeSwitch");
const innerThemeSwitch = document.getElementById("innerThemeSwitch");

themeSwitch.addEventListener("change", function () {
  if (themeSwitch.checked) {
    document.body.classList.add("dark");
    innerThemeSwitch.checked = true;
  } else {
    document.body.classList.remove("dark");
    innerThemeSwitch.checked = false;
  }
});
