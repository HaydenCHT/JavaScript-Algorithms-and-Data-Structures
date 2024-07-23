const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const phoneRegex = /^(1\s\d{3}-\d{3}-|\d{3}-\d{3}-|\d{6}|1\s\(?\d{3}\)?\s\d{3}[-\s]?|1?\(\d{3}\)\d{3}-)\d{4}$/;

const validate = () => {
  if(userInput.value===""){
    alert("Please provide a phone number");
    return;
  }
  if(!(userInput.value.match(phoneRegex))) {
    results.innerText = invalidInput(userInput.value);
    return;
  } else {
    results.innerText = validInput(userInput.value);
  }
}

const validInput = input => {
  return `Valid US number: ${input}`
}

const invalidInput = input => {
  return `Invalid US number: ${input}`
}

const removeResult = () => results.innerText = "";

checkBtn.addEventListener("click", validate)
clearBtn.addEventListener("click", removeResult)