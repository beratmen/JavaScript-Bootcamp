// ===== Todo App - JavaScript =====
// Yapılacaklar listesi uygulaması

// ===== AYARLAR =====
const STORAGE_KEY = 'todos'; // localStorage key'i
let todos = [];               // Görevler array'i
let currentFilter = 'all';    // Aktif filtre

// ===== DOM ELEMANLARI =====
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const clearBtn = document.getElementById('clearBtn');
const totalTodosSpan = document.getElementById('totalTodos');
const completedCountSpan = document.getElementById('completedCount');

// ===== OLAY LİSTENERLERİ =====
/**
 * Başlatıldığında çalışan kodlar
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Todo App başlatıldı');
  
  // localStorage'dan önceki görevleri yükle
  loadTodos();
  
  // Olayları ayarla
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  clearBtn.addEventListener('click', clearCompletedTodos);
  
  // İlk render
  renderTodos();
});

// ===== 1. GÖREV EKLEME =====
/**
 * Yeni görev ekler
 */
function addTodo() {
  const text = todoInput.value.trim();
  
  // Kontrol: Boş mı?
  if (text === '') {
    alert('⚠️ Lütfen bir görev yazın!');
    todoInput.focus();
    return;
  }
  
  // Kontrol: Çok uzun mu?
  if (text.length > 100) {
    alert('⚠️ Görev çok uzun! (Max 100 karakter)');
    return;
  }
  
  console.log('✅ Yeni görev ekleniyor:', text);
  
  // Yeni görev objesi oluştur
  const newTodo = {
    id: Date.now(),           // Benzersiz ID (zaman damgası)
    text: text,               // Görev metni
    completed: false,         // Tamamlama durumu
    createdAt: new Date()     // Oluşturulma tarihi
  };
  
  // Array'e ekle
  todos.push(newTodo);
  console.log('Görevler listesi:', todos);
  
  // localStorage'a kaydet
  saveTodos();
  
  // Input temizle
  todoInput.value = '';
  todoInput.focus();
  
  // Render et
  renderTodos();
  
  // Animasyon göster
  showNotification('✅ Görev eklendi!');
}

// ===== 2. GÖREV SİLME =====
/**
 * ID'si verilen görevi siler
 * @param {number} id - Silinecek görevin ID'si
 */
function deleteTodo(id) {
  console.log('🗑️  Görev siliniyor, ID:', id);
  
  // Görevleri filtrele (silinecek olanı hariç tut)
  todos = todos.filter(todo => todo.id !== id);
  
  console.log('Güncel görevler:', todos);
  
  // Kaydet ve render et
  saveTodos();
  renderTodos();
  
  showNotification('🗑️  Görev silindi!');
}

// ===== 3. GÖREV TAMAMLAMA =====
/**
 * Görevin tamamlanma durumunu değiştirir
 * @param {number} id - Görevin ID'si
 */
function toggleTodo(id) {
  console.log('✔️  Görev durumu değiştiriliyor, ID:', id);
  
  // Göreviyi bul ve durumunu değiştir
  const todo = todos.find(t => t.id === id);
  
  if (todo) {
    todo.completed = !todo.completed;
    console.log('Yeni durum:', todo.completed ? 'Tamamlandı' : 'Aktif');
  }
  
  // Kaydet ve render et
  saveTodos();
  renderTodos();
}

// ===== 4. FİLTRELEME =====
/**
 * Görevleri filtrelenmiş olarak gösterir
 * @param {string} filter - Filtre türü (all, active, completed)
 */
function filterTodos(filter) {
  console.log('🔍 Filtreleme:', filter);
  
  currentFilter = filter;
  
  // Filter butonlarını güncelle
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Render et
  renderTodos();
}

// ===== 5. TESLİ GÖREVLER =====
/**
 * Tamamlanmış tüm görevleri siler
 */
function clearCompletedTodos() {
  const completedCount = todos.filter(t => t.completed).length;
  
  if (completedCount === 0) {
    alert('⚠️ Tamamlanmış görev yok!');
    return;
  }
  
  console.log('🧹 Tamamlanmış görevler temizleniyor...');
  
  // Sadece tamamlanmamış olanları tut
  todos = todos.filter(todo => !todo.completed);
  
  console.log('Kalan görevler:', todos);
  
  // Kaydet ve render et
  saveTodos();
  renderTodos();
  
  showNotification(`🧹 ${completedCount} tamamlanmış görev silindi!`);
}

// ===== 6. SAYFA OLUŞTURMA (RENDER) =====
/**
 * Tüm görevleri sayfada gösterir
 */
function renderTodos() {
  console.log('📌 Görevler render ediliyor...');
  
  // Todolist'i temizle
  todoList.innerHTML = '';
  
  // Görevleri filtrele
  let filteredTodos = todos;
  
  if (currentFilter === 'active') {
    filteredTodos = todos.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filteredTodos = todos.filter(t => t.completed);
  }
  
  console.log('Filtrelenmiş görevler:', filteredTodos);
  
  // Boş liste kontrolü
  if (filteredTodos.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'empty-message';
    emptyMsg.textContent = currentFilter === 'all' 
      ? '📭 Henüz görev yok! Yeni bir tane ekle.'
      : currentFilter === 'active'
      ? '✨ Tüm görevler tamamlandı!'
      : '📋 Tamamlanmış görev yok';
    todoList.appendChild(emptyMsg);
  } else {
    // Her görev için liste elemanı oluştur
    filteredTodos.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      
      // HTML şablonu
      li.innerHTML = `
        <input 
          type="checkbox" 
          class="checkbox"
          ${todo.completed ? 'checked' : ''}
          onchange="toggleTodo(${todo.id})"
        >
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <button class="delete-btn" onclick="deleteTodo(${todo.id})">Sil</button>
      `;
      
      todoList.appendChild(li);
    });
  }
  
  // İstatistikleri güncelle
  updateStats();
}

// ===== 7. İSTATİSTİKLER =====
/**
 * Görev istatistiklerini günceller
 */
function updateStats() {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  
  totalTodosSpan.textContent = total;
  completedCountSpan.textContent = completed;
  
  console.log(`📊 İstatistik: ${completed}/${total} tamamlandı`);
}

// ===== 8. DEPOLAMA (localStorage) =====
/**
 * Görevleri localStorage'a kaydeder
 */
function saveTodos() {
  const jsonData = JSON.stringify(todos);
  localStorage.setItem(STORAGE_KEY, jsonData);
  console.log('💾 Görevler kaydedildi');
}

/**
 * Görevleri localStorage'dan yükler
 */
function loadTodos() {
  const jsonData = localStorage.getItem(STORAGE_KEY);
  
  if (jsonData) {
    todos = JSON.parse(jsonData);
    console.log('📂 Görevler yüklendi:', todos);
  } else {
    todos = [];
    console.log('📂 Yeni başlangıç - görev yok');
  }
}

// ===== 9. YARDIMCI FONKSİYONLAR =====
/**
 * HTML karakter kodlama (XSS önleyen)
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Bildirim gösterir
 */
function showNotification(message) {
  console.log('📢 Bildirim:', message);
  // İsteğe bağlı: toast notification kütüphanesi kullanabilir
}

// ===== AÇ AÇIKLAMA =====
console.log(`
╔════════════════════════════════════════╗
║  📝 TODO APP - YAPILACAKLAR LİSTESİ  ║
║════════════════════════════════════════║
║                                        ║
║  Özellikler:                           ║
║  • Görev ekleme/silme                  ║
║  • Tamamlanma işaretleme               ║
║  • localStorage otomatik kaydı         ║
║  • Filtreleme (Tüm/Aktif/Tamamlanan)  ║
║  • İstatistik gösterimi                ║
║                                        ║
║  Teknolojiler:                         ║
║  ✓ Arrays ve Array methods             ║
║  ✓ DOM Manipulation                    ║
║  ✓ Event Handling                      ║
║  ✓ localStorage & JSON                 ║
║                                        ║
╚════════════════════════════════════════╝
`);
