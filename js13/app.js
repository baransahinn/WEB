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
