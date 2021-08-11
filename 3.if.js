// prie tam tikrų sąlygų gali atlikti keletą veiksmų kaip:
// Konstrukcija if turi pratesimą else.

var sk1 = 15;
var sk2 = 36;

if (sk1 < sk2 /* = arTiesa*/) {
    console.log(sk1);
    console.log("mažesnis už");
    console.log(sk2);
}
else {
    console.log(sk2);
    console.log("didesnis už");
    console.log(sk1);
}
console.log("pabaiga");

var sk = 10;

if (sk < 0) {
    console.log("neigiamas");
} else
if (sk == 0) {
    console.log("nulis");
} else
if (sk < 10) {
    console.log("mažas");
} else {
    console.log("didelis");
}
console.log("pabaiga");

// Noriu patikrinti ar skaičius 84 yra tarp 1 ir 100.

var sk3 = 84;
if (1 <= sk3 && sk3 <= 100) {
    console.log("tiesa");
} else {
    console.log("netiesa");
}
/* LOGINIAI OPERATORIAI
&& AND IR
|| OR ARBA
! NOT NE neigimas
^ XOR*/
