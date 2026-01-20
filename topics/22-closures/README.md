# 22. Closures (Kapanışlar)

## Konu Özeti
Closure, dış fonksiyonun değişkenlerine erişim yapabilen iç bir fonksiyondur. JavaScript'in en güçlü özelliklerinden biridir.

## Closure Nedir?

```javascript
function outer(x) {
  function inner(y) {
    return x + y; // outer'ın x'ine erişebilir
  }
  return inner;
}

const add5 = outer(5);
console.log(add5(3)); // 8
```

## Pratik Kullanımlar

### 1. Data Privacy (Veri Gizleme)
```javascript
function createCounter() {
  let count = 0; // Private değişken
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
```

### 2. Factory Functions
```javascript
function createUser(name, email) {
  return {
    name,
    email,
    greet: () => `Merhaba, ben ${name}`
  };
}
```

### 3. Event Listeners
```javascript
for (let i = 1; i <= 3; i++) {
  button.addEventListener('click', () => {
    console.log(`Button ${i} tıklandı`);
  });
}
```

## Closure vs Global Scope

```javascript
// ❌ Global (Kötü)
let count = 0;
function increment() { count++; }

// ✅ Closure (İyi)
const counter = (() => {
  let count = 0;
  return () => count++;
})();
```

## Kaynaklar

- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [You Don't Know JS - Closure](https://github.com/getify/You-Dont-Know-JS)
