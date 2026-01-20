// ===== Hata Yönetimi & Debugging =====

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// ===== 1. Hata Örneği =====
function hataliKod() {
  console.log('=== Hata Örneği ===');
  
  try {
    // Bu hataya neden olacak
    console.log(tanımlanmayan_degisken);
  } catch (error) {
    console.error('Hata yakalandı:', error.name, error.message);
    
    showOutput('❌ ReferenceError Oluştu', {
      hataAdi: error.name,
      mesaj: error.message,
      aciklama: 'Tanımlanmayan değişkene erişim'
    });
  }
}

// ===== 2. Try-Catch Örneği =====
function tryCatchOrnek() {
  console.log('=== Try-Catch Örneği ===');
  
  // Güvenli JSON parse
  function guvenliParse(jsonText) {
    try {
      console.log('Parsing başladı...');
      const veri = JSON.parse(jsonText);
      console.log('Başarılı:', veri);
      return {
        basarili: true,
        veri: veri,
        mesaj: '✅ JSON başarıyla parse edildi'
      };
    } catch (error) {
      console.error('Parse hatası:', error.message);
      return {
        basarili: false,
        veri: null,
        hata: error.message,
        mesaj: '❌ JSON parse hatası'
      };
    } finally {
      console.log('Parse işlemi tamamlandı (her koşulda)');
    }
  }
  
  // Test 1: Geçerli JSON
  const test1 = guvenliParse('{"ad":"Ali","yas":25}');
  console.log('Test 1:', test1);
  
  // Test 2: Hatalı JSON
  const test2 = guvenliParse('{hatalı json}');
  console.log('Test 2:', test2);
  
  showOutput('Try-Catch Örnekleri', {
    geçerliJSON: test1,
    hatalıJSON: test2
  });
}

// ===== 3. Throw Kullanımı =====
function throwOrnek() {
  console.log('=== Throw Kullanımı ===');
  
  function yasiKontrolEt(yas) {
    try {
      // Kontroller
      if (typeof yas !== 'number') {
        throw new Error('Yaş bir sayı olmalıdır!');
      }
      
      if (yas < 0) {
        throw new Error('Yaş negatif olamaz!');
      }
      
      if (yas > 150) {
        throw new Error('Yaş gerçekçi değil!');
      }
      
      // Geçerli
      return {
        gecerli: true,
        yas: yas,
        kategori: yas < 18 ? 'Çocuk' : 'Yetişkin'
      };
      
    } catch (error) {
      return {
        gecerli: false,
        hata: error.message
      };
    }
  }
  
  // Test değerler
  const testler = [
    { deger: 25, aciklama: 'Geçerli yaş' },
    { deger: -5, aciklama: 'Negatif yaş' },
    { deger: 200, aciklama: 'Çok yüksek yaş' },
    { deger: 'yirmibeş', aciklama: 'String yaş' }
  ];
  
  let html = '<h3>Yaş Kontrol Testleri</h3>';
  
  testler.forEach(test => {
    const sonuc = yasiKontrolEt(test.deger);
    html += `
      <div style="border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:4px;">
        <strong>Test: ${test.aciklama} (${test.deger})</strong><br>
        ${sonuc.gecerli 
          ? `✅ Geçerli - Kategori: ${sonuc.kategori}` 
          : `❌ Hata: ${sonuc.hata}`}
      </div>
    `;
  });
  
  document.getElementById('output').innerHTML = html;
  console.log('Yaş kontrol testleri tamamlandı');
}

// ===== 4. Hata Türleri =====
function hataTurleri() {
  console.log('=== Hata Türleri ===');
  
  const hatalar = [];
  
  // TypeError
  try {
    const text = "merhaba";
    text.map(); // String'in map() yoktur
  } catch (e) {
    hatalar.push({
      turu: e.name,
      mesaj: e.message,
      aciklama: 'Yanlış tür üzerinde işlem'
    });
    console.error('TypeError:', e.message);
  }
  
  // RangeError
  try {
    new Array(-1);
  } catch (e) {
    hatalar.push({
      turu: e.name,
      mesaj: e.message,
      aciklama: 'Aralık dışı değer'
    });
    console.error('RangeError:', e.message);
  }
  
  // ReferenceError
  try {
    console.log(tanimliBilmeyen);
  } catch (e) {
    hatalar.push({
      turu: e.name,
      mesaj: e.message,
      aciklama: 'Tanımlanmayan değişken'
    });
    console.error('ReferenceError:', e.message);
  }
  
  // SyntaxError (compile time)
  hatalar.push({
    turu: 'SyntaxError',
    mesaj: 'JSON.parse(\'{invalid}\')',
    aciklama: 'Geçersiz format'
  });
  
  let html = '<h3>Hata Türleri</h3>';
  html += '<table border="1" style="width:100%; border-collapse:collapse;">';
  html += '<tr style="background:#f0f0f0;">';
  html += '<th>Hata Türü</th><th>Mesaj</th><th>Açıklama</th></tr>';
  
  hatalar.forEach(hata => {
    html += `<tr>
      <td><strong>${hata.turu}</strong></td>
      <td>${hata.mesaj}</td>
      <td>${hata.aciklama}</td>
    </tr>`;
  });
  
  html += '</table>';
  document.getElementById('output').innerHTML = html;
  
  console.log('Tüm hata türleri gösterildi');
}

function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
  console.clear();
}

console.log('Hata Yönetimi konusu yüklendi!');
