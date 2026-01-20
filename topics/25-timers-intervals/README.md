# 25. setTimeout ve setInterval (Zamanlayıcılar)

## Konu Özeti
JavaScript'te zamanlanmış işlemler için setTimeout ve setInterval kullanılır.

## setTimeout - Bir Kez Çalışma

Belirli bir süre sonra kodu **bir kez** çalıştırır.

```javascript
setTimeout(() => {
  console.log('1 saniye sonra çalış');
}, 1000);

// İptal etme
const timerId = setTimeout(() => {
  console.log('Bu çalışmayacak');
}, 1000);
clearTimeout(timerId);
```

## setInterval - Tekrar Tekrar Çalışma

Belirli aralıklarla kodu **tekrar tekrar** çalıştırır.

```javascript
const intervalId = setInterval(() => {
  console.log('Her 2 saniyede bir');
}, 2000);

// İptal etme
clearInterval(intervalId);
```

## Pratik Örnekler

### Geri Sayma Sayacı
```javascript
let countdown = 5;

const timer = setInterval(() => {
  console.log(countdown);
  countdown--;
  
  if (countdown < 0) {
    clearInterval(timer);
    console.log('Bitti!');
  }
}, 1000);
```

### Animasyon
```javascript
let x = 0;

const animation = setInterval(() => {
  x += 10;
  element.style.left = x + 'px';
  
  if (x >= 300) clearInterval(animation);
}, 30);
```

### API Polling
```javascript
const checkStatus = setInterval(() => {
  fetch('/api/status')
    .then(res => res.json())
    .then(data => {
      if (data.complete) {
        clearInterval(checkStatus);
        console.log('Tamamlandı!');
      }
    });
}, 5000);
```

## Kaynaklar

- [MDN - setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [MDN - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
