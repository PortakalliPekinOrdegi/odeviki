// burası 1 ile 50 arasındaki çift sayıların toplamını sağlayan kod
let total: number = 0;
for (let k = 2; k <= 50; k += 2) {
    total += k;
}
console.log("1 ile 50 arasındaki çift sayıların toplamı:", total);

// burası da 1 den 10 a kadar olan sayıların 7 ile çarpımını gösteren kod
const sayi: number = 7;
console.log(`${sayi} sayısının çarpım tablosu:`);
for (let u = 1; u <= 10; u++) {
    console.log(`${sayi} x ${u} = ${sayi * u}`);
}