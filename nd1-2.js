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
// kai pc zaidzia pries kita pc

async function main() {
    var kiek = await skaiciausIvedimas("Kiek kartu zaisti? ");
    var c1Win = 0;
    var c2Win = 0;
    var draw = 0;
    var aKiek = 0;
    var pKiek = 0;
    var zKiek = 0;
    while (kiek > 0) {
        var r = Math.random();
        var c1;
        if (r < 0.3333) {
            c1 = "A";
            aKiek += 1;
        } else if (r < 0.6666) {
            c1 = "P";
            pKiek += 1;
        } else {
            c1 = "Z";
            zKiek += 1;
        }
        r = Math.random();
        var c2;
        if (r < 0.3333) {
            c2 = "A";
            aKiek += 1;
        } else if (r < 0.6666) {
            c2 = "P";
            pKiek += 1;
        } else {
            c2 = "Z";
            zKiek += 1;
        }
        if (c1 == c2) {
            draw += 1;
        } else if (
            (c1 == "A" && c2 == "Z") ||
            (c1 == "P" && c2 == "A") ||
            (c1 == "Z" && c2 == "P")
        ) {
            c1Win += 1;
        } else {
            c2Win += 1;
        }
        kiek -= 1;
    }

    console.log("Lygiosios", draw);
    console.log("Kompiuteris 1", c1Win);
    console.log("Kompiuteris 2", c2Win);
    console.log("-------");
    console.log("Akmuo", aKiek);
    console.log("Popierius", pKiek);
    console.log("Zirkles", zKiek);
    rl.close();
}

main();
