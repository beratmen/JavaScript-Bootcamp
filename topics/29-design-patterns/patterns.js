// ===== Design Patterns =====

function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// 1. Module Pattern
function modulePattern() {
  const Calculator = (() => {
    let result = 0;  // Private değişken
    
    return {
      add: (n) => {
        result += n;
        return result;
      },
      subtract: (n) => {
        result -= n;
        return result;
      },
      multiply: (n) => {
        result *= n;
        return result;
      },
      getResult: () => result,
      reset: () => {
        result = 0;
        return result;
      }
    };
  })();
  
  let html = `
    <h3>Module Pattern - Kapsülleme</h3>
    <div class="pattern-box">
      <strong>Private Değişken:</strong> result<br>
      <strong>Public Metodlar:</strong> add(), subtract(), multiply(), getResult(), reset()<br><br>
      <strong>Örnek Kullanım:</strong><br>
      Calculator.add(10) → ${Calculator.add(10)}<br>
      Calculator.add(5) → ${Calculator.add(5)}<br>
      Calculator.subtract(3) → ${Calculator.subtract(3)}<br>
      Calculator.getResult() → ${Calculator.getResult()}<br><br>
      <em style="color:#666;">result değişkenine doğrudan erişemezsiniz (private)</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 2. Singleton Pattern
function singletonPattern() {
  const DatabaseConnection = (() => {
    let instance;
    
    function createInstance() {
      return {
        id: Math.random(),
        connect: function() {
          return `Bağlantı Kimliği: ${this.id}`;
        }
      };
    }
    
    return {
      getInstance: () => {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const db1 = DatabaseConnection.getInstance();
  const db2 = DatabaseConnection.getInstance();
  
  let html = `
    <h3>Singleton Pattern - Tekli Nesne</h3>
    <div class="pattern-box">
      <strong>DB1 Kimliği:</strong> ${db1.id}<br>
      <strong>DB2 Kimliği:</strong> ${db2.id}<br>
      <strong>db1 === db2:</strong> ${db1 === db2 ? '✅ true (Aynı örnek)' : '❌ false'}<br><br>
      <strong>DB1 Bağlantısı:</strong> ${db1.connect()}<br>
      <strong>DB2 Bağlantısı:</strong> ${db2.connect()}<br><br>
      <em style="color:#666;">İkinci getInstance() çağrısında aynı örnek döndürülür</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 3. Observer Pattern
function observerPattern() {
  let observerLog = [];
  
  const EventEmitter = (() => {
    let observers = [];
    
    return {
      subscribe: (observer) => {
        observers.push(observer);
        observerLog.push(`✅ Observer kayıt edildi (Toplam: ${observers.length})`);
      },
      notify: (data) => {
        observers.forEach((observer, index) => {
          observer(data);
          observerLog.push(`📢 Observer ${index + 1} bilgilendirildi: "${data}"`);
        });
      },
      getObserverCount: () => observers.length
    };
  })();
  
  // Gözlemcileri kaydet
  EventEmitter.subscribe((data) => console.log('Observer 1:', data));
  EventEmitter.subscribe((data) => console.log('Observer 2:', data));
  EventEmitter.subscribe((data) => console.log('Observer 3:', data));
  
  // Event tetikle
  EventEmitter.notify('Veri değişti!');
  
  let html = `
    <h3>Observer Pattern - Etkinlik Sistemi</h3>
    <div class="pattern-box">
      <strong>Kayıtlı Gözlemci Sayısı:</strong> ${EventEmitter.getObserverCount()}<br><br>
      <strong>İşlem Günlüğü:</strong><br>
      ${observerLog.map(log => `• ${log}`).join('<br>')}
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 4. Factory Pattern
function factoryPattern() {
  function AnimalFactory(type) {
    switch(type) {
      case 'dog':
        return {
          type: 'Köpek',
          sound: 'Hav Hav!',
          speak: function() { return this.sound; }
        };
      case 'cat':
        return {
          type: 'Kedi',
          sound: 'Miyav!',
          speak: function() { return this.sound; }
        };
      case 'bird':
        return {
          type: 'Kuş',
          sound: 'Cik Cik!',
          speak: function() { return this.sound; }
        };
      default:
        return null;
    }
  }
  
  const dog = AnimalFactory('dog');
  const cat = AnimalFactory('cat');
  const bird = AnimalFactory('bird');
  
  let html = `
    <h3>Factory Pattern - Nesne Üretim</h3>
    <div class="pattern-box">
      <table border="1" style="width:100%;border-collapse:collapse;margin:10px 0;">
      <tr style="background:#f0f0f0;">
        <th style="padding:8px;">Tür</th>
        <th style="padding:8px;">Sesi</th>
      </tr>
      <tr>
        <td style="padding:8px;">${dog.type}</td>
        <td style="padding:8px;">${dog.speak()}</td>
      </tr>
      <tr>
        <td style="padding:8px;">${cat.type}</td>
        <td style="padding:8px;">${cat.speak()}</td>
      </tr>
      <tr>
        <td style="padding:8px;">${bird.type}</td>
        <td style="padding:8px;">${bird.speak()}</td>
      </tr>
      </table>
      <em style="color:#666;">Factory deseni, benzer nesneleri oluşturmayı standartlaştırır</em>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

console.log('Design Patterns konusu yüklendi!');
