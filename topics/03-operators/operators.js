// filepath: topics/03-operators/operators.js

// ====================================================================================================================
// 01. ARİTMETİK OPERATÖRLER (Arithmetic Operators)
// ====================================================================================================================

// ARİTMETİK OPERATÖRLER: Matematiksel işlemler yapmak için kullanılır.

// TOPLAMA (+): İki sayıyı toplar
let sum = 10 + 5;
console.log("Toplama İşlemi: 10 + 5 = " + sum); // Konsola: Toplama İşlemi: 10 + 5 = 15
// NOT: + operatörü stringlerle kullanıldığında birleştirme işlemi yapar: "Hello" + " World" = "Hello World"

// ÇIKARMA (-): İlk sayıdan ikinci sayıyı çıkarır
let difference = 10 - 5;
console.log("Çıkarma İşlemi: 10 - 5 = " + difference); // Konsola: Çıkarma İşlemi: 10 - 5 = 5

// ÇARPMA (*): İki sayıyı çarpar
let product = 10 * 5;
console.log("Çarpma İşlemi: 10 * 5 = " + product); // Konsola: Çarpma İşlemi: 10 * 5 = 50

// BÖLME (/): İlk sayıyı ikinci sayıya böler
let quotient = 10 / 5;
console.log("Bölme İşlemi: 10 / 5 = " + quotient); // Konsola: Bölme İşlemi: 10 / 5 = 2

// MODÜL (Kalan) (%): Bölme işleminin kalanını verir
let remainder = 10 % 3;
console.log("Modül İşlemi: 10 % 3 = " + remainder); // Konsola: Modül İşlemi: 10 % 3 = 1
// Modül işlemi genellikle bir sayının çift/tek olup olmadığını veya belirli bir aralıkta olup olmadığını kontrol etmek için kullanılır.

// ÜS ALMA (**): Bir sayının üssünü hesaplar (ES7 ile eklendi)
let powerResult = 2 ** 3; // 2 üzeri 3 = 8
console.log("Üs Alma İşlemi: 2 ** 3 = " + powerResult); // Konsola: Üs Alma İşlemi: 2 ** 3 = 8

// ARTTIRMA (++): Değişkenin değerini 1 artırır
let increment = 5;
increment++; // increment değeri 6 oldu
console.log("Artırma İşlemi: increment++ = " + increment); // Konsola: Artırma İşlemi: increment++ = 6

// AZALTMA (--): Değişkenin değerini 1 azaltır
let decrement = 5;
decrement--; // decrement değeri 4 oldu
console.log("Azaltma İşlemi: decrement-- = " + decrement); // Konsola: Azaltma İşlemi: decrement-- = 4

console.log("\n=== Aritmetik Operatörler Bitti ===\n");

// ====================================================================================================================
// 02. KARŞILAŞTIRMA OPERATÖRLERI (Comparison Operators)
// ====================================================================================================================

// KARŞILAŞTIRMA OPERATÖRLERI: İki değeri karşılaştırarak true veya false sonucu verir.

// == OPERATÖRÜ (Eşit - Değer Eşitliği):
// Değerleri karşılaştırır, ancak TİP dönüşümü (type coercion) yapabilir.
// 5 == '5' => true (çünkü değerleri eşit, tür farklı olsa da JavaScript birini diğerine çevirmeye çalışır)
let isEqual = (5 == '5');
console.log("== Operatörü: (5 == '5') = " + isEqual); // Konsola: == Operatörü: (5 == '5') = true

// === OPERATÖRÜ (Kesinlikle Eşit - Değer ve Tür Eşitliği):
// Hem değeri hem de türü kontrol eder. Tür dönüşümü yapmaz.
// 5 === '5' => false (çünkü biri number, diğeri string)
let isStrictEqual = (5 === '5');
console.log("=== Operatörü: (5 === '5') = " + isStrictEqual); // Konsola: === Operatörü: (5 === '5') = false

// TAVSIYE: Güvenlik ve tutarlılık için === kullanımı önerilir!

// != OPERATÖRÜ (Eşit Değil - Değer Eşitsizliği):
// Değerlerin farklı olup olmadığını kontrol eder. Tür dönüşümü yapabilir.
let isNotEqual = (5 != 3);
console.log("!= Operatörü: (5 != 3) = " + isNotEqual); // Konsola: != Operatörü: (5 != 3) = true

// !== OPERATÖRÜ (Kesinlikle Eşit Değil):
// Hem değer hem de tür açısından eşit olup olmadığını kontrol eder. Tür dönüşümü yapmaz.
let isNotStrictEqual = (5 !== '5');
console.log("!== Operatörü: (5 !== '5') = " + isNotStrictEqual); // Konsola: !== Operatörü: (5 !== '5') = true

console.log(""); // Boş satır

// > OPERATÖRÜ (Büyüktür):
// Solundaki değer, sağındaki değerden büyükse true, aksi takdirde false döner.
let isGreater = (10 > 5);
console.log("> Operatörü: (10 > 5) = " + isGreater); // Konsola: > Operatörü: (10 > 5) = true

// < OPERATÖRÜ (Küçüktür):
// Solundaki değer, sağındaki değerden küçükse true, aksi takdirde false döner.
let isLess = (5 < 10);
console.log("< Operatörü: (5 < 10) = " + isLess); // Konsola: < Operatörü: (5 < 10) = true

// >= OPERATÖRÜ (Büyük veya Eşit):
// Solundaki değer, sağındaki değerden büyük veya eşitse true döner.
let isGreaterOrEqual = (10 >= 10);
console.log(">= Operatörü: (10 >= 10) = " + isGreaterOrEqual); // Konsola: >= Operatörü: (10 >= 10) = true

// <= OPERATÖRÜ (Küçük veya Eşit):
// Solundaki değer, sağındaki değerden küçük veya eşitse true döner.
let isLessOrEqual = (5 <= 3);
console.log("<= Operatörü: (5 <= 3) = " + isLessOrEqual); // Konsola: <= Operatörü: (5 <= 3) = false

console.log("\n=== Karşılaştırma Operatörleri Bitti ===\n");

// ====================================================================================================================
// 03. MANTIKSAL OPERATÖRLER (Logical Operators)
// ====================================================================================================================

// MANTIKSAL OPERATÖRLER: Boolean değerlerle mantıksal işlemler yapmak için kullanılır.
// AND, OR ve NOT işlemleri için kullanılırlar.

// && OPERATÖRÜ (VE - AND):
// Her iki koşul da true ise true döner. Biri false ise false döner.
// Şema: true && true = true, true && false = false, false && true = false, false && false = false
let andOperation = (true && false);
console.log("&& Operatörü (VE): (true && false) = " + andOperation); // Konsola: && Operatörü (VE): (true && false) = false

let andExample2 = (true && true);
console.log("&& Operatörü (VE): (true && true) = " + andExample2); // Konsola: && Operatörü (VE): (true && true) = true

// Pratik Örnek: Kullanıcı giriş kontrolü
let isLoggedIn = true;
let hasPermission = true;
let canAccessDashboard = (isLoggedIn && hasPermission);
console.log("Dashboard erişimi (giriş yapılı && izin var): " + canAccessDashboard); // Konsola: Dashboard erişimi: true

console.log(""); // Boş satır

// || OPERATÖRÜ (VEYA - OR):
// En az birisi true ise true döner. Her ikisi de false ise false döner.
// Şema: true || true = true, true || false = true, false || true = true, false || false = false
let orOperation = (true || false);
console.log("|| Operatörü (VEYA): (true || false) = " + orOperation); // Konsola: || Operatörü (VEYA): (true || false) = true

let orExample2 = (false || false);
console.log("|| Operatörü (VEYA): (false || false) = " + orExample2); // Konsola: || Operatörü (VEYA): (false || false) = false

// Pratik Örnek: Kullanıcı hoşlanmış mı veya yorum yapmış mı?
let hasLiked = false;
let hasCommented = true;
let hasEngaged = (hasLiked || hasCommented);
console.log("Kullanıcı katılımı (beğendi || yorum yaptı): " + hasEngaged); // Konsola: Kullanıcı katılımı: true

console.log(""); // Boş satır

// ! OPERATÖRÜ (DEĞİL - NOT):
// Boolean değerini tersine çevirir. True false olur, false true olur.
let notOperation = !true;
console.log("! Operatörü (DEĞİL): !true = " + notOperation); // Konsola: ! Operatörü (DEĞİL): !true = false

let notExample2 = !false;
console.log("! Operatörü (DEĞİL): !false = " + notExample2); // Konsola: ! Operatörü (DEĞİL): !false = true

// Pratik Örnek: Çıkış yapmış mı?
let isLoggedInUser = true;
let isLoggedOut = !isLoggedInUser;
console.log("Çıkış yapılmış mı: " + isLoggedOut); // Konsola: Çıkış yapılmış mı: false

console.log("\n=== Mantıksal Operatörler Bitti ===\n");

// ====================================================================================================================
// 04. OPERATÖRLERIN KOMBİNE KULLANIMI (Combining Operators)
// ====================================================================================================================

// Operatörler sıkça kombine (birlikte) kullanılır. İşlem önceliğine dikkat etmek önemlidir.

// Örnek 1: Aritmetik ve Karşılaştırma Operatörleri
let a = 10;
let b = 5;
let c = 3;

// (10 + 5) * 3 = 45
let complexCalculation1 = (a + b) * c;
console.log("(10 + 5) * 3 = " + complexCalculation1); // Konsola: (10 + 5) * 3 = 45

// 10 + (5 * 3) = 25
let complexCalculation2 = a + (b * c);
console.log("10 + (5 * 3) = " + complexCalculation2); // Konsola: 10 + (5 * 3) = 25

console.log(""); // Boş satır

// Örnek 2: Mantıksal ve Karşılaştırma Operatörleri
let age = 25;
let hasLicense = true;
let canDrive = (age >= 18) && hasLicense;
console.log("25 yaşında, lisansı var, araba kullanabilir mi?: " + canDrive); // Konsola: true

let hasPassport = false;
let canTravelAbroad = hasPassport || (age >= 18 && hasLicense);
console.log("Yurt dışına seyahat edebilir mi?: " + canTravelAbroad); // Konsola: true (çünkü yaşı 18+ ve lisansı var)

console.log("\n=== Operatörler Konusu Tamamlandı ===\n");
