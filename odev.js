// burası 1 ile 50 arasındaki çift sayıların toplamını sağlayan kod
var total = 0;
for (var k = 2; k <= 50; k += 2) {
    total += k;
}
console.log("1 ile 50 arasındaki çift sayıların toplamı:", total);
// burası da 1 den 10 a kadar olan sayıların 7 ile çarpımını gösteren kod
var sayi = 7;
console.log("".concat(sayi, " say\u0131s\u0131n\u0131n \u00E7arp\u0131m tablosu:"));
for (var u = 1; u <= 10; u++) {
    console.log("".concat(sayi, " x ").concat(u, " = ").concat(sayi * u));
}
