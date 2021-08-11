//  NAMU DARBAS:

// parasyti funkcija kuri paskaiciuoja trikampio plota
// pagal nurodytus krastiniu ilgius
// (herono formule) naudojant.

// pradžioje reikia patikrinti, ar susidaro trikampis
//     jeigu nesusidaro - atspausdinti "ne trikampis"
//     ir grazinti - 1

// 2,4,5
// 654,15,666
// 65,48,11

function trPlotas(k1, k2, k3) {
    if (k1 + k2 <= k3 || k1 + k3 <= k2 || k2 + k3 <= k1) {
        console.log("cia nera trikampis");
        return -1;
    }
    let trPusperimetris = (k1 + k2 + k3) / 2;
    let plotas = Math.sqrt(trPusperimetris * (trPusperimetris - k1) * (trPusperimetris - k2) * (trPusperimetris - k3));
    return plotas;
}
console.log(trPlotas(2, 4, 4));
console.log(trPlotas(654, 15, 666));
console.log(trPlotas(65, 48, 11));

//  nuoroda kur yra info apie trikampio ypatybes https://protas.pypt.lt/matematika/trikampiai
// Kvadratinė šaknis iš X yra SQRT(X) x = (trPusperimetris * (trPusperimetris - k1) * (trPusperimetris - k2) * (trPusperimetris - k3))

// ISTRAUKTI SAKNI GALIMA SU MATH.SQRT(X) ARBA ** (1/2), NES KELIANT TRUMPENINIU LAIPSNIU GAUNASI JOG ISTRAUKIAME SAKNI.