// filepath: topics/13-event-handling/events.js

console.log("=== Olay Yönetimi (Event Handling) ===\n");

// ====================================================================================================================
// 01. CLICK OLAYINI DİNLEME
// ====================================================================================================================

console.log("=== Click Olayı ===\n");

let eventBtn = document.getElementById("eventBtn");

// Click olayını dinle
eventBtn.addEventListener("click", function(event) {
    console.log("Buton tıklandı!");
    console.log("Event objesi: ", event);
});

console.log("Click listener eklendi");

console.log("\n=== Click Olayı Bitti ===\n");

// ====================================================================================================================
// 02. CHANGE OLAYINI DİNLEME
// ====================================================================================================================

console.log("=== Change Olayı ===\n");

let myInput = document.getElementById("myInput");

// Change olayını dinle
myInput.addEventListener("change", function(event) {
    console.log("Input değeri değişti: " + event.target.value);
});

// Yazarken de dinlemek için 'input' olayını kullan
myInput.addEventListener("input", function(event) {
    console.log("Yazılan: " + event.target.value);
});

console.log("Change ve input listener'ları eklendi");

console.log("\n=== Change Olayı Bitti ===\n");

console.log("=== Olay Yönetimi Konusu Tamamlandı ===\n");
