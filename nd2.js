// // DAUGYBOS LENTELE SU CIKLU WHILE kai vaizdas turi būti toks: 2 x 2 = 4, t.y. 2 2 4
// var nuo = 2;
// var iki = 4;


while (nuo <= iki) {
    var daugiklis = 2;
    while (daugiklis <= iki) {
        console.log(nuo, daugiklis, nuo * daugiklis);
        daugiklis++;
    }
    nuo++;
}

// // DAUGYBOS LENTELE SU CIKLU DO WHILE:
var a = 2;
var b = 4;

do {
    var c = 2;
    do {
        console.log(a, c, a * c);
        c++;
    }
    while (c <= b);
    a++;
}
while (a <= b);

// DAUGYBOS LENTELE SU CIKLU FOR:
var nuo = 2;
var iki = 4;

for (var daugiklis = 2; daugiklis <= iki; daugiklis++) {
    for (var i = nuo; i <= iki; i++) {
        console.log(nuo, daugiklis, nuo * daugiklis);
    }

} console.log("daugybos pabaiga");

// 4! FAKTORIALO SAKICIAVIMAS:

var sk = 4;

var f = 1;
for (var i = 1; i <= sk; i++) {
    f *= i;
} console.log(f);

// // KITAS PVZ: SKAICIAUS 15! FAKTORIALAS:

var sk = 15;
if (sk >= 0) {
    f = 1;
    for (var i = 1; i <= sk; i++) {
        f *= i;
    } console.log(f);
} else {
    console.log("Negalima");
}

// FIBONACHI SKAICIUS: Pirmas sekos skaičius yra 0, antrasis 1. Seka vystosi taip, kad sekantis gautas skaičius sudedamas su prieš tai esančiu skaičiumi:
var sk1 = 2;
var sk2 = 3;
var max = 15;

while (sk2 < max) {
    console.log(sk1); 
    var naujas = sk1 + sk2;
    sk1 = sk2;
    sk2 = naujas; 
}
console.log(sk1);