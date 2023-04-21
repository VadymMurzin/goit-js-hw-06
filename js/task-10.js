function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const numberElInput = document.querySelector('[type="number"]');
const boxesEl = document.getElementById("boxes");

function createBoxes() {
  const amount = Number(numberElInput.value);

  if (!isNaN(amount)) {
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesEl.append(box);
      size += 10;
    }
  } else {
    alert("Please enter a valid number");
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
