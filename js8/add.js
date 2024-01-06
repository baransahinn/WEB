// Faktöriyel Hesaplama
let sayi = Number(
  prompt("Faktöriyelini hesaplamak istediğiniz sayiyi giriniz")
);
let carpim = 1;

for (let i = 1; i <= sayi; i++) {
  carpim *= i;
}
alert(carpim);

// Armstrong Sayısı Bulma Uygulaması
let sayi = prompt("Sayı giriniz");
let toplam = 0;
for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}

if (sayi == toplam) {
  alert("Armstrong sayısıdır :)");
} else {
  alert("Armstrong sayısı değildir");
}
