const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  const validSimbol = parseInt(textInput.getAttribute("data-length"));

  if (textInput.value.length === validSimbol) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
