# 03 - Operatörler

Bu bölümde, JavaScript'te kullanılan çeşitli operatörleri ve bunların nasıl kullanıldığını öğreneceğiz.

## 🌟 Konuya Giriş

Operatörler, değişkenler ve değerler üzerinde işlem yapmak için kullanılan sembollerdir. Matematiksel işlemler yapmaktan, değerleri karşılaştırmaya, mantıksal kararlar almaya kadar birçok işlemde operatörler kullanılır.

## 🚀 Operatör Türleri

### 1. Aritmetik Operatörler

Matematiksel işlemler yapmak için kullanılır.

| Operatör | Ad            | Örnek      | Sonuç |
| :------- | :------------ | :--------- | :---- |
| `+`      | Toplama       | `10 + 5`   | `15`  |
| `-`      | Çıkarma       | `10 - 5`   | `5`   |
| `*`      | Çarpma        | `10 * 5`   | `50`  |
| `/`      | Bölme         | `10 / 5`   | `2`   |
| `%`      | Modül (Kalan) | `10 % 3`   | `1`   |
| `**`     | Üs (Power)    | `2 ** 3`   | `8`   |
| `++`     | Artırma       | `x++`      | `x+1` |
| `--`     | Azaltma       | `x--`      | `x-1` |

### 2. Karşılaştırma Operatörleri

İki değeri karşılaştırmak ve Boolean sonuç (true/false) almak için kullanılır.

| Operatör | Ad                      | Örnek       | Sonuç |
| :------- | :---------------------- | :---------- | :---- |
| `==`     | Eşit (değer)            | `5 == '5'`  | `true`  |
| `===`    | Kesinlikle eşit (değer ve tür) | `5 === '5'` | `false` |
| `!=`     | Eşit değil (değer)      | `5 != 3`    | `true`  |
| `!==`    | Kesinlikle eşit değil  | `5 !== '5'` | `true`  |
| `>`      | Büyüktür                | `10 > 5`    | `true`  |
| `<`      | Küçüktür                | `5 < 10`    | `true`  |
| `>=`     | Büyük veya eşit         | `10 >= 10`  | `true`  |
| `<=`     | Küçük veya eşit         | `5 <= 10`   | `true`  |

### 3. Mantıksal Operatörler

Boolean değerlerle mantıksal işlemler yapmak için kullanılır.

| Operatör | Ad  | Açıklama                      | Örnek             | Sonuç |
| :------- | :-- | :---------------------------- | :---------------- | :---- |
| `&&`     | VE  | Her iki koşul da doğruysa true | `true && false`   | `false` |
| `\|\|`   | VEYA| En az birisi doğruysa true   | `true \|\| false` | `true`  |
| `!`      | DEĞİL | Tersini döner                | `!true`           | `false` |

## 🛠️ Örnek Kullanım

Bu kavramları uygulamalı olarak görmek için aşağıdaki dosyalara göz atın:

*   [**HTML Dosyası:** `index.html`](./index.html)
*   [**JavaScript Kodları:** `operators.js`](./operators.js)

## 📚 Ek Kaynaklar

*   [MDN Web Docs - Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
*   [MDN Web Docs - Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
