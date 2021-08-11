console.log(global); //rodyts global savybes
global.globalusKintamasis = "Super Senelis!!!"; // sukurs trukstama savybe
console.log(global) === console.log(globalThis);

// globalthis skirtas tiek narsyklems, tiek node.js programai, kodus rodys ir ten, ir ten.

function div(a, b) {
    console.log(superTetis);
    global.globalusKintamasis = "Super Senelis!!!";
    console.log(tetis); // cia rodys klaida. Jeigu Javascript nerado sito kintamojo, tada ieskos tarp specialaus objekto GLOBAL (programoje), WINDOW (narsykleje) ir tikrins, ar tikrai to elemento tetis nera main'e. Todel naudojant gloabalu kintamaji, jau programa matys.
    return a / b;
}
function calc(veiksmas, a, b) {
    function sum(sk1, sk2) {
        global.globalusKintamasis = "Super Senelis!!!";
        console.log(superTetis);
        console.log(tetis);
        return sk1 + sk2;
    } 
    let tetis = "tetis";
    if (veiksmas === "suma") {
        return sum(a, b);
    } else if (veiksmas === "atimtis") {
        return sub(a, b);
    } else if (veiksmas == "dalyba") {
        return div(a, b);
    } else {
        console.log("nezinomas veiksmas");
    }
    function sub(b, c) {
        return b - c;
    }
}
let superTetis = "superTetis";

console.log(calc("suma", 3, 4));
console.log(calc("atimtis", 15, 7));
console.log(calc("daugyba", 15, 7))
console.log(calc("dalyba", 15, 7));