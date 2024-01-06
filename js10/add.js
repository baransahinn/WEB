//MÜKEMMEL SAYI UYGULAMASI
//6 =1,2,3,6 =12  = 6*2
let sayi = Number(prompt("sayiyi giriniz"));
function mukemmelSayi(sayi) {
  toplam = 0;
  for (i = 1; i <= sayi; i++) {
    if (sayi % i == 0) {
      toplam += i;
    }
  }
  if (toplam / sayi == 2) {
    alert(sayi + " mükemmel sayidir");
  } else {
    alert(sayi + " mükemmel sayi değildir");
  }
}
mukemmelSayi(sayi);
