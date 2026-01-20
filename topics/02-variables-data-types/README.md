# 02 - Değişkenler ve Veri Türleri

Bu bölümde, JavaScript'te veri depolamak için kullanılan değişkenleri ve JavaScript'in farklı veri türlerini öğreneceğiz.

## 🌟 Konuya Giriş

Değişkenler, programlarımızda verileri depolamak için kullanılan sembolik isimlerdir. JavaScript'te değişken tanımlamak için üç ana anahtar kelime bulunur: `var`, `let` ve `const`. Her birinin farklı kullanım senaryoları ve kapsama (scope) kuralları vardır.

Veri türleri ise değişkenlerin saklayabileceği değerlerin kategorisini belirtir. JavaScript dinamik tipli bir dil olduğundan, değişkenlerin veri türünü açıkça belirtmemiz gerekmez, ancak hangi türde veriyle çalıştığımızı bilmek önemlidir.

## 🚀 Değişken Tanımlama: `var`, `let`, `const`

### `var`

*   ES6 öncesinde değişken tanımlamak için kullanılan anahtar kelimeydi.
*   Fonksiyon kapsamlıdır (function-scoped).
*   Tekrar tanımlanabilir ve güncellenebilir.
*   **Önerilmez** çünkü kafa karıştırıcı davranışlara yol açabilir (örneğin, hoisting sorunları).

### `let`

*   ES6 ile tanıtıldı ve `var` yerine önerilen bir alternatiftir.
*   Blok kapsamlıdır (block-scoped) - `if` blokları, `for` döngüleri gibi kod blokları içinde tanımlandığında yalnızca o blok içinde erişilebilir.
*   Tekrar tanımlanamaz ancak güncellenebilir.

### `const`

*   ES6 ile tanıtıldı ve sabit değerler için kullanılır.
*   Blok kapsamlıdır (block-scoped).
*   Hem tekrar tanımlanamaz hem de güncellenemez. **Ancak**, bir `const` ile tanımlanmış bir obje veya dizinin içeriği değiştirilebilir. Sadece değişkenin referansı sabittir.

### Farkların Özeti

| Özellik        | `var`              | `let`             | `const`           |
| :------------- | :----------------- | :---------------- | :---------------- |
| Kapsam (Scope) | Fonksiyon Kapsamı  | Blok Kapsamı      | Blok Kapsamı      |
| Tekrar Tanımlama | Evet               | Hayır             | Hayır             |
| Güncelleme     | Evet               | Evet              | Hayır (Referans için) |
| Hoisting       | Var (undefined ile) | Var (TDZ ile)     | Var (TDZ ile)     |

## 📊 Veri Türleri

JavaScript'te yedi temel veri türü (primitive data types) ve bir obje veri türü bulunur:

### Temel Veri Türleri (Primitives)

1.  **String**: Metin değerleri için kullanılır. Tek tırnak (`'...'`), çift tırnak (`"..."`) veya backtick (`` `...` ``) ile tanımlanır.
    ```javascript
    let name = "John Doe";
    let message = 'Hello, world!';
    let template = `Hi, ${name}!`; // Template literal (ES6)
    ```
2.  **Number**: Sayısal değerler için kullanılır. Hem tam sayılar hem de ondalıklı sayılar bu türe girer.
    ```javascript
    let age = 30;
    let price = 19.99;
    let bigNumber = 123e5; // 12300000
    ```
3.  **Boolean**: `true` veya `false` olmak üzere sadece iki değeri olan mantıksal değerlerdir.
    ```javascript
    let isActive = true;
    let hasPermission = false;
    ```
4.  **Undefined**: Bir değişkene değer atanmadığında varsayılan olarak aldığı türdür.
    ```javascript
    let myVariable; // myVariable değeri undefined
    ```
5.  **Null**: Bilinçli olarak "değer yok" anlamına gelen özel bir değerdir.
    ```javascript
    let user = null; // user değeri null
    ```
6.  **Symbol** (ES6): Benzersiz ve değiştirilemez değerler oluşturmak için kullanılır. Özellikle obje özelliklerinin çakışmasını önlemek için faydalıdır.
    ```javascript
    const id = Symbol('id');
    const anotherId = Symbol('id');
    // id !== anotherId
    ```
7.  **BigInt** (ES11): JavaScript'in Number tipinin maksimum sınırından daha büyük tam sayılarla çalışmak için kullanılır.
    ```javascript
    const largeNumber = 1234567890123456789012345678901234567890n;
    ```

### Obje Veri Türü (Non-Primitive)

*   **Object**: Yukarıdaki temel veri türlerinin dışında kalan tüm yapılar objedir. Diziler, fonksiyonlar ve diğer objeler obje türüne girer.
    ```javascript
    let person = { name: "Alice", age: 25 }; // Obje
    let numbers = [1, 2, 3]; // Dizi (özünde bir obje)
    function greet() { /* ... */ } // Fonksiyon (özünde bir obje)
    ```

## 🛠️ Örnek Kullanım

Bu kavramları uygulamalı olarak görmek için aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `variables.js`](./variables.js)

`variables.js` dosyasından bazı örnekler:

```javascript
// filepath: topics/02-variables-data-types/variables.js
// ...existing code...

// const, let, var farkları
const pi = 3.14; // Sabit değişken (değeri değiştirilemez)
let radius = 5;  // Değişken (değeri değiştirilebilir)
radius = 10;     // radius değeri güncellendi
// pi = 3.14159; // Hata: Assignment to constant variable.

var area = pi * radius * radius; // Var kullanımı önerilmez.
// Var yerine let veya const kullanılması daha iyidir çünkü blok kapsamı sağlarlar.

console.log(`Pi değeri: ${pi}`);
console.log(`Güncel radius değeri: ${radius}`);
console.log(`Alan: ${area}`);

// Veri Türleri Örnekleri
let stringExample = "Merhaba JavaScript!"; // String
let numberExample = 100;                 // Number
let booleanExample = true;               // Boolean
let nullExample = null;                  // Null
let undefinedExample;                    // Undefined

console.log(`stringExample tipi: ${typeof stringExample}`);     // string
console.log(`numberExample tipi: ${typeof numberExample}`);     // number
console.log(`booleanExample tipi: ${typeof booleanExample}`);   // boolean
console.log(`nullExample tipi: ${typeof nullExample}`);         // object (JavaScript'te bir quirk)
console.log(`undefinedExample tipi: ${typeof undefinedExample}`); // undefined

let personObject = { name: "Berat", age: 30 }; // Object
let numberArray = [1, 2, 3];                   // Object (Array)

console.log(`personObject tipi: ${typeof personObject}`); // object
console.log(`numberArray tipi: ${typeof numberArray}`);   // object
```

## 📚 Ek Kaynaklar

*   [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [MDN Web Docs - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
