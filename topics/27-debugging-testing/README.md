# 27. Debugging ve Testing

## Konu Özeti
Debugging kodumuzdaki hataları bulup düzeltmek için, Testing ise kodun doğru çalıştığını kontrol etmek için kullanılır.

## console Metotları

```javascript
// Temel Log
console.log('Basit bilgi');

// Uyarı
console.warn('Dikkat et!');

// Hata
console.error('Hata oluştu!');

// Tablo Formatı
console.table([
  {name: 'Ahmet', age: 25},
  {name: 'Zeynep', age: 30}
]);

// Zaman Ölçümü
console.time('myTimer');
// ... kod ...
console.timeEnd('myTimer');

// Group
console.group('Başlık');
console.log('İçerik 1');
console.log('İçerik 2');
console.groupEnd();
```

## Breakpoints

Browser DevTools (F12) kullanarak:
1. Sources sekmesine git
2. Satır numarasına tıkla → Breakpoint ekler
3. Kodun o noktada duracağı ve değişkenleri inceleyebileceğin

## Basit Testing (Unit Tests)

```javascript
// Küçük bir test fonksiyonu
function assert(condition, message) {
  if (!condition) {
    throw new Error('TEST FAILED: ' + message);
  }
  console.log('✓ ' + message);
}

// Fonksiyon
function add(a, b) {
  return a + b;
}

// Testler
assert(add(2, 3) === 5, 'add(2, 3) should equal 5');
assert(add(-1, 1) === 0, 'add(-1, 1) should equal 0');
```

## Jest İle Testing (İleri Seviye)

Jest, en popüler JavaScript test frameworküdür.

```javascript
// Kurulum
// npm install --save-dev jest

// sum.js
function sum(a, b) {
  return a + b;
}

// sum.test.js
describe('sum function', () => {
  test('should add 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
  
  test('should handle negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
```

## Debugging İpuçları

1. **Console.log Kullan**: Değişkenlerin değerini kontrol et
2. **DevTools Watch**: Belirli değişkenleri izle
3. **Step Over/Into**: Kod satır satır yürütmeyi kontrol et
4. **Call Stack**: Fonksiyon çağrısının hangi sıradan geldiğini gör
5. **Breakpoint Şartları**: Belirli koşulda durmak için conditional breakpoint kur

## Kaynaklar

- [MDN - Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Jest Official Docs](https://jestjs.io/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
