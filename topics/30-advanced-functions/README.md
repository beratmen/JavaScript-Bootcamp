# 30. Advanced Functions (İleri Seviye Fonksiyonlar)

## Konu Özeti
Fonksiyonları daha güçlü ve esnek kullanmanın yollarını öğren.

## 1. Higher-Order Functions (Üst Düzey Fonksiyonlar)

Fonksiyon parametre olarak alan veya fonksiyon döndüren fonksiyonlar.

```javascript
// Fonksiyonu parametre olarak alan
function executeOperation(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(executeOperation(5, 3, add));      // 8
console.log(executeOperation(5, 3, multiply)); // 15

// Fonksiyon döndüren fonksiyon
function createMultiplier(multiplier) {
  return (number) => number * multiplier;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));   // 10
console.log(triple(5));   // 15
```

## 2. Currying (Kısmi Uygulama)

Çok parametreli fonksiyonu, tek parametreli fonksiyonlar zinciri haline dönüştürme.

```javascript
// Normal Fonksiyon
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));  // 6

// Curried Version
function curriedAdd(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3));  // 6

// ES6 Ok Fonksiyonu ile
const curriedAddArrow = (a) => (b) => (c) => a + b + c;
```

## 3. Function Composition (Fonksiyon Birleştirme)

Fonksiyonları birleştirerek yeni işlemler oluşturma.

```javascript
const add5 = (n) => n + 5;
const multiply2 = (n) => n * 2;
const square = (n) => n * n;

// Manuel
const compose = (...fns) => (value) => {
  return fns.reduceRight((acc, fn) => fn(acc), value);
};

const operation = compose(square, multiply2, add5);
console.log(operation(3));  // ((3 + 5) * 2) ^ 2 = 256
```

## 4. Memoization (Bellek Kullanımı)

Fonksiyonun sonuçlarını cache'leyerek performans artırma.

```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log('Cacheden döndürülüyor:', key);
      return cache[key];
    }
    
    console.log('Hesaplanıyor:', key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = memoize((n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
});

expensiveCalculation(100);  // Hesaplanıyor
expensiveCalculation(100);  // Cacheden döndürülüyor
```

## 5. IIFE (Immediately Invoked Function Expression)

Tanımlandığı anda çalışan anonim fonksiyon.

```javascript
(function() {
  const privateVar = 'Gizli';
  console.log(privateVar);
})();

// console.log(privateVar);  // ReferenceError

// Arrow Function ile
(() => {
  console.log('Hemen çalışıyor');
})();

// Parametre ile
(function(name) {
  console.log(`Merhaba, ${name}`);
})('Ahmet');
```

## 6. Partial Application (Kısmi Uygulama)

Fonksiyonun bazı parametrelerini önceden belirlemek.

```javascript
function bind(fn, ...args) {
  return (...newArgs) => {
    return fn(...args, ...newArgs);
  };
}

const multiply = (a, b, c) => a * b * c;

const multiplyBy2 = bind(multiply, 2);
console.log(multiplyBy2(3, 4));  // 2 * 3 * 4 = 24
```

## Kaynaklar

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Eloquent JavaScript - Functions](https://eloquentjavascript.net/03_functions.html)
