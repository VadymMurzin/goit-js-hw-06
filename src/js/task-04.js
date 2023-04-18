const addDecrementButton = document.querySelector(`[data-action="decrement"]`);
const removeIncrementButton = document.querySelector(
  `[data-action="increment"]`
);
const valueScreen = document.getElementById("value");

let counterValue = 0;

addDecrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueScreen.textContent = counterValue;
});
removeIncrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueScreen.textContent = counterValue;
});
