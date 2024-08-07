function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxs2 = document.querySelector("div#boxes ");
  const boxs = document.createElement("span");

  for (let i = 0; i < amount; i++) {
    const temp = document.createElement("div");
    temp.style.width = 30 + i * 10 + "px";
    temp.style.height = 30 + i * 10 + "px";
    temp.style.backgroundColor = getRandomHexColor();
    boxs.insertAdjacentElement("beforeend", temp);
  }
  boxs2.append(boxs);
}
function destroyBoxes() {
  document.querySelector("div#boxes ").innerHTML = "";
}

const createBox = document.querySelector("[data-create]");
createBox.addEventListener("click", () => {
  var temp = document.querySelector("[type=number]");

  createBoxes(temp.valueAsNumber);
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
