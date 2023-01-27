const input = document.getElementById("input");

const getNumOnlyString = (str) =>
  [...str].filter((char) => Number.isInteger(+char) && char != " ").join("");

const formatString = (str) => {
  const numStr = getNumOnlyString(str);
  return numStr.length > 3
    ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
    : numStr;
};

input.addEventListener(
  "input",
  () => (input.value = formatString(input.value))
);
