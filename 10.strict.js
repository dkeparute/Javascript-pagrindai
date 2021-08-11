// nera aprasytas kintamasis nei su var, nei su let, bet noriu priskirti reiksme 10;
// // ir veikia
// jeigu ivesime zodzius "use strict";
// jau man 10 reiksmes neatspausdins

"use strict"; //USE STRICT NAUDOJAMAS VISADA FAILO PRADZIOJE KAIP DIREKTYVA 
kintamasis = 10;
console.log(kintamasis);

// "use strict";
console.log(globalThis);
kintamasis = 10;
console.log(globalThis);

console.log(kintamasis);

// jeigu use trict busenoje norime kad nemestu klaidos ir kintamasis butu tari koks var kintamasis = 10; vedam globalThis.kintamasis, pvz.

"use strict";
console.log(globalThis);
globalThis.kintamasis = 10;
console.log(globalThis);

console.log(kintamasis);