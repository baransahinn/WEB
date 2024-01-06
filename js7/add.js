// ÇARPIM TABLOSU UYGULAMASI

let carpim = 0;
for (let i = 1; i <= 10; i++) {
  console.log(i + " carpimi yapildi");
  for (let j = 1; j <= 10; j++) {
    console.log(i + "x" + j + "=" + i * j);
  }
}

// ASAL SAYI BULMA
let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
let sonuc = true;
for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    //Asal degildir
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert(sayi + " asaldır.");
} else {
  alert(sayi + " asal değildir!");
}
