//  ATSITIKTINIAI SKAICIAI
var atsitiktinis = Math.random();
console.log(atsitiktinis); 
/* random paims bet koki skaiciu nuo [0 iki 1). Tas skaicius bus 0.1 ar 0.01 ir pan.*/

// Jeigu norime gauti atsitiktini skaiciu intervale nuo [1 iki 10]
var ats = Math.random();
var sk = ats * 10 + 1;
console.log(sk);

// Jeigu norime gauti atsitiktinis SVEIKA BE KABLELIU SKAICIU, reikia
var atsitik = Math.random();
var sk1 = Math.trunc(atsitik * 10 +1);
console.log(sk1);

//  Jeigu norime bendresnes formules:

var nuo = 5;
var iki = 23;
var atsi = Math.random()
var bendrinis = Math.trunc(atsi * (iki - nuo) + nuo);

console.log(bendrinis);


