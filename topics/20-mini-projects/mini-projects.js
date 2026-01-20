// ===== Mini Projeler - Genel Bilgiler =====
// Bu konuda, önceki tüm konuların birleştirilmesi ile projeler yapılır.

// Mini projeler örnek yapı:

// Proje 1: Hesap Makinesi
const calculator = {
  display: 0,
  
  add: function(a, b) {
    return a + b;
  },
  
  subtract: function(a, b) {
    return a - b;
  },
  
  multiply: function(a, b) {
    return a * b;
  },
  
  divide: function(a, b) {
    if (b === 0) {
      throw new Error('Sıfıra bölünemez!');
    }
    return a / b;
  }
};

// Proje 2: Todo App
const todoApp = {
  todos: [],
  
  addTodo: function(text) {
    this.todos.push({
      id: Date.now(),
      text: text,
      completed: false
    });
  },
  
  removeTodo: function(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  },
  
  toggleTodo: function(id) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }
};

// Proje 3: Not Defteri
const noteApp = {
  notes: [],
  
  addNote: function(title, content, category = 'Diğer') {
    this.notes.push({
      id: Date.now(),
      title: title,
      content: content,
      category: category,
      createdAt: new Date()
    });
  },
  
  searchNotes: function(query) {
    return this.notes.filter(note =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase())
    );
  },
  
  getNotesByCategory: function(category) {
    return this.notes.filter(note => note.category === category);
  }
};

// Proje 4: Quiz Uygulaması
const quizApp = {
  questions: [
    {
      id: 1,
      question: "JavaScript neyle kullanılır?",
      options: ["Web geliştirme", "Makine öğrenmesi", "Oyun geliştirme"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "let ve var arasındaki fark nedir?",
      options: ["Hiçbir fark yok", "let block-scoped, var function-scoped", "var daha yenidir"],
      correctAnswer: 1
    }
  ],
  score: 0,
  
  checkAnswer: function(questionId, selectedIndex) {
    const question = this.questions.find(q => q.id === questionId);
    if (question && question.correctAnswer === selectedIndex) {
      this.score++;
      return true;
    }
    return false;
  },
  
  getScore: function() {
    return {
      correct: this.score,
      total: this.questions.length,
      percentage: Math.round((this.score / this.questions.length) * 100)
    };
  }
};

// Proje 5: API ile Hava Durumu
const weatherApp = {
  apiKey: 'YOUR_API_KEY',
  apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
  
  async getWeather(cityName) {
    try {
      const response = await fetch(
        `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`
      );
      
      if (!response.ok) {
        throw new Error('Şehir bulunamadı');
      }
      
      const data = await response.json();
      
      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
    } catch (error) {
      console.error('Hata:', error.message);
      return null;
    }
  }
};

// Proje 6: GitHub Kullanıcı Arama
const githubApp = {
  apiUrl: 'https://api.github.com/users',
  
  async searchUser(username) {
    try {
      const response = await fetch(`${this.apiUrl}/${username}`);
      
      if (!response.ok) {
        throw new Error('Kullanıcı bulunamadı');
      }
      
      const data = await response.json();
      
      return {
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        publicRepos: data.public_repos,
        location: data.location
      };
    } catch (error) {
      console.error('Hata:', error.message);
      return null;
    }
  }
};

console.log('Mini Projeler konusu yüklendi!');
console.log('Proje örnekleri:', {
  calculator,
  todoApp,
  noteApp,
  quizApp,
  weatherApp,
  githubApp
});
