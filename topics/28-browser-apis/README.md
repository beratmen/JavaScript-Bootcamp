# 28. Modern Browser APIs

## Konu Özeti
Modern tarayıcılar, JavaScript'e güçlü API'ler sunarak masaüstü uygulamalarına benzer yetenekler sağlar.

## Geolocation API

Kullanıcının konum bilgisini al (izin gerekli).

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    const {latitude, longitude} = position.coords;
    console.log(`Enlem: ${latitude}, Boylam: ${longitude}`);
  },
  (error) => {
    console.error('Konum alınamadı:', error);
  }
);
```

## Notification API

Tarayıcı bildirimleri gönder.

```javascript
if (Notification.permission === 'granted') {
  new Notification('Başlık', {
    body: 'Bildirimin gövdesi',
    icon: '/icon.png'
  });
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission();
}
```

## Vibration API

Cihazı titreştir (mobil cihazlar).

```javascript
// 100ms titreş
navigator.vibrate(100);

// [titreş, dur, titreş] deseni
navigator.vibrate([100, 200, 100]);

// Durdur
navigator.vibrate(0);
```

## Battery API (Eski)

Cihaz pil seviyesi (artık kullanılmıyor, Navigator.getBattery yerine PowerManager kullanılıyor).

```javascript
navigator.getBattery().then(battery => {
  console.log(`Pil Seviyesi: ${battery.level * 100}%`);
  console.log(`Şarj Olunuyor: ${battery.charging}`);
});
```

## FileReader API

Dosya içeriğini oku.

```javascript
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  
  reader.onload = (event) => {
    console.log(event.target.result);
  };
  
  reader.readAsText(file);
});
```

## Web Storage (localStorage/sessionStorage)

Veri depolama (Topic 26'da detaylı).

## Kaynaklar

- [MDN - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
- [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
