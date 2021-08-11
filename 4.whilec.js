// // Noriu sudėti visus sk. nuo 5 iki 73
var suma = 0;
suma += 5;
suma += 6;
suma += 7;
// // --- ir t.t. reiktų rašyti ...
suma += 73;
console.log(suma);
// // yra lengvesnis variantas:

var naujasuma = 0;
var i = 5;

while (i <= 73) {
    naujasuma += i;
    i += 1;
}
console.log(naujasuma);

 /* arTiesa jog i <= 73, kol true, apačioje ciklas vyks, kai bus false - nebevyks.*/

//  Jeigu noriu turėti visų lyginių skaičių sumą intervale nuo 0 iki 100.
var lyginiuSkaiciuSuma = 0;
var sk = 0;
while (sk <= 100) {
    lyginiuSkaiciuSuma += sk;
    sk += 2;
}
console.log(lyginiuSkaiciuSuma);

/*Surasti visus pirminius skaičius intervale nuo 2 iki 100.
ŽINGSNIAI: 
1. išsirašyti pirminius skaičius nuo 2 iki 100.
2. Kiekvieną skaičių reikia dalinti iš savęs paties.
3. Jei be liekanos - ne pirminis; su liekana - pirminis. */

var sk1 = 2;
while (sk1 <= 100) {
    var daliklis = 2;
    var pirminis = true;
    while (daliklis < sk1) {
        if (sk1 % daliklis == 0) {
            pirminis = false;
        } 
        daliklis += 1;
    }
    if (pirminis) {
        console.log(sk1);
    } sk1 += 1;
} 


// PASITRENIRAVIMUI:

let nuo = 5;
let iki = 10;
// skaiciu suma nuo iki
// 5+6+7+8+9+10=45
// su pateiktais 3 ciklais
let suma = 0;
while (nuo <= iki) {
    suma += nuo;
    nuo += 1;
} 
console.log(suma);

suma = 0;
nuo = 5;
iki = 10;
do { 
    suma += nuo;
    nuo += 1;
} while (nuo <= iki);
console.log(suma);

suma = 0;
nuo = 5;
iki = 10;
for (var i = nuo; i <= iki; i++) {
    suma += i;
} console.log(suma);

