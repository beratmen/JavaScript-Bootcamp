// filepath: topics/02-variables-data-types/variables.js

// ====================================================================================================================
// 01. Değişken Tanımlama: const, let, var Farkları
// ====================================================================================================================

// const anahtar kelimesi ile SABIT VERİLER tanımlanır.
// Const ile tanımlanan değişkenlerin değerleri asla değiştirilemez.
// Sabit değerler (Pi, gravitational constant gibi) için idealdir.
// Sabit veri tanımlanırken değer atamak zorunludur, aksi takdirde hata oluşur.
const pi = 3.14;
console.log("Pi değeri (const): " + pi); // Konsola: Pi değeri (const): 3.14

// let anahtar kelimesi ile DEĞİŞKEN VERİLER tanımlanır.
// Let ile tanımlanan değişkenlerin değerleri değiştirilebilir (güncellenebilir).
// Let, blok kapsamlıdır (block-scoped), yani sadece tanımlandığı blok içinde erişilebilir.
// Modern JavaScript'te tercih edilen yöntemdir.
let radius = 5; // İlk değer 5 olarak atandı
console.log("Başlangıç radius değeri (let): " + radius); // Konsola: Başlangıç radius değeri (let): 5

// Let ile tanımlanan değişkenin değeri değiştirilebilir (güncellenebilir).
radius = 10; // Radius değeri 5'ten 10'a güncellendi
console.log("Güncellenmiş radius değeri (let): " + radius); // Konsola: Güncellenmiş radius değeri (let): 10

// var anahtar kelimesi eski JavaScript'te değişken tanımlamak için kullanılırdı.
// Var ile tanımlanan değişkenler fonksiyon kapsamlıdır (function-scoped).
// Tekrar tanımlanabilir ve güncellenebilir.
// ⚠️ VAR KULLANMAK ÖNERİLMEZ! Çünkü beklenmeyen davranışlara (hoisting) yol açabilir.
var area = pi * radius * radius; // Alan hesaplama: π × r²
console.log("Dairenin alanı (var): " + area); // Konsola: Dairenin alanı (var): 314

// NOT: Var yerine let veya const kullanılması daha iyidir çünkü blok kapsamı sağlarlar
// ve daha güvenli, öngörülebilir bir kod yazılmasını sağlarlar.

console.log("\n=== Değişken Tanımlama Örneği Bitti ===\n");

// ====================================================================================================================
// 02. Temel Veri Türleri (Primitive Data Types)
// ====================================================================================================================

// STRING VERİ TÜRÜ:
// Metinsel verileri depolamak için kullanılır.
// Tek tırnak ('...'), çift tırnak ("...") veya backtick (`...`) ile tanımlanabilir.
// Backtick ile tanımlanan stringlerde template literal özelliği kullanılabilir (${} ile değişken ekleme).

let stringExample = "Merhaba JavaScript!"; // String veri türü örneği
console.log("String örneği: " + stringExample); // Konsola: String örneği: Merhaba JavaScript!

let singleQuoteString = 'Bu da string örneğidir'; // Tek tırnak ile tanımlanan string
console.log("Tek tırnak string: " + singleQuoteString); // Konsola: Tek tırnak string: Bu da string örneğidir

let templateString = `Selam, bu da bir string ve değişken: ${stringExample}`; // Template literal örneği
console.log(templateString); // Konsola: Selam, bu da bir string ve değişken: Merhaba JavaScript!

console.log(""); // Boş satır (görünürlük için)

// NUMBER VERİ TÜRÜ:
// Sayısal verileri (tam sayılar ve ondalıklı sayılar) depolamak için kullanılır.
// Negatif sayılar, ondalıklı sayılar, üstel notasyon (scientific notation) desteği vardır.

let numberExample = 100; // Tam sayı örneği
console.log("Number örneği (tam sayı): " + numberExample); // Konsola: Number örneği (tam sayı): 100

let floatExample = 19.99; // Ondalıklı sayı örneği
console.log("Number örneği (ondalıklı): " + floatExample); // Konsola: Number örneği (ondalıklı): 19.99

let scientificNotation = 123e5; // 123 × 10^5 = 12300000
console.log("Üstel notasyon örneği: " + scientificNotation); // Konsola: Üstel notasyon örneği: 12300000

console.log(""); // Boş satır

// BOOLEAN VERİ TÜRÜ:
// Mantıksal değerler: sadece true (doğru) veya false (yanlış) olmak üzere iki değer alabilir.
// Koşullu ifadelerde (if/else) ve karşılaştırmalarda sıkça kullanılır.

let booleanExample = true; // Boolean veri türü örneği (true değeri)
console.log("Boolean örneği (true): " + booleanExample); // Konsola: Boolean örneği (true): true

let isActive = false; // Boolean veri türü örneği (false değeri)
console.log("Boolean örneği (false): " + isActive); // Konsola: Boolean örneği (false): false

console.log(""); // Boş satır

// NULL VERİ TÜRÜ:
// Bilinçli olarak "hiç değer yok" anlamına gelen özel bir değerdir.
// Programcı tarafından açıkça atanır (değişkene hiç veri atanmamışsa undefined olur, null değil).
// Genellikle bir değişkeni "şimdilik veri yok" anlamında sıfırlamak için kullanılır.

let nullExample = null; // Null veri türü örneği
console.log("Null örneği: " + nullExample); // Konsola: Null örneği: null

console.log(""); // Boş satır

// UNDEFINED VERİ TÜRÜ:
// Bir değişken tanımlanmış ancak henüz hiç değer atanmamışsa, varsayılan olarak undefined değerini alır.
// Fonksiyonlar eğer açık bir geri dönüş değeri belirtmezlerse undefined döner.

let undefinedExample; // Değişken tanımlandı ama değer atanmadı
console.log("Undefined örneği: " + undefinedExample); // Konsola: Undefined örneği: undefined

console.log(""); // Boş satır

// SYMBOL VERİ TÜRÜ (ES6):
// Benzersiz (unique) ve değiştirilemez (immutable) değerler oluşturmak için kullanılır.
// Genellikle obje özellikleri için gizli anahtarlar oluşturmak veya çakışmaları önlemek için kullanılır.
// Iki Symbol hiçbir zaman eşit değildir, hatta aynı açıklamaya sahip olsalar bile.

const idSymbol = Symbol('id'); // Symbol oluşturma
const anotherId = Symbol('id'); // Aynı açıklamaya sahip başka bir Symbol
console.log("Symbol örneği - idSymbol: " + idSymbol); // Konsola: Symbol örneği - idSymbol: Symbol(id)
console.log("idSymbol === anotherId: " + (idSymbol === anotherId)); // Konsola: idSymbol === anotherId: false

console.log(""); // Boş satır

// BIGINT VERİ TÜRÜ (ES11):
// JavaScript'in Number tipinin maksimum sınırından (2^53 - 1) daha büyük tam sayılarla çalışmak için kullanılır.
// BigInt sayıları sona 'n' harfi ekleyerek tanımlanır.

const bigNumber = 9007199254740991n; // BigInt örneği
const smallNumber = BigInt("123456789012345678901234567890"); // BigInt() fonksiyonu ile oluşturma
console.log("BigInt örneği: " + bigNumber); // Konsola: BigInt örneği: 9007199254740991n
console.log("BigInt fonksiyonu ile: " + smallNumber); // Konsola: BigInt fonksiyonu ile: 123456789012345678901234567890n

console.log("\n=== Temel Veri Türleri Örneği Bitti ===\n");

// ====================================================================================================================
// 03. Veri Türlerini Kontrol Etme (typeof Operatörü)
// ====================================================================================================================

// typeof operatörü, bir değişkenin veri türünü döndürür (string olarak).
// Hata ayıklama ve veri türü kontrolü için çok faydalıdır.

console.log("stringExample tipi: " + typeof stringExample); // Konsola: stringExample tipi: string
console.log("numberExample tipi: " + typeof numberExample); // Konsola: numberExample tipi: number
console.log("booleanExample tipi: " + typeof booleanExample); // Konsola: booleanExample tipi: boolean
console.log("nullExample tipi: " + typeof nullExample); // Konsola: nullExample tipi: object (Dikkat! Bu bir quirk'tür)
console.log("undefinedExample tipi: " + typeof undefinedExample); // Konsola: undefinedExample tipi: undefined

console.log(""); // Boş satır

// ====================================================================================================================
// 04. Obje ve Dizi Veri Türleri (Non-Primitive)
// ====================================================================================================================

// OBJE VERİ TÜRÜ:
// Key-value (anahtar-değer) çiftlerinden oluşan yapılardır.
// Birden fazla ilişkili veriye bir isim altında sahip olmak istediğimizde kullanılır.
// Süslü parantez {} ile tanımlanır.

let personObject = {
    name: "Berat",        // Key: name, Value: "Berat"
    age: 30,              // Key: age, Value: 30
    isStudent: false      // Key: isStudent, Value: false
};

console.log("Obje örneği: ");
console.log(personObject); // Konsola: Obje örneği: { name: 'Berat', age: 30, isStudent: false }
console.log("Obje içindeki name değeri: " + personObject.name); // Konsola: Obje içindeki name değeri: Berat
console.log("Obje içindeki age değeri: " + personObject.age); // Konsola: Obje içindeki age değeri: 30

console.log(""); // Boş satır

// DİZİ VERİ TÜRÜ:
// Sıralı bir veri koleksiyonudur ve her elemana indeks numarası (0'dan başlayan) ile erişilir.
// Köşeli parantez [] ile tanımlanır.
// Array, aslında özel bir tür objedir (typeof [] => "object" döner).

let numberArray = [1, 2, 3, 4, 5]; // Sayı dizisi örneği
console.log("Dizi örneği: " + numberArray); // Konsola: Dizi örneği: 1,2,3,4,5
console.log("Dizi'nin ilk elemanı (indeks 0): " + numberArray[0]); // Konsola: Dizi'nin ilk elemanı (indeks 0): 1
console.log("Dizi'nin 3. elemanı (indeks 2): " + numberArray[2]); // Konsola: Dizi'nin 3. elemanı (indeks 2): 3
console.log("Dizi'nin son elemanı: " + numberArray[numberArray.length - 1]); // Konsola: Dizi'nin son elemanı: 5

console.log(""); // Boş satır

// Karışık türde elemanlara sahip dizi örneği
let mixedArray = [
    "Merhaba",     // String
    42,            // Number
    true,          // Boolean
    { name: "Ali" }, // Obje
    [1, 2, 3]      // Başka bir dizi (nested array)
];

console.log("Karışık türde dizi: ");
console.log(mixedArray); // Konsola: Karışık türde dizi: [ 'Merhaba', 42, true, { name: 'Ali' }, [ 1, 2, 3 ] ]
console.log("Karışık dizinin 1. elemanı (indeks 1): " + mixedArray[1]); // Konsola: Karışık dizinin 1. elemanı: 42

console.log(""); // Boş satır

// typeof ile Obje ve Dizi kontrol etme
console.log("personObject tipi: " + typeof personObject); // Konsola: personObject tipi: object
console.log("numberArray tipi: " + typeof numberArray); // Konsola: numberArray tipi: object (Dizi de objedir!)

console.log("\n=== Veri Türleri Konusu Tamamlandı ===\n");
