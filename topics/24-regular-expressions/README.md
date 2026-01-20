# 24. Regular Expressions (Düzenli İfadeler)

## Konu Özeti
Regular Expressions (Regex), metin arama, doğrulama ve manipülasyonu için kullanılır.

## Temel Syntax

```javascript
const regex = /pattern/flags;
// veya
const regex = new RegExp('pattern', 'flags');
```

## Flags

- `g` - Global (tüm eşleşmeleri bul)
- `i` - Case insensitive (büyük/küçük harf duyarsız)
- `m` - Multiline

## Sık Kullanılan Metotlar

```javascript
const regex = /test/i;
const str = "This is a TEST";

regex.test(str);           // true
str.match(/test/i);        // ["TEST"]
str.replace(/test/i, "x"); // "This is a x"
str.split(/\s/);           // ["This", "is", "a", "TEST"]
```

## Pratik Örnekler

### Email Doğrulama
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("test@example.com")); // true
```

### Telefon Numarası
```javascript
const phoneRegex = /^\d{10}$/;
console.log(phoneRegex.test("5551234567")); // true
```

### URL Doğrulama
```javascript
const urlRegex = /^https?:\/\/.+/;
console.log(urlRegex.test("https://example.com")); // true
```

## Kaynaklar

- [MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [RegexPal](https://www.regexpal.com/)
