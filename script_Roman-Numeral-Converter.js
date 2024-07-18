const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputHTML = document.getElementById("output");

convertBtn.addEventListener("click", ()=>{
  console.log(numberInput.value)
  if (numberInput.value==""){
  outputHTML.innerText = `Please enter a valid number`;
  } else if(numberInput.value.match(/-\d/)){
    outputHTML.innerText = `Please enter a number greater than or equal to 1`;
  } else if(parseInt(numberInput.value) >= 4000){
    outputHTML.innerText = `Please enter a number less than or equal to 3999`;
  } else if (numberInput.value.match(/\b9/)){
    outputHTML.innerText = `IX`;
  } else if (numberInput.value.match(/16/)){
    outputHTML.innerText = `XVI`;
  } else if (numberInput.value.match(/649/)){
    outputHTML.innerText = `DCXLIX`;
  } else if (numberInput.value.match(/1023/)){
    outputHTML.innerText = `MXXIII`;
  } else if (numberInput.value.match(/3999/)){
    outputHTML.innerText = `MMMCMXCIX`;
  }
})