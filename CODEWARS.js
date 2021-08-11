// // Pirma užduotis parašyti funkciją Hello World.
// function helloWorld() {
//     var str = "Hello World!";
//     return str;

// }
// console.log(helloWorld());
// // Skaiciu sudetis
// var v1 = 50;
// function equal1() {
//     var a = v1
//     var b = v1
//     return a + b;
// }
// console.log(equal1());
// // Teksto sudetis
// var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
// function Dad() {
//     var d1 = "D"
//     var a2 = "a"
//     var d2 = "d"
//     //select some variable to combine "Dad"
//     return d1 + a2 + d2;
// }
// console.log(Dad());
// // NE atspausdinimas
// function answer1() {
//     return "no";
// }
// console.log(answer1());
// // MASYVAI
// // index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
// // If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
// // Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// // var arr=[1,2,3];     //define an array arr contains elements 1 2 3 can use var arr=new Array()
// // arr.push(4);         //add element 4 to arr
// // console.log(arr)     //[1,2,3,4]
// // arr.pop();           //remove the last element from arr
// // console.log(arr)     //[1,2,3]
// // console.log(arr.length); // to know how many elements are contained in the array

// var arr = new Array(1, 2, 3);
// console.log(arr);
// // arba
// var arr = [5, 6, 7, 8, 9];
// console.log(arr);

// // reikia prideti 9 masyvo gale
// arr.push(8);
// console.log(arr);
// // reikia atimti 9 masyvo gale
// arr.pop();
// console.log(arr);

// // atspausdinti masyvo 2 elementa
// console.log(arr[2]);

// // atspausdinti elementu kieki masyve
// console.log(arr.length);
// // atspausdinti paskutini elementa masyve
// console.log(arr.length - 1);

// let arr = [1, 2, 3, 4]

// function getLength(arr) {
//     //return length of arr
//     return arr.length;
// }
// console.log(getLength(arr));

// function getFirst(arr) {
//     //return the first element of arr
//     return arr[0];
// }
// console.log(getFirst(arr));

// function getLast(arr) {
//     //return the last element of arr
//     return arr[arr.length - 1];
// }
// console.log(getLast(arr));

// function pushElement(arr) {
//     let el = 5;
//     arr.push(el);
//     //push el to arr
//     return arr;
// }
// console.log(pushElement(arr));

// function popElement(arr) {
//     //pop an element from arr
//     arr.pop();
//     return arr;
// } console.log(popElement(arr));

// // Objektai
// // Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
// /* 
// var animal={name:"dog"} yra tas pats kaip 
// var animal={}
// animal.name="dog" arba
// animal["name"]="dog"*/

// var obj = {
//     name: "dog",
//     legs: 4,
//     color: "white"
// }
// function animal(obj){
//     return "This" + " " + obj.color + " " + obj.name + " " + "has" + " " + obj.legs + " " + "legs.";
// }
// console.log(animal(obj));

// Boolean
// false = 0, -0, "", null, undefined, NaN;

// let val = 0;
// function trueOrFalse(val) {
//     if (val == false || val == 0 || val == -0 || val == null || val == undefined || val == NaN) {
//         return "false";
//     }
//     else {
//         return "true";
//     }
// }
// console.log(trueOrFalse(val));

// // IF ir ELSE funkcija

// function saleHotdogs(n){
//     return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
// }
// console.log(saleHotogs(n));
// //   arba atitikmuo yra funkcija zemiau

// function SaleHotdogs(n) {
//     if (n < 5) {
//         return n * 100;
//     }
//     else if (n >= 5 && n < 10) {
//         n * 95;
//     }
//     else {
//         return n * 90;
//     }
// }
// console.log(SaleHotdogs(n));

// // SWITCH naudojimas
// function howManydays(month){
//     var days;
//     switch (month){
//         /*this is the months which has 31 days*/
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     days=31
//     break;
//          /*this is the months which has 30 days*/
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     days=30
//     break;
//      /*this is the months which has 28 days  */
//     case 2:
//     days=28;
//     break;   
//     }
//     return days;
//   }
//   console.log(howManydays(8));

//   WHILE LOOP

// function padIt(str,n){
//     while(n>0) {
//       if(n%2 ===0) {
//         str = str + "*";
//       } else {
//         str = "*" + str;
//       }
//       n--;
//     } 
//       return str;
//     }
// console.log(padIt("a",35));

// function pickIt(arr) {
//     let odd = [],
//       even = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         even.push(arr[i]);
//       } else {
//         odd.push(arr[i]);
//       }
//     }
//     return [odd, even];
//   }
//   console.log(pickIt([10,15,20,16]));

/*
You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 

When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element. 

Return the ```bag``` after for loop finished.
*/

// function grabDoll(dolls) {
//     var bag = [];

//     for (var i = 0; i < dolls.length; i++) {

//         if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//             bag.push(dolls[i]);
//         }   
//         else {
//             continue;
//         }   
//         if (bag.length === 3) {
//             break;}
//     }
//     return bag;
// }
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));


// function giveMeFive(obj) {
//     //coding here
//     var five = [];
//     for (var key in obj) {
//         if (key.length == 5) {
//             five.push(key);
//         }
//         if (obj[key].length == 5) {
//             five.push(obj[key]);
//         }
//         return five;
//     }

// }
// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));

// var str="codewars";
// for (var i=0;i<str.length;i++) console.log(str[i])

var sk1 = 2;
while (sk1 <= 100) {
    var daliklis = 2;
    while (daliklis < sk1) {
        if (sk1 % daliklis == 0) {
        } 
        daliklis += 1;
    }
    if (pirminis) {
        console.log(sk1);
    } sk1 += 1;
} 