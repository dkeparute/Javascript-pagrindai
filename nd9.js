const readline = require("readline");
const fs = require("fs");

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

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
async function main() {

    let tekstas = await tekstoIvedimas("Ivesk failo varda a.txt/b.txt/c.txt:");

    if (tekstas == "a.txt") {
        fs.readFile("a.txt", {
            encoding: "utf-8"
        }, function (err, data) {
            if (err) {
                console.log("klaida");
                console.log(err);
                return;
            }
            console.log("perskaiciau faila a.txt");
            console.log(data);
        });
        rl.close();

    }
    if (tekstas == "b.txt") {
        fs.readFile("b.txt", {
            encoding: "utf-8"
        }, function (err, data) {
            if (err) {
                console.log("klaida");
                console.log(err);
                return;
            }
            console.log("perskaiciau faila b.txt");
            console.log(data);
        });
        rl.close();
    }
    if (tekstas == "c.txt") {
        fs.readFile("c.txt", {
            encoding: "utf-8"
        }, function (err, data) {
            if (err) {
                console.log("klaida");
                console.log(err);
                return;
            }
            console.log("perskaiciau faila c.txt");
            console.log(data);
        });
        rl.close();
    }
} main();
/*
1.paprasyti ivesti failo varda
2.perskaityti faila
3.jei perskaite be klaidu - atspausdinti teksta
jei klaidos - atspausdinti klaida


paprasyti ivesti failo vardus (atskirtus tarpais)
pvz: Ivesk failu fardus: a.txt b.txt d.txt
suskaldot stringa per tarpa - gaunat masyva su failu pavadinimais
perskaitot visus failus nurodyta tvarka
jei perskaite be klaidu - kaupti teksta kintamajame
jei klaidos - atspausdinti klaida
pabaigoj atspausdinti sukaupta teksta
*/
