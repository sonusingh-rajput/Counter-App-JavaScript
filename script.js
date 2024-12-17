const number = document.querySelector(".number");
const decrementButton = document.querySelector(".dec");
const incrementButton = document.querySelector(".inc");
const inputBox = document.querySelector(".input-area > input");
const resetButton = document.querySelector(".reset-btn");

let count = 0;

// Update number on the UI
function updateUI() {
  number.textContent = count;
}

// Increment Button
incrementButton.addEventListener("click", () => {
  let inputValue = parseInt(inputBox.value) || 1; // Default to 1 if input is empty
  count += inputValue;
  updateUI();
  console.log(`Incremented by ${inputValue}, Count: ${count}`);
});

// Decrement Button
decrementButton.addEventListener("click", () => {
  let inputValue = parseInt(inputBox.value) || 1; // Default to 1 if input is empty
  count -= inputValue;
  updateUI();
  console.log(`Decremented by ${inputValue}, Count: ${count}`);
});

// Reset Button
resetButton.addEventListener("click", () => {
  count = 0;
  inputBox.value = ""; // Clear input box
  updateUI();
  console.log(`Count reset to ${count}`);
});

// Initialize UI
updateUI();
