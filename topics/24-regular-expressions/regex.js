// ===== Regular Expressions =====
function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

function basicRegex() {
  const text = "JavaScript is fun and JavaScript is powerful";
  
  const regex1 = /javascript/i;                    // Case insensitive
  const regex2 = /javascript/gi;                   // Global + case insensitive
  const regex3 = /\d{3}/;                          // 3 rakam
  
  let html = `
    <h3>Temel Regex Örnekleri</h3>
    <div style="background:#fff3cd;padding:15px;border-radius:4px;">
      <strong>Text:</strong> "${text}"<br><br>
      <strong>/javascript/i.test(text)</strong> → ${regex1.test(text)}<br>
      <strong>text.match(/javascript/gi)</strong> → ${text.match(regex2)}<br><br>
      <strong>/\d{3}/.test("123abc")</strong> → ${/\d{3}/.test("123abc")}<br>
      <strong>/\d{3}/.test("abc")</strong> → ${/\d{3}/.test("abc")}
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

function emailValidation() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const testEmails = [
    { email: "test@example.com", valid: true },
    { email: "invalid.email", valid: false },
    { email: "user@domain.co.uk", valid: true },
    { email: "@invalid.com", valid: false }
  ];
  
  let html = `
    <h3>Email Doğrulama</h3>
    <table border="1" style="width:100%;border-collapse:collapse;">
    <tr style="background:#f0f0f0;"><th>Email</th><th>Sonuç</th></tr>
  `;
  
  testEmails.forEach(item => {
    const result = emailRegex.test(item.email);
    const status = result ? '✅ Geçerli' : '❌ Geçersiz';
    html += `<tr><td>${item.email}</td><td>${status}</td></tr>`;
  });
  
  html += '</table>';
  document.getElementById('output').innerHTML = html;
}

function stringMethods() {
  const text = "hello world HELLO";
  
  let html = `
    <h3>Regex ile String Metotları</h3>
    <div style="background:#d4edda;padding:15px;border-radius:4px;">
      <strong>Text:</strong> "${text}"<br><br>
      <strong>text.match(/hello/gi)</strong> → ${JSON.stringify(text.match(/hello/gi))}<br>
      <strong>text.replace(/hello/gi, "hi")</strong> → "${text.replace(/hello/gi, 'hi')}"<br>
      <strong>text.split(/\s+/)</strong> → ${JSON.stringify(text.split(/\s+/))}<br>
      <strong>/WORLD/i.test(text)</strong> → ${/WORLD/i.test(text)}
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
}

console.log('Regular Expressions konusu yüklendi!');
