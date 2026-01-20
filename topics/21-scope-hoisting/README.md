# 21. Scope (Kapsam) & Hoisting

## Konu Özeti
Scope, değişkenlerin nerede erişilebilir olduğunu belirler. Hoisting ise JavaScript'in değişken ve fonksiyon bildirimleri nasıl işlediğini açıklar.

## Scope Türleri

### 1. Global Scope (Genel Kapsam)
```javascript
var globalVar = "Global"; // Tüm yerlerde erişilebilir
console.log(globalVar);    // "Global"
```

### 2. Function Scope (Fonksiyon Kapsamı)
```javascript
function demo() {
  var funcVar = "Function";
  console.log(funcVar); // "Function"
}
console.log(funcVar);   // Hata: undefined
```

### 3. Block Scope (Blok Kapsamı)
```javascript
if (true) {
  let blockVar = "Block";
  console.log(blockVar); // "Block"
}
console.log(blockVar);   // Hata: undefined
```

## let vs const vs var

| Özellik | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Hoisting** | undefined | TDZ | TDZ |
| **Yeniden Bildirme** | Evet | Hayır | Hayır |
| **Değişim** | Evet | Evet | Hayır |

## Hoisting Nedir?

Hoisting, JavaScript'in tüm değişken ve fonksiyon bildirimlerini çalışma alanının (scope) en başına taşıyan bir davranıştır.

### var Hoisting
```javascript
console.log(x); // undefined (hoisted)
var x = 5;
console.log(x); // 5
```

### let/const Hoisting (TDZ - Temporal Dead Zone)
```javascript
console.log(y); // ReferenceError
let y = 10;
```

### Fonksiyon Hoisting
```javascript
sayMerhaba(); // "Merhaba!" (çalışır)

function sayMerhaba() {
  console.log("Merhaba!");
}
```

## Scope Chain (Kapsam Zinciri)
```javascript
var global = "Global";

function outer() {
  var outer = "Outer";
  
  function inner() {
    var inner = "Inner";
    console.log(inner);   // "Inner"
    console.log(outer);   // "Outer"
    console.log(global);  // "Global"
  }
  
  inner();
}

outer();
```

## Kaynaklar

- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN - Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)

## Özet

- **Scope**: Değişkenlerin erişilebilir olduğu alan
- **Hoisting**: Bildirimler scope'un başına taşınır
- **let/const**: Block scope ile daha güvenli
- **var**: Function scope, hoisting riski
