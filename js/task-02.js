const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("ul");

const createList = ingredients.map((option) => {
  const liElement = document.createElement("li");
  liElement.textContent = option;
  liElement.classList.add("item");
  return liElement;
});

listIngredients.append(...createList);
