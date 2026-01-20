# 23. Prototypes & Inheritance (Prototip & Miras)

## Konu Özeti
JavaScript, prototype-based inheritance kullanan bir dildir. Nesneler, diğer nesnelerden özellikleri ve metotları miras alabilir.

## Prototype Nedir?

```javascript
function Person(name) {
  this.name = name;
}

// Prototype'a metot ekle
Person.prototype.greet = function() {
  return `Merhaba, ben ${this.name}`;
};

const ali = new Person("Ali");
console.log(ali.greet()); // "Merhaba, ben Ali"
```

## Prototype Chain

```javascript
const obj = {};
// obj → Object.prototype → null
// Kapsam zinciri gibi, property lookup prototype chain'de olur
```

## Constructor Functions

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} ses çıkardı`);
};

const dog = new Animal("Köpek");
dog.speak(); // "Köpek ses çıkardı"
```

## Classes (Modern Syntax)

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Merhaba, ben ${this.name}`;
  }
}

const person = new Person("Ayşe");
console.log(person.greet());
```

## Inheritance

```javascript
class Animal {
  speak() {
    console.log("Ses çıkar");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Hav hav");
  }
}

const dog = new Dog();
dog.speak(); // "Hav hav"
```

## Object.create()

```javascript
const parent = {
  greet() { return "Merhaba"; }
};

const child = Object.create(parent);
console.log(child.greet()); // "Merhaba"
```

## Kaynaklar

- [MDN - Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Prototypes)
- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
