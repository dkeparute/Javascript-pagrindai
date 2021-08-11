let vardas = "Jonas";
let pavarde = "Jonaitis";
let zmogus = {
    //objekto savybes pavadinimas(vardas) ir reiksme (vardas, paimtas is kintamojo)
    vardas: vardas,
    pavarde: pavarde
};
console.log(zmogus);

//galima parasyti paparasciau
let vardas = "Jonas";
let pavarde = "Jonaitis";
let zmogus = {
    vardas, //paimama savybe ios kintamojo
    pavarde
};
console.log(zmogus);


function labas(zmogus) {
    console.log("Labas", zmogus.vardas, zmogus.pavarde);
   }
    
   function labasNaujoviskai({ vardas : firstName, pavarde = "nera pavardes" }) {
    /*
    firstName: Antanas
    pavarde: Antanaitis
    */
    
    console.log(arguments);
    console.log(arguments.length);
    console.log("Labas", firstName, pavarde);
   }
    
   function naujasZmogus(vardas, pavarde, gimimoMetai) {
    return {
    gimimoMetai,
    pavarde,
    vardas
    };
   }
    
   let z1 = naujasZmogus("Jonas", "Jonaitis", 1999);
   let z2 = naujasZmogus("Petras", "Petraitis", 2000);
   let z3 = naujasZmogus("Antanas", "Antanaits", 2000);
    
   console.log(z1, z2, z3);
   labas(z2);
   labasNaujoviskai(z3);
    
   let gyvunas = {
    vardas: "Lordis",
    veisle: "vokieciu aviganis",
    veisykla: "Anrebri",
    svoris: 31.5
   };
    
   labas(gyvunas);
   labasNaujoviskai(gyvunas);
   
   let {veisykla, svoris} = gyvunas;

   console.log(veisykla);
   console.log(svoris);