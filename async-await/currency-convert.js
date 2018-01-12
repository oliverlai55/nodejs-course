// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = (from, to) => {
	return axios
		.get(`https://api.fixer.io/latest?base=${from}`)
		.then(response => {
			return response.data.rates[to];
		});
};

const getCountries = currencyCode => {
	return axios
		.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
		.then(response => {
			return response.data.map(country => country.name);
		});
};

const convertCurrency = (from, to, amount) => {
	let countries;
	return getCountries(to)
		.then(tempCountries => {
			countries = tempCountries;
			return getExchangeRate(from, to);
		})
		.then(rate => {
			const exchangeAmount = amount * rate;

			return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(
				', ',
			)}`;
		});
};

const convertCurrencyAlt = async (from, to, amount) => {
	const countries = await getCountries(to);
	const rate = await getExchangeRate(from, to);
	const exchangedAmount = amount * rate;

	return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(
		', ',
	)}`;
};
// Create convertCurrencyAlt as async function
// Get countries and rate using await and our two function
// Calculate exchangeAmount
// Return status string

convertCurrencyAlt('CAD', 'USD', 100).then(status => {
	console.log(status);
});

// getCountries('USD').then(countries => {
// 	console.log(countries);
// });
//
// getExchangeRate('USD', 'CAD').then(rate => {
// 	console.log(rate);
// });
