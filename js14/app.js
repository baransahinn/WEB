//OOP
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

//STATİC
class Matematik {
  topla(a, b) {
    console.log(a + b);
  }
  cikarma(a, b) {
    console.log(a - b);
  }
  static carp(a, b) {
    console.log(a * b);
  }
}
const matematik = new Matematik();
matematik.carp(5, 6); // static olmadıği için nesne üzerinden erişiyoruz
Matematik.carp(5, 6); // stat0ic olduğu için class üzerinden erişiyoruz

//Miras alma super

class Person {
  firstName = "baran  ";

  write() {
    console.log("dfsdfsdf", this.firstName);
  }
}
// const person = new Person();
// person.write();
class Student extends Person {
  write() {
    super.write();
  }
}
const student1 = new Student();
student1.write();
// // Super() => miras aldığı sınıfın constructorunu gösterir
class Person {
  constructor(isim, soyisim, yas, maas) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yas = yas;
    this.maas = maas;
  }
  writeInfo() {
    console.log(this.isim, this.soyisim, this.yas, this.maas);
  }
}

class Student extends Person {
  constructor(isim, soyisim, yas, maas) {
    super(isim, soyisim, yas, maas);
  }
  write() {
    super.writeInfo();
  }
}

const stutend1 = new Student("baran", "şahin", 24, 40000);
stutend1.write();
