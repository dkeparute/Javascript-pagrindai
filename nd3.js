var m = [11, 12, 13, 14, 15];
 
var mk = new Array(m.length);
for (var i = 0; i < mk.length; i++) {
 mk[i] = new Array(m.length);
}
for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m.length; j++) {
    mk[i][j] = m[(i + j) % m.length];
    }
    }
console.log(mk);
 
/*
11 12 13 14 15
12 13 14 15 11
13 14 15 11 12
14 15 11 12 13
15 11 12 13 14
*/
var md = new Array(m.length);
for (var i = 0; i < md.length; i++) {
 md[i] = new Array(m.length);
}
for (var i = 0; i < m.length; i++) {
for (var j = 0; j < m.length; j++) {
    md[i][(i + j) % m.length] = m[j];
    }
    }
console.log(md);
 
/*
11 12 13 14 15
15 11 12 13 14
14 15 11 12 13
13 14 15 11 12
12 13 14 15 11
*/