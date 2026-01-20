// ===== REST API'ları Kullanmak =====
// CRUD (Create, Read, Update, Delete) işlemleri

const API_URL = 'https://jsonplaceholder.typicode.com';

function showOutput(title, content) {
  const output = document.getElementById('output');
  const formattedContent = typeof content === 'object' 
    ? JSON.stringify(content, null, 2) 
    : content;
  output.innerHTML = `<h3>${title}</h3><pre>${formattedContent}</pre>`;
}

// ===== GET: Verileri Oku =====
function getOperation() {
  console.log('=== GET İşlemi ===');
  showOutput('⏳ GET isteği gönderiliyor...', 'Lütfen bekleyin...');
  
  // Tüm yazıları al
  fetch(`${API_URL}/posts?_limit=2`)
    .then(res => res.json())
    .then(posts => {
      console.log('GET başarılı:', posts);
      
      let html = '<h3>✅ GET İşlemi Başarıyla Tamamlandı</h3>';
      html += '<p><strong>HTTP İsteği:</strong> GET ' + `${API_URL}/posts?_limit=2` + '</p>';
      html += '<p><strong>Status:</strong> 200 OK</p>';
      html += '<p><strong>Dönen Veriler:</strong></p>';
      
      posts.forEach(post => {
        html += `
          <div style="background:#f9f9f9; padding:10px; margin:10px 0; border-radius:4px;">
            <strong>ID ${post.id}:</strong> ${post.title}
          </div>
        `;
      });
      
      showOutput('', html);
    });
}

// ===== POST: Yeni Veri Oluştur =====
function postOperation() {
  console.log('=== POST İşlemi ===');
  showOutput('⏳ POST isteği gönderiliyor...', 'Lütfen bekleyin...');
  
  // Yeni yazı oluştur
  const yeniYazi = {
    title: "JavaScript REST API Öğreniyor",
    body: "REST API'ları kullanarak veri göndermek çok eğlenceli!",
    userId: 1
  };
  
  console.log('Gönderilen veri:', yeniYazi);
  
  fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(yeniYazi)
  })
    .then(res => res.json())
    .then(data => {
      console.log('POST başarılı:', data);
      
      let html = '<h3>✅ POST İşlemi Başarıyla Tamamlandı</h3>';
      html += '<p><strong>HTTP İsteği:</strong> POST ' + `${API_URL}/posts` + '</p>';
      html += '<p><strong>Status:</strong> 201 Created</p>';
      html += '<p><strong>Gönderilen Veri:</strong></p>';
      html += '<pre>' + JSON.stringify(yeniYazi, null, 2) + '</pre>';
      html += '<p><strong>Sunucunun Yanıtı:</strong></p>';
      html += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
      html += '<p><em>Not: Yeni ID = ' + data.id + ' (Sunucu tarafından atandı)</em></p>';
      
      showOutput('', html);
    });
}

// ===== PUT: Veri Güncelle =====
function putOperation() {
  console.log('=== PUT İşlemi ===');
  showOutput('⏳ PUT isteği gönderiliyor...', 'Lütfen bekleyin...');
  
  // Yazıyı tamamen güncelle
  const guncellenmiş = {
    id: 1,
    title: "Bu yazı güncellendi!",
    body: "PUT işlemi ile yazı içeriği tamamen değiştirildi.",
    userId: 1
  };
  
  console.log('Gönderilen veri:', guncellenmiş);
  
  fetch(`${API_URL}/posts/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guncellenmiş)
  })
    .then(res => res.json())
    .then(data => {
      console.log('PUT başarılı:', data);
      
      let html = '<h3>✅ PUT İşlemi Başarıyla Tamamlandı</h3>';
      html += '<p><strong>HTTP İsteği:</strong> PUT ' + `${API_URL}/posts/1` + '</p>';
      html += '<p><strong>Status:</strong> 200 OK</p>';
      html += '<p><strong>Gönderilen Veri:</strong></p>';
      html += '<pre>' + JSON.stringify(guncellenmiş, null, 2) + '</pre>';
      html += '<p><strong>Sunucunun Yanıtı:</strong></p>';
      html += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
      html += '<p><em>Not: Tüm alan değiştirildi</em></p>';
      
      showOutput('', html);
    });
}

// ===== DELETE: Veri Sil =====
function deleteOperation() {
  console.log('=== DELETE İşlemi ===');
  showOutput('⏳ DELETE isteği gönderiliyor...', 'Lütfen bekleyin...');
  
  console.log('Silinecek ID: 1');
  
  fetch(`${API_URL}/posts/1`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      console.log('DELETE başarılı:', data);
      
      let html = '<h3>✅ DELETE İşlemi Başarıyla Tamamlandı</h3>';
      html += '<p><strong>HTTP İsteği:</strong> DELETE ' + `${API_URL}/posts/1` + '</p>';
      html += '<p><strong>Status:</strong> 200 OK</p>';
      html += '<p><strong>Silinen İçerik:</strong></p>';
      html += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
      html += '<p><em>Not: POST 1 silindi. Yanıtta boş nesne döndü.</em></p>';
      
      showOutput('', html);
    });
}

console.log('REST API konusu yüklendi!');
