// ===== Closures (Kapanışlar) =====
// Dış fonksiyonun değişkenlerine erişebilen iç fonksiyon

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// ===== 1. TEMEL CLOSURE =====
function basicClosure() {
  console.log('=== TEMEL CLOSURE ===');
  
  // Dış fonksiyon
  function outer(x) {
    console.log('outer çağırıldı, x =', x);
    
    // İç fonksiyon (closure)
    function inner(y) {
      console.log('inner çağırıldı, y =', y);
      console.log('outer\'ın x\'ine erişim:', x);
      return x + y;
    }
    
    return inner;
  }
  
  // outer fonksiyonunu çağır ve inner fonksiyonunu döndür
  const add5 = outer(5);
  const add10 = outer(10);
  
  console.log('add5(3) =', add5(3));   // 5 + 3 = 8
  console.log('add5(7) =', add5(7));   // 5 + 7 = 12
  console.log('add10(3) =', add10(3)); // 10 + 3 = 13
  
  let html = `
    <h3>🔐 Temel Closure</h3>
    <div style="background: #f0f8ff; padding: 15px; border-radius: 4px;">
      <strong>Kod:</strong><br>
      <code>function outer(x) {<br>
      &nbsp;&nbsp;function inner(y) {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;return x + y;<br>
      &nbsp;&nbsp;}<br>
      &nbsp;&nbsp;return inner;<br>
      }</code><br><br>
      <strong>Sonuçlar:</strong><br>
      const add5 = outer(5);<br>
      add5(3) = <strong>8</strong><br>
      add5(7) = <strong>12</strong><br><br>
      const add10 = outer(10);<br>
      add10(3) = <strong>13</strong><br><br>
      <strong>💡 Her closure kendi x değerini hatırlar!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// ===== 2. COUNTER ÖRNEĞİ =====
function counterExample() {
  console.log('=== COUNTER ÖRNEĞİ ===');
  
  // Closure kullanarak sayaç oluştur
  function createCounter(startValue = 0) {
    let count = startValue; // Private değişken
    
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      },
      reset: function() {
        count = startValue;
        return count;
      }
    };
  }
  
  // İki ayrı sayaç oluştur
  const counter1 = createCounter(0);
  const counter2 = createCounter(100);
  
  console.log('counter1.increment():', counter1.increment()); // 1
  console.log('counter1.increment():', counter1.increment()); // 2
  console.log('counter1.getCount():', counter1.getCount());   // 2
  
  console.log('counter2.getCount():', counter2.getCount());   // 100
  console.log('counter2.decrement():', counter2.decrement()); // 99
  
  let html = `
    <h3>📊 Counter (Sayaç) Örneği</h3>
    <div style="background: #fff3cd; padding: 15px; border-radius: 4px;">
      <strong>counter1 işlemleri:</strong><br>
      increment() → <strong>1</strong><br>
      increment() → <strong>2</strong><br>
      getCount() → <strong>2</strong><br><br>
      
      <strong>counter2 işlemleri:</strong><br>
      getCount() → <strong>100</strong><br>
      decrement() → <strong>99</strong><br><br>
      
      <strong>💡 count değişkeni özel (private) olup sadece<br>
      dönen metodlar aracılığıyla erişilir!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// ===== 3. VERİ GİZLEME =====
function dataPrivacy() {
  console.log('=== VERİ GİZLEME ===');
  
  // User nesnesini closure ile oluştur
  function createBankAccount(initialBalance = 0) {
    let balance = initialBalance; // Private - dışardan doğrudan erişilemez
    let transactions = [];         // Private - dışardan doğrudan erişilemez
    
    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          transactions.push({ type: 'Deposit', amount, date: new Date() });
          return `Yatırıldı: ${amount}₺. Yeni bakiye: ${balance}₺`;
        }
        return 'Geçersiz miktar!';
      },
      
      withdraw: function(amount) {
        if (amount > balance) {
          return 'Yetersiz bakiye!';
        }
        if (amount > 0) {
          balance -= amount;
          transactions.push({ type: 'Withdraw', amount, date: new Date() });
          return `Çekildi: ${amount}₺. Yeni bakiye: ${balance}₺`;
        }
        return 'Geçersiz miktar!';
      },
      
      getBalance: function() {
        return balance;
      },
      
      getTransactionCount: function() {
        return transactions.length;
      }
    };
  }
  
  // Banka hesabı oluştur
  const account = createBankAccount(1000);
  
  console.log(account.deposit(500));      // Yatırıldı
  console.log(account.withdraw(200));     // Çekildi
  console.log('Bakiye:', account.getBalance()); // 1300
  console.log('İşlem sayısı:', account.getTransactionCount()); // 2
  
  // Bu çalışmaz (private erişim)
  console.log('account.balance:', account.balance); // undefined
  
  let html = `
    <h3>🏦 Veri Gizleme (Data Privacy)</h3>
    <div style="background: #d4edda; padding: 15px; border-radius: 4px;">
      <strong>İşlemler:</strong><br>
      deposit(500) → "Yatırıldı: 500₺. Yeni bakiye: 1500₺"<br>
      withdraw(200) → "Çekildi: 200₺. Yeni bakiye: 1300₺"<br>
      getBalance() → <strong>1300</strong><br>
      getTransactionCount() → <strong>2</strong><br><br>
      
      <strong>❌ Doğrudan Erişim Yasaklı:</strong><br>
      account.balance → <strong>undefined</strong><br>
      account.transactions → <strong>undefined</strong><br><br>
      
      <strong>💡 Private değişkenler sadece metodlar<br>
      aracılığıyla erişilebilir - Daha güvenli!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// ===== 4. LOOP PROBLEMI =====
function loopProblem() {
  console.log('=== LOOP PROBLEMI ===');
  
  let html = '<h3>🔄 Loop & Closure Problemi</h3>';
  
  // ❌ HATALÜ: var ile
  html += '<div style="background: #f8d7da; padding: 10px; margin: 10px 0; border-radius: 4px;">';
  html += '<strong>❌ YANLIŞ (var ile):</strong><br>';
  html += '<code>for (var i = 0; i < 3; i++) {<br>';
  html += '&nbsp;&nbsp;button.addEventListener("click", () => {<br>';
  html += '&nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br>';
  html += '&nbsp;&nbsp;});<br>';
  html += '}</code><br>';
  html += 'Sonuç: Tüm buttonlar 3 yazdırır!<br>';
  html += '(i global olduğu için döngü sonrası değeri 3\'tür)<br>';
  html += '</div>';
  
  // ✅ DOĞRU: let ile
  html += '<div style="background: #d4edda; padding: 10px; margin: 10px 0; border-radius: 4px;">';
  html += '<strong>✅ DOĞRU (let ile):</strong><br>';
  html += '<code>for (let i = 0; i < 3; i++) {<br>';
  html += '&nbsp;&nbsp;button.addEventListener("click", () => {<br>';
  html += '&nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br>';
  html += '&nbsp;&nbsp;});<br>';
  html += '}</code><br>';
  html += 'Sonuç: Button 0 → "0", Button 1 → "1", Button 2 → "2"<br>';
  html += '(let block scope olduğu için her döngüde yeni i)<br>';
  html += '</div>';
  
  // ✅ ALTERNATİF: Closure ile
  html += '<div style="background: #d1ecf1; padding: 10px; margin: 10px 0; border-radius: 4px;">';
  html += '<strong>✅ ALTERNATİF (Closure ile):</strong><br>';
  html += '<code>for (var i = 0; i < 3; i++) {<br>';
  html += '&nbsp;&nbsp;(function(index) {<br>';
  html += '&nbsp;&nbsp;&nbsp;&nbsp;button.addEventListener("click", () => {<br>';
  html += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(index);<br>';
  html += '&nbsp;&nbsp;&nbsp;&nbsp;});<br>';
  html += '&nbsp;&nbsp;})(i);<br>';
  html += '}</code><br>';
  html += 'Sonuç: Her button kendi index değerini hatırlar<br>';
  html += '(IIFE closure ile her i değerini yakalar)<br>';
  html += '</div>';
  
  document.getElementById('output').innerHTML = html;
}

function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
  console.clear();
}

console.log('Closures konusu yüklendi!');
