import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyApiCall from './services/currency';

// Business Logic
function printCurrency(userInput, currencyType, exchangedCurrency,exchangeCurrencyType){
document.querySelector.innerText = `${userInput} ${currencyType} is ${exchangedCurrency} in ${exchangeCurrencyType}`
}

function printError(error) {
  document.querySelector('#')
}

function clearResults(){
  document.querySelector("#currencydata").innerText = null;
}

function handleUserInput(event) {
  event.preventDefault();
  clearResults();
  const userNumber = document.querySelector("#user-input").ariaValueMax;
  document.querySelector("user-input.value").value = null;
  getCurrencyData();
  console.log(userNumber)
  CurrencyApiCall();
}

window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", handleUserInput);
});