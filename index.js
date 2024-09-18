#!/usr/bin/env node

const axios = require('axios');

const api = async (cryptos, fiat) => {
    // Convert the array of cryptos into a comma-separated string
    const ids = cryptos.join(',');
    console.log(ids)
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.toLowerCase()}&vs_currencies=${fiat.toLowerCase()}`;
    
    try {
        const response = await axios.get(url);
        for (const crypto of cryptos) {
            const price = response.data[crypto.toLowerCase()]?.[fiat.toLowerCase()];
            if (price) {
                console.log(`1 ${crypto.toUpperCase()} price in ${fiat.toUpperCase()}: ${price}`);
            } else {
                console.log(`Price information for ${crypto.toUpperCase()} in ${fiat.toUpperCase()} is not available.`);
            }
        }
    } catch (error) {
        console.error('Error fetching the prices:', error.message);
    }
}

// Example usage (replace these values or integrate with CLI args):
const cryptos = ['solana', 'bitcoin', 'ethereum', 'shibainu', 'base']; // List of cryptocurrencies
const fiat = 'usd'; // Fiat currency
api(cryptos, fiat);
