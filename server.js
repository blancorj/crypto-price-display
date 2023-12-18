const express = require("express");
const axios = require("axios");

const app = express();

const cryptoUSD = async function () {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin,ethereum',
        {headers: {
            'X-CMC_PRO_API_KEY': '5795b33a-aca5-40ae-8caf-fb062d044725'
        }
    });

    return response.data;
    } catch (err) {
        console.error(err);
    }
};

const cryptoCAD = async function () {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin,ethereum&convert=CAD',
        {headers: {
            'X-CMC_PRO_API_KEY': '5795b33a-aca5-40ae-8caf-fb062d044725'
        }
    });

    return response.data;
    } catch (err) {
        console.error(err);
    }
};

// app.get("/bitcoin/USD", async function(req, res){
//     const response = await cryptoUSD();

//     let price = response.data[1].quote.USD.price.toFixed(2);

//     res.send('$' + price);
// });

app.get('/bitcoin/:coin', async function(req, res){
    let currency = req.params.coin;
    let param1 = currency.toUpperCase();

    let response;
    let price;

    switch(param1){
        case "USD":
            response = await cryptoUSD();
            break;
        case "CAD":
            response = await cryptoCAD();
            break;
        default:
            response = await cryptoCAD();
            break;
    }

    price = response.data[1].quote[param1].price.toFixed(2);

    res.send('$' + price);
});


// app.get("/bitcoin/CAD", async function(req, res){
//     const response = await cryptoCAD();

//     let price = response.data[1].quote.CAD.price.toFixed(2);

//     res.send('$' + price);
// });

app.get("/ethereum/USD", async function(req, res){
    const response = await cryptoUSD();

    let price = response.data[1027].quote.USD.price.toFixed(2);

    res.send('$' + price);
});

app.get("/ethereum/CAD", async function(req, res){
    const response = await cryptoCAD();

    let price = response.data[1027].quote.CAD.price.toFixed(2);

    res.send('$' + price);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000!");
});