//vücut kitle indeksi hesapla
let kilo = Number(prompt("Lütfen kilonuzu giriniz"));
let boy = Number(prompt("lütfen boyunuzu metre cinsinden giriniz"));
let index = kilo / boy ** 2;

if (index < 18.5) {
  console.log("İdeal kilonun altinda");
} else if (index >= 18.5 && index <= 24.9) {
  console.log("İdeal kiloda");
} else if (index >= 25 && index <= 29.9) {
  console.log("İdeal kilonun üstünde");
} else if (index >= 30 && index <= 39.9) {
  console.log("İdeal kilonun çok üstünde (obez)");
} else if (index >= 40) {
  consol.log("İdeal kilonun çok üstünde");
}
