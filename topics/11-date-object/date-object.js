// filepath: topics/11-date-object/date-object.js

console.log("=== Date Objesi ve Tarih İşlemleri ===\n");

// ====================================================================================================================
// 01. DATE OLUŞTURMA
// ====================================================================================================================

console.log("=== Date Oluşturma ===\n");

// Şu anki tarih ve saat
let currentDate = new Date();
console.log("Şu anki tarih: ", currentDate);

// Belirli bir tarih
let specificDate = new Date("2024-01-15");
console.log("Belirli tarih: ", specificDate);

// Yıl, ay, gün ile
let dateWithParams = new Date(2024, 0, 15); // 2024 yılı, Ocak (0), 15. gün
console.log("Parametrelerle tarih: ", dateWithParams);

console.log("\n=== Date Oluşturma Bitti ===\n");

// ====================================================================================================================
// 02. TARİH BİLGİLERİNİ ALMA
// ====================================================================================================================

console.log("=== Tarih Bilgilerini Alma ===\n");

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // 0-11 arası döner, +1 ile 1-12'ye çevirir
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log("Yıl: " + year);
console.log("Ay: " + month);
console.log("Gün: " + day);
console.log("Saat: " + hours);
console.log("Dakika: " + minutes);
console.log("Saniye: " + seconds);

console.log("\n=== Tarih Bilgilerini Alma Bitti ===\n");

// ====================================================================================================================
// 03. TARİH FORMATLAMA
// ====================================================================================================================

console.log("=== Tarih Formatlama ===\n");

let formattedDate = day + "/" + month + "/" + year;
let formattedTime = hours + ":" + minutes + ":" + seconds;

console.log("Tarih (gün/ay/yıl): " + formattedDate);
console.log("Saat (saat:dakika:saniye): " + formattedTime);

// JavaScript'in yerleşik format metodları
console.log("toLocaleDateString(): " + currentDate.toLocaleDateString("tr-TR"));
console.log("toLocaleTimeString(): " + currentDate.toLocaleTimeString("tr-TR"));

console.log("\n=== Tarih Formatlama Bitti ===\n");

// ====================================================================================================================
// 04. TARİH KARŞILAŞTIRMASI VE HESAPLAMASI
// ====================================================================================================================

console.log("=== Tarih Karşılaştırması ===\n");

let date1 = new Date("2024-01-01");
let date2 = new Date("2024-12-31");

// Tarihler arasındaki farkı hesapla (milisaniye cinsinden)
let difference = date2 - date1;
let days = difference / (1000 * 60 * 60 * 24); // Günlere çevir

console.log("Date1: " + date1.toLocaleDateString("tr-TR"));
console.log("Date2: " + date2.toLocaleDateString("tr-TR"));
console.log("Aralarındaki gün sayısı: " + days); // 364

console.log("\n=== Tarih Karşılaştırması Bitti ===\n");

// ====================================================================================================================
// 05. PRATİK ÖRNEK - YAŞINI HESAPLAMA
// ====================================================================================================================

console.log("=== Pratik Örnek - Yaş Hesaplama ===\n");

let birthDate = new Date("1990-05-15");
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

// Doğum günü geçmemiş ise yaşı 1 azalt
let monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

console.log("Doğum tarihi: " + birthDate.toLocaleDateString("tr-TR"));
console.log("Yaş: " + age);

console.log("\n=== Tarih ve Saat İşlemleri Konusu Tamamlandı ===\n");
