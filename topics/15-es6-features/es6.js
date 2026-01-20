// filepath: topics/15-es6-features/es6.js

console.log("=== Modern JavaScript (ES6+) Özellikleri ===\n");

// ====================================================================================================================
// 01. DESTRUCTURING - NESNELER
// ====================================================================================================================

console.log("=== Destructuring (Nesneler) ===\n");

let person = {
    name: "Ahmet",
    age: 30,
    city: "İstanbul"
};

// Destructuring: Nesne özelliklerini değişkenlere ayır
const { name, age, city } = person;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);

console.log("\n=== Destructuring (Nesneler) Bitti ===\n");

// ====================================================================================================================
// 02. DESTRUCTURING - DİZİLER
// ====================================================================================================================

console.log("=== Destructuring (Diziler) ===\n");

let colors = ["Kırmızı", "Yeşil", "Mavi"];

// Destructuring: Dizi elemanlarını değişkenlere ayır
const [color1, color2, color3] = colors;

console.log("Color 1: " + color1);
console.log("Color 2: " + color2);
console.log("Color 3: " + color3);

console.log("\n=== Destructuring (Diziler) Bitti ===\n");

// ====================================================================================================================
// 03. SPREAD OPERATOR (...)
// ====================================================================================================================

console.log("=== Spread Operator (...) ===\n");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Spread: Dizi elemanlarını yayılı hale getir
let combined = [...arr1, ...arr2];
console.log("Birleştirilmiş dizi: ", combined); // [1, 2, 3, 4, 5, 6]

// Objelerde spread
let obj1 = { name: "Ahmet", age: 30 };
let obj2 = { city: "İstanbul", country: "Türkiye" };

let mergedObj = { ...obj1, ...obj2 };
console.log("Birleştirilmiş obje: ", mergedObj);

console.log("\n=== Spread Operator Bitti ===\n");

// ====================================================================================================================
// 04. TEMPLATE LITERALS (String Interpolation)
// ====================================================================================================================

console.log("=== Template Literals ===\n");

let firstName = "Ahmet";
let lastName = "Yılmaz";
let userAge = 30;

// Template literals: Backtick (`) ile ${} içinde değişken
let message = `Merhaba, benim adım ${firstName} ${lastName} ve ben ${userAge} yaşındayım.`;
console.log(message);

console.log("\n=== Template Literals Bitti ===\n");

// ====================================================================================================================
// 05. ARROW FUNCTIONS
// ====================================================================================================================

console.log("=== Arrow Functions ===\n");

// Normal fonksiyon
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log("Normal: " + add(5, 3));
console.log("Arrow: " + addArrow(5, 3));

console.log("\n=== Arrow Functions Bitti ===\n");

// ====================================================================================================================
// 06. CLASSES
// ====================================================================================================================

console.log("=== Classes ===\n");

// Class tanımı
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    describe() {
        return this.brand + " " + this.model;
    }
}

// Class örneği oluşturma
let myCar = new Car("Toyota", "Corolla");
console.log("Arabam: " + myCar.describe());

console.log("\n=== Classes Bitti ===\n");

// ====================================================================================================================
// 07. DEFAULT PARAMETERS
// ====================================================================================================================

console.log("=== Default Parameters ===\n");

// Varsayılan parametre değerleri
const greet = (name = "Ziyaretçi") => {
    return "Hoşgeldiniz, " + name + "!";
};

console.log(greet()); // Varsayılan kullanıldı
console.log(greet("Fatih")); // Verilen değer kullanıldı

console.log("\n=== Default Parameters Bitti ===\n");

console.log("=== Modern JavaScript Konusu Tamamlandı ===\n");
