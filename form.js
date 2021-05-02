console.log("Hello World!!!");

let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let resultElement = document.querySelector(".js-result");

let euroRate = 4.55;
let usdRate = 3.78;
let poundRate = 5.27;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let checkedCurrency = document.querySelector(".js-currency:checked");
    switch (checkedCurrency.value) {
        case "eur":
            let euroChange = inputElement.value / euroRate;
            resultElement.innerHTML = `za ${inputElement.value}zł otrzymamy ${euroChange.toFixed(2)} Euro`;
            break;

        case "usd":
            let dollarChange = inputElement.value / usdRate;
            resultElement.innerHTML = `za ${inputElement.value}zł otrzymamy ${dollarChange.toFixed(2)} Dolarów`;
            break;

        case "pound":
            let poundChange = inputElement.value / poundRate;
            resultElement.innerHTML = `za ${inputElement.value}zł otrzymamy ${poundChange.toFixed(2)} Funtów`;
            break;
    };
});