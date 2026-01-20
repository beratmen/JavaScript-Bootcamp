// filepath: topics/04-control-flow/control-flow.js

// ====================================================================================================================
// 01. if İFADESİ
// ====================================================================================================================

// if İFADESİ: Belirli bir koşul true ise içindeki kod bloğu çalışır.
// Koşul false ise if bloğu atlanır.

console.log("=== if İfadesi Örnekleri ===\n");

// Örnek 1: Basit if ifadesi
let age = 18;

if (age >= 18) {
    // Koşul true ise bu blok çalışır
    console.log("Yaşı 18 veya daha büyük, reşit olarak kabul edilir.");
}

console.log(""); // Boş satır

// Örnek 2: If bloğu çalışmadığında ne olur?
let score = 40;

if (score >= 50) {
    // Bu koşul false olduğu için bu blok çalışmaz
    console.log("Sınavı geçtiniz!");
}

// Kodun geri kalanı yine de çalışır
console.log("Sınav sonucunuz: " + score + " puan");

console.log("\n=== if İfadesi Bitti ===\n");

// ====================================================================================================================
// 02. if...else İFADESİ
// ====================================================================================================================

// if...else İFADESİ: Koşul true ise if bloğu, false ise else bloğu çalışır.

console.log("=== if...else İfadesi Örnekleri ===\n");

// Örnek 1: Basit if...else yapısı
let temperature = 15;

if (temperature > 20) {
    // Koşul true ise
    console.log("Hava sıcak!");
} else {
    // Koşul false ise
    console.log("Hava soğuk!");
}

console.log(""); // Boş satır

// Örnek 2: Giriş kontrolü
let password = "12345";
let correctPassword = "password123";

if (password === correctPassword) {
    console.log("Şifre doğru, giriş yapıldı.");
} else {
    console.log("Şifre yanlış, lütfen tekrar deneyin.");
}

console.log("\n=== if...else İfadesi Bitti ===\n");

// ====================================================================================================================
// 03. if...else if...else İFADESİ
// ====================================================================================================================

// if...else if...else İFADESİ: Birden fazla koşulu kontrol etmek için kullanılır.
// İlk doğru koşul bulunduğunda o blok çalışır ve diğerleri atlanır.

console.log("=== if...else if...else İfadesi Örnekleri ===\n");

// Örnek 1: Notu belirle
let puan = 75;
let not;

if (puan >= 90) {
    not = "A";
    console.log("Puan: " + puan + ", Not: " + not);
} else if (puan >= 80) {
    not = "B";
    console.log("Puan: " + puan + ", Not: " + not);
} else if (puan >= 70) {
    not = "C";
    console.log("Puan: " + puan + ", Not: " + not);
} else if (puan >= 60) {
    not = "D";
    console.log("Puan: " + puan + ", Not: " + not);
} else {
    not = "F";
    console.log("Puan: " + puan + ", Not: " + not);
}

console.log(""); // Boş satır

// Örnek 2: Yaş kategorisine göre aktivite öner
let userAge = 45;

if (userAge < 13) {
    console.log("Çizgi film izlemeniz önerilir.");
} else if (userAge < 18) {
    console.log("Video oyunu oynamanız önerilir.");
} else if (userAge < 65) {
    console.log("Film izlemeniz veya spor yapmanız önerilir.");
} else {
    console.log("Kitap okuma veya bahçe işleri yapmanız önerilir.");
}

console.log("\n=== if...else if...else İfadesi Bitti ===\n");

// ====================================================================================================================
// 04. switch İFADESİ
// ====================================================================================================================

// switch İFADESİ: Bir değişkenin farklı değerlerine göre farklı işlemler yapmak için kullanılır.
// İf-else if zincirinin daha temiz ve okunaklı bir alternatifidir.

console.log("=== switch İfadesi Örnekleri ===\n");

// Örnek 1: Gün adını belirle
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Pazartesi";
        break; // break; ile sonraki case'leri atlamayı sağlıyoruz
    case 2:
        dayName = "Salı";
        break;
    case 3:
        dayName = "Çarşamba";
        break;
    case 4:
        dayName = "Perşembe";
        break;
    case 5:
        dayName = "Cuma";
        break;
    case 6:
        dayName = "Cumartesi";
        break;
    case 7:
        dayName = "Pazar";
        break;
    default:
        // Hiçbir case eşleşmezse çalışır
        dayName = "Geçersiz gün";
}

console.log("Gün numarası: " + dayNumber + ", Gün adı: " + dayName);

console.log(""); // Boş satır

// Örnek 2: Mevsim adını belirle
let month = 7; // Temmuz
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Kış";
        break;
    case 3:
    case 4:
    case 5:
        season = "İlkbahar";
        break;
    case 6:
    case 7:
    case 8:
        season = "Yaz";
        break;
    case 9:
    case 10:
    case 11:
        season = "Sonbahar";
        break;
    default:
        season = "Geçersiz ay";
}

console.log("Ay: " + month + ", Mevsim: " + season);

console.log(""); // Boş satır

// Örnek 3: Ürün işlevi belirle
let productType = "elektronik";

switch (productType) {
    case "elektronik":
        console.log("Bu ürün için 2 yıl garanti verilir.");
        console.log("Fiyat: 5000 TL");
        break;
    case "giyim":
        console.log("Ürünü 30 gün içinde iade edebilirsiniz.");
        console.log("Fiyat: 200 TL");
        break;
    case "gıda":
        console.log("Ürün, satın alma tarihinden itibaren 1 yıl geçerlidir.");
        console.log("Fiyat: 50 TL");
        break;
    default:
        console.log("Bu ürün türü tanınmamaktadır.");
}

console.log("\n=== switch İfadesi Bitti ===\n");

// ====================================================================================================================
// 05. switch vs if...else if - Karşılaştırma
// ====================================================================================================================

console.log("=== switch vs if...else if Karşılaştırması ===\n");

// İF-ELSE IF VERSİYONU:
let fruit1 = "elma";

if (fruit1 === "elma") {
    console.log("Elma: Kırmızı, tatlı ve sağlıklı!");
} else if (fruit1 === "muz") {
    console.log("Muz: Sarı, besleyici ve dolgusu iyi!");
} else if (fruit1 === "portakal") {
    console.log("Portakal: Turuncu, C vitamini açısından zengin!");
} else {
    console.log("Bilinmeyen meyve");
}

console.log(""); // Boş satır

// SWITCH VERSİYONU:
let fruit2 = "elma";

switch (fruit2) {
    case "elma":
        console.log("Elma: Kırmızı, tatlı ve sağlıklı!");
        break;
    case "muz":
        console.log("Muz: Sarı, besleyici ve dolgusu iyi!");
        break;
    case "portakal":
        console.log("Portakal: Turuncu, C vitamini açısından zengin!");
        break;
    default:
        console.log("Bilinmeyen meyve");
}

console.log("\n=== Karşılaştırma Bitti ===\n");

// ====================================================================================================================
// 06. İÇ İÇE (NESTED) KOŞULLar
// ====================================================================================================================

console.log("=== İç İçe (Nested) Koşullar ===\n");

// Bir koşul bloğunun içine başka bir koşul yazılabilir.

let userAge2 = 25;
let hasLicense = true;

if (userAge2 >= 18) {
    console.log("Yaşı 18 veya daha büyüktür.");
    
    // İç içe koşul
    if (hasLicense) {
        console.log("Araba kullanma izni vardır.");
    } else {
        console.log("Araba kullanma izni yoktur.");
    }
} else {
    console.log("Yaşı 18'den küçüktür, araba kullanamaz.");
}

console.log("\n=== Kontrol Akışı Konusu Tamamlandı ===\n");
