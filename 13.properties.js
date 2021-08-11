let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
};
Object.defineProperty(zmogus, "pilnasVardas", {
    enumerable: true, // jeigu bus false tai savybė bus, bet bus paslėpta
    configurable: true, //jeigu bus false nebegales keisti situ savybiu writable, enumerable savybiu
    writable: true, //jeigu bus false tai value neleis pakeisti reiksmes
    value: "Jonas Jonaitis"
});
console.log(zmogus);
console.log(zmogus.pilnasVardas);

Object.defineProperty(zmogus, "pilnasVardas", {
    enumerable: true, // jeigu bus false tai savybė bus, bet bus paslėpta
    configurable: true, //jeigu bus false nebegales keisti situ savybiu writable, enumerable savybiu
    get: function () {
        return this.vardas + " " + this.pavarde;
    },
    set: function (value) {
        let dalys = value.split(" ");
        this.vardas = dalys[0];
        this.pavarde = dalys[1];
    }
});
console.log(zmogus);
console.log(zmogus.pilnasVardas);
zmogus.vardas = "Petras";
console.log(zmogus);
console.log(zmogus.pilnasVardas);

zmogus.pilnasVardas = "Antanas Antanaitis";
console.log(zmogus);
console.log(zmogus.pilnasVardas);
//funkcijos prie get vadinami getteriai. Get yra ypatybė, jo reikšme yra funkcija kuri grazins reiksme.
// jeigu naudojame get ir set negalima naudoti writable ir value, arba atvirksciai.
