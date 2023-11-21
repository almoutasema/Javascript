document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertButton = document.getElementById('convert');
    const resultParagraph = document.getElementById('result');

    // Fetch currency rates from the API
    fetch('https://v6.exchangerate-api.com/v6/cb32a8d0ff4761177a0525f8/latest/USD')
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);

            // Populate currency select options for both from and to
            currencies.forEach(currency => {
                const fromOption = document.createElement('option');
                fromOption.value = currency;
                fromOption.textContent = currency;
                fromCurrencySelect.appendChild(fromOption);

                const toOption = document.createElement('option');
                toOption.value = currency;
                toOption.textContent = currency;
                toCurrencySelect.appendChild(toOption);
            });

            // Convert currency on button click
            convertButton.addEventListener('click', () => {
                const amount = parseFloat(amountInput.value);
                const fromCurrency = fromCurrencySelect.value;
                const toCurrency = toCurrencySelect.value;

                if (!isNaN(amount)) {
                    const rate = data.conversion_rates[toCurrency];
                    const convertedAmount = amount * rate;
                    resultParagraph.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                } else {
                    resultParagraph.textContent = 'Please enter a valid amount.';
                }
            });
        })
        .catch(error => {
            console.error('Error fetching currency rates:', error);
        });

function handleClickEvent() {
    const messageParagraph = document.getElementById('message');
    messageParagraph.textContent = 'För att hjälpa dig så snabbt som möjligt kan du ringa 0728286066 eller mejla info@se';

    // 10 sekunder 
    setTimeout(() => {
        messageParagraph.textContent = '';
    }, 10000); // 10 
}

//  koppla knap med `addEventListener` 
document.getElementById('button').addEventListener('click', handleClickEvent);


const header = document.querySelector("#header-app");
header.innerHTML="<h1>Al-Aseel valutaomvandlare</h1>"; 

  });














