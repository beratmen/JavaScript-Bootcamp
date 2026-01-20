// ===== Advanced Functions =====

let performanceLog = [];

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// 1. Higher-Order Functions
function higherOrderFunctions() {
  // Fonksiyonu parametre olarak alan
  function executeOperation(a, b, operation) {
    return operation(a, b);
  }
  
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const power = (a, b) => Math.pow(a, b);
  
  // Fonksiyon döndüren
  function createMultiplier(multiplier) {
    return (number) => number * multiplier;
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  let html = `
    <h3>Higher-Order Functions</h3>
    <div class="code-example">
      <strong>Fonksiyon Parametre Olarak:</strong><br>
      executeOperation(5, 3, add) → ${executeOperation(5, 3, add)}<br>
      executeOperation(5, 3, multiply) → ${executeOperation(5, 3, multiply)}<br>
      executeOperation(2, 8, power) → ${executeOperation(2, 8, power)}<br><br>
      <strong>Fonksiyon Döndüren:</strong><br>
      double(5) → ${double(5)}<br>
      triple(5) → ${triple(5)}<br><br>
      <em style="color:#666;">Higher-order fonksiyonlar fonksiyonel programlamanın temelini oluşturur</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 2. Currying
function curryingExample() {
  // Normal fonksiyon
  function add(a, b, c) {
    return a + b + c;
  }
  
  // Curried versiyon
  const curriedAdd = (a) => (b) => (c) => a + b + c;
  
  // Partial Currying
  const addWith10 = curriedAdd(10);
  const addWith10And20 = addWith10(20);
  
  let html = `
    <h3>Currying - Kısmi Uygulama</h3>
    <div class="code-example">
      <strong>Normal Fonksiyon:</strong><br>
      add(1, 2, 3) → ${add(1, 2, 3)}<br><br>
      <strong>Curried Fonksiyon:</strong><br>
      curriedAdd(1)(2)(3) → ${curriedAdd(1)(2)(3)}<br><br>
      <strong>Kısmi Uygulama:</strong><br>
      const addWith10 = curriedAdd(10)<br>
      const addWith10And20 = addWith10(20)<br>
      addWith10And20(5) → ${addWith10(20)(5)}<br><br>
      <em style="color:#666;">Currying'i sayesinde parametreleri adım adım geçebiliriz</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 3. Function Composition
function composition() {
  const add5 = (n) => n + 5;
  const multiply2 = (n) => n * 2;
  const square = (n) => n * n;
  
  // Composition fonksiyonu
  const compose = (...fns) => (value) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
  
  const operation1 = compose(square, multiply2, add5);  // ((x + 5) * 2) ^ 2
  const operation2 = compose(add5, multiply2);          // (x * 2) + 5
  
  let html = `
    <h3>Function Composition</h3>
    <div class="code-example">
      <strong>İşlem 1: ((x + 5) * 2) ^ 2</strong><br>
      operation1(3) → ((3 + 5) * 2) ^ 2 = ${operation1(3)}<br><br>
      <strong>İşlem 2: (x * 2) + 5</strong><br>
      operation2(3) → (3 * 2) + 5 = ${operation2(3)}<br><br>
      <em style="color:#666;">Composition, basit fonksiyonları birleştirerek karmaşık işlemler oluşturmayı sağlar</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 4. Memoization
function memoization() {
  let callCount = 0;
  
  function slowCalculation(n) {
    callCount++;
    let sum = 0;
    for (let i = 0; i < n * 1000000; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Memoize fonksiyonu
  function memoize(fn) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (key in cache) {
        return { result: cache[key], cached: true };
      }
      
      const result = fn(...args);
      cache[key] = result;
      return { result, cached: false };
    };
  }
  
  const memoizedCalc = memoize(slowCalculation);
  
  // Test et
  callCount = 0;
  const start1 = performance.now();
  const res1 = memoizedCalc(10);
  const time1 = (performance.now() - start1).toFixed(2);
  const calls1 = callCount;
  
  const start2 = performance.now();
  const res2 = memoizedCalc(10);
  const time2 = (performance.now() - start2).toFixed(2);
  const calls2 = callCount;
  
  let html = `
    <h3>Memoization - Sonuç Saklama</h3>
    <div class="code-example">
      <strong>İlk Çağrı (Hesaplama):</strong><br>
      Zaman: ${time1}ms<br>
      Fonksiyon Çağrıları: ${calls1}<br><br>
      <strong>İkinci Çağrı (Cache'den):</strong><br>
      Zaman: ${time2}ms<br>
      Fonksiyon Çağrıları: ${calls2}<br><br>
      <strong>Performans Artışı:</strong> ${((time1 / (parseFloat(time2) || 1)) * 100).toFixed(0)}x hızlandı<br><br>
      <em style="color:#666;">Memoization, tekrarlanan hesaplamaları optimize etmek için harika bir tekniktir</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

console.log('Advanced Functions konusu yüklendi!');
