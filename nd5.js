const masinos = [
    {
        pavadinimas: "pirma",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "antra",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "trecia",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "ketvirta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "penkta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "sesta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "septinta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "astunta",
        kelias: 0,
        greitis: 0
    },
];
let lyderis = 0;
let check = 100;

// lenktyniu ciklas
while (masinos[lyderis].kelias < 1000) {
    // visos masinos pakeicia greiti ir pavaziuoja
    for(let i = 0; i < masinos.length; i++) {
        // pakeiciam masinos greiti random (-5 ...iki 5)
        masinos[i].greitis += Math.trunc(Math.random() * 11 - 5);
        // atbulinio ner
        if (masinos[i].greitis < 0) {
            masinos[i].greitis = 0;
        }
        // kiekvieno ciklo metu pavaziuoja per tiek, koks yra jos greitis
        masinos[i].kelias += masinos[i].greitis;
        // ir paziurim ji nuvaziavusi daugiau uz esama lyderi
        if (masinos[i].kelias > masinos[lyderis].kelias) {
            // i-toji masina tampa nauju lyderiu
            lyderis = i;
        }
    }
    // tikrinam ar lyderis nuvaziavo dar 100 km
    if (masinos[lyderis].kelias > check) {
        console.log("siuo metu pirmauja", masinos[lyderis]);
        check += 100;
    }
    // console.log(masinos);
    // console.log("----------------");
}
// surusiuojam turnyrine lentele
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (masinos[i].kelias < masinos[j].kelias) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}

console.log(masinos);
/*
8 masinos su savybem:
pavadinimas
kelias
greitis

vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia mazejimo tvarka


*)komentatorius



*/
