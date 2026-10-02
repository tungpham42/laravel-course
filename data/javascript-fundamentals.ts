import { Course } from "@/types";

export const javascriptFundamentals: Course = {
  id: "javascript-fundamentals",
  slug: "javascript",
  title: "JavaScript Cơ bản",
  description:
    "Học JavaScript từ đầu với các khái niệm cơ bản và ví dụ thực tế",
  image: "/images/javascript-course.jpg",
  duration: "8 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Biến, Kiểu dữ liệu và Toán tử",
      slug: "bien-kieu-du-lieu-toan-tu",
      duration: "40 phút",
      content: `# Biến, Kiểu dữ liệu và Toán tử trong JavaScript

## Khai báo biến
\`\`\`javascript
// Khai báo với var (không nên dùng)
var oldVariable = "value";

// Khai báo với let (có thể thay đổi)
let name = "John";
name = "Jane";

// Khai báo với const (không thể thay đổi)
const PI = 3.14;
// PI = 3.15; // Lỗi!
\`\`\`

## Các kiểu dữ liệu cơ bản

### String
\`\`\`javascript
let message = "Hello World";
let name = 'John';
let template = \`Hello \${name}\`;
\`\`\`

### Number
\`\`\`javascript
let integer = 42;
let float = 3.14;
let negative = -10;
\`\`\`

### Boolean
\`\`\`javascript
let isActive = true;
let isCompleted = false;
\`\`\`

### Array
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
\`\`\`

### Object
\`\`\`javascript
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
\`\`\`

## Toán tử

### Toán tử số học
\`\`\`javascript
let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000
\`\`\`

### Toán tử so sánh
\`\`\`javascript
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false
console.log(5 == "5"); // true (chỉ so giá trị)
console.log(5 === "5"); // false (so cả kiểu dữ liệu)
\`\`\`

### Toán tử logic
\`\`\`javascript
let x = true, y = false;

console.log(x && y); // false (AND)
console.log(x || y); // true (OR)
console.log(!x);     // false (NOT)
\`\`\`

## Bài tập thực hành
Hãy thực hành với các biến và toán tử!`,
      exercises: [
        {
          id: "1-1",
          title: "Tính toán cơ bản",
          description: "Thực hành với biến và toán tử số học",
          instructions: `Viết chương trình tính:
1. Diện tích hình chữ nhật (chiều dài = 10, chiều rộng = 5)
2. Chu vi hình tròn (bán kính = 7, PI = 3.14)
3. Chuyển đổi nhiệt độ từ Celsius sang Fahrenheit`,
          type: "code",
          starterCode: `// Viết code của bạn ở đây
let length = 10;
let width = 5;

// 1. Tính diện tích hình chữ nhật

// 2. Tính chu vi hình tròn

// 3. Chuyển đổi nhiệt độ`,
          solution: `let length = 10;
let width = 5;

// 1. Tính diện tích hình chữ nhật
let rectangleArea = length * width;
console.log("Diện tích hình chữ nhật:", rectangleArea);

// 2. Tính chu vi hình tròn
let radius = 7;
const PI = 3.14;
let circlePerimeter = 2 * PI * radius;
console.log("Chu vi hình tròn:", circlePerimeter);

// 3. Chuyển đổi nhiệt độ
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C = " + fahrenheit + "°F");`,
        },
        {
          id: "1-2",
          title: "Kiểm tra kiểu dữ liệu",
          description: "Thực hành với các kiểu dữ liệu và toán tử so sánh",
          instructions:
            "Viết chương trình kiểm tra kiểu dữ liệu của các biến và so sánh giá trị",
          type: "code",
          starterCode: `let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "John" };

// 1. Kiểm tra kiểu dữ liệu của từng biến

// 2. So sánh các giá trị với toán tử == và ===`,
          solution: `let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "John" };

// 1. Kiểm tra kiểu dữ liệu của từng biến
console.log(typeof str);  // "string"
console.log(typeof num);  // "number"
console.log(typeof bool); // "boolean"
console.log(typeof arr);  // "object"
console.log(typeof obj);  // "object"

// 2. So sánh các giá trị với toán tử == và ===
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(true == 1);  // true
console.log(true === 1); // false`,
        },
      ],
    },
    {
      id: "2",
      title: "Hàm và Vòng lặp",
      slug: "ham-va-vong-lap",
      duration: "55 phút",
      prerequisites: ["1"],
      content: `# Hàm và Vòng lặp trong JavaScript

## Hàm (Functions)

### Khai báo hàm
\`\`\`javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (ES6)
const divide = (a, b) => {
  return a / b;
};

// Arrow function rút gọn
const square = x => x * x;
\`\`\`

### Gọi hàm
\`\`\`javascript
console.log(greet("John")); // "Hello, John!"
console.log(multiply(4, 5)); // 20
console.log(divide(10, 2)); // 5
console.log(square(6)); // 36
\`\`\`

## Vòng lặp (Loops)

### Vòng lặp for
\`\`\`javascript
// In số từ 1 đến 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Duyệt mảng
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
\`\`\`

### Vòng lặp while
\`\`\`javascript
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
\`\`\`

### Vòng lặp for...of (ES6)
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
\`\`\`

## Kết hợp hàm và vòng lặp
\`\`\`javascript
function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(\`\${number} x \${i} = \${number * i}\`);
  }
}

printMultiplicationTable(5);
\`\`\`

## Bài tập thực hành
Hãy tạo các hàm tiện ích với vòng lặp!`,
      exercises: [
        {
          id: "2-1",
          title: "Tạo hàm tính giai thừa",
          description: "Viết hàm tính giai thừa sử dụng vòng lặp",
          instructions: "Viết hàm factorial(n) tính giai thừa của số n",
          type: "code",
          starterCode: `function factorial(n) {
  // Viết code của bạn ở đây
}

// Kiểm tra
console.log(factorial(5)); // Should print 120
console.log(factorial(0)); // Should print 1`,
          solution: `function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Kiểm tra
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1`,
        },
        {
          id: "2-2",
          title: "Tìm số nguyên tố",
          description: "Viết hàm kiểm tra số nguyên tố sử dụng vòng lặp",
          instructions:
            "Viết hàm isPrime(n) kiểm tra xem một số có phải là số nguyên tố không",
          type: "code",
          starterCode: `function isPrime(n) {
  // Viết code của bạn ở đây
}

// Kiểm tra
console.log(isPrime(7));  // Should print true
console.log(isPrime(10)); // Should print false
console.log(isPrime(1));  // Should print false`,
          solution: `function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Kiểm tra
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false`,
        },
      ],
    },
    {
      id: "3",
      title: "Xử lý Mảng (Array Methods)",
      slug: "xu-ly-mang",
      duration: "60 phút",
      prerequisites: ["2"],
      content: `# Xử lý Mảng trong JavaScript

## Các phương thức mảng cơ bản

### forEach()
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
\`\`\`

### map()
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
\`\`\`

### filter()
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]
\`\`\`

### reduce()
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum); // 15
\`\`\`

### find() và findIndex()
\`\`\`javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

let user = users.find(function(user) {
  return user.id === 2;
});
console.log(user); // { id: 2, name: "Jane" }

let index = users.findIndex(function(user) {
  return user.name === "Bob";
});
console.log(index); // 2
\`\`\`

## Kết hợp các phương thức
\`\`\`javascript
let products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Book", price: 20, category: "education" },
  { name: "Chair", price: 150, category: "furniture" }
];

// Lấy tên các sản phẩm điện tử có giá > 300
let expensiveElectronics = products
  .filter(product => product.category === "electronics" && product.price > 300)
  .map(product => product.name);

console.log(expensiveElectronics); // ["Laptop", "Phone"]
\`\`\``,
      exercises: [
        {
          id: "3-1",
          title: "Xử lý mảng số",
          description: "Thực hành với các phương thức mảng cơ bản",
          instructions:
            "Cho mảng numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hãy:\n1. Tạo mảng mới chứa bình phương của các số\n2. Lọc ra các số chẵn\n3. Tính tổng các số lẻ",
          type: "code",
          starterCode: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Tạo mảng mới chứa bình phương của các số

// 2. Lọc ra các số chẵn

// 3. Tính tổng các số lẻ`,
          solution: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Tạo mảng mới chứa bình phương của các số
let squares = numbers.map(num => num * num);
console.log("Bình phương:", squares);

// 2. Lọc ra các số chẵn
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Số chẵn:", evenNumbers);

// 3. Tính tổng các số lẻ
let sumOfOdds = numbers
  .filter(num => num % 2 !== 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Tổng số lẻ:", sumOfOdds);`,
        },
        {
          id: "3-2",
          title: "Xử lý mảng đối tượng",
          description: "Thực hành với mảng chứa các đối tượng",
          instructions:
            "Cho mảng students, hãy:\n1. Tìm học sinh có điểm cao nhất\n2. Tính điểm trung bình của cả lớp\n3. Tạo danh sách học sinh giỏi (điểm >= 8)",
          type: "code",
          starterCode: `let students = [
  { name: "Alice", score: 8.5 },
  { name: "Bob", score: 7.2 },
  { name: "Charlie", score: 9.1 },
  { name: "Diana", score: 8.8 },
  { name: "Eve", score: 6.5 }
];

// 1. Tìm học sinh có điểm cao nhất

// 2. Tính điểm trung bình của cả lớp

// 3. Tạo danh sách học sinh giỏi (điểm >= 8)`,
          solution: `let students = [
  { name: "Alice", score: 8.5 },
  { name: "Bob", score: 7.2 },
  { name: "Charlie", score: 9.1 },
  { name: "Diana", score: 8.8 },
  { name: "Eve", score: 6.5 }
];

// 1. Tìm học sinh có điểm cao nhất
let topStudent = students.reduce((max, student) => 
  student.score > max.score ? student : max
);
console.log("Học sinh giỏi nhất:", topStudent);

// 2. Tính điểm trung bình của cả lớp
let averageScore = students.reduce((sum, student) => 
  sum + student.score, 0) / students.length;
console.log("Điểm trung bình:", averageScore.toFixed(2));

// 3. Tạo danh sách học sinh giỏi (điểm >= 8)
let excellentStudents = students.filter(student => student.score >= 8);
console.log("Học sinh giỏi:", excellentStudents);`,
        },
      ],
    },
    {
      id: "4",
      title: "DOM Manipulation",
      slug: "dom-manipulation",
      duration: "70 phút",
      prerequisites: ["3"],
      content: `# Thao tác với DOM trong JavaScript

## Truy cập phần tử DOM
\`\`\`javascript
// Truy cập bằng ID
let header = document.getElementById("header");

// Truy cập bằng class
let items = document.getElementsByClassName("item");

// Truy cập bằng selector
let button = document.querySelector("#submit-btn");
let allButtons = document.querySelectorAll(".btn");
\`\`\`

## Thay đổi nội dung và thuộc tính
\`\`\`javascript
// Thay đổi nội dung văn bản
let title = document.getElementById("title");
title.textContent = "Hello JavaScript!";

// Thay đổi HTML
let container = document.getElementById("container");
container.innerHTML = "<p>New content</p>";

// Thay đổi thuộc tính
let image = document.getElementById("my-image");
image.src = "new-image.jpg";
image.alt = "New image description";
\`\`\`

## Thay đổi CSS
\`\`\`javascript
let box = document.getElementById("box");

// Thay đổi style trực tiếp
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";

// Thêm/xóa class
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("hidden");
\`\`\`

## Xử lý sự kiện
\`\`\`javascript
let button = document.getElementById("my-button");

// Thêm event listener
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Xử lý form submit
let form = document.getElementById("my-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn form submit mặc định
  console.log("Form submitted!");
});
\`\`\`

## Tạo và xóa phần tử
\`\`\`javascript
// Tạo phần tử mới
let newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";
newDiv.className = "new-element";

// Thêm vào DOM
let container = document.getElementById("container");
container.appendChild(newDiv);

// Xóa phần tử
let oldElement = document.getElementById("old-element");
oldElement.remove();
\`\`\``,
      exercises: [
        {
          id: "4-1",
          title: "Tạo Todo List cơ bản",
          description: "Xây dựng ứng dụng todo list đơn giản",
          instructions:
            "Tạo ứng dụng todo list với các chức năng:\n1. Thêm todo mới\n2. Đánh dấu todo hoàn thành\n3. Xóa todo",
          type: "code",
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .completed { text-decoration: line-through; color: gray; }
    .todo-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h1>Todo List</h1>
  <input type="text" id="todo-input" placeholder="Thêm todo mới...">
  <button id="add-btn">Thêm</button>
  <div id="todo-list"></div>

  <script>
    // Viết code của bạn ở đây
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Thêm chức năng ở đây
  </script>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .completed { text-decoration: line-through; color: gray; }
    .todo-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
    .delete-btn { margin-left: 10px; color: red; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Todo List</h1>
  <input type="text" id="todo-input" placeholder="Thêm todo mới...">
  <button id="add-btn">Thêm</button>
  <div id="todo-list"></div>

  <script>
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
      const text = todoInput.value.trim();
      if (text === '') return;

      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
      
      todoItem.innerHTML = \`
        <span class="todo-text">\${text}</span>
        <button class="complete-btn">Hoàn thành</button>
        <span class="delete-btn">X</span>
      \`;

      // Xử lý hoàn thành
      const completeBtn = todoItem.querySelector('.complete-btn');
      completeBtn.addEventListener('click', function() {
        const todoText = todoItem.querySelector('.todo-text');
        todoText.classList.toggle('completed');
      });

      // Xử lý xóa
      const deleteBtn = todoItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        todoItem.remove();
      });

      todoList.appendChild(todoItem);
      todoInput.value = '';
    }

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') addTodo();
    });
  </script>
</body>
</html>`,
        },
      ],
    },
    {
      id: "5",
      title: "Async JavaScript & API Calls",
      slug: "async-javascript-api",
      duration: "65 phút",
      prerequisites: ["4"],
      content: `# JavaScript Bất đồng bộ và Gọi API

## Callbacks
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

fetchData(function(data) {
  console.log(data); // "Data received!" after 2 seconds
});
\`\`\`

## Promises
\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## Async/Await
\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
\`\`\`

## Fetch API
\`\`\`javascript
// GET request
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is a new post',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data));
\`\`\`

## Xử lý lỗi
\`\`\`javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}
\`\`\``,
      exercises: [
        {
          id: "5-1",
          title: "Tạo ứng dụng Weather App",
          description: "Xây dựng ứng dụng thời tiết sử dụng API công cộng",
          instructions:
            "Sử dụng OpenWeatherMap API (hoặc API miễn phí khác) để tạo ứng dụng thời tiết đơn giản",
          type: "code",
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .weather-card { 
      border: 1px solid #ddd; 
      padding: 20px; 
      margin: 20px; 
      border-radius: 10px; 
      text-align: center; 
    }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>Weather App</h1>
  <input type="text" id="city-input" placeholder="Nhập tên thành phố...">
  <button id="get-weather">Lấy thông tin thời tiết</button>
  <div id="weather-result"></div>

  <script>
    // Sử dụng API: https://api.openweathermap.org/data/2.5/weather
    // API Key demo (có thể cần đăng ký key mới)
    const API_KEY = 'your_api_key_here';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    // Viết code của bạn ở đây
  </script>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .weather-card { 
      border: 1px solid #ddd; 
      padding: 20px; 
      margin: 20px; 
      border-radius: 10px; 
      text-align: center; 
      background: #f9f9f9;
    }
    .error { color: red; }
    .loading { color: blue; }
  </style>
</head>
<body>
  <h1>Weather App</h1>
  <input type="text" id="city-input" placeholder="Nhập tên thành phố...">
  <button id="get-weather">Lấy thông tin thời tiết</button>
  <div id="weather-result"></div>

  <script>
    const API_KEY = 'your_api_key_here'; // Thay bằng API key thật
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather');
    const weatherResult = document.getElementById('weather-result');

    async function getWeather(city) {
      try {
        weatherResult.innerHTML = '<div class="loading">Đang tải...</div>';
        
        const response = await fetch(\`\${BASE_URL}?q=\${city}&appid=\${API_KEY}&units=metric&lang=vi\`);
        
        if (!response.ok) {
          throw new Error('Không tìm thấy thành phố');
        }
        
        const data = await response.json();
        
        const weatherHTML = \`
          <div class="weather-card">
            <h2>\${data.name}, \${data.sys.country}</h2>
            <img src="https://openweathermap.org/img/wn/\${data.weather[0].icon}@2x.png" 
                 alt="\${data.weather[0].description}">
            <p><strong>\${data.weather[0].description}</strong></p>
            <p>Nhiệt độ: \${Math.round(data.main.temp)}°C</p>
            <p>Độ ẩm: \${data.main.humidity}%</p>
            <p>Gió: \${data.wind.speed} m/s</p>
          </div>
        \`;
        
        weatherResult.innerHTML = weatherHTML;
        
      } catch (error) {
        weatherResult.innerHTML = \`<div class="error">Lỗi: \${error.message}</div>\`;
      }
    }

    getWeatherBtn.addEventListener('click', () => {
      const city = cityInput.value.trim();
      if (city) {
        getWeather(city);
      }
    });

    cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        getWeatherBtn.click();
      }
    });
  </script>
</body>
</html>`,
        },
      ],
    },
    {
      id: "6",
      title: "ES6+ Features",
      slug: "es6-features",
      duration: "50 phút",
      prerequisites: ["5"],
      content: `# Các tính năng mới trong ES6+

## Destructuring
\`\`\`javascript
// Array destructuring
let numbers = [1, 2, 3];
let [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

// Object destructuring
let person = { name: "John", age: 30, city: "New York" };
let { name, age } = person;
console.log(name, age); // John 30

// Destructuring trong tham số hàm
function printPerson({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}
\`\`\`

## Spread và Rest Operators
\`\`\`javascript
// Spread với mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread với object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
\`\`\`

## Template Literals
\`\`\`javascript
let name = "John";
let age = 30;

// String interpolation
let message = \`Hello, my name is \${name} and I'm \${age} years old.\`;
console.log(message);

// Multi-line strings
let multiLine = \`
  This is a
  multi-line
  string
\`;
\`\`\`

## Default Parameters
\`\`\`javascript
function greet(name = "Guest", greeting = "Hello") {
  console.log(\`\${greeting}, \${name}!\`);
}

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
greet("Jane", "Hi"); // "Hi, Jane!"
\`\`\`

## Optional Chaining và Nullish Coalescing
\`\`\`javascript
let user = {
  profile: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};

// Optional chaining
let city = user?.profile?.address?.city;
console.log(city); // "New York"

let invalidCity = user?.profile?.invalid?.city;
console.log(invalidCity); // undefined

// Nullish coalescing
let defaultValue = user?.invalidProp ?? "Default Value";
console.log(defaultValue); // "Default Value"
\`\`\``,
      exercises: [
        {
          id: "6-1",
          title: "Refactor code với ES6+",
          description: "Viết lại code cũ bằng các tính năng ES6+",
          instructions:
            "Viết lại các hàm sau sử dụng ES6+ features:\n1. Chuyển đổi hàm constructor sang class\n2. Sử dụng destructuring và template literals\n3. Áp dụng arrow functions",
          type: "code",
          starterCode: `// 1. Hàm constructor cũ
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
};

// 2. Hàm xử lý mảng
function processArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * 2);
    }
  }
  return result;
}

// 3. Hàm xử lý object
function getUserInfo(user) {
  var name = user.name;
  var age = user.age;
  var city = user.address ? user.address.city : 'Unknown';
  return name + ' from ' + city + ', age: ' + age;
}`,
          solution: `// 1. Sử dụng class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name} and I'm \${this.age} years old.\`;
  }
}

// 2. Sử dụng arrow function và array methods
const processArray = (arr) => 
  arr.filter(num => num % 2 === 0)
     .map(num => num * 2);

// 3. Sử dụng destructuring và optional chaining
const getUserInfo = (user) => {
  const { name, age, address } = user;
  const city = address?.city ?? 'Unknown';
  return \`\${name} from \${city}, age: \${age}\`;
};`,
        },
      ],
    },
  ],
};
