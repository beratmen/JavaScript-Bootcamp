// filepath: topics/08-this-call-apply-bind/this-context.js

// ====================================================================================================================
// 01. this ANAHTAR KELİMESİ
// ====================================================================================================================

// this ANAHTAR KELİMESİ: Çalıştığı bağlama (context) göre farklı değerleri ifade eder.
// this'in değeri, fonksiyonun nasıl çağrıldığına bağlıdır.

console.log("=== this Anahtar Kelimesi ===\n");

// Örnek 1: Global bağlamda this
console.log("1. Global bağlamda this:");
console.log(this); // Global obje (browser'da window, Node.js'te global)

console.log(""); // Boş satır

// Örnek 2: Obje metodu içinde this
console.log("2. Obje metodu içinde this:");
let person = {
    name: "Ahmet",
    age: 30,
    // Obje metodu
    greet: function() {
        // Bu bağlamda this, person nesnesini ifade eder
        return "Merhaba, ben " + this.name + " ve " + this.age + " yaşındayım.";
    }
};

console.log(person.greet()); // Merhaba, ben Ahmet ve 30 yaşındayım.

console.log(""); // Boş satır

// Örnek 3: Fonksiyon içinde this
console.log("3. Fonksiyon içinde this:");
function displayInfo() {
    // Fonksiyon içinde this, çağrılma şekline bağlı olarak global obje veya undefined olabilir
    console.log(this);
}

displayInfo(); // Bu bağlamda this, global objeyi gösterir

console.log(""); // Boş satır

// Örnek 4: Arrow function'da this
console.log("4. Arrow function'da this:");
let user = {
    name: "Fatih",
    // Normal fonksiyon
    normalFunc: function() {
        console.log("Normal fonksiyonda this.name: " + this.name);
    },
    // Arrow function
    arrowFunc: () => {
        // Arrow function'da this, tanımlandığı yerin this'ini kullanır (lexical binding)
        console.log("Arrow function'da this.name: " + this.name);
    }
};

user.normalFunc(); // Normal fonksiyonda this.name: Fatih
user.arrowFunc(); // Arrow function'da this.name: undefined (çünkü global objenin name özelliği yok)

console.log("\n=== this Anahtar Kelimesi Bitti ===\n");

// ====================================================================================================================
// 02. call METODU
// ====================================================================================================================

// call METODU: Bir fonksiyonu belirli bir bağlamda (this) çağırmak için kullanılır.
// Argümanlar tek tek geçilir.
// Yapı: function.call(thisContext, arg1, arg2, ...)

console.log("=== call Metodu ===\n");

// Örnek 1: call ile bağlam değiştirme
function introduce(city, country) {
    // Bu fonksiyon this.name kullanır
    return "Benim adım " + this.name + " ve " + city + ", " + country + "'de yaşıyorum.";
}

let personA = { name: "Alice" };
let personB = { name: "Bob" };

// call kullanarak personA'nın bağlamında fonksiyonu çalıştır
let introA = introduce.call(personA, "New York", "USA");
console.log(introA); // Benim adım Alice ve New York, USA'de yaşıyorum.

// call kullanarak personB'nin bağlamında fonksiyonu çalıştır
let introB = introduce.call(personB, "London", "UK");
console.log(introB); // Benim adım Bob ve London, UK'de yaşıyorum.

console.log(""); // Boş satır

// Örnek 2: Metot borçlaşma (method borrowing)
let car = {
    brand: "Toyota",
    model: "Corolla",
    describe: function() {
        return this.brand + " " + this.model;
    }
};

let bike = {
    brand: "Honda",
    model: "CB500"
};

// car'ın describe metodunu bike'ın bağlamında çalıştır
let bikeDescription = car.describe.call(bike);
console.log("Bisiklet: " + bikeDescription); // Bisiklet: Honda CB500

console.log("\n=== call Metodu Bitti ===\n");

// ====================================================================================================================
// 03. apply METODU
// ====================================================================================================================

// apply METODU: call metoduna benzer, ancak argümanlar bir dizi olarak geçilir.
// Yapı: function.apply(thisContext, [arg1, arg2, ...])

console.log("=== apply Metodu ===\n");

// Örnek 1: apply ile bağlam değiştirme
function introduce2(city, country) {
    return "Adım " + this.name + ", " + city + ", " + country + "'te yaşıyorum.";
}

let personC = { name: "Charlie" };
let personD = { name: "Diana" };

// apply kullanarak - argümanlar dizi olarak geçilir
let introC = introduce2.apply(personC, ["Berlin", "Germany"]);
console.log(introC); // Adım Charlie, Berlin, Germany'te yaşıyorum.

let introD = introduce2.apply(personD, ["Paris", "France"]);
console.log(introD); // Adım Diana, Paris, France'te yaşıyorum.

console.log(""); // Boş satır

// Örnek 2: apply ile matematiksel işlemler
let numbers = [5, 10, 3, 8, 2];

// Math.max ve Math.min apply ile kullanımı
let maxNumber = Math.max.apply(null, numbers); // 10
let minNumber = Math.min.apply(null, numbers); // 2

console.log("Sayılar: " + numbers);
console.log("En büyük: " + maxNumber);
console.log("En küçük: " + minNumber);

console.log("\n=== apply Metodu Bitti ===\n");

// ====================================================================================================================
// 04. bind METODU
// ====================================================================================================================

// bind METODU: call ve apply gibi fonksiyonu çalıştırmaz, bunun yerine
// this bağlamı sabitlenenmiş YENİ BİR FONKSIYON döner.
// Yapı: const newFunction = function.bind(thisContext, arg1, arg2, ...)

console.log("=== bind Metodu ===\n");

// Örnek 1: bind ile bağlamı sabitleme
function introduce3(city, country) {
    return "Merhaba, " + this.name + " from " + city + ", " + country;
}

let personE = { name: "Emma" };

// bind kullanarak - yeni bir fonksiyon oluşturur
const boundFunction = introduce3.bind(personE, "Dublin", "Ireland");
let introE = boundFunction(); // Parantez gereklidir çünkü bind bir fonksiyon döner
console.log(introE); // Merhaba, Emma from Dublin, Ireland

console.log(""); // Boş satır

// Örnek 2: bind ile kısmi uygulama (partial application)
function multiply(a, b) {
    return a * b;
}

// bind kullanarak 5 ile çarpmak için önceden ayarlı bir fonksiyon oluştur
const multiplyBy5 = multiply.bind(null, 5); // null çünkü this'e ihtiyacımız yok
console.log("5 × 3 = " + multiplyBy5(3)); // 15
console.log("5 × 8 = " + multiplyBy5(8)); // 40

console.log(""); // Boş satır

// Örnek 3: bind event listener'lar ile
console.log("3. Bind ile event listener:");
let button = {
    name: "MyButton",
    handleClick: function() {
        console.log("Tıklanan buton: " + this.name);
    }
};

// bind olmadan bu kullanılsa this undefined olurdu
// setTimeout(button.handleClick, 100); // Sorun!
// setTimeout(button.handleClick.bind(button), 100); // Doğru!

console.log("\n=== bind Metodu Bitti ===\n");

// ====================================================================================================================
// 05. call, apply, bind KARŞILAŞTIRMASI
// ====================================================================================================================

console.log("=== call, apply, bind Karşılaştırması ===\n");

function describe(color, brand) {
    return "Bu " + color + " renkli " + this.type + " marka " + brand + " ürünüdür.";
}

let product = { type: "Telefon" };

// call - argümanlar tek tek
let result1 = describe.call(product, "siyah", "Samsung");
console.log("call: " + result1);

// apply - argümanlar dizi
let result2 = describe.apply(product, ["siyah", "Samsung"]);
console.log("apply: " + result2);

// bind - yeni fonksiyon döner
let boundFunc = describe.bind(product, "siyah", "Samsung");
let result3 = boundFunc();
console.log("bind: " + result3);

console.log("\n=== Karşılaştırma Özeti ===");
console.log("call: Fonksiyonu hemen çalıştırır, argümanlar tek tek");
console.log("apply: Fonksiyonu hemen çalıştırır, argümanlar dizi");
console.log("bind: Yeni bir fonksiyon döner, this bağlamı sabittir");

console.log("\n=== this, call, apply, bind Konusu Tamamlandı ===\n");
