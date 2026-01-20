# 11 - Tarih ve Saat İşlemleri (Date Objesi)

Bu bölümde, JavaScript'te tarih ve saat işlemleri için kullanılan Date nesnesini öğreneceğiz.

## 🌟 Konuya Giriş

Date nesnesi, tarih ve saatli işlemler yapmak için kullanılır. Tarih karşılaştırmaları, hesaplamaları ve formatlama işlemleri yapabiliriz.

## 🚀 Date Nesnesi

```javascript
let currentDate = new Date(); // Şu anki tarih ve saat
let year = currentDate.getFullYear(); // Yıl
let month = currentDate.getMonth() + 1; // Ay (0-11 arası, +1 yaparak 1-12'ye çevirir)
let day = currentDate.getDate(); // Gün
```

## 🛠️ Örnek Kullanım

Aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `date-object.js`](./date-object.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
