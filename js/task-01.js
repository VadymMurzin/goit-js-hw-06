const amountCategori = document.querySelectorAll(".item");
console.log(`Number of categories: ${amountCategori.length}`);

amountCategori.forEach((value) => {
  console.log(`Category: ${value.firstElementChild.textContent}`);
  console.log(
    `Elements: ${value.lastElementChild.querySelectorAll("li").length}`
  );
});
