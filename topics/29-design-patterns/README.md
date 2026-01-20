# 29. Design Patterns (Tasarım Desenleri)

## Konu Özeti
Design Patterns, yaygın kodlama sorunlarına çözüm sağlayan, yeniden kullanılabilir kod yapılarıdır.

## 1. Module Pattern (Modül Deseni)

Kapanışları (closures) kullanarak private ve public değişkenler oluşturur.

```javascript
// Private ve public özellikler
const Calculator = (() => {
  let result = 0;  // Private
  
  return {
    // Public Methods
    add: (n) => { result += n; return result; },
    subtract: (n) => { result -= n; return result; },
    getResult: () => result,
    reset: () => { result = 0; }
  };
})();

Calculator.add(10);        // 10
Calculator.subtract(5);    // 5
// Calculator.result = 100; // İçişe, bulamayız!
```

## 2. Singleton Pattern (Tekli Desen)

Sınıfın sadece bir örneğini oluşturur.

```javascript
const DatabaseConnection = (() => {
  let instance;
  
  function createInstance() {
    return {
      connect: () => console.log('Bağlandı'),
      query: (sql) => console.log(`Sorgu: ${sql}`)
    };
  }
  
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2);  // true (Aynı örnek)
```

## 3. Observer Pattern (Gözlemci Deseni)

Bir nesne değiştiğinde, onu takip eden diğer nesneler bilgilendirilir.

```javascript
const Subject = (() => {
  let observers = [];
  
  return {
    subscribe: (observer) => {
      observers.push(observer);
    },
    unsubscribe: (observer) => {
      observers = observers.filter(o => o !== observer);
    },
    notify: (data) => {
      observers.forEach(observer => observer(data));
    }
  };
})();

// Gözlemciler
const observer1 = (data) => console.log('Observer 1:', data);
const observer2 = (data) => console.log('Observer 2:', data);

Subject.subscribe(observer1);
Subject.subscribe(observer2);
Subject.notify('Veri değişti!');  // Her iki observer çağrılır
```

## 4. Factory Pattern (Fabrika Deseni)

Nesne oluşturmayı basitleştirer.

```javascript
function AnimalFactory(type) {
  if (type === 'dog') {
    return { sound: () => 'Hav Hav!' };
  } else if (type === 'cat') {
    return { sound: () => 'Miyav!' };
  }
}

const dog = AnimalFactory('dog');
const cat = AnimalFactory('cat');

console.log(dog.sound());  // Hav Hav!
console.log(cat.sound());  // Miyav!
```

## 5. Decorator Pattern (Dekoratör Deseni)

Mevcut bir nesneye yeni özellikler ekler.

```javascript
function addLogging(fn) {
  return function(...args) {
    console.log(`Fonksiyon çağrılıyor: ${fn.name}`);
    return fn(...args);
  };
}

function multiply(a, b) {
  return a * b;
}

const multiplyWithLogging = addLogging(multiply);
multiplyWithLogging(5, 3);  // Konsola log yazar, sonra işlem yapar
```

## Kaynaklar

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
- [MDN - JavaScript Design Patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
