const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля форми!");
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    event.currentTarget.reset();
  }
}
