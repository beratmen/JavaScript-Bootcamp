# 06 - Fonksiyonlar

Bu bölümde, kodu tekrar kullanılabilir bloklara bölmek için kullanılan fonksiyonları öğreneceğiz.

## 🌟 Konuya Giriş

Fonksiyonlar, belirli bir görevi yerine getiren, tekrar kullanılabilen kod bloklarıdır. Programlamada kodun tekrarını azaltır ve programı daha düzenli hale getiri.

## 🚀 Fonksiyon Tanımlama Yöntemleri

### 1. Function Declaration (Fonksiyon Bildirimi)
```javascript
function greet(name) {
    return "Hello, " + name;
}
```

### 2. Function Expression (Fonksiyon İfadesi)
```javascript
const greet = function(name) {
    return "Hello, " + name;
};
```

### 3. Arrow Function (Ok Fonksiyonu - ES6)
```javascript
const greet = (name) => {
    return "Hello, " + name;
};

// Kısa form (tek satır ise):
const greet = name => "Hello, " + name;
```

## 🛠️ Örnek Kullanım

Aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `functions.js`](./functions.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
*   [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
