{
    const welcome = () => {
        console.log("Hello World!!!");
    }

    const calculateResult = (checkedCurrency) => {
        const inputElement = document.querySelector(".js-input");
        const resultElement = document.querySelector(".js-result");
        const euroRate = 4.55;
        const usdRate = 3.78;
        const poundRate = 5.27;
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
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        let checkedCurrency = document.querySelector(".js-currency:checked");
        calculateResult(checkedCurrency);
    };

    const init = () => {
        welcome();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}