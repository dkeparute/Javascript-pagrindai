/* 
5! = 5 * 4 * 3 * 2 * 1 t.y. 5 * 4!
4! = 4 * 3 * 2 * 1
3! = 3 * 2 * 2 * 1
*/
// 1! = 1;
// 0! = 1

// function fakt(sk) {
//     if (sk === 0) {
//     return 1;
//     }
//     return sk * fakt(sk - 1);
// }
// console.log(fakt(3));


// neigiamo skaicio faktorialas nera apibreztas
function fakt(sk) {
    if (sk < 0) {
        return -1;
    }
    if (sk === 0) {
    return 1;
    }
    return sk * fakt(sk - 1);
}
console.log(fakt(-5));


