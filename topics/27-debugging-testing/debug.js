// ===== Debugging & Testing =====

// Basit Assert Fonksiyonu
function assert(condition, message, testResults) {
  if (condition) {
    testResults.push({
      message: `✅ ${message}`,
      passed: true
    });
  } else {
    testResults.push({
      message: `❌ ${message}`,
      passed: false
    });
  }
}

// Örnek Fonksiyonlar
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function isEven(num) {
  return num % 2 === 0;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Unit Tests Çalıştır
function runUnitTests() {
  const testResults = [];
  
  // Add Fonksiyonu Tests
  console.log('--- Add Tests ---');
  assert(add(2, 3) === 5, 'add(2, 3) should return 5', testResults);
  assert(add(-1, 1) === 0, 'add(-1, 1) should return 0', testResults);
  assert(add(0, 0) === 0, 'add(0, 0) should return 0', testResults);
  
  // Multiply Tests
  console.log('--- Multiply Tests ---');
  assert(multiply(3, 4) === 12, 'multiply(3, 4) should return 12', testResults);
  assert(multiply(-2, 3) === -6, 'multiply(-2, 3) should return -6', testResults);
  assert(multiply(0, 100) === 0, 'multiply(0, 100) should return 0', testResults);
  
  // isEven Tests
  console.log('--- isEven Tests ---');
  assert(isEven(4) === true, 'isEven(4) should return true', testResults);
  assert(isEven(5) === false, 'isEven(5) should return false', testResults);
  assert(isEven(0) === true, 'isEven(0) should return true', testResults);
  
  // reverseString Tests
  console.log('--- reverseString Tests ---');
  assert(reverseString('hello') === 'olleh', 'reverseString("hello") should return "olleh"', testResults);
  assert(reverseString('abc') === 'cba', 'reverseString("abc") should return "cba"', testResults);
  
  displayTestResults(testResults);
}

// Test Sonuçlarını Göster
function displayTestResults(testResults) {
  let html = '<h3>Test Sonuçları</h3>';
  
  let passed = 0;
  let failed = 0;
  
  testResults.forEach(test => {
    const className = test.passed ? 'test-result pass' : 'test-result fail';
    html += `<div class="${className}">${test.message}</div>`;
    if (test.passed) passed++;
    else failed++;
  });
  
  const percentage = ((passed / testResults.length) * 100).toFixed(2);
  html += `<div style="margin-top:20px;padding:15px;background:#e3f2fd;border-radius:4px;">
    <strong>Özet:</strong> ${passed} geçti / ${failed} başarısız (${percentage}% başarı)
  </div>`;
  
  document.getElementById('output').innerHTML = html;
  
  // Console'a da yazdır
  console.log(`Tests: ${passed} passed, ${failed} failed (${percentage}% success)`);
}

// Debug Bilgileri Göster
function showDebugInfo() {
  const debugInfo = {
    'Sayfanın URL\'i': window.location.href,
    'Tarayıcı': navigator.userAgent,
    'Ekran Genişliği': window.innerWidth,
    'Ekran Yüksekliği': window.innerHeight,
    'JavaScript Etkin': typeof window.eval === 'function',
    'localStorage Mevcut': typeof localStorage !== 'undefined',
    'sessionStorage Mevcut': typeof sessionStorage !== 'undefined'
  };
  
  let html = '<h3>Debug Bilgileri</h3>';
  html += '<table border="1" style="width:100%;border-collapse:collapse;">';
  html += '<tr style="background:#f0f0f0;"><th style="padding:10px;">Özellik</th><th style="padding:10px;">Değer</th></tr>';
  
  for (const [key, value] of Object.entries(debugInfo)) {
    html += `<tr><td style="padding:10px;">${key}</td><td style="padding:10px;"><code>${value}</code></td></tr>`;
  }
  
  html += '</table>';
  
  document.getElementById('output').innerHTML = html;
}

// Console Metotları Göster
function consoleMethods() {
  let html = '<h3>Console Metotları Örneği</h3>';
  
  // console.log
  console.log('✓ Bu bir log mesajıdır');
  html += '<div class="test-result pass">console.log() - Basit bilgi yazdırma</div>';
  
  // console.warn
  console.warn('⚠️ Bu bir uyarı mesajıdır');
  html += '<div class="test-result pass">console.warn() - Uyarı mesajı</div>';
  
  // console.error
  console.error('❌ Bu bir hata mesajıdır');
  html += '<div class="test-result fail">console.error() - Hata mesajı</div>';
  
  // console.table
  const userData = [
    { isim: 'Ahmet', yaş: 25, şehir: 'İstanbul' },
    { isim: 'Zeynep', yaş: 30, şehir: 'Ankara' },
    { isim: 'Ali', yaş: 28, şehir: 'İzmir' }
  ];
  console.table(userData);
  
  // console.group
  console.group('Gruplandırılmış Mesajlar');
  console.log('Mesaj 1');
  console.log('Mesaj 2');
  console.groupEnd();
  
  html += '<div style="background:#f0f0f0;padding:15px;border-radius:4px;margin-top:15px;">';
  html += '<strong>Console Metotları:</strong><br>';
  html += '• console.log() - Normal mesaj<br>';
  html += '• console.warn() - Uyarı<br>';
  html += '• console.error() - Hata<br>';
  html += '• console.table() - Tablo formatında<br>';
  html += '• console.group() - Gruplandırma<br>';
  html += '• console.time() - Zaman ölçümü<br>';
  html += '<p style="font-size:12px;color:#666;margin-top:10px;">💡 Bütün bu metotları F12 Console sekmesinde görebilirsiniz.</p>';
  html += '</div>';
  
  document.getElementById('output').innerHTML = html;
}

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
  console.log('Debugging & Testing konusu yüklendi!');
});
