// filepath: topics/06-functions/functions.js

// ====================================================================================================================
// 01. FUNCTION DECLARATION (Fonksiyon Bildirimi)
// ====================================================================================================================

// FUNCTION DECLARATION: function anahtar kelimesi kullanarak fonksiyon tanımlanır.
// Yapı: function functionName(parameters) { ... }

console.log("=== Function Declaration Örnekleri ===\n");

// Örnek 1: Basit bir fonksiyon
function greet(name) {
    // name parametresini alır ve karşılama mesajı döner
    return "Merhaba, " + name + "!";
}

// Fonksiyonu çağır
let greeting = greet("Ahmet");
console.log(greeting); // Konsola: Merhaba, Ahmet!

console.log(""); // Boş satır

// Örnek 2: Matematiksel işlem yapan fonksiyon
function add(a, b) {
    // İki sayıyı toplar ve sonucu döner
    return a + b;
}

let result = add(10, 5);
console.log("10 + 5 = " + result); // Konsola: 10 + 5 = 15

console.log(""); // Boş satır

// Örnek 3: Birden fazla koşul ve hesaplama yapan fonksiyon
function calculateGrade(score) {
    // Puana göre notu belirler
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let grade = calculateGrade(85);
console.log("Puan 85 için not: " + grade); // Konsola: Puan 85 için not: B

console.log(""); // Boş satır

// Örnek 4: Parametresiz fonksiyon
function getDate() {
    // Parametresiz fonksiyon
    return "Bugünün tarihi: " + new Date().toLocaleDateString("tr-TR");
}

console.log(getDate()); // Konsola: Bugünün tarihi: [bugünün tarihi]

console.log("\n=== Function Declaration Bitti ===\n");

// ====================================================================================================================
// 02. FUNCTION EXPRESSION (Fonksiyon İfadesi)
// ====================================================================================================================

// FUNCTION EXPRESSION: Bir değişkene bir fonksiyon atanır.
// Yapı: const/let/var name = function(parameters) { ... }

console.log("=== Function Expression Örnekleri ===\n");

// Örnek 1: İsimlendirilmiş function expression
const multiply = function(a, b) {
    // İki sayıyı çarpar
    return a * b;
};

let product = multiply(6, 7);
console.log("6 × 7 = " + product); // Konsola: 6 × 7 = 42

console.log(""); // Boş satır

// Örnek 2: Anonim function expression (isim olmayan)
const divide = function(a, b) {
    // İki sayıyı böler
    if (b === 0) {
        return "Hata: Sıfıra bölme!";
    }
    return a / b;
};

let quotient = divide(20, 4);
console.log("20 ÷ 4 = " + quotient); // Konsola: 20 ÷ 4 = 5

console.log(""); // Boş satır

// Örnek 3: String işlemi yapan function expression
const reverseString = function(str) {
    // String'i ters çevirir
    return str.split("").reverse().join("");
};

let reversed = reverseString("JavaScript");
console.log("'JavaScript' ters çevrilmiş: " + reversed); // Konsola: 'JavaScript' ters çevrilmiş: tpircSavaJ

console.log("\n=== Function Expression Bitti ===\n");

// ====================================================================================================================
// 03. ARROW FUNCTION (Ok Fonksiyonu - ES6)
// ====================================================================================================================

// ARROW FUNCTION: Modern JavaScript'te fonksiyon tanımlamanın kısa ve okunması kolay yoludur.
// Yapı: const name = (parameters) => { ... }
// Kısa form: const name = param => expression; (tek satırda, return otomatiktir)

console.log("=== Arrow Function Örnekleri ===\n");

// Örnek 1: Temel arrow function
const square = (x) => {
    // x'in karesini hesaplar
    return x * x;
};

let squared = square(5);
console.log("5² = " + squared); // Konsola: 5² = 25

console.log(""); // Boş satır

// Örnek 2: Kısa form arrow function (parametreleri parantez olmadan)
const cube = x => x * x * x; // Tek satırda, return otomatik

let cubed = cube(3);
console.log("3³ = " + cubed); // Konsola: 3³ = 27

console.log(""); // Boş satır

// Örnek 3: Birden fazla parametreli arrow function
const power = (base, exponent) => {
    // base'nin exponent. kuvvetini hesaplar
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

let powerResult = power(2, 8);
console.log("2 üzeri 8 = " + powerResult); // Konsola: 2 üzeri 8 = 256

console.log(""); // Boş satır

// Örnek 4: Kısa form birden fazla parametreyle
const subtract = (a, b) => a - b;

let subtraction = subtract(20, 8);
console.log("20 - 8 = " + subtraction); // Konsola: 20 - 8 = 12

console.log(""); // Boş satır

// Örnek 5: Parametresiz arrow function
const getCurrentHour = () => new Date().getHours();

console.log("Saat: " + getCurrentHour()); // Konsola: Saat: [geçerli saat]

console.log("\n=== Arrow Function Bitti ===\n");

// ====================================================================================================================
// 04. PARAMETRELER VE ARGÜMANLAR
// ====================================================================================================================

// PARAMETRELER: Fonksiyon tanımlanırken belirlenir.
// ARGÜMANLAR: Fonksiyon çağrılırken geçilen değerlerdir.

console.log("=== Parametreler ve Argümanlar ===\n");

// Örnek 1: Varsayılan parametreler
function greetWithDefault(name = "Ziyaretçi") {
    // name parametresine varsayılan değer verildi
    return "Hoşgeldiniz, " + name + "!";
}

console.log(greetWithDefault()); // Hoşgeldiniz, Ziyaretçi!
console.log(greetWithDefault("Fatih")); // Hoşgeldiniz, Fatih!

console.log(""); // Boş satır

// Örnek 2: Rest parametresi (...) - değişken sayıda argüman
const sumNumbers = (...numbers) => {
    // Kaç tane sayı verilirse verilsin hepsini toplar
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};

console.log("Topla(5, 10): " + sumNumbers(5, 10)); // 15
console.log("Topla(5, 10, 15, 20): " + sumNumbers(5, 10, 15, 20)); // 50

console.log("\n=== Parametreler Bitti ===\n");

// ====================================================================================================================
// 05. RETURN İFADESİ
// ====================================================================================================================

// RETURN: Fonksiyondan bir değer döndürmek ve fonksiyonu sonlandırmak için kullanılır.

console.log("=== Return İfadesi ===\n");

// Örnek 1: Değer döndürme
function findMax(a, b) {
    if (a > b) {
        return a; // Fonksiyonu sonlandırır ve a'yı döner
    }
    return b; // Eğer a > b değilse b'yi döner
}

let max = findMax(15, 8);
console.log("Maksimum: " + max); // Konsola: Maksimum: 15

console.log(""); // Boş satır

// Örnek 2: Erken çıkış (early return)
function validateAge(age) {
    if (age < 0) {
        return "Yaş negatif olamaz!"; // Erken çıkış
    }
    if (age > 150) {
        return "Yaş çok yüksek!"; // Erken çıkış
    }
    return "Yaş geçerlidir."; // Normal çıkış
}

console.log(validateAge(-5)); // Konsola: Yaş negatif olamaz!
console.log(validateAge(25)); // Konsola: Yaş geçerlidir.

console.log("\n=== Return İfadesi Bitti ===\n");

// ====================================================================================================================
// 06. FONKSİYONLAR ARASI ÇAĞRI
// ====================================================================================================================

// Fonksiyonlar, diğer fonksiyonları çağırabilir veya kendilerini çağırabilir (özyineleme).

console.log("=== Fonksiyonlar Arası Çağrı ===\n");

// Örnek 1: Bir fonksiyon başka bir fonksiyonu çağırır
function isEven(num) {
    return num % 2 === 0;
}

function printEvenNumbers(count) {
    for (let i = 1; i <= count; i++) {
        if (isEven(i)) {
            // isEven fonksiyonunu çağırır
            console.log(i + " çift sayıdır");
        }
    }
}

printEvenNumbers(5); // 1-5 arasındaki çift sayıları yazdırır

console.log(""); // Boş satır

// Örnek 2: Özyineleme (recursion) - Fonksiyon kendisini çağırır
function countDown(n) {
    if (n <= 0) {
        console.log("Bitti!");
        return; // Fonksiyonu sonlandır
    }
    console.log(n);
    countDown(n - 1); // Kendini çağırır (özyineleme)
}

console.log("Geri sayım (5'ten başlayarak):");
countDown(5); // 5, 4, 3, 2, 1, Bitti!

console.log("\n=== Fonksiyonlar Bitti ===\n");
