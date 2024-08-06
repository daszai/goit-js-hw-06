"use strict";

const validation = document.querySelector("#validation-input");

validation.addEventListener("blur", (e) => {
  if (validation.value.length === parseInt(validation.dataset.length)) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.add("invalid");
    validation.classList.remove("valid");
  }
});

validation.addEventListener("focus", (e) => {
  validation.classList.remove("invalid");
  validation.classList.remove("valid");
});
