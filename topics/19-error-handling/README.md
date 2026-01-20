# 19. Hata Yönetimi & Debugging

## Konu Özeti
Hata yönetimi, programların beklenmeyen durumlarda çökmemesini sağlar. Debugging ise hataları bulup düzeltme işlemidir.

## Hata Türleri

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| Syntax Error | Yazım hatası | `function()` |
| Reference Error | Tanımlanmayan değişken | `console.log(x);` |
| Type Error | Yanlış tip işlemi | `"text".map()` |
| Range Error | Aralık dışı değer | `new Array(-1)` |

## Try-Catch Bloku

```javascript
try {
  // Riskli kod
  riskliFonksyon();
} catch (error) {
  // Hata durumunda
  console.error(error.message);
} finally {
  // Her zaman çalış
  console.log('Bitti');
}
```

## Error Objesi

```javascript
{
  name: "TypeError",
  message: "undefined is not a function",
  stack: "Error at line 5..."
}
```

## Throw ile Hata Fırlatma

```javascript
if (yas < 0) {
  throw new Error("Yaş negatif olamaz!");
}
```

## Debugging Araçları

- **Console**: `console.log()`, `console.error()`, `console.table()`
- **Breakpoints**: Kodda durma noktaları
- **Watch**: Değişkenleri izle
- **Stack Trace**: Hata kaynağını takip et

## Kaynaklar

- [MDN - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## Özet

- Try-catch ile hataları yakala ve yönet
- Error objeleri bilgi sağlar
- Debugging araçları sorunları bulmaya yardımcı olur
- Finally bloğu daima çalışır
