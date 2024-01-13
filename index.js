// <!--const Another red = d3003f-->
const inputs = document.querySelectorAll("input");

inputs.forEach((item) => {
  item.addEventListener("focus", (event) => {
    if (item.value) return;
    item.nextElementSibling.textContent = compareNames(
      item.nextElementSibling.textContent
    );
  });
});

inputs.forEach((item) => {
  item.addEventListener("blur", (event) => {
    console.log(item.value, "in blur");
    if (!item.value) {
      item.nextElementSibling.textContent = compareNames(
        item.nextElementSibling.textContent
      );
    }
  });
});

function compareNames(value) {
  console.log(value, "compareNames");
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
