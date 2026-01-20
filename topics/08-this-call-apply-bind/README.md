# 08 - this, call, apply, bind

Bu bölümde, JavaScript'te `this` anahtar kelimesini ve bağlam (context) yönetimi için kullanılan metotları öğreneceğiz.

## 🌟 Konuya Giriş

`this` anahtar kelimesi, JavaScript'in en kafa karıştırıcı konularından biridir. Ancak, `call`, `apply` ve `bind` metotları sayesinde `this` bağlamını kontrol edebiliriz.

## 🚀 this Anahtar Kelimesi

`this`, çağrıldığı bağlama (context) göre farklı değerler alır:

- **Global bağlamda:** `window` (tarayıcı) veya `global` (Node.js)
- **Obje metodu:** Objenin kendisi
- **Sınıf içinde:** Sınıf örneği
- **Fonksiyon içinde:** Global obje (non-strict mode) veya undefined (strict mode)

## 🔗 call, apply, bind

Bu metotlar, `this` bağlamını açıkça belirtmek için kullanılır.

- **call:** Argümanları tek tek geçer
- **apply:** Argümanları dizi olarak geçer
- **bind:** Yeni bir fonksiyon döner, `this` sabittir

## 🛠️ Örnek Kullanım

Aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `this-context.js`](./this-context.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
*   [MDN Web Docs - call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
