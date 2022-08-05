const express = require("express");
const axios = require("axios");

const app = express();

const sendGetRequest = async function () {
    try {
        const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
        }
    });

    return response.data;
    } catch (err) {
        console.error(err);
    }
};

app.get("/crypto", async function(req, res){
    const response = await sendGetRequest();

    let price = response.data[0].quote.USD.price.toFixed(2);

    res.send('$' + price);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000!");
});

