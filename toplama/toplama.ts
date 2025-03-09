// sayıların alındığı kısım
let sayi1 = prompt("Birinci sayıyı girin:");
let sayi2 = prompt("İkinci sayıyı girin:");

// verilen değerleri sayıya çevirmek için tekrar tanımlıyoruz
let birinci = Number(sayi1);
let ikinci = Number(sayi2);

// hesap kitap kısmı
let toplam = birinci + ikinci;

// sonuç kısmı
alert("Girdiğiniz sayıların toplamı: " + toplam);


// ama bu kod node.js imde çalışmıyor prompt yüzünden // sanırım tarayıcıda açılırsa hatasız çalışacaktır