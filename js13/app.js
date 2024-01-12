// ARROW FUNCİTON
// function yazdir() {
//   console.log("merhaba");
// }
// yazdir();

// const yazdir = (firstName) => console.log("merhaba " + firstName);

// yazdir("baran");

// const kupAL = (x) => x * x * x;

// const kareAL = (x) => x * x;
// console.log("değer " + kupAL(3));
// DESTU

// DESTRUCTİNG KULLANIMI
// let langs = ["c", "c#", "python", "javasricpt"];
// let [langs1, langs2, langs3, langs4] = langs;

// console.log(langs1, langs2, langs3, langs4);

// const hesapla = (a, b) => {
//   const toplam = a + b;
//   const cikarma = a - b;
//   const carp = a * b;
//   let dizi = [toplam, cikarma, carp];
//   return dizi;
// };

// let [a, b, c] = hesapla(10, 2);
// console.log(a, b, c);

// const person = {
//   firstName: "baran",
//   lastName: "şahin",
//   salary: 5000,
//   age: 25,
// };
// isim = person.firstName;
// soyİsim = person.lastName;
// maas = person.salary;
// yas = person.age;
// console.log(isim, soyİsim, maas, yas);
// /**************************************************************************/
// const { firstName, lastName, salary, age } = person;
// console.log(firstName, lastName, salary, age);

// SPREAD OPERATÖRÜ
// let numbers = [10, 20, 30, 40];
// const add = (a, b, c, d) => {
//   console.log(a + b + c + d);
// };
// // Eski yöntem
// add(numbers[0], numbers[1], numbers[2], numbers[3]);,

// //Yeni yöntem /************* */
// add(...numbers);

//Yeni yöntem örnek2
// const diller = ["java", "C#"];
// const diller1 = ["php", "python", ...diller];
// console.log(diller1);

// //örnek3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, ...kalanSayilar] = numbers; // a ve b ye tanımladıktan sonra gerisini kalanSayilar dizisine attı

// console.log(a, b, kalanSayilar);
/**************************************************************************** */
// For in - For of Döngüleri

// //for in indexlerini döner
// let names = ["baran", "sahin", "furkan", "ibis"];
// // for (let name in names) {
// //   console.log(name,names[name]);
// // }
// // for of değerleri döner
// for (let name of names) {
//   console.log(name, names.indexOf(name));
// }
let value;
const map1 = new Map();
map1.set(34, "istanbul");
map1.set(50, "nevseihr");
map1.set(38, "adana");

// DELETE
// value = map1.delete(34);
// console.log(value);

// HAS
// value = map1.has(34);
// console.log(value);

// SİZE
// console.log(map1.size);

// For of ile Map üzerinde dönme
// for (let [key, value] of map1) {
//   console.log(key, value);
// }
// for (let key of map1.keys()) {
//   console.log(key);
// }

// for (let value of map1.values()) {
//   console.log(value);
// }

//Mapten arraye çevirmek
// const arr = Array.from(map1);
// console.log(arr);

// Arrayı mape çevirmek
// const array2 = [
//   [34, "istanbul"],
//   [50, "nevseihr"],
//   [38, "adana"],
// ];
// let myMap = new Map(array2);
// console.log(myMap);

// TEMPLATE LİTERALS
// const write = (firstName, lastName) => {
//   // ESKİ YÖNTEM console.log("isim:  " + firstName + " " + "soyisim: " + lastName);

//   // TEMPLATE LİTARİS İLE KUULANMAK ALTGR+ İKİ KEZ VİRGÜL TUŞU ``
//   console.log(`isim ${firstName} soyisim: ${lastName}`);
// };
// write("baran", "şahin");
