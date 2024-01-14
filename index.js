// <!--const Another red = d3003f-->
const inputs = document.querySelectorAll("input");
const mainPassword = document.querySelector("#password");
const secondPassword = document.querySelector("#confirm-password");
const errorDiv = document.querySelector(".error");
const submitBttn = document.querySelector(".submit");

submitBttn.addEventListener(
  "click",
  (
    event,
    value = mainPassword.value,
    comparisonValue = secondPassword.value
  ) => {
    if (value !== comparisonValue) {
      event.preventDefault();
      errorDiv.classList.remove("error-show");
      secondPassword.classList.add("error-password");
      mainPassword.classList.add("error-password");
    }
  }
);

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
