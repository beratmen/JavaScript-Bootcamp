// filepath: topics/10-array-methods/array-methods.js

console.log("=== Array Metotları ===\n");

// ====================================================================================================================
// 01. push() ve pop() - STACK İŞLEMLERİ
// ====================================================================================================================

console.log("=== push() ve pop() ===\n");

let stack = [];
console.log("Boş stack: ", stack);

// push(): Dizinin sonuna eleman ekler
stack.push(1);
stack.push(2);
stack.push(3);
console.log("push(1), push(2), push(3) sonrası: ", stack); // [1, 2, 3]

// pop(): Dizinin sonundan eleman çıkarır ve döner
let lastElement = stack.pop();
console.log("pop() çıkarılan eleman: " + lastElement); // 3
console.log("pop() sonrası stack: ", stack); // [1, 2]

console.log("\n=== push() ve pop() Bitti ===\n");

// ====================================================================================================================
// 02. shift() ve unshift() - KUYRUK İŞLEMLERİ
// ====================================================================================================================

console.log("=== shift() ve unshift() ===\n");

let queue = [];
console.log("Boş queue: ", queue);

// unshift(): Dizinin başına eleman ekler
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
console.log("unshift(1), unshift(2), unshift(3) sonrası: ", queue); // [3, 2, 1]

// shift(): Dizinin başından eleman çıkarır ve döner
let firstElement = queue.shift();
console.log("shift() çıkarılan eleman: " + firstElement); // 3
console.log("shift() sonrası queue: ", queue); // [2, 1]

console.log("\n=== shift() ve unshift() Bitti ===\n");

// ====================================================================================================================
// 03. concat() - DİZİLERİ BİRLEŞTİRME
// ====================================================================================================================

console.log("=== concat() ===\n");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// concat(): İki veya daha fazla diziyi birleştirir (orijinal diziyi değiştirmez)
let combinedArray = array1.concat(array2);
console.log("Array 1: ", array1);
console.log("Array 2: ", array2);
console.log("concat() sonrası: ", combinedArray); // [1, 2, 3, 4, 5, 6]

// Orijinal diziler değişmedi
console.log("Array 1 (değişmedi): ", array1);

console.log("\n=== concat() Bitti ===\n");

// ====================================================================================================================
// 04. filter() - KOŞULA UYGUN ELEMANLARI SEÇME
// ====================================================================================================================

console.log("=== filter() ===\n");

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter(): Koşulu sağlayan elemanları içeren yeni bir dizi döner
let evenNumbers = numbersArray.filter(function(number) {
    return number % 2 === 0; // Çift sayıları döner
});

console.log("Orijinal dizi: ", numbersArray);
console.log("filter(çift sayılar): ", evenNumbers); // [2, 4, 6, 8, 10]

// Arrow function ile daha kısa
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
console.log("filter(tek sayılar): ", oddNumbers); // [1, 3, 5, 7, 9]

console.log("\n=== filter() Bitti ===\n");

// ====================================================================================================================
// 05. map() - HER ELEMANA İŞLEM UYGULAMA
// ====================================================================================================================

console.log("=== map() ===\n");

let numsArray = [1, 2, 3, 4, 5];

// map(): Her eleman üzerinde belirli bir işlemi gerçekleştirir ve yeni bir dizi döner
let squaredNumbers = numsArray.map(function(number) {
    return number * number; // Her sayının karesini alır
});

console.log("Orijinal dizi: ", numsArray);
console.log("map(kare): ", squaredNumbers); // [1, 4, 9, 16, 25]

// Pratik örnek: String dizisine işlem
let names = ["Ahmet", "Fatih", "Elif"];
let uppercaseNames = names.map(name => name.toUpperCase());
console.log("İsimler: ", names);
console.log("map(toUpperCase): ", uppercaseNames); // ["AHMET", "FATİH", "ELİF"]

console.log("\n=== map() Bitti ===\n");

// ====================================================================================================================
// 06. reduce() - DİZİYİ TEK DEĞERE İNDİRGEME
// ====================================================================================================================

console.log("=== reduce() ===\n");

let valuesArray = [1, 2, 3, 4, 5];

// reduce(): Dizinin tüm elemanlarını tek bir değere indirger
let sumOfValues = valuesArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // Tüm sayıları toplar
}, 0); // Başlangıç değeri: 0

console.log("Dizi: ", valuesArray);
console.log("reduce(toplama): " + sumOfValues); // 15 (1+2+3+4+5)

// Faktöriyel hesaplama
let factorial = valuesArray.reduce((acc, num) => acc * num, 1);
console.log("reduce(çarpma): " + factorial); // 120 (1*2*3*4*5)

console.log("\n=== reduce() Bitti ===\n");

// ====================================================================================================================
// 07. DIĞER YAYGÜN METOTLAR
// ====================================================================================================================

console.log("=== Diğer Metotlar ===\n");

let fruits = ["Elma", "Muz", "Çilek", "Portakal"];

// find(): Koşulu sağlayan ilk elemanı döner
let foundFruit = fruits.find(fruit => fruit.startsWith("Ç"));
console.log("find('Ç' ile başlayan): " + foundFruit); // Çilek

// includes(): Dizi belirli bir elemanı içeriyor mu?
let hasApple = fruits.includes("Elma");
console.log("includes('Elma'): " + hasApple); // true

// indexOf(): Elemanın konumunu döner
let indexOfBanana = fruits.indexOf("Muz");
console.log("indexOf('Muz'): " + indexOfBanana); // 1

// join(): Dizi elemanlarını string'e çevirir
let fruitsString = fruits.join(", ");
console.log("join(', '): " + fruitsString); // "Elma, Muz, Çilek, Portakal"

// reverse(): Diziyi tersine çevirir (orijinal diziyi değiştirir)
let reversed = [1, 2, 3].reverse();
console.log("reverse(): ", reversed); // [3, 2, 1]

console.log("\n=== Diğer Metotlar Bitti ===\n");

// ====================================================================================================================
// 08. PRATİK ÖRNEKLER
// ====================================================================================================================

console.log("=== Pratik Örnekler ===\n");

// Örnek 1: Öğrenci notlarından başarılı olanları bulma
let students = [
    { name: "Ahmet", grade: 85 },
    { name: "Fatih", grade: 45 },
    { name: "Elif", grade: 92 },
    { name: "Mehmet", grade: 38 }
];

let passedStudents = students.filter(student => student.grade >= 60);
console.log("Başarılı öğrenciler:");
console.log(passedStudents);

console.log(""); // Boş satır

// Örnek 2: Fiyatları %10 indirdikten sonra toplam hesaplama
let prices = [100, 50, 75, 200];
let discountedPrices = prices.map(price => price * 0.9); // %10 indir
let total = discountedPrices.reduce((sum, price) => sum + price, 0);
console.log("Orijinal fiyatlar: ", prices);
console.log("Indirili fiyatlar: ", discountedPrices);
console.log("Toplam: " + total);

console.log("\n=== Array Metotları Konusu Tamamlandı ===\n");
