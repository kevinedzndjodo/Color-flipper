const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const changeColor = document.querySelector("#btn");

changeColor.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
  const colorName = document.querySelector("#color");
  colorName.textContent = colors[randomIndex];
});
