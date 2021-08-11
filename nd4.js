// surusiuoti masyvo elementus didejimo tvarka
var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];

for (let i = 0; i < skaiciai.length - 1; i++) {
    for (let j = i + 1; j < skaiciai.length; j++) {
        if (skaiciai[i] > skaiciai[j]) {
            let tmp = skaiciai[i];
            skaiciai[i] = skaiciai[j];
            skaiciai[j] = tmp;
        }
    }
}
console.log(skaiciai);
// surusiuoti masyvo elementus mazejimo tvarka
for (let i = 0; i < skaiciai.length - 1; i++) {
    for (let j = i + 1; j < skaiciai.length; j++) {
        if (skaiciai[i] < skaiciai[j]) {
            let tmp = skaiciai[i];
            skaiciai[i] = skaiciai[j];
            skaiciai[j] = tmp;
        }
    }
}
console.log(skaiciai);

// MASINYTES
// MASINU LENKTYNES
// masyvas is 8 masinu (nuvaziuoti km)
// vyksta lenktynes(ciklas)
// kiekvieno ciklo metu kiekvien masina pavaziuoja random (1...5 km)
// lenktynes baigiasi, kai bent vien masina nuvaziuoja 1000 km
// pabaigoje atspausdiname kelintas masina ir kiek nuvaziavo
const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
let vaziuojam = true;
// lenktyniu ciklas
while (vaziuojam) {
    // visos masinos pavaziavo
    for (let i = 0; i < masinos.length; i++) {
        masinos[i] += Math.trunc(Math.random() * 5 + 1);
    }
    // ieskom ar yra finisavusiu
    for (let i = 0; i < masinos.length; i++) {
        if (masinos[i] >= 1000) {
            vaziuojam = false;
            break;
        }
    }
}
// kuri masina laimejo
let laimetojas = 0;
for (let i = 1; i < masinos.length; i++) {
    if (masinos[i] > masinos[laimetojas]) {
        laimetojas = i;
    }
}
// spausdinam laimetoja
console.log(masinos);
console.log(laimetojas, masinos[laimetojas]);

// komentatorius kas 100 km reikia atspausdinti lyderio numeri ir nuvaziuota atstuma

const masinos = [0, 0, 0, 0, 0, 0, 0, 0];
let check = 100;

// lenktyniu ciklas
while (masinos[laimetojas] < 1000) {
    // visos masinos pavaziavo ir paziurim kuri toliausiai
    for (let i = 0; i < masinos.length; i++) {
        masinos[i] += Math.trunc(Math.random() * 5 + 1);
        // ir paziurim ji nuvaziavusi daugiau uz esama lideri
        if (masinos[i] > masinos[laimetojas]) {
            // tampa nauju lyderiu
            laimetojas = i;
        }
    }
    if( masinos[laimetojas] > check) {
        console.log("siuo metu pirmauja", lyderis, masinos[lyderis]);
        check += 100;
    }
}
// spausdinam laimetoja
console.log(masinos);
console.log(laimetojas, masinos[laimetojas]);