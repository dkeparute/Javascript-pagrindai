// /*
// 1. sukurti klase Zmogus su savybem
// vardas
// pavarde
// gimimoMetai
// 2. amzius (get)
// 3. pilnas vardas (get/set)
// 4. funksionalumas
// 5.labas() -> atspausdinti Labas Vardas Pavadre
 
// 6. sukurti klase Studentas paveldeta nuo zmogaus
// mokykla
// kursas
// 7. labas() -> atspausdinti Labas Vardas Pavadre, Tu mokausi Mokykla
// peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina
 
// sukurti ir su sena ir su nauja sintakse
// */

// // SENOJI KLASE
// function Zmogus(vardas, pavarde, gimimoMetai) {
//     this.vardas = vardas;
//     this.pavarde = pavarde;
//     this.gimimoMetai = gimimoMetai;
// }
// Object.defineProperty(Zmogus.prototype, "amzius", {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//         return 2021 - this.gimimoMetai;
//     }
// });
// Object.defineProperty(Zmogus.prototype, "pilnasVardas", {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//         return this.vardas + " " + this.pavarde;
//     },
//     set: function (vardaspavarde) {
//         let vardasIrPavarde = vardaspavarde.split(" ");
//         this.vardas = vardasIrPavarde[0];
//         this.pavarde = vardasIrPavarde[1];
//     }
// });
// Zmogus.prototype.labas = function () {
//     console.log("Labas", this.vardas, this.pavarde);
// };
// function Studentas(vardas, pavarde, gimimoMetai, mokykla, kursas) {
//     Zmogus.call(this, vardas, pavarde, gimimoMetai);
//     this.mokykla = mokykla;
//     this.kursas = kursas;
// }
// Studentas.prototype = Object.create(Zmogus.prototype);
// Studentas.prototype.constructor = Studentas;
// Studentas.prototype.labas = function () {
//     console.log("Labas", this.vardas, this.pavarde, "Tu mokausi", this.mokykla);
// };
// Studentas.prototype.pereitiIKitaKursa = function (balai) {
//     if (balai < 1 || balai > 100) {
//         console.log("negali buti tokie balai");
//         return;
//     }
//     if (balai < 35) {
//         console.log("pasiliekam kartoti kurso");
//     } else {
//         console.log("pereinam i kita kursa");
//         this.kursas++;
//     }
// };


// let a = new Zmogus("Jone", "Ribinskaite", 1991);
// console.log(a);
// console.log(a.amzius);
// console.log(a.pilnasVardas);
// a.labas();
// a.pilnasVardas = "Dovile Mitkeviciute";
// a.labas();

// let b = new Studentas("Povilas", "Keparutis", 2000, "BIT", 1);
// console.log(b);
// console.log(b.amzius);
// console.log(b.pilnasVardas);
// b.labas();
// b.pilnasVardas = "Petras Keparutis";
// b.labas();

// b.pereitiIKitaKursa(-1);
// b.pereitiIKitaKursa(101);
// b.pereitiIKitaKursa(27);
// b.pereitiIKitaKursa(87);

// // NAUJOJI KLASE
// class Zmogus {
//     constructor(vardas, pavarde, gimimoMetai) {
//         this.vardas = vardas;
//         this.pavarde = pavarde;
//         this.gimimoMetai = gimimoMetai;
//     }
// }
// get amzius() {
//     return 2021 - this.gimimoMetai;
// }
// get pilnasVardas() { 
//     return this.vardas + " " + this.pavarde;
// }
// set pilnasVardas(vardaspavarde) {
//     let vardasIrPavarde = vardaspavarde.split(" ");
//         this.vardas = vardasIrPavarde[0];
//         this.pavarde = vardasIrPavarde[1];
// }
// labas() {
//     console.log("Labas", this.vardas, this.pavarde);
// }
// class Studentas extends Zmogus {

//     constructor(vardas, pavarde, gimimoMetai, mokykla, kursas) {
//         super(vardas, pavarde, gimimoMetai);
//         this.mokykla = mokykla;
//         this.kursas = kursas;
//     }
//     labas() {
//         console.log("Labas", this.vardas, this.pavarde, "mokausi", this.mokykla);
//     }
//     pereitiIKitaKursa(balai) {
//         if (balai < 1 || balai > 100) {
//             console.log("negali buti tokie balai");
//             return;
//         }
//         if (balai < 35) {
//             console.log("pasiliekam kartoti kurso");
//         } else {
//             console.log("pereinam i kita kursa");
//             this.kursas++;
//         }
//     }
// }
// let a = new Zmogus("Jone", "Ribinskaite", 1991);
// console.log(a);
// console.log(a.amzius);
// console.log(a.pilnasVardas);
// a.labas();
// a.pilnasVardas = "Dovile Mitkeviciute";
// a.labas();

// let b = new Studentas("Povilas", "Keparutis", 2000, "BIT", 1);
// console.log(b);
// console.log(b.amzius);
// console.log(b.pilnasVardas);
// b.labas();
// b.pilnasVardas = "Petras Keparutis";
// b.labas();

// b.pereitiIKitaKursa(-1);
// b.pereitiIKitaKursa(101);
// b.pereitiIKitaKursa(27);
// b.pereitiIKitaKursa(87);

//Sukuriamas objekto Å¡ablonas:
function Zmogus(vardas, pavarde, gimimoMetai) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.gimimoMetai = gimimoMetai;
}

//Su komanda "Object.defineProperty" Ä¯vedama nauja savybÄ— Ä¯ Å¡ablono prototipo objektÄ…. Å iuo atveju metodas (arba funkcija) "amzius" Ä¯vedamas per 'get: function () {}'. Prototipo savybÄ—s bus paveldimos visÅ³ iÅ¡vestiniÅ³ objektÅ³.
Object.defineProperty(Zmogus.prototype, "amzius", {
    configurable: true,
    enumerable: true,
    get: function() {
        return 2021 - this.gimimoMetai;
    }
});
//Kitas metodo Ä¯vedimo bÅ«das per 'get/set' komandas. Å iuo atveju Ä¯ Å¡ablono prototipÄ… Ä¯vedamas metodas "pilnasVardas". 'set' komanda veikia kaip funkcija 'get' komandoje.
Object.defineProperty(Zmogus.prototype, "pilnasVardas", {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.vardas + " " + this.pavarde;
    },
    set: function(value) {
        const vardai = value.split(" ");
        this.vardas = vardai[0];
        this.pavarde = vardai[1];
    }
});
// Taip Ä¯vedamas metodas tiesiogiai Ä¯ Å¡ablono prototipÄ…. Å iuo atveju "Labas".
Zmogus.prototype.labas = function() {
    console.log("Labas,", this.vardas, this.pavarde);
};

//Dabar objektÅ³ Å¡ablonas Å½mogus turi priskirtas savybes (vardas, pavarde, gimimoMetai) ir Ä¯terptus metodus (amzius, pilnasVardas, labas) 
//Priskiriame Ä¯vedamos vertÄ—s paveldimÄ… savybÄ™ "pilietybe" prototipe:
Object.defineProperty(Zmogus.prototype, "pilietybe", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Lietuvos pilietis(-Ä—)",
    })

//PAVYZDYS--PAVYZDYS--PAVYZDYS
//Sukuriame objektÄ… zmogusN pagal Å¡ablonÄ… Zmogus:
let zmogusN = new Zmogus ("Vardenis", "Pavardenis", 2000);
//IÅ¡vedame objekto zmogusN apraÅ¡Ä… Ä¯ konsolÄ™:
console.log(zmogusN);
//IÅ¡Å¡aukiame Ä¯vestÄ… objekto prototipe funkcijÄ…(metodÄ…):
zmogusN.labas ();
//IÅ¡Å¡aukiame Ä¯vestÄ… objekto prototipe savybÄ™:
console.log (zmogusN.pilietybe);

//___________________________________________________________
//Sukuriame iÅ¡vestinÄ¯ objektÅ³ Å¡ablonÄ… Studentas, kuris paveldi savybes ir metodus iÅ¡ Å¡ablono Å½mogus per 'call' funkijÄ…. Jame papildomai Ä¯vedame savybes "mokykla" ir "kursas":
function Studentas(vardas, pavarde, gimimoMetai, mokykla, kursas) {
    Zmogus.call(this, vardas, pavarde, gimimoMetai);
    this.mokykla = mokykla;
    this.kursas = kursas;
}
//Sukuriame Å¡ablono Studentas prototipo objektÄ…, kuris yra Å¡ablono Zmogus prototipas, nes norime, kad Studentas perimtÅ³ Å¡ablono Zmogus savybes ir metodus.
Studentas.prototype = Object.create(Zmogus.prototype);
//Tuo metu Å¡ablono Studentas prototipo 'constructor' funkcija nurodo patÄ¯ Å¡ablonÄ… Studentas:
Studentas.prototype.constructor = Studentas;
//Studento prototipe Ä¯vedame naujÄ… metodÄ… "labas":
Studentas.prototype.labas = function() {
    console.log("Labas, "+this.vardas+" "+this.pavarde+", mokausi "+this.mokykla+".");
};
//Studento prototipe Ä¯vedame naujÄ… metodÄ… "pereitiIKitaKursa":
Studentas.prototype.pereitiIKitaKursa = function(balai) {
    if (balai < 1 || balai > 100) {
        console.log("neteisinga balÅ³ vertÄ—.");
        return;
    }
    if (balai < 35) {
        console.log(this.vardas+" "+this.pavarde+" lieka kartoti kurso.");
    } else {
        console.log(this.vardas+" "+this.pavarde+" pereina Ä¯ kita kursÄ….");
        this.kursas++;
    }
};
//____________________________________
//Sukuriame objektÄ… pagal Å¡ablonÄ… Studentas:
let studentasN = new Studentas("Petras", "Petraitis", 1999, "BIT", 1);
//IÅ¡vedame studentasN apraÅ¡Ä… Ä¯ konsolÄ™:
console.log(studentasN);
//IÅ¡Å¡aukiame metodÄ… "labas";
studentasN.labas();
//IÅ¡Å¡aukiame metodÄ… "pereitiIKitaKursas" pagal skirtingas vertes;
studentasN.pereitiIKitaKursa(-1);
studentasN.pereitiIKitaKursa(101);
studentasN.pereitiIKitaKursa(27);
studentasN.pereitiIKitaKursa(87);
//_________________________________________________________________
//Å ablone Zmogus buvo metodas "labas", bet Å¡ablone Studentas jis buvo pakeistas to paties pavadinimo metodu, taÄiau savybe "pilietybe" liko nepakeista:
console.log(studentasN.pilietybe);
//Padarome atvirkÅ¡Äiai. Sukuriame Å¡ablonÄ… UzsienioStudentas ir pridedame savybes "valstybÄ—" ir "kalba":

function UzsienioStudentas (vardas, pavarde, gimimoMetai, valstybe, kalba) {
    Zmogus.call(this, vardas, pavarde, gimimoMetai);
    this.valstybe = valstybe;
    this.kalba = kalba;
}
//Sukuriame UzsienioStudentas prototipo objektÄ…:
UzsienioStudentas.prototype = Object.create(Zmogus.prototype);
//UzsienioStudentas prototipo 'constructor' nukreipiam Ä¯ patÄ¯ save:
UzsienioStudentas.prototype.constructor = UzsienioStudentas;
//PakeiÄiame savybÄ™ "pilietybe":
UzsienioStudentas.prototype.pilietybe="UÅ¾sienio pilietis(-Ä—)"
//_________________________
//Sukuriame objektÄ… pagal Å¡ablonÄ… UzsienioStudentas:
let studentasU = new UzsienioStudentas ("Mark", "Johansson", 1998, "JungtinÄ— KaralystÄ—", "anglÅ³");
//IÅ¡vedame studentasU objekto savybes Ä¯ konsolÄ™:
console.log (studentasU);
//IÅ¡ Zmogus perimtas metodas "labas" veiks, savybÄ— "pilietybÄ—" pasikeis:
console.log (studentasU.pilietybe);
studentasU.labas ();

//Wrap up:
//1. naujas objektÅ³ Å¡ablonas sukuriamas su 'call' iÅ¡Å¡aukiant kito Å¡ablono savybes ir metodus. Pvz,: function Naujas () {Senas.call};
//2. sukuriames Naujo Å¡ablono prototipas per 'Object.create';
//3. Naujo prototipo constructor nukreipiamas Ä¯ patÄ¯ Naujas;
//4. per Object.defineProperty Ä¯vedamos naujos savybÄ—s ir metodai (funkcijos);



//Klasės tipo objektų šablonas sukuriamas pradedant žodžiu <class>.
//Klasės šablone savybės pateikiamos viduje <constructor> funkcijos, o metodai pateikiami atskirai. Kitaip tariant, klasės šablonas yra kitaip užrašytas objektų konstruktoriaus šablonas. Objekto savybių įvedimo funkcijos pateikiami kaip metodai klasės viduje vietoj <Object.defineProperty> išorinės funkcijos. Klasės prototipo objekto metodai gali būti įvesti iš už šablono ribų su <Object.defineProperty>.

class Zmogus {
    // savybės pateikiamos viduje <constructor> funkcijos:
        constructor(vardas, pavarde, gimimoMetai) {
            this.vardas = vardas;
            this.pavarde = pavarde;
            this.gimimoMetai = gimimoMetai;
        }
    //metodai pateikiami atskirai, šiuo aveju "labas" ir 'gime".
        labas() {
            console.log("Labas,", this.vardas, this.pavarde);
        }
        gime() {
            console.log(this.vardas+" "+this.pavarde+" gimė "+this.gimimoMetai+" metais.");
        }
    //savybių įvedimo į šablono objektą funkcijos <get, get-set> pateikiamos atskirai. 
    get amzius() {
        return 2021 - this.gimimoMetai;
    }
    get pilnasVardas() {
        return this.vardas + " " + this.pavarde;
    }
    set pilnasVardas(value) {
        const vardai = value.split(" ");
        this.vardas = vardai[0];
        this.pavarde = vardai[1];
    }
};
//Prototipo savybes galima įvesti per <Object.defineProperty> už klasės šablono ribų:
Object.defineProperty(Zmogus.prototype, "pilietybe", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Lietuvos pilietis(-ė)",
    })
Object.defineProperty(Zmogus.prototype, "amziusN", {
        configurable: true,
        enumerable: true,
        get: function() {
            return 2021 - this.gimimoMetai;
        }
});
//______________________________________________________
    //Objektas pagal klasės šabloną sukuriamas su <new> raktažožiu:
    
    let zmogusN = new Zmogus ("Vardenis", "Pavardenis", 1998);
    //išvedame objekto zmogusN savybes ir metodus į konsolę:
    console.log (zmogusN);
    zmogusN.labas();
    zmogusN.gime();
    //išvedame objekto zmogusN prototipo objekto savybes į konsolę:
    console.log (zmogusN.amzius);
    console.log (zmogusN.pilnasVardas);
    //išvedame objekto zmogusN prototipo savybes, įvestas už klasės šablono Zmogus ribų:
    console.log (zmogusN.pilietybe);
    console.log (zmogusN.amziusN);
//___________________________________________
    //Kitas klasės šablonas su perimamomis savybėmis ir metodais išvedamas per <extends> raktažodį:
    class Studentas extends Zmogus {
    //Įvedama <construtor> funkcija su papildomomis savybėmis, kur perimamos savybės pakartojamos iš aukštesnė klasės su <super> raktažodžiu:
        constructor(vardas, pavarde, gimimoMetai, mokykla, kursas, balai) {
            super(vardas, pavarde, gimimoMetai);
            this.mokykla = mokykla;
            this.kursas = kursas;
            this.balai = balai;
    }
//Nauji metodai įvedami atskirai, šiuo aveju "mokausi" ir "pereitiIKitaKursa":
mokausi() {
    console.log(this.vardas, this.pavarde, "mokosi", this.mokykla);
}
pereitiIKitaKursa() {
    if (this.balai < 1 || this.balai > 100) {
        console.log("negali būti tokių balų");
        return;
        }
    if (this.balai < 35) {
        console.log(this.pilnasVardas+" pasilieka kartoti kurso");
    } else {
        console.log(this.pilnasVardas+" pereina į kitą kursa");
        this.kursas++;
        }
    }
}
//Pastebėkit, kad this.pilnasVardas paimtas iš paveldėtos iš Zmogus savybės.
//_________________________________________________________
//Sukuriamas objektas pagal išvestinę objektų klasę Studentas per raktažodį <new>:
studentasN = new Studentas ("Tomas", "Andrijauskas", 1996, "Vilniaus universitetas", "II kursas", 30);
//Išvedamas studentasN aprašas į konsolę:
console.log (studentasN);
//Išvedami į konsolę paveldėti metodai iš Studentas klasės:
studentasN.mokausi();
studentasN.pereitiIKitaKursa();
//Išvedami į konsolę paveldėti metodai iš Zmogus klasės:
studentasN.labas();
console.log (studentasN.pilnasVardas);
//Išvedamos į konsolę paveldėtos prototipo savybės iš Zmogus klasės:
console.log (studentasN.pilietybe);
console.log (studentasN.amziusN);

