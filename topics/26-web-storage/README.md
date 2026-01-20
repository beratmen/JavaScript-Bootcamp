# 26. Web Storage (localStorage, sessionStorage)

## Konu Özeti
Web Storage, tarayıcıda veri depolamak için kullanılır. localStorage ve sessionStorage olmak üzere 2 türü vardır.

## localStorage vs sessionStorage

| Özellik | localStorage | sessionStorage |
|---------|-------------|----------------|
| Ömrü | Tarayıcı kapatılsa da kalır | Sekme kapandığında silinir |
| Kapsamı | Tüm sekmelerde erişilebilir | Sadece o sekmede |
| Depolama | ~5-10 MB | ~5 MB |

## localStorage

```javascript
// Veri Kaydetme
localStorage.setItem('username', 'ahmet');
localStorage.setItem('settings', JSON.stringify({theme: 'dark'}));

// Veri Okuma
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Veri Silme
localStorage.removeItem('username');

// Tümünü Silme
localStorage.clear();

// Tüm Anahtarları Görmek
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
```

## sessionStorage

localStorage ile aynı metotlara sahiptir, ama sadece session boyunca kalır.

```javascript
sessionStorage.setItem('tempData', 'geçici veri');
```

## Pratik Örnek: Tema Kaydı

```javascript
// Tema değiştir ve kaydet
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

// Sayfa yüklendiğinde tema yükle
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});
```

## Sınırlamalar

- JSON serializable veriler saklanır
- Kullanıcı tarayıcı verilerini temizlerse silinir
- Güvenli veriler saklanmamalı (şifreler, tokens)
- Origin-based (https://example.com ≠ https://app.example.com)

## Kaynaklar

- [MDN - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
