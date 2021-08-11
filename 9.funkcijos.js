let nuo = 5;
let iki = 10;
// skaiciu suma nuo iki
// 5+6+7+8+9+10=45
let suma = 0;
for (let i = nuo; i <= iki; i++) {
    suma += i;
}
console.log(suma);

nuo = 51354;
iki = 6516951;
// skaiciu suma nuo iki
suma = 0;
for (let i = nuo; i <= iki; i++) {
    suma += i;
}
console.log(suma);

nuo = 65165;
iki = 789165;
suma = 0;
for (let i = nuo; i <= iki; i++) {
    suma += i;
}
console.log(suma);

// tam kad nereiktu kas karta kopijuoti to pacio skaiciavimo panaudosim FUNKCIJA

function skaiciuSuma(nuo, iki) {
    if (nuo > iki) { 
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}
}
// tokiu atveju:
let nuo = 5;
let iki = 10;
console.log(skaiciuSuma(nuo, iki));

nuo = 51354;
iki = 6516951;
console.log(skaiciuSuma(nuo, iki));

nuo = 65165;
iki = 789165;
console.log(skaiciuSuma(nuo, iki));

// KITAS PVZ:

function skaiciuSuma(nuo, iki) {
    if (nuo > iki) {
        return 0;
        console.log("sita komanda niekada nebus vykdoma")
    }
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    console.log("is funkcijos vidaus", suma);
    return suma;
}
skaiciuSuma(1, 3); // ISKVIES FUNKCIJA, SUSKAICIUOS SUMA, BET NEATSPAUSDINS, nebent i funkcijos vidu irasysim console.log (suma)
console.log(skaiciuSuma(10, 5)); // ISKVIETE FUNKCIJA, SUSKAICIAVO IR ATSPAUSDINO
console.log(skaiciuSuma(5, 10)); // ISKVIETE FUNKCIJA SUSKAICIAVO IR ATSPAUSDINO

// funkcija

function calc(veiksmas, a, b) {
    function sum(sk1, sk2) {
        return sk1 + sk2;
    }
    if (veiksmas === "suma") {
        return sum(a, b);
    } else if (veiksmas === "atimtis") {
        return sub(a, b);
    } else {
        console.log("nezinomas veiksmas");
    }
    function sub(b, c) {
        return b - c;
    }
}
console.log(calc("suma", 3, 4));
console.log(calc("atimtis", 15, 7));
console.log(calc("daugyba", 15, 7))

// //  KITA FUNKCIJA, jeigu priskiriame funkcija div
function div(a, b) {
    return a / b;
}
function calc(veiksmas, a, b) {
    function sum(sk1, sk2) {
        return sk1 + sk2;
    }
    if (veiksmas === "suma") {
        return sum(a, b);
    } else if (veiksmas === "atimtis") {
        return sub(a, b);
    } else if (veiksmas === "dalyba") {
        return div(a, b);
    } else {
        console.log("nezinomas veiksmas");
    }
    function sub(b, c) {
        return b - c;
    }
}
console.log(calc("suma", 3, 4));
console.log(calc("atimtis", 15, 7));
console.log(calc("daugyba", 15, 7));
console.log(calc("dalyba", 15, 7));