// filepath: topics/09-string-methods/string-methods.js

console.log("=== String Metotları ===\n");

// ====================================================================================================================
// 01. length ÖZELLIĞI
// ====================================================================================================================

let sampleString = " Hello, JavaScript Bootcamp! ";

// length: String'in kaç karakterden oluştuğunu döner
let length = sampleString.length;
console.log("String: '" + sampleString + "'");
console.log("Uzunluk: " + length); // 32 (boşluklar dahil)

console.log("\n=== length Bitti ===\n");

// ====================================================================================================================
// 02. CASE DÖNÜŞÜM METOTLARı
// ====================================================================================================================

// toUpperCase(): Tüm karakterleri BÜYÜK harfe çevirir
let upperCase = sampleString.toUpperCase();
console.log("Büyük harfe: " + upperCase); // " HELLO, JAVASCRIPT BOOTCAMP! "

// toLowerCase(): Tüm karakterleri küçük harfe çevirir
let lowerCase = sampleString.toLowerCase();
console.log("Küçük harfe: " + lowerCase); // " hello, javascript bootcamp! "

console.log("\n=== Case Dönüşümü Bitti ===\n");

// ====================================================================================================================
// 03. BOŞLUK KONTROLÜ - trim()
// ====================================================================================================================

// trim(): Başındaki ve sonundaki boşlukları kaldırır
let trimmedString = sampleString.trim();
console.log("Orijinal: '" + sampleString + "'");
console.log("Trim sonrası: '" + trimmedString + "'");

console.log("\n=== trim() Bitti ===\n");

// ====================================================================================================================
// 04. REPLACE() - METİN DEĞİŞTİRME
// ====================================================================================================================

// replace(): Belirli bir metni başka metinle değiştirir (sadece ilk bulunan)
let replacedString = sampleString.replace("JavaScript", "JS");
console.log("Orijinal: " + sampleString);
console.log("Değiştirilen: " + replacedString); // İlk "JavaScript" => "JS"

console.log("\n=== replace() Bitti ===\n");

// ====================================================================================================================
// 05. indexOf() - METİN ARAMA
// ====================================================================================================================

// indexOf(): Metin içinde aranan metnin ilk konumunu döner (bulunamazsa -1)
let indexOfJavaScript = sampleString.indexOf("JavaScript");
console.log("'JavaScript' konumu: " + indexOfJavaScript); // 9

let indexOfPython = sampleString.indexOf("Python");
console.log("'Python' konumu: " + indexOfPython); // -1 (bulunamadı)

console.log("\n=== indexOf() Bitti ===\n");

// ====================================================================================================================
// 06. SUBSTRING() ve SLICE() - ALT STRİNG ÇIKARMA
// ====================================================================================================================

// substring(başlangıç, bitiş): İki indeks arasındaki metni döner
let subString = sampleString.substring(1, 6);
console.log("substring(1, 6): '" + subString + "'"); // "Hello"

// slice(başlangıç, bitiş): substring gibi, ancak negatif indeksleri destekler
let slicedString = sampleString.slice(-10);
console.log("slice(-10): '" + slicedString + "'"); // "Bootcamp! "

console.log("\n=== substring() ve slice() Bitti ===\n");

// ====================================================================================================================
// 07. SPLIT() - STRİNG'İ DİZİYE DÖNÜŞTÜRME
// ====================================================================================================================

let fruits = "Apple, Banana, Cherry, Date";

// split(ayırıcı): String'i belirli bir ayırıcıya göre parçalara ayırıp dizi döner
let fruitArray = fruits.split(", ");
console.log("Meyveler: " + fruits);
console.log("Dizi olarak: ", fruitArray); // ["Apple", "Banana", "Cherry", "Date"]

console.log("\n=== split() Bitti ===\n");

// ====================================================================================================================
// 08. charAt() - BELİRLİ KONUMDAKİ KARACTERİ ALMA
// ====================================================================================================================

let charAtIndex2 = fruits.charAt(2);
console.log("String: " + fruits);
console.log("İndeks 2'deki karakter: '" + charAtIndex2 + "'"); // "p" (Apple'ın üçüncü karakteri)

console.log("\n=== charAt() Bitti ===\n");

// ====================================================================================================================
// 09. STARTSWITH() ve ENDSWITH() - BAŞLANGIÇ/SON KONTROLÜ
// ====================================================================================================================

let message = "Hello, World!";

// startsWith(): String belirli bir metinle başlıyor mu?
let startsWithHello = message.startsWith("Hello");
console.log("'" + message + "' 'Hello' ile mi başlıyor?: " + startsWithHello); // true

// endsWith(): String belirli bir metinle bitiyor mu?
let endsWithExclamation = message.endsWith("!");
console.log("'" + message + "' '!' ile mi bitiyor?: " + endsWithExclamation); // true

console.log("\n=== startsWith() ve endsWith() Bitti ===\n");

// ====================================================================================================================
// 10. INCLUDES() - METİN İÇERİSİ KONTROLÜ
// ====================================================================================================================

// includes(): String belirli bir metni içeriyor mu?
let containsWorld = message.includes("World");
console.log("'" + message + "' 'World' içeriyor mu?: " + containsWorld); // true

let containsPython = message.includes("Python");
console.log("'" + message + "' 'Python' içeriyor mu?: " + containsPython); // false

console.log("\n=== includes() Bitti ===\n");

// ====================================================================================================================
// 11. REPEAT() - METİN TEKRARLAMA
// ====================================================================================================================

let pattern = "Ha";

// repeat(): String'i belirli sayıda tekrarlar
let repeated = pattern.repeat(3);
console.log("'" + pattern + "' 3 kez: " + repeated); // "HaHaHa"

console.log("\n=== repeat() Bitti ===\n");

// ====================================================================================================================
// 12. PRATİK ÖRNEKLER
// ====================================================================================================================

console.log("=== Pratik Örnekler ===\n");

// Örnek 1: Email validasyonu
let email = "user@example.com";
let isValidEmail = email.includes("@") && email.includes(".");
console.log("Email '" + email + "' geçerli mi?: " + isValidEmail); // true

console.log(""); // Boş satır

// Örnek 2: Kelime sayma
let sentence = "JavaScript JavaScript JavaScript";
let count = sentence.split(" ").length;
console.log("Cümle: " + sentence);
console.log("Kelime sayısı: " + count); // 3

console.log(""); // Boş satır

// Örnek 3: URL'den domain çıkarma
let url = "https://www.example.com";
let domain = url.replace("https://", "").replace("www.", "");
console.log("URL: " + url);
console.log("Domain: " + domain); // example.com

console.log("\n=== String Metotları Konusu Tamamlandı ===\n");
