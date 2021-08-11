// ciklas for susideda is 4 daliu.
// Pvz. atspausdinsim skaicius nuo 1 iki 5
for (var i = 1; i <= 5; i += 1); {
console.log(i);
} 
console.log("Pabaiga");

// norime susumuoti skaiciu sandauga 1 * 11 + 2 * 12 + 3 * 13...iki 9 *19

var suma = 0;
for (var i = 1, j = 11; i < 10; i++, j++) {
    suma += i * j;
} 
console.log(suma);

for (var i = 15, j = 23; i < j; i++, j--) {
    console.log(i, j);
}

for (var i = 1; ; i++) {
    console.log("begu amzinai", i);
}
// kadangi nera salygos, ji visada bus true ir begs amzinai

var suma = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    suma += 1;
    if (suma > 1000) {
        break;
    }
} 
console.log(suma);
// continue reiskia jog nevykdysime apacioje esamu veiksmu ir grisime prie 4 elemento, tai yra i++;
// break nutraukia ciklą griežtuoju būdu.