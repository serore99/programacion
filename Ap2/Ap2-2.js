const readlyneSync = require("readline-sync");
let edad = 0;
for (let i = 1; i <= 4; i++) {
    edad = readlyneSync.questionInt("Que edad tienes? ");
    if (edad >= 18) {
        console.log("La persona es mayor de edad ya que tiene", edad, "años");
    } else {
        console.log("La persona es menor de edad ya que tiene", edad, "años");
    }
}