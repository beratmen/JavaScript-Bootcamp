// ===== Web Storage (localStorage & sessionStorage) =====

function saveData() {
  const key = document.getElementById('keyInput').value.trim();
  const value = document.getElementById('valueInput').value.trim();
  
  if (!key || !value) {
    alert('Lütfen anahtar ve değer girin!');
    return;
  }
  
  // localStorage'a kaydet
  localStorage.setItem(key, value);
  
  document.getElementById('keyInput').value = '';
  document.getElementById('valueInput').value = '';
  
  viewData();
}

function viewData() {
  let html = '<h3>localStorage Verileri</h3><table border="1" style="width:100%;border-collapse:collapse;">';
  html += '<tr style="background:#f0f0f0;"><th style="padding:10px;">Anahtar</th><th style="padding:10px;">Değer</th><th style="padding:10px;">İşlem</th></tr>';
  
  // localStorage tüm verileri göster
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    html += `
      <tr>
        <td style="padding:10px;"><code>${key}</code></td>
        <td style="padding:10px;"><code>${value}</code></td>
        <td style="padding:10px;">
          <button onclick="deleteItem('${key}')" style="background:#f44336;padding:5px 10px;">Sil</button>
        </td>
      </tr>
    `;
  }
  
  html += '</table>';
  if (localStorage.length === 0) {
    html = '<p style="color:#666;">localStorage\'da veri yok</p>';
  }
  
  document.getElementById('storageDisplay').innerHTML = html;
}

function deleteItem(key) {
  localStorage.removeItem(key);
  viewData();
}

function clearAll() {
  if (confirm('Tüm verileri silmek istediğiniz emin misiniz?')) {
    localStorage.clear();
    viewData();
  }
}

function useSessionStorage() {
  const testData = {
    user: 'Ahmet',
    timestamp: new Date().toLocaleTimeString(),
    message: 'Bu veri sadece bu oturumda kalır'
  };
  
  sessionStorage.setItem('sessionTest', JSON.stringify(testData));
  
  const retrieved = JSON.parse(sessionStorage.getItem('sessionTest'));
  
  let html = `
    <h3>sessionStorage Örneği</h3>
    <div style="background:#fff3cd;padding:15px;border-radius:4px;">
      <p><strong>Kaydedilen Veri:</strong></p>
      <pre>${JSON.stringify(testData, null, 2)}</pre>
      <p><strong>Alınan Veri:</strong></p>
      <pre>${JSON.stringify(retrieved, null, 2)}</pre>
      <p style="color:#666;font-size:12px;margin-top:10px;">
        ℹ️ SessionStorage verileri tarayıcı sekmesi kapandığında silinir.
      </p>
    </div>
  `;
  
  document.getElementById('storageDisplay').innerHTML = html;
}

// Sayfa yüklendiğinde verileri göster
window.addEventListener('load', () => {
  console.log('Web Storage konusu yüklendi!');
  viewData();
});
