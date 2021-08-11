// TYPEOF (PAZYMI KOKIA REIKSME YRA) YRA OPERATORIUS KAIP LET (JO DARBAS SUKURTI KINTAMAJI PVZ M)
let sk = 15;

console.log(typeof sk);
// atspausdins number

let s = "15";
console.log(typeof s);
// atspausdins string, tai ne skaicius, o tekstas

let b = false;
console.log(typeof b);
// atspausdins boolean

let u;
console.log(typeof u);
// atspausdins undefined

let o = {vardas: "Jonas"} ;
console.log(typeof o);
// spausdins object

let m = [12, 15];
console.log(typeof m);
// spausdins object

function suma(a, b) {
    return a + b;
}
console.log(typeof suma);
// spausdins function

suma = suma(1, 2);
console.log(typeof suma);
// spausdinam number


let n = null; //null reiskia tuscia, nieko
console.log(typeof n);
// spausdins object, kintamojo reiksme tuscia, nerodo niekur
