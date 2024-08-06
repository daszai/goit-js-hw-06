"use strict";

let counterValue = document.querySelector("#value");
counterValue.innerHTML = 0;

const decrement = document.querySelector("[data-action=decrement]");
const increment = document.querySelector("[data-action=increment]");

decrement.addEventListener("click", () => {
  let temp = counterValue.innerHTML;
  temp = parseInt(temp) - 1;
  counterValue.innerHTML = temp;
});

increment.addEventListener("click", () => {
  let temp = counterValue.innerHTML;
  temp = 1 + parseInt(temp);
  counterValue.innerHTML = temp;
});
