// ===== Fetch API - İnternet Üzerinden Veri Çekmek =====
// Fetch API ile sunucudan veri alma ve gönderme

// JSONPlaceholder test API URL'si
const API_URL = 'https://jsonplaceholder.typicode.com';

// ===== Yardımcı Fonksiyonlar =====
// Output gösterme fonksiyonu
function showOutput(title, content, type = 'info') {
  const output = document.getElementById('output');
  const className = type === 'error' ? 'error' : type === 'success' ? 'success' : '';
  output.innerHTML = `
    <h3>${title}</h3>
    <div class="${className}">${typeof content === 'object' ? JSON.stringify(content, null, 2) : content}</div>
  `;
}

// Loading mesajı
function showLoading(message) {
  document.getElementById('output').innerHTML = `<div class="loading">${message}</div>`;
}

// ===== 1. GET isteği - Kullanıcıları Çek =====
function fetchUsers() {
  showLoading('⏳ Kullanıcılar yükleniyor...');
  console.log('=== GET: Kullanıcıları Çek ===');
  
  // Fetch ile veri al
  fetch(`${API_URL}/users`)
    // 1. Adım: Response geldi, JSON'a çevir
    .then(response => {
      console.log('Response geldi:', response);
      console.log('Status:', response.status);
      console.log('OK:', response.ok);
      return response.json();
    })
    // 2. Adım: JSON verisi hazır, kullan
    .then(data => {
      console.log('Alınan veriler:', data);
      
      let html = '<h3>Kullanıcılar (İlk 5)</h3>';
      html += '<table border="1" style="width:100%; border-collapse:collapse;">';
      html += '<tr style="background:#f0f0f0;"><th>ID</th><th>Ad</th><th>E-mail</th></tr>';
      
      // İlk 5 kullanıcıyı listele
      data.slice(0, 5).forEach(user => {
        html += `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>`;
      });
      
      html += '</table>';
      showOutput('✅ Kullanıcılar Başarıyla Alındı', html, 'success');
    })
    // 3. Adım: Hata varsa yakala
    .catch(error => {
      console.error('Hata:', error);
      showOutput('❌ Hata Oluştu', error.message, 'error');
    });
}

// ===== 2. GET isteği - Yazıları Çek =====
function fetchPosts() {
  showLoading('⏳ Yazılar yükleniyor...');
  console.log('=== GET: Yazıları Çek ===');
  
  fetch(`${API_URL}/posts?_limit=5`)
    .then(res => res.json())
    .then(posts => {
      console.log('Yazılar:', posts);
      
      let html = '<h3>Blog Yazıları (İlk 5)</h3>';
      posts.forEach(post => {
        html += `
          <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 4px;">
            <h4>📝 ${post.title}</h4>
            <p>${post.body}</p>
            <small>Kullanıcı ID: ${post.userId} | Yazı ID: ${post.id}</small>
          </div>
        `;
      });
      
      showOutput('✅ Yazılar Başarıyla Alındı', html, 'success');
    })
    .catch(error => {
      console.error('Hata:', error);
      showOutput('❌ Hata Oluştu', error.message, 'error');
    });
}

// ===== 3. GET isteği - Detaylı Veri Çek =====
function fetchUserDetail() {
  showLoading('⏳ Detaylı bilgi yükleniyor...');
  console.log('=== GET: Detaylı Veri Çek ===');
  
  // Belirli bir kullanıcı al
  const userId = 3;
  
  Promise.all([
    fetch(`${API_URL}/users/${userId}`).then(r => r.json()),
    fetch(`${API_URL}/posts?userId=${userId}`).then(r => r.json())
  ])
    .then(([user, posts]) => {
      console.log('Kullanıcı:', user);
      console.log('Onun yazıları:', posts);
      
      const html = `
        <h3>👤 Kullanıcı Profili</h3>
        <table border="1" style="width:100%; border-collapse:collapse;">
          <tr style="background:#f0f0f0;"><th>Özellik</th><th>Değer</th></tr>
          <tr><td>Adı</td><td>${user.name}</td></tr>
          <tr><td>Kullanıcı Adı</td><td>${user.username}</td></tr>
          <tr><td>E-mail</td><td>${user.email}</td></tr>
          <tr><td>Telefon</td><td>${user.phone}</td></tr>
          <tr><td>Website</td><td>${user.website}</td></tr>
          <tr><td>Şirket</td><td>${user.company.name}</td></tr>
          <tr><td>Yazı Sayısı</td><td>${posts.length}</td></tr>
        </table>
      `;
      
      showOutput('✅ Detaylı Bilgi Alındı', html, 'success');
    })
    .catch(error => {
      console.error('Hata:', error);
      showOutput('❌ Hata Oluştu', error.message, 'error');
    });
}

// ===== 4. POST isteği - Yeni Veri Gönder =====
function postYeniKullanici() {
  showLoading('⏳ Yeni kullanıcı gönderiliyor...');
  console.log('=== POST: Yeni Kullanıcı Gönder ===');
  
  // Gönderilecek veri
  const yeniKullanici = {
    name: "Yeni Kullanıcı",
    username: "yenikullanici",
    email: "yeni@example.com",
    address: {
      street: "Atatürk Cad.",
      city: "İstanbul"
    },
    phone: "+90-555-1234567",
    website: "https://example.com",
    company: {
      name: "Tech Company"
    }
  };
  
  console.log('Gönderilen veri:', yeniKullanici);
  
  // POST isteği
  fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(yeniKullanici)
  })
    .then(res => {
      console.log('Response status:', res.status);
      return res.json();
    })
    .then(data => {
      console.log('Sunucunun yanıtı:', data);
      
      const html = `
        <h3>✅ Kullanıcı Başarıyla Oluşturuldu</h3>
        <h4>Gönderilen Veri:</h4>
        <pre>${JSON.stringify(yeniKullanici, null, 2)}</pre>
        <h4>Sunucunun Yanıtı:</h4>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <p><em>Not: JSONPlaceholder test API'si bu veriyi gerçekten kaydetmez, sadece simüle eder.</em></p>
      `;
      
      showOutput('POST İsteği Başarıyla Tamamlandı', html, 'success');
    })
    .catch(error => {
      console.error('Hata:', error);
      showOutput('❌ Hata Oluştu', error.message, 'error');
    });
}

// ===== 5. Hata Yönetimi =====
function errorOrnek() {
  showLoading('⏳ Hata yönetimi örneği çalışıyor...');
  console.log('=== Hata Yönetimi ===');
  
  // Var olmayan URL'ye iste
  fetch(`${API_URL}/users/99999`)
    .then(res => {
      // Status kodunu kontrol et
      console.log('Status:', res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      console.log('Veri alındı:', data);
      showOutput('Veri Alındı', data, 'success');
    })
    .catch(error => {
      console.error('Hatanın türü:', error.name);
      console.error('Hata mesajı:', error.message);
      
      const html = `
        <h3>❌ Hata Yakalandı</h3>
        <p><strong>Hata Adı:</strong> ${error.name}</p>
        <p><strong>Hata Mesajı:</strong> ${error.message}</p>
        <p><strong>Hata Açıklaması:</strong> İstenen kullanıcı bulunamadı (404)</p>
      `;
      
      showOutput('Hata Yönetimi', html, 'error');
    });
}

// ===== 6. Async/Await Örneği =====
async function asyncAwaitOrnek() {
  showLoading('⏳ Async/Await örneği çalışıyor...');
  console.log('=== Async/Await Örneği ===');
  
  try {
    // Adım 1: İlk istek (kullanıcı)
    console.log('Adım 1: Kullanıcı isteniyor...');
    const userResponse = await fetch(`${API_URL}/users/1`);
    const user = await userResponse.json();
    console.log('Kullanıcı alındı:', user);
    
    // Adım 2: İkinci istek (yazılar)
    console.log('Adım 2: Yazılar isteniyor...');
    const postsResponse = await fetch(`${API_URL}/posts?userId=${user.id}&_limit=3`);
    const posts = await postsResponse.json();
    console.log('Yazılar alındı:', posts);
    
    // Adım 3: Üçüncü istek (yorumlar)
    console.log('Adım 3: Yorumlar isteniyor...');
    const commentsResponse = await fetch(`${API_URL}/comments?postId=${posts[0].id}`);
    const comments = await commentsResponse.json();
    console.log('Yorumlar alındı:', comments);
    
    // Sonuçları göster
    let html = `
      <h3>✅ Async/Await Örneği Başarıyla Tamamlandı</h3>
      
      <h4>1️⃣ Kullanıcı</h4>
      <pre>${JSON.stringify(user, null, 2)}</pre>
      
      <h4>2️⃣ Yazılar (İlk 3)</h4>
      ${posts.map(p => `<p><strong>${p.title}</strong></p>`).join('')}
      
      <h4>3️⃣ İlk Yazının Yorumları</h4>
      <p>Toplam ${comments.length} yorum bulundu.</p>
    `;
    
    showOutput('Async/Await Başarıyla Tamamlandı', html, 'success');
    
  } catch (error) {
    console.error('Hata:', error);
    showOutput('❌ Hata Oluştu', error.message, 'error');
  }
}

// Temizle butonu
function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
  console.clear();
}

// Sayfa yüklendiğinde
console.log('Fetch API konusu yüklendi!');
console.log('Butonlara tıkla ve konsolu açık tut (F12)');
console.log('API Base URL:', API_URL);
