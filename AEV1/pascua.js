const readlynseSync = require("readline-sync");
let anyo, a, b, c, d, e, n;

anyo = readlynseSync.questionInt("De que anyo quieres consultar? ");

a = anyo % 19;
b = anyo % 4;
c = anyo % 7;
d = (19 * a + 24) % 30;
e = (2 * b + 4 * c + 6 * d + 5) % 7;
n = 22 + d + e;

if (n <= 31) {
    console.log("El domingo de Pascua este anyo es el", n, "de MARZO");
} else {
    console.log("El domingo de Pascua este anyo es el", n - 31, "de ABRIL");
}