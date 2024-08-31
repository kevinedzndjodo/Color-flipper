const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeColor = document.querySelector("#btn");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
