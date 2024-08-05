"use strict";

var items = document.querySelectorAll("li.item");

console.log("Number of categories : " + items.length);

for (const item of items) {
  console.log("Category: " + item.children[0].textContent);
  console.log("Elements: " + item.children[1].children.length);
}
