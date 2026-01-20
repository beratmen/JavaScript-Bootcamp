# 04 - Kontrol Akışı (if/else, switch)

Bu bölümde, programın akışını kontrol etmek için kullanılan koşullu ifadeleri öğreneceğiz.

## 🌟 Konuya Giriş

Kontrol akışı, programın belirli koşullara göre farklı kod bloklarını çalıştırmasını sağlar. Bu, programlarımıza akıllılık katmanın temel yollarından biridir.

## 🚀 if, else if, else İfadeleri

`if` ifadeleri, belirli bir koşul doğruysa (true) bir kod bloğunu çalıştırmak için kullanılır.

### if İfadesi
Koşul true ise içindeki kod çalışır.

```javascript
if (condition) {
    // Koşul true ise bu kod çalışır
}
```

### if...else İfadesi
Koşul true ise ilk blok, false ise ikinci blok çalışır.

```javascript
if (condition) {
    // Koşul true ise bu kod çalışır
} else {
    // Koşul false ise bu kod çalışır
}
```

### if...else if...else İfadesi
Birden fazla koşulu kontrol etmek için kullanılır.

```javascript
if (condition1) {
    // condition1 true ise çalışır
} else if (condition2) {
    // condition2 true ise çalışır
} else if (condition3) {
    // condition3 true ise çalışır
} else {
    // Hiçbiri doğru değilse çalışır
}
```

## 🔀 switch İfadeleri

Bir değişkenin farklı değerlerine göre farklı işlemler yapmak için kullanılır.

```javascript
switch (expression) {
    case value1:
        // expression value1 ise çalışır
        break;
    case value2:
        // expression value2 ise çalışır
        break;
    default:
        // Hiçbiri eşleşmezse çalışır
}
```

## 🛠️ Örnek Kullanım

Bu kavramları uygulamalı olarak görmek için aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `control-flow.js`](./control-flow.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
*   [MDN Web Docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
