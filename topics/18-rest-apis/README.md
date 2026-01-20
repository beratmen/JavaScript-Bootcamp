# 18. REST API'ları Kullanmak

## Konu Özeti
REST (Representational State Transfer) API'ları, HTTP protokolünü kullanarak sunucular arasında veri alışverişi yapan standart web hizmetleridir.

## REST Nedir?

REST, web hizmetlerinin tasarlanması için kullanılan mimari stildir:

- **R**epresentational: Kaynakların temsilçisi
- **S**tate: Durum
- **T**ransfer: Transfer

## REST İlkeleri

| İlke | Açıklama |
|------|----------|
| Client-Server | Ayrılmış client ve sunucu |
| Stateless | Her istek bağımsız |
| Cacheable | Verileri önbelleklenebilir |
| Uniform Interface | Standart arayüz |
| Layered System | Katmanlı yapı |

## HTTP Metodları & CRUD

```
GET    → READ (Oku)
POST   → CREATE (Oluştur)
PUT    → UPDATE (Tamamını Güncelle)
PATCH  → UPDATE (Kısmen Güncelle)
DELETE → DELETE (Sil)
```

## API Endpoint Örnekleri

```
GET    /api/users              → Tüm kullanıcılar
GET    /api/users/5            → 5. kullanıcı
POST   /api/users              → Yeni kullanıcı oluştur
PUT    /api/users/5            → 5. kullanıcıyı güncelle
DELETE /api/users/5            → 5. kullanıcıyı sil
```

## Status Kodları

| Kod | Anlamı | Örnek |
|-----|--------|-------|
| 200 | OK | Başarılı GET |
| 201 | Created | Başarılı POST |
| 400 | Bad Request | Yanlış veri |
| 401 | Unauthorized | Yetki yok |
| 404 | Not Found | Bulunamadı |
| 500 | Server Error | Sunucu hatası |

## Pratik Örnek: CRUD İşlemleri

```javascript
// GET - Oku
fetch('/api/users')

// POST - Oluştur
fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({name: 'Ali'})
})

// PUT - Güncelle
fetch('/api/users/5', {
  method: 'PUT',
  body: JSON.stringify({name: 'Ahmet'})
})

// DELETE - Sil
fetch('/api/users/5', {
  method: 'DELETE'
})
```

## Authentication (Kimlik Doğrulama)

```javascript
fetch(url, {
  headers: {
    'Authorization': 'Bearer TOKEN_HERE',
    'Content-Type': 'application/json'
  }
})
```

## Popüler API'lar

- **GitHub API**: https://api.github.com
- **OpenWeather**: https://openweathermap.org/api
- **REST Countries**: https://restcountries.com/
- **PokeAPI**: https://pokeapi.co/
- **JSONPlaceholder**: https://jsonplaceholder.typicode.com/

## Kaynaklar

- [REST API Best Practices](https://restfulapi.net/)
- [MDN - HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [API Tasarımı](https://swagger.io/)

## Özet

- REST API'ları HTTP ile veri alışverişi yapar
- CRUD işlemleri HTTP metodlarıyla yapılır
- Status kodları başarı/hata durumunu gösterir
- JSON genellikle veri formatı olarak kullanılır
