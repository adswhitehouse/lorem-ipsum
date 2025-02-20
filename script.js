import { text } from "./lorem.js";

let paragraphInput = document.querySelector(".jsParagraphInput");
let buttonInput = document.querySelector(".jsButtonInput");
let randomTextContainer = document.querySelector(".jsRandomTextContainer");

buttonInput.addEventListener("click", () => {
  let inputValue = paragraphInput.value;
  if (inputValue === "") {
    randomTextContainer.innerText = `${text[randomNumber()]}`;
  } else if (inputValue >= 1 && inputValue <= 50) {
    randomTextContainer.innerText = "";
    for (let i = 0; i < inputValue; i++) {
      randomTextContainer.innerText += `${text[randomNumber()]} \n \n`;
    }
  } else {
    alert("Please input a valid paragraph generation value (1 - 50)");
  }
  paragraphInput.value = "";
});

function randomNumber() {
  let number = Math.floor(Math.random() * text.length);
  return number;
}
