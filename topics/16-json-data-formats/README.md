# 16. JSON & Veri Formatları

## Konu Özeti
JSON (JavaScript Object Notation), verileri metin formatında depolamak ve iletmek için kullanılan bir standarttır. Özellikle API'lar ve web uygulamaları arasında veri alışverişinde sıkça kullanılır.

## Nedir JSON?

JSON, insan tarafından okunabilir, hafif bir veri taşıma formatıdır:

```json
{
  "ad": "Ahmet",
  "yas": 25,
  "sehir": "İstanbul",
  "hobi": ["okuma", "yazılım", "spor"]
}
```

## JSON Syntaks Kuralları

| Kural | Açıklama | Örnek |
|-------|----------|-------|
| String | Çift tırnak ile yazılır | `"ad": "Ahmet"` |
| Number | Tam sayı veya ondalık | `"yas": 25` |
| Boolean | true/false | `"aktif": true` |
| Array | Köşeli parantezler | `[1, 2, 3]` |
| Object | Süslü parantezler | `{...}` |
| null | Boş değer | `"telefon": null` |

## JavaScript ile JSON Kullanımı

### JSON.stringify() - Nesneyi String'e Çevir

JavaScript nesnelerini JSON string'ine dönüştürür:

```javascript
const user = {
  ad: "Fatma",
  yas: 28
};

const jsonString = JSON.stringify(user);
// Sonuç: {"ad":"Fatma","yas":28}
```

### JSON.parse() - String'i Nesneye Çevir

JSON string'ini JavaScript nesnesine dönüştürür:

```javascript
const jsonData = '{"ad":"Ali","yas":30}';
const user = JSON.parse(jsonData);

console.log(user.ad); // Ali
console.log(user.yas); // 30
```

## Kullanım Alanları

1. **API Veri Alışverişi**: Sunucular ve istemciler arasında veri paylaşımı
2. **Local Storage**: Tarayıcıda veri depolama
3. **Yapılandırma Dosyaları**: package.json, config.json vb.
4. **Veri Senkronizasyonu**: Uygulamalar arasında veri aktarımı

## Pratik Örnek: Kullanıcı Verisi

```javascript
// Nesne oluştur
const kullanici = {
  id: 1,
  ad: "Ayşe",
  email: "ayse@example.com",
  aktif: true,
  roller: ["user", "admin"]
};

// JSON'a dönüştür (kaydet)
const jsonVerisi = JSON.stringify(kullanici, null, 2);

// JSON'dan nesneye dönüştür (oku)
const geriAlınan = JSON.parse(jsonVerisi);
```

## JSON Doğrulama

JSON'un geçerli olduğundan emin olmak için try-catch kullanın:

```javascript
try {
  const veri = JSON.parse(gelenVeri);
  console.log("Geçerli JSON!");
} catch (error) {
  console.log("Hatalı JSON formatı");
}
```

## Kaynaklar

- [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JSON.org - Resmi Site](https://www.json.org/json-en.html)
- [W3Schools - JSON Tutorial](https://www.w3schools.com/js/js_json_intro.asp)

## Özet

- JSON, metin tabanlı bir veri formatıdır
- `JSON.stringify()` ile nesne → string
- `JSON.parse()` ile string → nesne
- API'lar çoğunlukla JSON kullanır
- localStorage'da JSON saklanır
