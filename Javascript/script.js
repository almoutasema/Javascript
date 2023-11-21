document.addEventListener('DOMContentLoaded', () => {
    const currencyList = document.querySelector('.currency-list');

    // Fetch currency rates from the API
    fetch('https://v6.exchangerate-api.com/v6/cb32a8d0ff4761177a0525f8/latest/USD')
        .then(response => response.json())
        .then(data => {
            const currencyRates = data.conversion_rates;

            // Display currency rates in the interface
            for (const currency in currencyRates) {
                const rate = currencyRates[currency];
                const currencyItem = document.createElement('div');
                currencyItem.className = 'currency-item';
                currencyItem.textContent = `${currency}: ${rate.toFixed(2)}`;
                currencyList.appendChild(currencyItem);
            }
        })
        .catch(error => {
            console.error('Error fetching currency rates:', error);
        });
});
