var sk1 = 0.1;
var sk2 = 0.2;

var rez = sk1 + sk2;
console.log(rez);

// tai reiškia jog sudėjus du nelabai tikslius skaičius ir atsakymas bus nelabai tikslus. Jeigu skaičius su . (kableliu), greičiausiai bus paklaida.

var tekstas = "hello ho\tw do you do?\nare you ok?"
console.log(tekstas);
//  Javascript nuėjo prie stalčiuko tekstas ir console.log(atspausdino teksto reikšmę, t.y. pavyzdys)

// užduotis kaip parašyti šį tekstą:
//          labas 'gražusis"
// pasauli!

var sakinys = "\t labas 'gražusis\"\npasauli!";
console.log(sakinys);

//  OPERATORIAI:
var sk3 = 5;
var sk4 = 15;

var sudetis = sk3 + sk4;
var atimtis = sk3 - sk4;
var daugyba = sk3 * sk4;
var dalyba = sk3 / sk4;


console.log(sudetis);
console.log(atimtis);
console.log(daugyba);
console.log(dalyba);


// PVZ:
var sk5 = 60;
var sk6 = 150;

var rez = 100 + sk6 / sk5;
console.log(rez);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.
// Kadangi didesnė reikšmė yra dalybos pirma, tai tai ir atliekame ir tik po to sudėtį.
var rez = 150 + sk5 * sk6 / 3;
console.log(rez);

var rez= 150 % 4 + sk5;
// % reikalauja liekanos
console.log(rez);

var rez= sk5 % 6;
console.log(rez);

var rez = sk5 **3 ** 2;
console.log(rez);

var rez= sk5 + sk6;
rez +=11; 
// rez = rez + 11
console.log(rez);

rez += 11 + 2;
console.log(rez);

sk5 **= 5; /* sk5 = sk5 pakeltas 5 lapsniu*/
console.log(sk5);