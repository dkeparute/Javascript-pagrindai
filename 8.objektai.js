let zmogus = {
    vardas: "Jonas",
    pavarde: "Konstantinas"
};
console.log(zmogus);

zmogus.pavarde = "Petraitis";
console.log(zmogus);
console.log(zmogus.pavarde, zmogus.vardas);

let puodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 25
}
console.log(puodukas);

puodukas.kiekis -= 5;

console.log(puodukas);

puodukas.gerimas = "kava";
console.log(puodukas);