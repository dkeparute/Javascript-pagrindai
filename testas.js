const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6] //6
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5] // 5,75
    },
    {
        name: 'Petras',
        marks: [7, 7, 7] //7
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6] // 8
    },
]
// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
console.log("Prasciausias pazimys yra Jono",data[0].marks[1], "is jo visu pazymiu", data[0]);
// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi
console.log("Geriausias pazimys yra Jono", data[0].marks[0], "is jo visu pazymiu", data[0]);
console.log("Geriausias pazimys yra Onos", data[3].marks[0], "is jos visu pazymiu", data[3] );
// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

console.log("Prasciausias pazimiu vidurkis yra Marytes:",);

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
console.log("Geriausias pazimiu vidurkis yra Onos:",);

// Isspausdinti mokinio varda, jei jis turi pazymi 8
for (let i = 0; i < data.length; i++) {
    let pazymysAstuoni = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 8) {
            pazymysAstuoni = true;
            console.log(data[i].name, "turi pazymi 8")
        }
    }
}
// // Isspausdinti mokinio varda, jei jis neturi pazymio 7
for (let i = 0; i < data.length; i++) {
    let pazymysSeptyni = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 7) {
            pazymysSeptyni = true;
        }

    }
    if (!pazymysSeptyni) {
        console.log(data[i].name, "neturi pazymio 7");
    }
}



