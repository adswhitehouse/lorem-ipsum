// Import data array
import { text } from "./lorem.js";

//Element variables
let paragraphInput = document.querySelector(".jsParagraphInput");
let buttonInput = document.querySelector(".jsButtonInput");
let randomTextContainer = document.querySelector(".jsRandomTextContainer");

// Create lorem on button click
buttonInput.addEventListener("click", () => {
  createLorem();
});

// Create lorem on enter keydown
paragraphInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createLorem();
  }
});

// Function to add lorem text to the page METHOD 1
// function createLorem() {
//   let inputValue = paragraphInput.value;
//   if (inputValue >= 1 && inputValue <= 50) {
//     randomTextContainer.innerText = "";
//     for (let i = 0; i < inputValue; i++) {
//       randomTextContainer.innerText += `${text[randomNumber()]} \n \n`;
//     }
//   } else {
//     alert("Please input a valid paragraph generation value (1 - 50)");
//   }
//   paragraphInput.value = "";
// }

// function randomNumber() {
//   let number = Math.floor(Math.random() * text.length);
//   return number;
// }

// Function to add lorem text to the page METHOD 2
function createLorem() {
  let inputValue = paragraphInput.value;
  if (inputValue < 1 || inputValue > text.length || isNaN(inputValue)) {
    alert("Please enter a valid paragraph generation value (1 - 9)");
  } else {
    randomTextContainer.innerText = "";
    let newTextArray = text.slice(0, inputValue);
    newTextArray.forEach((item) => {
      randomTextContainer.innerText += `${item} \n \n`;
    });
  }
  paragraphInput.value = "";
}
