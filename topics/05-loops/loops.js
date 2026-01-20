// filepath: topics/05-loops/loops.js

// ====================================================================================================================
// 01. for DÖNGÜSÜ
// ====================================================================================================================

// for DÖNGÜSÜ: Belirtilen sayıda bir kod bloğunu tekrarlayan klasik döngüdür.
// Yapı: for (başlangıç; koşul; artış) { ... }

console.log("=== for Döngüsü Örnekleri ===\n");

// Örnek 1: 1'den 5'e kadar sayıları yazdırma
console.log("Örnek 1: 1'den 5'e kadar:");
for (let i = 1; i <= 5; i++) {
    // i = 1, 2, 3, 4, 5 olarak 5 kez tekrarlanır
    console.log("Sayı: " + i);
}

console.log(""); // Boş satır

// Örnek 2: Dizi elemanlarını döngülemek
let fruits = ["Elma", "Muz", "Çilek", "Portakal"];
console.log("Örnek 2: Dizi elemanları:");
for (let i = 0; i < fruits.length; i++) {
    // i = 0, 1, 2, 3 olarak 4 kez tekrarlanır (dizi 4 elemanlı)
    console.log((i + 1) + ". meyve: " + fruits[i]);
}

console.log(""); // Boş satır

// Örnek 3: Ters sayma
console.log("Örnek 3: 5'ten 1'e ters sayma:");
for (let i = 5; i >= 1; i--) {
    // i = 5, 4, 3, 2, 1 olarak 5 kez tekrarlanır (ters)
    console.log("Geri sayım: " + i);
}

console.log(""); // Boş satır

// Örnek 4: İç içe (nested) for döngüsü
console.log("Örnek 4: Çarpım tablosu (3x3):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        // Dış döngü 3 kez, iç döngü her biri için 3 kez çalışır (toplam 9 kez)
        row += (i * j) + " ";
    }
    console.log(row);
}

console.log("\n=== for Döngüsü Bitti ===\n");

// ====================================================================================================================
// 02. while DÖNGÜSÜ
// ====================================================================================================================

// while DÖNGÜSÜ: Bir koşul true olduğu sürece kod bloğunu tekrarlayan döngüdür.
// Yapı: while (koşul) { ... }

console.log("=== while Döngüsü Örnekleri ===\n");

// Örnek 1: Sayıları yazdır
console.log("Örnek 1: 1'den 5'e kadar:");
let count = 1;
while (count <= 5) {
    console.log("Sayı: " + count);
    count++; // count'ı artırmazsan sonsuz döngü oluşur!
}

console.log(""); // Boş satır

// Örnek 2: Beklenmeyen bir duruma kadar devam et
console.log("Örnek 2: Sayı 50'den küçük iken:");
let number = 10;
while (number < 50) {
    console.log("Sayı: " + number);
    number += 10; // Her döngüde 10 ekle
}

console.log("\n=== while Döngüsü Bitti ===\n");

// ====================================================================================================================
// 03. do...while DÖNGÜSÜ
// ====================================================================================================================

// do...while DÖNGÜSÜ: while döngüsünden farkı, döngü en az bir kez çalışır,
// sonra koşulu kontrol eder.
// Yapı: do { ... } while (koşul)

console.log("=== do...while Döngüsü Örnekleri ===\n");

// Örnek 1: En az bir kez çalışma garantisi
console.log("Örnek 1: En az bir kez çalışır:");
let attempt = 1;
do {
    console.log("Deneme " + attempt);
    attempt++;
} while (attempt <= 3);

console.log(""); // Boş satır

// Örnek 2: Koşul baştan yanlış olsa da çalışır
console.log("Örnek 2: Koşul baştan yanlış:");
let x = 10;
do {
    // Bu blok en az bir kez çalışır, hatta koşul baştan yanlış olsa da
    console.log("Bu satır yazılır. x = " + x);
} while (x < 5); // Koşul yanlış olsa da do bloğu çalıştı

console.log("\n=== do...while Döngüsü Bitti ===\n");

// ====================================================================================================================
// 04. for...in DÖNGÜSÜ
// ====================================================================================================================

// for...in DÖNGÜSÜ: Objelerin tüm özelliklerini (key'lerini) döngülemek için kullanılır.
// Yapı: for (let key in object) { ... }

console.log("=== for...in Döngüsü Örnekleri ===\n");

// Örnek 1: Obje özellikleri
let person = {
    name: "Ahmet",
    age: 30,
    city: "İstanbul"
};

console.log("Örnek 1: Obje özellikleri:");
for (let key in person) {
    // key = "name", "age", "city" olarak sırayla
    console.log(key + ": " + person[key]);
}

console.log(""); // Boş satır

// Örnek 2: Dizi ile for...in (tavsiye edilmez, for tercih edilir)
console.log("Örnek 2: Dizi ile for...in (demo amaçlı):");
let colors = ["Kırmızı", "Yeşil", "Mavi"];
for (let index in colors) {
    // index = "0", "1", "2" (string olarak!)
    console.log(index + ": " + colors[index]);
}

console.log("\n=== for...in Döngüsü Bitti ===\n");

// ====================================================================================================================
// 05. for...of DÖNGÜSÜ
// ====================================================================================================================

// for...of DÖNGÜSÜ: Dizi elemanlarını direkt olarak döngülemek için kullanılır (ES6).
// Yapı: for (let value of array) { ... }

console.log("=== for...of Döngüsü Örnekleri ===\n");

// Örnek 1: Dizi elemanları
console.log("Örnek 1: Dizi elemanları:");
let animals = ["Köpek", "Kedi", "Kuş"];
for (let animal of animals) {
    // animal = "Köpek", "Kedi", "Kuş" olarak sırayla
    console.log("Hayvan: " + animal);
}

console.log(""); // Boş satır

// Örnek 2: String karakterleri
console.log("Örnek 2: String karakterleri:");
let word = "JavaScript";
for (let char of word) {
    // char = "J", "a", "v", ... olarak karakterlerin her biri
    console.log("Karakter: " + char);
}

console.log("\n=== for...of Döngüsü Bitti ===\n");

// ====================================================================================================================
// 06. break ve continue İFADELERİ
// ====================================================================================================================

// break: Döngüyü tamamen sonlandırır.
// continue: Geçerli iterasyonu atlayıp bir sonrakine geçer.

console.log("=== break ve continue İfadeleri ===\n");

// Örnek 1: break - Döngüyü sonlandır
console.log("Örnek 1: break (5'te durur):");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        // i 6 olduğunda döngüyü sonlandır
        break;
    }
    console.log("Sayı: " + i);
}

console.log(""); // Boş satır

// Örnek 2: continue - Geçerli iterasyonu atla
console.log("Örnek 2: continue (çift sayıları atla):");
for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        // Çift sayıları atla
        continue;
    }
    console.log("Tek sayı: " + i);
}

console.log(""); // Boş satır

// Örnek 3: Belirli bir elemanı bul ve döngüyü sonlandır
console.log("Örnek 3: Eleman bulunca döngüyü sonlandır:");
let numbers = [2, 5, 8, 12, 15, 20];
let targetNumber = 12;
let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetNumber) {
        foundIndex = i;
        console.log("Sayı bulundu! İndeks: " + i);
        break; // Döngüyü sonlandır
    }
}

console.log("\n=== break ve continue Bitti ===\n");

// ====================================================================================================================
// 07. Döngüler ile Pratik Örnekler
// ====================================================================================================================

console.log("=== Pratik Örnekler ===\n");

// Örnek 1: 1 ile 10 arasındaki sayıların toplamı
console.log("Örnek 1: 1-10 arası sayıların toplamı:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // sum = sum + i
}
console.log("Toplam: " + sum); // 55

console.log(""); // Boş satır

// Örnek 2: Faktöriyel (5! = 5 × 4 × 3 × 2 × 1)
console.log("Örnek 2: 5'in faktöriyeli:");
let factorial = 1;
for (let i = 5; i >= 1; i--) {
    factorial *= i; // factorial = factorial * i
}
console.log("5! = " + factorial); // 120

console.log(""); // Boş satır

// Örnek 3: Dizi içindeki en büyük sayıyı bul
console.log("Örnek 3: Dizi içindeki en büyük sayı:");
let values = [23, 45, 12, 89, 34, 56];
let max = values[0]; // İlk elemanla başla

for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}
console.log("En büyük sayı: " + max); // 89

console.log("\n=== Döngüler Konusu Tamamlandı ===\n");
