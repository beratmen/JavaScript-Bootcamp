// ===== JSON & Veri Formatları =====
// JSON (JavaScript Object Notation) ile veri dönüşümü

// Örnek veri nesne
const calisan = {
  id: 101,
  ad: "Mehmet",
  soyad: "Yılmaz",
  email: "mehmet@company.com",
  pozisyon: "Yazılım Geliştirici",
  maas: 5000,
  aktif: true,
  departman: "Teknoloji",
  yetenekler: ["JavaScript", "React", "Node.js", "MongoDB"],
  iletisim: {
    telefon: "+90-555-123-4567",
    ofis: "İstanbul",
    evli: true
  }
};

// ===== JSON.stringify() - Nesneyi String'e Çevir =====
function demoStringify() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  console.log('=== JSON.stringify() Demo ===');
  
  // 1. Basit stringify
  const basit = JSON.stringify(calisan);
  console.log('Basit stringify:', basit);
  output.innerHTML += '<h3>1. Basit stringify:</h3>';
  output.innerHTML += '<pre>' + basit + '</pre>';
  
  // 2. İnsan tarafından okunabilir format (indentation)
  const okunabilir = JSON.stringify(calisan, null, 2);
  console.log('Okunabilir format:', okunabilir);
  output.innerHTML += '<h3>2. İnsan Tarafından Okunabilir Format:</h3>';
  output.innerHTML += '<pre>' + okunabilir + '</pre>';
  
  // 3. Seçilmiş alanları kaydetme (replacer)
  const secilmis = JSON.stringify(calisan, ['ad', 'soyad', 'pozisyon'], 2);
  console.log('Seçilmiş alanlar:', secilmis);
  output.innerHTML += '<h3>3. Seçilmiş Alanlar:</h3>';
  output.innerHTML += '<pre>' + secilmis + '</pre>';
}

// ===== JSON.parse() - String'i Nesneye Çevir =====
function demoParse() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  console.log('=== JSON.parse() Demo ===');
  
  // 1. JSON string oluştur
  const jsonString = '{"ad":"Ayşe","soyad":"Kara","yas":28,"sehir":"Ankara"}';
  console.log('JSON String:', jsonString);
  output.innerHTML += '<h3>1. JSON String (metin):</h3>';
  output.innerHTML += '<pre>' + jsonString + '</pre>';
  
  // 2. Parse ile nesneye dönüştür
  const nesne = JSON.parse(jsonString);
  console.log('Parse sonrası nesne:', nesne);
  console.log('Nesne türü:', typeof nesne);
  console.log('Ad:', nesne.ad);
  console.log('Soyadı:', nesne.soyad);
  
  output.innerHTML += '<h3>2. Parse Sonrası Nesne:</h3>';
  output.innerHTML += '<pre>' + JSON.stringify(nesne, null, 2) + '</pre>';
  
  // 3. Özeliklere erişim
  output.innerHTML += '<h3>3. Nesne Özellikleri:</h3>';
  output.innerHTML += '<pre>' + 
    'Ad: ' + nesne.ad + '\n' +
    'Soyadı: ' + nesne.soyad + '\n' +
    'Yaş: ' + nesne.yas + '\n' +
    'Şehir: ' + nesne.sehir +
  '</pre>';
}

// ===== localStorage ile JSON Kullanımı =====
function demoLocalStorage() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  console.log('=== localStorage Demo ===');
  
  // 1. Veriyi localStorage'a kaydet (stringify)
  const kullanici = {
    id: 42,
    ad: "Zeynep",
    email: "zeynep@example.com",
    kayitTarihi: new Date().toLocaleDateString('tr-TR')
  };
  
  // JSON'a çevir ve kaydet
  const jsonVeri = JSON.stringify(kullanici);
  localStorage.setItem('kullanici', jsonVeri);
  console.log('Kaydedilen veri:', jsonVeri);
  
  output.innerHTML += '<h3>1. localStorage\'a Kaydedilen Veri:</h3>';
  output.innerHTML += '<pre>' + jsonVeri + '</pre>';
  
  // 2. localStorage'dan oku ve parse et
  const alinanVeri = localStorage.getItem('kullanici');
  const calisanKullanici = JSON.parse(alinanVeri);
  console.log('Alınan kullanıcı:', calisanKullanici);
  
  output.innerHTML += '<h3>2. localStorage\'dan Alınan Veri:</h3>';
  output.innerHTML += '<pre>' + JSON.stringify(calisanKullanici, null, 2) + '</pre>';
  
  // 3. Farklı veri tipleri
  const yaklasik = {
    metin: "Merhaba",
    sayi: 42,
    ondalik: 3.14,
    boolean: true,
    dizi: [1, 2, 3],
    nesneDizi: [{id: 1, ad: "Ali"}, {id: 2, ad: "Veli"}],
    bosDeğer: null
  };
  
  localStorage.setItem('karmasikVeri', JSON.stringify(yaklasik, null, 2));
  const geriAlınan = JSON.parse(localStorage.getItem('karmasikVeri'));
  
  output.innerHTML += '<h3>3. Kompleks Veri Yapısı:</h3>';
  output.innerHTML += '<pre>' + JSON.stringify(geriAlınan, null, 2) + '</pre>';
}

// ===== Hata Yönetimi =====
function demoHatayonetimi() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  console.log('=== Hata Yönetimi Demo ===');
  
  output.innerHTML += '<h3>1. Hatalı JSON Formatı:</h3>';
  
  // Hatalı JSON örnekleri
  const hataliJSONler = [
    {isim: "Tek tırnak", veri: "{'ad': 'Ali'}", hata: true},
    {isim: "Çift tırnak sayısız", veri: '{ad: Ali}', hata: true},
    {isim: "Virgül eksik", veri: '{"ad":"Ali" "yas":30}', hata: true},
    {isim: "Doğru JSON", veri: '{"ad":"Ali","yas":30}', hata: false}
  ];
  
  hataliJSONler.forEach(item => {
    try {
      const sonuc = JSON.parse(item.veri);
      output.innerHTML += '<p>✅ ' + item.isim + ': BAŞARILI</p>';
      console.log('✅ ' + item.isim + ':', sonuc);
    } catch (error) {
      output.innerHTML += '<p>❌ ' + item.isim + ': ' + error.message + '</p>';
      console.log('❌ ' + item.isim + ':', error.message);
    }
  });
  
  output.innerHTML += '<h3>2. try-catch ile Güvenli Parsing:</h3>';
  
  // Güvenli parse fonksiyonu
  function guvenliParse(jsonString) {
    try {
      return {
        basarili: true,
        veri: JSON.parse(jsonString),
        mesaj: "Başarıyla parse edildi"
      };
    } catch (error) {
      return {
        basarili: false,
        veri: null,
        mesaj: "Parse hatası: " + error.message
      };
    }
  }
  
  // Test et
  const test1 = guvenliParse('{"ad":"Fatma","yas":25}');
  const test2 = guvenliParse('Bunu parse edemez!');
  
  output.innerHTML += '<h3>Geçerli JSON:</h3>';
  output.innerHTML += '<pre>' + JSON.stringify(test1, null, 2) + '</pre>';
  
  output.innerHTML += '<h3>Hatalı JSON:</h3>';
  output.innerHTML += '<pre>' + JSON.stringify(test2, null, 2) + '</pre>';
  
  console.log('Güvenli parse sonuçları:', test1, test2);
}

// Temizle butonu
function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
  console.clear();
}

// Sayfa yüklendiğinde
console.log('JSON & Veri Formatları konusu yüklendi!');
console.log('Butonlara tıkla ve konsolu açık tut (F12)');
