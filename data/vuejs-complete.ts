import { Course } from "@/types";

export const vuejsComplete: Course = {
  id: "vuejs-complete",
  slug: "vuejs",
  title: "Vue.js Toàn tập",
  description:
    "Học Vue.js từ cơ bản đến nâng cao với Composition API và Vue 3",
  image: "/images/vuejs-course.jpg",
  duration: "10 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Vue.js Fundamentals",
      slug: "vuejs-fundamentals",
      duration: "55 phút",
      content: `# Vue.js Fundamentals

## Giới thiệu Vue.js
Vue.js là progressive framework để xây dựng giao diện người dùng.

## Khởi tạo ứng dụng Vue

### CDN Setup
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="count++">Count: {{ count }}</button>
  </div>

  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          message: 'Hello Vue!',
          count: 0
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
\`\`\`

### Vue CLI
\`\`\`bash
npm install -g @vue/cli
vue create my-project
cd my-project
npm run serve
\`\`\`

## Directives cơ bản

### v-bind
\`\`\`html
<div v-bind:id="dynamicId"></div>
<!-- shorthand -->
<div :id="dynamicId"></div>
\`\`\`

### v-model
\`\`\`html
<input v-model="message" placeholder="Nhập tin nhắn">
<p>Tin nhắn: {{ message }}</p>
\`\`\`

### v-for
\`\`\`html
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>
\`\`\`

### v-if, v-else
\`\`\`html
<div v-if="isVisible">Nội dung hiển thị</div>
<div v-else>Nội dung thay thế</div>
\`\`\`

## Methods và Computed
\`\`\`javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      items: [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 }
      ]
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        name: 'Item ' + (this.items.length + 1),
        price: Math.random() * 100
      });
    }
  }
}
\`\`\`

## Bài tập thực hành
Hãy tạo ứng dụng Todo List đơn giản với Vue.js!`,
      exercises: [
        {
          id: "1-1",
          title: "Todo List cơ bản",
          description: "Tạo ứng dụng quản lý công việc với Vue.js",
          instructions: `Tạo ứng dụng Todo List với các chức năng:
- Thêm công việc mới
- Đánh dấu hoàn thành
- Xóa công việc
- Đếm số công việc còn lại`,
          type: "code",
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <!-- Viết code của bạn ở đây -->
  </div>

  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          newTodo: '',
          todos: []
        }
      },
      // Thêm computed và methods
    }).mount('#app');
  </script>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    .todo-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .todo-text {
      flex: 1;
    }
    button {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      cursor: pointer;
    }
    button:hover {
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Thêm công việc mới">
      <button type="submit">Thêm</button>
    </form>
    
    <div v-if="todos.length === 0" class="empty-state">
      Chưa có công việc nào. Hãy thêm công việc mới!
    </div>
    
    <div v-else>
      <div class="todo-item" v-for="(todo, index) in todos" :key="index">
        <span class="todo-text" :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodo(index)" :class="{ active: todo.completed }">
          {{ todo.completed ? '↶' : '✓' }}
        </button>
        <button @click="removeTodo(index)" class="delete-btn">✕</button>
      </div>
    </div>
    
    <div class="stats">
      <p>Tổng số: {{ todos.length }} | Đã hoàn thành: {{ completedTodos }} | Còn lại: {{ remainingTodos }}</p>
    </div>
  </div>

  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          newTodo: '',
          todos: []
        }
      },
      computed: {
        remainingTodos() {
          return this.todos.filter(todo => !todo.completed).length;
        },
        completedTodos() {
          return this.todos.filter(todo => todo.completed).length;
        }
      },
      methods: {
        addTodo() {
          if (this.newTodo.trim()) {
            this.todos.push({
              text: this.newTodo,
              completed: false,
              createdAt: new Date()
            });
            this.newTodo = '';
          }
        },
        toggleTodo(index) {
          this.todos[index].completed = !this.todos[index].completed;
        },
        removeTodo(index) {
          this.todos.splice(index, 1);
        }
      }
    }).mount('#app');
  </script>
</body>
</html>`,
        },
        {
          id: "1-2",
          title: "Máy tính đơn giản",
          description: "Tạo máy tính với các phép tính cơ bản",
          instructions:
            "Tạo máy tính với các chức năng:\n- Các phép tính cộng, trừ, nhân, chia\n- Hiển thị kết quả\n- Xóa màn hình\n- Xử lý lỗi chia cho 0",
          type: "code",
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <!-- Viết code của bạn ở đây -->
  </div>

  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          display: '0',
          // Thêm data cần thiết
        }
      },
      // Thêm methods
    }).mount('#app');
  </script>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .calculator {
      max-width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }
    .display {
      background: #000;
      color: #fff;
      padding: 15px;
      text-align: right;
      font-size: 24px;
      border-radius: 5px;
      margin-bottom: 10px;
      min-height: 40px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    button {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #ddd;
    }
    button:hover {
      background-color: #e9e9e9;
    }
    .operator {
      background-color: #ff9500;
      color: white;
    }
    .operator:hover {
      background-color: #e08500;
    }
    .equals {
      background-color: #007aff;
      color: white;
    }
    .equals:hover {
      background-color: #0069d9;
    }
    .clear {
      background-color: #ff3b30;
      color: white;
    }
    .clear:hover {
      background-color: #d32f2f;
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="calculator">
      <div class="display">{{ display }}</div>
      <div class="buttons">
        <button @click="clear" class="clear">C</button>
        <button @click="appendOperator('/')" class="operator">/</button>
        <button @click="appendOperator('*')" class="operator">×</button>
        <button @click="appendOperator('-')" class="operator">-</button>
        
        <button @click="appendNumber('7')">7</button>
        <button @click="appendNumber('8')">8</button>
        <button @click="appendNumber('9')">9</button>
        <button @click="appendOperator('+')" class="operator" style="grid-row: span 2">+</button>
        
        <button @click="appendNumber('4')">4</button>
        <button @click="appendNumber('5')">5</button>
        <button @click="appendNumber('6')">6</button>
        
        <button @click="appendNumber('1')">1</button>
        <button @click="appendNumber('2')">2</button>
        <button @click="appendNumber('3')">3</button>
        <button @click="calculate" class="equals" style="grid-row: span 2">=</button>
        
        <button @click="appendNumber('0')" style="grid-column: span 2">0</button>
        <button @click="appendDecimal()">.</button>
      </div>
    </div>
  </div>

  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          display: '0',
          currentInput: '',
          previousInput: '',
          operator: null,
          waitingForNewInput: false
        }
      },
      methods: {
        appendNumber(number) {
          if (this.waitingForNewInput) {
            this.display = number;
            this.waitingForNewInput = false;
          } else {
            this.display = this.display === '0' ? number : this.display + number;
          }
        },
        appendDecimal() {
          if (this.waitingForNewInput) {
            this.display = '0.';
            this.waitingForNewInput = false;
            return;
          }
          
          if (!this.display.includes('.')) {
            this.display += '.';
          }
        },
        appendOperator(nextOperator) {
          const inputValue = parseFloat(this.display);
          
          if (this.previousInput === '') {
            this.previousInput = inputValue;
          } else if (this.operator) {
            const result = this.calculateResult();
            this.display = String(result);
            this.previousInput = result;
          }
          
          this.waitingForNewInput = true;
          this.operator = nextOperator;
        },
        calculate() {
          const inputValue = parseFloat(this.display);
          
          if (this.previousInput !== '' && this.operator) {
            const result = this.calculateResult();
            this.display = String(result);
            this.previousInput = '';
            this.operator = null;
            this.waitingForNewInput = true;
          }
        },
        calculateResult() {
          const prev = parseFloat(this.previousInput);
          const current = parseFloat(this.display);
          
          if (isNaN(prev) || isNaN(current)) return '';
          
          switch (this.operator) {
            case '+':
              return prev + current;
            case '-':
              return prev - current;
            case '*':
              return prev * current;
            case '/':
              if (current === 0) {
                alert('Lỗi: Không thể chia cho 0!');
                return 0;
              }
              return prev / current;
            default:
              return current;
          }
        },
        clear() {
          this.display = '0';
          this.currentInput = '';
          this.previousInput = '';
          this.operator = null;
          this.waitingForNewInput = false;
        }
      }
    }).mount('#app');
  </script>
</body>
</html>`,
        },
      ],
    },
    {
      id: "2",
      title: "Composition API",
      slug: "composition-api",
      duration: "70 phút",
      prerequisites: ["1"],
      content: `# Composition API trong Vue 3

## Giới thiệu Composition API
Composition API là cách mới để tổ chức logic trong Vue components.

## Setup Function
\`\`\`vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Tăng</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const title = ref('Vue 3 Composition API')
    const count = ref(0)
    
    const increment = () => {
      count.value++
    }
    
    const doubleCount = computed(() => count.value * 2)
    
    return {
      title,
      count,
      increment,
      doubleCount
    }
  }
}
</script>
\`\`\`

## Script Setup (Syntactic Sugar)
\`\`\`vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Tăng</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const title = ref('Vue 3 Script Setup')
const count = ref(0)

const increment = () => {
  count.value++
}

const doubleCount = computed(() => count.value * 2)
</script>
\`\`\`

## Reactivity Fundamentals

### ref()
\`\`\`javascript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
\`\`\`

### reactive()
\`\`\`javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  name: 'Vue'
})

console.log(state.count) // 0
state.count++
\`\`\`

## Lifecycle Hooks
\`\`\`vue
<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
\`\`\`

## Composables - Custom Hooks
\`\`\`javascript
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
\`\`\`

\`\`\`vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement } = useCounter(10)
</script>
\`\`\`

## Bài tập thực hành
Hãy tạo custom composable cho việc quản lý state!`,
      exercises: [
        {
          id: "2-1",
          title: "Tạo useTodo Composable",
          description: "Tách logic todo list thành composable",
          instructions: `Tạo composable useTodo chứa tất cả logic cho todo list và sử dụng trong component`,
          type: "code",
          starterCode: `// composables/useTodo.js
import { ref, computed } from 'vue'

export function useTodo() {
  // Viết code của bạn ở đây
}

// TodoComponent.vue
<script setup>
// Sử dụng useTodo composable
</script>`,
          solution: `// composables/useTodo.js
import { ref, computed } from 'vue'

export function useTodo() {
  const todos = ref([])
  const newTodo = ref('')
  
  const remainingTodos = computed(() => 
    todos.value.filter(todo => !todo.completed).length
  )
  
  const completedTodos = computed(() =>
    todos.value.filter(todo => todo.completed).length
  )
  
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push({
        id: Date.now(),
        text: newTodo.value,
        completed: false,
        createdAt: new Date()
      })
      newTodo.value = ''
    }
  }
  
  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }
  
  const removeTodo = (id) => {
    todos.value = todos.value.filter(t => t.id !== id)
  }
  
  const clearCompleted = () => {
    todos.value = todos.value.filter(t => !t.completed)
  }
  
  return {
    todos,
    newTodo,
    remainingTodos,
    completedTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted
  }
}

// TodoComponent.vue
<template>
  <div class="todo-app">
    <h1>Todo List với Composition API</h1>
    
    <form @submit.prevent="addTodo" class="todo-form">
      <input 
        v-model="newTodo" 
        placeholder="Thêm công việc mới..."
        class="todo-input"
      >
      <button type="submit" class="add-btn">Thêm</button>
    </form>
    
    <div v-if="todos.length === 0" class="empty-state">
      🎉 Chưa có công việc nào. Hãy thêm công việc mới!
    </div>
    
    <div v-else class="todo-list">
      <div 
        v-for="todo in todos" 
        :key="todo.id" 
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <div class="todo-content">
          <input 
            type="checkbox" 
            :checked="todo.completed"
            @change="toggleTodo(todo.id)"
            class="todo-checkbox"
          >
          <span class="todo-text">{{ todo.text }}</span>
        </div>
        <button 
          @click="removeTodo(todo.id)" 
          class="delete-btn"
          title="Xóa công việc"
        >
          ✕
        </button>
      </div>
    </div>
    
    <div v-if="todos.length > 0" class="todo-stats">
      <span>{{ remainingTodos }} công việc còn lại</span>
      <button 
        v-if="completedTodos > 0"
        @click="clearCompleted" 
        class="clear-btn"
      >
        Xóa đã hoàn thành
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodo } from '@/composables/useTodo'

const { 
  todos, 
  newTodo, 
  remainingTodos, 
  completedTodos, 
  addTodo, 
  toggleTodo, 
  removeTodo,
  clearCompleted
} = useTodo()
</script>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 16px;
}

.todo-input:focus {
  outline: none;
  border-color: #4CAF50;
}

.add-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.add-btn:hover {
  background-color: #45a049;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
}

.todo-list {
  space-y: 10px;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.todo-item.completed {
  opacity: 0.7;
  background-color: #f8f9fa;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  font-size: 16px;
  color: #333;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #ffeaea;
}

.todo-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e5e9;
  color: #666;
}

.clear-btn {
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  background-color: #ff5252;
}
</style>`,
        },
        {
          id: "2-2",
          title: "useLocalStorage Composable",
          description: "Tạo composable để lưu dữ liệu vào localStorage",
          instructions:
            "Tạo composable useLocalStorage để tự động lưu và đọc dữ liệu từ localStorage",
          type: "code",
          starterCode: `// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  // Viết code của bạn ở đây
}

// Sử dụng trong component
<script setup>
// Sử dụng useLocalStorage cho todos
</script>`,
          solution: `// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const data = ref(defaultValue)
  
  // Đọc dữ liệu từ localStorage khi khởi tạo
  try {
    const item = window.localStorage.getItem(key)
    if (item) {
      data.value = JSON.parse(item)
    }
  } catch (error) {
    console.error(\`Lỗi khi đọc từ localStorage key "\${key}":\`, error)
  }
  
  // Theo dõi thay đổi và lưu vào localStorage
  watch(data, (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error(\`Lỗi khi lưu vào localStorage key "\${key}":\`, error)
    }
  }, { deep: true })
  
  return data
}

// Sử dụng trong TodoComponent.vue
<template>
  <div class="todo-app">
    <h1>Todo List với LocalStorage</h1>
    <p>Dữ liệu sẽ được tự động lưu và khôi phục</p>
    
    <form @submit.prevent="addTodo" class="todo-form">
      <input 
        v-model="newTodo" 
        placeholder="Thêm công việc mới..."
        class="todo-input"
      >
      <button type="submit" class="add-btn">Thêm</button>
    </form>
    
    <div class="todo-actions">
      <button @click="clearAll" class="clear-all-btn" v-if="todos.length > 0">
        Xóa tất cả
      </button>
    </div>
    
    <!-- Phần còn lại giống như bài trước -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocalStorage } from '@/composables/useLocalStorage'

// Sử dụng useLocalStorage để lưu todos
const todos = useLocalStorage('vue-todos', [])
const newTodo = ref('')

const remainingTodos = computed(() => 
  todos.value.filter(todo => !todo.completed).length
)

const completedTodos = computed(() =>
  todos.value.filter(todo => todo.completed).length
)

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false,
      createdAt: new Date()
    })
    newTodo.value = ''
  }
}

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

const clearCompleted = () => {
  todos.value = todos.value.filter(t => !t.completed)
}

const clearAll = () => {
  if (confirm('Bạn có chắc muốn xóa tất cả công việc?')) {
    todos.value = []
  }
}
</script>

<style>
.todo-actions {
  margin-bottom: 20px;
}

.clear-all-btn {
  padding: 8px 16px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.clear-all-btn:hover {
  background-color: #ff3742;
}

/* Thêm các style khác từ bài trước */
</style>`,
        },
      ],
    },
    {
      id: "3",
      title: "Components và Props",
      slug: "components-props",
      duration: "65 phút",
      prerequisites: ["2"],
      content: `# Components và Props

## Giới thiệu Components
Components cho phép chia nhỏ UI thành các phần tái sử dụng.

## Đăng ký Components

### Global Components
\`\`\`javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('MyComponent', {
  template: '<div>My Global Component</div>'
})

app.mount('#app')
\`\`\`

### Local Components
\`\`\`vue
<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  }
}
</script>
\`\`\`

## Props

### Định nghĩa Props
\`\`\`vue
<!-- ChildComponent.vue -->
<template>
  <div class="user-card">
    <h3>{{ name }}</h3>
    <p>Email: {{ email }}</p>
    <p>Tuổi: {{ age }}</p>
    <p v-if="isAdmin">Quản trị viên</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: 'No email provided'
    },
    age: {
      type: Number,
      validator: (value) => value >= 0
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
\`\`\`

### Truyền Props
\`\`\`vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <user-card 
      name="John Doe"
      email="john@example.com"
      :age="25"
      :is-admin="true"
    />
    <user-card 
      name="Jane Smith"
      :age="30"
    />
  </div>
</template>
\`\`\`

## Slots

### Default Slot
\`\`\`vue
<!-- BaseLayout.vue -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
\`\`\`

### Sử dụng Slots
\`\`\`vue
<template>
  <base-layout>
    <template #header>
      <h1>Tiêu đề trang</h1>
    </template>
    
    <p>Nội dung chính của trang</p>
    
    <template #footer>
      <p>Bản quyền 2024</p>
    </template>
  </base-layout>
</template>
\`\`\`

## Emits (Custom Events)

### Định nghĩa Emits
\`\`\`vue
<!-- TodoItem.vue -->
<template>
  <div class="todo-item">
    <span :class="{ completed: todo.completed }">
      {{ todo.text }}
    </span>
    <button @click="$emit('toggle', todo.id)">
      {{ todo.completed ? 'Hoàn tác' : 'Hoàn thành' }}
    </button>
    <button @click="$emit('delete', todo.id)">Xóa</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  emits: ['toggle', 'delete']
}
</script>
\`\`\`

### Sử dụng Emits
\`\`\`vue
<template>
  <div>
    <todo-item 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="toggleTodo"
      @delete="removeTodo"
    />
  </div>
</template>
\`\`\`

## Provide/Inject

### Provide từ Component cha
\`\`\`vue
<script setup>
import { provide, ref } from 'vue'

const user = ref({
  name: 'John Doe',
  role: 'admin'
})

const updateUser = (newUser) => {
  user.value = { ...user.value, ...newUser }
}

provide('user', {
  user,
  updateUser
})
</script>
\`\`\`

### Inject từ Component con
\`\`\`vue
<script setup>
import { inject } from 'vue'

const { user, updateUser } = inject('user')

const changeName = () => {
  updateUser({ name: 'Jane Smith' })
}
</script>
\`\`\``,
      exercises: [
        {
          id: "3-1",
          title: "Xây dựng Component Library",
          description: "Tạo các components tái sử dụng: Button, Card, Modal",
          instructions:
            "Tạo các components:\n- BaseButton: component button với các variants\n- BaseCard: component card với slots\n- BaseModal: component modal với emit events",
          type: "code",
          starterCode: `// BaseButton.vue
<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

// BaseCard.vue
<template>
  <div class="base-card">
    <!-- Thêm slots -->
  </div>
</template>

// BaseModal.vue
<template>
  <div class="modal-overlay" v-if="show">
    <!-- Thêm modal content -->
  </div>
</template>`,
          solution: `// BaseButton.vue
<template>
  <button 
    :class="['base-button', \`button-\${variant}\`, \`button-\${size}\`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.base-button {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: all 0.2s ease;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-small {
  padding: 8px 16px;
  font-size: 14px;
}

.button-medium {
  padding: 12px 24px;
  font-size: 16px;
}

.button-large {
  padding: 16px 32px;
  font-size: 18px;
}

.button-primary {
  background-color: #3b82f6;
  color: white;
}

.button-primary:hover:not(:disabled) {
  background-color: #2563eb;
}

.button-secondary {
  background-color: #6b7280;
  color: white;
}

.button-secondary:hover:not(:disabled) {
  background-color: #4b5563;
}

.button-danger {
  background-color: #ef4444;
  color: white;
}

.button-danger:hover:not(:disabled) {
  background-color: #dc2626;
}
</style>

// BaseCard.vue
<template>
  <div :class="['base-card', \`card-\${shadow}\`]">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  shadow: {
    type: String,
    default: 'medium',
    validator: (value) => ['none', 'small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.base-card {
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.card-none {
  box-shadow: none;
}

.card-small {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-medium {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-large {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}
</style>

// BaseModal.vue
<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click.self="handleOverlayClick">
      <div :class="['modal', \`modal-\${size}\`]">
        <div class="modal-header">
          <h3 v-if="title">{{ title }}</h3>
          <slot v-else name="header"></slot>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>
        
        <div class="modal-body">
          <slot></slot>
        </div>
        
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  closeOnOverlay: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:show', 'close'])

const closeModal = () => {
  emit('update:show', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    closeModal()
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-small {
  width: 400px;
}

.modal-medium {
  width: 600px;
}

.modal-large {
  width: 800px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  color: #6b7280;
}

.modal-close:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.modal-body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>`,
        },
      ],
    },
    {
      id: "4",
      title: "Vue Router",
      slug: "vue-router",
      duration: "60 phút",
      prerequisites: ["3"],
      content: `# Vue Router

## Giới thiệu Vue Router
Vue Router là thư viện routing chính thức cho Vue.js.

## Cài đặt và Cấu hình

### Cài đặt
\`\`\`bash
npm install vue-router@4
\`\`\`

### Cấu hình Router
\`\`\`javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/User.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
\`\`\`

### Kết nối với App
\`\`\`javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
\`\`\`

## Router Links và Views

### RouterLink
\`\`\`vue
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'User', params: { id: 123 } }">
      User Profile
    </router-link>
  </nav>
</template>
\`\`\`

### RouterView
\`\`\`vue
<template>
  <div id="app">
    <nav>
      <!-- Navigation links -->
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
\`\`\`

## Route Parameters và Query

### Dynamic Routes
\`\`\`vue
<template>
  <div>
    <h1>User Profile</h1>
    <p>User ID: {{ $route.params.id }}</p>
    <p>Query: {{ $route.query.search }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log('User ID:', this.$route.params.id)
  }
}
</script>
\`\`\`

### Composition API
\`\`\`vue
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const userId = route.params.id
const searchQuery = route.query.search

const goToHome = () => {
  router.push('/')
}

const goToUser = (id) => {
  router.push({ name: 'User', params: { id } })
}
</script>
\`\`\`

## Navigation Guards

### Global Guards
\`\`\`javascript
// router/index.js
router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuth()
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
\`\`\`

### Route-specific Guards
\`\`\`javascript
{
  path: '/dashboard',
  component: Dashboard,
  beforeEnter: (to, from, next) => {
    if (!isAdmin()) {
      next('/unauthorized')
    } else {
      next()
    }
  }
}
\`\`\`

### Component Guards
\`\`\`vue
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // Không thể truy cập this
    next(vm => {
      // Có thể truy cập component instance qua vm
    })
  },
  
  beforeRouteUpdate(to, from, next) {
    // React to route changes
    this.userData = null
    this.fetchUserData(to.params.id)
    next()
  },
  
  beforeRouteLeave(to, from, next) {
    if (this.hasUnsavedChanges) {
      if (confirm('Bạn có chắc muốn rời đi? Thay đổi chưa được lưu sẽ mất.')) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>
\`\`\`

## Nested Routes

### Cấu hình Nested Routes
\`\`\`javascript
{
  path: '/user/:id',
  component: User,
  children: [
    {
      path: '',
      component: UserProfile
    },
    {
      path: 'posts',
      component: UserPosts
    },
    {
      path: 'settings',
      component: UserSettings
    }
  ]
}
\`\`\`

### Sử dụng trong Template
\`\`\`vue
<template>
  <div class="user">
    <nav class="user-nav">
      <router-link :to="\`/user/\${$route.params.id}\`">Profile</router-link>
      <router-link :to="\`/user/\${$route.params.id}/posts\`">Posts</router-link>
      <router-link :to="\`/user/\${$route.params.id}/settings\`">Settings</router-link>
    </nav>
    
    <div class="user-content">
      <router-view></router-view>
    </div>
  </div>
</template>
\`\`\``,
      exercises: [
        {
          id: "4-1",
          title: "Xây dựng Blog với Vue Router",
          description: "Tạo ứng dụng blog đa trang với routing",
          instructions:
            "Tạo ứng dụng blog với các trang:\n- Trang chủ: hiển thị danh sách bài viết\n- Trang bài viết: hiển thị chi tiết bài viết\n- Trang about: giới thiệu\n- Navigation guard cho trang admin",
          type: "code",
          starterCode: `// Tạo cấu trúc routes
// views/Home.vue, views/Post.vue, views/About.vue
// components/AppNav.vue`,
          solution: `// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Trang chủ' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: 'Giới thiệu' }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('@/views/Post.vue'),
    props: true,
    meta: { title: 'Bài viết' }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    meta: { requiresAuth: true, title: 'Quản trị' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: 'Đăng nhập' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Không tìm thấy' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title ? \`\${to.meta.title} - My Blog\` : 'My Blog'
  
  // Check authentication for protected routes
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true'
}

export default router

// App.vue
<template>
  <div id="app">
    <AppNav />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>

// components/AppNav.vue
<template>
  <nav class="app-nav">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">
        My Blog
      </router-link>
      
      <div class="nav-links">
        <router-link to="/" class="nav-link">Trang chủ</router-link>
        <router-link to="/about" class="nav-link">Giới thiệu</router-link>
        <router-link v-if="isAuthenticated" to="/admin" class="nav-link">
          Quản trị
        </router-link>
        <button 
          v-if="isAuthenticated" 
          @click="logout" 
          class="nav-link logout-btn"
        >
          Đăng xuất
        </button>
        <router-link v-else to="/login" class="nav-link login-btn">
          Đăng nhập
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isAuthenticated = computed(() => 
  localStorage.getItem('isAuthenticated') === 'true'
)

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/')
}
</script>

<style scoped>
.app-nav {
  background: #2c3e50;
  color: white;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-brand {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.logout-btn, .login-btn {
  background: #e74c3c;
  border: none;
  cursor: pointer;
}

.logout-btn:hover {
  background: #c0392b;
}

.login-btn {
  background: #27ae60;
}

.login-btn:hover {
  background: #219a52;
}
</style>

// views/Home.vue
<template>
  <div class="home">
    <h1>Bài viết mới nhất</h1>
    
    <div class="posts-grid">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="post-card"
        @click="$router.push({ name: 'Post', params: { id: post.id } })"
      >
        <h3>{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-meta">
          <span>{{ formatDate(post.createdAt) }}</span>
          <span>•</span>
          <span>{{ post.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  // Simulate API call
  posts.value = [
    {
      id: 1,
      title: 'Vue.js Composition API Guide',
      excerpt: 'Hướng dẫn toàn diện về Composition API trong Vue 3',
      author: 'John Doe',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Vue Router Best Practices',
      excerpt: 'Các best practices khi sử dụng Vue Router',
      author: 'Jane Smith',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 3,
      title: 'State Management với Pinia',
      excerpt: 'Quản lý state trong Vue ứng dụng với Pinia',
      author: 'Mike Johnson',
      createdAt: new Date('2024-01-05')
    }
  ]
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}
</script>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.post-card {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.post-excerpt {
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  gap: 8px;
  color: #888;
  font-size: 14px;
}
</style>

// views/Post.vue
<template>
  <div class="post" v-if="post">
    <article>
      <h1>{{ post.title }}</h1>
      
      <div class="post-meta">
        <span>Tác giả: {{ post.author }}</span>
        <span>•</span>
        <span>Ngày đăng: {{ formatDate(post.createdAt) }}</span>
      </div>
      
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      
      <div class="post-actions">
        <button @click="$router.back()" class="back-btn">← Quay lại</button>
      </div>
    </article>
  </div>
  
  <div v-else class="loading">
    <p>Đang tải...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  // Simulate API call to fetch post by ID
  const posts = {
    1: {
      id: 1,
      title: 'Vue.js Composition API Guide',
      author: 'John Doe',
      createdAt: new Date('2024-01-15'),
      content: 'Composition API là một trong những tính năng quan trọng nhất của Vue 3...'
    },
    2: {
      id: 2,
      title: 'Vue Router Best Practices',
      author: 'Jane Smith',
      createdAt: new Date('2024-01-10'),
      content: 'Vue Router cung cấp routing cho single-page applications...'
    },
    3: {
      id: 3,
      title: 'State Management với Pinia',
      author: 'Mike Johnson',
      createdAt: new Date('2024-01-05'),
      content: 'Pinia là state management library chính thức cho Vue...'
    }
  }
  
  post.value = posts[route.params.id]
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
}

.post h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.post-meta {
  color: #666;
  margin-bottom: 30px;
  display: flex;
  gap: 8px;
}

.post-content {
  line-height: 1.8;
  font-size: 16px;
}

.post-actions {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e1e5e9;
}

.back-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.back-btn:hover {
  background: #5a6268;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
}
</style>`,
        },
      ],
    },
    {
      id: "5",
      title: "State Management với Pinia",
      slug: "state-management-pinia",
      duration: "75 phút",
      prerequisites: ["4"],
      content: `# State Management với Pinia

## Giới thiệu Pinia
Pinia là state management library chính thức cho Vue.js.

## Cài đặt và Cấu hình

### Cài đặt
\`\`\`bash
npm install pinia
\`\`\`

### Cấu hình
\`\`\`javascript
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
\`\`\`

## Tạo Store

### Option Stores
\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'My Counter'
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    }
  },
  
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment()
    }
  }
})
\`\`\`

### Setup Stores
\`\`\`javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => user.value !== null)
  
  function login(userData) {
    user.value = userData
  }
  
  function logout() {
    user.value = null
  }
  
  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})
\`\`\`

## Sử dụng Store trong Components

### Composition API
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

// Sử dụng storeToRefs để giữ reactivity
const { count, doubleCount } = storeToRefs(counterStore)
const { increment, decrement } = counterStore
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
\`\`\`

### Options API
\`\`\`vue
<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default {
  computed: {
    ...mapState(useCounterStore, ['count', 'doubleCount'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement'])
  }
}
</script>
\`\`\`

## Advanced Patterns

### Multiple Stores
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'

const counterStore = useCounterStore()
const userStore = useUserStore()

// Truy cập multiple stores
const combinedData = computed(() => ({
  count: counterStore.count,
  userName: userStore.user?.name
}))
</script>
\`\`\`

### Store Subscriptions
\`\`\`javascript
// Theo dõi state changes
counterStore.$subscribe((mutation, state) => {
  console.log('State changed:', mutation, state)
})

// Theo dõi action calls
counterStore.$onAction(({ name, store, args, after, onError }) => {
  console.log('Action called:', name)
  
  after((result) => {
    console.log('Action finished:', name, result)
  })
  
  onError((error) => {
    console.error('Action failed:', name, error)
  })
})
\`\`\`

### Persistence với Pinia Plugin
\`\`\`javascript
// plugins/persistence.js
import { createPinia } from 'pinia'

const pinia = createPinia()

pinia.use(({ store }) => {
  // Khôi phục state từ localStorage
  const savedState = localStorage.getItem(store.$id)
  if (savedState) {
    store.$patch(JSON.parse(savedState))
  }
  
  // Lưu state khi có thay đổi
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state))
  })
})

export default pinia
\`\`\``,
      exercises: [
        {
          id: "5-1",
          title: "Todo App với Pinia",
          description:
            "Tái cấu trúc Todo App sử dụng Pinia cho state management",
          instructions:
            "Tạo stores cho:\n- Todo store: quản lý todos và các actions\n- UI store: quản lý theme, loading states\n- Sử dụng multiple stores trong component",
          type: "code",
          starterCode: `// stores/todo.js
export const useTodoStore = defineStore('todo', {
  // Viết state, getters, actions
})

// stores/ui.js  
export const useUIStore = defineStore('ui', () => {
  // Viết setup store
})

// components/TodoApp.vue
<script setup>
// Sử dụng stores
</script>`,
          solution: `// stores/todo.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    filter: 'all', // all, active, completed
    loading: false
  }),
  
  getters: {
    filteredTodos: (state) => {
      switch (state.filter) {
        case 'active':
          return state.todos.filter(todo => !todo.completed)
        case 'completed':
          return state.todos.filter(todo => todo.completed)
        default:
          return state.todos
      }
    },
    
    stats: (state) => {
      const total = state.todos.length
      const completed = state.todos.filter(todo => todo.completed).length
      const active = total - completed
      
      return {
        total,
        completed,
        active
      }
    },
    
    hasTodos: (state) => state.todos.length > 0
  },
  
  actions: {
    async addTodo(text) {
      if (!text.trim()) return
      
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      }
      
      this.todos.unshift(newTodo)
    },
    
    async toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    async removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    
    async updateTodo(id, updates) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        Object.assign(todo, updates)
      }
    },
    
    async clearCompleted() {
      this.todos = this.todos.filter(t => !t.completed)
    },
    
    setFilter(filter) {
      if (['all', 'active', 'completed'].includes(filter)) {
        this.filter = filter
      }
    },
    
    // Simulate async operation
    async fetchTodos() {
      this.loading = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.todos = [
          {
            id: 1,
            text: 'Học Vue.js cơ bản',
            completed: true,
            createdAt: new Date('2024-01-01')
          },
          {
            id: 2,
            text: 'Tìm hiểu Pinia',
            completed: false,
            createdAt: new Date('2024-01-02')
          },
          {
            id: 3,
            text: 'Xây dựng dự án thực tế',
            completed: false,
            createdAt: new Date('2024-01-03')
          }
        ]
      } catch (error) {
        console.error('Failed to fetch todos:', error)
      } finally {
        this.loading = false
      }
    }
  }
})

// stores/ui.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const theme = ref('light')
  const sidebarOpen = ref(false)
  const notifications = ref([])
  
  const isDark = computed(() => theme.value === 'dark')
  
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }
  
  function addNotification(message, type = 'info') {
    const id = Date.now()
    notifications.value.push({
      id,
      message,
      type,
      timestamp: new Date()
    })
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }
  
  function removeNotification(id) {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }
  
  function clearNotifications() {
    notifications.value = []
  }
  
  return {
    theme,
    sidebarOpen,
    notifications,
    isDark,
    toggleTheme,
    toggleSidebar,
    addNotification,
    removeNotification,
    clearNotifications
  }
})

// components/TodoApp.vue
<template>
  <div :class="['todo-app', { 'dark-theme': uiStore.isDark }]">
    <div class="app-header">
      <h1>Todo App với Pinia</h1>
      <div class="header-actions">
        <button @click="uiStore.toggleTheme" class="theme-toggle">
          {{ uiStore.isDark ? '☀️' : '🌙' }}
        </button>
        <button @click="loadSampleData" class="load-btn">
          Tải dữ liệu mẫu
        </button>
      </div>
    </div>
    
    <!-- Notifications -->
    <div class="notifications">
      <div 
        v-for="notification in uiStore.notifications" 
        :key="notification.id"
        :class="['notification', \`notification-\${notification.type}\`]"
        @click="uiStore.removeNotification(notification.id)"
      >
        {{ notification.message }}
      </div>
    </div>
    
    <div class="todo-container">
      <!-- Add Todo Form -->
      <form @submit.prevent="addNewTodo" class="todo-form">
        <input 
          v-model="newTodo" 
          placeholder="Thêm công việc mới..."
          class="todo-input"
          :disabled="todoStore.loading"
        >
        <button 
          type="submit" 
          class="add-btn"
          :disabled="todoStore.loading || !newTodo.trim()"
        >
          {{ todoStore.loading ? '...' : 'Thêm' }}
        </button>
      </form>
      
      <!-- Filters -->
      <div class="filters">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          :class="['filter-btn', { active: todoStore.filter === filter.value }]"
          @click="todoStore.setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
      
      <!-- Loading State -->
      <div v-if="todoStore.loading" class="loading">
        <p>Đang tải...</p>
      </div>
      
      <!-- Todo List -->
      <div v-else class="todo-list">
        <div 
          v-for="todo in todoStore.filteredTodos" 
          :key="todo.id" 
          class="todo-item"
          :class="{ completed: todo.completed }"
        >
          <div class="todo-content">
            <input 
              type="checkbox" 
              :checked="todo.completed"
              @change="todoStore.toggleTodo(todo.id)"
              class="todo-checkbox"
            >
            <span class="todo-text">{{ todo.text }}</span>
            <span class="todo-date">
              {{ formatDate(todo.createdAt) }}
            </span>
          </div>
          <button 
            @click="removeTodo(todo.id)" 
            class="delete-btn"
            title="Xóa công việc"
          >
            ✕
          </button>
        </div>
        
        <div v-if="todoStore.filteredTodos.length === 0" class="empty-state">
          <template v-if="todoStore.filter === 'active'">
            🎉 Không có công việc nào đang chờ!
          </template>
          <template v-else-if="todoStore.filter === 'completed'">
            📝 Chưa có công việc nào hoàn thành!
          </template>
          <template v-else>
            🚀 Hãy thêm công việc đầu tiên của bạn!
          </template>
        </div>
      </div>
      
      <!-- Stats and Actions -->
      <div v-if="todoStore.hasTodos" class="todo-footer">
        <div class="stats">
          <span>{{ todoStore.stats.active }} công việc còn lại</span>
        </div>
        
        <div class="actions">
          <button 
            v-if="todoStore.stats.completed > 0"
            @click="clearCompleted" 
            class="clear-btn"
          >
            Xóa đã hoàn thành ({{ todoStore.stats.completed }})
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import { useUIStore } from '@/stores/ui'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const uiStore = useUIStore()

const { stats, hasTodos } = storeToRefs(todoStore)

const newTodo = ref('')
const filters = [
  { value: 'all', label: 'Tất cả' },
  { value: 'active', label: 'Đang làm' },
  { value: 'completed', label: 'Đã hoàn thành' }
]

const addNewTodo = async () => {
  try {
    await todoStore.addTodo(newTodo.value)
    newTodo.value = ''
    uiStore.addNotification('Đã thêm công việc mới!', 'success')
  } catch (error) {
    uiStore.addNotification('Lỗi khi thêm công việc!', 'error')
  }
}

const removeTodo = async (id) => {
  try {
    await todoStore.removeTodo(id)
    uiStore.addNotification('Đã xóa công việc!', 'success')
  } catch (error) {
    uiStore.addNotification('Lỗi khi xóa công việc!', 'error')
  }
}

const clearCompleted = async () => {
  try {
    await todoStore.clearCompleted()
    uiStore.addNotification('Đã xóa công việc đã hoàn thành!', 'success')
  } catch (error) {
    uiStore.addNotification('Lỗi khi xóa công việc!', 'error')
  }
}

const loadSampleData = async () => {
  try {
    await todoStore.fetchTodos()
    uiStore.addNotification('Đã tải dữ liệu mẫu!', 'success')
  } catch (error) {
    uiStore.addNotification('Lỗi khi tải dữ liệu!', 'error')
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

onMounted(() => {
  // Load initial data
  todoStore.fetchTodos()
})
</script>

<style scoped>
.todo-app {
  min-height: 100vh;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.todo-app.dark-theme {
  background-color: #1a1a1a;
  color: #ffffff;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #e1e5e9;
}

.dark-theme .app-header {
  background: #2d3748;
  border-bottom-color: #4a5568;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.theme-toggle, .load-btn {
  padding: 8px 16px;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  background: white;
  cursor: pointer;
}

.dark-theme .theme-toggle,
.dark-theme .load-btn {
  background: #4a5568;
  color: white;
  border-color: #718096;
}

.notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.notification {
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.notification-info {
  background: #bee3f8;
  color: #2c5282;
}

.notification-success {
  background: #c6f6d5;
  color: #276749;
}

.notification-error {
  background: #fed7d7;
  color: #c53030;
}

.todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Các style khác tương tự như trước */
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 16px;
}

.dark-theme .todo-input {
  background: #4a5568;
  color: white;
  border-color: #718096;
}

.add-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e1e5e9;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.dark-theme .filter-btn {
  background: #4a5568;
  color: white;
  border-color: #718096;
}

.filter-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.dark-theme .todo-item {
  background: #2d3748;
  border-color: #4a5568;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.todo-item.completed {
  opacity: 0.7;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  font-size: 16px;
  flex: 1;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.todo-date {
  font-size: 12px;
  color: #888;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #ffeaea;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e5e9;
}

.dark-theme .todo-footer {
  border-top-color: #4a5568;
}

.stats {
  color: #666;
}

.clear-btn {
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  background-color: #ff5252;
}
</style>`,
        },
      ],
    },
  ],
};
