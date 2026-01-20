// ===== setTimeout ve setInterval =====

let activeTimers = [];  // Tüm aktif timerları takip et

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// setTimeout örneği
function basicTimeout() {
  showOutput('setTimeout Örneği', 'Callback 2 saniye sonra çalışacak!');
  
  const timer = setTimeout(() => {
    const output = document.getElementById('output');
    output.innerHTML += '<div style="background:#d4edda;padding:10px;margin:10px 0;border-radius:4px;">✅ 2 saniye sonra çalıştı!</div>';
  }, 2000);
  
  activeTimers.push(timer);
}

// Geri Sayma
function countdown() {
  let count = 10;
  document.getElementById('display').textContent = count;
  showOutput('Geri Sayma', 'Sayaç 10\'dan başlıyor...');
  
  const timer = setInterval(() => {
    count--;
    document.getElementById('display').textContent = count;
    
    if (count < 0) {
      clearInterval(timer);
      document.getElementById('output').innerHTML = `
        <h3>Geri Sayma Bitti!</h3>
        <div style="background:#28a745;color:white;padding:20px;border-radius:4px;text-align:center;font-size:18px;">
          🎉 Sayaç Tamamlandı!
        </div>
      `;
    }
  }, 1000);
  
  activeTimers.push(timer);
}

// Animasyon örneği
function animation() {
  let position = 0;
  document.getElementById('display').textContent = position;
  
  let html = `
    <h3>Animasyon Başladı</h3>
    <div style="background:#e3f2fd;padding:15px;border-radius:4px;">
      <div style="background:#2196f3;height:20px;width:1%;border-radius:10px;" id="progress"></div>
      <p>İlerleme: <span id="percent">0</span>%</p>
    </div>
  `;
  document.getElementById('output').innerHTML = html;
  
  const timer = setInterval(() => {
    position += 5;
    document.getElementById('display').textContent = position;
    document.getElementById('progress').style.width = position + '%';
    document.getElementById('percent').textContent = position;
    
    if (position >= 100) {
      clearInterval(timer);
      document.getElementById('output').innerHTML += `
        <div style="background:#28a745;color:white;padding:15px;margin-top:10px;border-radius:4px;">
          ✅ Animasyon Tamamlandı!
        </div>
      `;
    }
  }, 100);
  
  activeTimers.push(timer);
}

function temizle() {
  // Tüm aktif timerları iptal et
  activeTimers.forEach(timer => {
    clearTimeout(timer);
    clearInterval(timer);
  });
  activeTimers = [];
  
  document.getElementById('display').textContent = '0';
  document.getElementById('output').innerHTML = '✓ Tüm timerlar durduruldu!';
}

console.log('Timers konusu yüklendi!');
