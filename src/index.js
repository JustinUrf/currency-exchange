import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyApiCall from './services/currency';

// Business Logic
function printCurrency(userInput, currencyType, exchangedCurrency, exchangeCurrencyType){
document.querySelector.innerText = `${userInput} ${currencyType} is ${exchangedCurrency} in ${exchangeCurrencyType}`
}

function printError(error) {
  document.querySelector('#')
}

//clear and resetting forms
function clearResults(){
  document.querySelector("#currencydata").innerText = null;
  document.getElementById("currency1-id").selectedIndex = 0;
  document.getElementById("currency2-id").selectedIndex = 0;
}

//handles user input
function handleUserInput(event) {
  event.preventDefault();
  clearResults();
  const userNumber = document.querySelector("#user-input").ariaValueMax;
  document.querySelector("user-input.value").value = null;
  getCurrencyData();
  console.log(userNumber)
  CurrencyApiCall();
}

//handles on load function
window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", handleUserInput);
});