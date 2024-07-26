let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let moneyValue = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100,
}
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const changeByCurrency = (change, i) => Math.floor(change/moneyValue[cid[i][0]])*moneyValue[cid[i][0]] > cid[i][1] ? cid[i][1] : Math.floor(change/moneyValue[cid[i][0]])*moneyValue[cid[i][0]];

const rounding = (x, y) => Math.round((x - y) * 100) / 100;

const checkEmpty = (change) => {
  for (let i = 0; i < change.length; i++){
        if (change[i][1]!=0){
          return false;
        }
  }
  return true;
}

const changeCalculation = () => {
  if (cash.value<price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (Number(cash.value) === price) {
    changeDue.innerHTML = `No change due - customer paid with exact cash`;
  } else {
    let listOfChange = "";
    let remainingChange = cid.slice();
    let change = Number(cash.value) - price;
    for (let i = 8; i >= 0; i--){
      if (change%moneyValue[remainingChange[i][0]]===0){
      const actualChange = changeByCurrency(change, i);
      if(actualChange!=0){
        listOfChange += `${remainingChange[i][0]}: $${actualChange} `;
      }
      change = rounding(change, actualChange);
      remainingChange[i][1] = rounding(remainingChange[i][1], actualChange);
      } else if (change/moneyValue[remainingChange[i][0]]>1) {
        const actualChange = changeByCurrency(change, i);
      if(actualChange!=0){
        listOfChange += `${remainingChange[i][0]}: $${actualChange} `;
      }
      change = rounding(change, actualChange);
      remainingChange[i][1] = rounding(remainingChange[i][1], actualChange);
      }

      if(change===0){
        break;
      }
    }
    console.log(change);
    if (checkEmpty(remainingChange)&&change===0) {
      changeDue.innerHTML = `Status: CLOSED ${listOfChange}`;
    } else if (change!=0) {
      changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
    } else {
      changeDue.innerHTML = `Status: OPEN ${listOfChange}`;
    }
  }
}

purchaseBtn.addEventListener("click", changeCalculation);