// ARGUMENTS - yra specialus kintasmasis, kuris buna kiekvienoje funkcijoje. Tai specialus objektas kaip masyvas, kuriame surasytos visos parametru reiksmes. 
// function suma(a, b) {
//     console.log(arguments); 
//     console.log(arguments.length);
//     return a + b;
// }
// console.log(suma(1, 2, 3, 4, 5, 6));

// Ka reiktu padaryti kad gauti visu situ skaiciu suma?

function suma(a, b /*siuo atveju net nebutina rasyti kintamuju, nes vis tiek arguments atspausdins visas reiksmes*/) {
    console.log(arguments); 
    console.log(arguments.length);
    let suma = 0;
    for (let i = 0; i <arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}
console.log(suma(1, 2, 3, 4, 5, 6));

function suma(a, b) {
    /* 
    a: 1
    b: undefined;
    arguments: {0:1, length: 1}
*/
    console.log(arguments); 
    console.log(arguments.length);
    let suma = 0;
    for (let i = 0; i <arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}
console.log(suma(1));

function suma(a, b) {
    /* 
    a: undefined
    b: undefined
    arguments: {length: 0}
*/
    console.log(arguments); 
    console.log(arguments.length);
    let suma = 0;
    for (let i = 0; i <arguments.length; i++) {
        suma += arguments[i];
    } 
    return suma;
}
console.log(suma());

function labas (vardas = "bevardis", pavarde = "bepavardis" /* defoltines reiksmes */) {
    console.log(arguments);
    console.log("Labas", vardas, pavarde);
}
labas("Jonas", "Jonaitis"); // Jonas Jonaitis //  Jonas Jonaitis
labas("Jonas"); /* atspausdins Labas Jonas undefined*/ // "bepavardis"
labas(); /* labas undefined undefined */ // "bevardis" "bepavardis"
labas("Jonas", "Jonaitis", "Misteris"); /* atspausdins Jonas Jonaitis, bet arguments Misteris bus */
labas(undefined, "Jonaitis") // panaudos "bevardis" vietoj undefined
labas(undefined, undefined, "Ponas", "Misteris"); // labas "bevardis" "bepavardis", o arguments bus undefined, undefined, Ponas, Misteris 

