// Harf sayısını bulan uygulama
let metin = "şuanda javascript öğreniyorum";
let harf = prompt("harf giriniz");

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i <= metin.length; i++) {
    if (metin.charAt(i) === harf) {
      toplam += 1;
    }
  }
  return toplam;
}
let sonuc = bul(harf);
alert("Şu kadar " + harf + " vardır =" + sonuc);
