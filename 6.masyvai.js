/* pradines reiksmes 5 8 12. Reikalinga situ reiksmiu suma: var sk1 = 5; var sk2 = 8; var sk3 = 12;
var suma = sk1 + sk2 + sk3;
console.log(suma); */


// Jeigu reiksmiu yra daugiau, naudojamas MASYVAS.

var m = [5, 8, 12]; /* vienmatis masyvas */
console.log(m); /* [5, 8, 12]*/
console.log([1]); /* ats. 8*/
m[2] = 53; /* ats. vietoj 12 bus 53*/
console.log(m); /* ats. bus 5, 8,53*/
console.log(m.length);


var st = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
console.log(st);
console.log(st[1][2]);

st[1] = [13, 14, 15, 16, 17];
console.log(st);
console.log(st[1][2]);

// // PVZ, NORIME SUDETI ST ELEMENTU SUMA (st length):
var suma = 0;
for (var i = 0; i < st.length; i++) {
    for (var j = 0; j < st[i].length; j++) {
        suma += st[i][j];
    }
} console.log(suma);

var m = [5, 8, 12];
console.log(m[8]); /* bus parasyta undefined */

// PVZ NORIME SURASTI SK. VIDURKI:
var m = [5, 8, 12, 15, -4, 10]
for (var i = 0; i <= m.length; i++) {
    suma += m[i];
} 
vidurkis = suma / m.length;
console.log(vidurkis);

