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

//Sukuriamas objekto ????ablonas:
function Zmogus(vardas, pavarde, gimimoMetai) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.gimimoMetai = gimimoMetai;
}

//Su komanda "Object.defineProperty" ????vedama nauja savyb????? ???? ????ablono prototipo objekt?????. ?? iuo atveju metodas (arba funkcija) "amzius" ????vedamas per 'get: function () {}'. Prototipo savyb?????s bus paveldimos vis???? i????vestini???? objekt????.
Object.defineProperty(Zmogus.prototype, "amzius", {
    configurable: true,
    enumerable: true,
    get: function() {
        return 2021 - this.gimimoMetai;
    }
});
//Kitas metodo ????vedimo b????das per 'get/set' komandas. ?? iuo atveju ???? ????ablono prototip????? ????vedamas metodas "pilnasVardas". 'set' komanda veikia kaip funkcija 'get' komandoje.
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
// Taip ????vedamas metodas tiesiogiai ???? ????ablono prototip?????. ?? iuo atveju "Labas".
Zmogus.prototype.labas = function() {
    console.log("Labas,", this.vardas, this.pavarde);
};

//Dabar objekt???? ????ablonas ????mogus turi priskirtas savybes (vardas, pavarde, gimimoMetai) ir ????terptus metodus (amzius, pilnasVardas, labas) 
//Priskiriame ????vedamos vert?????s paveldim????? savyb????? "pilietybe" prototipe:
Object.defineProperty(Zmogus.prototype, "pilietybe", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Lietuvos pilietis(-?????)",
    })

//PAVYZDYS--PAVYZDYS--PAVYZDYS
//Sukuriame objekt????? zmogusN pagal ????ablon????? Zmogus:
let zmogusN = new Zmogus ("Vardenis", "Pavardenis", 2000);
//I????vedame objekto zmogusN apra????????? ???? konsol?????:
console.log(zmogusN);
//I????????aukiame ????vest????? objekto prototipe funkcij?????(metod?????):
zmogusN.labas ();
//I????????aukiame ????vest????? objekto prototipe savyb?????:
console.log (zmogusN.pilietybe);

//___________________________________________________________
//Sukuriame i????vestin???? objekt???? ????ablon????? Studentas, kuris paveldi savybes ir metodus i???? ????ablono ????mogus per 'call' funkij?????. Jame papildomai ????vedame savybes "mokykla" ir "kursas":
function Studentas(vardas, pavarde, gimimoMetai, mokykla, kursas) {
    Zmogus.call(this, vardas, pavarde, gimimoMetai);
    this.mokykla = mokykla;
    this.kursas = kursas;
}
//Sukuriame ????ablono Studentas prototipo objekt?????, kuris yra ????ablono Zmogus prototipas, nes norime, kad Studentas perimt???? ????ablono Zmogus savybes ir metodus.
Studentas.prototype = Object.create(Zmogus.prototype);
//Tuo metu ????ablono Studentas prototipo 'constructor' funkcija nurodo pat???? ????ablon????? Studentas:
Studentas.prototype.constructor = Studentas;
//Studento prototipe ????vedame nauj????? metod????? "labas":
Studentas.prototype.labas = function() {
    console.log("Labas, "+this.vardas+" "+this.pavarde+", mokausi "+this.mokykla+".");
};
//Studento prototipe ????vedame nauj????? metod????? "pereitiIKitaKursa":
Studentas.prototype.pereitiIKitaKursa = function(balai) {
    if (balai < 1 || balai > 100) {
        console.log("neteisinga bal???? vert?????.");
        return;
    }
    if (balai < 35) {
        console.log(this.vardas+" "+this.pavarde+" lieka kartoti kurso.");
    } else {
        console.log(this.vardas+" "+this.pavarde+" pereina ???? kita kurs?????.");
        this.kursas++;
    }
};
//____________________________________
//Sukuriame objekt????? pagal ????ablon????? Studentas:
let studentasN = new Studentas("Petras", "Petraitis", 1999, "BIT", 1);
//I????vedame studentasN apra????????? ???? konsol?????:
console.log(studentasN);
//I????????aukiame metod????? "labas";
studentasN.labas();
//I????????aukiame metod????? "pereitiIKitaKursas" pagal skirtingas vertes;
studentasN.pereitiIKitaKursa(-1);
studentasN.pereitiIKitaKursa(101);
studentasN.pereitiIKitaKursa(27);
studentasN.pereitiIKitaKursa(87);
//_________________________________________________________________
//?? ablone Zmogus buvo metodas "labas", bet ????ablone Studentas jis buvo pakeistas to paties pavadinimo metodu, ta????iau savybe "pilietybe" liko nepakeista:
console.log(studentasN.pilietybe);
//Padarome atvirk????????iai. Sukuriame ????ablon????? UzsienioStudentas ir pridedame savybes "valstyb?????" ir "kalba":

function UzsienioStudentas (vardas, pavarde, gimimoMetai, valstybe, kalba) {
    Zmogus.call(this, vardas, pavarde, gimimoMetai);
    this.valstybe = valstybe;
    this.kalba = kalba;
}
//Sukuriame UzsienioStudentas prototipo objekt?????:
UzsienioStudentas.prototype = Object.create(Zmogus.prototype);
//UzsienioStudentas prototipo 'constructor' nukreipiam ???? pat???? save:
UzsienioStudentas.prototype.constructor = UzsienioStudentas;
//Pakei????iame savyb????? "pilietybe":
UzsienioStudentas.prototype.pilietybe="U????sienio pilietis(-?????)"
//_________________________
//Sukuriame objekt????? pagal ????ablon????? UzsienioStudentas:
let studentasU = new UzsienioStudentas ("Mark", "Johansson", 1998, "Jungtin????? Karalyst?????", "angl????");
//I????vedame studentasU objekto savybes ???? konsol?????:
console.log (studentasU);
//I???? Zmogus perimtas metodas "labas" veiks, savyb????? "pilietyb?????" pasikeis:
console.log (studentasU.pilietybe);
studentasU.labas ();

//Wrap up:
//1. naujas objekt???? ????ablonas sukuriamas su 'call' i????????aukiant kito ????ablono savybes ir metodus. Pvz,: function Naujas () {Senas.call};
//2. sukuriames Naujo ????ablono prototipas per 'Object.create';
//3. Naujo prototipo constructor nukreipiamas ???? pat???? Naujas;
//4. per Object.defineProperty ????vedamos naujos savyb?????s ir metodai (funkcijos);



//Klas??s tipo objekt?? ??ablonas sukuriamas pradedant ??od??iu <class>.
//Klas??s ??ablone savyb??s pateikiamos viduje <constructor> funkcijos, o metodai pateikiami atskirai. Kitaip tariant, klas??s ??ablonas yra kitaip u??ra??ytas objekt?? konstruktoriaus ??ablonas. Objekto savybi?? ??vedimo funkcijos pateikiami kaip metodai klas??s viduje vietoj <Object.defineProperty> i??orin??s funkcijos. Klas??s prototipo objekto metodai gali b??ti ??vesti i?? u?? ??ablono rib?? su <Object.defineProperty>.

class Zmogus {
    // savyb??s pateikiamos viduje <constructor> funkcijos:
        constructor(vardas, pavarde, gimimoMetai) {
            this.vardas = vardas;
            this.pavarde = pavarde;
            this.gimimoMetai = gimimoMetai;
        }
    //metodai pateikiami atskirai, ??iuo aveju "labas" ir 'gime".
        labas() {
            console.log("Labas,", this.vardas, this.pavarde);
        }
        gime() {
            console.log(this.vardas+" "+this.pavarde+" gim?? "+this.gimimoMetai+" metais.");
        }
    //savybi?? ??vedimo ?? ??ablono objekt?? funkcijos <get, get-set> pateikiamos atskirai. 
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
//Prototipo savybes galima ??vesti per <Object.defineProperty> u?? klas??s ??ablono rib??:
Object.defineProperty(Zmogus.prototype, "pilietybe", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Lietuvos pilietis(-??)",
    })
Object.defineProperty(Zmogus.prototype, "amziusN", {
        configurable: true,
        enumerable: true,
        get: function() {
            return 2021 - this.gimimoMetai;
        }
});
//______________________________________________________
    //Objektas pagal klas??s ??ablon?? sukuriamas su <new> rakta??o??iu:
    
    let zmogusN = new Zmogus ("Vardenis", "Pavardenis", 1998);
    //i??vedame objekto zmogusN savybes ir metodus ?? konsol??:
    console.log (zmogusN);
    zmogusN.labas();
    zmogusN.gime();
    //i??vedame objekto zmogusN prototipo objekto savybes ?? konsol??:
    console.log (zmogusN.amzius);
    console.log (zmogusN.pilnasVardas);
    //i??vedame objekto zmogusN prototipo savybes, ??vestas u?? klas??s ??ablono Zmogus rib??:
    console.log (zmogusN.pilietybe);
    console.log (zmogusN.amziusN);
//___________________________________________
    //Kitas klas??s ??ablonas su perimamomis savyb??mis ir metodais i??vedamas per <extends> rakta??od??:
    class Studentas extends Zmogus {
    //??vedama <construtor> funkcija su papildomomis savyb??mis, kur perimamos savyb??s pakartojamos i?? auk??tesn?? klas??s su <super> rakta??od??iu:
        constructor(vardas, pavarde, gimimoMetai, mokykla, kursas, balai) {
            super(vardas, pavarde, gimimoMetai);
            this.mokykla = mokykla;
            this.kursas = kursas;
            this.balai = balai;
    }
//Nauji metodai ??vedami atskirai, ??iuo aveju "mokausi" ir "pereitiIKitaKursa":
mokausi() {
    console.log(this.vardas, this.pavarde, "mokosi", this.mokykla);
}
pereitiIKitaKursa() {
    if (this.balai < 1 || this.balai > 100) {
        console.log("negali b??ti toki?? bal??");
        return;
        }
    if (this.balai < 35) {
        console.log(this.pilnasVardas+" pasilieka kartoti kurso");
    } else {
        console.log(this.pilnasVardas+" pereina ?? kit?? kursa");
        this.kursas++;
        }
    }
}
//Pasteb??kit, kad this.pilnasVardas paimtas i?? paveld??tos i?? Zmogus savyb??s.
//_________________________________________________________
//Sukuriamas objektas pagal i??vestin?? objekt?? klas?? Studentas per rakta??od?? <new>:
studentasN = new Studentas ("Tomas", "Andrijauskas", 1996, "Vilniaus universitetas", "II kursas", 30);
//I??vedamas studentasN apra??as ?? konsol??:
console.log (studentasN);
//I??vedami ?? konsol?? paveld??ti metodai i?? Studentas klas??s:
studentasN.mokausi();
studentasN.pereitiIKitaKursa();
//I??vedami ?? konsol?? paveld??ti metodai i?? Zmogus klas??s:
studentasN.labas();
console.log (studentasN.pilnasVardas);
//I??vedamos ?? konsol?? paveld??tos prototipo savyb??s i?? Zmogus klas??s:
console.log (studentasN.pilietybe);
console.log (studentasN.amziusN);

