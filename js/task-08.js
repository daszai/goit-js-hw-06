"use strict";

const form = document.querySelector("form.login-form");
const password = document.querySelector("[type=password]");
const email = document.querySelector("[type=email]");

let submit = {
  email: "",
  password: "",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value === "" || email.value === "") {
    alert("wszystkie pola powinny zostać wypełnione");
    return;
  }

  submit.email = form.elements[0].value;
  submit.password = form.elements[1].value;
  console.log(submit);
  form.reset();
});
