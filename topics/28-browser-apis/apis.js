// ===== Browser APIs =====

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// 1. Geolocation API
function checkGeolocation() {
  if (!navigator.geolocation) {
    showOutput('Geolocation API', '❌ Tarayıcınız Geolocation API\'yi desteklemiyor');
    return;
  }
  
  showOutput('Geolocation API', '⏳ Konum alınıyor (izin veriniz)...');
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const {latitude, longitude, accuracy} = position.coords;
      const html = `
        <h3>Konum Bilgisi</h3>
        <div style="background:#d4edda;padding:15px;border-radius:4px;">
          <strong>Enlem (Latitude):</strong> ${latitude.toFixed(6)}<br>
          <strong>Boylam (Longitude):</strong> ${longitude.toFixed(6)}<br>
          <strong>Doğruluk (Accuracy):</strong> ${accuracy.toFixed(2)} meter<br><br>
          <em style="color:#666;">Bu bilgiler Google Haritalar veya başka harita API'lerine gönderilebilir.</em>
        </div>
      `;
      document.getElementById('output').innerHTML = html;
    },
    (error) => {
      let errorMsg = '';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMsg = 'Konum izni reddedildi';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg = 'Konum bilgisi mevcut değil';
          break;
        case error.TIMEOUT:
          errorMsg = 'Konum isteği zaman aşımına uğradı';
          break;
      }
      showOutput('Geolocation API', `❌ Hata: ${errorMsg}`);
    }
  );
}

// 2. Notifications API
function checkNotifications() {
  if (!('Notification' in window)) {
    showOutput('Notifications API', '❌ Tarayıcınız Notifications API\'yi desteklemiyor');
    return;
  }
  
  if (Notification.permission === 'granted') {
    sendNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        sendNotification();
      }
    });
  } else {
    showOutput('Notifications API', 'ℹ️ Bildirim izni verilmemiş. Tarayıcı ayarlarından etkinleştirin.');
  }
  
  function sendNotification() {
    new Notification('JavaScript Bootcamp', {
      body: 'Bu bir test bildirimidir!',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📢</text></svg>'
    });
    
    showOutput('Notifications API', '✅ Bildirim gönderildi! (Sağ üst köşeyi kontrol edin)');
  }
}

// 3. Vibration API
function checkVibration() {
  if (!navigator.vibrate) {
    showOutput('Vibration API', '❌ Cihazınız titreş API\'yi desteklemiyor (masaüstü bilgisayarlar)');
    return;
  }
  
  // Titreş desenini dene
  navigator.vibrate([100, 200, 100, 200, 100]);
  
  let html = `
    <h3>Vibration API</h3>
    <div style="background:#d1c4e9;padding:15px;border-radius:4px;">
      <p>✅ Titreş paterni gönderildi: [100, 200, 100, 200, 100] ms</p>
      <p style="font-size:12px;color:#666;">
        Mobil cihazlarda titreş hissedilecektir.<br>
        Desen: titreş 100ms → dur 200ms → titreş 100ms → dur 200ms → titreş 100ms
      </p>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 4. FileReader API
function checkFileReader() {
  if (!window.FileReader) {
    showOutput('FileReader API', '❌ Tarayıcınız FileReader API\'yi desteklemiyor');
    return;
  }
  
  const fileInput = document.getElementById('fileInput');
  
  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const content = event.target.result;
      const preview = content.length > 200 ? content.substring(0, 200) + '...' : content;
      
      let html = `
        <h3>Dosya Bilgisi</h3>
        <div style="background:#e0f2f1;padding:15px;border-radius:4px;">
          <strong>Dosya Adı:</strong> ${file.name}<br>
          <strong>Dosya Türü:</strong> ${file.type || 'Belirtilmemiş'}<br>
          <strong>Dosya Boyutu:</strong> ${(file.size / 1024).toFixed(2)} KB<br><br>
          <strong>İçerik (İlk 200 karakter):</strong><br>
          <pre>${preview}</pre>
        </div>
      `;
      
      document.getElementById('output').innerHTML = html;
    };
    
    reader.readAsText(file);
  };
  
  // Dosya seçme diyalogunu aç
  fileInput.click();
  
  showOutput('FileReader API', '📂 Bir dosya seçiniz (metin dosyası önerilir)...');
}

console.log('Browser APIs konusu yüklendi!');
