import { Course } from "@/types";

export const nodejsAdvanced: Course = {
  id: "nodejs-advanced",
  slug: "nodejs",
  title: "Node.js & Express Nâng cao",
  description: "Xây dựng RESTful APIs với Node.js, Express và MongoDB",
  image: "/images/nodejs-course.jpg",
  duration: "10 tuần",
  level: "intermediate",
  lessons: [
    {
      id: "1",
      title: "Node.js Fundamentals",
      slug: "nodejs-fundamentals",
      duration: "60 phút",
      content: `# Node.js Fundamentals

## Giới thiệu Node.js
Node.js là một runtime environment để chạy JavaScript trên server.

## Module System

### CommonJS Modules
\`\`\`javascript
// Export
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Import
const math = require('./math');
console.log(math.add(2, 3));
\`\`\`

### ES6 Modules
\`\`\`javascript
// Export
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Import
import { add, subtract } from './math.js';
\`\`\`

## Built-in Modules

### File System
\`\`\`javascript
const fs = require('fs');

// Đọc file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Ghi file
fs.writeFile('file.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File saved!');
});
\`\`\`

### HTTP Module
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## NPM và Package.json

### Khởi tạo project
\`\`\`bash
npm init -y
\`\`\`

### Cài đặt package
\`\`\`bash
npm install express
npm install --save-dev nodemon
\`\`\`

### Scripts
\`\`\`json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
\`\`\`

## Bài tập tiếp theo
Chúng ta sẽ học về Express.js framework!`,
      exercises: [
        {
          id: "1-1",
          title: "Tạo HTTP Server",
          description: "Thực hành tạo HTTP server với built-in module",
          instructions:
            "Tạo một HTTP server trả về 'Hello, Node.js!' khi truy cập",
          type: "code",
          starterCode: `const http = require('http');

// Viết code của bạn ở đây`,
          solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
        },
      ],
    },
    {
      id: "2",
      title: "Express.js Framework",
      slug: "express-framework",
      duration: "80 phút",
      prerequisites: ["1"],
      content: `# Express.js Framework

## Giới thiệu Express
Express là framework web nhanh, không quan điểm và tối giản cho Node.js.

## Cài đặt Express
\`\`\`bash
npm install express
\`\`\`

## Ứng dụng Express cơ bản
\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running on http://localhost:\${port}\`);
});
\`\`\`

## Routing

### Các phương thức HTTP
\`\`\`javascript
app.get('/users', (req, res) => {
  res.send('Get all users');
});

app.post('/users', (req, res) => {
  res.send('Create new user');
});

app.put('/users/:id', (req, res) => {
  res.send(\`Update user \${req.params.id}\`);
});

app.delete('/users/:id', (req, res) => {
  res.send(\`Delete user \${req.params.id}\`);
});
\`\`\`

## Middleware

### Built-in Middleware
\`\`\`javascript
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
\`\`\`

### Custom Middleware
\`\`\`javascript
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  next();
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Protected route');
});
\`\`\`

## Router Module
\`\`\`javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:id', (req, res) => {
  res.send(\`Get user \${req.params.id}\`);
});

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
\`\`\`

## Bài tập thực hành
Hãy tạo RESTful API cho quản lý sản phẩm!`,
      exercises: [
        {
          id: "2-1",
          title: "Tạo REST API với Express",
          description: "Xây dựng CRUD API cho resource products",
          instructions: `Tạo Express application với các endpoints:
- GET /products - Lấy tất cả sản phẩm
- POST /products - Tạo sản phẩm mới
- GET /products/:id - Lấy sản phẩm theo ID
- PUT /products/:id - Cập nhật sản phẩm
- DELETE /products/:id - Xóa sản phẩm`,
          type: "code",
          starterCode: `const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

// Viết routes của bạn ở đây

const port = 3000;
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
          solution: `const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// POST create new product
app.post('/products', (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.status(201).json(product);
});

// PUT update product
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

// DELETE product
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Product not found');
  
  products.splice(index, 1);
  res.status(204).send();
});

const port = 3000;
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
        },
      ],
    },
    {
      id: "3",
      title: "Middleware Nâng cao và Error Handling",
      slug: "middleware-error-handling",
      duration: "75 phút",
      prerequisites: ["2"],
      content: `# Middleware Nâng cao và Error Handling

## Custom Middleware

### Logging Middleware
\`\`\`javascript
const logger = (req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
};

app.use(logger);
\`\`\`

### Authentication Middleware
\`\`\`javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});
\`\`\`

## Error Handling Middleware

### Custom Error Class
\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
\`\`\`

### Global Error Handler
\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    // Production
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
      });
    }
  }
};

app.use(errorHandler);
\`\`\`

## Async Error Handling

### Async Wrapper
\`\`\`javascript
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));
\`\`\`

## Bài tập thực hành
Hãy triển khai error handling cho REST API!`,
      exercises: [
        {
          id: "3-1",
          title: "Error Handling cho Product API",
          description: "Triển khai error handling middleware cho API",
          instructions: `Tạo error handling system cho product API:
- Custom AppError class
- Global error handler middleware
- Async error handler wrapper
- Xử lý các lỗi phổ biến (404, validation, database)`,
          type: "code",
          starterCode: `// Viết error handling system`,
          solution: `class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
      });
    }
  }
};

const notFound = (req, res, next) => {
  next(new AppError(\`Can't find \${req.originalUrl} on this server!\`, 404));
};

// Usage in routes
app.get('/products/:id', asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    return next(new AppError('Product not found', 404));
  }
  
  res.json(product);
}));

app.use(notFound);
app.use(errorHandler);`,
        },
      ],
    },
    {
      id: "4",
      title: "Database Integration với MongoDB",
      slug: "mongodb-integration",
      duration: "80 phút",
      prerequisites: ["3"],
      content: `# Database Integration với MongoDB

## Mongoose ODM

### Kết nối MongoDB
\`\`\`javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
\`\`\`

### Tạo Schema và Model
\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

// Instance method
userSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

module.exports = mongoose.model('User', userSchema);
\`\`\`

## CRUD Operations với Mongoose

### Tạo và Đọc
\`\`\`javascript
// Create user
const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    data: user
  });
});

// Get all users với filtering, sorting, pagination
const getUsers = asyncHandler(async (req, res) => {
  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => \`$\${match}\`);

  // Finding resource
  let query = User.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await User.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const users = await query;

  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = { page: page + 1, limit };
  }
  if (startIndex > 0) {
    pagination.prev = { page: page - 1, limit };
  }

  res.status(200).json({
    success: true,
    count: users.length,
    pagination,
    data: users
  });
});
\`\`\`

## Bài tập thực hành
Hãy tạo CRUD API với MongoDB!`,
      exercises: [
        {
          id: "4-1",
          title: "Blog API với MongoDB",
          description: "Tạo REST API cho blog với Mongoose",
          instructions: `Tạo blog API với các model:
- User (name, email, password, role)
- Post (title, content, author, categories, published)
- Category (name, description)

Triển khai CRUD operations với filtering, sorting, pagination`,
          type: "code",
          starterCode: `// Tạo models và controllers cho blog API`,
          solution: `// models/Post.js
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  categories: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Category'
  }],
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: Date
}, {
  timestamps: true
});

// controllers/posts.js
const getPosts = asyncHandler(async (req, res) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => \`$\${match}\`);

  // Finding resource
  query = Post.find(JSON.parse(queryStr))
    .populate('author', 'name email')
    .populate('categories', 'name');

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const total = await Post.countDocuments();

  query = query.skip(startIndex).limit(limit);

  const posts = await query;

  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
});

const createPost = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.author = req.user.id;

  const post = await Post.create(req.body);

  res.status(201).json({
    success: true,
    data: post
  });
});`,
        },
      ],
    },
  ],
};
