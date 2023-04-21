const textInput = document.getElementById("validation-input");

function validateInput(input) {
  const validSimbol = parseInt(textInput.getAttribute("data-length"));

  if (input.length === validSimbol) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}

textInput.addEventListener("blur", () => {
  validateInput(textInput.value);
});
