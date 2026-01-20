// filepath: topics/12-dom-manipulation/dom.js

console.log("=== DOM Manipülasyonu ===\n");

// ====================================================================================================================
// 01. DOM ELEMANLARI SEÇME
// ====================================================================================================================

console.log("=== DOM Elemanları Seçme ===\n");

// ID ile seçme
let demoElement = document.getElementById("demo");
console.log("ID ile seçilen eleman: ", demoElement);

// Class ile seçme
let containerElement = document.querySelector(".container");
console.log("Class ile seçilen eleman: ", containerElement);

console.log("\n=== Seçme Bitti ===\n");

// ====================================================================================================================
// 02. ELEMAN ÖZELLIKLERINI DEĞİŞTİRME
// ====================================================================================================================

console.log("=== Eleman Özelliklerini Değiştirme ===\n");

// innerHTML: HTML içeriğini değiştir
demoElement.innerHTML = "Bu metin JavaScript tarafından değiştirildi!";
console.log("innerHTML değiştirildi");

// textContent: Sadece metin değiştir
// demoElement.textContent = "Sadece metin";

// Style değiştirme
demoElement.style.color = "blue";
demoElement.style.fontSize = "18px";
console.log("Stil değiştirildi");

console.log("\n=== Özellik Değiştirme Bitti ===\n");

// ====================================================================================================================
// 03. EVENT LISTENER EKLEME
// ====================================================================================================================

console.log("=== Event Listener Ekleme ===\n");

let changeBtn = document.getElementById("changeBtn");

// Butona tıklama olayını dinle
changeBtn.addEventListener("click", function() {
    demoElement.innerHTML = "Buton tıklandı!";
    demoElement.style.color = "red";
    console.log("Buton tıklandı!");
});

console.log("Event listener eklendi");

console.log("\n=== Event Listener Bitti ===\n");

console.log("=== DOM Manipülasyonu Konusu Tamamlandı ===\n");
