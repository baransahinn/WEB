// İç içe if yapısı

let ad = prompt("isminizi giriniz");
let tckn = prompt("lütfen tc kimlik numaranizi giriniz");
function kontrolEt(ad, tckn) {
  if (ad == "") {
    console.log("Lütfen isim alanini bos birakmayiniz ");
    return;
  }
  if (tckn.length != 11) {
    console.log("lütfen Tc kimlik numaranizi 11 haneli giriniz");
    return;
  }
  console.log("iism ve tckn problemsiz girildi");
}
kontrolEt(ad, tckn);
