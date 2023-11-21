function calculateExchange() {
    const amountInput = document.getElementById("amount");
    const resultElement = document.getElementById("result");
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        resultElement.textContent = "Ange ett giltigt belopp";
        return;
    }

    const commissionPercentage = 10;
    const commission = (amount * commissionPercentage) / 100;
    const totalAmount = amount - commission;

    fetch("https://v6.exchangerate-api.com/v6/cb32a8d0ff4761177a0525f8/latest/USD")
        .then((response) => response.json())
        .then((data) => {
            if (data.conversion_rates) {
                const exchangeRate = data.conversion_rates["SEK"]; // välj målvaluta
                const convertedAmount = totalAmount * exchangeRate;
                resultElement.textContent = `Beloppet efter att ha tagit provisionen: $${totalAmount.toFixed(2)} USD = ${convertedAmount.toFixed(2)} 'SEK`;
            } else {
                resultElement.textContent = "Det gick inte att hämta växelkurser ";
            }
        })
        .catch((error) => {
            console.error(error);
            resultElement.textContent = "Ett fel uppstod vid anslutning till servern.";
        });
}
