const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
var li = [ingredients.length];

for (let i = 0; i < ingredients.length; i++) {
  li[i] = document.createElement("li");
  li[i].textContent = ingredients[i];
  li[i].classList.add("item");
}

const ul = document.querySelector("ul#ingredients");

ul.append(li[0], li[1], li[2], li[3], li[4], li[5]);
