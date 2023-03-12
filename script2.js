const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

const button = document.getElementById("reverse-button");
button.addEventListener("click", function () {
  
  const inputValue = inputField.value;
  if (isNaN(inputValue)) {

    outputField.value = 'Напишіть число!';
    return;
}
  const reversedValue = inputValue.split("").reverse().join("");


  outputField.value = reversedValue;

});
