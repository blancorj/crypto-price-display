#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <LiquidCrystal.h>

const char* ssid = "";          //your network SSID
const char* password = "";      //your network password

const int RS = 4, EN = 0, d4 = 12, d5 = 13, d6 = 15, d7 = 3;

LiquidCrystal lcd(RS, EN, d4, d5, d6, d7);
 
void setup () {
  Serial.begin(9600);
  
  lcd.begin(16, 2);
  lcd.print("Connecting WiFi");
  lcd.setCursor(0, 1);
  lcd.print("Please wait");
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    }
  lcd.clear();
  lcd.print("WiFi Connected");
  lcd.setCursor(0, 1);
}

void loop() {
  lcd.clear();
  
  if (WiFi.status() == WL_CONNECTED) {
 
    WiFiClient client;

    HTTPClient http;
    
    http.begin(client, "/crypto");     //set to whatever your localhost is defined as
    
    int httpCode = http.GET();
 
    if (httpCode > 0) {                    //Check the returning code
      String payload = http.getString();   //Get the request response payload
      
      lcd.print("btc price in USD");

      lcd.setCursor(0, 1);

      lcd.print(payload);      
      }
     else {
      lcd.print("Connection error");
      lcd.setCursor(0, 1);
      lcd.print(httpCode);
     }

    http.end();   //Close connection
  }
 
  delay(60000);    //Send a request every minute
}
