# 17. Fetch API - Verileri İnternetten Çekmek

## Konu Özeti
Fetch API, web sayfalarından sunuculardan veri almak veya göndermek için kullanılan modern bir araçtır. HTTP istekleri yapmak için kullanılır.

## Fetch API Nedir?

Fetch API, ağ üzerinden kaynak istemeye ve almaya olanak tanıyan modern bir web standartıdır:

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Hata:', error));
```

## Fetch Temel Yapı

| Adım | Açıklama |
|------|----------|
| URL | İstenecek kaynağın adresi |
| Response | Sunucudan gelen yanıt (statü, başlık, vb) |
| Parse | Yanıtı uygun formata dönüştürme (JSON, text, vb) |
| Data | Sonuç verisi kullanmaya hazır |

## HTTP Metodları

- **GET**: Verileri alma (default)
- **POST**: Verileri gönderme
- **PUT**: Verileri güncelleme
- **DELETE**: Verileri silme
- **PATCH**: Kısmi güncelleme

## Fetch Örnekleri

### GET - Veri Alma

```javascript
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

### POST - Veri Gönderme

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ad: "Ahmet",
    email: "ahmet@example.com"
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

## Response Metotları

| Metod | Kullanım | Örnek |
|-------|----------|-------|
| `.json()` | JSON parse etme | `res.json()` |
| `.text()` | Metin olarak alma | `res.text()` |
| `.blob()` | Binary veri | `res.blob()` |
| `.arrayBuffer()` | Buffer olarak alma | `res.arrayBuffer()` |

## Status Kodları

```javascript
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    return res.json();
  });
```

## Async/Await ile Fetch

```javascript
async function verileriAl() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Hata:', error);
  }
}
```

## Test Edilebilir API'lar

- JSONPlaceholder: https://jsonplaceholder.typicode.com/
- OpenWeather: https://openweathermap.org/api
- GitHub API: https://api.github.com/
- REST Countries: https://restcountries.com/v3.1/

## Kaynaklar

- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JSONPlaceholder - Test API](https://jsonplaceholder.typicode.com/)

## Özet

- Fetch API modern HTTP istekleri yapmak için kullanılır
- Promise-based asenkron işleme
- `.then()` ve `.catch()` ile hata yönetimi
- Async/await daha okunaklı yazılım sağlar
