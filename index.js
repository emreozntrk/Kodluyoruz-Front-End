let yeniSatır = "\r\n";
let bakiye = 1000;

let metin =
  "1-Bakiye Görüntüleme" +
  yeniSatır +
  "2-Para Çekme" +
  yeniSatır +
  "3-Para Yatırma" +
  yeniSatır +
  "4-Çıkış" +
  yeniSatır +
  "Lütfen bir değer seçiniz";

alert(metin);

let secim = prompt(metin);
switch (secim) {
  case "1":
    alert("Bakiyeniz : " + bakiye);
    break;
  case "2":
    let cekilecekTutar = Number(prompt("Çekilecek Tutarı Giriniz:"));
    if (cekilecekTutar < bakiye) {
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan Tutar : " + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla para çekemezsiniz" +
          yeniSatır +
          "Bakiyeniz : " +
          bakiye +
          " " +
          "Çekilecek Tutar: " +
          cekilecekTutar
      );
    }
    break;
  case "3":
    let yatıralacakTutar = Number(prompt("Lütfen Yatıralacak Tutar Giriniz"));
    bakiye = bakiye + yatıralacakTutar;
    alert("Bakiyeniz : " + bakiye);
    break;
  case "4":
    alert("Çıkış yapılmıştır");
    break;
  default:
    alert("Lütfen 1-4 arası bir seçim yapınız.");
    break;
}
