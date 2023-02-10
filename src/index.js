import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyApiCall from './services/currency';

// Business Logic
function currencyApiCall(userNumber, currencyType, currencyExchange) {
  CurrencyApiCall.getExchangeRate()
    .then(function(apiResponse) {
      if(apiResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the currency data from Currency Exchange API for ${userNumber} ${apiResponse.message}`;
        throw new Error(errorMessage);
      }
      //Sets up USD Dollar conversion, everything coverts itself to USD before comparison...
      const currencyObject = apiResponse;
      if(currencyObject.conversion_rates[currencyType] === undefined) {
        const badCurrency = `Currency ${currencyType} is not supported with the Currency Exchange API`
        throw new Error(badCurrency);
      }
      if(currentObject.conversion_rates[currencyExchange] === undefined) {
        const badCurrencyExchange = `Currency ${currencyExchange} is not supported with the Currency Exchange API`
        throw new Error(badCurrencyExchange);
      }
      const userNumberToUSD = userNumber / currencyObject.conversion_rates[currencyType];
      const exchangedCurrencyRate = currencyObject.conversion_rates[currencyExchange];
      const result = userNumberToUSD * exchangedCurrencyRate;
      printCurrency(userNumber, currencyType, result, currencyExchange);
    })
    .catch(function(error) {
      printError(error);
    });
}

function printCurrency(userInput, currencyType, exchangedCurrency, exchangeCurrencyType) {
  document.querySelector("#currencydata").innerText = `${userInput} ${currencyType} is ${exchangedCurrency} in ${exchangeCurrencyType}`;
}

function printError(error) {
  document.querySelector('#error').innerText = error;
}

//clear and resetting forms
function clearResults(){
  document.querySelector("#currencydata").innerText = null;
  document.querySelector("#error").innerText = null;
  document.getElementById("currency1-id").selectedIndex = 0;
  document.getElementById("currency2-id").selectedIndex = 0;
}

//handles user input
function handleUserInput(event) {
  event.preventDefault();
  const userNumber = document.querySelector("#user-input").value;
  const userCurrencyChoice = document.getElementById("currency1-id").value;
  const userCurrencyExchangeChoice = document.getElementById("currency2-id").value;
  currencyApiCall(userNumber, userCurrencyChoice, userCurrencyExchangeChoice);
  clearResults();
}

//handles on load function
window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", handleUserInput);
});