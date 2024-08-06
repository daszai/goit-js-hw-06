"use strict";

const input = document.querySelector("#font-size-control");

input.addEventListener("input", () => {
  const temp = document.querySelector("#text");
  temp.style.fontSize = input.value + "px";
});
