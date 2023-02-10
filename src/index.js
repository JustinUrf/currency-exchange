import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyApiCall from './services/currency';

// Business Logic
function getCurrencyData(){

}

function clearResults(){

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