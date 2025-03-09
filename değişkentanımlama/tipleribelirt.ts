// Farklı veri türlerinde değişkenler oluşturma
let str = "Merhaba"; 
let num = 42; 
let bool = true; // Boolean -- true mu false mu
let undef; // tanımlanmamış
let boş = null; 
let obj = { isim: "Erdal", yaş: 20 }; 
let küme = [1, 2, 3, 4]; // dizi 
let func = function() { return "Bu bir fonksiyon"; }; // funcion

// bunlar çıktılar
console.log("str: ", typeof str);
console.log("num: ", typeof num);
console.log("bool: ", typeof bool);
console.log("undef: ", typeof undef);
console.log("boş: ", typeof boş); 
console.log("obj: ", typeof obj);
console.log("dizi: ", typeof küme); 
console.log("func: ", typeof func);
