function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".change-color");

input.addEventListener("click", () => {
  const temp = document.querySelector("body");
  const temp2 = document.querySelector(".color");
  const temp3 = getRandomHexColor();
  temp.style.backgroundColor = temp3;
  temp2.textContent = temp3;
});
