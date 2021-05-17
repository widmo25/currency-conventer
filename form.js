{
    const welcome = () => {
        console.log("Hello World!!!");
    }

    const calculateResult = (checkedCurrency, currency) => {
        const euroRate = 4.55;
        const usdRate = 3.78;
        const poundRate = 5.27;
        switch (checkedCurrency.value) {
            case "eur":
                return currency / euroRate;

            case "usd":
                return currency / usdRate;

            case "pound":
                return currency / poundRate;
        };
    }

    const onChangeResultText = (checkedCurrency, currency) => {
        const resultElement = document.querySelector(".js-result");
        const result = calculateResult(checkedCurrency,currency)
        resultElement.innerHTML = `Za ${currency}zł otrzymamy ${result.toFixed(2)} ${checkedCurrency.value}`
    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        let checkedCurrency = document.querySelector(".js-currency:checked");
        const inputElement = document.querySelector(".js-input");
        const currency = +inputElement.value;
        calculateResult(checkedCurrency, currency);
        onChangeResultText(checkedCurrency, currency)
    };

    const init = () => {
        welcome();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}