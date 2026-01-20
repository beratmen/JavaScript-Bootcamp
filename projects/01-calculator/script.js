// ===== Hesap Makinesi - JavaScript =====
// Dört işlem yapabilen, görsel olarak güzel bir hesap makinesi

// Hesap makinesi state'i
let displayValue = '0';        // Ekranda gösterilen değer
let firstOperand = null;       // İlk sayı
let operator = null;           // Operatör (+, -, ×, ÷, %)
let shouldResetDisplay = false; // Sonraki sayıdan önce sıfırla mı?
let previousOperator = null;   // Önceki operatör (zincir işlemleri için)

// Display elemanı
const display = document.getElementById('display');

// ===== 1. Sayı Ekleme =====
/**
 * Sayı veya nokta ekler
 * @param {string} num - Eklenecek sayı (0-9) veya nokta (.)
 */
function appendNumber(num) {
  // Eğer reset yapılması gerekiyorsa, yeni sayıya başla
  if (shouldResetDisplay) {
    displayValue = num;
    shouldResetDisplay = false;
  } else {
    // Mevcut değere ekle (0 ise değiştir)
    displayValue = displayValue === '0' ? num : displayValue + num;
  }
  
  // Virgül için kontrol (bir tane virgül olsun)
  if (num === '.') {
    if (displayValue.includes('.')) {
      displayValue = displayValue.slice(0, -1); // Fazlayı sil
    }
  }
  
  updateDisplay();
  console.log('Sayı eklendi:', num, '| Display:', displayValue);
}

// ===== 2. Operatör Ekleme =====
/**
 * Operatör işlemini yönetir
 * @param {string} op - Operatör (+, -, ×, ÷, %)
 */
function appendOperator(op) {
  const currentValue = parseFloat(displayValue);
  
  console.log('Operatör:', op, '| Mevcut Değer:', currentValue);
  
  // Eğer bir operatör zaten varsa, önce onu hesapla
  if (operator !== null && !shouldResetDisplay) {
    const result = performOperation(firstOperand, currentValue, operator);
    displayValue = String(result);
    firstOperand = result;
  } else {
    // İlk operandı kaydet
    firstOperand = currentValue;
  }
  
  // Yeni operatörü kaydet
  operator = op;
  previousOperator = op;
  shouldResetDisplay = true;
  
  updateDisplay();
  console.log('Operator kaydedildi:', operator);
}

// ===== 3. İşlemi Gerçekleştir =====
/**
 * İki sayı arasında işlemi gerçekleştirir
 * @param {number} first - İlk operand
 * @param {number} second - İkinci operand
 * @param {string} op - Operatör
 * @returns {number} İşlem sonucu
 */
function performOperation(first, second, op) {
  console.log(`İşlem: ${first} ${op} ${second}`);
  
  let result;
  
  switch (op) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '×':
      result = first * second;
      break;
    case '÷':
      result = second !== 0 ? first / second : 0;
      if (second === 0) {
        alert('❌ Hata: Sıfıra bölünemez!');
      }
      break;
    case '%':
      result = first % second;
      break;
    default:
      result = second;
  }
  
  // Sonucu sınırla ve yuvarla (ondalık hatalarını önle)
  result = Math.round(result * 1000000) / 1000000;
  
  console.log('Sonuç:', result);
  return result;
}

// ===== 4. Eşittir Butonu =====
/**
 * Hesaplamayı tamamlar ve sonucu gösterir
 */
function calculate() {
  const currentValue = parseFloat(displayValue);
  
  // Eğer operatör yoksa, hiçbir şey yapma
  if (operator === null) {
    return;
  }
  
  console.log('=== HESAPLAMA ===');
  console.log('İlk:', firstOperand, 'İkinci:', currentValue, 'Operatör:', operator);
  
  // İşlemi gerçekleştir
  const result = performOperation(firstOperand, currentValue, operator);
  
  // Sonucu göster
  displayValue = String(result);
  updateDisplay();
  
  // State'i sıfırla
  firstOperand = null;
  operator = null;
  shouldResetDisplay = true;
  previousOperator = null;
  
  console.log('Sonuç gösterildi:', result);
}

// ===== 5. Temizle Butonu =====
/**
 * Tüm değerleri sıfırlar
 */
function clearDisplay() {
  console.log('=== TEMIZLE ===');
  
  displayValue = '0';
  firstOperand = null;
  operator = null;
  shouldResetDisplay = false;
  previousOperator = null;
  
  updateDisplay();
  console.log('Hesap makinesi sıfırlandı');
}

// ===== 6. Sil (Backspace) Butonu =====
/**
 * Son haneden silme işlemi
 */
function deleteLast() {
  console.log('Silme işlemi - Mevcut:', displayValue);
  
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  
  updateDisplay();
  console.log('Silme sonrası:', displayValue);
}

// ===== 7. Display Güncelle =====
/**
 * Ekrandaki değeri günceller
 */
function updateDisplay() {
  display.value = displayValue;
  
  // Çok uzun sayıları yönet
  if (displayValue.length > 12) {
    display.style.fontSize = '1.5em';
  } else {
    display.style.fontSize = '2.5em';
  }
}

// ===== 8. Tuş Takımı Desteği =====
/**
 * Bilgisayar tuş takımı ile kontrol
 */
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Rakamlar
  if (key >= '0' && key <= '9') {
    appendNumber(key);
  }
  // Operatörler
  else if (key === '+') {
    appendOperator('+');
  } else if (key === '-') {
    appendOperator('-');
  } else if (key === '*') {
    appendOperator('×');
  } else if (key === '/') {
    event.preventDefault(); // Sayfanın kaydırılmasını önle
    appendOperator('÷');
  } else if (key === '%') {
    appendOperator('%');
  }
  // Diğer tuşlar
  else if (key === '.') {
    appendNumber('.');
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    deleteLast();
  } else if (key === 'Escape' || key === 'c' || key === 'C') {
    clearDisplay();
  }
});

// ===== İlklendirme =====
console.log('🧮 Hesap Makinesi Başlatıldı');
console.log('Tuş Takımı Desteği: Açık');
updateDisplay();

// Ek Açıklamalar:
// 1. State Yönetimi: firstOperand, operator, shouldResetDisplay
// 2. Zincir İşlemleri: Operatör sırasında bir önceki işlemi hemen hesapla
// 3. Hata Yönetimi: Sıfıra bölme kontrol
// 4. Ondalık Hatalar: Yaklaşık değerler (1000000 ile çarp/böl)
// 5. Tuş Takımı: Enter, Escape, + - * / % . Backspace
