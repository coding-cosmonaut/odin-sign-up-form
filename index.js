// <!--const Another red = d3003f-->
const inputs = document.querySelectorAll("input");
const mainPassword = document.querySelector("#password");
const secondPassword = document.querySelector("#confirm-password");
const errorDiv = document.querySelector(".error");
const submitBttn = document.querySelector(".submit");

let validation = false;

secondPassword.addEventListener("keyup", (event) => {
  let targetVal = event.target.value;
  let comparisonPass = mainPassword.value;
  checkPasswords(targetVal, comparisonPass);
});

function checkPasswords(pass1, pass2) {
  if (pass1 === pass2) {
    errorDiv.classList.add("error-show");
    validation = true;
    return;
  } else {
    errorDiv.classList.remove("error-show");
    validation = false;
  }
}

submitBttn.addEventListener("click", () => {
  if (validation) {
    window.location.reload();
    return;
  }
  errorDiv.classList.remove("error-show");
});

inputs.forEach((item) => {
  item.addEventListener("focus", () => {
    if (item.value) return;
    item.nextElementSibling.textContent = compareNames(
      item.nextElementSibling.textContent
    );
  });
});

inputs.forEach((item) => {
  item.addEventListener("blur", () => {
    if (!item.value) {
      item.nextElementSibling.textContent = compareNames(
        item.nextElementSibling.textContent
      );
    }
  });
});

function compareNames(value) {
  switch (value) {
    case "первый имя":
      return "FIRST NAME";
    case "FIRST NAME":
      return "первый имя";
    case "последний имя":
      return "LAST NAME";
    case "LAST NAME":
      return "последний имя";
    case "Эл. адрес":
      return "EMAIL";
    case "EMAIL":
      return "Эл. адрес";
    case "номер телефона":
      return "PHONE NUMBER";
    case "PHONE NUMBER":
      return "номер телефона";
    case "пароль":
      return "PASSWORD";
    case "PASSWORD":
      return "пароль";
    case "Подтвердите пароль":
      return "Confirm Password";
    case "Confirm Password":
      return "Подтвердите пароль";
    default:
      return value;
  }
}
