{

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");


    const calculateResults = (amount, currency) => {

        const rateEUR = 4.68
        const rateUSD = 4.40
        const rateGBP = 5.34

        switch (currency) {
            case "EUR":
                return amount / rateEUR;


            case "USD":
                return amount / rateUSD;


            case "GBP":
                return amount / rateGBP;
        }
    };

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResults(amount, currency)

        resultElement.innerText = ` ${result.toFixed(2)} ${currency}`;
    });
}
