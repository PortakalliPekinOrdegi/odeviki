// sayıların alındığı kısım
var sayi1 = prompt("Birinci sayıyı girin:");
var sayi2 = prompt("İkinci sayıyı girin:");
// verilen değerleri sayıya çevirmek için tekrar tanımlıyoruz
var birinci = Number(sayi1);
var ikinci = Number(sayi2);
// hesap kitap kısmı
var toplam = birinci + ikinci;
// sonuç kısmı
alert("Girdiğiniz sayıların toplamı: " + toplam);
// ama bu kod node.js imde çalışmıyor prompt yüzünden // sanırım tarayıcıda açılırsa hatasız çalışacaktır
