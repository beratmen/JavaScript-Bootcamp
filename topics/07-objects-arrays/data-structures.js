// filepath: topics/07-objects-arrays/data-structures.js

// ====================================================================================================================
// 01. NESNELER (OBJECTS)
// ====================================================================================================================

// NESNELER: Anahtar-değer (key-value) çiftlerinden oluşan veri yapılarıdır.
// Birden fazla ilişkili veriyi bir isim altında tutmak için idealdir.

console.log("=== Nesneler (Objects) ===\n");

// Örnek 1: Basit bir nesne oluşturma
let person = {
    name: "Ahmet",      // key: "name", value: "Ahmet"
    age: 30,            // key: "age", value: 30
    city: "İstanbul",   // key: "city", value: "İstanbul"
    isStudent: false    // key: "isStudent", value: false
};

console.log("Kişi nesnesi:");
console.log(person);

console.log(""); // Boş satır

// Örnek 2: Nesne özelliklerine erişim - DOT NOTATION
console.log("Dot notation ile erişim:");
console.log("İsim: " + person.name);    // Ahmet
console.log("Yaş: " + person.age);      // 30
console.log("Şehir: " + person.city);   // İstanbul

console.log(""); // Boş satır

// Örnek 3: Nesne özelliklerine erişim - BRACKET NOTATION
console.log("Bracket notation ile erişim:");
console.log("İsim: " + person["name"]);    // Ahmet
console.log("Yaş: " + person["age"]);      // 30

console.log(""); // Boş satır

// Örnek 4: Nesne özelliğini değiştirme
person.age = 31; // age özelliğini 31 olarak güncelle
console.log("Güncellenen yaş: " + person.age); // 31

console.log(""); // Boş satır

// Örnek 5: Yeni özellik ekleme
person.country = "Türkiye"; // Yeni özellik ekle
console.log("Ülke: " + person.country); // Türkiye

console.log(""); // Boş satır

// Örnek 6: Özellik silme
delete person.isStudent; // isStudent özelliğini sil
console.log("Silme sonrası nesne:");
console.log(person);

console.log("\n=== Nesneler Bitti ===\n");

// ====================================================================================================================
// 02. DIZİLER (ARRAYS)
// ====================================================================================================================

// DİZİLER: Sıralı bir veri koleksiyonudur. Her eleman bir indeks numarası (0'dan başlayan) ile erişilir.

console.log("=== Diziler (Arrays) ===\n");

// Örnek 1: Dizi oluşturma
let fruits = ["Elma", "Muz", "Çilek", "Portakal"];
console.log("Meyveler dizisi:");
console.log(fruits);

console.log(""); // Boş satır

// Örnek 2: Dizi elemanlarına erişim
console.log("Dizi elemanlarına erişim:");
console.log("İlk meyve (indeks 0): " + fruits[0]); // Elma
console.log("İkinci meyve (indeks 1): " + fruits[1]); // Muz
console.log("Son meyve: " + fruits[fruits.length - 1]); // Portakal

console.log(""); // Boş satır

// Örnek 3: Dizi elemanını değiştirme
fruits[1] = "Mango"; // İkinci elemanı "Mango" olarak güncelle
console.log("Güncellenmiş dizi:");
console.log(fruits);

console.log(""); // Boş satır

// Örnek 4: Dizi uzunluğu (length)
console.log("Dizi uzunluğu: " + fruits.length); // 4

console.log(""); // Boş satır

// Örnek 5: Diziye eleman ekleme (push - sona ekle)
fruits.push("Nar");
console.log("Push sonrası dizi:");
console.log(fruits); // ["Elma", "Mango", "Çilek", "Portakal", "Nar"]

console.log(""); // Boş satır

// Örnek 6: Diziden eleman çıkarma (pop - sonundan çıkar)
let lastFruit = fruits.pop();
console.log("Çıkarılan meyve: " + lastFruit); // Nar
console.log("Pop sonrası dizi:");
console.log(fruits); // ["Elma", "Mango", "Çilek", "Portakal"]

console.log("\n=== Diziler Bitti ===\n");

// ====================================================================================================================
// 03. KARIŞIK TÜR DİZİLER
// ====================================================================================================================

// Dizilerde farklı türde elemanlar bulunabilir: sayılar, stringler, objeler, başka diziler vb.

console.log("=== Karışık Tür Diziler ===\n");

// Örnek 1: Karışık tür dizi
let mixedArray = [
    "Merhaba",           // String (indeks 0)
    42,                  // Number (indeks 1)
    true,                // Boolean (indeks 2)
    { name: "Ali" },    // Obje (indeks 3)
    [1, 2, 3]           // Dizi (indeks 4)
];

console.log("Karışık tür dizi:");
console.log(mixedArray);

console.log(""); // Boş satır

// Örnek 2: Karışık dizi elemanlarına erişim
console.log("İlk eleman (string): " + mixedArray[0]); // Merhaba
console.log("İkinci eleman (number): " + mixedArray[1]); // 42
console.log("Dördüncü eleman (obje) ismi: " + mixedArray[3].name); // Ali
console.log("Beşinci eleman (dizi) ilk öğesi: " + mixedArray[4][0]); // 1

console.log("\n=== Karışık Tür Diziler Bitti ===\n");

// ====================================================================================================================
// 04. DİZİ VE NESNELERIN KOMBİNASYONU
// ====================================================================================================================

// Sıkça, objeler içeren diziler veya dizi özelliklerine sahip objeler kullanılır.

console.log("=== Dizi ve Nesnelerin Kombinasyonu ===\n");

// Örnek 1: Kişi nesneleri dizisi
let people = [
    { name: "Ahmet", age: 30, city: "İstanbul" },
    { name: "Fatih", age: 25, city: "Ankara" },
    { name: "Elif", age: 28, city: "İzmir" }
];

console.log("Kişiler dizisi:");
console.log(people);

console.log(""); // Boş satır

// Örnek 2: Dizi içindeki nesnelere erişim
console.log("İlk kişinin ismi: " + people[0].name); // Ahmet
console.log("İkinci kişinin yaşı: " + people[1].age); // 25
console.log("Üçüncü kişinin şehri: " + people[2].city); // İzmir

console.log(""); // Boş satır

// Örnek 3: Tüm kişileri döngüyle yazdırma
console.log("Tüm kişiler:");
for (let i = 0; i < people.length; i++) {
    console.log((i + 1) + ". " + people[i].name + ", " + people[i].age + " yaşında, " + people[i].city + "'de yaşıyor");
}

console.log(""); // Boş satır

// Örnek 4: Obje içinde dizi
let company = {
    name: "TechCorp",
    employees: ["Ahmet", "Fatih", "Elif", "Mehmet"],
    location: "İstanbul"
};

console.log("Şirket adı: " + company.name); // TechCorp
console.log("Çalışan sayısı: " + company.employees.length); // 4
console.log("İlk çalışan: " + company.employees[0]); // Ahmet

console.log("\n=== Kombinasyon Bitti ===\n");

// ====================================================================================================================
// 05. NESNELER VE DİZİLER KARŞILAŞTIRMASI
// ====================================================================================================================

console.log("=== Nesneler ve Diziler Karşılaştırması ===\n");

console.log("Nesne:");
console.log("- Anahtar-değer çiftlerinden oluşur");
console.log("- İngilizce ve dinamik özellikler");
console.log("- Belirli verileri kategorize ederken kullanılır");
console.log("Örnek: { name: 'Ahmet', age: 30 }");

console.log(""); // Boş satır

console.log("Dizi:");
console.log("- Sıralı bir koleksiyondur");
console.log("- Sayısal indekslerle (0, 1, 2, ...) erişilir");
console.log("- Benzer türde öğeleri saklamak için idealdir");
console.log("Örnek: ['Elma', 'Muz', 'Çilek']");

console.log("\n=== Nesneler ve Diziler Konusu Tamamlandı ===\n");
