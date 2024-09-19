#!/usr/bin/env node

import axios from 'axios';
import chalk from 'chalk';

// const axios =  require ('axios');
// const chalk = require ('chalk'); 

const app = async () => {

    const names = ['ethereum', 'solana', 'base']
    const fiat = 'usd';
    const ids = names.join(',');
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.toLowerCase()}&vs_currencies=${fiat.toLowerCase()}`; 

    try {
        const response = await axios.get(URL);

        for (const name of names) {

        const price = response.data[name.toLowerCase()]?.[fiat.toLowerCase()];

        if (price) {
            console.log(`${chalk.yellow(name.toUpperCase())} price in ${chalk.yellow(fiat.toUpperCase())}: ${chalk.green(`$${price}`)} 📉 `);
        } else {
            console.log(chalk.red(`Price information for ${name.toUpperCase()} in ${fiat.toUpperCase()} is not available.`));
        }
    }
    } catch (err) {
        console.error(chalk.red('Error fetching the prices:'), err.message);
    }

}

app();
