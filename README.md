# Cryptocurrency Price Display

A simple and fun project to relearn Arduino and introduce myself to Node.js. The Arduino makes get requests every minute to the localhost and displays the cryptocurrency price in USD, while the localhost will fetch live currency prices directly from the <code>CoinMarketCap.com</code> API.

Right now I have it pointing to CoinMarketCap's sandbox environment for testing. To access live data, you will need to register an account to obtain your own API key to be used with their <code>pro-api.coinmarketcap.com</code> domain.

## Parts Used:
- Standard HD44780 LCD
- ESP8266 NodeMCU ESP-12E CP2102
- 10k ohm trim potentiometer

![image](https://user-images.githubusercontent.com/68245536/183001541-12117d84-c3ca-4ee6-8d2e-1d670213a7f2.png)
