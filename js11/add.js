//Ürün Arama Uygulaması
let urun1 = {
  isim: "ACER Swift",
  kategori: "Teknoloji",
  fiyat: 6.219,
};
let urun2 = {
  isim: "ACER Nitro 5",
  kategori: "Teknoloji",
  fiyat: 15.475,
};
let urun3 = {
  isim: "ACER Gaming",
  kategori: "Teknoloji",
  fiyat: 13.99,
};
let urun4 = {
  isim: "LENOVA V15",
  kategori: "Teknoloji",
  fiyat: 10.999,
};
let urun5 = {
  isim: "LENOVA V14",
  kategori: "Teknoloji",
  fiyat: 4.399,
};
let urun6 = {
  isim: "LENOVA IDEAPAD",
  kategori: "Teknoloji",
  fiyat: 4.51,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let kullaniciUrunismi = prompt("Bir ürün ismi girin");

filtreliUrunlerYaz(urunler);

function filtreliUrunlerYaz(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunismi.toUpperCase(), 0)) {
      console.log(urun.isim + " " + urun.kategori + " " + urun.fiyat);
    }
  });
}
