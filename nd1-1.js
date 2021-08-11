/*
AKMUO, POPIERIUS, ZIRKLES

async function main() {
    var kompiuteris = await skaiciausIvedimas ("Ivesk bet koki skaiciu:");
    var zmogus = await skaiciausIvedimas("Ivesk dar viena bet koki skaiciu:");
    console.log("Siu skaicius sandauga yra:", kompiuteris * zmogus);
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}
// kai zmogus zaidzia pries programa:

async function main() {
    var zaidziam = true;
    while (zaidziam) {
        var zmogus = await tekstoIvedimas("Įvesk A/P/Z/X: ");
        if (zmogus == "A" || zmogus == "P" || zmogus == "Z") {
            var r = Math.random();
            var comp;
            if (r < 0, 3333) {
                comp = "A";
            } else
                if (r < 0, 6666) {
                    comp = "P";
                } else {
                    comp = "Z";
                }
            console.log("Kompiuteris pasirinko:", comp);
            if (zmogus == comp) {
                console.log("Lygiosios");
            } else if (
                (zmogus == "A" && comp == "Z") || (zmogus == "P" && comp == "A") || (zmogus == "Z" && comp == "P")
            ) {
                console.log("Tu laimėjai");
            }
            else {
                console.log("Laimėjo kompiuteris");
            }

        }
        if (zmogus == "X") {
            zaidziam = false;
            console.log("Žaidimo pabaiga")
        }
    }
    rl.close();


}

main();

