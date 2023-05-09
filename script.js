const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const form = document.querySelector("form");
const phone = document.querySelector("#phone");

function checkEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function errorMessage(input, message) {
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
  input.className = "form-control is-invalid";
}

function successMessage(input) {
  input.className = "form-control is-valid";
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    errorMessage(input, `${input.id} en az ${min} karakterli olmalıdır!`);
  } else if (input.value.length > max) {
    errorMessage(input, `${input.id} en az ${max} karakterli olmalıdır!`);
  }
}

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    errorMessage(input2, "Şifreler uyuşmuyor!");
  }
}

function checkrerequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value == "") {
      errorMessage(input, "required field");
    } else {
      successMessage(input);
      if (!checkEmail(email.value)) {
        errorMessage(email, "email is incorrect");
      } else {
        successMessage(email);
      }
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkrerequired([username, email, password, repassword]);
  checkLength(username, 6, 15);
  checkLength(password, 6, 12);
  checkLength(repassword, 6, 12);
  checkPasswords(password, repassword);
  checkSpace(username);
  checkSpace(password);
});
