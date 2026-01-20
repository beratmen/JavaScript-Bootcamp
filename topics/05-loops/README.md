# 05 - Döngüler

Bu bölümde, tekrarlayan işlemleri yapmak için kullanılan döngüleri öğreneceğiz.

## 🌟 Konuya Giriş

Döngüler, bir kod bloğunu belirli koşullar sağlandığında tekrar tekrar çalıştırmak için kullanılır. Bu, programlamada zaman kazandıran ve kod tekrarını azaltan güçlü bir özelliktir.

## 🚀 Döngü Türleri

### for Döngüsü
Belirtilen sayıda tekrarlama için kullanılır.

```javascript
for (let i = 0; i < 5; i++) {
    // 5 kez tekrarlanır: i = 0, 1, 2, 3, 4
}
```

### while Döngüsü
Koşul true olduğu sürece çalışır.

```javascript
while (condition) {
    // Koşul true ise tekrarlanır
}
```

### do...while Döngüsü
En az bir kez çalışır, sonra koşulu kontrol eder.

```javascript
do {
    // En az bir kez çalışır
} while (condition);
```

### for...in Döngüsü
Objelerin özelliklerini döngülemek için kullanılır.

```javascript
for (let key in object) {
    // Objenin her bir özelliği için çalışır
}
```

### for...of Döngüsü
Dizilerin elemanlarını döngülemek için kullanılır (ES6).

```javascript
for (let value of array) {
    // Dizinin her bir elemanı için çalışır
}
```

## 🛠️ Örnek Kullanım

Aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `loops.js`](./loops.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [MDN Web Docs - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
