const jsTitle = document.querySelector(".js-title");
const jsRange = document.getElementById("js-range");
const jsGuessForm = document.getElementById("js-guess");
const jsResult = document.querySelector("#js-result span");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

jsTitle.innerHTML = `Generate a number between 0 and <span>${jsRange.value}</span>`;

jsRange.addEventListener("input", () => {
  jsTitle.querySelector("span").textContent = jsRange.value;
});

jsGuessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userGuess = parseInt(document.getElementById("num").value);
  
  if (isNaN(userGuess) || userGuess < 0 || userGuess > parseInt(jsRange.value)) {
    jsResult.textContent = `Please enter a valid number between 0 and ${jsRange.value}.`;
  } else {
    const randomNumber = generateRandomNumber(0, parseInt(jsRange.value));
    if (userGuess === randomNumber) {
      jsResult.textContent = `You choose: (${userGuess}), the machine choose: ${randomNumber}. You win!`;
    } else {
      jsResult.textContent = `You choose: (${userGuess}), the machine choose: ${randomNumber}. You lost!.`;
    }
  }
});