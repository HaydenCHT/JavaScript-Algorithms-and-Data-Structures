const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanInputString(str) {
  const regex = /[_\W]/g;
  return str.replace(regex, '');
}

function checkInput() {
  if (textInput.value === "") {
    return alert("Please input a value");
  }
  const cleanedTextInput = cleanInputString(textInput.value).toLowerCase();
  const reverseText = cleanedTextInput.split('').reverse().join('');
  if(reverseText === cleanedTextInput) {
    result.innerHTML = `${textInput.value} is a palindrome`;
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome`;
  }
}

checkButton.addEventListener("click", checkInput);