// filepath: topics/14-asynchronous-js/async.js

console.log("=== Asenkron JavaScript ===\n");

// ====================================================================================================================
// 01. CALLBACKS
// ====================================================================================================================

console.log("=== Callbacks ===\n");

// Callback: Bir fonksiyonu başka bir fonksiyona parametre olarak geçme
function fetchData(callback) {
    setTimeout(function() {
        console.log("Veri alındı!");
        callback("Başarılı");
    }, 1000); // 1 saniye sonra
}

fetchData(function(result) {
    console.log("Sonuç: " + result);
});

console.log("\n=== Callbacks Bitti ===\n");

// ====================================================================================================================
// 02. PROMISES
// ====================================================================================================================

console.log("=== Promises ===\n");

// Promise: Gelecekte bir sonuç döneceğini vaat eden obje
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Promise'ten veri geliyor...");
        resolve("Başarılı!");
    }, 1000);
});

myPromise
    .then(function(result) {
        console.log("Promise sonucu: " + result);
    })
    .catch(function(error) {
        console.log("Hata: " + error);
    });

console.log("\n=== Promises Bitti ===\n");

// ====================================================================================================================
// 03. ASYNC/AWAIT
// ====================================================================================================================

console.log("=== Async/Await ===\n");

// Async function: async anahtar kelimesiyle tanımlanan fonksiyon
async function getData() {
    try {
        console.log("Veri çekiliyor...");
        // await: Promise'in sonucunu bekle
        let promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve("Veriler başarıyla alındı!");
            }, 1000);
        });
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log("Hata oluştu: " + error);
    }
}

getData();

console.log("\n=== Async/Await Bitti ===\n");

console.log("=== Asenkron JavaScript Konusu Tamamlandı ===\n");
