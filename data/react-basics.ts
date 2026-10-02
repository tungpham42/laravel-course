import { Course } from "@/types";

export const reactBasics: Course = {
  id: "react-basics",
  slug: "react",
  title: "React.js Hiện đại",
  description:
    "Học React từ cơ bản với Hooks, Context API và các công cụ hiện đại",
  image: "/images/react-course.jpg",
  duration: "6 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Giới thiệu React và JSX",
      slug: "gioi-thieu-react",
      duration: "50 phút",
      content: `# Giới thiệu về React

## React là gì?
React là một thư viện JavaScript để xây dựng giao diện người dùng, được phát triển bởi Facebook.

## Ưu điểm của React
- **Component-based**: Xây dựng UI từ các component tái sử dụng
- **Virtual DOM**: Hiệu suất cao
- **Hệ sinh thái phong phú**: React Router, Redux, Next.js
- **Cộng đồng lớn**

## Cài đặt môi trường

### Tạo ứng dụng React với Create React App
\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## JSX Basics

### JSX là gì?
JSX là cú pháp mở rộng cho JavaScript, cho phép viết HTML trong JavaScript.

### Ví dụ cơ bản
\`\`\`jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
\`\`\`

### Biểu thức trong JSX
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

## Components

### Function Component
\`\`\`jsx
function Button() {
  return <button>Click me</button>;
}
\`\`\`

### Arrow Function Component
\`\`\`jsx
const Button = () => {
  return <button>Click me</button>;
};
\`\`\`

## Props

### Truyền props
\`\`\`jsx
function App() {
  return <Welcome name="John" age={25} />;
}

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>You are {props.age} years old</p>
    </div>
  );
}
\`\`\`

## Bài tập tiếp theo
Chúng ta sẽ học về State và Events!`,
      exercises: [
        {
          id: "1-1",
          title: "Tạo Component đầu tiên",
          description: "Thực hành tạo React component cơ bản",
          instructions:
            "Tạo một component HelloWorld hiển thị thông điệp chào mừng",
          type: "code",
          starterCode: `function HelloWorld() {
  // Viết code của bạn ở đây
}`,
          solution: `function HelloWorld() {
  return <h1>Hello, World! Welcome to React!</h1>;
}`,
        },
        {
          id: "1-2",
          title: "Component với Props",
          description: "Thực hành sử dụng props trong component",
          instructions:
            "Tạo component Greeting nhận prop 'name' và hiển thị chào theo tên",
          type: "code",
          starterCode: `function Greeting(props) {
  // Viết code của bạn ở đây
}`,
          solution: `function Greeting(props) {
  return <h2>Hello, {props.name}! Nice to meet you!</h2>;
}`,
        },
      ],
    },
    {
      id: "2",
      title: "State và Events",
      slug: "state-events",
      duration: "70 phút",
      prerequisites: ["1"],
      content: `# State và Events trong React

## useState Hook

### Import useState
\`\`\`jsx
import React, { useState } from 'react';
\`\`\`

### Sử dụng useState
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Event Handling

### Xử lý sự kiện cơ bản
\`\`\`jsx
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

### Event Object
\`\`\`jsx
function Input() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
}
\`\`\`

## Form Handling

### Controlled Component
\`\`\`jsx
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login:', { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## Multiple State Variables
\`\`\`jsx
function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value))} 
      />
    </div>
  );
}
\`\`\`

## Bài tập thực hành
Hãy tạo một ứng dụng Todo List đơn giản!`,
      exercises: [
        {
          id: "2-1",
          title: "Counter Application",
          description: "Tạo ứng dụng đếm với các nút tăng/giảm",
          instructions:
            "Tạo component Counter có nút để tăng và giảm giá trị",
          type: "code",
          starterCode: `function Counter() {
  const [count, setCount] = useState(0);

  // Viết code của bạn ở đây
}`,
          solution: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "3",
      title: "useEffect và Data Fetching",
      slug: "useeffect-data-fetching",
      duration: "65 phút",
      prerequisites: ["2"],
      content: `# useEffect và Data Fetching trong React

## useEffect Hook

### Basic Usage
\`\`\`jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
\`\`\`

### Dependency Array
\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when userId changes
    fetchUser(userId).then(setUser);
  }, [userId]); // Re-run when userId changes

  return <div>{user ? user.name : 'Loading...'}</div>;
}
\`\`\`

## Data Fetching với useEffect

### Fetching Data
\`\`\`jsx
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Custom Hooks

### Tạo Custom Hook
\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Sử dụng custom hook
function Users() {
  const { data: users, loading, error } = useApi('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
\`\`\`

## Bài tập thực hành
Hãy tạo custom hook cho data fetching!`,
      exercises: [
        {
          id: "3-1",
          title: "Tạo useFetch Custom Hook",
          description: "Tạo custom hook để tái sử dụng logic fetching data",
          instructions: `Tạo custom hook useFetch nhận URL và trả về:
- data
- loading state
- error state
Sử dụng hook này để fetch và hiển thị dữ liệu từ API`,
          type: "code",
          starterCode: `function useFetch(url) {
  // Viết custom hook của bạn ở đây
}

function Posts() {
  // Sử dụng useFetch hook
}`,
          solution: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function Posts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="posts">
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "4",
      title: "Context API và State Management",
      slug: "context-api-state-management",
      duration: "70 phút",
      prerequisites: ["3"],
      content: `# Context API và State Management

## React Context API

### Tạo Context
\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
\`\`\`

### Sử dụng Context
\`\`\`jsx
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}
\`\`\`

## useReducer Hook

### Basic Usage
\`\`\`jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

## Bài tập thực hành
Hãy tạo shopping cart với Context API!`,
      exercises: [
        {
          id: "4-1",
          title: "Shopping Cart với Context API",
          description: "Tạo giỏ hàng sử dụng Context API và useReducer",
          instructions: `Tạo shopping cart với các chức năng:
- Thêm sản phẩm vào giỏ
- Xóa sản phẩm khỏi giỏ
- Thay đổi số lượng
- Tính tổng tiền
Sử dụng Context API để quản lý state toàn cục`,
          type: "code",
          starterCode: `// Tạo CartContext và CartProvider
// Sử dụng useReducer để quản lý cart state`,
          solution: `const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { items: [] };
    
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};`,
        },
      ],
    },
  ],
};
