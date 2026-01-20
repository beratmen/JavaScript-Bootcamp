// ===== Prototypes & Inheritance =====
function showOutput(title, content) {
  const output = document.getElementById('output');
  const text = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
  output.innerHTML = `<h3>${title}</h3><pre>${text}</pre>`;
}

// 1. Prototype Demo
function prototypeDemo() {
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    return `Merhaba, ben ${this.name}`;
  };
  
  const ali = new Person("Ali");
  
  let html = `
    <h3>Prototype Örneği</h3>
    <div style="background:#f0f8ff;padding:15px;border-radius:4px;">
      <strong>Person.prototype.greet = function() { ... }</strong><br>
      const ali = new Person("Ali");<br>
      ali.greet() = <strong>"${ali.greet()}"</strong><br><br>
      <strong>💡 Metotlar prototype'ta tanımlanır, tüm instances paylaşır!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 2. Constructor Functions
function constructorFunc() {
  function Animal(name, species) {
    this.name = name;
    this.species = species;
  }
  
  Animal.prototype.speak = function() {
    return `${this.name} ses çıkardı!`;
  };
  
  const dog = new Animal("Köpek", "Canis");
  const cat = new Animal("Kedi", "Felis");
  
  let html = `
    <h3>Constructor Functions</h3>
    <div style="background:#fff3cd;padding:15px;border-radius:4px;">
      <strong>const dog = new Animal("Köpek", "Canis");</strong><br>
      dog.name = <strong>"${dog.name}"</strong><br>
      dog.speak() = <strong>"${dog.speak()}"</strong><br><br>
      <strong>const cat = new Animal("Kedi", "Felis");</strong><br>
      cat.name = <strong>"${cat.name}"</strong><br>
      cat.speak() = <strong>"${cat.speak()}"</strong><br><br>
      <strong>💡 new keyword'ü kullanarak nesneler oluşturuyoruz!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 3. Classes
function classExample() {
  class User {
    constructor(username, email) {
      this.username = username;
      this.email = email;
    }
    
    getInfo() {
      return `${this.username} (${this.email})`;
    }
  }
  
  const user1 = new User("ahmet", "ahmet@example.com");
  
  let html = `
    <h3>ES6 Classes</h3>
    <div style="background:#d4edda;padding:15px;border-radius:4px;">
      <strong>class User {<br>
      &nbsp;&nbsp;constructor(username, email) { ... }<br>
      &nbsp;&nbsp;getInfo() { ... }<br>
      }</strong><br><br>
      <strong>const user1 = new User("ahmet", "ahmet@example.com");</strong><br>
      user1.getInfo() = <strong>"${user1.getInfo()}"</strong><br><br>
      <strong>💡 Classes, Constructor Functions'ın modern ve okunabilir halidir!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

// 4. Inheritance
function inheritanceDemo() {
  class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
    
    describe() {
      return `Marka: ${this.brand}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, doors) {
      super(brand);
      this.doors = doors;
    }
    
    describe() {
      return `${super.describe()} - ${this.doors} kapılı araba`;
    }
  }
  
  const car = new Car("Toyota", 4);
  
  let html = `
    <h3>Inheritance (Miras)</h3>
    <div style="background:#f8d7da;padding:15px;border-radius:4px;">
      <strong>class Car extends Vehicle { ... }</strong><br><br>
      <strong>const car = new Car("Toyota", 4);</strong><br>
      car.brand = <strong>"${car.brand}"</strong><br>
      car.doors = <strong>${car.doors}</strong><br>
      car.describe() = <strong>"${car.describe()}"</strong><br><br>
      <strong>💡 Car, Vehicle'dan özellikleri ve metotları miras alır!</strong>
    </div>
  `;
  
  document.getElementById('output').innerHTML = html;
}

function temizle() {
  document.getElementById('output').innerHTML = 'Çıktılar burada görünecek...';
}

console.log('Prototypes & Inheritance konusu yüklendi!');
