# 01 - Giriş

Bu bölümde, JavaScript'in ne olduğunu, neden önemli olduğunu ve basit JavaScript kodlarını tarayıcıda nasıl çalıştıracağımızı öğreneceğiz.

## 🌟 Konuya Giriş

JavaScript, web sitelerini etkileşimli hale getiren, dinamik içerik ekleyen ve kullanıcı deneyimini zenginleştiren güçlü bir programlama dilidir. Günümüzde sadece tarayıcılarda değil, sunucu tarafında (Node.js ile), mobil uygulamalarda (React Native ile) ve hatta masaüstü uygulamalarında (Electron ile) da kullanılmaktadır.

Bu ilk bölümde, JavaScript'e merhaba diyecek, temel çıktı yöntemlerini öğrenecek ve geliştirme ortamınızın hazır olduğundan emin olacağız.

## 🚀 Temel Çıktı Yöntemleri

JavaScript kodlarını çalıştırdığımızda, sonuçları görmek veya hata ayıklamak için çeşitli yöntemler kullanırız:

1.  **`console.log()`**: Tarayıcının geliştirici araçları konsoluna mesaj yazdırmak için kullanılır. Geliştirme ve hata ayıklama sürecinde en sık kullanılan yöntemdir.
2.  **`document.write()`**: Doğrudan web sayfasının içeriğine metin yazdırmak için kullanılır. Genellikle sayfa yüklendikten sonra kullanılması önerilmez, çünkü sayfanın mevcut içeriğini değiştirebilir veya üzerine yazabilir.
3.  **`alert()`**: Kullanıcıya küçük bir uyarı penceresi göstermek için kullanılır. Kullanıcı bu pencereyi kapatana kadar sayfanın diğer işlemleri duraklatılır.

## 🛠️ Geliştirme Ortamı Kurulumu

JavaScript kodu yazmak ve çalıştırmak için ihtiyacınız olan temel araçlar:

*   **Modern Bir Web Tarayıcısı**: Google Chrome, Mozilla Firefox, Microsoft Edge veya Safari gibi tarayıcılar dahili JavaScript motorlarına sahiptir ve kodunuzu çalıştırmak için idealdir. (Geliştirici araçlarını açmayı unutmayın! Genellikle `F12` veya `Ctrl+Shift+I` / `Cmd+Opt+I` ile açılır.)
*   **Kod Düzenleyici**: VS Code, Sublime Text, Atom gibi bir kod düzenleyici, kod yazımınızı kolaylaştıracak özellikler (syntax highlighting, auto-completion) sunar.

## 💡 Örnek Kullanım

Bu bölümde öğreneceğimiz çıktı yöntemlerini aşağıdaki dosyalarda bulabilirsiniz:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `intro.js`](./intro.js)

`intro.js` dosyasından bazı örnekler:

```javascript
// filepath: topics/01-introduction/intro.js

// console.log() metodu, geliştiricilerin tarayıcının konsoluna mesajlar, değişken değerleri veya objeler yazdırmasını sağlar.
// Bu, hata ayıklama (debugging) ve kodun çalışma zamanındaki durumunu kontrol etme için çok önemli bir araçtır.
console.log("Hello, JavaScript Bootcamp!"); // Konsol Ekranına "Hello, JavaScript Bootcamp!" mesajını yazdırır.

// document.write() metodu, HTML belgesine doğrudan içerik yazmak için kullanılır.
// Sayfa tamamen yüklendikten sonra çağrıldığında mevcut içeriğin üzerine yazabileceği için dikkatli kullanılmalıdır.
// Genellikle sayfa yüklenirken dinamik içerik eklemek için kullanılır.
document.write("Welcome to JavaScript Bootcamp!"); // Web sayfasına "Welcome to JavaScript Bootcamp!" mesajını yazdırır.

// alert() metodu, kullanıcıya bir uyarı mesajı içeren küçük bir iletişim kutusu (pop-up) gösterir.
// Kullanıcı "Tamam" butonuna tıklayana kadar sayfanın etkileşimi durur.
// Kullanıcıya önemli bildirimler yapmak veya basit etkileşimler için kullanılabilir, ancak sık kullanımı kullanıcı deneyimini bozabilir.
// alert("This is an alert message!"); // Uyarı penceresi gösterir (Bu satır şu anda yorum satırı yapılmıştır).
```

## 📚 Ek Kaynaklar

*   [MDN Web Docs - Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
*   [MDN Web Docs - document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
*   [MDN Web Docs - alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
