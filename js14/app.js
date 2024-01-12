// OOP
class Insan {
  constructor(isim, soyisim, yas, maas) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yas = yas;
    this.maas = maas;
  }

  bilgileriGöster() {
    console.log(
      `isim: ${this.isim} soyisim: ${this.soyisim} maas: ${this.maas} yaş: ${this.yas}`
    );
  }
}
const insan1 = new Insan("baran", "şahin", 25, 35000);
const insan2 = new Insan("sema", "aydin", 21, 20000);
insan1.bilgileriGöster();
insan2.bilgileriGöster();
