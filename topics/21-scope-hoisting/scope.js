// ===== Scope & Hoisting =====
// JavaScript'in değişken ve fonksiyon kapsamını anlamak

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// ===== 1. SCOPE DEMO =====
function scopeDemo() {
  console.log('=== SCOPE DEMO ===');
  
  // Global Scope
  var globalVar = "GLOBAL";
  
  function outerFunc() {
    // Function Scope
    var functionVar = "FUNCTION";
    
    if (true) {
      // Block Scope
      let blockVar = "BLOCK";
      const blockConst = "BLOCK CONST";
      
      console.log('Block içinde:');
      console.log('- globalVar:', globalVar);
      console.log('- functionVar:', functionVar);
      console.log('- blockVar:', blockVar);
      console.log('- blockConst:', blockConst);
    }
    
    // blockVar block dışında erişilemez
    console.log('Block dışında blockVar tanımlanmış mı?', typeof blockVar);
  }
  
  outerFunc();
  
  // functionVar global scope'tan erişilemez
  console.log('globalVar global scope\'tan:', globalVar);
  console.log('functionVar global scope\'tan:', typeof functionVar);
  
  let html = `
    <h3>📍 Scope Demosu</h3>
    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0;">
      <strong>Global Scope:</strong><br>
      globalVar = "${globalVar}"<br><br>
      <strong>Function Scope:</strong><br>
      functionVar = "FUNCTION" (sadece fonksiyon içinde)<br><br>
      <strong>Block Scope:</strong><br>
      blockVar = "BLOCK" (if bloku içinde)<br><br>
      <strong>Sonuç:</strong> let/const block scope, var function scope!
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// ===== 2. HOISTING DEMO =====
function hoistingDemo() {
  console.log('=== HOISTING DEMO ===');
  
  let html = '<h3>🚀 Hoisting Demosu</h3>';
  
  // VAR HOİSTING
  html += '<h4>var Hoisting:</h4>';
  html += '<div style="background:#fff3cd; padding:10px; border-radius:4px;">';
  
  console.log('--- VAR HOİSTING ---');
  console.log('Kod: console.log(x); var x = 5;');
  console.log('Sonuç: undefined (hoisted fakat değer atanmadı)');
  
  // Aslında bu kod şöyle çalışıyor:
  // var x; (hoisted)
  // console.log(x); // undefined
  // x = 5;
  
  html += '<strong>var x = 5;</strong><br>';
  html += 'console.log(x) ÖNCE yazılsa: <strong>undefined</strong><br>';
  html += '(Bildirim hoisted, değer hoisted değil)<br>';
  html += '</div>';
  
  // FONKSİYON HOİSTING
  html += '<h4>Fonksiyon Hoisting:</h4>';
  html += '<div style="background:#d4edda; padding:10px; border-radius:4px;">';
  
  console.log('--- FONKSİYON HOİSTING ---');
  
  // Bu çalışır (fonksiyon hoisted)
  const result = demoFunction();
  console.log('Fonksiyon çağrısı öncesinden:', result);
  
  html += `<strong>Fonksiyon Çağrısı:</strong><br>
    Fonksiyon bildirilmeden çağrılsa da çalışır!<br>
    Sonuç: "${result}"<br>`;
  html += '</div>';
  
  // LET/CONST HOİSTING (TDZ)
  html += '<h4>let/const Hoisting (Temporal Dead Zone):</h4>';
  html += '<div style="background:#f8d7da; padding:10px; border-radius:4px;">';
  html += '<strong>let y = 10;</strong><br>';
  html += 'console.log(y) ÖNCE yazılsa: <strong>ReferenceError</strong><br>';
  html += '(Erişilemez zona - Temporal Dead Zone)<br>';
  html += '</div>';
  
  document.getElementById('output').innerHTML = html;
}

function demoFunction() {
  return "Fonksiyon hoisted!";
}

// ===== 3. VAR VS LET VS CONST =====
function varVsLetConst() {
  console.log('=== VAR VS LET VS CONST ===');
  
  let html = '<h3>🔄 var vs let vs const Karşılaştırması</h3>';
  html += '<table border="1" style="width:100%; border-collapse:collapse;">';
  html += '<tr style="background:#f0f0f0;"><th>Özellik</th><th>var</th><th>let</th><th>const</th></tr>';
  
  const comparison = [
    {prop: 'Scope', var: 'Function', let: 'Block', const: 'Block'},
    {prop: 'Hoisting', var: 'undefined', let: 'ReferenceError (TDZ)', const: 'ReferenceError (TDZ)'},
    {prop: 'Yeniden Bildirme', var: '✅ Evet', let: '❌ Hayır', const: '❌ Hayır'},
    {prop: 'Yeniden Atama', var: '✅ Evet', let: '✅ Evet', const: '❌ Hayır'},
    {prop: 'Başlangıç Değeri', var: 'İsteğe Bağlı', let: 'İsteğe Bağlı', const: 'Gerekli'},
  ];
  
  comparison.forEach(item => {
    html += `<tr>
      <td><strong>${item.prop}</strong></td>
      <td>${item.var}</td>
      <td>${item.let}</td>
      <td>${item.const}</td>
    </tr>`;
  });
  
  html += '</table>';
  
  // Pratik Örnekler
  html += '<h4>Pratik Örnekler:</h4>';
  
  // var döngü problemi
  html += '<div style="background:#ffe0e0; padding:10px; margin:10px 0; border-radius:4px;">';
  html += '<strong>var ile Döngü Problemi:</strong><br>';
  html += '<code>for (var i = 0; i < 3; i++) { ... }</code><br>';
  html += 'Döngü sonrası i = 3 (global scope\'ta kalır)<br>';
  html += '</div>';
  
  html += '<div style="background:#e0ffe0; padding:10px; margin:10px 0; border-radius:4px;">';
  html += '<strong>let ile Düzeltme:</strong><br>';
  html += '<code>for (let i = 0; i < 3; i++) { ... }</code><br>';
  html += 'Döngü sonrası i tanımlanmaz (block scope)<br>';
  html += '</div>';
  
  document.getElementById('output').innerHTML = html;
}

// ===== 4. SCOPE CHAIN =====
function scopeChain() {
  console.log('=== SCOPE CHAIN ===');
  
  let html = '<h3>⛓️ Scope Chain (Kapsam Zinciri)</h3>';
  
  var global = "GLOBAL";
  
  function level1() {
    var level1Var = "LEVEL 1";
    
    function level2() {
      var level2Var = "LEVEL 2";
      
      function level3() {
        var level3Var = "LEVEL 3";
        
        // Scope chain'in tamamına erişim
        console.log('level3Var:', level3Var);
        console.log('level2Var:', level2Var);
        console.log('level1Var:', level1Var);
        console.log('global:', global);
        
        return {
          level3: level3Var,
          level2: level2Var,
          level1: level1Var,
          global: global
        };
      }
      
      return level3();
    }
    
    return level2();
  }
  
  const result = level1();
  
  html += `
    <div style="border-left: 4px solid #007bff; padding: 15px; background: #f0f8ff;">
      <h4>Fonksiyon Hiyerarşisi:</h4>
      <code>
        global
        ├── level1()
        │   ├── level1Var
        │   ├── level2()
        │   │   ├── level2Var
        │   │   └── level3()
        │   │       ├── level3Var
        │   │       └── ⭐ Tüm değişkenlere erişim
      </code>
      <h4>Erişilebilir Değişkenler (level3 içinden):</h4>
      <pre>${JSON.stringify(result, null, 2)}</pre>
      <p><strong>💡 Not:</strong> İç fonksiyon dış fonksiyonun değişkenlerine erişebilir!</p>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
  console.clear();
}

console.log('Scope & Hoisting konusu yüklendi!');
