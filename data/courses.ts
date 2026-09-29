import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "laravel-basics",
    slug: "laravel",
    title: "Laravel Cơ bản đến Nâng cao",
    description:
      "Học Laravel từ cơ bản đến các tính năng nâng cao với dự án thực tế",
    image: "/images/laravel-course.jpg",
    duration: "8 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về Laravel và Cài đặt",
        slug: "gioi-thieu-laravel",
        duration: "45 phút",
        content: `# Giới thiệu về Laravel

## Laravel là gì?
Laravel là một PHP framework mã nguồn mở miễn phí, được sử dụng để phát triển các ứng dụng web theo mô hình MVC.

## Ưu điểm của Laravel
- **Cú pháp đẹp và dễ hiểu**
- **Tích hợp sẵn nhiều tính năng**: Authentication, Routing, Sessions, Caching,...
- **Hệ thống ORM mạnh mẽ**: Eloquent
- **Migration system** để quản lý database
- **Template engine**: Blade
- **Testing tích hợp**

## Cài đặt Laravel

### Yêu cầu hệ thống
- PHP >= 8.1
- Composer
- Database (MySQL, PostgreSQL, SQLite, SQL Server)

### Các bước cài đặt

1. **Cài đặt Composer** (nếu chưa có):
\`\`\`bash
# Trên Windows
# Tải và chạy Composer-Setup.exe

# Trên macOS/Linux
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
\`\`\`

2. **Tạo project Laravel mới**:
\`\`\`bash
composer create-project laravel/laravel my-project
cd my-project
\`\`\`

3. **Chạy development server**:
\`\`\`bash
php artisan serve
\`\`\`

4. **Truy cập ứng dụng**: Mở trình duyệt và vào http://localhost:8000

## Cấu trúc thư mục Laravel

\`\`\`
app/
├── Console/          # Artisan commands
├── Http/            # Controllers, Middleware
│   ├── Controllers/
│   └── Middleware/
├── Models/          # Eloquent models
bootstrap/          # Khởi động ứng dụng
config/             # File cấu hình
database/           # Migrations, Seeders, Factories
public/             # Thư mục public
resources/          # Views, Assets
routes/             # Route definitions
storage/            # Storage
tests/              # Test cases
\`\`\`

## Bài tập thực hành
Trong bài tiếp theo, chúng ta sẽ tạo ứng dụng đầu tiên với Laravel!`,
        exercises: [
          {
            id: "1-1",
            title: "Kiểm tra kiến thức cơ bản",
            description: "Bài tập trắc nghiệm về Laravel",
            instructions: "Chọn câu trả lời đúng cho các câu hỏi sau:",
            type: "multiple-choice",
            options: [
              "Laravel là một JavaScript framework",
              "Laravel sử dụng mô hình MVC",
              "Laravel chỉ hoạt động trên Windows",
              "Laravel không hỗ trợ database",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "2",
        title: "Routing và Controllers",
        slug: "routing-controllers",
        duration: "60 phút",
        prerequisites: ["1"],
        content: `# Routing và Controllers trong Laravel

## Routing cơ bản

### Định nghĩa routes trong routes/web.php

\`\`\`php
<?php
// Route cơ bản
Route::get('/', function () {
    return 'Chào mừng đến với Laravel!';
});

// Route với tham số
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});

// Route với tham số tùy chọn
Route::get('/user/{id?}', function ($id = null) {
    return $id ? 'User ID: ' . $id : 'Không có ID';
});

// Route đặt tên
Route::get('/user/profile', function () {
    // ...
})->name('profile');
\`\`\`

## Controllers

### Tạo Controller
\`\`\`bash
php artisan make:controller UserController
\`\`\`

### Controller cơ bản
\`\`\`php
<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        return 'Danh sách users';
    }

    public function show($id)
    {
        return 'Thông tin user: ' . $id;
    }

    public function create()
    {
        return 'Form tạo user mới';
    }

    public function store(Request $request)
    {
        // Xử lý dữ liệu từ form
        return 'Lưu user thành công';
    }
}
\`\`\`

### Kết nối Route với Controller
\`\`\`php
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/users/create', [UserController::class, 'create']);
Route::post('/users', [UserController::class, 'store']);
\`\`\`

## Resource Routes
\`\`\`php
Route::resource('users', UserController::class);
\`\`\`

Route resource tự động tạo các route sau:
- GET /users → index
- GET /users/create → create
- POST /users → store
- GET /users/{id} → show
- GET /users/{id}/edit → edit
- PUT/PATCH /users/{id} → update
- DELETE /users/{id} → destroy

## Bài tập thực hành
Hãy tạo một controller và routes cho quản lý sản phẩm.`,
        exercises: [
          {
            id: "2-1",
            title: "Tạo Product Controller",
            description: "Thực hành tạo controller và routes",
            instructions: `Tạo một ProductController với các phương thức:
- index(): Hiển thị danh sách sản phẩm
- show($id): Hiển thị chi tiết sản phẩm
- create(): Hiển thị form tạo sản phẩm
- store(): Lưu sản phẩm mới

Sau đó tạo routes tương ứng.`,
            type: "code",
            starterCode: `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    // Viết code của bạn ở đây
}`,
            solution: `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    public function index()
    {
        return 'Danh sách sản phẩm';
    }

    public function show($id)
    {
        return 'Chi tiết sản phẩm: ' . $id;
    }

    public function create()
    {
        return 'Form tạo sản phẩm';
    }

    public function store(Request $request)
    {
        return 'Lưu sản phẩm thành công';
    }
}`,
          },
        ],
      },
      {
        id: "3",
        title: "Eloquent ORM và Database",
        slug: "eloquent-database",
        duration: "90 phút",
        prerequisites: ["2"],
        content: `# Eloquent ORM và Database

## Migrations

### Tạo Migration
\`\`\`bash
php artisan make:migration create_users_table
\`\`\`

### File Migration mẫu
\`\`\`php
<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};
\`\`\`

### Chạy Migration
\`\`\`bash
php artisan migrate
\`\`\`

## Eloquent Models

### Tạo Model
\`\`\`bash
php artisan make:model User
\`\`\`

### Model cơ bản
\`\`\`php
<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
    
    protected $hidden = ['password', 'remember_token'];
}
\`\`\`

## CRUD với Eloquent

### Tạo bản ghi
\`\`\`php
$user = new User();
$user->name = 'John Doe';
$user->email = 'john@example.com';
$user->password = bcrypt('password');
$user->save();

// Hoặc sử dụng create
User::create([
    'name' => 'Jane Doe',
    'email' => 'jane@example.com',
    'password' => bcrypt('password')
]);
\`\`\`

### Đọc dữ liệu
\`\`\`php
// Lấy tất cả users
$users = User::all();

// Lấy user theo ID
$user = User::find(1);

// Điều kiện tìm kiếm
$users = User::where('active', 1)
             ->orderBy('name')
             ->take(10)
             ->get();
\`\`\`

### Cập nhật
\`\`\`php
$user = User::find(1);
$user->name = 'New Name';
$user->save();

// Hoặc update trực tiếp
User::where('active', 1)
    ->update(['active' => 0]);
\`\`\`

### Xóa
\`\`\`php
$user = User::find(1);
$user->delete();

// Xóa trực tiếp
User::destroy(1);
User::where('active', 0)->delete();
\`\`\`

## Relationships

### One to Many
\`\`\`php
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}

class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
\`\`\`

### Sử dụng Relationship
\`\`\`php
$user = User::find(1);
$posts = $user->posts;

$post = Post::find(1);
$user = $post->user;
\`\`\`

## Bài tập tiếp theo
Chúng ta sẽ học về Blade Templates và Forms!`,
        exercises: [
          {
            id: "3-1",
            title: "Tạo Model và Migration",
            description: "Thực hành tạo model Post với migration",
            instructions: `Tạo một model Post với migration có các trường:
- title (string)
- content (text)
- user_id (foreign key)
- published_at (timestamp)

Sau đó viết code để:
1. Tạo 3 bài post mới
2. Lấy tất cả bài post đã published
3. Cập nhật title của một post
4. Xóa một post`,
            type: "code",
            starterCode: `// Tạo migration và model trước
// Viết code thực hiện các thao tác CRUD ở đây`,
            solution: `// Tạo migration
php artisan make:migration create_posts_table

// Trong migration file
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->foreignId('user_id')->constrained();
        $table->timestamp('published_at')->nullable();
        $table->timestamps();
    });
}

// Trong Post model
class Post extends Model
{
    protected $fillable = ['title', 'content', 'user_id', 'published_at'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

// CRUD Operations
// 1. Tạo posts
Post::create([
    'title' => 'Post 1',
    'content' => 'Content 1',
    'user_id' => 1,
    'published_at' => now()
]);

// 2. Lấy published posts
$publishedPosts = Post::whereNotNull('published_at')->get();

// 3. Cập nhật title
$post = Post::find(1);
$post->title = 'New Title';
$post->save();

// 4. Xóa post
Post::destroy(1);`,
          },
        ],
      },
      {
        id: "4",
        title: "Blade Templates và Forms",
        slug: "blade-templates-forms",
        duration: "75 phút",
        prerequisites: ["3"],
        content: `# Blade Templates và Forms trong Laravel

## Blade Template Engine

### Template Inheritance
\`\`\`php
<!-- layouts/app.blade.php -->
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @section('sidebar')
        Sidebar content
    @show

    <div class="container">
        @yield('content')
    </div>
</body>
</html>

<!-- pages/home.blade.php -->
@extends('layouts.app')

@section('title', 'Home Page')

@section('sidebar')
    @parent
    <p>Additional sidebar content</p>
@endsection

@section('content')
    <h1>Welcome to Home Page</h1>
@endsection
\`\`\`

### Blade Directives
\`\`\`php
@if($users->count())
    <ul>
        @foreach($users as $user)
            <li>{{ $user->name }}</li>
        @endforeach
    </ul>
@else
    <p>No users found.</p>
@endif

@for($i = 0; $i < 10; $i++)
    <p>Current value: {{ $i }}</p>
@endfor

@auth
    <p>Welcome authenticated user!</p>
@else
    <p>Please log in.</p>
@endauth
\`\`\`

## Forms và Validation

### Tạo Form
\`\`\`php
<form method="POST" action="/users">
    @csrf
    
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="{{ old('name') }}">
        @error('name')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="{{ old('email') }}">
        @error('email')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>

    <button type="submit">Create User</button>
</form>
\`\`\`

### Validation trong Controller
\`\`\`php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);

    User::create($validated);

    return redirect('/users')->with('success', 'User created successfully!');
}
\`\`\`

## Bài tập tiếp theo
Chúng ta sẽ học về Authentication và Authorization!`,
        exercises: [
          {
            id: "4-1",
            title: "Tạo User Registration Form",
            description: "Thực hành tạo form đăng ký user với validation",
            instructions: `Tạo form đăng ký user với các trường:
- name (required, max 255)
- email (required, email, unique)
- password (required, min 8, confirmed)
- password_confirmation

Sử dụng Blade template và hiển thị lỗi validation`,
            type: "code",
            starterCode: `<!-- register.blade.php -->
<form method="POST" action="/register">
    @csrf
    <!-- Viết form của bạn ở đây -->
</form>

<!-- UserController.php -->
public function store(Request $request)
{
    // Viết validation logic
}`,
            solution: `<!-- register.blade.php -->
<form method="POST" action="/register">
    @csrf
    
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="{{ old('name') }}">
        @error('name')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="{{ old('email') }}">
        @error('email')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>

    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        @error('password')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>

    <div>
        <label for="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" name="password_confirmation">
    </div>

    <button type="submit">Register</button>
</form>

<!-- UserController.php -->
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);

    $validated['password'] = bcrypt($validated['password']);
    
    User::create($validated);

    return redirect('/users')->with('success', 'User registered successfully!');
}`,
          },
        ],
      },
      {
        id: "5",
        title: "Authentication và Authorization",
        slug: "authentication-authorization",
        duration: "80 phút",
        prerequisites: ["4"],
        content: `# Authentication và Authorization trong Laravel

## Laravel Breeze / Jetstream

### Cài đặt Laravel Breeze
\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev
\`\`\`

## Manual Authentication

### Login Controller
\`\`\`php
public function authenticate(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return redirect()->intended('/dashboard');
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ]);
}
\`\`\`

### Protecting Routes
\`\`\`php
// Route middleware
Route::get('/profile', function () {
    // Only authenticated users may access this route...
})->middleware('auth');

// Controller constructor
public function __construct()
{
    $this->middleware('auth');
    $this->middleware('auth')->only(['edit', 'update']);
    $this->middleware('guest')->except(['index', 'show']);
}
\`\`\`

## Authorization với Gates và Policies

### Defining Gates
\`\`\`php
// In AuthServiceProvider
Gate::define('edit-post', function (User $user, Post $post) {
    return $user->id === $post->user_id;
});

// Usage in controller
if (Gate::allows('edit-post', $post)) {
    // The current user can edit the post...
}

// Or in Blade
@can('edit-post', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit Post</a>
@endcan
\`\`\`

### Creating Policies
\`\`\`bash
php artisan make:policy PostPolicy --model=Post
\`\`\`

\`\`\`php
class PostPolicy
{
    public function update(User $user, Post $post)
    {
        return $user->id === $post->user_id;
    }

    public function delete(User $user, Post $post)
    {
        return $user->id === $post->user_id;
    }
}
\`\`\`

## Bài tập thực hành
Hãy triển khai hệ thống authentication cho blog!`,
        exercises: [
          {
            id: "5-1",
            title: "Triển khai Blog Authentication",
            description: "Tạo hệ thống đăng nhập và phân quyền cho blog",
            instructions: `Tạo hệ thống authentication cho blog với:
- Đăng ký, đăng nhập, đăng xuất
- Chỉ chủ sở hữu có thể chỉnh sửa/xóa bài viết
- Middleware bảo vệ routes
- Policy cho Post model`,
            type: "code",
            starterCode: `// Viết code authentication và authorization`,
            solution: `// PostPolicy.php
public function update(User $user, Post $post)
{
    return $user->id === $post->user_id;
}

public function delete(User $user, Post $post)
{
    return $user->id === $post->user_id;
}

// PostController.php
public function edit(Post $post)
{
    $this->authorize('update', $post);
    return view('posts.edit', compact('post'));
}

public function update(Request $request, Post $post)
{
    $this->authorize('update', $post);
    
    $validated = $request->validate([
        'title' => 'required|max:255',
        'content' => 'required',
    ]);

    $post->update($validated);

    return redirect('/posts')->with('success', 'Post updated!');
}

// web.php
Route::middleware(['auth'])->group(function () {
    Route::get('/posts/create', [PostController::class, 'create']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{post}/edit', [PostController::class, 'edit']);
    Route::put('/posts/{post}', [PostController::class, 'update']);
    Route::delete('/posts/{post}', [PostController::class, 'destroy']);
});`,
          },
        ],
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: "python-basics",
    slug: "python",
    title: "Python Cơ bản",
    description: "Lập trình Python từ con số 0 với các dự án thực tế",
    image: "/images/python-course.jpg",
    duration: "8 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Cú pháp Python cơ bản",
        slug: "cu-phap-python-co-ban",
        duration: "35 phút",
        content: `# Cú pháp Python cơ bản

## Giới thiệu Python
Python là ngôn ngữ lập trình bậc cao, dễ đọc và dễ học.

## Biến và Kiểu dữ liệu

### Khai báo biến
\`\`\`python
# Khai báo biến
name = "John"
age = 25
height = 1.75
is_student = True
\`\`\`

### Các kiểu dữ liệu cơ bản
\`\`\`python
# String
message = "Hello World"

# Integer
count = 10

# Float
price = 19.99

# Boolean
is_active = True

# List
fruits = ["apple", "banana", "orange"]

# Dictionary
person = {"name": "John", "age": 30}
\`\`\`

## Input và Output

### Nhập dữ liệu từ bàn phím
\`\`\`python
name = input("Nhập tên của bạn: ")
age = int(input("Nhập tuổi của bạn: "))
print(f"Xin chào {name}, bạn {age} tuổi")
\`\`\`

### Định dạng chuỗi
\`\`\`python
name = "John"
age = 25

# Các cách định dạng chuỗi
print("Xin chào " + name + ", bạn " + str(age) + " tuổi")
print("Xin chào {}, bạn {} tuổi".format(name, age))
print(f"Xin chào {name}, bạn {age} tuổi")  # f-string (Python 3.6+)
\`\`\`

## Câu lệnh điều kiện

### if-else
\`\`\`python
age = 18

if age >= 18:
    print("Bạn đã trưởng thành")
else:
    print("Bạn chưa trưởng thành")
\`\`\`

### if-elif-else
\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print(f"Điểm: {score}, Xếp loại: {grade}")
\`\`\`

## Bài tập thực hành
Hãy làm quen với cú pháp Python cơ bản!`,
        exercises: [
          {
            id: "1-1",
            title: "Máy tính đơn giản",
            description: "Tạo máy tính thực hiện các phép tính cơ bản",
            instructions: `Viết chương trình máy tính đơn giản:
1. Nhập hai số từ người dùng
2. Nhập phép tính (+, -, *, /)
3. In kết quả ra màn hình`,
            type: "code",
            starterCode: `# Viết code của bạn ở đây`,
            solution: `# Nhập hai số
num1 = float(input("Nhập số thứ nhất: "))
num2 = float(input("Nhập số thứ hai: "))

# Nhập phép tính
operation = input("Nhập phép tính (+, -, *, /): ")

# Thực hiện tính toán
if operation == "+":
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")
elif operation == "-":
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")
elif operation == "*":
    result = num1 * num2
    print(f"{num1} * {num2} = {result}")
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")
    else:
        print("Lỗi: Không thể chia cho 0!")
else:
    print("Phép tính không hợp lệ!")`,
          },
          {
            id: "1-2",
            title: "Kiểm tra số chẵn lẻ",
            description: "Viết chương trình kiểm tra số chẵn lẻ và phân loại",
            instructions:
              "Viết chương trình nhập một số và kiểm tra:\n- Số chẵn hay lẻ\n- Số dương, âm hay bằng 0",
            type: "code",
            starterCode: `# Viết code của bạn ở đây`,
            solution: `# Nhập số từ người dùng
number = float(input("Nhập một số: "))

# Kiểm tra chẵn/lẻ
if number % 2 == 0:
    parity = "chẵn"
else:
    parity = "lẻ"

# Kiểm tra dương/âm/zero
if number > 0:
    sign = "dương"
elif number < 0:
    sign = "âm"
else:
    sign = "bằng 0"

print(f"Số {number} là số {parity} và {sign}")`,
          },
        ],
      },
      {
        id: "2",
        title: "Hàm và Module trong Python",
        slug: "ham-va-module-python",
        duration: "50 phút",
        prerequisites: ["1"],
        content: `# Hàm và Module trong Python

## Hàm (Functions)

### Định nghĩa hàm
\`\`\`python
def greet(name):
    """Hàm chào hỏi"""
    return f"Xin chào {name}!"

def calculate_area(length, width):
    """Tính diện tích hình chữ nhật"""
    return length * width

# Gọi hàm
print(greet("John"))
print(calculate_area(5, 3))
\`\`\`

### Tham số mặc định
\`\`\`python
def introduce(name, age=25, city="Hà Nội"):
    """Hàm giới thiệu với tham số mặc định"""
    return f"Tôi là {name}, {age} tuổi, sống tại {city}"

print(introduce("John"))
print(introduce("Jane", 30, "TP.HCM"))
\`\`\`

## Module

### Tạo và sử dụng module
\`\`\`python
# math_operations.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Lỗi: Chia cho 0!"
    return a / b

# main.py
import math_operations as mo

print(mo.add(10, 5))
print(mo.multiply(4, 7))
\`\`\`

### Module tích hợp
\`\`\`python
import math
import random
from datetime import datetime

# Sử dụng math module
print(math.sqrt(25))
print(math.pi)

# Sử dụng random module
print(random.randint(1, 10))
fruits = ["apple", "banana", "orange"]
print(random.choice(fruits))

# Sử dụng datetime
now = datetime.now()
print(f"Bây giờ là: {now}")
\`\`\`

## Bài tập thực hành
Hãy tạo các module tiện ích của riêng bạn!`,
        exercises: [
          {
            id: "2-1",
            title: "Tạo module hình học",
            description: "Tạo module chứa các hàm tính toán hình học",
            instructions: `Tạo module geometry.py chứa các hàm:
- circle_area(radius): tính diện tích hình tròn
- circle_circumference(radius): tính chu vi hình tròn
- rectangle_area(length, width): tính diện tích hình chữ nhật
- triangle_area(base, height): tính diện tích tam giác

Sau đó import và sử dụng module này`,
            type: "code",
            starterCode: `# geometry.py
import math

# Viết các hàm của bạn ở đây

# main.py
# Import và sử dụng module geometry`,
            solution: `# geometry.py
import math

def circle_area(radius):
    """Tính diện tích hình tròn"""
    return math.pi * radius ** 2

def circle_circumference(radius):
    """Tính chu vi hình tròn"""
    return 2 * math.pi * radius

def rectangle_area(length, width):
    """Tính diện tích hình chữ nhật"""
    return length * width

def triangle_area(base, height):
    """Tính diện tích tam giác"""
    return 0.5 * base * height

# main.py
import geometry

print("Diện tích hình tròn:", geometry.circle_area(5))
print("Chu vi hình tròn:", geometry.circle_circumference(5))
print("Diện tích hình chữ nhật:", geometry.rectangle_area(4, 6))
print("Diện tích tam giác:", geometry.triangle_area(3, 8))`,
          },
          {
            id: "2-2",
            title: "Module xử lý chuỗi",
            description: "Tạo module với các hàm xử lý chuỗi tiện ích",
            instructions:
              "Tạo module string_utils.py với các hàm:\n- reverse_string(s): đảo ngược chuỗi\n- count_vowels(s): đếm số nguyên âm\n- is_palindrome(s): kiểm tra chuỗi đối xứng\n- capitalize_words(s): viết hoa chữ cái đầu mỗi từ",
            type: "code",
            starterCode: `# string_utils.py
# Viết các hàm của bạn ở đây

# main.py
# Import và sử dụng module string_utils`,
            solution: `# string_utils.py
def reverse_string(s):
    """Đảo ngược chuỗi"""
    return s[::-1]

def count_vowels(s):
    """Đếm số nguyên âm trong chuỗi"""
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

def is_palindrome(s):
    """Kiểm tra chuỗi đối xứng"""
    s = s.lower().replace(" ", "")
    return s == s[::-1]

def capitalize_words(s):
    """Viết hoa chữ cái đầu mỗi từ"""
    return s.title()

# main.py
import string_utils as su

text = "hello world python programming"
print("Chuỗi gốc:", text)
print("Đảo ngược:", su.reverse_string(text))
print("Số nguyên âm:", su.count_vowels(text))
print("Chuỗi đối xứng?", su.is_palindrome("A man a plan a canal Panama"))
print("Viết hoa:", su.capitalize_words(text))`,
          },
        ],
      },
      {
        id: "3",
        title: "Vòng lặp và List Comprehension",
        slug: "vong-lap-va-list-comprehension",
        duration: "45 phút",
        prerequisites: ["2"],
        content: `# Vòng lặp và List Comprehension trong Python

## Vòng lặp for

### Duyệt qua danh sách
\`\`\`python
fruits = ["apple", "banana", "orange", "grape"]

# Duyệt trực tiếp
for fruit in fruits:
    print(fruit)

# Duyệt với index
for i, fruit in enumerate(fruits):
    print(f"{i+1}. {fruit}")
\`\`\`

### Vòng lặp với range()
\`\`\`python
# In số từ 1 đến 5
for i in range(1, 6):
    print(i)

# In số chẵn từ 2 đến 10
for i in range(2, 11, 2):
    print(i)
\`\`\`

## Vòng lặp while
\`\`\`python
# Đếm ngược
count = 5
while count > 0:
    print(count)
    count -= 1
print("Happy New Year!")

# Nhập đến khi đúng
while True:
    age = input("Nhập tuổi của bạn: ")
    if age.isdigit() and int(age) > 0:
        break
    print("Vui lòng nhập số tuổi hợp lệ!")
\`\`\`

## List Comprehension

### Cú pháp cơ bản
\`\`\`python
# Tạo list bình phương
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Lọc số chẵn
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)  # [2, 4, 6, 8, 10]
\`\`\`

### List Comprehension phức tạp
\`\`\`python
# Tạo list tuple
pairs = [(x, y) for x in range(1, 4) for y in range(1, 4)]
print(pairs)  # [(1, 1), (1, 2), (1, 3), (2, 1), ...]

# Xử lý chuỗi
words = ["hello", "world", "python"]
capitalized = [word.upper() for word in words]
print(capitalized)  # ['HELLO', 'WORLD', 'PYTHON']
\`\`\`

## Kết hợp vòng lặp và điều kiện
\`\`\`python
# Tìm số nguyên tố
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = [x for x in range(2, 50) if is_prime(x)]
print("Số nguyên tố từ 2 đến 50:", primes)
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "Xử lý danh sách số",
            description: "Thực hành với vòng lặp và list comprehension",
            instructions:
              "Cho list numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hãy:\n1. Tạo list mới chứa bình phương các số (dùng for loop)\n2. Tạo list chứa lập phương các số lẻ (dùng list comprehension)\n3. Tính tổng các số chia hết cho 3",
            type: "code",
            starterCode: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1. Tạo list bình phương với for loop
squares = []

# 2. Tạo list lập phương số lẻ với list comprehension

# 3. Tính tổng số chia hết cho 3`,
            solution: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1. Tạo list bình phương với for loop
squares = []
for num in numbers:
    squares.append(num ** 2)
print("Bình phương:", squares)

# 2. Tạo list lập phương số lẻ với list comprehension
cubes_odd = [num ** 3 for num in numbers if num % 2 != 0]
print("Lập phương số lẻ:", cubes_odd)

# 3. Tính tổng số chia hết cho 3
sum_divisible_by_3 = sum(num for num in numbers if num % 3 == 0)
print("Tổng số chia hết cho 3:", sum_divisible_by_3)`,
          },
          {
            id: "3-2",
            title: "Máy tính điểm trung bình",
            description: "Viết chương trình tính điểm trung bình với vòng lặp",
            instructions:
              "Viết chương trình cho phép nhập nhiều điểm số, sau đó tính điểm trung bình và xếp loại",
            type: "code",
            starterCode: `# Viết chương trình tính điểm trung bình
# Cho phép nhập điểm đến khi người dùng nhập 'q'`,
            solution: `def calculate_grade_average():
    scores = []
    
    print("Nhập điểm số (nhập 'q' để kết thúc):")
    
    while True:
        score_input = input("Điểm: ")
        
        if score_input.lower() == 'q':
            break
            
        try:
            score = float(score_input)
            if 0 <= score <= 10:
                scores.append(score)
            else:
                print("Điểm phải từ 0 đến 10!")
        except ValueError:
            print("Vui lòng nhập số hợp lệ!")
    
    if scores:
        average = sum(scores) / len(scores)
        
        # Xếp loại
        if average >= 8.5:
            grade = "A"
        elif average >= 7.0:
            grade = "B"
        elif average >= 5.5:
            grade = "C"
        elif average >= 4.0:
            grade = "D"
        else:
            grade = "F"
        
        print(f"\\nĐiểm trung bình: {average:.2f}")
        print(f"Xếp loại: {grade}")
        print(f"Danh sách điểm: {scores}")
    else:
        print("Không có điểm nào được nhập!")

# Chạy chương trình
calculate_grade_average()`,
          },
        ],
      },
      {
        id: "4",
        title: "Xử lý File và JSON",
        slug: "xu-ly-file-va-json",
        duration: "55 phút",
        prerequisites: ["3"],
        content: `# Xử lý File và JSON trong Python

## Đọc và ghi file text

### Ghi file
\`\`\`python
# Ghi file mới
with open("data.txt", "w", encoding="utf-8") as file:
    file.write("Hello World!\\n")
    file.write("Đây là dòng thứ hai\\n")
    file.write("Dòng cuối cùng\\n")

# Ghi thêm vào file
with open("data.txt", "a", encoding="utf-8") as file:
    file.write("Dòng được thêm vào cuối\\n")
\`\`\`

### Đọc file
\`\`\`python
# Đọc toàn bộ file
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Đọc từng dòng
with open("data.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # strip() để bỏ ký tự xuống dòng

# Đọc thành list các dòng
with open("data.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    print(lines)
\`\`\`

## Xử lý JSON

### JSON sang Python
\`\`\`python
import json

# JSON string
json_string = '{"name": "John", "age": 30, "city": "New York"}'

# Chuyển JSON string thành Python dictionary
data = json.loads(json_string)
print(data["name"])  # John
print(data["age"])   # 30
\`\`\`

### Python sang JSON
\`\`\`python
import json

# Python dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "is_student": False,
    "hobbies": ["reading", "swimming", "coding"]
}

# Chuyển thành JSON string
json_string = json.dumps(person, indent=2, ensure_ascii=False)
print(json_string)
\`\`\`

### Đọc và ghi file JSON
\`\`\`python
import json

# Ghi dictionary vào file JSON
data = {
    "students": [
        {"name": "Alice", "score": 85},
        {"name": "Bob", "score": 92},
        {"name": "Charlie", "score": 78}
    ]
}

with open("students.json", "w", encoding="utf-8") as file:
    json.dump(data, file, indent=2, ensure_ascii=False)

# Đọc file JSON
with open("students.json", "r", encoding="utf-8") as file:
    loaded_data = json.load(file)
    print(loaded_data["students"])
\`\`\`

## Xử lý lỗi
\`\`\`python
try:
    with open("nonexistent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File không tồn tại!")
except PermissionError:
    print("Không có quyền truy cập file!")
except Exception as e:
    print(f"Lỗi: {e}")
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "Quản lý danh sách công việc",
            description: "Tạo ứng dụng quản lý todo list với file",
            instructions:
              "Tạo chương trình quản lý công việc với các chức năng:\n- Xem danh sách công việc\n- Thêm công việc mới\n- Đánh dấu hoàn thành\n- Lưu và tải từ file",
            type: "code",
            starterCode: `import json
import os

# Viết chương trình quản lý todo list`,
            solution: `import json
import os

TODO_FILE = "todos.json"

def load_todos():
    """Tải danh sách công việc từ file"""
    if os.path.exists(TODO_FILE):
        with open(TODO_FILE, 'r', encoding='utf-8') as file:
            return json.load(file)
    return []

def save_todos(todos):
    """Lưu danh sách công việc vào file"""
    with open(TODO_FILE, 'w', encoding='utf-8') as file:
        json.dump(todos, file, indent=2, ensure_ascii=False)

def show_todos(todos):
    """Hiển thị danh sách công việc"""
    if not todos:
        print("Không có công việc nào!")
        return
    
    print("\\n--- DANH SÁCH CÔNG VIỆC ---")
    for i, todo in enumerate(todos, 1):
        status = "✓" if todo["completed"] else "✗"
        print(f"{i}. [{status}] {todo['task']}")

def add_todo(todos):
    """Thêm công việc mới"""
    task = input("Nhập công việc mới: ").strip()
    if task:
        todos.append({"task": task, "completed": False})
        save_todos(todos)
        print("Đã thêm công việc!")
    else:
        print("Tên công việc không được để trống!")

def complete_todo(todos):
    """Đánh dấu công việc hoàn thành"""
    show_todos(todos)
    try:
        index = int(input("Nhập số thứ tự công việc đã hoàn thành: ")) - 1
        if 0 <= index < len(todos):
            todos[index]["completed"] = True
            save_todos(todos)
            print("Đã đánh dấu hoàn thành!")
        else:
            print("Số thứ tự không hợp lệ!")
    except ValueError:
        print("Vui lòng nhập số!")

def main():
    """Hàm chính của chương trình"""
    todos = load_todos()
    
    while True:
        print("\\n=== QUẢN LÝ CÔNG VIỆC ===")
        print("1. Xem danh sách")
        print("2. Thêm công việc")
        print("3. Đánh dấu hoàn thành")
        print("4. Thoát")
        
        choice = input("Chọn chức năng (1-4): ")
        
        if choice == "1":
            show_todos(todos)
        elif choice == "2":
            add_todo(todos)
        elif choice == "3":
            complete_todo(todos)
        elif choice == "4":
            print("Tạm biệt!")
            break
        else:
            print("Lựa chọn không hợp lệ!")

if __name__ == "__main__":
    main()`,
          },
        ],
      },
      {
        id: "5",
        title: "Lập trình hướng đối tượng (OOP)",
        slug: "lap-trinh-huong-doi-tuong",
        duration: "60 phút",
        prerequisites: ["4"],
        content: `# Lập trình hướng đối tượng trong Python

## Class và Object

### Định nghĩa class
\`\`\`python
class Student:
    # Constructor
    def __init__(self, name, age, student_id):
        self.name = name
        self.age = age
        self.student_id = student_id
        self.grades = []
    
    # Method
    def introduce(self):
        return f"Tôi là {self.name}, {self.age} tuổi, MSSV: {self.student_id}"
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def calculate_average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

# Tạo object
student1 = Student("Alice", 20, "SV001")
student2 = Student("Bob", 21, "SV002")

print(student1.introduce())
student1.add_grade(8.5)
student1.add_grade(9.0)
print(f"Điểm trung bình: {student1.calculate_average():.2f}")
\`\`\`

## Kế thừa (Inheritance)
\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Tôi là {self.name}, {self.age} tuổi"

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def teach(self):
        return f"{self.name} đang dạy môn {self.subject}"

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
        self.grades = []
    
    def study(self):
        return f"{self.name} đang học bài"

# Sử dụng
teacher = Teacher("Mr. Smith", 35, "Toán")
student = Student("Alice", 20, "SV001")

print(teacher.introduce())
print(teacher.teach())
print(student.introduce())
print(student.study())
\`\`\`

## Tính đóng gói (Encapsulation)
\`\`\`python
class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.__balance = initial_balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance
    
    def get_account_info(self):
        return f"Tài khoản: {self.account_holder}, Số dư: {self.__balance:,} VND"

# Sử dụng
account = BankAccount("John Doe", 1000000)
account.deposit(500000)
account.withdraw(200000)
print(account.get_account_info())
# print(account.__balance)  # Lỗi! Không thể truy cập trực tiếp
\`\`\`

## Tính đa hình (Polymorphism)
\`\`\`python
class Animal:
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

class Cow(Animal):
    def make_sound(self):
        return "Moo!"

# Sử dụng đa hình
animals = [Dog(), Cat(), Cow()]

for animal in animals:
    print(animal.make_sound())
\`\`\``,
        exercises: [
          {
            id: "5-1",
            title: "Hệ thống quản lý thư viện",
            description: "Xây dựng hệ thống quản lý thư viện với OOP",
            instructions:
              "Tạo các class:\n- Book: quản lý thông tin sách\n- Member: quản lý thành viên\n- Library: quản lý mượn/trả sách",
            type: "code",
            starterCode: `class Book:
    # Viết code của bạn ở đây
    pass

class Member:
    pass

class Library:
    pass`,
            solution: `class Book:
    def __init__(self, book_id, title, author, total_copies):
        self.book_id = book_id
        self.title = title
        self.author = author
        self.total_copies = total_copies
        self.available_copies = total_copies
    
    def borrow(self):
        if self.available_copies > 0:
            self.available_copies -= 1
            return True
        return False
    
    def return_book(self):
        if self.available_copies < self.total_copies:
            self.available_copies += 1
            return True
        return False
    
    def get_info(self):
        return f"'{self.title}' - {self.author} ({self.available_copies}/{self.total_copies} available)"

class Member:
    def __init__(self, member_id, name):
        self.member_id = member_id
        self.name = name
        self.borrowed_books = []
    
    def borrow_book(self, book):
        if book.borrow():
            self.borrowed_books.append(book.book_id)
            return True
        return False
    
    def return_book(self, book):
        if book.book_id in self.borrowed_books:
            book.return_book()
            self.borrowed_books.remove(book.book_id)
            return True
        return False
    
    def get_info(self):
        return f"{self.name} (ID: {self.member_id}) - Sách đang mượn: {len(self.borrowed_books)}"

class Library:
    def __init__(self):
        self.books = {}
        self.members = {}
    
    def add_book(self, book):
        self.books[book.book_id] = book
    
    def add_member(self, member):
        self.members[member.member_id] = member
    
    def display_books(self):
        print("\\n--- DANH SÁCH SÁCH ---")
        for book in self.books.values():
            print(book.get_info())
    
    def display_members(self):
        print("\\n--- DANH SÁCH THÀNH VIÊN ---")
        for member in self.members.values():
            print(member.get_info())

# Sử dụng hệ thống
library = Library()

# Thêm sách
book1 = Book("B001", "Python Programming", "John Doe", 5)
book2 = Book("B002", "Data Science", "Jane Smith", 3)
library.add_book(book1)
library.add_book(book2)

# Thêm thành viên
member1 = Member("M001", "Alice")
member2 = Member("M002", "Bob")
library.add_member(member1)
library.add_member(member2)

# Mượn sách
member1.borrow_book(book1)
member2.borrow_book(book2)

library.display_books()
library.display_members()`,
          },
        ],
      },
      {
        id: "6",
        title: "Xử lý ngoại lệ và Testing",
        slug: "xu-ly-ngoai-le-va-testing",
        duration: "50 phút",
        prerequisites: ["5"],
        content: `# Xử lý ngoại lệ và Testing trong Python

## Xử lý ngoại lệ (Exception Handling)

### try-except cơ bản
\`\`\`python
try:
    number = int(input("Nhập một số: "))
    result = 10 / number
    print(f"Kết quả: {result}")
except ValueError:
    print("Lỗi: Vui lòng nhập số hợp lệ!")
except ZeroDivisionError:
    print("Lỗi: Không thể chia cho 0!")
except Exception as e:
    print(f"Lỗi không xác định: {e}")
\`\`\`

### try-except-else-finally
\`\`\`python
def read_file(filename):
    try:
        file = open(filename, 'r', encoding='utf-8')
    except FileNotFoundError:
        print("File không tồn tại!")
        return None
    except PermissionError:
        print("Không có quyền truy cập file!")
        return None
    else:
        # Chỉ chạy nếu không có lỗi
        content = file.read()
        file.close()
        return content
    finally:
        # Luôn luôn chạy
        print("Hoàn thành xử lý file")

result = read_file("data.txt")
\`\`\`

### Tạo exception custom
\`\`\`python
class InvalidAgeError(Exception):
    """Exception cho tuổi không hợp lệ"""
    def __init__(self, age, message="Tuổi không hợp lệ"):
        self.age = age
        self.message = message
        super().__init__(self.message)
    
    def __str__(self):
        return f"{self.message}: {self.age}"

def set_age(age):
    if age < 0 or age > 150:
        raise InvalidAgeError(age, "Tuổi phải từ 0 đến 150")
    return age

try:
    age = set_age(200)
except InvalidAgeError as e:
    print(e)
\`\`\`

## Unit Testing với unittest

### Viết test cases
\`\`\`python
# calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Không thể chia cho 0!")
    return a / b

# test_calculator.py
import unittest
from calculator import add, subtract, multiply, divide

class TestCalculator(unittest.TestCase):
    
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
    
    def test_subtract(self):
        self.assertEqual(subtract(5, 3), 2)
        self.assertEqual(subtract(0, 5), -5)
    
    def test_multiply(self):
        self.assertEqual(multiply(3, 4), 12)
        self.assertEqual(multiply(0, 5), 0)
    
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(5, 2), 2.5)
        
        # Test exception
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()
\`\`\`

### Chạy tests
\`\`\`bash
python -m unittest test_calculator.py
python -m unittest discover  # Tìm và chạy tất cả tests
\`\`\`

## Debugging với pdb
\`\`\`python
import pdb

def complex_calculation(a, b, c):
    result = a * b
    pdb.set_trace()  # Điểm dừng debug
    result += c
    result /= a
    return result

# Gọi hàm để debug
print(complex_calculation(10, 5, 3))
\`\`\`

## Logging
\`\`\`python
import logging

# Cấu hình logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

def process_data(data):
    logging.info(f"Bắt đầu xử lý data: {data}")
    
    try:
        result = int(data) * 2
        logging.debug(f"Kết quả tính toán: {result}")
        return result
    except ValueError as e:
        logging.error(f"Lỗi xử lý data: {e}")
        return None

# Sử dụng
process_data("10")
process_data("abc")
\`\`\``,
        exercises: [
          {
            id: "6-1",
            title: "Viết tests cho hệ thống ngân hàng",
            description: "Tạo unit tests cho class BankAccount",
            instructions:
              "Viết tests cho class BankAccount với các trường hợp:\n- Gửi tiền hợp lệ/không hợp lệ\n- Rút tiền hợp lệ/không hợp lệ\n- Xử lý lỗi",
            type: "code",
            starterCode: `import unittest

class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.balance

# Viết test cases ở đây
class TestBankAccount(unittest.TestCase):
    pass`,
            solution: `import unittest

class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.balance

class TestBankAccount(unittest.TestCase):
    
    def setUp(self):
        """Chạy trước mỗi test method"""
        self.account = BankAccount(1000)
    
    def test_initial_balance(self):
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_deposit_positive(self):
        self.assertTrue(self.account.deposit(500))
        self.assertEqual(self.account.get_balance(), 1500)
    
    def test_deposit_negative(self):
        self.assertFalse(self.account.deposit(-100))
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_deposit_zero(self):
        self.assertFalse(self.account.deposit(0))
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_withdraw_valid(self):
        self.assertTrue(self.account.withdraw(300))
        self.assertEqual(self.account.get_balance(), 700)
    
    def test_withdraw_insufficient_funds(self):
        self.assertFalse(self.account.withdraw(1500))
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_withdraw_negative(self):
        self.assertFalse(self.account.withdraw(-100))
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_withdraw_zero(self):
        self.assertFalse(self.account.withdraw(0))
        self.assertEqual(self.account.get_balance(), 1000)
    
    def test_sequence_of_operations(self):
        self.account.deposit(500)
        self.account.withdraw(200)
        self.account.deposit(100)
        self.assertEqual(self.account.get_balance(), 1400)

if __name__ == '__main__':
    unittest.main()`,
          },
        ],
      },
    ],
  },
  {
    id: "html-css-advanced",
    slug: "html-css",
    title: "HTML & CSS Nâng cao",
    description: "Thiết kế web hiện đại với Flexbox, Grid và Responsive Design",
    image: "/images/html-css-course.jpg",
    duration: "10 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Flexbox Layout",
        slug: "flexbox-layout",
        duration: "65 phút",
        content: `# Flexbox Layout

## Giới thiệu Flexbox
Flexbox là một kỹ thuật layout trong CSS3 giúp sắp xếp các phần tử linh hoạt.

## Container Properties

### display: flex
\`\`\`css
.container {
  display: flex;
}
\`\`\`

### flex-direction
\`\`\`css
.container {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
}
\`\`\`

### justify-content
\`\`\`css
.container {
  display: flex;
  justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}
\`\`\`

### align-items
\`\`\`css
.container {
  display: flex;
  align-items: stretch; /* stretch | flex-start | flex-end | center | baseline */
}
\`\`\`

## Item Properties

### flex-grow, flex-shrink, flex-basis
\`\`\`css
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item-large {
  flex: 2;
}
\`\`\`

### align-self
\`\`\`css
.item {
  align-self: center; /* auto | flex-start | flex-end | center | baseline | stretch */
}
\`\`\`

## Ví dụ thực tế

### Navigation bar
\`\`\`html
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
\`\`\`

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #4CAF50;
}
\`\`\`

## Bài tập thực hành
Hãy tạo layout với Flexbox!`,
        exercises: [
          {
            id: "1-1",
            title: "Card Layout với Flexbox",
            description: "Tạo layout thẻ sản phẩm sử dụng Flexbox",
            instructions: `Tạo layout cho danh sách sản phẩm:
- Sử dụng Flexbox để sắp xếp các thẻ
- Mỗi thẻ có ảnh, tiêu đề, mô tả và giá
- Layout responsive: trên mobile hiển thị 1 cột, tablet 2 cột, desktop 3 cột`,
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .products-container {
      /* Viết CSS của bạn ở đây */
    }
    
    .product-card {
      /* Viết CSS của bạn ở đây */
    }
  </style>
</head>
<body>
  <div class="products-container">
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Product 1">
      <h3>Sản phẩm 1</h3>
      <p>Mô tả sản phẩm 1</p>
      <span class="price">100.000đ</span>
    </div>
    <!-- Thêm nhiều product-card khác -->
  </div>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .products-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .product-card {
      flex: 1 1 300px;
      max-width: 300px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 12px;
    }
    
    .product-card h3 {
      margin: 12px 0 8px;
      color: #333;
      font-size: 1.2em;
    }
    
    .product-card p {
      color: #666;
      margin-bottom: 12px;
      line-height: 1.4;
    }
    
    .price {
      font-size: 1.2em;
      font-weight: bold;
      color: #e44d26;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .product-card {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
      }
    }
    
    @media (max-width: 480px) {
      .product-card {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="products-container">
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Product 1">
      <h3>Sản phẩm 1</h3>
      <p>Mô tả sản phẩm 1 với nhiều tính năng nổi bật và chất lượng tốt</p>
      <span class="price">100.000đ</span>
    </div>
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Product 2">
      <h3>Sản phẩm 2</h3>
      <p>Mô tả sản phẩm 2 với thiết kế đẹp và hiện đại</p>
      <span class="price">150.000đ</span>
    </div>
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Product 3">
      <h3>Sản phẩm 3</h3>
      <p>Mô tả sản phẩm 3 với nhiều ưu điểm vượt trội</p>
      <span class="price">200.000đ</span>
    </div>
  </div>
</body>
</html>`,
          },
          {
            id: "1-2",
            title: "Flexbox Photo Gallery",
            description: "Tạo gallery ảnh responsive với Flexbox",
            instructions:
              "Tạo gallery ảnh với các tính năng:\n- Layout linh hoạt với flex-wrap\n- Ảnh tự động co giãn\n- Hiệu ứng hover\n- Responsive cho mobile",
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .gallery {
      /* Viết CSS của bạn ở đây */
    }
  </style>
</head>
<body>
  <div class="gallery">
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300" alt="Photo 1">
    </div>
    <!-- Thêm nhiều ảnh khác -->
  </div>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .photo-item {
      flex: 1 1 300px;
      max-width: 400px;
      height: 250px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }
    
    .photo-item:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .photo-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .photo-item:hover img {
      transform: scale(1.1);
    }
    
    .photo-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .photo-item:hover::after {
      opacity: 1;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .photo-item {
        flex: 1 1 calc(50% - 15px);
        max-width: calc(50% - 15px);
      }
    }
    
    @media (max-width: 480px) {
      .photo-item {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="gallery">
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/FF6B6B/white" alt="Photo 1">
    </div>
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/4ECDC4/white" alt="Photo 2">
    </div>
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/45B7D1/white" alt="Photo 3">
    </div>
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/96CEB4/white" alt="Photo 4">
    </div>
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/FECA57/white" alt="Photo 5">
    </div>
    <div class="photo-item">
      <img src="https://via.placeholder.com/400x300/FF9FF3/white" alt="Photo 6">
    </div>
  </div>
</body>
</html>`,
          },
        ],
      },
      {
        id: "2",
        title: "CSS Grid Layout",
        slug: "css-grid-layout",
        duration: "70 phút",
        prerequisites: ["1"],
        content: `# CSS Grid Layout

## Giới thiệu CSS Grid
CSS Grid là hệ thống layout 2 chiều mạnh mẽ cho thiết kế web.

## Grid Container

### display: grid
\`\`\`css
.container {
  display: grid;
}
\`\`\`

### grid-template-columns & grid-template-rows
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 100px auto 100px;
}
\`\`\`

### gap
\`\`\`css
.container {
  display: grid;
  gap: 20px; /* row-gap và column-gap */
}
\`\`\`

## Grid Items

### grid-column & grid-row
\`\`\`css
.item {
  grid-column: 1 / 3; /* Bắt đầu từ line 1, kết thúc ở line 3 */
  grid-row: 1 / 2;
}

.item-large {
  grid-column: span 2; /* Chiếm 2 cột */
}
\`\`\`

### grid-area
\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
\`\`\`

## Advanced Grid Features

### minmax()
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
\`\`\`

### auto-fit vs auto-fill
\`\`\`css
.container {
  /* auto-fit: co giãn các track để lấp đầy container */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  /* auto-fill: tạo nhiều track nhất có thể */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
\`\`\`

## Ví dụ thực tế

### Holy Grail Layout
\`\`\`html
<div class="grid-container">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <aside class="ads">Ads</aside>
  <footer class="footer">Footer</footer>
</div>
\`\`\`

\`\`\`css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
  .grid-container {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "ads"
      "footer";
    grid-template-columns: 1fr;
  }
}
\`\`\``,
        exercises: [
          {
            id: "2-1",
            title: "Dashboard Layout với CSS Grid",
            description: "Tạo layout dashboard hiện đại với CSS Grid",
            instructions:
              "Tạo dashboard layout với:\n- Header cố định\n- Sidebar điều hướng\n- Main content area\n- Thống kê cards\n- Responsive design",
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .dashboard {
      /* Viết CSS của bạn ở đây */
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <header class="header">Dashboard</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main">
      <div class="stats-grid">
        <div class="stat-card">Thống kê 1</div>
        <div class="stat-card">Thống kê 2</div>
        <div class="stat-card">Thống kê 3</div>
        <div class="stat-card">Thống kê 4</div>
      </div>
    </main>
  </div>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
    }
    
    .dashboard {
      display: grid;
      grid-template-areas:
        "sidebar header"
        "sidebar main";
      grid-template-columns: 250px 1fr;
      grid-template-rows: 70px 1fr;
      min-height: 100vh;
    }
    
    .header {
      grid-area: header;
      background: white;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-bottom: 1px solid #e9ecef;
    }
    
    .sidebar {
      grid-area: sidebar;
      background: #2c3e50;
      color: white;
      padding: 2rem 0;
    }
    
    .main {
      grid-area: main;
      padding: 2rem;
      background: #f8f9fa;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-left: 4px solid #3498db;
    }
    
    .stat-card:nth-child(2) {
      border-left-color: #2ecc71;
    }
    
    .stat-card:nth-child(3) {
      border-left-color: #e74c3c;
    }
    
    .stat-card:nth-child(4) {
      border-left-color: #f39c12;
    }
    
    .nav-menu {
      list-style: none;
    }
    
    .nav-item {
      padding: 0.75rem 2rem;
      transition: background-color 0.3s;
    }
    
    .nav-item:hover {
      background-color: #34495e;
    }
    
    .nav-item a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .dashboard {
        grid-template-areas:
          "header"
          "main";
        grid-template-columns: 1fr;
        grid-template-rows: 70px 1fr;
      }
      
      .sidebar {
        display: none;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <header class="header">
      <h1>Dashboard</h1>
      <div class="user-info">Xin chào, Admin!</div>
    </header>
    
    <aside class="sidebar">
      <nav>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#">📊 Tổng quan</a></li>
          <li class="nav-item"><a href="#">👥 Người dùng</a></li>
          <li class="nav-item"><a href="#">📦 Sản phẩm</a></li>
          <li class="nav-item"><a href="#">💰 Đơn hàng</a></li>
          <li class="nav-item"><a href="#">⚙️ Cài đặt</a></li>
        </ul>
      </nav>
    </aside>
    
    <main class="main">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Doanh thu</h3>
          <p class="stat-value">25.000.000đ</p>
          <small>+12% so với tháng trước</small>
        </div>
        <div class="stat-card">
          <h3>Người dùng</h3>
          <p class="stat-value">1,254</p>
          <small>+5% so với tháng trước</small>
        </div>
        <div class="stat-card">
          <h3>Đơn hàng</h3>
          <p class="stat-value">324</p>
          <small>+8% so với tháng trước</small>
        </div>
        <div class="stat-card">
          <h3>Tỷ lệ chuyển đổi</h3>
          <p class="stat-value">3.2%</p>
          <small>+0.5% so với tháng trước</small>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
          },
        ],
      },
      {
        id: "3",
        title: "Responsive Design",
        slug: "responsive-design",
        duration: "60 phút",
        prerequisites: ["2"],
        content: `# Responsive Design

## Mobile-First Approach
Phương pháp thiết kế mobile-first bắt đầu từ mobile và mở rộng lên desktop.

## Media Queries

### Breakpoints cơ bản
\`\`\`css
/* Mobile First */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
\`\`\`

### Common Breakpoints
\`\`\`css
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
\`\`\`

## Responsive Units

### Relative Units
\`\`\`css
.container {
  width: 100%; /* Percentage */
  padding: 1rem; /* Root EM */
  font-size: 1.125rem; /* Relative to root */
  margin: 2em; /* Relative to parent */
  width: 50vw; /* Viewport Width */
  height: 100vh; /* Viewport Height */
}
\`\`\`

### Fluid Typography
\`\`\`css
html {
  font-size: 16px;
}

@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 20px;
  }
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
\`\`\`

## Responsive Images

### srcset và sizes
\`\`\`html
<img 
  srcset="image-320w.jpg 320w,
          image-480w.jpg 480w,
          image-800w.jpg 800w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  src="image-800w.jpg" 
  alt="Responsive image">
\`\`\`

### picture element
\`\`\`html
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>
\`\`\`

## Responsive Navigation

### Hamburger Menu
\`\`\`html
<nav class="navbar">
  <div class="nav-brand">Logo</div>
  <button class="nav-toggle">☰</button>
  <ul class="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
\`\`\`

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-menu.active {
    display: flex;
  }
}
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "Responsive Blog Layout",
            description: "Tạo layout blog responsive với mobile-first approach",
            instructions:
              "Tạo blog layout với:\n- Mobile-first design\n- Navigation responsive\n- Grid layout cho articles\n- Fluid typography\n- Breakpoints cho tablet và desktop",
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Viết CSS mobile-first của bạn ở đây */
  </style>
</head>
<body>
  <header class="header">
    <nav class="navbar">...</nav>
  </header>
  <main class="main">...</main>
  <footer class="footer">...</footer>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    /* Mobile First Styles */
    .header {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-toggle {
      display: block;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #34495e;
      list-style: none;
      flex-direction: column;
      padding: 1rem;
    }
    
    .nav-menu.active {
      display: flex;
    }
    
    .nav-menu li {
      margin: 0.5rem 0;
    }
    
    .nav-menu a {
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      display: block;
      transition: background-color 0.3s;
    }
    
    .nav-menu a:hover {
      background-color: #4a6278;
    }
    
    .main {
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .articles-grid {
      display: grid;
      gap: 1.5rem;
    }
    
    .article-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .article-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .article-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .article-content {
      padding: 1.5rem;
    }
    
    .article-title {
      font-size: clamp(1.25rem, 2.5vw, 1.5rem);
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .article-excerpt {
      color: #666;
      margin-bottom: 1rem;
    }
    
    .read-more {
      color: #3498db;
      text-decoration: none;
      font-weight: 500;
    }
    
    .footer {
      background: #34495e;
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 2rem;
    }
    
    /* Tablet Styles */
    @media (min-width: 768px) {
      .nav-toggle {
        display: none;
      }
      
      .nav-menu {
        display: flex;
        position: static;
        background: transparent;
        flex-direction: row;
        padding: 0;
        gap: 2rem;
      }
      
      .articles-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .main {
        padding: 2rem;
      }
    }
    
    /* Desktop Styles */
    @media (min-width: 1024px) {
      .articles-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .header {
        padding: 1rem 2rem;
      }
      
      .main {
        padding: 3rem 2rem;
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <nav class="navbar">
      <div class="logo">MyBlog</div>
      <button class="nav-toggle">☰</button>
      <ul class="nav-menu">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Bài viết</a></li>
        <li><a href="#">Chuyên mục</a></li>
        <li><a href="#">Về chúng tôi</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>
    </nav>
  </header>
  
  <main class="main">
    <div class="articles-grid">
      <article class="article-card">
        <img src="https://via.placeholder.com/400x200/3498db/white" alt="Article 1" class="article-image">
        <div class="article-content">
          <h2 class="article-title">Responsive Design Best Practices</h2>
          <p class="article-excerpt">Khám phá các best practices để tạo website responsive hiệu quả và tối ưu trải nghiệm người dùng.</p>
          <a href="#" class="read-more">Đọc tiếp →</a>
        </div>
      </article>
      
      <article class="article-card">
        <img src="https://via.placeholder.com/400x200/2ecc71/white" alt="Article 2" class="article-image">
        <div class="article-content">
          <h2 class="article-title">CSS Grid vs Flexbox</h2>
          <p class="article-excerpt">So sánh sự khác biệt giữa CSS Grid và Flexbox, khi nào nên sử dụng công cụ nào cho layout.</p>
          <a href="#" class="read-more">Đọc tiếp →</a>
        </div>
      </article>
      
      <article class="article-card">
        <img src="https://via.placeholder.com/400x200/e74c3c/white" alt="Article 3" class="article-image">
        <div class="article-content">
          <h2 class="article-title">Mobile-First Approach</h2>
          <p class="article-excerpt">Tìm hiểu về phương pháp mobile-first trong thiết kế web và lợi ích của nó.</p>
          <a href="#" class="read-more">Đọc tiếp →</a>
        </div>
      </article>
    </div>
  </main>
  
  <footer class="footer">
    <p>&copy; 2024 MyBlog. All rights reserved.</p>
  </footer>

  <script>
    document.querySelector('.nav-toggle').addEventListener('click', function() {
      document.querySelector('.nav-menu').classList.toggle('active');
    });
  </script>
</body>
</html>`,
          },
        ],
      },
      {
        id: "4",
        title: "CSS Variables & Custom Properties",
        slug: "css-variables",
        duration: "45 phút",
        prerequisites: ["3"],
        content: `# CSS Variables & Custom Properties

## Giới thiệu CSS Custom Properties
CSS Variables (custom properties) cho phép lưu trữ và tái sử dụng giá trị trong CSS.

## Khai báo và sử dụng

### Khai báo biến
\`\`\`css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 1rem;
  --border-radius: 8px;
  --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
\`\`\`

### Sử dụng biến
\`\`\`css
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}
\`\`\`

### Fallback values
\`\`\`css
.element {
  color: var(--undefined-color, #000000); /* Sử dụng fallback nếu biến không tồn tại */
  margin: var(--spacing, 10px) var(--spacing, 10px);
}
\`\`\`

## Scoped Variables

### Local scope
\`\`\`css
.component {
  --local-color: #e74c3c;
  --local-spacing: 2rem;
}

.component .child {
  color: var(--local-color);
  padding: var(--local-spacing);
}
\`\`\`

### Theme switching
\`\`\`css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary: #3498db;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --primary: #2980b9;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
\`\`\`

## Advanced Usage

### Tính toán với calc()
\`\`\`css
:root {
  --base-size: 16px;
  --scale: 1.2;
}

h1 {
  font-size: calc(var(--base-size) * var(--scale) * 2);
}

h2 {
  font-size: calc(var(--base-size) * var(--scale) * 1.5);
}
\`\`\`

### Dynamic changes với JavaScript
\`\`\`javascript
// Thay đổi CSS variable
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// Đọc giá trị
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');
\`\`\`

## Design Systems với CSS Variables

### Design tokens
\`\`\`css
:root {
  /* Colors */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-danger: #e74c3c;
  --color-warning: #f39c12;
  
  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
\`\`\`

### Component styling
\`\`\`css
.button {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-primary {
  background-color: var(--color-primary);
  color: white;
}

.button-secondary {
  background-color: var(--color-secondary);
  color: white;
}
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "Design System với CSS Variables",
            description: "Tạo design system sử dụng CSS custom properties",
            instructions:
              "Tạo design system với:\n- CSS variables cho colors, typography, spacing\n- Component styles sử dụng variables\n- Dark/light theme switching\n- Consistent design tokens",
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      /* Viết CSS variables của bạn ở đây */
    }
  </style>
</head>
<body>
  <div class="container">
    <button class="btn btn-primary">Primary Button</button>
    <button class="btn btn-secondary">Secondary Button</button>
    <div class="card">Card Component</div>
  </div>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      /* Color Palette */
      --color-primary-50: #eff6ff;
      --color-primary-500: #3b82f6;
      --color-primary-600: #2563eb;
      --color-primary-700: #1d4ed8;
      
      --color-gray-50: #f9fafb;
      --color-gray-100: #f3f4f6;
      --color-gray-200: #e5e7eb;
      --color-gray-300: #d1d5db;
      --color-gray-400: #9ca3af;
      --color-gray-500: #6b7280;
      --color-gray-600: #4b5563;
      --color-gray-700: #374151;
      --color-gray-800: #1f2937;
      --color-gray-900: #111827;
      
      --color-white: #ffffff;
      --color-black: #000000;
      
      /* Typography */
      --font-family-sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
      --font-family-mono: 'Fira Code', 'Courier New', monospace;
      
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      
      --font-weight-normal: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
      
      /* Spacing */
      --spacing-1: 0.25rem;
      --spacing-2: 0.5rem;
      --spacing-3: 0.75rem;
      --spacing-4: 1rem;
      --spacing-5: 1.25rem;
      --spacing-6: 1.5rem;
      --spacing-8: 2rem;
      --spacing-10: 2.5rem;
      --spacing-12: 3rem;
      
      /* Border Radius */
      --radius-sm: 0.125rem;
      --radius-base: 0.25rem;
      --radius-md: 0.375rem;
      --radius-lg: 0.5rem;
      --radius-xl: 0.75rem;
      --radius-2xl: 1rem;
      
      /* Shadows */
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      
      /* Current Theme (Light by default) */
      --bg-primary: var(--color-white);
      --bg-secondary: var(--color-gray-50);
      --text-primary: var(--color-gray-900);
      --text-secondary: var(--color-gray-600);
      --border-color: var(--color-gray-200);
    }
    
    /* Dark Theme */
    [data-theme="dark"] {
      --bg-primary: var(--color-gray-900);
      --bg-secondary: var(--color-gray-800);
      --text-primary: var(--color-white);
      --text-secondary: var(--color-gray-300);
      --border-color: var(--color-gray-700);
    }
    
    /* Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-family-sans);
      font-size: var(--font-size-base);
      line-height: 1.5;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      transition: all 0.3s ease;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-8);
    }
    
    /* Button Component */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-2) var(--spacing-4);
      font-family: inherit;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: 1.25;
      border: 1px solid transparent;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      margin: var(--spacing-2);
    }
    
    .btn-primary {
      background-color: var(--color-primary-600);
      color: var(--color-white);
    }
    
    .btn-primary:hover {
      background-color: var(--color-primary-700);
    }
    
    .btn-secondary {
      background-color: var(--bg-secondary);
      color: var(--text-primary);
      border-color: var(--border-color);
    }
    
    .btn-secondary:hover {
      background-color: var(--color-gray-100);
    }
    
    [data-theme="dark"] .btn-secondary:hover {
      background-color: var(--color-gray-700);
    }
    
    /* Card Component */
    .card {
      background-color: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: var(--spacing-6);
      box-shadow: var(--shadow-base);
      margin: var(--spacing-4) 0;
      transition: all 0.3s ease;
    }
    
    .card:hover {
      box-shadow: var(--shadow-lg);
    }
    
    .card-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-2);
      color: var(--text-primary);
    }
    
    .card-content {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    /* Theme Toggle */
    .theme-toggle {
      position: fixed;
      top: var(--spacing-4);
      right: var(--spacing-4);
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: var(--spacing-2);
      cursor: pointer;
      font-size: var(--font-size-lg);
    }
  </style>
</head>
<body>
  <button class="theme-toggle" onclick="toggleTheme()">🌓</button>
  
  <div class="container">
    <h1>Design System với CSS Variables</h1>
    
    <div class="button-group">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary Button</button>
    </div>
    
    <div class="card">
      <h2 class="card-title">Card Component</h2>
      <p class="card-content">Đây là card component sử dụng CSS variables. Thử nhấn vào nút theme toggle để chuyển đổi giữa light và dark mode!</p>
    </div>
    
    <div class="card">
      <h2 class="card-title">Typography Scale</h2>
      <p style="font-size: var(--font-size-xs)">Extra Small Text (0.75rem)</p>
      <p style="font-size: var(--font-size-sm)">Small Text (0.875rem)</p>
      <p style="font-size: var(--font-size-base)">Base Text (1rem)</p>
      <p style="font-size: var(--font-size-lg)">Large Text (1.125rem)</p>
      <p style="font-size: var(--font-size-xl)">Extra Large Text (1.25rem)</p>
    </div>
  </div>

  <script>
    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  </script>
</body>
</html>`,
          },
        ],
      },
      {
        id: "5",
        title: "CSS Animations & Transitions",
        slug: "css-animations",
        duration: "55 phút",
        prerequisites: ["4"],
        content: `# CSS Animations & Transitions

## CSS Transitions

### transition property
\`\`\`css
.element {
  transition: property duration timing-function delay;
}

.button {
  transition: all 0.3s ease-in-out;
  /* Shorthand for:
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s; */
}
\`\`\`

### transition properties
\`\`\`css
.box {
  width: 100px;
  height: 100px;
  background: blue;
  transition: width 0.5s ease, height 0.5s ease, background 0.3s ease;
}

.box:hover {
  width: 200px;
  height: 200px;
  background: red;
}
\`\`\`

### timing functions
\`\`\`css
.element {
  transition-timing-function: ease; /* default */
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: linear;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
}
\`\`\`

## CSS Animations

### @keyframes
\`\`\`css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}
\`\`\`

### animation properties
\`\`\`css
.element {
  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
  animation-play-state: running;
}
\`\`\`

### animation shorthand
\`\`\`css
.element {
  animation: slideIn 1s ease-in-out 0.5s infinite alternate both;
}
\`\`\`

## Advanced Animations

### Multiple animations
\`\`\`css
.element {
  animation: 
    slideIn 0.5s ease-out,
    fadeIn 0.8s ease-in 0.2s both;
}
\`\`\`

### Step animations
\`\`\`css
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.typing-animation {
  animation: typing 3s steps(40, end);
}
\`\`\`

### 3D transforms
\`\`\`css
.card {
  transform: perspective(1000px) rotateY(0deg);
  transition: transform 0.6s ease;
}

.card:hover {
  transform: perspective(1000px) rotateY(180deg);
}
\`\`\`

## Performance Considerations

### Hardware acceleration
\`\`\`css
.animate {
  /* Sử dụng transform và opacity cho hiệu suất tốt nhất */
  transform: translateZ(0);
  will-change: transform;
}
\`\`\`

### Properties to animate
\`\`\`css
/* Good for performance */
transform: translateX(100px);
transform: scale(1.2);
opacity: 0.5;

/* Bad for performance */
width: 200px;
height: 200px;
margin-left: 100px;
\`\`\`

## Practical Examples

### Loading animation
\`\`\`css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.loading-dot {
  animation: bounce 1s infinite ease-in-out;
}

.loading-dot:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-dot:nth-child(3) {
  animation-delay: 0.2s;
}
\`\`\`

### Hover effects
\`\`\`css
.button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
\`\`\``,
        exercises: [
          {
            id: "5-1",
            title: "Interactive Product Card với Animations",
            description: "Tạo product card với các hiệu ứng animation nâng cao",
            instructions:
              "Tạo product card với:\n- Hover animations với transform\n- Loading skeleton\n- Image zoom effect\n- Smooth transitions\n- 3D flip effect",
            type: "code",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .product-card {
      /* Viết CSS của bạn ở đây */
    }
  </style>
</head>
<body>
  <div class="product-card">
    <div class="card-inner">
      <div class="card-front">
        <img src="https://via.placeholder.com/300x200" alt="Product">
        <h3>Product Name</h3>
        <p>$99.99</p>
      </div>
      <div class="card-back">
        <p>Product description and details</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      width: 100%;
    }
    
    .product-card {
      perspective: 1000px;
      height: 400px;
    }
    
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
      cursor: pointer;
    }
    
    .product-card:hover .card-inner {
      transform: rotateY(180deg);
    }
    
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      overflow: hidden;
    }
    
    .card-front {
      background: white;
      display: flex;
      flex-direction: column;
    }
    
    .card-back {
      background: linear-gradient(45deg, #2c3e50, #34495e);
      color: white;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    
    .product-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    
    .product-card:hover .product-image {
      transform: scale(1.1);
    }
    
    .product-info {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .product-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .product-description {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.4;
    }
    
    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e74c3c;
    }
    
    .add-to-cart {
      background: linear-gradient(45deg, #e74c3c, #c0392b);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    }
    
    .add-to-cart:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
    }
    
    .add-to-cart:active {
      transform: translateY(0);
    }
    
    /* Loading Skeleton */
    .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    
    .skeleton-image {
      height: 200px;
      width: 100%;
    }
    
    .skeleton-text {
      height: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 4px;
    }
    
    .skeleton-price {
      height: 1.5rem;
      width: 60%;
      margin: 0 auto;
    }
    
    /* Pulse animation for new items */
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
      }
    }
    
    .new-item {
      animation: pulse 2s infinite;
      position: relative;
    }
    
    .new-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #e74c3c;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      z-index: 10;
    }
    
    /* Floating animation */
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .featured-card {
      animation: float 3s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="product-grid">
    <div class="product-card featured-card">
      <div class="new-badge">NEW</div>
      <div class="card-inner">
        <div class="card-front">
          <img src="https://via.placeholder.com/300x200/3498db/white" alt="Product 1" class="product-image">
          <div class="product-info">
            <h3 class="product-title">Premium Headphones</h3>
            <p class="product-description">Chất lượng âm thanh tuyệt vời với thiết kế hiện đại và thoải mái.</p>
            <div class="product-price">$199.99</div>
          </div>
        </div>
        <div class="card-back">
          <h3>Thông tin chi tiết</h3>
          <p>• Âm thanh surround 7.1</p>
          <p>• Kết nối Bluetooth 5.0</p>
          <p>• Pin 30 giờ</p>
          <p>• Chống ồi active</p>
          <button class="add-to-cart">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    
    <div class="product-card">
      <div class="card-inner">
        <div class="card-front">
          <img src="https://via.placeholder.com/300x200/2ecc71/white" alt="Product 2" class="product-image">
          <div class="product-info">
            <h3 class="product-title">Wireless Mouse</h3>
            <p class="product-description">Chuột không dây với độ chính xác cao và thiết kế ergonomic.</p>
            <div class="product-price">$49.99</div>
          </div>
        </div>
        <div class="card-back">
          <h3>Thông tin chi tiết</h3>
          <p>• DPI 16000</p>
          <p>• Kết nối 2.4GHz & Bluetooth</p>
          <p>• Pin 6 tháng</p>
          <p>• 6 nút programmable</p>
          <button class="add-to-cart">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    
    <!-- Skeleton loading example -->
    <div class="product-card">
      <div class="card-front">
        <div class="skeleton skeleton-image"></div>
        <div class="product-info">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width: 80%"></div>
          <div class="skeleton skeleton-price"></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
          },
        ],
      },
    ],
  },
  {
    id: "database-design",
    slug: "database",
    title: "Thiết kế Cơ sở dữ liệu",
    description: "Nguyên lý thiết kế database, Normalization và SQL nâng cao",
    image: "/images/database-course.jpg",
    duration: "12 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "SQL Queries Nâng cao",
        slug: "sql-queries-nang-cao",
        duration: "75 phút",
        content: `# SQL Queries Nâng cao

## JOINs

### INNER JOIN
\`\`\`sql
SELECT users.name, orders.order_date, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
\`\`\`

### LEFT JOIN
\`\`\`sql
SELECT users.name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\`

### RIGHT JOIN
\`\`\`sql
SELECT users.name, orders.order_date
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
\`\`\`

### FULL OUTER JOIN
\`\`\`sql
SELECT users.name, orders.order_date
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
\`\`\`

## Subqueries

### Subquery trong WHERE
\`\`\`sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\`

### Subquery trong FROM
\`\`\`sql
SELECT department, AVG(avg_salary) as dept_avg_salary
FROM (SELECT department_id as department, AVG(salary) as avg_salary
      FROM employees
      GROUP BY department_id) as dept_salaries
GROUP BY department;
\`\`\`

## Window Functions

### ROW_NUMBER()
\`\`\`sql
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;
\`\`\`

### RANK() và DENSE_RANK()
\`\`\`sql
SELECT name, salary, department,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,
       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_dense_rank
FROM employees;
\`\`\`

### SUM() với OVER()
\`\`\`sql
SELECT name, salary, department,
       SUM(salary) OVER (PARTITION BY department) as dept_total_salary,
       salary * 100.0 / SUM(salary) OVER (PARTITION BY department) as salary_percentage
FROM employees;
\`\`\`

## Common Table Expressions (CTEs)
\`\`\`sql
WITH department_stats AS (
  SELECT department_id, 
         AVG(salary) as avg_salary,
         COUNT(*) as employee_count
  FROM employees
  GROUP BY department_id
)
SELECT d.name as department_name,
       ds.avg_salary,
       ds.employee_count
FROM departments d
JOIN department_stats ds ON d.id = ds.department_id
WHERE ds.avg_salary > 50000;
\`\`\`

## Bài tập thực hành
Hãy thực hành với các câu truy vấn phức tạp!`,
        exercises: [
          {
            id: "1-1",
            title: "Phân tích dữ liệu bán hàng",
            description: "Viết queries phân tích dữ liệu bán hàng",
            instructions: `Cho schema:
- customers(id, name, email)
- orders(id, customer_id, order_date, total_amount)
- order_items(id, order_id, product_id, quantity, price)

Viết các queries:
1. Top 5 khách hàng có tổng giá trị đơn hàng cao nhất
2. Doanh thu theo tháng trong năm 2024
3. Sản phẩm bán chạy nhất mỗi tháng`,
            type: "code",
            starterCode: `-- Viết queries của bạn ở đây

-- 1. Top 5 khách hàng có tổng giá trị đơn hàng cao nhất

-- 2. Doanh thu theo tháng trong năm 2024

-- 3. Sản phẩm bán chạy nhất mỗi tháng`,
            solution: `-- 1. Top 5 khách hàng có tổng giá trị đơn hàng cao nhất
SELECT c.name, SUM(o.total_amount) as total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC
LIMIT 5;

-- 2. Doanh thu theo tháng trong năm 2024
SELECT 
  EXTRACT(MONTH FROM order_date) as month,
  EXTRACT(YEAR FROM order_date) as year,
  SUM(total_amount) as monthly_revenue
FROM orders
WHERE EXTRACT(YEAR FROM order_date) = 2024
GROUP BY EXTRACT(YEAR FROM order_date), EXTRACT(MONTH FROM order_date)
ORDER BY year, month;

-- 3. Sản phẩm bán chạy nhất mỗi tháng
WITH monthly_sales AS (
  SELECT 
    EXTRACT(YEAR FROM o.order_date) as year,
    EXTRACT(MONTH FROM o.order_date) as month,
    oi.product_id,
    SUM(oi.quantity) as total_quantity,
    RANK() OVER (PARTITION BY EXTRACT(YEAR FROM o.order_date), EXTRACT(MONTH FROM o.order_date) 
                 ORDER BY SUM(oi.quantity) DESC) as rank
  FROM orders o
  JOIN order_items oi ON o.id = oi.order_id
  GROUP BY EXTRACT(YEAR FROM o.order_date), EXTRACT(MONTH FROM o.order_date), oi.product_id
)
SELECT year, month, product_id, total_quantity
FROM monthly_sales
WHERE rank = 1
ORDER BY year, month;`,
          },
          {
            id: "1-2",
            title: "Phân tích nhân sự với Window Functions",
            description:
              "Sử dụng window functions để phân tích dữ liệu nhân sự",
            instructions: `Cho schema employees:
- employees(id, name, department_id, salary, hire_date)

Viết các queries:
1. Lương cao nhất, thấp nhất và trung bình theo phòng ban
2. Xếp hạng lương trong từng phòng ban
3. Tính tỷ lệ % lương so với tổng lương phòng ban
4. Tìm người được thuê gần đây nhất mỗi phòng ban`,
            type: "code",
            starterCode: `-- Viết queries của bạn ở đây

-- 1. Lương cao nhất, thấp nhất và trung bình theo phòng ban

-- 2. Xếp hạng lương trong từng phòng ban

-- 3. Tính tỷ lệ % lương so với tổng lương phòng ban

-- 4. Tìm người được thuê gần đây nhất mỗi phòng ban`,
            solution: `-- 1. Lương cao nhất, thấp nhất và trung bình theo phòng ban
SELECT 
  department_id,
  MAX(salary) as max_salary,
  MIN(salary) as min_salary,
  ROUND(AVG(salary), 2) as avg_salary
FROM employees
GROUP BY department_id
ORDER BY avg_salary DESC;

-- 2. Xếp hạng lương trong từng phòng ban
SELECT 
  name,
  department_id,
  salary,
  RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_rank,
  DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_dense_rank
FROM employees
ORDER BY department_id, salary_rank;

-- 3. Tính tỷ lệ % lương so với tổng lương phòng ban
SELECT 
  name,
  department_id,
  salary,
  SUM(salary) OVER (PARTITION BY department_id) as dept_total_salary,
  ROUND((salary * 100.0 / SUM(salary) OVER (PARTITION BY department_id)), 2) as salary_percentage
FROM employees
ORDER BY department_id, salary DESC;

-- 4. Tìm người được thuê gần đây nhất mỗi phòng ban
WITH latest_hire AS (
  SELECT 
    name,
    department_id,
    hire_date,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY hire_date DESC) as hire_rank
  FROM employees
)
SELECT name, department_id, hire_date
FROM latest_hire
WHERE hire_rank = 1
ORDER BY department_id;`,
          },
        ],
      },
      {
        id: "2",
        title: "Database Normalization",
        slug: "database-normalization",
        duration: "80 phút",
        prerequisites: ["1"],
        content: `# Database Normalization

## Giới thiệu Normalization
Normalization là quá trình tổ chức dữ liệu trong database để giảm redundancy và cải thiện data integrity.

## First Normal Form (1NF)

### Quy tắc 1NF
1. Mỗi cell chỉ chứa một giá trị atomic
2. Mỗi bản ghi là unique
3. Các giá trị trong column cùng kiểu dữ liệu

### Ví dụ vi phạm 1NF
\`\`\`sql
-- VI PHẠM 1NF
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  courses VARCHAR(500) -- Chứa nhiều khóa học: "Math,Science,History"
);
\`\`\`

### Chuẩn hóa 1NF
\`\`\`sql
-- ĐẠT 1NF
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE student_courses (
  student_id INT,
  course_name VARCHAR(100),
  PRIMARY KEY (student_id, course_name),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
\`\`\`

## Second Normal Form (2NF)

### Quy tắc 2NF
1. Đạt 1NF
2. Mọi non-prime attribute phụ thuộc đầy đủ vào primary key

### Ví dụ vi phạm 2NF
\`\`\`sql
-- VI PHẠM 2NF
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  product_name VARCHAR(100), -- Phụ thuộc vào product_id, không phụ thuộc đầy đủ vào composite key
  quantity INT,
  price DECIMAL(10,2),
  PRIMARY KEY (order_id, product_id)
);
\`\`\`

### Chuẩn hóa 2NF
\`\`\`sql
-- ĐẠT 2NF
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  price DECIMAL(10,2),
  PRIMARY KEY (order_id, product_id)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100)
);
\`\`\`

## Third Normal Form (3NF)

### Quy tắc 3NF
1. Đạt 2NF
2. Không có transitive dependency (non-prime attribute không phụ thuộc vào non-prime attribute khác)

### Ví dụ vi phạm 3NF
\`\`\`sql
-- VI PHẠM 3NF
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  department_name VARCHAR(100), -- Phụ thuộc vào department_id (transitive dependency)
  department_location VARCHAR(100)
);
\`\`\`

### Chuẩn hóa 3NF
\`\`\`sql
-- ĐẠT 3NF
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100),
  department_location VARCHAR(100)
);
\`\`\`

## Boyce-Codd Normal Form (BCNF)

### Quy tắc BCNF
1. Đạt 3NF
2. Mọi determinant phải là candidate key

### Ví dụ vi phạm BCNF
\`\`\`sql
-- VI PHẠM BCNF
CREATE TABLE course_enrollment (
  student_id INT,
  course_id INT,
  instructor_id INT,
  -- Giả sử: mỗi instructor chỉ dạy một course
  -- Nhưng một course có nhiều instructor
  PRIMARY KEY (student_id, course_id)
);
\`\`\`

### Chuẩn hóa BCNF
\`\`\`sql
-- ĐẠT BCNF
CREATE TABLE student_enrollment (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id)
);

CREATE TABLE course_instructors (
  course_id INT,
  instructor_id INT,
  PRIMARY KEY (course_id, instructor_id)
);
\`\`\`

## Denormalization
Đôi khi cần denormalization cho performance:
\`\`\`sql
-- Denormalization cho reporting
CREATE TABLE sales_summary (
  product_id INT,
  product_name VARCHAR(100),
  category_name VARCHAR(100),
  total_sales DECIMAL(15,2),
  total_quantity INT,
  last_sale_date DATE
);
\`\`\``,
        exercises: [
          {
            id: "2-1",
            title: "Chuẩn hóa Database E-commerce",
            description: "Chuẩn hóa database thiết kế cho hệ thống e-commerce",
            instructions: `Cho thiết kế database chưa chuẩn hóa:
\`\`\`
orders(order_id, customer_name, customer_email, product_list, total_amount, order_date)
\`\`\`

product_list chứa: "ProductA:2:100,ProductB:1:150" (product_name:quantity:price)

Hãy chuẩn hóa lên 3NF với các bảng:
- customers
- orders 
- products
- order_items`,
            type: "code",
            starterCode: `-- Viết SQL schema đã chuẩn hóa ở đây

-- customers table

-- orders table

-- products table

-- order_items table`,
            solution: `-- customers table
CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- products table
CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- orders table
CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- order_items table
CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  UNIQUE KEY (order_id, product_id)
);`,
          },
          {
            id: "2-2",
            title: "Phân tích và Chuẩn hóa Database",
            description:
              "Phân tích các vi phạm normalization và đề xuất giải pháp",
            instructions: `Phân tích schema sau và xác định các vi phạm normalization:
\`\`\`
employee_projects(emp_id, emp_name, dept_id, dept_name, project_id, project_name, hours_worked, project_manager)
\`\`\`

Yêu cầu:
1. Xác định vi phạm 1NF, 2NF, 3NF
2. Đề xuất schema chuẩn hóa lên 3NF
3. Viết SQL để tạo các bảng đã chuẩn hóa`,
            type: "code",
            starterCode: `-- Phân tích vi phạm normalization

-- 1. Các vi phạm 1NF:

-- 2. Các vi phạm 2NF:

-- 3. Các vi phạm 3NF:

-- Đề xuất schema chuẩn hóa`,
            solution: `-- PHÂN TÍCH VI PHẠM:

-- 1. VI PHẠM 2NF:
--    - emp_name phụ thuộc vào emp_id (một phần của composite key)
--    - dept_name phụ thuộc vào dept_id (một phần của composite key)
--    - project_name phụ thuộc vào project_id (một phần của composite key)

-- 2. VI PHẠM 3NF:
--    - dept_name transitively phụ thuộc vào dept_id
--    - project_name và project_manager transitively phụ thuộc vào project_id

-- SCHEMA CHUẨN HÓA 3NF:

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(100) NOT NULL,
  dept_id INT NOT NULL
);

CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE projects (
  project_id INT PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  project_manager VARCHAR(100) NOT NULL
);

CREATE TABLE employee_projects (
  emp_id INT,
  project_id INT,
  hours_worked DECIMAL(5,2) NOT NULL CHECK (hours_worked >= 0),
  PRIMARY KEY (emp_id, project_id),
  FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
  FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

-- ADD FOREIGN KEY CONSTRAINTS
ALTER TABLE employees 
ADD CONSTRAINT fk_employee_department 
FOREIGN KEY (dept_id) REFERENCES departments(dept_id);`,
          },
        ],
      },
      {
        id: "3",
        title: "Indexes và Query Optimization",
        slug: "indexes-query-optimization",
        duration: "70 phút",
        prerequisites: ["2"],
        content: `# Indexes và Query Optimization

## Giới thiệu Indexes
Indexes giúp cải thiện performance của queries bằng cách cung cấp cấu trúc dữ liệu để tìm kiếm nhanh.

## Types of Indexes

### B-Tree Index (Mặc định)
\`\`\`sql
-- Single column index
CREATE INDEX idx_customer_email ON customers(email);

-- Composite index
CREATE INDEX idx_orders_date_customer ON orders(order_date, customer_id);

-- Unique index
CREATE UNIQUE INDEX idx_unique_product_sku ON products(sku);
\`\`\`

### Partial Index
\`\`\`sql
-- Chỉ index các bản ghi active
CREATE INDEX idx_active_products ON products(name) 
WHERE is_active = true;
\`\`\`

### Expression Index
\`\`\`sql
-- Index trên kết quả của expression
CREATE INDEX idx_lower_product_name ON products(LOWER(name));
\`\`\`

## Query Execution Plans

### EXPLAIN Command
\`\`\`sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 123;
\`\`\`

### EXPLAIN ANALYZE
\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
\`\`\`

## Query Optimization Techniques

### Sargable Queries
\`\`\`sql
-- KHÔNG Sargable (không sử dụng index)
SELECT * FROM products WHERE YEAR(created_date) = 2024;

-- Sargable (sử dụng index)
SELECT * FROM products 
WHERE created_date BETWEEN '2024-01-01' AND '2024-12-31';
\`\`\`

### Avoid SELECT *
\`\`\`sql
-- KHÔNG TỐT
SELECT * FROM customers WHERE city = 'Hanoi';

-- TỐT HƠN
SELECT customer_id, name, email 
FROM customers 
WHERE city = 'Hanoi';
\`\`\`

### JOIN Optimization
\`\`\`sql
-- Sử dụng EXISTS thay vì IN cho subqueries lớn
SELECT c.* 
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.customer_id = c.customer_id 
  AND o.total_amount > 1000
);
\`\`\`

## Index Strategy

### Khi nào nên tạo Index
- Columns trong WHERE clause
- Columns trong JOIN conditions
- Columns trong ORDER BY
- Foreign keys

### Khi nào KHÔNG nên tạo Index
- Tables nhỏ
- Columns thường xuyên được update
- Columns có cardinality thấp (ít giá trị unique)

### Monitoring Index Usage
\`\`\`sql
-- PostgreSQL: xem index usage
SELECT * FROM pg_stat_user_indexes;

-- MySQL: xem index usage
SHOW INDEX FROM table_name;
\`\`\`

## Common Performance Issues

### N+1 Query Problem
\`\`\`sql
-- VẤN ĐỀ: Một query lấy danh sách + N queries lấy chi tiết
SELECT * FROM orders WHERE customer_id = 123; -- 1 query
-- Sau đó với mỗi order: 
SELECT * FROM order_items WHERE order_id = ?; -- N queries

-- GIẢI PHÁP: Sử dụng JOIN hoặc batch query
SELECT o.*, oi.*
FROM orders o
LEFT JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.customer_id = 123;
\`\`\`

### Missing Indexes
\`\`\`sql
-- Query chậm do thiếu index
SELECT * FROM orders 
WHERE status = 'shipped' 
AND order_date >= '2024-01-01';

-- Tạo composite index
CREATE INDEX idx_orders_status_date 
ON orders(status, order_date);
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "Phân tích và Tối ưu Query Performance",
            description: "Phân tích query execution plans và đề xuất tối ưu",
            instructions: `Cho các queries sau, hãy:
1. Phân tích execution plan sử dụng EXPLAIN
2. Xác định vấn đề performance
3. Đề xuất indexes và query optimization
4. Viết lại queries để tối ưu performance`,
            type: "code",
            starterCode: `-- Query 1: Tìm sản phẩm theo tên (case-insensitive)
SELECT * FROM products 
WHERE LOWER(product_name) LIKE '%laptop%';

-- Query 2: Thống kê doanh thu theo category
SELECT c.category_name, SUM(oi.quantity * oi.unit_price) as total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE oi.created_at BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY c.category_name
ORDER BY total_revenue DESC;

-- Query 3: Tìm khách hàng có nhiều đơn hàng nhất
SELECT c.customer_id, c.name, COUNT(o.order_id) as order_count
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) > 5
ORDER BY order_count DESC
LIMIT 10;`,
            solution: `-- GIẢI PHÁP TỐI ƯU:

-- Query 1: Tạo expression index và sử dụng full-text search
CREATE INDEX idx_products_name_lower ON products(LOWER(product_name));

-- Hoặc tốt hơn: sử dụng full-text search
ALTER TABLE products ADD FULLTEXT(product_name);
SELECT * FROM products WHERE MATCH(product_name) AGAINST('laptop');

-- Query 2: Tạo composite indexes
CREATE INDEX idx_order_items_date_product ON order_items(created_at, product_id);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_categories_name ON categories(category_name);

-- Query viết lại với index-friendly conditions
SELECT c.category_name, SUM(oi.quantity * oi.unit_price) as total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE oi.created_at >= '2024-01-01' AND oi.created_at < '2025-01-01'
GROUP BY c.category_id, c.category_name  -- Group by category_id thay vì name
ORDER BY total_revenue DESC;

-- Query 3: Tạo indexes và tối ưu query
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
CREATE INDEX idx_customers_name ON customers(name);

-- Sử dụng covering index nếu có thể
SELECT c.customer_id, c.name, COUNT(o.order_id) as order_count
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) > 5
ORDER BY order_count DESC
LIMIT 10;

-- THỰC HÀNH EXPLAIN:
EXPLAIN ANALYZE 
SELECT c.category_name, SUM(oi.quantity * oi.unit_price) as total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE oi.created_at >= '2024-01-01' AND oi.created_at < '2025-01-01'
GROUP BY c.category_id, c.category_name
ORDER BY total_revenue DESC;`,
          },
        ],
      },
      {
        id: "4",
        title: "Transaction và Concurrency Control",
        slug: "transaction-concurrency",
        duration: "65 phút",
        prerequisites: ["3"],
        content: `# Transaction và Concurrency Control

## ACID Properties

### Atomicity
Transaction hoàn thành hoàn toàn hoặc không hoàn thành.

### Consistency
Transaction chuyển database từ state consistent sang state consistent khác.

### Isolation
Transactions thực hiện đồng thời không ảnh hưởng lẫn nhau.

### Durability
Khi transaction committed, changes được lưu vĩnh viễn.

## Transaction Syntax

### BEGIN, COMMIT, ROLLBACK
\`\`\`sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- Nếu thành công
COMMIT;

-- Nếu có lỗi
ROLLBACK;
\`\`\`

### SAVEPOINT
\`\`\`sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT after_debit;

UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
-- Nếu có lỗi ở bước này
ROLLBACK TO SAVEPOINT after_debit;

COMMIT;
\`\`\`

## Isolation Levels

### READ UNCOMMITTED
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT balance FROM accounts WHERE account_id = 1;
\`\`\`

### READ COMMITTED (Mặc định)
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance FROM accounts WHERE account_id = 1;
\`\`\`

### REPEATABLE READ
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE account_id = 1;
\`\`\`

### SERIALIZABLE
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT balance FROM accounts WHERE account_id = 1;
\`\`\`

## Concurrency Problems

### Dirty Read
Đọc dữ liệu từ transaction chưa committed.

### Non-repeatable Read
Một transaction đọc cùng row hai lần và nhận kết quả khác nhau.

### Phantom Read
Một transaction đọc tập hợp rows hai lần và thấy số lượng rows khác nhau.

### Lost Update
Hai transactions cùng update một row, update sau ghi đè update trước.

## Locking Mechanisms

### Row-level Locking
\`\`\`sql
-- SELECT FOR UPDATE (pessimistic locking)
BEGIN TRANSACTION;
SELECT * FROM accounts 
WHERE account_id = 1 
FOR UPDATE;

UPDATE accounts SET balance = balance - 100 
WHERE account_id = 1;
COMMIT;
\`\`\`

### Optimistic Locking
\`\`\`sql
-- Sử dụng version column
UPDATE products 
SET stock_quantity = stock_quantity - 1,
    version = version + 1
WHERE product_id = 123 
AND version = 5; -- Version hiện tại

-- Kiểm tra nếu rows affected = 0 thì có conflict
\`\`\`

## Deadlock Handling

### Deadlock Detection
\`\`\`sql
-- Transaction 1
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2; -- Chờ
COMMIT;

-- Transaction 2  
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 2;
UPDATE accounts SET balance = balance + 50 WHERE account_id = 1; -- Deadlock!
COMMIT;
\`\`\`

### Deadlock Prevention
\`\`\`sql
-- Luôn update accounts theo cùng thứ tự (ví dụ: từ id nhỏ đến lớn)
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- Transaction khác cũng phải theo thứ tự tương tự
UPDATE accounts SET balance = balance - 50 WHERE account_id = 1; 
UPDATE accounts SET balance = balance + 50 WHERE account_id = 2;
\`\`\`

## Practical Examples

### Bank Transfer Transaction
\`\`\`sql
CREATE PROCEDURE transfer_funds(
  IN from_account INT,
  IN to_account INT, 
  IN amount DECIMAL(10,2)
)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    RESIGNAL;
  END;
  
  START TRANSACTION;
  
  -- Kiểm tra số dư
  SELECT balance INTO @current_balance 
  FROM accounts 
  WHERE account_id = from_account 
  FOR UPDATE;
  
  IF @current_balance < amount THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
  END IF;
  
  -- Trừ tiền từ account nguồn
  UPDATE accounts 
  SET balance = balance - amount 
  WHERE account_id = from_account;
  
  -- Cộng tiền vào account đích
  UPDATE accounts 
  SET balance = balance + amount 
  WHERE account_id = to_account;
  
  -- Ghi log transaction
  INSERT INTO transactions (from_account, to_account, amount, transaction_date)
  VALUES (from_account, to_account, amount, NOW());
  
  COMMIT;
END;
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "E-commerce Inventory Management",
            description: "Triển khai transaction cho quản lý kho và đặt hàng",
            instructions: `Tạo stored procedure để xử lý đặt hàng với:
1. Kiểm tra số lượng tồn kho
2. Trừ số lượng từ inventory
3. Tạo order và order items
4. Xử lý concurrent orders với optimistic locking
5. Rollback nếu có lỗi`,
            type: "code",
            starterCode: `-- Tạo stored procedure place_order
CREATE PROCEDURE place_order(
  IN p_customer_id INT,
  IN p_product_id INT, 
  IN p_quantity INT
)
BEGIN
  -- Viết code của bạn ở đây
END;`,
            solution: `CREATE PROCEDURE place_order(
  IN p_customer_id INT,
  IN p_product_id INT, 
  IN p_quantity INT
)
BEGIN
  DECLARE v_current_stock INT;
  DECLARE v_product_price DECIMAL(10,2);
  DECLARE v_order_id INT;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    RESIGNAL;
  END;
  
  START TRANSACTION;
  
  -- Kiểm tra và lock product row với optimistic locking
  SELECT stock_quantity, price, version 
  INTO v_current_stock, v_product_price, @current_version
  FROM products 
  WHERE product_id = p_product_id 
  FOR UPDATE;
  
  -- Kiểm tra số lượng tồn kho
  IF v_current_stock < p_quantity THEN
    SIGNAL SQLSTATE '45000' 
    SET MESSAGE_TEXT = 'Insufficient stock';
  END IF;
  
  -- Cập nhật số lượng tồn kho với optimistic lock
  UPDATE products 
  SET stock_quantity = stock_quantity - p_quantity,
      version = version + 1,
      last_updated = NOW()
  WHERE product_id = p_product_id 
  AND version = @current_version;
  
  -- Kiểm tra nếu update thành công
  IF ROW_COUNT() = 0 THEN
    SIGNAL SQLSTATE '45000' 
    SET MESSAGE_TEXT = 'Concurrent modification detected. Please try again.';
  END IF;
  
  -- Tạo order
  INSERT INTO orders (customer_id, order_date, total_amount, status)
  VALUES (p_customer_id, NOW(), p_quantity * v_product_price, 'confirmed');
  
  SET v_order_id = LAST_INSERT_ID();
  
  -- Thêm order item
  INSERT INTO order_items (order_id, product_id, quantity, unit_price)
  VALUES (v_order_id, p_product_id, p_quantity, v_product_price);
  
  -- Ghi log inventory change
  INSERT INTO inventory_log (product_id, change_amount, change_type, reference_id, created_at)
  VALUES (p_product_id, -p_quantity, 'order', v_order_id, NOW());
  
  COMMIT;
  
  SELECT v_order_id as new_order_id;
END;`,
          },
        ],
      },
      {
        id: "5",
        title: "Database Security và Administration",
        slug: "database-security",
        duration: "60 phút",
        prerequisites: ["4"],
        content: `# Database Security và Administration

## User Management

### Tạo User
\`\`\`sql
-- Tạo user mới
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password';
CREATE USER 'readonly_user'@'%' IDENTIFIED BY 'readonly_pass';
\`\`\`

### Xóa User
\`\`\`sql
-- Xóa user
DROP USER 'old_user'@'localhost';
\`\`\`

## Privilege Management

### Grant Privileges
\`\`\`sql
-- Cấp quyền cơ bản
GRANT SELECT, INSERT, UPDATE ON ecommerce.* TO 'app_user'@'localhost';

-- Cấp quyền cho specific table
GRANT SELECT ON ecommerce.products TO 'readonly_user'@'%';

-- Cấp tất cả quyền
GRANT ALL PRIVILEGES ON ecommerce.* TO 'admin_user'@'localhost';
\`\`\`

### Revoke Privileges
\`\`\`sql
-- Thu hồi quyền
REVOKE DELETE ON ecommerce.* FROM 'app_user'@'localhost';
\`\`\`

### Xem Privileges
\`\`\`sql
-- Xem quyền của user
SHOW GRANTS FOR 'app_user'@'localhost';
\`\`\`

## Role-based Access Control

### Tạo Roles
\`\`\`sql
-- Tạo roles
CREATE ROLE 'order_manager';
CREATE ROLE 'product_manager';
CREATE ROLE 'report_viewer';
\`\`\`

### Gán Privileges cho Roles
\`\`\`sql
-- Cấp quyền cho roles
GRANT SELECT, INSERT, UPDATE ON ecommerce.orders TO 'order_manager';
GRANT SELECT, INSERT, UPDATE, DELETE ON ecommerce.products TO 'product_manager';
GRANT SELECT ON ecommerce.* TO 'report_viewer';
\`\`\`

### Gán Roles cho Users
\`\`\`sql
-- Gán role cho user
GRANT 'order_manager' TO 'user1'@'localhost';
GRANT 'product_manager' TO 'user2'@'localhost';
GRANT 'report_viewer' TO 'user3'@'localhost';

-- Kích hoạt role
SET DEFAULT ROLE ALL TO 'user1'@'localhost';
\`\`\`

## Database Backup và Recovery

### Logical Backup với mysqldump
\`\`\`bash
# Backup toàn bộ database
mysqldump -u root -p ecommerce > ecommerce_backup.sql

# Backup specific tables
mysqldump -u root -p ecommerce orders order_items > orders_backup.sql

# Backup với transaction consistent
mysqldump -u root -p --single-transaction ecommerce > ecommerce_consistent.sql
\`\`\`

### Restore từ Backup
\`\`\`bash
# Restore database
mysql -u root -p ecommerce < ecommerce_backup.sql
\`\`\`

### Automated Backups
\`\`\`sql
-- Event scheduler cho automatic backup (MySQL)
CREATE EVENT daily_backup
ON SCHEDULE EVERY 1 DAY
STARTS '2024-01-01 02:00:00'
DO
BEGIN
  -- Logic backup có thể implement qua stored procedure
  CALL create_daily_backup();
END;
\`\`\`

## Security Best Practices

### Password Policies
\`\`\`sql
-- Thiết lập password policy (MySQL 8.0+)
SET GLOBAL validate_password.policy = STRONG;
SET GLOBAL validate_password.length = 12;
SET GLOBAL validate_password.mixed_case_count = 1;
SET GLOBAL validate_password.number_count = 1;
SET GLOBAL validate_password.special_char_count = 1;
\`\`\`

### Audit Logging
\`\`\`sql
-- Tạo audit table
CREATE TABLE audit_log (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(100),
  action_type VARCHAR(50),
  table_name VARCHAR(100),
  record_id INT,
  old_values JSON,
  new_values JSON,
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45)
);

-- Trigger cho audit logging
CREATE TRIGGER audit_products_update
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
  INSERT INTO audit_log (user_name, action_type, table_name, record_id, old_values, new_values)
  VALUES (USER(), 'UPDATE', 'products', NEW.product_id, 
          JSON_OBJECT('product_name', OLD.product_name, 'price', OLD.price),
          JSON_OBJECT('product_name', NEW.product_name, 'price', NEW.price));
END;
\`\`\`

### Data Encryption
\`\`\`sql
-- Encryption at rest (MySQL)
CREATE TABLE sensitive_data (
  id INT PRIMARY KEY,
  credit_card_number VARBINARY(255),
  ssn VARBINARY(255)
);

-- Insert encrypted data
INSERT INTO sensitive_data (id, credit_card_number, ssn)
VALUES (1, 
        AES_ENCRYPT('4111111111111111', 'encryption_key'),
        AES_ENCRYPT('123-45-6789', 'encryption_key'));

-- Select decrypted data
SELECT id, 
       AES_DECRYPT(credit_card_number, 'encryption_key') as credit_card,
       AES_DECRYPT(ssn, 'encryption_key') as ssn
FROM sensitive_data;
\`\`\`

## Performance Monitoring

### Monitoring Queries
\`\`\`sql
-- Bật slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2; -- seconds
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';

-- Xem process list
SHOW PROCESSLIST;

-- Xem thông tin performance
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
SHOW STATUS LIKE 'Slow_queries';
\`\`\`

### Index Usage Statistics
\`\`\`sql
-- Xem index usage (MySQL)
SELECT * FROM sys.schema_index_statistics 
WHERE table_schema = 'ecommerce';

-- Xem unused indexes
SELECT * FROM sys.schema_unused_indexes 
WHERE object_schema = 'ecommerce';
\`\`\``,
        exercises: [
          {
            id: "5-1",
            title: "Triển khai Security cho E-commerce Database",
            description: "Thiết lập security policies và user management",
            instructions: `Cho database ecommerce, hãy triển khai:
1. Tạo roles: customer_service, inventory_manager, financial_analyst
2. Tạo users và gán roles phù hợp
3. Cấp quyền least privilege principle
4. Tạo audit logging cho bảng orders
5. Thiết lập backup strategy`,
            type: "code",
            starterCode: `-- 1. Tạo roles

-- 2. Tạo users và gán roles

-- 3. Cấp quyền cho roles

-- 4. Tạo audit logging trigger

-- 5. Backup strategy`,
            solution: `-- 1. TẠO ROLES
CREATE ROLE 'customer_service';
CREATE ROLE 'inventory_manager'; 
CREATE ROLE 'financial_analyst';

-- 2. TẠO USERS VÀ GÁN ROLES
CREATE USER 'cs_user'@'localhost' IDENTIFIED BY 'secure_cs_password';
CREATE USER 'inv_user'@'localhost' IDENTIFIED BY 'secure_inv_password';
CREATE USER 'fa_user'@'localhost' IDENTIFIED BY 'secure_fa_password';

GRANT 'customer_service' TO 'cs_user'@'localhost';
GRANT 'inventory_manager' TO 'inv_user'@'localhost';
GRANT 'financial_analyst' TO 'fa_user'@'localhost';

-- 3. CẤP QUYỀN CHO ROLES (LEAST PRIVILEGE)
-- Customer service: quản lý orders, customers
GRANT SELECT, INSERT, UPDATE ON ecommerce.orders TO 'customer_service';
GRANT SELECT, INSERT, UPDATE ON ecommerce.customers TO 'customer_service';
GRANT SELECT ON ecommerce.products TO 'customer_service';

-- Inventory manager: quản lý products, inventory
GRANT SELECT, INSERT, UPDATE, DELETE ON ecommerce.products TO 'inventory_manager';
GRANT SELECT, INSERT, UPDATE ON ecommerce.inventory_log TO 'inventory_manager';

-- Financial analyst: xem reports, không được sửa
GRANT SELECT ON ecommerce.orders TO 'financial_analyst';
GRANT SELECT ON ecommerce.order_items TO 'financial_analyst';
GRANT SELECT ON ecommerce.products TO 'financial_analyst';
GRANT SELECT ON ecommerce.customers TO 'financial_analyst';

-- 4. AUDIT LOGGING CHO ORDERS
CREATE TABLE order_audit_log (
  audit_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  action ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
  old_status VARCHAR(50),
  new_status VARCHAR(50),
  changed_by VARCHAR(100),
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45)
);

DELIMITER //
CREATE TRIGGER audit_order_changes
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
  IF OLD.status != NEW.status THEN
    INSERT INTO order_audit_log (order_id, action, old_status, new_status, changed_by, ip_address)
    VALUES (NEW.order_id, 'UPDATE', OLD.status, NEW.status, USER(), CONNECTION_ID());
  END IF;
END//
DELIMITER ;

-- 5. BACKUP STRATEGY
-- Tạo stored procedure cho daily backup
DELIMITER //
CREATE PROCEDURE create_daily_backup()
BEGIN
  -- Logic backup (trong thực tế sẽ gọi external tool)
  -- Ghi log backup
  INSERT INTO backup_log (backup_type, status, created_at)
  VALUES ('daily', 'success', NOW());
END//
DELIMITER ;

-- Tạo event cho automatic backup
CREATE EVENT IF NOT EXISTS daily_backup_event
ON SCHEDULE EVERY 1 DAY
STARTS '2024-01-01 23:00:00'
DO
CALL create_daily_backup();

-- Bật event scheduler
SET GLOBAL event_scheduler = ON;`,
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    id: "typescript-mastery",
    slug: "typescript",
    title: "TypeScript Mastery",
    description: "Lập trình type-safe với TypeScript nâng cao",
    image: "/images/typescript-course.jpg",
    duration: "10 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Type System Nâng cao",
        slug: "type-system-nang-cao",
        duration: "60 phút",
        content: `# Type System Nâng cao trong TypeScript

## Union và Intersection Types

### Union Types
\`\`\`typescript
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

let userId: ID = 123;  // OK
userId = 'abc123';     // OK
// userId = true;      // Error

function getStatusColor(status: Status): string {
  switch(status) {
    case 'pending': return 'yellow';
    case 'success': return 'green';
    case 'error': return 'red';
  }
}
\`\`\`

### Intersection Types
\`\`\`typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  role: string;
  permissions: string[];
}

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'superadmin',
  permissions: ['read', 'write', 'delete']
};
\`\`\`

## Generics

### Generic Functions
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity(42); // Type inference

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // number

const strings = ['a', 'b', 'c'];
const firstString = getFirstElement(strings); // string
\`\`\`

### Generic Interfaces
\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'John' },
  status: 200,
  message: 'Success'
};

const productResponse: ApiResponse<Product> = {
  // ...
};
\`\`\`

## Utility Types

### Partial<T>
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>) {
  // Chỉ cập nhật các trường được cung cấp
}

updateUser(1, { name: 'Jane' }); // OK
updateUser(1, { phone: '123' }); // Error
\`\`\`

### Required<T> và Readonly<T>
\`\`\`typescript
interface Props {
  name?: string;
  age?: number;
}

const props1: Props = { name: 'John' }; // OK
const props2: Required<Props> = { name: 'John', age: 25 }; // Bắt buộc

const user: Readonly<User> = { id: 1, name: 'John' };
// user.name = 'Jane'; // Error - readonly
\`\`\`

### Pick<T, K> và Omit<T, K>
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
type UserWithoutPassword = Omit<User, 'password'>;

const preview: UserPreview = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
};
\`\`\`

## Conditional Types
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

type ExtractType<T> = T extends { type: infer U } ? U : never;

type Event = { type: 'click'; x: number; y: number };
type EventType = ExtractType<Event>; // 'click'
\`\`\`

## Bài tập thực hành
Hãy áp dụng advanced types trong các tình huống thực tế!`,
        exercises: [
          {
            id: "1-1",
            title: "Xây dựng Generic API Client",
            description: "Tạo generic client cho REST API",
            instructions: `Tạo generic API client với các type safety features:
1. Generic function cho GET requests
2. Generic function cho POST requests  
3. Error handling với discriminated unions`,
            type: "code",
            starterCode: `// Viết code TypeScript của bạn ở đây
interface ApiError {
  code: number;
  message: string;
}

// Định nghĩa types và functions`,
            solution: `// Generic API Client
interface ApiError {
  code: number;
  message: string;
}

type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: ApiError };

async function apiGet<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data: T = await response.json();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: { 
        code: 500, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      } 
    };
  }
}

async function apiPost<T, U>(url: string, body: T): Promise<ApiResponse<U>> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data: U = await response.json();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: { 
        code: 500, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      } 
    };
  }
}

// Usage example
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
}

async function createUser(userData: CreateUserRequest) {
  const result = await apiPost<CreateUserRequest, User>('/api/users', userData);
  
  if (result.success) {
    console.log('User created:', result.data);
    return result.data;
  } else {
    console.error('Error:', result.error);
    throw new Error(result.error.message);
  }
}

async function getUser(id: number) {
  const result = await apiGet<User>(\`/api/users/\${id}\`);
  
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error.message);
  }
}`,
          },
          {
            id: "1-2",
            title: "Advanced Utility Types",
            description: "Tạo custom utility types cho các tình huống phức tạp",
            instructions: `Tạo các custom utility types:
1. DeepPartial - recursive partial
2. Nullable - cho phép null và undefined
3. Branded types cho type safety
4. Function overloads với conditional types`,
            type: "code",
            starterCode: `// Tạo custom utility types
type DeepPartial<T> = // Implement recursive partial

type Nullable<T> = // Cho phép T | null | undefined

// Branded types để phân biệt các primitive types
type UserId = string & { readonly brand: unique symbol };`,
            solution: `// Custom Utility Types

// 1. DeepPartial - recursive partial
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

interface UserProfile {
  id: number;
  address: {
    street: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const partialProfile: DeepPartial<UserProfile> = {
  address: {
    city: "Hanoi",
    coordinates: {} // Có thể bỏ qua lat và lng
  }
};

// 2. Nullable types
type Nullable<T> = T | null | undefined;

type MaybeString = Nullable<string>;
const str1: MaybeString = "hello";
const str2: MaybeString = null;
const str3: MaybeString = undefined;

// 3. Branded types cho type safety
declare const brand: unique symbol;

type Brand<T, B> = T & { [brand]: B };

type UserId = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;

function createUserId(id: string): UserId {
  return id as UserId;
}

function createProductId(id: string): ProductId {
  return id as ProductId;
}

const userId = createUserId('user-123');
const productId = createProductId('product-456');

// Không thể nhầm lẫn giữa UserId và ProductId
// function getUser(id: UserId) { ... }
// getUser(productId); // Type error!

// 4. Function overloads với conditional types
type AsyncResult<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

function handleResult<T, E = Error>(
  result: AsyncResult<T, E>
): T {
  if (result.success) {
    return result.data;
  } else {
    throw result.error;
  }
}

// 5. Conditional type helpers
type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
type ArrayElement = ExtractArrayType<string[]>; // string
type NotArray = ExtractArrayType<string>; // never

type Flatten<T> = T extends (infer U)[] ? U : T;
type Flat1 = Flatten<string[]>; // string
type Flat2 = Flatten<number>; // number

// 6. Mapped types với template literal types
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 7. Strict Omit - chỉ cho phép keys tồn tại
type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview = StrictOmit<Todo, 'completed'>;
// { id: number; title: string; }

// 8. RequireAtLeastOne - yêu cầu ít nhất một property
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> 
  & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys];

interface Config {
  host?: string;
  port?: number;
  timeout?: number;
}

type RequiredConfig = RequireAtLeastOne<Config, 'host' | 'port'>;

const validConfig: RequiredConfig = { host: 'localhost' }; // OK
const validConfig2: RequiredConfig = { port: 3000 }; // OK
// const invalidConfig: RequiredConfig = {}; // Error`,
          },
        ],
      },
      {
        id: "2",
        title: "Advanced Generics và Type Constraints",
        slug: "advanced-generics",
        duration: "70 phút",
        prerequisites: ["1"],
        content: `# Advanced Generics và Type Constraints

## Generic Constraints

### Basic Constraints
\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength([1, 2, 3]); // OK
logLength('hello');    // OK
// logLength(42);      // Error - number không có length
\`\`\`

### Multiple Constraints
\`\`\`typescript
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = mergeObjects(
  { name: 'John', age: 30 },
  { city: 'Hanoi', country: 'Vietnam' }
);
// { name: 'John', age: 30, city: 'Hanoi', country: 'Vietnam' }
\`\`\`

## Keyof và Lookup Types

### Keyof Operator
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: 'John', email: 'john@example.com' };
const name = getProperty(user, 'name'); // string
// getProperty(user, 'age'); // Error - 'age' không tồn tại trong User
\`\`\`

### Mapped Types
\`\`\`typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type PartialUser = Optional<User>;
// { id?: number; name?: string; email?: string; }
\`\`\`

## Conditional Types với Generics

### Type Inference trong Conditional Types
\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser(): { id: number; name: string } {
  return { id: 1, name: 'John' };
}

type UserReturn = ReturnType<typeof getUser>; // { id: number; name: string }
\`\`\`

### Distributive Conditional Types
\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;

type StringArray = ToArray<string>; // string[]
type NumberArray = ToArray<number>; // number[]
type UnionArray = ToArray<string | number>; // string[] | number[]
\`\`\`

## Generic Classes

### Generic Class Definition
\`\`\`typescript
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items[id];
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(item => !predicate(item));
  }
}

// Usage
interface Product {
  id: number;
  name: string;
  price: number;
}

const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: 'Laptop', price: 1000 });
\`\`\`

### Generic Constraints với Classes
\`\`\`typescript
interface Identifiable {
  id: number | string;
}

class IdentifiableRepository<T extends Identifiable> {
  private items: Map<T['id'], T> = new Map();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: T['id']): T | undefined {
    return this.items.get(id);
  }

  update(id: T['id'], updates: Partial<T>): void {
    const existing = this.items.get(id);
    if (existing) {
      this.items.set(id, { ...existing, ...updates });
    }
  }
}
\`\`\`

## Advanced Generic Patterns

### Factory Pattern với Generics
\`\`\`typescript
interface Factory<T> {
  create(): T;
}

class NumberFactory implements Factory<number> {
  create(): number {
    return Math.random();
  }
}

class StringFactory implements Factory<string> {
  create(): string {
    return Math.random().toString(36).substring(2);
  }
}

function createMultiple<T>(factory: Factory<T>, count: number): T[] {
  return Array.from({ length: count }, () => factory.create());
}

const numbers = createMultiple(new NumberFactory(), 5);
const strings = createMultiple(new StringFactory(), 5);
\`\`\`

### Builder Pattern với Generics
\`\`\`typescript
class QueryBuilder<T> {
  private filters: ((item: T) => boolean)[] = [];

  where<P extends keyof T>(
    property: P, 
    predicate: (value: T[P]) => boolean
  ): QueryBuilder<T> {
    this.filters.push(item => predicate(item[property]));
    return this;
  }

  execute(items: T[]): T[] {
    return items.filter(item => this.filters.every(filter => filter(item)));
  }
}

// Usage
interface User {
  id: number;
  name: string;
  age: number;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: 'John', age: 25, active: true },
  { id: 2, name: 'Jane', age: 30, active: false },
];

const result = new QueryBuilder<User>()
  .where('age', age => age > 25)
  .where('active', active => active === true)
  .execute(users);
\`\`\``,
        exercises: [
          {
            id: "2-1",
            title: "Generic Data Validator",
            description: "Tạo generic validation system với type-safe rules",
            instructions: `Xây dựng generic validator với:
1. Type-safe validation rules
2. Generic constraint cho validation schema
3. Composite validators
4. Async validation support`,
            type: "code",
            starterCode: `// Implement generic validator
type ValidationRule<T> = // Define validation rule type

class Validator<T> {
  // Implement validation methods
}`,
            solution: `// Generic Data Validator

type ValidationResult = 
  | { isValid: true }
  | { isValid: false; errors: string[] };

type ValidationRule<T> = {
  [K in keyof T]?: (value: T[K], obj: T) => string | null;
};

type AsyncValidationRule<T> = {
  [K in keyof T]?: (value: T[K], obj: T) => Promise<string | null>;
};

class Validator<T extends object> {
  private rules: ValidationRule<T> = {};
  private asyncRules: AsyncValidationRule<T> = {};

  rule<K extends keyof T>(
    field: K,
    validator: (value: T[K], obj: T) => string | null
  ): this {
    this.rules[field] = validator;
    return this;
  }

  asyncRule<K extends keyof T>(
    field: K,
    validator: (value: T[K], obj: T) => Promise<string | null>
  ): this {
    this.asyncRules[field] = validator;
    return this;
  }

  validate(obj: T): ValidationResult {
    const errors: string[] = [];

    for (const [field, validator] of Object.entries(this.rules)) {
      if (validator) {
        const value = obj[field as keyof T];
        const error = validator(value, obj);
        if (error) {
          errors.push(\`\${String(field)}: \${error}\`);
        }
      }
    }

    return errors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors };
  }

  async validateAsync(obj: T): Promise<ValidationResult> {
    const errors: string[] = [];

    // Sync validation first
    const syncResult = this.validate(obj);
    if (!syncResult.isValid) {
      errors.push(...syncResult.errors);
    }

    // Async validation
    for (const [field, validator] of Object.entries(this.asyncRules)) {
      if (validator) {
        const value = obj[field as keyof T];
        const error = await validator(value, obj);
        if (error) {
          errors.push(\`\${String(field)}: \${error}\`);
        }
      }
    }

    return errors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors };
  }
}

// Usage examples
interface UserRegistration {
  username: string;
  email: string;
  password: string;
  age: number;
  terms: boolean;
}

const userValidator = new Validator<UserRegistration>()
  .rule('username', (username) => {
    if (username.length < 3) return 'Username must be at least 3 characters';
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username can only contain letters, numbers, and underscores';
    return null;
  })
  .rule('email', (email) => {
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return 'Invalid email format';
    return null;
  })
  .rule('password', (password) => {
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(password)) return 'Password must contain uppercase, lowercase, and numbers';
    return null;
  })
  .rule('age', (age) => {
    if (age < 18) return 'Must be at least 18 years old';
    if (age > 120) return 'Age must be reasonable';
    return null;
  })
  .rule('terms', (terms) => {
    if (!terms) return 'Must accept terms and conditions';
    return null;
  })
  .asyncRule('email', async (email) => {
    // Simulate async email availability check
    await new Promise(resolve => setTimeout(resolve, 100));
    const takenEmails = ['existing@example.com'];
    if (takenEmails.includes(email)) {
      return 'Email is already taken';
    }
    return null;
  });

// Test validation
const testUser: UserRegistration = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123',
  age: 25,
  terms: true
};

const result = userValidator.validate(testUser);
console.log(result);

// Async validation
userValidator.validateAsync(testUser).then(console.log);

// Advanced: Composite Validator
class CompositeValidator<T extends object> {
  private validators: Validator<T>[] = [];

  addValidator(validator: Validator<T>): this {
    this.validators.push(validator);
    return this;
  }

  async validate(obj: T): Promise<ValidationResult> {
    const allErrors: string[] = [];

    for (const validator of this.validators) {
      const result = await validator.validateAsync(obj);
      if (!result.isValid) {
        allErrors.push(...result.errors);
      }
    }

    return allErrors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors: allErrors };
  }
}

// Create specialized validators
const basicInfoValidator = new Validator<UserRegistration>()
  .rule('username', (username) => {
    if (username.length < 3) return 'Username too short';
    return null;
  })
  .rule('email', (email) => {
    if (!email.includes('@')) return 'Invalid email';
    return null;
  });

const securityValidator = new Validator<UserRegistration>()
  .rule('password', (password) => {
    if (password.length < 8) return 'Weak password';
    return null;
  })
  .rule('terms', (terms) => {
    if (!terms) return 'Terms not accepted';
    return null;
  });

const composite = new CompositeValidator<UserRegistration>()
  .addValidator(basicInfoValidator)
  .addValidator(securityValidator);`,
          },
        ],
      },
      {
        id: "3",
        title: "TypeScript với Functional Programming",
        slug: "typescript-functional",
        duration: "65 phút",
        prerequisites: ["2"],
        content: `# TypeScript với Functional Programming

## Higher-Order Functions

### Function Types
\`\`\`typescript
type Mapper<T, U> = (value: T, index: number, array: T[]) => U;
type Predicate<T> = (value: T, index: number, array: T[]) => boolean;
type Reducer<T, U> = (accumulator: U, current: T, index: number, array: T[]) => U;

function map<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
  return array.map(mapper);
}

function filter<T>(array: T[], predicate: Predicate<T>): T[] {
  return array.filter(predicate);
}

function reduce<T, U>(array: T[], reducer: Reducer<T, U>, initial: U): U {
  return array.reduce(reducer, initial);
}
\`\`\`

### Currying và Partial Application
\`\`\`typescript
// Curried function
type Curried<T, U, R> = T extends []
  ? R
  : (arg: T) => U extends [] ? R : Curried<U, R>;

function curry<T extends any[], U, R>(
  fn: (...args: [...T, ...U]) => R
): Curried<T, U, R> {
  return fn as any; // Simplified implementation
}

// Practical example
const add = (a: number, b: number, c: number): number => a + b + c;
const curriedAdd = curry(add);

const add5 = curriedAdd(5);
const add5And10 = add5(10);
const result = add5And10(3); // 18
\`\`\`

## Immutable Data Structures

### Readonly Arrays và Objects
\`\`\`typescript
const immutableArray: readonly number[] = [1, 2, 3];
// immutableArray.push(4); // Error!

interface ImmutablePoint {
  readonly x: number;
  readonly y: number;
}

const point: ImmutablePoint = { x: 10, y: 20 };
// point.x = 15; // Error!
\`\`\`

### Immutable Updates
\`\`\`typescript
function updateObject<T extends object, K extends keyof T>(
  obj: T,
  updates: { [P in K]?: T[P] }
): T {
  return { ...obj, ...updates };
}

const user = { name: 'John', age: 30, active: true };
const updatedUser = updateObject(user, { age: 31 });

// With arrays
function addItem<T>(array: readonly T[], item: T): T[] {
  return [...array, item];
}

function removeItem<T>(array: readonly T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
\`\`\`

## Monads và Functional Patterns

### Option Type (Maybe)
\`\`\`typescript
type Option<T> = Some<T> | None;

interface Some<T> {
  readonly _tag: 'Some';
  readonly value: T;
}

interface None {
  readonly _tag: 'None';
}

const some = <T>(value: T): Some<T> => ({ _tag: 'Some', value });
const none: None = { _tag: 'None' };

function mapOption<T, U>(option: Option<T>, fn: (value: T) => U): Option<U> {
  return option._tag === 'Some' ? some(fn(option.value)) : none;
}

function flatMapOption<T, U>(option: Option<T>, fn: (value: T) => Option<U>): Option<U> {
  return option._tag === 'Some' ? fn(option.value) : none;
}

// Usage
function findUser(id: number): Option<{ name: string; email: string }> {
  return id > 0 ? some({ name: 'John', email: 'john@example.com' }) : none;
}

const userEmail = flatMapOption(
  findUser(1),
  user => some(user.email.toUpperCase())
);
\`\`\`

### Result Type (Either)
\`\`\`typescript
type Result<T, E = Error> = Success<T> | Failure<E>;

interface Success<T> {
  readonly _tag: 'Success';
  readonly value: T;
}

interface Failure<E> {
  readonly _tag: 'Failure';
  readonly error: E;
}

const success = <T>(value: T): Success<T> => ({ _tag: 'Success', value });
const failure = <E>(error: E): Failure<E> => ({ _tag: 'Failure', error });

function mapResult<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> {
  return result._tag === 'Success' ? success(fn(result.value)) : result;
}

function flatMapResult<T, U, E>(
  result: Result<T, E>, 
  fn: (value: T) => Result<U, E>
): Result<U, E> {
  return result._tag === 'Success' ? fn(result.value) : result;
}
\`\`\`

## Function Composition

### Pipe Function
\`\`\`typescript
function pipe<T>(value: T): T;
function pipe<T, A>(value: T, fn1: (value: T) => A): A;
function pipe<T, A, B>(value: T, fn1: (value: T) => A, fn2: (value: A) => B): B;
function pipe<T, A, B, C>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B,
  fn3: (value: B) => C
): C;
function pipe(value: any, ...fns: Function[]): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}

// Usage
const result = pipe(
  5,
  (x: number) => x * 2,
  (x: number) => x + 1,
  (x: number) => \`Result: \${x}\`
); // "Result: 11"
\`\`\`

### Compose Function
\`\`\`typescript
function compose<T, U, V>(f: (x: U) => V, g: (x: T) => U): (x: T) => V {
  return (x: T) => f(g(x));
}

function composeMany<T>(...fns: Function[]): (x: T) => any {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// Usage
const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;
const toString = (x: number) => x.toString();

const transform = composeMany(toString, multiply2, add1);
const output = transform(5); // "12"
\`\`\`

## Lenses và Immutable Updates

### Simple Lens Implementation
\`\`\`typescript
interface Lens<T, U> {
  get: (obj: T) => U;
  set: (obj: T, value: U) => T;
}

function lens<T, U>(getter: (obj: T) => U, setter: (obj: T, value: U) => T): Lens<T, U> {
  return { get: getter, set: setter };
}

function view<T, U>(lens: Lens<T, U>, obj: T): U {
  return lens.get(obj);
}

function set<T, U>(lens: Lens<T, U>, obj: T, value: U): T {
  return lens.set(obj, value);
}

function over<T, U>(lens: Lens<T, U>, obj: T, fn: (value: U) => U): T {
  return lens.set(obj, fn(lens.get(obj)));
}

// Usage
interface User {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const addressLens = lens(
  (user: User) => user.address,
  (user: User, address) => ({ ...user, address })
);

const cityLens = lens(
  (address: User['address']) => address.city,
  (address: User['address'], city) => ({ ...address, city })
);

const userCityLens: Lens<User, string> = {
  get: (user) => cityLens.get(addressLens.get(user)),
  set: (user, city) => addressLens.set(user, cityLens.set(addressLens.get(user), city))
};

const user: User = {
  name: 'John',
  address: { street: '123 Main St', city: 'Hanoi' }
};

const updatedUser = over(userCityLens, user, city => city.toUpperCase());
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "Functional Programming Library",
            description: "Xây dựng thư viện FP với TypeScript types",
            instructions: `Tạo thư viện functional programming với:
1. Option và Result monads
2. Function composition utilities
3. Immutable data helpers
4. Currying và partial application`,
            type: "code",
            starterCode: `// Implement FP library
class Option<T> {
  // Implement Option monad
}

class Result<T, E> {
  // Implement Result monad
}`,
            solution: `// Functional Programming Library

// Option Monad
type Option<T> = Some<T> | None;

interface Some<T> {
  readonly _tag: 'Some';
  readonly value: T;
}

interface None {
  readonly _tag: 'None';
}

const Some = <T>(value: T): Some<T> => ({ _tag: 'Some', value });
const None: None = { _tag: 'None' };

const isSome = <T>(option: Option<T>): option is Some<T> => option._tag === 'Some';
const isNone = <T>(option: Option<T>): option is None => option._tag === 'None';

class OptionImpl<T> {
  constructor(private readonly option: Option<T>) {}

  map<U>(fn: (value: T) => U): OptionImpl<U> {
    return new OptionImpl(
      isSome(this.option) ? Some(fn(this.option.value)) : None
    );
  }

  flatMap<U>(fn: (value: T) => Option<U>): OptionImpl<U> {
    return new OptionImpl(
      isSome(this.option) ? fn(this.option.value) : None
    );
  }

  getOrElse(defaultValue: T): T {
    return isSome(this.option) ? this.option.value : defaultValue;
  }

  match<U>(patterns: { Some: (value: T) => U; None: () => U }): U {
    return isSome(this.option) 
      ? patterns.Some(this.option.value)
      : patterns.None();
  }

  toResult<E>(error: E): Result<T, E> {
    return this.match({
      Some: value => Success(value),
      None: () => Failure(error)
    });
  }
}

// Result Monad
type Result<T, E = Error> = Success<T> | Failure<E>;

interface Success<T> {
  readonly _tag: 'Success';
  readonly value: T;
}

interface Failure<E> {
  readonly _tag: 'Failure';
  readonly error: E;
}

const Success = <T>(value: T): Success<T> => ({ _tag: 'Success', value });
const Failure = <E>(error: E): Failure<E> => ({ _tag: 'Failure', error });

const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => 
  result._tag === 'Success';
const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => 
  result._tag === 'Failure';

class ResultImpl<T, E = Error> {
  constructor(private readonly result: Result<T, E>) {}

  map<U>(fn: (value: T) => U): ResultImpl<U, E> {
    return new ResultImpl(
      isSuccess(this.result) ? Success(fn(this.result.value)) : this.result
    );
  }

  flatMap<U>(fn: (value: T) => Result<U, E>): ResultImpl<U, E> {
    return new ResultImpl(
      isSuccess(this.result) ? fn(this.result.value) : this.result
    );
  }

  mapError<F>(fn: (error: E) => F): ResultImpl<T, F> {
    return new ResultImpl(
      isFailure(this.result) ? Failure(fn(this.result.error)) : this.result
    );
  }

  getOrElse(defaultValue: T): T {
    return isSuccess(this.result) ? this.result.value : defaultValue;
  }

  match<U>(patterns: { Success: (value: T) => U; Failure: (error: E) => U }): U {
    return isSuccess(this.result)
      ? patterns.Success(this.result.value)
      : patterns.Failure(this.result.error);
  }

  toOption(): Option<T> {
    return this.match({
      Success: value => Some(value),
      Failure: () => None
    });
  }
}

// Function Composition Utilities
const pipe = <T>(value: T): T => value;

const pipe2 = <T, A>(value: T, fn1: (value: T) => A): A => fn1(value);

const pipe3 = <T, A, B>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B
): B => fn2(fn1(value));

const pipe4 = <T, A, B, C>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B,
  fn3: (value: B) => C
): C => fn3(fn2(fn1(value)));

// Overload for more functions as needed...

const compose = <A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C => {
  return (a: A) => f(g(a));
};

const composeMany = <T>(...fns: Function[]): (x: T) => any => {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
};

// Currying
type Curried<Args extends any[], R> = 
  Args extends [infer First, ...infer Rest]
    ? (arg: First) => Curried<Rest, R>
    : R;

function curry<Args extends any[], R>(
  fn: (...args: Args) => R
): Curried<Args, R> {
  return function curried(...args: any[]): any {
    return args.length >= fn.length
      ? fn(...args as Args)
      : (...moreArgs: any[]) => curried(...args, ...moreArgs);
  } as any;
}

// Immutable Data Helpers
const update = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
  updater: (value: T[K]) => T[K]
): T => ({
  ...obj,
  [key]: updater(obj[key])
});

const updateIn = <T extends object>(
  obj: T,
  path: string[],
  updater: (value: any) => any
): T => {
  if (path.length === 0) return obj;
  
  const [first, ...rest] = path;
  
  if (rest.length === 0) {
    return update(obj, first as keyof T, updater);
  }
  
  return update(obj, first as keyof T, (nested: any) => 
    updateIn(nested, rest, updater)
  );
};

const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2
});

// Usage Examples
const add = (a: number, b: number): number => a + b;
const curriedAdd = curry(add);
const add5 = curriedAdd(5);
const result = add5(10); // 15

// Working with Option
const divide = (a: number, b: number): Option<number> => 
  b === 0 ? None : Some(a / b);

const calculation = new OptionImpl(Some(10))
  .flatMap(x => divide(x, 2))
  .map(x => x * 3)
  .getOrElse(0);

// Working with Result
const safeDivide = (a: number, b: number): Result<number, string> =>
  b === 0 ? Failure('Division by zero') : Success(a / b);

const calculationResult = new ResultImpl(Success(10))
  .flatMap(x => safeDivide(x, 2))
  .map(x => x * 3)
  .match({
    Success: value => \`Result: \${value}\`,
    Failure: error => \`Error: \${error}\`
  });

// Complex pipeline
const processUser = (user: { name: string; age: number }) =>
  pipe4(
    user,
    (u) => ({ ...u, age: u.age + 1 }),
    (u) => ({ ...u, name: u.name.toUpperCase() }),
    (u) => \`\${u.name} is \${u.age} years old\`
  );`,
          },
        ],
      },
      {
        id: "4",
        title: "TypeScript trong Frontend Development",
        slug: "typescript-frontend",
        duration: "75 phút",
        prerequisites: ["3"],
        content: `# TypeScript trong Frontend Development

## React với TypeScript

### Functional Components
\`\`\`typescript
import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="user-card">
      <img 
        src={user.avatar || '/default-avatar.png'} 
        alt={user.name}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="actions">
        {onEdit && (
          <button onClick={() => onEdit(user)}>Edit</button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(user.id)}>Delete</button>
        )}
      </div>
    </div>
  );
};
\`\`\`

### Hooks với TypeScript
\`\`\`typescript
import { useState, useEffect, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (userId: number) => void;
}

function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = useCallback((userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Math.max(0, ...users.map(u => u.id)) + 1
    };
    setUsers(prev => [...prev, newUser]);
  }, [users]);

  const removeUser = useCallback((userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  }, []);

  return { users, loading, error, addUser, removeUser };
}
\`\`\`

## Vue với TypeScript

### Composition API
\`\`\`typescript
<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button @click="addUser">Add User</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
}

// Reactive state
const users = ref<User[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

// Computed properties
const userCount = computed(() => users.value.length);
const title = computed(() => \`Users (\${userCount.value})\`);

// Methods
const fetchUsers = async () => {
  try {
    loading.value = true;
    const response = await fetch('/api/users');
    users.value = await response.json();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
  } finally {
    loading.value = false;
  }
};

const addUser = () => {
  const newUser: User = {
    id: Math.max(0, ...users.value.map(u => u.id)) + 1,
    name: 'New User',
    email: 'new@example.com'
  };
  users.value.push(newUser);
};

// Lifecycle
onMounted(() => {
  fetchUsers();
});
</script>
\`\`\`

### Props với TypeScript
\`\`\`typescript
<template>
  <div class="user-list">
    <user-card
      v-for="user in filteredUsers"
      :key="user.id"
      :user="user"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  users: User[];
  searchQuery?: string;
  showInactive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  searchQuery: '',
  showInactive: false
});

const emit = defineEmits<{
  edit: [user: User];
  delete: [userId: number];
}>();

const filteredUsers = computed(() => {
  return props.users.filter(user => {
    const matchesSearch = user.name.toLowerCase()
      .includes(props.searchQuery.toLowerCase());
    const isActive = props.showInactive || user.active;
    return matchesSearch && isActive;
  });
});

const handleEdit = (user: User) => {
  emit('edit', user);
};

const handleDelete = (userId: number) => {
  emit('delete', userId);
};
</script>
\`\`\`

## State Management

### Redux với TypeScript
\`\`\`typescript
// types.ts
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

interface UsersState {
  items: User[];
  loading: boolean;
  error: string | null;
}

// actions.ts
const FETCH_USERS_REQUEST = 'users/FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'users/FETCH_USERS_FAILURE';

interface FetchUsersRequest {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccess {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailure {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

type UsersAction = 
  | FetchUsersRequest 
  | FetchUsersSuccess 
  | FetchUsersFailure;

// reducer.ts
const initialState: UsersState = {
  items: [],
  loading: false,
  error: null
};

export function usersReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
\`\`\`

### Pinia với TypeScript
\`\`\`typescript
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    users: [],
    loading: false,
    error: null
  }),

  getters: {
    activeUsers: (state) => state.users.filter(user => user.active),
    userCount: (state) => state.users.length
  },

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('/api/users');
        this.users = await response.json();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },

    addUser(userData: Omit<User, 'id'>) {
      const newUser: User = {
        ...userData,
        id: Math.max(0, ...this.users.map(u => u.id)) + 1
      };
      this.users.push(newUser);
    },

    removeUser(userId: number) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
});
\`\`\`

## Form Handling

### Type-Safe Forms
\`\`\`typescript
interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function validateLoginForm(form: LoginForm): FormErrors {
  const errors: FormErrors = {};

  if (!form.email) {
    errors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(form.email)) {
    errors.email = 'Email is invalid';
  }

  if (!form.password) {
    errors.password = 'Password is required';
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
}

// React Hook Form với TypeScript
import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /\\S+@\\S+\\.\\S+/,
            message: 'Invalid email address'
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input 
        type="password"
        {...register('password', { 
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <input type="checkbox" {...register('rememberMe')} />
      
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "Type-Safe React Component Library",
            description:
              "Xây dựng component library với TypeScript strict types",
            instructions: `Tạo component library với:
1. Strictly typed components
2. Generic components với constraints
3. Compound components pattern
4. Forward refs với proper typing`,
            type: "code",
            starterCode: `// Implement typed components
interface ButtonProps {
  // Define button props
}

const Button: React.FC<ButtonProps> = () => {
  // Implement button
}`,
            solution: `// Type-Safe React Component Library

import React, { 
  forwardRef, 
  createContext, 
  useContext, 
  useState 
} from 'react';

// Button Component
interface BaseButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded focus:outline-none transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300'
  };
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    props.className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

// Form Components
interface FormFieldContextValue {
  id: string;
  name: string;
  error?: string;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

interface FormFieldProps {
  children: React.ReactNode;
  name: string;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ children, name, error }) => {
  const id = React.useId();

  return (
    <FormFieldContext.Provider value={{ id, name, error }}>
      <div className="form-field">
        {children}
        {error && <div className="form-error">{error}</div>}
      </div>
    </FormFieldContext.Provider>
  );
};

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('Label must be used within FormField');
  }

  return (
    <label htmlFor={context.id} className="form-label">
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number';
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('Input must be used within FormField');
  }

  return (
    <input
      ref={ref}
      id={context.id}
      name={context.name}
      className={\`form-input \${context.error ? 'error' : ''}\`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

// Modal Component với Compound Pattern
interface ModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Modal: React.FC<ModalProps> & {
  Trigger: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
} = ({ children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalTrigger must be used within Modal');
  }

  return React.cloneElement(children as React.ReactElement, {
    onClick: context.open
  });
};

const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContent must be used within Modal');
  }

  if (!context.isOpen) return null;

  return (
    <div className="modal-overlay" onClick={context.close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

// Data Table với Generics
interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (row: T) => void;
}

function DataTable<T>({ data, columns, keyField, onRowClick }: DataTableProps<T>) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr 
            key={String(row[keyField])}
            onClick={() => onRowClick?.(row)}
            className={onRowClick ? 'clickable' : ''}
          >
            {columns.map(column => (
              <td key={String(column.key)}>
                {column.render 
                  ? column.render(row[column.key], row)
                  : String(row[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage Examples
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const columns: Column<User>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { 
      key: 'role', 
      header: 'Role',
      render: (value) => <span className={\`role-badge role-\${value}\`}>{value}</span>
    }
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      keyField="id"
      onRowClick={(user) => console.log('Selected user:', user)}
    />
  );
};

// Form Usage Example
const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  return (
    <form>
      <FormField name="name">
        <Label>Name</Label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </FormField>

      <FormField name="email">
        <Label>Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </FormField>

      <Button type="submit">Create User</Button>
    </form>
  );
};

// Modal Usage Example
const UserModal: React.FC = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      
      <Modal.Content>
        <h2>Create User</h2>
        <UserForm />
      </Modal.Content>
    </Modal>
  );
};

// Spinner Component (helper)
const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <div className={\`spinner \${className || ''}\`} />
);`,
          },
        ],
      },
      {
        id: "5",
        title: "Advanced TypeScript Patterns và Performance",
        slug: "advanced-patterns-performance",
        duration: "80 phút",
        prerequisites: ["4"],
        content: `# Advanced TypeScript Patterns và Performance

## Decorators và Metadata

### Class Decorators
\`\`\`typescript
function LogClass(target: Function) {
  console.log(\`Class \${target.name} was defined\`);
}

function Entity(tableName: string) {
  return function<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      public readonly tableName = tableName;
    };
  };
}

@LogClass
@Entity('users')
class User {
  constructor(public name: string, public email: string) {}
}

const user = new User('John', 'john@example.com');
console.log((user as any).tableName); // 'users'
\`\`\`

### Method Decorators
\`\`\`typescript
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyName} with args:\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`\${propertyName} returned:\`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`

### Property Decorators
\`\`\`typescript
function MinLength(length: number) {
  return function(target: any, propertyName: string) {
    let value: string;
    
    const getter = () => value;
    const setter = (newValue: string) => {
      if (newValue.length < length) {
        throw new Error(
          \`\${propertyName} must be at least \${length} characters long\`
        );
      }
      value = newValue;
    };
    
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter
    });
  };
}

class User {
  @MinLength(3)
  username: string;
  
  constructor(username: string) {
    this.username = username;
  }
}
\`\`\`

## Mixins

### Mixin Pattern
\`\`\`typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false;
    
    activate() {
      this.isActive = true;
    }
    
    deactivate() {
      this.isActive = false;
    }
  };
}

class User {
  constructor(public name: string) {}
}

const TimestampedActivatableUser = Timestamped(Activatable(User));
const user = new TimestampedActivatableUser('John');
user.activate();
console.log(user.timestamp, user.isActive);
\`\`\`

## Performance Optimization

### const assertions
\`\`\`typescript
// Thay vì
const colors = ['red', 'green', 'blue']; // string[]

// Sử dụng const assertions
const colors = ['red', 'green', 'blue'] as const; // readonly ["red", "green", "blue"]

// Objects với const assertions
const user = {
  name: 'John',
  age: 30,
  permissions: ['read', 'write']
} as const;

// user.name = 'Jane'; // Error!
\`\`\`

### Satisfies Operator
\`\`\`typescript
interface Config {
  color: 'red' | 'green' | 'blue';
  size: 'small' | 'medium' | 'large';
}

const config = {
  color: 'red',
  size: 'medium'
} satisfies Config;

// TypeScript biết config.color là 'red' | 'green' | 'blue'
// nhưng vẫn giữ literal type 'red'
\`\`\`

### Template Literal Types Performance
\`\`\`typescript
// Có thể gây performance issues với types phức tạp
type Color = 'red' | 'green' | 'blue';
type Size = 'small' | 'medium' | 'large';

// Tốt
type ButtonVariant = \`\${Color}-\${Size}\`;

// Có thể gây issues
// type AllCombinations = \`\${Color}-\${Size}-\${Variant}...\`;
\`\`\`

## Advanced Conditional Types

### Recursive Types
\`\`\`typescript
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]>
    : T[P];
};

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object 
    ? DeepRequired<T[P]>
    : T[P];
};
\`\`\`

### Template Literal Types Manipulation
\`\`\`typescript
type EventName = 'click' | 'scroll' | 'keypress';
type HandlerName<T extends string> = \`on\${Capitalize<T>}\`;

type EventHandlers = {
  [K in EventName as HandlerName<K>]: (event: Event) => void;
};
// {
//   onClick: (event: Event) => void;
//   onScroll: (event: Event) => void;
//   onKeypress: (event: Event) => void;
// }

// Advanced manipulation
type GetterName<T extends string> = \`get\${Capitalize<T>}\`;
type SetterName<T extends string> = \`set\${Capitalize<T>}\`;

type Accessors<T extends string> = 
  | GetterName<T> 
  | SetterName<T>;
\`\`\`

## Type-Level Programming

### Type-Level Arithmetic
\`\`\`typescript
type Length<T extends any[]> = T['length'];

type BuildArray<
  N extends number, 
  T extends any[] = []
> = T['length'] extends N 
  ? T 
  : BuildArray<N, [...T, any]>;

type Add<A extends number, B extends number> = 
  Length<[...BuildArray<A>, ...BuildArray<B>]>;

type Subtract<A extends number, B extends number> = 
  BuildArray<A> extends [...BuildArray<B>, ...infer R] 
    ? Length<R> 
    : never;

type Result1 = Add<5, 3>; // 8
type Result2 = Subtract<8, 3>; // 5
\`\`\`

### String Manipulation ở Type Level
\`\`\`typescript
type Split<
  S extends string, 
  D extends string
> = S extends \`\${infer T}\${D}\${infer U}\`
  ? [T, ...Split<U, D>]
  : [S];

type Join<
  T extends string[], 
  D extends string
> = T extends [infer F, ...infer R]
  ? R extends string[]
    ? F extends string
      ? \`\${F}\${D}\${Join<R, D>}\`
      : never
    : F
  : '';

type Path = 'users/123/profile';
type Parts = Split<Path, '/'>; // ['users', '123', 'profile']
type Reconstructed = Join<Parts, '-'>; // 'users-123-profile'
\`\`\`

## Compiler Performance

### Project References
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  },
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/utils" }
  ]
}
\`\`\`

### Incremental Builds
\`\`\`json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo"
  }
}
\`\`\`

### Skip Lib Check khi có thể
\`\`\`json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
\`\`\``,
        exercises: [
          {
            id: "5-1",
            title: "Advanced Type-Safe ORM",
            description:
              "Xây dựng type-safe ORM với advanced TypeScript features",
            instructions: `Tạo type-safe ORM với:
1. Decorators cho entity definitions
2. Type-safe query builder
3. Advanced conditional types cho relations
4. Performance optimizations`,
            type: "code",
            starterCode: `// Implement type-safe ORM
function Entity(tableName: string) {
  // Entity decorator
}

class QueryBuilder<T> {
  // Type-safe query builder
}`,
            solution: `// Advanced Type-Safe ORM

// Decorators
function Entity(tableName: string) {
  return function<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      static readonly tableName = tableName;
    };
  };
}

function Column(options: { type: string; primaryKey?: boolean; nullable?: boolean }) {
  return function(target: any, propertyName: string) {
    const metadata = Reflect.getMetadata('columns', target.constructor) || {};
    metadata[propertyName] = options;
    Reflect.defineMetadata('columns', metadata, target.constructor);
  };
}

function Relation(type: () => any, foreignKey?: string) {
  return function(target: any, propertyName: string) {
    const metadata = Reflect.getMetadata('relations', target.constructor) || {};
    metadata[propertyName] = { type, foreignKey };
    Reflect.defineMetadata('relations', metadata, target.constructor);
  };
}

// Base Entity
abstract class BaseEntity {
  id?: number;
  
  static getTableName(): string {
    return (this as any).tableName;
  }
  
  static getColumns(): Record<string, any> {
    return Reflect.getMetadata('columns', this) || {};
  }
  
  static getRelations(): Record<string, any> {
    return Reflect.getMetadata('relations', this) || {};
  }
}

// Entities
@Entity('users')
class User extends BaseEntity {
  @Column({ type: 'integer', primaryKey: true })
  id?: number;
  
  @Column({ type: 'varchar', nullable: false })
  name!: string;
  
  @Column({ type: 'varchar', nullable: false })
  email!: string;
  
  @Relation(() => Post)
  posts?: Post[];
}

@Entity('posts')
class Post extends BaseEntity {
  @Column({ type: 'integer', primaryKey: true })
  id?: number;
  
  @Column({ type: 'varchar', nullable: false })
  title!: string;
  
  @Column({ type: 'text', nullable: true })
  content?: string;
  
  @Column({ type: 'integer', nullable: false })
  userId!: number;
  
  @Relation(() => User)
  user?: User;
}

// Type-safe Query Builder
type EntityClass<T> = { new(): T } & typeof BaseEntity;
type EntityInstance<T> = T & BaseEntity;

type WhereCondition<T> = {
  [K in keyof T]?: T[K] | { $eq?: T[K]; $ne?: T[K]; $in?: T[K][]; $like?: string };
};

type SelectFields<T, K extends keyof T = keyof T> = {
  [P in K]?: boolean;
};

class QueryBuilder<T extends BaseEntity> {
  private whereConditions: WhereCondition<T>[] = [];
  private selectedFields?: (keyof T)[];
  private limitValue?: number;
  private offsetValue?: number;
  private orderByField?: keyof T;
  private orderDirection: 'ASC' | 'DESC' = 'ASC';
  private includes: string[] = [];

  constructor(private entityClass: EntityClass<T>) {}

  where(condition: WhereCondition<T>): this {
    this.whereConditions.push(condition);
    return this;
  }

  select<K extends keyof T>(fields: K[]): QueryBuilder<Pick<T, K>> {
    this.selectedFields = fields;
    return this as any;
  }

  limit(limit: number): this {
    this.limitValue = limit;
    return this;
  }

  offset(offset: number): this {
    this.offsetValue = offset;
    return this;
  }

  orderBy(field: keyof T, direction: 'ASC' | 'DESC' = 'ASC'): this {
    this.orderByField = field;
    this.orderDirection = direction;
    return this;
  }

  include(relation: string): this {
    this.includes.push(relation);
    return this;
  }

  async execute(): Promise<T[]> {
    // Trong thực tế, đây sẽ là database query
    console.log('Executing query:', {
      table: this.entityClass.getTableName(),
      where: this.whereConditions,
      select: this.selectedFields,
      limit: this.limitValue,
      offset: this.offsetValue,
      orderBy: this.orderByField ? 
        \`\${String(this.orderByField)} \${this.orderDirection}\` : undefined,
      includes: this.includes
    });
    
    // Simulate database result
    return [] as T[];
  }

  async first(): Promise<T | null> {
    this.limit(1);
    const results = await this.execute();
    return results[0] || null;
  }
}

// Repository Pattern
class Repository<T extends BaseEntity> {
  constructor(private entityClass: EntityClass<T>) {}

  find(): QueryBuilder<T> {
    return new QueryBuilder(this.entityClass);
  }

  findById(id: number): QueryBuilder<T> {
    return this.find().where({ id: { $eq: id } as any });
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    const instance = new this.entityClass();
    Object.assign(instance, data);
    
    // Trong thực tế, save to database
    console.log('Creating:', data);
    
    return instance as T;
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    const entity = await this.findById(id).first();
    if (!entity) return null;
    
    Object.assign(entity, data);
    
    // Trong thực tế, update database
    console.log('Updating:', id, data);
    
    return entity;
  }

  async delete(id: number): Promise<boolean> {
    const entity = await this.findById(id).first();
    if (!entity) return false;
    
    // Trong thực tế, delete from database
    console.log('Deleting:', id);
    
    return true;
  }
}

// Advanced Type Helpers
type EntityProperties<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type EntityFields<T> = Pick<T, EntityProperties<T>>;

type CreateEntityDto<T> = Omit<EntityFields<T>, 'id'>;
type UpdateEntityDto<T> = Partial<CreateEntityDto<T>>;

// Usage Examples
async function demo() {
  const userRepo = new Repository(User);
  const postRepo = new Repository(Post);

  // Type-safe queries
  const activeUsers = await userRepo.find()
    .where({ 
      name: { $like: 'John%' },
      email: { $ne: 'test@example.com' }
    } as any)
    .orderBy('name')
    .limit(10)
    .execute();

  // Create with type safety
  const newUser = await userRepo.create({
    name: 'John Doe',
    email: 'john@example.com'
  });

  // Update with type safety
  await userRepo.update(newUser.id!, {
    name: 'John Updated'
  });

  // Complex query với relations
  const userWithPosts = await userRepo.find()
    .include('posts')
    .where({ id: { $eq: 1 } } as any)
    .first();
}

// Advanced: Conditional Relation Types
type RelationType<T> = T extends () => infer R ? R : never;
type EntityRelations<T> = {
  [K in keyof T]: T[K] extends () => any ? RelationType<T[K]> : never;
}[keyof T];

type UserRelations = EntityRelations<User>; // Post

// Performance Optimizations
const entityCache = new Map<string, any>();

function getEntityMetadata<T extends BaseEntity>(entity: EntityClass<T>) {
  const key = entity.name;
  
  if (entityCache.has(key)) {
    return entityCache.get(key);
  }
  
  const metadata = {
    tableName: entity.getTableName(),
    columns: entity.getColumns(),
    relations: entity.getRelations()
  };
  
  entityCache.set(key, metadata);
  return metadata;
}

// Generic CRUD Service
class CrudService<T extends BaseEntity> {
  constructor(
    private repository: Repository<T>,
    private validators?: {
      create?: (data: CreateEntityDto<T>) => void;
      update?: (data: UpdateEntityDto<T>) => void;
    }
  ) {}

  async findAll(options?: {
    where?: WhereCondition<T>;
    limit?: number;
    offset?: number;
    orderBy?: keyof T;
  }): Promise<T[]> {
    let query = this.repository.find();
    
    if (options?.where) {
      query = query.where(options.where);
    }
    if (options?.limit) {
      query = query.limit(options.limit);
    }
    if (options?.offset) {
      query = query.offset(options.offset);
    }
    if (options?.orderBy) {
      query = query.orderBy(options.orderBy);
    }
    
    return query.execute();
  }

  async findById(id: number): Promise<T | null> {
    return this.repository.findById(id).first();
  }

  async create(data: CreateEntityDto<T>): Promise<T> {
    this.validators?.create?.(data);
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateEntityDto<T>): Promise<T | null> {
    this.validators?.update?.(data);
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}

// Usage với service
const userService = new CrudService(new Repository(User), {
  create: (data) => {
    if (!data.name) {
      throw new Error('Name is required');
    }
    if (!data.email) {
      throw new Error('Email is required');
    }
  }
});`,
          },
        ],
      },
    ],
  },
  {
    id: "docker-devops",
    slug: "docker-devops",
    title: "Docker & DevOps",
    description: "Containerization, CI/CD và DevOps practices",
    image: "/images/docker-course.jpg",
    duration: "12 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Docker Containerization",
        slug: "docker-containerization",
        duration: "65 phút",
        content: `# Docker Containerization

## Giới thiệu Docker
Docker là platform để phát triển, vận chuyển và chạy ứng dụng trong containers.

## Docker Basics

### Dockerfile
\`\`\`dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]
\`\`\`

### Build Docker Image
\`\`\`bash
# Build image
docker build -t my-app:1.0 .

# List images
docker images

# Run container
docker run -d -p 3000:3000 --name my-app-container my-app:1.0
\`\`\`

## Docker Commands

### Container Management
\`\`\`bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop my-app-container

# Remove container
docker rm my-app-container

# View logs
docker logs my-app-container
\`\`\`

### Image Management
\`\`\`bash
# Remove image
docker rmi my-app:1.0

# Pull image from registry
docker pull nginx:latest

# Tag image
docker tag my-app:1.0 my-registry.com/my-app:1.0

# Push to registry
docker push my-registry.com/my-app:1.0
\`\`\`

## Docker Compose

### docker-compose.yml
\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

### Docker Compose Commands
\`\`\`bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Scale services
docker-compose up -d --scale app=3
\`\`\`

## Multi-stage Builds
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

## Best Practices

### Security
\`\`\`dockerfile
# Use non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Use .dockerignore
# node_modules
# npm-debug.log
# .env
# .git
\`\`\`

### Optimization
\`\`\`dockerfile
# Use specific version tags
FROM node:18-alpine

# Leverage build cache
COPY package*.json ./
RUN npm ci

# Copy source code after dependencies
COPY . .

# Use multi-stage builds
# Minimize layer size
\`\`\`

## Bài tập thực hành
Hãy dockerize một ứng dụng Node.js đơn giản!`,
        exercises: [
          {
            id: "1-1",
            title: "Dockerize Node.js Application",
            description:
              "Tạo Dockerfile và docker-compose cho ứng dụng Node.js",
            instructions: `Dockerize một ứng dụng Node.js với:
1. Dockerfile sử dụng multi-stage build
2. docker-compose.yml với database (PostgreSQL) và cache (Redis)
3. Environment variables cho configuration
4. Volume cho data persistence`,
            type: "code",
            starterCode: `# Dockerfile
# Viết Dockerfile của bạn ở đây

# docker-compose.yml
# Viết docker-compose.yml của bạn ở đây`,
            solution: `# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source code
COPY src ./src

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S appuser -u 1001

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder --chown=appuser:nodejs /app/dist ./dist

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD node healthcheck.js

# Start application
CMD ["node", "dist/server.js"]

# docker-compose.yml
version: '3.8'

services:
  app:
    build: 
      context: .
      target: production
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
      - PORT=3000
    depends_on:
      - db
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:6-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:`,
          },
          {
            id: "1-2",
            title: "Multi-service Application với Docker Compose",
            description: "Tạo multi-service application với load balancer",
            instructions: `Tạo docker-compose cho ứng dụng multi-service:
1. 3 instances của web application
2. Nginx load balancer
3. PostgreSQL database
4. Redis cache
5. Monitoring với Prometheus và Grafana`,
            type: "code",
            starterCode: `# docker-compose.yml
# Viết docker-compose.yml cho multi-service application`,
            solution: `# docker-compose.yml
version: '3.8'

services:
  # Web application instances
  web:
    build: 
      context: ./app
      target: production
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    deploy:
      replicas: 3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Load balancer
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped

  # Database
  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped

  # Cache
  redis:
    image: redis:6-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    restart: unless-stopped

  # Monitoring - Prometheus
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=200h'
      - '--web.enable-lifecycle'
    restart: unless-stopped

  # Monitoring - Grafana
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin123
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./monitoring/grafana/datasources:/etc/grafana/provisioning/datasources
    depends_on:
      - prometheus
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
  prometheus_data:
  grafana_data:

# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream backend {
        least_conn;
        server web:3000 max_fails=3 fail_timeout=30s;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }

        location /health {
            access_log off;
            return 200 "healthy\\n";
            add_header Content-Type text/plain;
        }
    }
}

# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'web-app'
    static_configs:
      - targets: ['web:3000']
    metrics_path: '/metrics'
    scrape_interval: 10s

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093`,
          },
        ],
      },
      {
        id: "2",
        title: "Container Orchestration với Kubernetes",
        slug: "kubernetes-orchestration",
        duration: "80 phút",
        prerequisites: ["1"],
        content: `# Container Orchestration với Kubernetes

## Giới thiệu Kubernetes
Kubernetes là hệ thống container orchestration mã nguồn mở để tự động hóa deployment, scaling, và quản lý ứng dụng containerized.

## Kubernetes Concepts

### Pods
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  labels:
    app: my-app
    tier: frontend
spec:
  containers:
  - name: my-app
    image: my-app:1.0
    ports:
    - containerPort: 3000
    env:
    - name: NODE_ENV
      value: "production"
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
\`\`\`

### Deployments
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:1.0
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

### Services
\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
\`\`\`

## Kubernetes Commands

### Basic Commands
\`\`\`bash
# Get cluster information
kubectl cluster-info

# Get nodes
kubectl get nodes

# Get pods
kubectl get pods

# Get services
kubectl get services

# Get deployments
kubectl get deployments
\`\`\`

### Application Management
\`\`\`bash
# Apply configuration
kubectl apply -f deployment.yaml

# Scale deployment
kubectl scale deployment my-app-deployment --replicas=5

# View logs
kubectl logs -f deployment/my-app-deployment

# Port forwarding
kubectl port-forward service/my-app-service 8080:80
\`\`\`

## Advanced Kubernetes Features

### ConfigMaps và Secrets
\`\`\`yaml
# ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.url: "postgresql://localhost:5432/mydb"
  cache.host: "redis://localhost:6379"
  app.port: "3000"

# Secret
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database.password: cGFzc3dvcmQxMjM=  # base64 encoded
  api.key: YXBpLWtleS1zZWNyZXQ=
\`\`\`

### Persistent Volumes
\`\`\`yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
\`\`\`

## Kubernetes trong Production

### Resource Management
\`\`\`yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "250m"
  limits:
    memory: "256Mi"
    cpu: "500m"
\`\`\`

### Health Checks
\`\`\`yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
  successThreshold: 1
  failureThreshold: 3
\`\`\`

### Horizontal Pod Autoscaling
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
\`\`\``,
        exercises: [
          {
            id: "2-1",
            title: "Deploy Microservices trên Kubernetes",
            description:
              "Triển khai microservices architecture trên Kubernetes cluster",
            instructions: `Tạo Kubernetes manifests cho microservices application:
1. API service deployment và service
2. Frontend web application
3. Database với persistent storage
4. Redis cache
5. Ingress controller cho routing
6. ConfigMaps và Secrets cho configuration`,
            type: "code",
            starterCode: `# Viết Kubernetes manifests của bạn ở đây
# api-deployment.yaml, frontend-deployment.yaml, ingress.yaml, v.v.`,
            solution: `# api-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  labels:
    app: api-service
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-service
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: api-service
        version: v1
    spec:
      containers:
      - name: api-service
        image: my-registry/api-service:1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: redis.url
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        securityContext:
          runAsNonRoot: true
          runAsUser: 1000
          allowPrivilegeEscalation: false
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
  labels:
    app: api-service
spec:
  selector:
    app: api-service
  ports:
  - port: 80
    targetPort: 3000
    protocol: TCP
  type: ClusterIP

# frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-app
  labels:
    app: frontend-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend-app
  template:
    metadata:
      labels:
        app: frontend-app
    spec:
      containers:
      - name: frontend-app
        image: my-registry/frontend-app:1.0.0
        ports:
        - containerPort: 80
        env:
        - name: API_URL
          value: "http://api-service"
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-app
spec:
  selector:
    app: frontend-app
  ports:
  - port: 80
    targetPort: 80
  type: ClusterIP

# database-deployment.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres-db
spec:
  serviceName: "postgres"
  replicas: 1
  selector:
    matchLabels:
      app: postgres-db
  template:
    metadata:
      labels:
        app: postgres-db
    spec:
      containers:
      - name: postgres
        image: postgres:13-alpine
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_DB
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.name
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.user
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.password
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          exec:
            command:
            - sh
            - -c
            - exec pg_isready -U $POSTGRES_USER -d $POSTGRES_DB
          initialDelaySeconds: 60
          periodSeconds: 30
        readinessProbe:
          exec:
            command:
            - sh
            - -c
            - exec pg_isready -U $POSTGRES_USER -d $POSTGRES_DB
          initialDelaySeconds: 5
          periodSeconds: 10
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-db
spec:
  selector:
    app: postgres-db
  ports:
  - port: 5432
    targetPort: 5432
  type: ClusterIP

# redis-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-cache
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis-cache
  template:
    metadata:
      labels:
        app: redis-cache
    spec:
      containers:
      - name: redis
        image: redis:6-alpine
        command: ["redis-server", "--appendonly", "yes"]
        ports:
        - containerPort: 6379
        volumeMounts:
        - name: redis-data
          mountPath: /data
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 5
          periodSeconds: 5
      volumes:
      - name: redis-data
        persistentVolumeClaim:
          claimName: redis-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: redis-cache
spec:
  selector:
    app: redis-cache
  ports:
  - port: 6379
    targetPort: 6379
  type: ClusterIP

# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
spec:
  rules:
  - host: myapp.local
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-app
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80

# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  redis.url: "redis://redis-cache:6379"
  app.port: "3000"
  app.env: "production"
  log.level: "info"

# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database.url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc3dvcmRAcG9zdGdyZXMtZGI6NTQzMi9teWRi
  database.name: bXlkYg==
  database.user: dXNlcg==
  database.password: cGFzc3dvcmQxMjM=
  api.secret: eW91ci1zZWNyZXQtYXBpLWtleQ==

# redis-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: redis-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi

# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`,
          },
        ],
      },
      {
        id: "3",
        title: "CI/CD Pipelines với GitHub Actions",
        slug: "ci-cd-pipelines",
        duration: "70 phút",
        prerequisites: ["2"],
        content: `# CI/CD Pipelines với GitHub Actions

## Giới thiệu CI/CD
CI/CD (Continuous Integration/Continuous Deployment) là practice tự động hóa quá trình build, test và deploy ứng dụng.

## GitHub Actions Basics

### Workflow Structure
\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
\`\`\`

### Environment Variables và Secrets
\`\`\`yaml
env:
  NODE_ENV: production
  REGISTRY: ghcr.io

jobs:
  deploy:
    environment: production
    steps:
    - name: Deploy to production
      run: echo "Deploying..."
      env:
        DATABASE_URL: \${{ secrets.DATABASE_URL }}
        API_KEY: \${{ secrets.API_KEY }}
\`\`\`

## Advanced CI/CD Patterns

### Matrix Builds
\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
        os: [ubuntu-latest, windows-latest]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js \${{ matrix.node-version }} on \${{ matrix.os }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
\`\`\`

### Caching
\`\`\`yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

## Deployment Strategies

### Blue-Green Deployment
\`\`\`yaml
deploy-blue:
  runs-on: ubuntu-latest
  steps:
  - name: Deploy to blue environment
    run: |
      kubectl apply -f deployment-blue.yaml
      kubectl rollout status deployment/my-app-blue

  - name: Test blue deployment
    run: |
      # Run smoke tests
      curl -f http://blue.myapp.com/health

  - name: Switch traffic to blue
    run: |
      kubectl apply -f service-blue.yaml
\`\`\`

### Canary Deployment
\`\`\`yaml
deploy-canary:
  runs-on: ubuntu-latest
  steps:
  - name: Deploy canary
    run: |
      kubectl apply -f deployment-canary.yaml
      # Start with 10% traffic
      kubectl set traffic deployment/my-app --weight=90,10

  - name: Monitor canary
    run: |
      # Monitor metrics for 15 minutes
      sleep 900
      # Check error rate and performance

  - name: Rollout to 100%
    if: success()
    run: |
      kubectl set traffic deployment/my-app --weight=0,100
      kubectl delete deployment/my-app-canary
\`\`\`

## Security Scanning

### Code Security
\`\`\`yaml
security-scan:
  runs-on: ubuntu-latest
  steps:
  - uses: actions/checkout@v3
  
  - name: Run SAST
    uses: github/codeql-action/analyze@v2
    with:
      languages: javascript
  
  - name: Dependency vulnerability scan
    run: npm audit --audit-level moderate
  
  - name: Run Snyk security scan
    uses: snyk/actions/node@master
    env:
      SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
\`\`\`

### Container Security
\`\`\`yaml
container-scan:
  runs-on: ubuntu-latest
  steps:
  - name: Build container
    run: docker build -t my-app:\${{ github.sha }} .
  
  - name: Scan container
    uses: aquasecurity/trivy-action@master
    with:
      image-ref: 'my-app:\${{ github.sha }}'
      format: 'sarif'
      output: 'trivy-results.sarif'
  
  - name: Upload scan results
    uses: github/codeql-action/upload-sarif@v2
    with:
      sarif_file: 'trivy-results.sarif'
\`\`\`

## Monitoring và Notifications

### Slack Notifications
\`\`\`yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: \${{ job.status }}
    channel: '#deployments'
    text: 'Deployment \${{ job.status }} for \${{ github.ref }}'
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
  if: always()
\`\`\`

### Status Checks
\`\`\`yaml
health-check:
  runs-on: ubuntu-latest
  needs: deploy
  steps:
  - name: Wait for deployment
    run: sleep 30
  
  - name: Health check
    run: |
      response=$(curl -s -o /dev/null -w "%{http_code}" https://myapp.com/health)
      if [ $response -ne 200 ]; then
        echo "Health check failed"
        exit 1
      fi
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "End-to-End CI/CD Pipeline",
            description: "Tạo complete CI/CD pipeline từ code đến production",
            instructions: `Tạo GitHub Actions workflow cho:
1. Automated testing trên multiple environments
2. Security scanning và code quality checks
3. Container build và push to registry
4. Deployment to staging và production
5. Automated rollback mechanisms
6. Notifications và monitoring`,
            type: "code",
            starterCode: `# .github/workflows/ci-cd.yml
# Viết complete CI/CD pipeline của bạn ở đây`,
            solution: `# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  release:
    types: [published]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # Test và Build
  test:
    name: Test và Build
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'

    - name: Cache node modules
      uses: actions/cache@v4
      with:
        path: ~/.npm
        key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          \${{ runner.os }}-node-

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run unit tests
      run: npm run test:unit

    - name: Run integration tests
      run: npm run test:integration

    - name: Build application
      run: npm run build

    - name: Upload build artifacts
      uses: actions/upload-artifact@v4
      with:
        name: build-\${{ matrix.node-version }}
        path: dist/
        retention-days: 7

  # Security Scanning
  security:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run CodeQL Analysis
      uses: github/codeql-action/analyze@v3
      with:
        languages: javascript

    - name: Run Snyk to check for vulnerabilities
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        args: --severity-threshold=high

    - name: Run npm audit
      run: npm audit --audit-level high

    - name: Run hadolint for Dockerfile
      uses: hadolint/hadolint-action@v3.1.0
      with:
        dockerfile: Dockerfile

  # Build và Push Container
  build-container:
    name: Build và Push Container
    runs-on: ubuntu-latest
    needs: [test, security]
    if: github.event_name == 'push' && (github.ref == 'refs/heads/main' || github.ref == 'refs/heads/develop')
    
    outputs:
      image-tag: \${{ steps.meta.outputs.tags }}

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Log in to Container Registry
      uses: docker/login-action@v3
      with:
        registry: \${{ env.REGISTRY }}
        username: \${{ github.actor }}
        password: \${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=semver,pattern={{version}}
          type=semver,pattern={{major}}.{{minor}}
          type=sha,prefix={{branch}}-

    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: \${{ steps.meta.outputs.tags }}
        labels: \${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    - name: Scan container image
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v3
      with:
        sarif_file: 'trivy-results.sarif'

  # Deploy to Staging
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build-container
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy to Kubernetes
      uses: azure/k8s-deploy@v4
      with:
        namespace: staging
        manifests: |
          k8s/staging/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: blue-green

    - name: Run smoke tests
      run: |
        curl -f https://staging.myapp.com/health
        npm run test:smoke

    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        channel: '#deployments'
        text: 'Staging deployment \${{ job.status }} for \${{ github.sha }}'
      env:
        SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
      if: always()

  # Deploy to Production
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: 
      - build-container
      - deploy-staging
    if: github.ref == 'refs/heads/main' || github.event_name == 'release'
    environment: production
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy with canary strategy
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: canary
        traffic-split-method: smi
        percentage: 10
        baseline-and-canary-replicas: 2

    - name: Wait for canary stabilization
      run: sleep 600

    - name: Run canary tests
      run: |
        curl -f https://canary.myapp.com/health
        npm run test:e2e -- --baseUrl=https://canary.myapp.com

    - name: Promote canary to 100%
      if: success()
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: canary
        action: promote

    - name: Rollback on failure
      if: failure()
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.ref_name }}
        strategy: canary
        action: reject

    - name: Health check
      run: |
        for i in {1..10}; do
          if curl -f https://myapp.com/health; then
            echo "Health check passed"
            break
          fi
          sleep 30
        done

    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        channel: '#deployments'
        text: 'Production deployment \${{ job.status }} for \${{ github.sha }}'
      env:
        SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
      if: always()

  # Performance Testing
  performance:
    name: Performance Tests
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/develop'
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run performance tests
      run: |
        npm run test:performance -- --url=https://staging.myapp.com

    - name: Upload performance results
      uses: actions/upload-artifact@v4
      with:
        name: performance-results
        path: performance-results/
        retention-days: 30

  # Database Migrations
  migrations:
    name: Database Migrations
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run database migrations
      run: |
        kubectl set env deployment/api-service -n staging RUN_MIGRATIONS=true
        sleep 30
        kubectl set env deployment/api-service -n staging RUN_MIGRATIONS-

    - name: Verify migrations
      run: |
        kubectl exec -n staging deployment/api-service -- npm run db:status

  # Cleanup
  cleanup:
    name: Cleanup
    runs-on: ubuntu-latest
    if: always()
    
    steps:
    - name: Clean up old containers
      run: |
        # Remove containers older than 30 days
        docker system prune -f --filter "until=720h"
        
    - name: Clean up workflow runs
      uses: Mattraks/delete-workflow-runs@v2
      with:
        token: \${{ github.token }}
        repository: \${{ github.repository }}
        retain_days: 30
        keep_minimum_runs: 10`,
          },
        ],
      },
    ],
  },
  {
    id: "aws-cloud",
    slug: "aws-cloud",
    title: "AWS Cloud Practitioner",
    description: "Dịch vụ AWS cơ bản và kiến trúc cloud",
    image: "/images/aws-course.jpg",
    duration: "9 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "AWS Core Services",
        slug: "aws-core-services",
        duration: "70 phút",
        content: `# AWS Core Services

## Giới thiệu AWS
Amazon Web Services (AWS) là nền tảng cloud computing hàng đầu.

## Compute Services

### EC2 (Elastic Compute Cloud)
\`\`\`bash
# Launch EC2 instance via AWS CLI
aws ec2 run-instances \\
    --image-id ami-0c02fb55956c7d316 \\
    --count 1 \\
    --instance-type t2.micro \\
    --key-name my-key-pair \\
    --security-group-ids sg-903004f8 \\
    --subnet-id subnet-6e7f829e
\`\`\`

### Lambda (Serverless)
\`\`\`javascript
// Lambda function handler
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      input: event,
    }),
  };
  
  return response;
};
\`\`\`

## Storage Services

### S3 (Simple Storage Service)
\`\`\`python
import boto3

# Create S3 client
s3 = boto3.client('s3')

# Upload file
s3.upload_file('local-file.txt', 'my-bucket', 'remote-file.txt')

# Download file
s3.download_file('my-bucket', 'remote-file.txt', 'local-file.txt')

# List objects
response = s3.list_objects_v2(Bucket='my-bucket')
for obj in response.get('Contents', []):
    print(f"Key: {obj['Key']}, Size: {obj['Size']}")
\`\`\`

### EBS (Elastic Block Store)
- Persistent block storage for EC2
- Multiple volume types (gp3, io1, st1)
- Snapshots for backup

## Database Services

### RDS (Relational Database Service)
\`\`\`bash
# Create RDS instance
aws rds create-db-instance \\
    --db-instance-identifier my-db \\
    --db-instance-class db.t3.micro \\
    --engine mysql \\
    --master-username admin \\
    --master-user-password password123 \\
    --allocated-storage 20
\`\`\`

### DynamoDB (NoSQL)
\`\`\`javascript
// DynamoDB document client
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

// Put item
await docClient.send(new PutCommand({
  TableName: "Users",
  Item: {
    UserId: "123",
    Name: "John Doe",
    Email: "john@example.com",
    CreatedAt: new Date().toISOString()
  }
}));
\`\`\`

## Networking & Content Delivery

### VPC (Virtual Private Cloud)
\`\`\`yaml
# CloudFormation VPC template
Resources:
  MyVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: MyVPC
\`\`\`

### CloudFront (CDN)
- Global content delivery network
- Low latency
- DDoS protection

## IAM (Identity and Access Management)
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
\`\`\`

## Bài tập thực hành
Hãy tạo architecture diagram cho ứng dụng web trên AWS!`,
        exercises: [
          {
            id: "1-1",
            title: "Web Application Architecture",
            description: "Thiết kế kiến trúc ứng dụng web trên AWS",
            instructions: `Thiết kế kiến trúc cho ứng dụng web với:
- Frontend: S3 + CloudFront
- Backend: EC2 hoặc Lambda
- Database: RDS PostgreSQL
- Caching: ElastiCache Redis
- File storage: S3
Vẽ architecture diagram và giải thích data flow
Tạo bản thiết kế kiến trúc ứng dụng web trên AWS bao gồm:
1. Vẽ architecture diagram
2. Mô tả luồng dữ liệu
3. Giải thích lý do chọn từng service
4. Ước tính chi phí cơ bản`,
            type: "theory",
            solution: `# Web Application Architecture trên AWS

## Architecture Diagram
User -> CloudFront -> S3 (Static Website)
-> API Gateway -> Lambda Functions -> RDS PostgreSQL
-> ElastiCache Redis
-> S3 (File Storage)

## Data Flow
1. **Static Content**: User requests -> CloudFront -> S3 bucket (HTML, CSS, JS)
2. **API Requests**: User -> CloudFront -> API Gateway -> Lambda Functions
3. **Database**: Lambda -> RDS PostgreSQL (user data, application data)
4. **Caching**: Lambda -> ElastiCache Redis (session cache, query cache)
5. **File Storage**: Lambda -> S3 (user uploads, images, documents)

## Service Justification
- **CloudFront**: CDN cho low latency, global distribution
- **S3**: Highly available, durable storage for static files
- **API Gateway**: Managed API service với throttling và caching
- **Lambda**: Serverless compute, auto-scaling, pay-per-use
- **RDS**: Managed relational database với automated backups
- **ElastiCache**: In-memory caching cho performance improvement

## Cost Estimation (us-east-1)
- CloudFront: $0.085/GB (first 10TB)
- S3: $0.023/GB (first 50TB)
- Lambda: $0.20 per 1M requests
- API Gateway: $3.50 per 1M requests
- RDS: $0.016/hr (db.t3.micro)
- ElastiCache: $0.020/hr (cache.t3.micro)

Total estimated monthly cost: ~$50-100 cho small application`,
          },
          {
            id: "1-2",
            title: "Tạo S3 Bucket và Upload Files",
            description:
              "Thực hành tạo S3 bucket và upload files sử dụng AWS CLI",
            instructions: `Sử dụng AWS CLI để:
1. Tạo S3 bucket với tên duy nhất
2. Upload file text lên bucket
3. Cấu hình public read access cho file
4. Tạo presigned URL cho file
5. Xóa bucket và resources

Viết script hoặc commands để hoàn thành các bước trên.`,
            type: "practice",
            solution: `#!/bin/bash

# 1. Tạo S3 bucket
BUCKET_NAME="my-unique-bucket-$(date +%s)"
aws s3 mb s3://$BUCKET_NAME

# 2. Tạo và upload file
echo "Hello AWS S3" > demo-file.txt
aws s3 cp demo-file.txt s3://$BUCKET_NAME/

# 3. Cấu hình public read access
aws s3api put-object-acl \\
    --bucket $BUCKET_NAME \\
    --key demo-file.txt \\
    --acl public-read

# 4. Tạo presigned URL (valid 1 hour)
aws s3 presign s3://$BUCKET_NAME/demo-file.txt --expires-in 3600

# 5. Cleanup (comment để giữ resources)
# aws s3 rb s3://$BUCKET_NAME --force
# rm demo-file.txt`,
          },
        ],
      },
      {
        id: "2",
        title: "AWS Security & IAM",
        slug: "aws-security-iam",
        duration: "60 phút",
        content: `# AWS Security & IAM

## IAM Fundamentals
Identity and Access Management (IAM) là dịch vụ quản lý truy cập AWS.

### IAM Components
- **Users**: Người dùng cuối
- **Groups**: Tập hợp users với common policies
- **Roles**: Temporary credentials cho AWS services
- **Policies**: JSON documents định nghĩa permissions

### Best Practices
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::example-bucket",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.0.2.0/24"
        }
      }
    }
  ]
}
\`\`\`

## Security Groups & NACLs
### Security Groups (Stateful)
\`\`\`bash
# Create security group
aws ec2 create-security-group \\
    --group-name MyWebSG \\
    --description "Security group for web servers"
\`\`\`

### NACLs (Stateless)
Network Access Control Lists cho subnet-level filtering.

## AWS Organizations
Quản lý multiple AWS accounts.

## KMS & Encryption
Key Management Service cho encryption keys management.`,
        exercises: [
          {
            id: "2-1",
            title: "Tạo IAM Policy và Role",
            description: "Thực hành tạo IAM policy và role cho EC2",
            instructions: `Tạo IAM policy và role cho phép EC2 instance:
1. Read-only access to S3
2. Read access to DynamoDB
3. Không được phép xóa resources
4. Áp dụng role cho EC2 instance

Viết CloudFormation template hoặc AWS CLI commands.`,
            type: "practice",
            solution: `Resources:
  EC2Role:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: ec2.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
      Policies:
        - PolicyName: DynamoDBReadOnly
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - dynamodb:GetItem
                  - dynamodb:BatchGetItem
                  - dynamodb:Query
                  - dynamodb:Scan
                Resource: "*"
  
  EC2InstanceProfile:
    Type: AWS::IAM::InstanceProfile
    Properties:
      Roles:
        - !Ref EC2Role`,
          },
        ],
      },
      {
        id: "3",
        title: "AWS Networking & VPC",
        slug: "aws-networking-vpc",
        duration: "80 phút",
        content: `# AWS Networking & VPC

## VPC Fundamentals
Virtual Private Cloud - isolated network environment.

### VPC Components
- **Subnets**: Network segments trong VPC
- **Route Tables**: Định hướng network traffic
- **Internet Gateway**: Kết nối ra internet
- **NAT Gateway**: Outbound internet cho private subnets

### VPC Setup
\`\`\`yaml
Resources:
  MyVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
  
  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref MyVPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: us-east-1a
\`\`\`

## Load Balancing
### Application Load Balancer
\`\`\`bash
# Create ALB
aws elbv2 create-load-balancer \\
    --name my-alb \\
    --subnets subnet-123456 subnet-789012 \\
    --security-groups sg-903004f8
\`\`\`

### Network Load Balancer
Cho high-performance, low-latency applications.

## Route 53
DNS service với health checks và routing policies.`,
        exercises: [
          {
            id: "3-1",
            title: "Thiết kế Multi-Tier VPC",
            description: "Thiết kế VPC cho ứng dụng 3-tier",
            instructions: `Thiết kế VPC architecture cho ứng dụng 3-tier:
- Public subnets cho load balancers
- Private subnets cho application servers  
- Isolated subnets cho databases
- NAT Gateway cho outbound internet
- Security groups và NACLs

Vẽ diagram và viết CloudFormation template.`,
            type: "theory",
            solution: `# Multi-Tier VPC Architecture

## Diagram
Internet -> Internet Gateway -> Public Subnets (ALB)
-> Private Subnets (EC2 App Servers) -> Isolated Subnets (RDS)
NAT Gateway trong Public Subnets

## CloudFormation Template
\`\`\`yaml
Parameters:
  VpcCidr:
    Type: String
    Default: 10.0.0.0/16

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: !Ref VpcCidr
      EnableDnsHostnames: true

  InternetGateway:
    Type: AWS::EC2::InternetGateway

  VPCGatewayAttachment:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  PublicSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']

  # ... additional subnets and routing tables
\`\`\``,
          },
        ],
      },
      {
        id: "4",
        title: "AWS Monitoring & Cost Optimization",
        slug: "aws-monitoring-cost",
        duration: "50 phút",
        content: `# AWS Monitoring & Cost Optimization

## CloudWatch
### Metrics & Alarms
\`\`\`bash
# Create CloudWatch alarm
aws cloudwatch put-metric-alarm \\
    --alarm-name "HighCPU" \\
    --alarm-description "Alarm when CPU exceeds 80 percent" \\
    --metric-name CPUUtilization \\
    --namespace AWS/EC2 \\
    --statistic Average \\
    --period 300 \\
    --threshold 80 \\
    --comparison-operator GreaterThanThreshold \\
    --evaluation-periods 2
\`\`\`

### Logs & Dashboards
Centralized logging và custom dashboards.

## AWS Cost Explorer
Phân tích và dự báo chi phí.

## Trusted Advisor
Best practices recommendations.

## Budgets & Alerts
\`\`\`bash
# Create budget
aws budgets create-budget \\
    --account-id 123456789012 \\
    --budget file://budget.json \\
    --notifications-with-subscribers file://notifications.json
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "Tạo Cost Monitoring Dashboard",
            description: "Xây dựng CloudWatch dashboard để monitor costs",
            instructions: `Tạo CloudWatch dashboard để monitor:
1. EC2 instance costs
2. S3 storage costs  
3. Data transfer costs
4. Set up billing alerts
5. Cost optimization recommendations

Viết CloudFormation template hoặc AWS CLI commands.`,
            type: "practice",
            solution: `Resources:
  BillingAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: "MonthlyBillingAlert"
      AlarmDescription: "Alarm when monthly billing exceeds $100"
      Namespace: "AWS/Billing"
      MetricName: "EstimatedCharges"
      Dimensions:
        - Name: Currency
          Value: USD
      Statistic: Maximum
      Period: 21600
      EvaluationPeriods: 1
      Threshold: 100
      ComparisonOperator: GreaterThanThreshold
      AlarmActions:
        - !Ref BillingNotification

  BillingNotification:
    Type: AWS::SNS::Topic
    Properties:
      DisplayName: "Billing Alerts"

  # CloudWatch Dashboard for cost monitoring
  CostDashboard:
    Type: AWS::CloudWatch::Dashboard
    Properties:
      DashboardName: "CostMonitoring"
      DashboardBody: |
        {
          "widgets": [
            {
              "type": "metric",
              "x": 0,
              "y": 0,
              "width": 12,
              "height": 6,
              "properties": {
                "metrics": [
                  [ "AWS/Billing", "EstimatedCharges", "Currency", "USD" ]
                ],
                "period": 21600,
                "stat": "Maximum",
                "region": "us-east-1",
                "title": "Estimated Charges"
              }
            }
          ]
        }`,
          },
        ],
      },
    ],
  },
  {
    id: "mobile-flutter",
    slug: "flutter",
    title: "Flutter Mobile Development",
    description: "Xây dựng ứng dụng mobile đa nền tảng với Flutter",
    image: "/images/flutter-course.jpg",
    duration: "10 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Flutter Fundamentals",
        slug: "flutter-fundamentals",
        duration: "60 phút",
        content: `# Flutter Fundamentals

## Giới thiệu Flutter
Flutter là framework của Google để xây dựng ứng dụng native cho mobile, web, desktop từ single codebase.

## Setup Flutter Environment
\`\`\`bash
# Install Flutter SDK
# Download from https://flutter.dev/docs/get-started/install

# Check installation
flutter doctor

# Create new project
flutter create my_app
cd my_app

# Run app
flutter run
\`\`\`

## Widgets Cơ bản

### Stateless Widget
\`\`\`dart
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text('My First Flutter App'),
        ),
        body: Center(
          child: Text('Hello, Flutter!'),
        ),
      ),
    );
  }
}
\`\`\`

### Stateful Widget
\`\`\`dart
class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
\`\`\`

## Layout Widgets

### Column và Row
\`\`\`dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('First item'),
    Text('Second item'),
    Text('Third item'),
  ],
)

Row(
  children: [
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
    Text('3.5 stars'),
  ],
)
\`\`\`

### Container và Padding
\`\`\`dart
Container(
  padding: EdgeInsets.all(16.0),
  margin: EdgeInsets.symmetric(vertical: 8.0),
  decoration: BoxDecoration(
    color: Colors.blue[50],
    borderRadius: BorderRadius.circular(8.0),
    border: Border.all(color: Colors.blue),
  ),
  child: Text(
    'Styled Container',
    style: TextStyle(fontSize: 18.0),
  ),
)
\`\`\`

## Navigation
\`\`\`dart
// Navigate to new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Navigate back
Navigator.pop(context);

// Navigate with arguments
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailScreen(item: item),
  ),
);
\`\`\`

## Bài tập thực hành
Hãy tạo ứng dụng Flutter đầu tiên với counter và navigation!`,
        exercises: [
          {
            id: "1-1",
            title: "Todo App với Flutter",
            description: "Tạo ứng dụng quản lý công việc đơn giản",
            instructions: `Tạo ứng dụng Todo với Flutter có:
- Màn hình danh sách công việc
- Thêm công việc mới
- Đánh dấu hoàn thành
- Xóa công việc
Sử dụng ListView, TextField, và Checkbox`,
            type: "code",
            starterCode: `// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      home: TodoListScreen(),
    );
  }
}

class TodoListScreen extends StatefulWidget {
  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  // Viết code của bạn ở đây
}`,
            solution: `// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: TodoListScreen(),
    );
  }
}

class Todo {
  String id;
  String title;
  bool isCompleted;

  Todo({
    required this.id,
    required this.title,
    this.isCompleted = false,
  });
}

class TodoListScreen extends StatefulWidget {
  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  final List<Todo> _todos = [];
  final _textController = TextEditingController();

  void _addTodo(String title) {
    if (title.trim().isEmpty) return;
    
    setState(() {
      _todos.add(
        Todo(
          id: DateTime.now().millisecondsSinceEpoch.toString(),
          title: title,
        ),
      );
    });
    _textController.clear();
  }

  void _toggleTodo(String id) {
    setState(() {
      final todo = _todos.firstWhere((todo) => todo.id == id);
      todo.isCompleted = !todo.isCompleted;
    });
  }

  void _deleteTodo(String id) {
    setState(() {
      _todos.removeWhere((todo) => todo.id == id);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Todo App'),
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _textController,
                    decoration: InputDecoration(
                      hintText: 'Thêm công việc mới',
                      border: OutlineInputBorder(),
                    ),
                    onSubmitted: _addTodo,
                  ),
                ),
                SizedBox(width: 8.0),
                IconButton(
                  icon: Icon(Icons.add),
                  onPressed: () => _addTodo(_textController.text),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _todos.length,
              itemBuilder: (context, index) {
                final todo = _todos[index];
                return ListTile(
                  leading: Checkbox(
                    value: todo.isCompleted,
                    onChanged: (_) => _toggleTodo(todo.id),
                  ),
                  title: Text(
                    todo.title,
                    style: TextStyle(
                      decoration: todo.isCompleted 
                          ? TextDecoration.lineThrough 
                          : TextDecoration.none,
                    ),
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.delete, color: Colors.red),
                    onPressed: () => _deleteTodo(todo.id),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`,
          },
          {
            id: "1-2",
            title: "Profile Screen UI",
            description: "Xây dựng giao diện màn hình profile người dùng",
            instructions: `Tạo màn hình profile với:
- Avatar hình tròn
- Thông tin user (name, email, bio)
- List các setting items
- Logout button
Sử dụng CircleAvatar, ListTile, và Card widgets`,
            type: "code",
            starterCode: `import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profile')),
      body: // Your code here
    );
  }
}`,
            solution: `import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Profile Header
            Card(
              elevation: 4.0,
              child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Column(
                  children: [
                    CircleAvatar(
                      radius: 50.0,
                      backgroundImage: NetworkImage(
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Text(
                      'John Doe',
                      style: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      'john.doe@example.com',
                      style: TextStyle(
                        fontSize: 16.0,
                        color: Colors.grey[600],
                      ),
                    ),
                    SizedBox(height: 12.0),
                    Text(
                      'Flutter Developer | Mobile Enthusiast',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Colors.grey[700],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            
            SizedBox(height: 20.0),
            
            // Settings Section
            Card(
              elevation: 2.0,
              child: Column(
                children: [
                  ListTile(
                    leading: Icon(Icons.person, color: Colors.blue),
                    title: Text('Edit Profile'),
                    trailing: Icon(Icons.arrow_forward_ios, size: 16.0),
                    onTap: () {},
                  ),
                  Divider(height: 1.0),
                  ListTile(
                    leading: Icon(Icons.notifications, color: Colors.orange),
                    title: Text('Notifications'),
                    trailing: Icon(Icons.arrow_forward_ios, size: 16.0),
                    onTap: () {},
                  ),
                  Divider(height: 1.0),
                  ListTile(
                    leading: Icon(Icons.security, color: Colors.green),
                    title: Text('Privacy & Security'),
                    trailing: Icon(Icons.arrow_forward_ios, size: 16.0),
                    onTap: () {},
                  ),
                  Divider(height: 1.0),
                  ListTile(
                    leading: Icon(Icons.help, color: Colors.purple),
                    title: Text('Help & Support'),
                    trailing: Icon(Icons.arrow_forward_ios, size: 16.0),
                    onTap: () {},
                  ),
                ],
              ),
            ),
            
            SizedBox(height: 20.0),
            
            // Logout Button
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  // Logout logic
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                  foregroundColor: Colors.white,
                  padding: EdgeInsets.symmetric(vertical: 16.0),
                ),
                child: Text('Logout'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
          },
        ],
      },
      {
        id: "2",
        title: "State Management với Provider",
        slug: "state-management-provider",
        duration: "75 phút",
        content: `# State Management với Provider

## Giới thiệu State Management
Quản lý state là một trong những khía cạnh quan trọng nhất trong Flutter development.

## Provider Pattern
Provider là package state management được recommend chính thức bởi Flutter team.

### Setup Provider
\`\`\`yaml
# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.0
\`\`\`

### Tạo Model với ChangeNotifier
\`\`\`dart
import 'package:flutter/foundation.dart';

class CounterModel with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }

  void decrement() {
    _count--;
    notifyListeners();
  }

  void reset() {
    _count = 0;
    notifyListeners();
  }
}
\`\`\`

### Sử dụng Provider trong Widget
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Provider Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('You have pushed the button this many times:'),
            Consumer<CounterModel>(
              builder: (context, counter, child) {
                return Text(
                  '\${counter.count}',
                  style: Theme.of(context).textTheme.headline4,
                );
              },
            ),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () => context.read<CounterModel>().increment(),
            child: Icon(Icons.add),
          ),
          SizedBox(height: 8.0),
          FloatingActionButton(
            onPressed: () => context.read<CounterModel>().decrement(),
            child: Icon(Icons.remove),
          ),
        ],
      ),
    );
  }
}
\`\`\`

### MultiProvider Setup
\`\`\`dart
void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => CounterModel()),
        ChangeNotifierProvider(create: (context) => ThemeModel()),
        ChangeNotifierProvider(create: (context) => UserModel()),
      ],
      child: MyApp(),
    ),
  );
}
\`\`\`

## Selector để Optimize Performance
\`\`\`dart
Selector<CounterModel, int>(
  selector: (context, counter) => counter.count,
  builder: (context, count, child) {
    return Text('Count: $count');
  },
)
\`\`\`

## Best Practices
- Sử dụng Consumer ở mức widget thấp nhất có thể
- Dùng Selector khi chỉ cần một phần của state
- Tách business logic ra khỏi UI`,
        exercises: [
          {
            id: "2-1",
            title: "Shopping Cart với Provider",
            description: "Tạo ứng dụng giỏ hàng sử dụng Provider",
            instructions: `Tạo ứng dụng shopping cart với:
- Product list
- Add to cart functionality
- Cart screen hiển thị tổng tiền
- Tăng/giảm số lượng sản phẩm
Sử dụng Provider để quản lý cart state`,
            type: "code",
            starterCode: `// main.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Shopping Cart',
      home: ProductListScreen(),
    );
  }
}

// Your code here`,
            solution: `// main.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Product {
  final String id;
  final String name;
  final double price;
  final String imageUrl;

  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
  });
}

class CartItem {
  final Product product;
  int quantity;

  CartItem({
    required this.product,
    this.quantity = 1,
  });

  double get totalPrice => product.price * quantity;
}

class CartModel with ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  double get totalAmount {
    return _items.fold(0.0, (sum, item) => sum + item.totalPrice);
  }

  int get totalItems {
    return _items.fold(0, (sum, item) => sum + item.quantity);
  }

  void addItem(Product product) {
    final index = _items.indexWhere((item) => item.product.id == product.id);
    
    if (index >= 0) {
      _items[index].quantity++;
    } else {
      _items.add(CartItem(product: product));
    }
    notifyListeners();
  }

  void removeItem(String productId) {
    _items.removeWhere((item) => item.product.id == productId);
    notifyListeners();
  }

  void clear() {
    _items.clear();
    notifyListeners();
  }

  void updateQuantity(String productId, int quantity) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    final index = _items.indexWhere((item) => item.product.id == productId);
    if (index >= 0) {
      _items[index].quantity = quantity;
      notifyListeners();
    }
  }
}

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Shopping Cart',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: ProductListScreen(),
    );
  }
}

class ProductListScreen extends StatelessWidget {
  final List<Product> products = [
    Product(
      id: '1',
      name: 'iPhone 14',
      price: 999.99,
      imageUrl: 'https://picsum.photos/100/100?random=1',
    ),
    Product(
      id: '2', 
      name: 'Samsung Galaxy',
      price: 799.99,
      imageUrl: 'https://picsum.photos/100/100?random=2',
    ),
    Product(
      id: '3',
      name: 'Google Pixel',
      price: 699.99,
      imageUrl: 'https://picsum.photos/100/100?random=3',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Products'),
        actions: [
          Stack(
            children: [
              IconButton(
                icon: Icon(Icons.shopping_cart),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => CartScreen()),
                  );
                },
              ),
              Positioned(
                right: 8,
                top: 8,
                child: Consumer<CartModel>(
                  builder: (context, cart, child) {
                    return CircleAvatar(
                      radius: 8,
                      backgroundColor: Colors.red,
                      child: Text(
                        '\${cart.totalItems}',
                        style: TextStyle(
                          fontSize: 10,
                          color: Colors.white,
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          final product = products[index];
          return Card(
            margin: EdgeInsets.all(8.0),
            child: ListTile(
              leading: Image.network(product.imageUrl),
              title: Text(product.name),
              subtitle: Text('\${product.price}'),
              trailing: IconButton(
                icon: Icon(Icons.add_shopping_cart),
                onPressed: () {
                  context.read<CartModel>().addItem(product);
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Added \${product.name} to cart'),
                      duration: Duration(seconds: 1),
                    ),
                  );
                },
              ),
            ),
          );
        },
      ),
    );
  }
}

class CartScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Shopping Cart')),
      body: Consumer<CartModel>(
        builder: (context, cart, child) {
          if (cart.items.isEmpty) {
            return Center(child: Text('Your cart is empty'));
          }

          return Column(
            children: [
              Expanded(
                child: ListView.builder(
                  itemCount: cart.items.length,
                  itemBuilder: (context, index) {
                    final item = cart.items[index];
                    return Card(
                      margin: EdgeInsets.all(8.0),
                      child: ListTile(
                        leading: Image.network(item.product.imageUrl),
                        title: Text(item.product.name),
                        subtitle: Text('\${item.product.price} x \${
              item.quantity
            }'),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              icon: Icon(Icons.remove),
                              onPressed: () {
                                cart.updateQuantity(
                                  item.product.id, 
                                  item.quantity - 1
                                );
                              },
                            ),
                            Text('\${item.quantity}'),
                            IconButton(
                              icon: Icon(Icons.add),
                              onPressed: () {
                                cart.updateQuantity(
                                  item.product.id, 
                                  item.quantity + 1
                                );
                              },
                            ),
                            IconButton(
                              icon: Icon(Icons.delete, color: Colors.red),
                              onPressed: () => cart.removeItem(item.product.id),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
              Container(
                padding: EdgeInsets.all(16.0),
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(16.0),
                    topRight: Radius.circular(16.0),
                  ),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Total: \${cart.totalAmount.toStringAsFixed(2)}',
                      style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        // Checkout logic
                        cart.clear();
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(content: Text('Order placed successfully!')),
                        );
                        Navigator.pop(context);
                      },
                      child: Text('Checkout'),
                    ),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}`,
          },
        ],
      },
      {
        id: "3",
        title: "API Integration & HTTP Requests",
        slug: "api-integration-http",
        duration: "70 phút",
        content: `# API Integration & HTTP Requests

## Giới thiệu HTTP trong Flutter
Kết nối với REST APIs để fetch và send data.

## http package
\`\`\`yaml
dependencies:
  http: ^0.13.0
\`\`\`

### GET Request
\`\`\`dart
import 'package:http/http.dart' as http;

Future<List<Post>> fetchPosts() async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
  );

  if (response.statusCode == 200) {
    List<dynamic> data = json.decode(response.body);
    return data.map((json) => Post.fromJson(json)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}
\`\`\`

### POST Request
\`\`\`dart
Future<Post> createPost(String title, String body) async {
  final response = await http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Content-Type': 'application/json'},
    body: json.encode({
      'title': title,
      'body': body,
      'userId': 1,
    }),
  );

  if (response.statusCode == 201) {
    return Post.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to create post');
  }
}
\`\`\`

## Error Handling
\`\`\`dart
try {
  final posts = await fetchPosts();
  setState(() {
    _posts = posts;
    _isLoading = false;
  });
} catch (error) {
  setState(() {
    _error = error.toString();
    _isLoading = false;
  });
}
\`\`\`

## Loading States
\`\`\`dart
if (_isLoading) {
  return Center(child: CircularProgressIndicator());
}

if (_error != null) {
  return Center(child: Text('Error: $_error'));
}

return ListView.builder(
  itemCount: _posts.length,
  itemBuilder: (context, index) {
    return PostItem(post: _posts[index]);
  },
);
\`\`\`

## Dio Package (Alternative)
\`\`\`yaml
dependencies:
  dio: ^4.0.0
\`\`\`

\`\`\`dart
import 'package:dio/dio.dart';

final dio = Dio();

Future<void> fetchData() async {
  try {
    final response = await dio.get('https://api.example.com/data');
    print(response.data);
  } on DioError catch (e) {
    print('Error: \${e.message}');
  }
}
\`\`\``,
        exercises: [
          {
            id: "3-1",
            title: "Weather App với API",
            description: "Tạo ứng dụng thời tiết kết nối với OpenWeather API",
            instructions: `Tạo ứng dụng weather với:
- Search city functionality
- Hiển thị current weather
- Hiển thị 5-day forecast
- Error handling và loading states
Sử dụng OpenWeatherMap API`,
            type: "code",
            starterCode: `import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class WeatherScreen extends StatefulWidget {
  @override
  _WeatherScreenState createState() => _WeatherScreenState();
}

class _WeatherScreenState extends State<WeatherScreen> {
  // Your code here
}`,
            solution: `import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class WeatherData {
  final String cityName;
  final double temperature;
  final String description;
  final String icon;
  final double humidity;
  final double windSpeed;

  WeatherData({
    required this.cityName,
    required this.temperature,
    required this.description,
    required this.icon,
    required this.humidity,
    required this.windSpeed,
  });

  factory WeatherData.fromJson(Map<String, dynamic> json) {
    return WeatherData(
      cityName: json['name'],
      temperature: json['main']['temp'].toDouble(),
      description: json['weather'][0]['description'],
      icon: json['weather'][0]['icon'],
      humidity: json['main']['humidity'].toDouble(),
      windSpeed: json['wind']['speed'].toDouble(),
    );
  }
}

class WeatherScreen extends StatefulWidget {
  @override
  _WeatherScreenState createState() => _WeatherScreenState();
}

class _WeatherScreenState extends State<WeatherScreen> {
  final TextEditingController _cityController = TextEditingController();
  WeatherData? _weatherData;
  bool _isLoading = false;
  String _error = '';

  static const String apiKey = 'YOUR_API_KEY'; // Replace with actual API key
  static const String baseUrl = 'https://api.openweathermap.org/data/2.5';

  Future<void> _fetchWeather(String city) async {
    setState(() {
      _isLoading = true;
      _error = '';
    });

    try {
      final response = await http.get(
        Uri.parse('$baseUrl/weather?q=$city&appid=$apiKey&units=metric'),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        setState(() {
          _weatherData = WeatherData.fromJson(data);
          _isLoading = false;
        });
      } else {
        setState(() {
          _error = 'City not found';
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = 'Failed to fetch weather data';
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Weather App'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Search Section
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _cityController,
                    decoration: InputDecoration(
                      hintText: 'Enter city name',
                      border: OutlineInputBorder(),
                      suffixIcon: Icon(Icons.search),
                    ),
                    onSubmitted: (value) {
                      if (value.trim().isNotEmpty) {
                        _fetchWeather(value.trim());
                      }
                    },
                  ),
                ),
                SizedBox(width: 8.0),
                ElevatedButton(
                  onPressed: () {
                    if (_cityController.text.trim().isNotEmpty) {
                      _fetchWeather(_cityController.text.trim());
                    }
                  },
                  child: Text('Search'),
                ),
              ],
            ),
            SizedBox(height: 20.0),

            // Loading State
            if (_isLoading)
              Expanded(
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      CircularProgressIndicator(),
                      SizedBox(height: 16.0),
                      Text('Loading weather data...'),
                    ],
                  ),
                ),
              ),

            // Error State
            if (_error.isNotEmpty && !_isLoading)
              Expanded(
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.error_outline, size: 64, color: Colors.red),
                      SizedBox(height: 16.0),
                      Text(
                        _error,
                        style: TextStyle(fontSize: 18.0, color: Colors.red),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              ),

            // Weather Data
            if (_weatherData != null && !_isLoading && _error.isEmpty)
              Expanded(
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      Card(
                        elevation: 4.0,
                        child: Padding(
                          padding: EdgeInsets.all(20.0),
                          child: Column(
                            children: [
                              Text(
                                _weatherData!.cityName,
                                style: TextStyle(
                                  fontSize: 24.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(height: 16.0),
                              Image.network(
                                'https://openweathermap.org/img/wn/\${
                                  _weatherData!.icon
                                }@2x.png',
                                width: 100,
                                height: 100,
                              ),
                              SizedBox(height: 8.0),
                              Text(
                                '\${_weatherData!.temperature.toStringAsFixed(
                                  1
                                )}°C',
                                style: TextStyle(
                                  fontSize: 48.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(height: 8.0),
                              Text(
                                _weatherData!.description.toUpperCase(),
                                style: TextStyle(
                                  fontSize: 18.0,
                                  color: Colors.grey[600],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      SizedBox(height: 20.0),
                      // Additional Weather Info
                      Row(
                        children: [
                          Expanded(
                            child: Card(
                              child: Padding(
                                padding: EdgeInsets.all(16.0),
                                child: Column(
                                  children: [
                                    Icon(Icons.water_drop, color: Colors.blue),
                                    SizedBox(height: 8.0),
                                    Text('Humidity'),
                                    Text(
                                      '\${_weatherData!.humidity}%',
                                      style: TextStyle(
                                        fontSize: 18.0,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              child: Padding(
                                padding: EdgeInsets.all(16.0),
                                child: Column(
                                  children: [
                                    Icon(Icons.air, color: Colors.green),
                                    SizedBox(height: 8.0),
                                    Text('Wind Speed'),
                                    Text(
                                      '\${_weatherData!.windSpeed} m/s',
                                      style: TextStyle(
                                        fontSize: 18.0,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),

            // Initial State
            if (_weatherData == null && !_isLoading && _error.isEmpty)
              Expanded(
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.cloud, size: 64, color: Colors.blue),
                      SizedBox(height: 16.0),
                      Text(
                        'Search for a city to see weather information',
                        style: TextStyle(fontSize: 18.0),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}`,
          },
        ],
      },
      {
        id: "4",
        title: "Flutter Animations & Advanced UI",
        slug: "flutter-animations-ui",
        duration: "65 phút",
        content: `# Flutter Animations & Advanced UI

## Giới thiệu Animations
Tạo trải nghiệm người dùng mượt mà với animations.

## Implicit Animations
\`\`\`dart
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  width: _isExpanded ? 200 : 100,
  height: _isExpanded ? 200 : 100,
  color: _isExpanded ? Colors.blue : Colors.red,
  curve: Curves.easeInOut,
),

AnimatedOpacity(
  duration: Duration(milliseconds: 500),
  opacity: _isVisible ? 1.0 : 0.0,
  child: Text('Fading Text'),
),
\`\`\`

## Explicit Animations
\`\`\`dart
class RotationAnimation extends StatefulWidget {
  @override
  _RotationAnimationState createState() => _RotationAnimationState();
}

class _RotationAnimationState extends State<RotationAnimation> 
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    _animation = Tween<double>(
      begin: 0,
      end: 2 * 3.14159, // 360 degrees in radians
    ).animate(_controller);
    
    _controller.repeat();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Transform.rotate(
          angle: _animation.value,
          child: Icon(Icons.refresh, size: 50),
        );
      },
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
\`\`\`

## Hero Animations
\`\`\`dart
// First screen
Hero(
  tag: 'image-hero',
  child: Image.network('https://example.com/image.jpg'),
)

// Second screen  
Hero(
  tag: 'image-hero',
  child: Image.network('https://example.com/image.jpg'),
)
\`\`\`

## Custom Paint
\`\`\`dart
class CustomCirclePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.blue
      ..style = PaintingStyle.fill;

    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2),
      size.width / 2,
      paint,
    );
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}
\`\`\`

## Page Transitions
\`\`\`dart
Navigator.push(
  context,
  PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => NextScreen(),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return SlideTransition(
        position: Tween<Offset>(
          begin: Offset(1.0, 0.0),
          end: Offset.zero,
        ).animate(animation),
        child: child,
      );
    },
  ),
);
\`\`\``,
        exercises: [
          {
            id: "4-1",
            title: "Animated Login Screen",
            description: "Tạo màn hình login với animations đẹp mắt",
            instructions: `Tạo animated login screen với:
- Animated background
- Floating animation cho form elements
- Loading animation khi login
- Success/error animations
Sử dụng implicit và explicit animations`,
            type: "code",
            starterCode: `import 'package:flutter/material.dart';

class AnimatedLoginScreen extends StatefulWidget {
  @override
  _AnimatedLoginScreenState createState() => _AnimatedLoginScreenState();
}

class _AnimatedLoginScreenState extends State<AnimatedLoginScreen> {
  // Your code here
}`,
            solution: `import 'package:flutter/material.dart';

class AnimatedLoginScreen extends StatefulWidget {
  @override
  _AnimatedLoginScreenState createState() => _AnimatedLoginScreenState();
}

class _AnimatedLoginScreenState extends State<AnimatedLoginScreen> 
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<double> _slideAnimation;
  late Animation<Color?> _colorAnimation;

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLoading = false;
  bool _showSuccess = false;

  @override
  void initState() {
    super.initState();
    
    _controller = AnimationController(
      duration: Duration(milliseconds: 1500),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Interval(0.3, 0.6, curve: Curves.easeIn),
    ));

    _slideAnimation = Tween<double>(
      begin: 50.0,
      end: 0.0,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Interval(0.4, 0.8, curve: Curves.easeOut),
    ));

    _colorAnimation = ColorTween(
      begin: Colors.blue[400],
      end: Colors.blue[800],
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));

    _controller.forward();
  }

  void _simulateLogin() async {
    setState(() {
      _isLoading = true;
    });

    // Simulate API call
    await Future.delayed(Duration(seconds: 2));

    setState(() {
      _isLoading = false;
      _showSuccess = true;
    });

    // Reset after success
    await Future.delayed(Duration(seconds: 1));
    setState(() {
      _showSuccess = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          return Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  _colorAnimation.value!,
                  Colors.purple[400]!,
                ],
              ),
            ),
            child: Center(
              child: SingleChildScrollView(
                padding: EdgeInsets.all(24.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Logo with fade and scale animation
                    FadeTransition(
                      opacity: _fadeAnimation,
                      child: ScaleTransition(
                        scale: CurvedAnimation(
                          parent: _controller,
                          curve: Interval(0.0, 0.5, curve: Curves.elasticOut),
                        ),
                        child: Container(
                          width: 120,
                          height: 120,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black26,
                                blurRadius: 10,
                                offset: Offset(0, 5),
                              ),
                            ],
                          ),
                          child: Icon(
                            Icons.lock,
                            size: 60,
                            color: Colors.blue,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(height: 40.0),

                    // Login Form with slide animation
                    SlideTransition(
                      position: Tween<Offset>(
                        begin: Offset(0, 0.3),
                        end: Offset.zero,
                      ).animate(CurvedAnimation(
                        parent: _controller,
                        curve: Interval(0.5, 0.8, curve: Curves.easeOut),
                      )),
                      child: FadeTransition(
                        opacity: _fadeAnimation,
                        child: Card(
                          elevation: 8.0,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(16.0),
                          ),
                          child: Padding(
                            padding: EdgeInsets.all(24.0),
                            child: Column(
                              children: [
                                Text(
                                  'Welcome Back',
                                  style: TextStyle(
                                    fontSize: 24.0,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.blue,
                                  ),
                                ),
                                SizedBox(height: 24.0),
                                TextField(
                                  controller: _emailController,
                                  decoration: InputDecoration(
                                    labelText: 'Email',
                                    prefixIcon: Icon(Icons.email),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                  ),
                                ),
                                SizedBox(height: 16.0),
                                TextField(
                                  controller: _passwordController,
                                  obscureText: true,
                                  decoration: InputDecoration(
                                    labelText: 'Password',
                                    prefixIcon: Icon(Icons.lock),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(8.0),
                                    ),
                                  ),
                                ),
                                SizedBox(height: 24.0),

                                // Login Button
                                AnimatedContainer(
                                  duration: Duration(milliseconds: 300),
                                  width: _isLoading ? 60 : double.infinity,
                                  height: 50,
                                  child: _isLoading
                                      ? Center(
                                          child: CircularProgressIndicator(
                                            valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                                          ),
                                        )
                                      : _showSuccess
                                          ? Icon(Icons.check, color: Colors.white, size: 30)
                                          : ElevatedButton(
                                              onPressed: _simulateLogin,
                                              style: ElevatedButton.styleFrom(
                                                backgroundColor: Colors.blue,
                                                foregroundColor: Colors.white,
                                                shape: RoundedRectangleBorder(
                                                  borderRadius: BorderRadius.circular(8.0),
                                                ),
                                                elevation: 4.0,
                                              ),
                                              child: Text(
                                                'Login',
                                                style: TextStyle(fontSize: 16.0),
                                              ),
                                            ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),

                    // Additional options with fade animation
                    FadeTransition(
                      opacity: _fadeAnimation,
                      child: Padding(
                        padding: EdgeInsets.only(top: 20.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            TextButton(
                              onPressed: () {},
                              child: Text('Forgot Password?'),
                            ),
                            TextButton(
                              onPressed: () {},
                              child: Text('Create Account'),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}`,
          },
        ],
      },
    ],
  },
  {
    id: "golang-complete",
    slug: "golang",
    title: "Golang Toàn tập",
    description:
      "Học Golang từ cơ bản đến nâng cao, xây dựng REST API và microservices",
    image: "/images/golang-course.jpg",
    duration: "10 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu Golang và Cài đặt",
        slug: "gioi-thieu-golang",
        duration: "45 phút",
        content: `# Giới thiệu Golang

## Go là gì?
Go (Golang) là ngôn ngữ lập trình được phát triển bởi Google, nổi bật với hiệu suất cao, cú pháp đơn giản và hỗ trợ concurrency mạnh mẽ.

## Ưu điểm của Go
- **Biên dịch nhanh** và hiệu suất gần với C/C++
- **Cú pháp đơn giản**, dễ học
- **Concurrency với Goroutines và Channels**
- **Garbage Collection** tự động
- **Static typing** mạnh mẽ
- **Cross-compilation** dễ dàng
- **Standard library** phong phú

## Cài đặt Go

### Tải và cài đặt
\`\`\`bash
# macOS với Homebrew
brew install go

# Ubuntu/Debian
sudo apt update
sudo apt install golang-go

# Windows: tải installer từ https://go.dev/dl/
\`\`\`

### Kiểm tra cài đặt
\`\`\`bash
go version
go env
\`\`\`

## Chương trình đầu tiên

### Tạo project mới
\`\`\`bash
mkdir hello-go
cd hello-go
go mod init example.com/hello
\`\`\`

### File main.go
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
\`\`\`

### Chạy chương trình
\`\`\`bash
go run main.go
go build -o hello main.go
./hello
\`\`\`

## Cấu trúc package

\`\`\`
myproject/
├── go.mod
├── go.sum
├── main.go
├── internal/
│   ├── handlers/
│   ├── models/
│   └── services/
└── pkg/
    └── utils/
\`\`\`

## Bài tập thực hành
Trong bài tiếp theo, chúng ta sẽ học về biến, kiểu dữ liệu và control flow!`,
        exercises: [
          {
            id: "1-1",
            title: "Kiểm tra kiến thức cơ bản",
            description: "Bài tập trắc nghiệm về Go",
            instructions: "Chọn câu trả lời đúng:",
            type: "multiple-choice",
            options: [
              "Go là ngôn ngữ thông dịch",
              "Go hỗ trợ concurrency qua Goroutines",
              "Go chỉ chạy trên Linux",
              "Go không có garbage collection",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "2",
        title: "Biến, Kiểu dữ liệu và Control Flow",
        slug: "bien-kieu-du-lieu-control-flow",
        duration: "60 phút",
        prerequisites: ["1"],
        content: `# Biến, Kiểu dữ liệu và Control Flow trong Go

## Khai báo biến

### Các cách khai báo
\`\`\`go
package main

import "fmt"

func main() {
    // Cách 1: var với type
    var name string = "John"
    var age int = 30

    // Cách 2: var với type inference
    var city = "Hanoi"

    // Cách 3: short declaration (chỉ trong function)
    country := "Vietnam"

    // Khai báo nhiều biến
    var x, y int = 1, 2
    a, b := 3, 4

    // Zero values
    var zeroInt int      // 0
    var zeroString string // ""
    var zeroBool bool     // false

    fmt.Println(name, age, city, country, x, y, a, b)
    fmt.Println(zeroInt, zeroString, zeroBool)
}
\`\`\`

### Constants
\`\`\`go
const Pi = 3.14159

const (
    StatusOK       = 200
    StatusNotFound = 404
)

// iota cho enum
type Weekday int

const (
    Sunday Weekday = iota
    Monday
    Tuesday
    Wednesday
)
\`\`\`

## Kiểu dữ liệu cơ bản

### Numeric types
\`\`\`go
var i int = 42
var i8 int8 = 127
var i16 int16 = 32767
var i32 int32 = 2147483647
var i64 int64 = 9223372036854775807

var u uint = 42
var f32 float32 = 3.14
var f64 float64 = 3.14159265359
\`\`\`

### String
\`\`\`go
s := "Hello"
// Raw string literal
raw := \`Multi
line
string\`

// String operations
len(s)                  // 5
s + ", World!"          // concatenation
s[0]                    // byte 'H'
[]rune(s)              // convert to runes
\`\`\`

### Arrays và Slices
\`\`\`go
// Array có fixed size
var arr [5]int
arr[0] = 1

// Array literal
nums := [3]int{1, 2, 3}

// Slice - dynamic size
slice := []int{1, 2, 3}
slice = append(slice, 4, 5)

// Make slice
s := make([]int, 5)      // length 5
s2 := make([]int, 0, 10) // length 0, capacity 10
\`\`\`

### Maps
\`\`\`go
// Khai báo map
var m map[string]int
m = make(map[string]int)

// Map literal
scores := map[string]int{
    "Alice": 95,
    "Bob":   87,
}

// Thêm, đọc, xóa
scores["Charlie"] = 92
score := scores["Alice"]
delete(scores, "Bob")

// Check existence
value, ok := scores["David"]
if !ok {
    fmt.Println("Not found")
}
\`\`\`

### Structs
\`\`\`go
type User struct {
    ID    int
    Name  string
    Email string
}

func main() {
    u := User{
        ID:    1,
        Name:  "John",
        Email: "john@example.com",
    }
    
    fmt.Println(u.Name)
    
    // Pointer to struct
    p := &u
    p.Name = "Jane"
}
\`\`\`

## Control Flow

### if/else
\`\`\`go
if age := 20; age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}
\`\`\`

### for loop
\`\`\`go
// C-style for
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// While-style
i := 0
for i < 5 {
    i++
}

// Infinite loop
for {
    // break để thoát
}

// Range loop
nums := []int{1, 2, 3}
for index, value := range nums {
    fmt.Printf("Index: %d, Value: %d\\n", index, value)
}

// Range với map
scores := map[string]int{"Alice": 95}
for name, score := range scores {
    fmt.Printf("%s: %d\\n", name, score)
}
\`\`\`

### switch
\`\`\`go
switch day := "Monday"; day {
case "Monday", "Tuesday":
    fmt.Println("Early week")
case "Friday":
    fmt.Println("TGIF!")
default:
    fmt.Println("Regular day")
}

// Switch không có condition
score := 85
switch {
case score >= 90:
    fmt.Println("A")
case score >= 80:
    fmt.Println("B")
default:
    fmt.Println("C")
}
\`\`\`

## Bài tập thực hành
Hãy viết chương trình xử lý dữ liệu với slices và maps!`,
        exercises: [
          {
            id: "2-1",
            title: "Xử lý slice số nguyên",
            description: "Viết các hàm xử lý slice",
            instructions: `Viết các hàm:
1. Sum(numbers []int) int - tính tổng
2. Max(numbers []int) int - tìm max
3. Filter(numbers []int, pred func(int) bool) []int - lọc
4. Reverse(numbers []int) []int - đảo ngược`,
            type: "code",
            starterCode: `package main

func Sum(numbers []int) int {
    // Viết code ở đây
    return 0
}

func Max(numbers []int) int {
    return 0
}

func Filter(numbers []int, pred func(int) bool) []int {
    return nil
}

func Reverse(numbers []int) []int {
    return nil
}`,
            solution: `package main

func Sum(numbers []int) int {
    total := 0
    for _, n := range numbers {
        total += n
    }
    return total
}

func Max(numbers []int) int {
    if len(numbers) == 0 {
        return 0
    }
    max := numbers[0]
    for _, n := range numbers[1:] {
        if n > max {
            max = n
        }
    }
    return max
}

func Filter(numbers []int, pred func(int) bool) []int {
    result := []int{}
    for _, n := range numbers {
        if pred(n) {
            result = append(result, n)
        }
    }
    return result
}

func Reverse(numbers []int) []int {
    result := make([]int, len(numbers))
    for i, n := range numbers {
        result[len(numbers)-1-i] = n
    }
    return result
}`,
          },
        ],
      },
      {
        id: "3",
        title: "Functions, Methods và Interfaces",
        slug: "functions-methods-interfaces",
        duration: "75 phút",
        prerequisites: ["2"],
        content: `# Functions, Methods và Interfaces trong Go

## Functions

### Function cơ bản
\`\`\`go
func add(a, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}
\`\`\`

### Variadic functions
\`\`\`go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

sum(1, 2, 3)
nums := []int{1, 2, 3}
sum(nums...)
\`\`\`

### Closures
\`\`\`go
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

c := counter()
c() // 1
c() // 2
\`\`\`

### Function types
\`\`\`go
type MathFunc func(a, b int) int

func compute(fn MathFunc, a, b int) int {
    return fn(a, b)
}

result := compute(func(a, b int) int { return a + b }, 3, 4)
\`\`\`

## Methods

### Method với value receiver
\`\`\`go
type Rectangle struct {
    Width  float64
    Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}
\`\`\`

### Method với pointer receiver
\`\`\`go
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}
\`\`\`

### Method trên custom types
\`\`\`go
type Celsius float64

func (c Celsius) ToFahrenheit() Fahrenheit {
    return Fahrenheit(c*9/5 + 32)
}

type Fahrenheit float64
\`\`\`

## Interfaces

### Interface cơ bản
\`\`\`go
type Shape interface {
    Area() float64
    Perimeter() float64
}

func PrintShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\\n", s.Area(), s.Perimeter())
}
\`\`\`

### Empty interface
\`\`\`go
func describe(i interface{}) {
    fmt.Printf("(%v, %T)\\n", i, i)
}

describe(42)
describe("hello")
describe(true)
\`\`\`

### Type assertions
\`\`\`go
var i interface{} = "hello"

s, ok := i.(string)
if ok {
    fmt.Println("String:", s)
}

// Type switch
switch v := i.(type) {
case string:
    fmt.Println("String:", v)
case int:
    fmt.Println("Int:", v)
default:
    fmt.Println("Unknown type")
}
\`\`\`

### Common interfaces
\`\`\`go
// Stringer
type Stringer interface {
    String() string
}

func (u User) String() string {
    return fmt.Sprintf("%s <%s>", u.Name, u.Email)
}

// Error
type error interface {
    Error() string
}
\`\`\`

## Error Handling

### Custom errors
\`\`\`go
type ValidationError struct {
    Field string
    Msg   string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Msg)
}

func Validate(user User) error {
    if user.Email == "" {
        return &ValidationError{
            Field: "email",
            Msg:   "email is required",
        }
    }
    return nil
}
\`\`\`

### Error wrapping (Go 1.13+)
\`\`\`go
import "errors"

func process() error {
    err := doSomething()
    if err != nil {
        return fmt.Errorf("process failed: %w", err)
    }
    return nil
}

// Check
if errors.Is(err, ErrNotFound) {
    // handle not found
}

var validationErr *ValidationError
if errors.As(err, &validationErr) {
    fmt.Println(validationErr.Field)
}
\`\`\`

## Bài tập thực hành
Hãy tạo một interface cho hình học và implement các hình khác nhau!`,
        exercises: [
          {
            id: "3-1",
            title: "Shape interface",
            description: "Tạo interface Shape và implement các hình",
            instructions: `Tạo:
1. Interface Shape với Area() và Perimeter()
2. Struct Circle implement Shape
3. Struct Rectangle implement Shape
4. Function in thông tin của Shape`,
            type: "code",
            starterCode: `package main

import "fmt"

type Shape interface {
    Area() float64
    Perimeter() float64
}

// Viết code ở đây`,
            solution: `package main

import (
    "fmt"
    "math"
)

type Shape interface {
    Area() float64
    Perimeter() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

func PrintShape(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\\n", s.Area(), s.Perimeter())
}

func main() {
    c := Circle{Radius: 5}
    r := Rectangle{Width: 4, Height: 6}

    PrintShape(c)
    PrintShape(r)

    shapes := []Shape{c, r}
    for _, s := range shapes {
        PrintShape(s)
    }
}`,
          },
        ],
      },
      {
        id: "4",
        title: "Concurrency: Goroutines và Channels",
        slug: "concurrency-goroutines-channels",
        duration: "90 phút",
        prerequisites: ["3"],
        content: `# Concurrency trong Go

## Goroutines

### Tạo goroutine
\`\`\`go
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("world")
    say("hello")
}
\`\`\`

### WaitGroup
\`\`\`go
import (
    "sync"
    "fmt"
)

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Printf("Worker %d done\\n", id)
        }(i)
    }

    wg.Wait()
    fmt.Println("All workers done")
}
\`\`\`

## Channels

### Basic channels
\`\`\`go
// Unbuffered channel
ch := make(chan int)

// Gửi và nhận
go func() {
    ch <- 42  // send
}()
value := <-ch  // receive
\`\`\`

### Buffered channels
\`\`\`go
ch := make(chan int, 3)

ch <- 1
ch <- 2
ch <- 3

fmt.Println(<-ch) // 1
fmt.Println(<-ch) // 2
\`\`\`

### Close và range
\`\`\`go
ch := make(chan int, 5)

go func() {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch)
}()

for v := range ch {
    fmt.Println(v)
}

// Check closed
v, ok := <-ch
if !ok {
    fmt.Println("Channel closed")
}
\`\`\`

### Select
\`\`\`go
func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "from ch1"
    }()

    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "from ch2"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        case <-time.After(3 * time.Second):
            fmt.Println("timeout")
        }
    }
}
\`\`\`

## Sync package

### Mutex
\`\`\`go
import "sync"

type Counter struct {
    mu    sync.Mutex
    count int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count
}
\`\`\`

### RWMutex
\`\`\`go
type Cache struct {
    mu    sync.RWMutex
    items map[string]string
}

func (c *Cache) Get(key string) string {
    c.mu.RLock()
    defer c.mu.RUnlock()
    return c.items[key]
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.items[key] = value
}
\`\`\`

### Once
\`\`\`go
var (
    instance *Singleton
    once     sync.Once
)

func GetInstance() *Singleton {
    once.Do(func() {
        instance = &Singleton{}
    })
    return instance
}
\`\`\`

## Worker Pool Pattern
\`\`\`go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    // Send 5 jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for r := 1; r <= 5; r++ {
        <-results
    }
}
\`\`\`

## Context package
\`\`\`go
import (
    "context"
    "time"
)

func longRunning(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("Cancelled:", ctx.Err())
            return
        default:
            // do work
            time.Sleep(100 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    go longRunning(ctx)

    time.Sleep(3 * time.Second)
}
\`\`\`

## Bài tập thực hành
Hãy tạo một worker pool xử lý jobs concurrently!`,
        exercises: [
          {
            id: "4-1",
            title: "Parallel File Processing",
            description: "Xử lý nhiều files đồng thời",
            instructions: `Tạo chương trình:
1. Nhận danh sách files
2. Xử lý song song với goroutines (giới hạn 5 concurrent)
3. Sử dụng channels để collect results
4. Sử dụng WaitGroup để đợi`,
            type: "code",
            starterCode: `package main

func processFiles(files []string) []Result {
    // Viết code ở đây
    return nil
}

type Result struct {
    File string
    Size int
    Err  error
}`,
            solution: `package main

import (
    "fmt"
    "os"
    "sync"
)

type Result struct {
    File string
    Size int
    Err  error
}

func processFiles(files []string) []Result {
    const workers = 5
    jobs := make(chan string, len(files))
    results := make(chan Result, len(files))

    var wg sync.WaitGroup

    // Start workers
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for file := range jobs {
                info, err := os.Stat(file)
                if err != nil {
                    results <- Result{File: file, Err: err}
                    continue
                }
                results <- Result{File: file, Size: int(info.Size())}
            }
        }()
    }

    // Send jobs
    for _, f := range files {
        jobs <- f
    }
    close(jobs)

    // Wait and close results
    go func() {
        wg.Wait()
        close(results)
    }()

    // Collect
    var out []Result
    for r := range results {
        out = append(out, r)
    }
    return out
}

func main() {
    files := []string{"main.go", "go.mod", "README.md"}
    for _, r := range processFiles(files) {
        fmt.Printf("%s: %d bytes (err: %v)\\n", r.File, r.Size, r.Err)
    }
}`,
          },
        ],
      },
      {
        id: "5",
        title: "REST API với Gin Framework",
        slug: "rest-api-gin",
        duration: "85 phút",
        prerequisites: ["4"],
        content: `# REST API với Gin Framework

## Giới thiệu Gin
Gin là web framework hiệu suất cao cho Go.

## Cài đặt
\`\`\`bash
go get -u github.com/gin-gonic/gin
\`\`\`

## Ứng dụng cơ bản
\`\`\`go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()

    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })

    r.Run(":8080")
}
\`\`\`

## Routing

### HTTP Methods
\`\`\`go
r.GET("/users", getUsers)
r.POST("/users", createUser)
r.PUT("/users/:id", updateUser)
r.DELETE("/users/:id", deleteUser)
r.PATCH("/users/:id", patchUser)
\`\`\`

### Route groups
\`\`\`go
v1 := r.Group("/api/v1")
{
    v1.GET("/users", getUsers)
    v1.POST("/users", createUser)
}

auth := v1.Group("/admin")
auth.Use(AuthMiddleware())
{
    auth.GET("/stats", getStats)
}
\`\`\`

## Request Handling

### Path parameters
\`\`\`go
r.GET("/users/:id", func(c *gin.Context) {
    id := c.Param("id")
    c.JSON(200, gin.H{"id": id})
})
\`\`\`

### Query parameters
\`\`\`go
r.GET("/search", func(c *gin.Context) {
    q := c.Query("q")
    page := c.DefaultQuery("page", "1")
    c.JSON(200, gin.H{"q": q, "page": page})
})
\`\`\`

### JSON binding
\`\`\`go
type CreateUserRequest struct {
    Name  string \`json:"name" binding:"required"\`
    Email string \`json:"email" binding:"required,email"\`
    Age   int    \`json:"age" binding:"gte=0,lte=150"\`
}

r.POST("/users", func(c *gin.Context) {
    var req CreateUserRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(400, gin.H{"error": err.Error()})
        return
    }
    c.JSON(201, req)
})
\`\`\`

## Middleware

### Custom middleware
\`\`\`go
func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("Authorization")
        if token == "" {
            c.AbortWithStatusJSON(401, gin.H{"error": "unauthorized"})
            return
        }
        c.Set("userID", 123)
        c.Next()
    }
}
\`\`\`

### CORS
\`\`\`go
import "github.com/gin-contrib/cors"

r.Use(cors.Default())
\`\`\`

## Project Structure

\`\`\`
myapi/
├── main.go
├── go.mod
├── internal/
│   ├── handlers/
│   │   └── user.go
│   ├── models/
│   │   └── user.go
│   ├── services/
│   │   └── user.go
│   ├── repositories/
│   │   └── user.go
│   └── middleware/
│       └── auth.go
└── pkg/
    └── database/
        └── db.go
\`\`\`

## Full Example

### Model
\`\`\`go
package models

import "time"

type User struct {
    ID        uint      \`json:"id" gorm:"primaryKey"\`
    Name      string    \`json:"name" binding:"required"\`
    Email     string    \`json:"email" binding:"required,email" gorm:"unique"\`
    CreatedAt time.Time \`json:"created_at"\`
    UpdatedAt time.Time \`json:"updated_at"\`
}
\`\`\`

### Handler
\`\`\`go
package handlers

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "myapi/internal/models"
)

type UserHandler struct {
    // dependencies
}

func (h *UserHandler) GetUsers(c *gin.Context) {
    users := []models.User{}
    c.JSON(http.StatusOK, users)
}

func (h *UserHandler) CreateUser(c *gin.Context) {
    var user models.User
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    c.JSON(http.StatusCreated, user)
}
\`\`\`

### Main
\`\`\`go
package main

import (
    "github.com/gin-gonic/gin"
    "myapi/internal/handlers"
)

func main() {
    r := gin.Default()

    userHandler := &handlers.UserHandler{}

    api := r.Group("/api/v1")
    {
        users := api.Group("/users")
        {
            users.GET("", userHandler.GetUsers)
            users.POST("", userHandler.CreateUser)
            users.GET("/:id", userHandler.GetUser)
            users.PUT("/:id", userHandler.UpdateUser)
            users.DELETE("/:id", userHandler.DeleteUser)
        }
    }

    r.Run(":8080")
}
\`\`\`

## Bài tập thực hành
Hãy tạo REST API hoàn chỉnh cho quản lý sản phẩm!`,
        exercises: [
          {
            id: "5-1",
            title: "Product REST API",
            description: "Tạo REST API với Gin",
            instructions: `Tạo REST API cho products với:
- GET /products - list all
- GET /products/:id - get one
- POST /products - create
- PUT /products/:id - update
- DELETE /products/:id - delete
Sử dụng in-memory store và validation`,
            type: "code",
            starterCode: `package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    // Viết routes ở đây
    r.Run(":8080")
}`,
            solution: `package main

import (
    "net/http"
    "strconv"
    "github.com/gin-gonic/gin"
)

type Product struct {
    ID    int     \`json:"id"\`
    Name  string  \`json:"name" binding:"required"\`
    Price float64 \`json:"price" binding:"required,gt=0"\`
}

var products = []Product{
    {ID: 1, Name: "Laptop", Price: 1000},
    {ID: 2, Name: "Mouse", Price: 20},
}

func main() {
    r := gin.Default()

    api := r.Group("/api/v1")
    {
        productsGroup := api.Group("/products")
        {
            productsGroup.GET("", listProducts)
            productsGroup.GET("/:id", getProduct)
            productsGroup.POST("", createProduct)
            productsGroup.PUT("/:id", updateProduct)
            productsGroup.DELETE("/:id", deleteProduct)
        }
    }

    r.Run(":8080")
}

func listProducts(c *gin.Context) {
    c.JSON(http.StatusOK, products)
}

func getProduct(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
        return
    }
    for _, p := range products {
        if p.ID == id {
            c.JSON(http.StatusOK, p)
            return
        }
    }
    c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
}

func createProduct(c *gin.Context) {
    var p Product
    if err := c.ShouldBindJSON(&p); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    p.ID = len(products) + 1
    products = append(products, p)
    c.JSON(http.StatusCreated, p)
}

func updateProduct(c *gin.Context) {
    id, _ := strconv.Atoi(c.Param("id"))
    var p Product
    if err := c.ShouldBindJSON(&p); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    for i := range products {
        if products[i].ID == id {
            p.ID = id
            products[i] = p
            c.JSON(http.StatusOK, p)
            return
        }
    }
    c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
}

func deleteProduct(c *gin.Context) {
    id, _ := strconv.Atoi(c.Param("id"))
    for i, p := range products {
        if p.ID == id {
            products = append(products[:i], products[i+1:]...)
            c.Status(http.StatusNoContent)
            return
        }
    }
    c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
}`,
          },
        ],
      },
      {
        id: "6",
        title: "Database với GORM và Testing",
        slug: "gorm-testing",
        duration: "80 phút",
        prerequisites: ["5"],
        content: `# Database với GORM và Testing trong Go

## GORM Setup

### Cài đặt
\`\`\`bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/postgres
go get -u gorm.io/driver/sqlite
\`\`\`

### Kết nối database
\`\`\`go
package database

import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

func Connect(dsn string) (*gorm.DB, error) {
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        return nil, err
    }
    return db, nil
}
\`\`\`

## Models và Migrations

### Model definition
\`\`\`go
type User struct {
    gorm.Model
    Name     string \`gorm:"not null"\`
    Email    string \`gorm:"uniqueIndex;not null"\`
    Age      int
    Posts    []Post
}

type Post struct {
    gorm.Model
    Title   string \`gorm:"not null"\`
    Content string
    UserID  uint
    User    User
}
\`\`\`

### AutoMigrate
\`\`\`go
db.AutoMigrate(&User{}, &Post{})
\`\`\`

## CRUD Operations

### Create
\`\`\`go
user := User{Name: "John", Email: "john@example.com", Age: 30}
result := db.Create(&user)
fmt.Println(user.ID)
fmt.Println(result.Error)
fmt.Println(result.RowsAffected)

// Batch insert
users := []User{{Name: "A"}, {Name: "B"}}
db.Create(&users)
\`\`\`

### Read
\`\`\`go
// Get first
var user User
db.First(&user)
db.First(&user, 10) // WHERE id = 10
db.First(&user, "name = ?", "John")

// Get all
var users []User
db.Find(&users)

// Conditions
db.Where("age > ?", 18).Find(&users)
db.Where("name LIKE ?", "%oh%").Find(&users)
db.Where(&User{Name: "John", Age: 30}).Find(&users)

// Order, Limit, Offset
db.Order("age desc").Limit(10).Offset(0).Find(&users)
\`\`\`

### Update
\`\`\`go
// Update single field
db.Model(&user).Update("age", 31)

// Update multiple fields
db.Model(&user).Updates(User{Age: 31, Name: "Jane"})
db.Model(&user).Updates(map[string]interface{}{"age": 31})

// Update all
db.Model(&User{}).Where("age < ?", 18).Update("active", false)

// Save (all fields)
user.Age = 31
db.Save(&user)
\`\`\`

### Delete
\`\`\`go
db.Delete(&user, 10)
db.Where("age < ?", 18).Delete(&User{})

// Soft delete (với gorm.Model)
db.Delete(&user) // sets deleted_at

// Permanent
db.Unscoped().Delete(&user)
\`\`\`

## Relations

### Has Many
\`\`\`go
var user User
db.Preload("Posts").First(&user, 1)
\`\`\`

### Belongs To
\`\`\`go
var post Post
db.Preload("User").First(&post, 1)
\`\`\`

### Many to Many
\`\`\`go
type Student struct {
    gorm.Model
    Name    string
    Courses []Course \`gorm:"many2many:student_courses;"\`
}

type Course struct {
    gorm.Model
    Name     string
    Students []Student \`gorm:"many2many:student_courses;"\`
}
\`\`\`

## Transactions
\`\`\`go
err := db.Transaction(func(tx *gorm.DB) error {
    if err := tx.Create(&User{Name: "A"}).Error; err != nil {
        return err
    }
    if err := tx.Create(&Post{Title: "Post"}).Error; err != nil {
        return err
    }
    return nil
})
\`\`\`

## Testing

### Table-driven tests
\`\`\`go
func TestAdd(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive", 2, 3, 5},
        {"negative", -1, 1, 0},
        {"zero", 0, 0, 0},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := Add(tt.a, tt.b)
            if got != tt.expected {
                t.Errorf("Add(%d, %d) = %d; want %d", tt.a, tt.b, got, tt.expected)
            }
        })
    }
}
\`\`\`

### Testify
\`\`\`go
import (
    "testing"
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/require"
)

func TestUserService(t *testing.T) {
    user, err := service.Create("John", "john@example.com")
    require.NoError(t, err)
    assert.Equal(t, "John", user.Name)
    assert.NotZero(t, user.ID)
}
\`\`\`

### In-memory database testing
\`\`\`go
import "gorm.io/driver/sqlite"

func setupTestDB(t *testing.T) *gorm.DB {
    db, err := gorm.Open(sqlite.Open(":memory:"), &gorm.Config{})
    require.NoError(t, err)
    db.AutoMigrate(&User{})
    return db
}

func TestCreateUser(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    user, err := repo.Create(User{Name: "John", Email: "j@e.com"})
    require.NoError(t, err)
    assert.NotZero(t, user.ID)
}
\`\`\`

### Mocking
\`\`\`go
type MockUserRepository struct {
    mock.Mock
}

func (m *MockUserRepository) FindByID(id uint) (*User, error) {
    args := m.Called(id)
    return args.Get(0).(*User), args.Error(1)
}
\`\`\`

## Bài tập thực hành
Hãy viết tests cho REST API với GORM!`,
        exercises: [
          {
            id: "6-1",
            title: "CRUD với GORM và Tests",
            description: "Implement CRUD operations và viết tests",
            instructions: `Implement UserRepository với:
- Create, FindByID, FindAll, Update, Delete
- Viết unit tests sử dụng in-memory SQLite
- Test các edge cases`,
            type: "code",
            starterCode: `package repository

import "gorm.io/gorm"

type User struct {
    ID    uint
    Name  string
    Email string
}

type UserRepository struct {
    db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
    return &UserRepository{db: db}
}

// Viết các methods ở đây`,
            solution: `package repository

import "gorm.io/gorm"

type User struct {
    ID    uint   \`gorm:"primaryKey"\`
    Name  string \`gorm:"not null"\`
    Email string \`gorm:"uniqueIndex;not null"\`
}

type UserRepository struct {
    db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
    return &UserRepository{db: db}
}

func (r *UserRepository) Create(u *User) error {
    return r.db.Create(u).Error
}

func (r *UserRepository) FindByID(id uint) (*User, error) {
    var u User
    if err := r.db.First(&u, id).Error; err != nil {
        return nil, err
    }
    return &u, nil
}

func (r *UserRepository) FindAll() ([]User, error) {
    var users []User
    if err := r.db.Find(&users).Error; err != nil {
        return nil, err
    }
    return users, nil
}

func (r *UserRepository) Update(u *User) error {
    return r.db.Save(u).Error
}

func (r *UserRepository) Delete(id uint) error {
    return r.db.Delete(&User{}, id).Error
}

// ============= Tests =============
// repository/user_test.go
package repository

import (
    "testing"
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/require"
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
)

func setupTestDB(t *testing.T) *gorm.DB {
    db, err := gorm.Open(sqlite.Open(":memory:"), &gorm.Config{})
    require.NoError(t, err)
    require.NoError(t, db.AutoMigrate(&User{}))
    return db
}

func TestUserRepository_Create(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    u := &User{Name: "John", Email: "john@example.com"}
    err := repo.Create(u)

    require.NoError(t, err)
    assert.NotZero(t, u.ID)
}

func TestUserRepository_FindByID(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    created := &User{Name: "John", Email: "john@example.com"}
    require.NoError(t, repo.Create(created))

    found, err := repo.FindByID(created.ID)
    require.NoError(t, err)
    assert.Equal(t, created.Name, found.Name)
    assert.Equal(t, created.Email, found.Email)
}

func TestUserRepository_FindByID_NotFound(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    _, err := repo.FindByID(999)
    assert.Error(t, err)
}

func TestUserRepository_Update(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    u := &User{Name: "John", Email: "john@example.com"}
    require.NoError(t, repo.Create(u))

    u.Name = "Jane"
    require.NoError(t, repo.Update(u))

    found, _ := repo.FindByID(u.ID)
    assert.Equal(t, "Jane", found.Name)
}

func TestUserRepository_Delete(t *testing.T) {
    db := setupTestDB(t)
    repo := NewUserRepository(db)

    u := &User{Name: "John", Email: "john@example.com"}
    require.NoError(t, repo.Create(u))

    require.NoError(t, repo.Delete(u.ID))

    _, err := repo.FindByID(u.ID)
    assert.Error(t, err)
}`,
          },
        ],
      },
    ],
  },
  {
    id: "java-spring-boot",
    slug: "java-spring-boot",
    title: "Java Spring Boot Toàn tập",
    description:
      "Xây dựng ứng dụng enterprise với Java Spring Boot, JPA và Microservices",
    image: "/images/spring-course.jpg",
    duration: "12 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu Spring Boot và Setup",
        slug: "gioi-thieu-spring-boot",
        duration: "50 phút",
        content: `# Giới thiệu Spring Boot

## Spring Boot là gì?
Spring Boot là framework giúp đơn giản hóa việc phát triển ứng dụng Java với Spring, cung cấp auto-configuration, embedded server và production-ready features.

## Ưu điểm
- **Auto-configuration**: Giảm thiểu cấu hình
- **Embedded server**: Tomcat, Jetty, Undertow
- **Starter dependencies**: Quản lý dependencies dễ dàng
- **Production-ready**: Actuator, metrics, health checks
- **Hệ sinh thái phong phú**: Spring Data, Spring Security, Spring Cloud

## Cài đặt môi trường

### Yêu cầu
- JDK 17+ (khuyến nghị JDK 21)
- Maven hoặc Gradle
- IDE: IntelliJ IDEA, VS Code

### Tạo project với Spring Initializr
\`\`\`bash
# Sử dụng curl
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,data-jpa,postgresql,validation,lombok \\
  -d type=maven-project \\
  -d language=java \\
  -d bootVersion=3.2.0 \\
  -d groupId=com.example \\
  -d artifactId=demo \\
  -o demo.zip
unzip demo.zip
\`\`\`

## Cấu trúc project

\`\`\`
demo/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── DemoApplication.java
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   ├── entity/
│   │   │   └── dto/
│   │   └── resources/
│   │       ├── application.yml
│   │       └── db/migration/
│   └── test/
└── target/
\`\`\`

## Ứng dụng đầu tiên

### Main class
\`\`\`java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
\`\`\`

### Controller
\`\`\`java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    @GetMapping("/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
}
\`\`\`

### application.yml
\`\`\`yaml
spring:
  application:
    name: demo

server:
  port: 8080

logging:
  level:
    com.example.demo: DEBUG
\`\`\`

## Dependency Injection

### Constructor injection (recommended)
\`\`\`java
@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`

### Các loại annotations
- \`@Component\`: Generic component
- \`@Service\`: Business logic
- \`@Repository\`: Data access
- \`@Controller\` / \`@RestController\`: Web layer
- \`@Configuration\`: Configuration class

## Bài tập thực hành
Hãy tạo ứng dụng Spring Boot đầu tiên với REST endpoints!`,
        exercises: [
          {
            id: "1-1",
            title: "Kiểm tra kiến thức",
            description: "Trắc nghiệm về Spring Boot",
            instructions: "Chọn đáp án đúng:",
            type: "multiple-choice",
            options: [
              "Spring Boot chỉ hỗ trợ Tomcat",
              "Spring Boot cung cấp auto-configuration",
              "Spring Boot không hỗ trợ REST API",
              "Spring Boot cần cấu hình XML bắt buộc",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "2",
        title: "Spring Data JPA và Entity",
        slug: "spring-data-jpa-entity",
        duration: "75 phút",
        prerequisites: ["1"],
        content: `# Spring Data JPA và Entity

## Entity Mapping

### Entity cơ bản
\`\`\`java
package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

enum UserRole {
    USER, ADMIN
}
\`\`\`

## Relationships

### One-to-Many / Many-to-One
\`\`\`java
@Entity
public class User {
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();
}

@Entity
public class Post {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
\`\`\`

### Many-to-Many
\`\`\`java
@Entity
public class Student {
    @ManyToMany
    @JoinTable(
        name = "student_courses",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}
\`\`\`

### One-to-One
\`\`\`java
@Entity
public class User {
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Profile profile;
}

@Entity
public class Profile {
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
\`\`\`

## Repositories

### JpaRepository
\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    List<User> findByNameContainingIgnoreCase(String name);

    boolean existsByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.role = :role")
    List<User> findByRole(@Param("role") UserRole role);

    @Query(value = "SELECT * FROM users WHERE created_at > :date", nativeQuery = true)
    List<User> findRecentUsers(@Param("date") LocalDateTime date);

    @Modifying
    @Query("UPDATE User u SET u.role = :role WHERE u.id = :id")
    int updateRole(@Param("id") Long id, @Param("role") UserRole role);
}
\`\`\`

### Derived query methods
\`\`\`java
// Các keyword phổ biến
findByFirstName(String firstName)
findByFirstNameAndLastName(String fn, String ln)
findByAgeGreaterThan(int age)
findByAgeBetween(int min, int max)
findByNameLike(String pattern)
findByNameContaining(String substring)
findByNameStartingWith(String prefix)
findByOrderByCreatedAtDesc()
findTop10ByOrderByCreatedAtDesc()
\`\`\`

### Pagination và Sorting
\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findByNameContaining(String name, Pageable pageable);
}

// Sử dụng
Pageable pageable = PageRequest.of(0, 10, Sort.by("createdAt").descending());
Page<User> page = repository.findByNameContaining("John", pageable);
System.out.println(page.getTotalElements());
System.out.println(page.getTotalPages());
\`\`\`

## Service Layer

\`\`\`java
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public UserResponse create(CreateUserRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BusinessException("Email already exists");
        }

        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(UserRole.USER)
            .build();

        User saved = userRepository.save(user);
        return UserResponse.from(saved);
    }

    public UserResponse findById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("User not found"));
        return UserResponse.from(user);
    }

    public Page<UserResponse> findAll(Pageable pageable) {
        return userRepository.findAll(pageable).map(UserResponse::from);
    }

    @Transactional
    public UserResponse update(Long id, UpdateUserRequest request) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("User not found"));
        user.setName(request.getName());
        return UserResponse.from(user);
    }

    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
\`\`\`

## DTOs

\`\`\`java
public record CreateUserRequest(
    @NotBlank String name,
    @Email @NotBlank String email,
    @Size(min = 8) String password
) {}

public record UserResponse(
    Long id,
    String name,
    String email,
    String role,
    LocalDateTime createdAt
) {
    public static UserResponse from(User user) {
        return new UserResponse(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getRole().name(),
            user.getCreatedAt()
        );
    }
}
\`\`\`

## Configuration

\`\`\`yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: postgres
    password: postgres
    driver-class-name: org.postgresql.Driver

  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.PostgreSQLDialect

  flyway:
    enabled: true
    locations: classpath:db/migration
\`\`\`

## Bài tập thực hành
Hãy tạo CRUD API cho User với JPA!`,
        exercises: [
          {
            id: "2-1",
            title: "Product CRUD API",
            description: "Implement CRUD với JPA",
            instructions: `Tạo:
1. Product entity với id, name, description, price, stock
2. ProductRepository với custom queries
3. ProductService với CRUD operations
4. ProductController với REST endpoints
5. Validation cho requests`,
            type: "code",
            starterCode: `// Product entity
@Entity
public class Product {
    // Viết code ở đây
}

// ProductRepository
public interface ProductRepository extends JpaRepository<Product, Long> {
}

// ProductService
@Service
public class ProductService {
}`,
            solution: `// ============= Product.java =============
@Entity
@Table(name = "products")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(length = 2000)
    private String description;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private Integer stock;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    void onCreate() {
        createdAt = LocalDateTime.now();
    }
}

// ============= ProductRepository.java =============
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCase(String name);

    @Query("SELECT p FROM Product p WHERE p.stock > 0 AND p.price BETWEEN :min AND :max")
    List<Product> findAvailableInPriceRange(
        @Param("min") BigDecimal min,
        @Param("max") BigDecimal max
    );

    boolean existsByName(String name);
}

// ============= DTOs =============
public record CreateProductRequest(
    @NotBlank @Size(max = 200) String name,
    @Size(max = 2000) String description,
    @NotNull @DecimalMin("0.0") BigDecimal price,
    @NotNull @Min(0) Integer stock
) {}

public record UpdateProductRequest(
    @NotBlank @Size(max = 200) String name,
    @Size(max = 2000) String description,
    @NotNull @DecimalMin("0.0") BigDecimal price,
    @NotNull @Min(0) Integer stock
) {}

public record ProductResponse(
    Long id,
    String name,
    String description,
    BigDecimal price,
    Integer stock,
    LocalDateTime createdAt
) {
    public static ProductResponse from(Product p) {
        return new ProductResponse(
            p.getId(), p.getName(), p.getDescription(),
            p.getPrice(), p.getStock(), p.getCreatedAt()
        );
    }
}

// ============= ProductService.java =============
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository repository;

    @Transactional
    public ProductResponse create(CreateProductRequest req) {
        if (repository.existsByName(req.name())) {
            throw new BusinessException("Product name already exists");
        }
        Product p = Product.builder()
            .name(req.name())
            .description(req.description())
            .price(req.price())
            .stock(req.stock())
            .build();
        return ProductResponse.from(repository.save(p));
    }

    public ProductResponse findById(Long id) {
        return repository.findById(id)
            .map(ProductResponse::from)
            .orElseThrow(() -> new NotFoundException("Product not found"));
    }

    public Page<ProductResponse> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(ProductResponse::from);
    }

    @Transactional
    public ProductResponse update(Long id, UpdateProductRequest req) {
        Product p = repository.findById(id)
            .orElseThrow(() -> new NotFoundException("Product not found"));
        p.setName(req.name());
        p.setDescription(req.description());
        p.setPrice(req.price());
        p.setStock(req.stock());
        return ProductResponse.from(p);
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Product not found");
        }
        repository.deleteById(id);
    }
}

// ============= ProductController.java =============
@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductResponse create(@Valid @RequestBody CreateProductRequest req) {
        return service.create(req);
    }

    @GetMapping("/{id}")
    public ProductResponse findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @GetMapping
    public Page<ProductResponse> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @PutMapping("/{id}")
    public ProductResponse update(
        @PathVariable Long id,
        @Valid @RequestBody UpdateProductRequest req
    ) {
        return service.update(id, req);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}`,
          },
        ],
      },
      {
        id: "3",
        title: "Spring Security và JWT",
        slug: "spring-security-jwt",
        duration: "90 phút",
        prerequisites: ["2"],
        content: `# Spring Security và JWT

## Cài đặt
\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.3</version>
</dependency>
\`\`\`

## JWT Service

\`\`\`java
@Service
public class JwtService {

    @Value("\${jwt.secret}")
    private String secret;

    @Value("\${jwt.expiration}")
    private long expiration;

    public String generateToken(UserDetails user) {
        return Jwts.builder()
            .subject(user.getUsername())
            .claim("authorities", user.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList())
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(getSigningKey())
            .compact();
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    public boolean isValid(String token, UserDetails user) {
        try {
            Claims claims = getClaims(token);
            return claims.getSubject().equals(user.getUsername())
                && claims.getExpiration().after(new Date());
        } catch (JwtException e) {
            return false;
        }
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
            .verifyWith(getSigningKey())
            .build()
            .parseSignedClaims(token)
            .getPayload();
    }

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }
}
\`\`\`

## JWT Filter

\`\`\`java
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
        HttpServletRequest request,
        HttpServletResponse response,
        FilterChain filterChain
    ) throws ServletException, IOException {

        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = header.substring(7);
        try {
            String username = jwtService.extractUsername(token);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails user = userDetailsService.loadUserByUsername(username);
                if (jwtService.isValid(token, user)) {
                    UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(
                            user, null, user.getAuthorities());
                    auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
            }
        } catch (Exception e) {
            // invalid token
        }

        filterChain.doFilter(request, response);
    }
}
\`\`\`

## Security Configuration

\`\`\`java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    public AuthenticationManager authenticationManager(
        AuthenticationConfiguration config
    ) throws Exception {
        return config.getAuthenticationManager();
    }
}
\`\`\`

## Authentication Service

\`\`\`java
@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new BusinessException("Email already exists");
        }

        User user = User.builder()
            .name(request.name())
            .email(request.email())
            .password(passwordEncoder.encode(request.password()))
            .role(UserRole.USER)
            .build();
        userRepository.save(user);

        String token = jwtService.generateToken(toUserDetails(user));
        return new AuthResponse(token, "Bearer");
    }

    public AuthResponse login(LoginRequest request) {
        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.email(), request.password()));

        User user = userRepository.findByEmail(request.email())
            .orElseThrow(() -> new NotFoundException("User not found"));

        String token = jwtService.generateToken(toUserDetails(user));
        return new AuthResponse(token, "Bearer");
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail())
            .password(user.getPassword())
            .authorities("ROLE_" + user.getRole().name())
            .build();
    }
}
\`\`\`

## Custom UserDetailsService

\`\`\`java
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

        return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail())
            .password(user.getPassword())
            .authorities("ROLE_" + user.getRole().name())
            .build();
    }
}
\`\`\`

## Auth Controller

\`\`\`java
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(@Valid @RequestBody RegisterRequest req) {
        return authService.register(req);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest req) {
        return authService.login(req);
    }

    @GetMapping("/me")
    public String me(Authentication auth) {
        return auth.getName();
    }
}

record RegisterRequest(
    @NotBlank String name,
    @Email @NotBlank String email,
    @Size(min = 8) String password
) {}

record LoginRequest(
    @Email @NotBlank String email,
    @NotBlank String password
) {}

record AuthResponse(String token, String type) {}
\`\`\`

## Method-level Security

\`\`\`java
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<UserResponse> users() {
        return List.of();
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable Long id) {
        // ...
    }
}
\`\`\`

## application.yml

\`\`\`yaml
jwt:
  secret: \${JWT_SECRET:your-256-bit-secret-key-base64-encoded-here}
  expiration: 86400000  # 24 hours in ms
\`\`\`

## Bài tập thực hành
Hãy implement JWT authentication hoàn chỉnh!`,
        exercises: [
          {
            id: "3-1",
            title: "JWT Auth System",
            description: "Implement authentication với JWT và roles",
            instructions: `Implement:
1. Register / Login endpoints
2. JWT generation và validation
3. Role-based access control
4. Refresh token mechanism
5. Logout functionality`,
            type: "code",
            starterCode: `// Implement JWT auth system
@RestController
@RequestMapping("/api/auth")
public class AuthController {
}`,
            solution: `// ============= RefreshToken entity =============
@Entity
@Table(name = "refresh_tokens")
@Getter @Setter
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String token;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    public boolean isExpired() {
        return expiresAt.isBefore(LocalDateTime.now());
    }
}

// ============= RefreshTokenRepository =============
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);

    @Modifying
    @Query("DELETE FROM RefreshToken rt WHERE rt.user.id = :userId")
    void deleteByUserId(@Param("userId") Long userId);
}

// ============= Enhanced JwtService =============
@Service
public class JwtService {

    @Value("\${jwt.secret}")
    private String secret;

    @Value("\${jwt.access-token-expiration:900000}")  // 15 min
    private long accessExpiration;

    @Value("\${jwt.refresh-token-expiration:604800000}")  // 7 days
    private long refreshExpiration;

    public String generateAccessToken(UserDetails user) {
        return buildToken(user, accessExpiration);
    }

    public String generateRefreshToken(UserDetails user) {
        return buildToken(user, refreshExpiration);
    }

    private String buildToken(UserDetails user, long exp) {
        return Jwts.builder()
            .subject(user.getUsername())
            .claim("authorities", user.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority).toList())
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + exp))
            .signWith(getSigningKey())
            .compact();
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    public boolean isValid(String token, UserDetails user) {
        try {
            Claims c = getClaims(token);
            return c.getSubject().equals(user.getUsername())
                && c.getExpiration().after(new Date());
        } catch (JwtException e) {
            return false;
        }
    }

    private Claims getClaims(String token) {
        return Jwts.parser().verifyWith(getSigningKey()).build()
            .parseSignedClaims(token).getPayload();
    }

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public long getRefreshExpiration() {
        return refreshExpiration;
    }
}

// ============= AuthService =============
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final AuthenticationManager authManager;
    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshRepo;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new BusinessException("Email already exists");
        }
        User user = User.builder()
            .name(req.name())
            .email(req.email())
            .password(passwordEncoder.encode(req.password()))
            .role(UserRole.USER)
            .build();
        userRepository.save(user);
        return generateTokens(user);
    }

    public AuthResponse login(LoginRequest req) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(
            req.email(), req.password()));
        User user = userRepository.findByEmail(req.email())
            .orElseThrow(() -> new NotFoundException("User not found"));
        return generateTokens(user);
    }

    public AuthResponse refresh(String refreshToken) {
        RefreshToken stored = refreshRepo.findByToken(refreshToken)
            .orElseThrow(() -> new BusinessException("Invalid refresh token"));

        if (stored.isExpired()) {
            refreshRepo.delete(stored);
            throw new BusinessException("Refresh token expired");
        }

        User user = stored.getUser();
        String newAccess = jwtService.generateAccessToken(toUserDetails(user));
        return new AuthResponse(newAccess, refreshToken, "Bearer");
    }

    public void logout(Long userId) {
        refreshRepo.deleteByUserId(userId);
    }

    private AuthResponse generateTokens(User user) {
        UserDetails details = toUserDetails(user);
        String access = jwtService.generateAccessToken(details);
        String refresh = jwtService.generateRefreshToken(details);

        refreshRepo.deleteByUserId(user.getId());
        RefreshToken rt = new RefreshToken();
        rt.setToken(refresh);
        rt.setUser(user);
        rt.setExpiresAt(LocalDateTime.now()
            .plusSeconds(jwtService.getRefreshExpiration() / 1000));
        refreshRepo.save(rt);

        return new AuthResponse(access, refresh, "Bearer");
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail())
            .password(user.getPassword())
            .authorities("ROLE_" + user.getRole().name())
            .build();
    }
}

// ============= AuthController =============
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(@Valid @RequestBody RegisterRequest req) {
        return authService.register(req);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest req) {
        return authService.login(req);
    }

    @PostMapping("/refresh")
    public AuthResponse refresh(@Valid @RequestBody RefreshRequest req) {
        return authService.refresh(req.refreshToken());
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(Authentication auth) {
        // Need to fetch user by email
        // authService.logout(userId);
    }
}

record RefreshRequest(@NotBlank String refreshToken) {}
record AuthResponse(String accessToken, String refreshToken, String type) {}`,
          },
        ],
      },
      {
        id: "4",
        title: "Exception Handling và Validation",
        slug: "exception-handling-validation",
        duration: "60 phút",
        prerequisites: ["3"],
        content: `# Exception Handling và Validation

## Global Exception Handler

\`\`\`java
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(NotFoundException ex, HttpServletRequest req) {
        return new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.NOT_FOUND.value(),
            "Not Found",
            ex.getMessage(),
            req.getRequestURI(),
            null
        );
    }

    @ExceptionHandler(BusinessException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBusiness(BusinessException ex, HttpServletRequest req) {
        return new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Bad Request",
            ex.getMessage(),
            req.getRequestURI(),
            null
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(
        MethodArgumentNotValidException ex,
        HttpServletRequest req
    ) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(err ->
            errors.put(err.getField(), err.getDefaultMessage()));

        return new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Validation Failed",
            "Invalid input",
            req.getRequestURI(),
            errors
        );
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ErrorResponse handleAccessDenied(AccessDeniedException ex, HttpServletRequest req) {
        return new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.FORBIDDEN.value(),
            "Forbidden",
            "Access denied",
            req.getRequestURI(),
            null
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneric(Exception ex, HttpServletRequest req) {
        log.error("Unhandled exception", ex);
        return new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal Server Error",
            "An unexpected error occurred",
            req.getRequestURI(),
            null
        );
    }
}

public record ErrorResponse(
    LocalDateTime timestamp,
    int status,
    String error,
    String message,
    String path,
    Map<String, String> details
) {}
\`\`\`

## Custom Exceptions

\`\`\`java
public class BusinessException extends RuntimeException {
    public BusinessException(String message) {
        super(message);
    }
}

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}
\`\`\`

## Validation

### Request validation
\`\`\`java
public record CreateUserRequest(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).*$",
        message = "Password must contain uppercase, lowercase and digit"
    )
    String password,

    @NotNull
    @Min(value = 18, message = "Must be at least 18")
    @Max(value = 120, message = "Age must be reasonable")
    Integer age
) {}
\`\`\`

### Custom validators
\`\`\`java
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

@Component
@RequiredArgsConstructor
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    private final UserRepository userRepository;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext ctx) {
        if (email == null) return true;
        return !userRepository.existsByEmail(email);
    }
}

// Sử dụng
public record RegisterRequest(
    @NotBlank String name,
    @Email @UniqueEmail String email,
    @Size(min = 8) String password
) {}
\`\`\`

### Validation groups
\`\`\`java
public interface CreateGroup {}
public interface UpdateGroup {}

public record UserRequest(
    @Null(groups = CreateGroup.class)
    @NotNull(groups = UpdateGroup.class)
    Long id,

    @NotBlank(groups = {CreateGroup.class, UpdateGroup.class})
    String name
) {}

// Controller
@PostMapping
public void create(@Validated(CreateGroup.class) @RequestBody UserRequest req) {}

@PutMapping
public void update(@Validated(UpdateGroup.class) @RequestBody UserRequest req) {}
\`\`\`

## Problem Details (RFC 7807)

\`\`\`java
@RestControllerAdvice
public class ProblemDetailsHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ProblemDetail handleNotFound(NotFoundException ex) {
        ProblemDetail pd = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_FOUND, ex.getMessage());
        pd.setTitle("Resource Not Found");
        pd.setType(URI.create("https://example.com/errors/not-found"));
        return pd;
    }
}
\`\`\`

## Logging Best Practices

\`\`\`java
@Slf4j
@Service
public class UserService {

    public UserResponse findById(Long id) {
        log.debug("Finding user by id: {}", id);
        return userRepository.findById(id)
            .map(UserResponse::from)
            .orElseThrow(() -> {
                log.warn("User not found: {}", id);
                return new NotFoundException("User not found");
            });
    }
}
\`\`\`

## Bài tập thực hành
Hãy implement error handling toàn diện cho API!`,
        exercises: [
          {
            id: "4-1",
            title: "Complete Error Handling",
            description: "Implement error handling và validation",
            instructions: `Tạo:
1. Custom exceptions
2. Global exception handler
3. Validation cho requests
4. Custom validator cho unique fields
5. Structured error responses`,
            type: "code",
            starterCode: `// Implement error handling
@RestControllerAdvice
public class GlobalExceptionHandler {
}`,
            solution: `// ============= Exceptions =============
public abstract class AppException extends RuntimeException {
    private final HttpStatus status;
    private final String code;

    protected AppException(String message, HttpStatus status, String code) {
        super(message);
        this.status = status;
        this.code = code;
    }

    public HttpStatus getStatus() { return status; }
    public String getCode() { return code; }
}

public class NotFoundException extends AppException {
    public NotFoundException(String resource, Object id) {
        super(resource + " not found: " + id, HttpStatus.NOT_FOUND, "NOT_FOUND");
    }
}

public class BusinessException extends AppException {
    public BusinessException(String message) {
        super(message, HttpStatus.BAD_REQUEST, "BUSINESS_ERROR");
    }
}

public class ConflictException extends AppException {
    public ConflictException(String message) {
        super(message, HttpStatus.CONFLICT, "CONFLICT");
    }
}

// ============= Error Response =============
public record ErrorResponse(
    LocalDateTime timestamp,
    int status,
    String code,
    String message,
    String path,
    Map<String, String> details
) {
    public static ErrorResponse of(HttpStatus status, String code, String msg,
                                    String path, Map<String, String> details) {
        return new ErrorResponse(LocalDateTime.now(), status.value(), code,
            msg, path, details);
    }
}

// ============= Global Handler =============
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(AppException.class)
    public ResponseEntity<ErrorResponse> handleApp(
        AppException ex, HttpServletRequest req
    ) {
        log.warn("App exception: {} - {}", ex.getCode(), ex.getMessage());
        return ResponseEntity.status(ex.getStatus())
            .body(ErrorResponse.of(ex.getStatus(), ex.getCode(),
                ex.getMessage(), req.getRequestURI(), null));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
        MethodArgumentNotValidException ex, HttpServletRequest req
    ) {
        Map<String, String> details = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> details.put(e.getField(), e.getDefaultMessage()));

        return ResponseEntity.badRequest()
            .body(ErrorResponse.of(HttpStatus.BAD_REQUEST, "VALIDATION_ERROR",
                "Validation failed", req.getRequestURI(), details));
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> handleConstraint(
        ConstraintViolationException ex, HttpServletRequest req
    ) {
        Map<String, String> details = new HashMap<>();
        ex.getConstraintViolations().forEach(v ->
            details.put(v.getPropertyPath().toString(), v.getMessage()));

        return ResponseEntity.badRequest()
            .body(ErrorResponse.of(HttpStatus.BAD_REQUEST, "CONSTRAINT_VIOLATION",
                "Constraint violation", req.getRequestURI(), details));
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handleAccessDenied(
        AccessDeniedException ex, HttpServletRequest req
    ) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
            .body(ErrorResponse.of(HttpStatus.FORBIDDEN, "ACCESS_DENIED",
                "Access denied", req.getRequestURI(), null));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAll(
        Exception ex, HttpServletRequest req
    ) {
        log.error("Unhandled exception", ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(ErrorResponse.of(HttpStatus.INTERNAL_SERVER_ERROR, "INTERNAL_ERROR",
                "An unexpected error occurred", req.getRequestURI(), null));
    }
}

// ============= Custom Validator =============
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

@Component
@RequiredArgsConstructor
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    private final UserRepository userRepository;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext ctx) {
        if (email == null || email.isBlank()) return true;
        return !userRepository.existsByEmail(email);
    }
}

// ============= Requests =============
public record CreateUserRequest(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100)
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @UniqueEmail
    String email,

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    String password
) {}`,
          },
        ],
      },
      {
        id: "5",
        title: "Testing trong Spring Boot",
        slug: "testing-spring-boot",
        duration: "75 phút",
        prerequisites: ["4"],
        content: `# Testing trong Spring Boot

## Test Dependencies

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <scope>test</scope>
</dependency>
\`\`\`

## Unit Tests

### Service test với Mockito
\`\`\`java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    void createUser_shouldReturnCreatedUser() {
        // Given
        var request = new CreateUserRequest("John", "john@example.com", "password");
        var user = User.builder()
            .id(1L)
            .name("John")
            .email("john@example.com")
            .build();

        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encoded");
        when(userRepository.save(any(User.class))).thenReturn(user);

        // When
        UserResponse response = userService.create(request);

        // Then
        assertThat(response.id()).isEqualTo(1L);
        assertThat(response.name()).isEqualTo("John");
        verify(userRepository).save(any(User.class));
    }

    @Test
    void createUser_withExistingEmail_shouldThrow() {
        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        assertThatThrownBy(() -> userService.create(
            new CreateUserRequest("John", "john@example.com", "password")
        ))
        .isInstanceOf(ConflictException.class)
        .hasMessageContaining("Email already exists");

        verify(userRepository, never()).save(any());
    }
}
\`\`\`

## Controller Tests với MockMvc

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void createUser_shouldReturnCreated() throws Exception {
        var request = new CreateUserRequest("John", "john@example.com", "password");
        var response = new UserResponse(1L, "John", "john@example.com", "USER", LocalDateTime.now());

        when(userService.create(any())).thenReturn(response);

        mockMvc.perform(post("/api/v1/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.name").value("John"))
            .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    void createUser_withInvalidEmail_shouldReturn400() throws Exception {
        var request = new CreateUserRequest("John", "invalid-email", "password");

        mockMvc.perform(post("/api/v1/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.details.email").exists());
    }

    @Test
    void getUser_whenNotExists_shouldReturn404() throws Exception {
        when(userService.findById(999L))
            .thenThrow(new NotFoundException("User", 999L));

        mockMvc.perform(get("/api/v1/users/999"))
            .andExpect(status().isNotFound());
    }
}
\`\`\`

## Integration Tests

### Full context test với Testcontainers
\`\`\`java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
@Transactional
class UserIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void props(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Test
    void createAndFetchUser() {
        var request = new CreateUserRequest("John", "john@example.com", "password123");
        var createResponse = restTemplate.postForEntity(
            "/api/v1/users", request, UserResponse.class);

        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(createResponse.getBody().name()).isEqualTo("John");

        Long id = createResponse.getBody().id();
        var getResponse = restTemplate.getForEntity(
            "/api/v1/users/" + id, UserResponse.class);

        assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(getResponse.getBody().email()).isEqualTo("john@example.com");
    }
}
\`\`\`

## Test Data Builders

\`\`\`java
public class UserTestBuilder {
    private String name = "Test User";
    private String email = "test@example.com";
    private UserRole role = UserRole.USER;

    public UserTestBuilder withName(String name) {
        this.name = name;
        return this;
    }

    public UserTestBuilder withEmail(String email) {
        this.email = email;
        return this;
    }

    public User build() {
        return User.builder()
            .name(name)
            .email(email)
            .role(role)
            .password("encoded")
            .build();
    }
}
\`\`\`

## Testing Security

\`\`\`java
@WebMvcTest(UserController.class)
@Import(SecurityConfig.class)
class SecuredControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @MockBean
    private JwtService jwtService;

    @Test
    @WithMockUser(roles = "ADMIN")
    void adminEndpoint_shouldAllowAdmin() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = "USER")
    void adminEndpoint_shouldDenyUser() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isForbidden());
    }

    @Test
    void securedEndpoint_withoutAuth_shouldReturn401() throws Exception {
        mockMvc.perform(get("/api/v1/users"))
            .andExpect(status().isUnauthorized());
    }
}
\`\`\`

## Test Configuration

\`\`\`java
@TestConfiguration
public class TestConfig {

    @Bean
    @Primary
    public PasswordEncoder testPasswordEncoder() {
        return new BCryptPasswordEncoder(4);
    }
}
\`\`\`

## application-test.yml

\`\`\`yaml
spring:
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: false
  flyway:
    enabled: false

logging:
  level:
    root: WARN
    com.example: DEBUG
\`\`\`

## Bài tập thực hành
Hãy viết tests toàn diện cho User API!`,
        exercises: [
          {
            id: "5-1",
            title: "Comprehensive Test Suite",
            description: "Viết tests cho User API",
            instructions: `Viết:
1. Unit tests cho service layer với mocks
2. Controller tests với MockMvc
3. Integration test với Testcontainers
4. Security tests với @WithMockUser`,
            type: "code",
            starterCode: `@SpringBootTest
class UserApiTest {
    // Viết tests ở đây
}`,
            solution: `// ============= Unit Test =============
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @InjectMocks
    private UserService userService;

    @Test
    void create_withNewEmail_success() {
        var req = new CreateUserRequest("John", "john@example.com", "password123");
        var saved = User.builder().id(1L).name("John")
            .email("john@example.com").role(UserRole.USER).build();

        when(userRepository.existsByEmail("john@example.com")).thenReturn(false);
        when(passwordEncoder.encode("password123")).thenReturn("encoded");
        when(userRepository.save(any(User.class))).thenReturn(saved);

        var result = userService.create(req);

        assertThat(result.id()).isEqualTo(1L);
        assertThat(result.email()).isEqualTo("john@example.com");
        verify(userRepository).save(any(User.class));
    }

    @Test
    void create_withDuplicateEmail_throwsConflict() {
        var req = new CreateUserRequest("John", "john@example.com", "password123");
        when(userRepository.existsByEmail("john@example.com")).thenReturn(true);

        assertThatThrownBy(() -> userService.create(req))
            .isInstanceOf(ConflictException.class)
            .hasMessageContaining("Email already exists");

        verify(userRepository, never()).save(any());
    }

    @Test
    void findById_notFound_throws() {
        when(userRepository.findById(999L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> userService.findById(999L))
            .isInstanceOf(NotFoundException.class);
    }

    @Test
    void findById_found_returnsResponse() {
        var user = User.builder().id(1L).name("John")
            .email("john@example.com").role(UserRole.USER).build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        var result = userService.findById(1L);

        assertThat(result.name()).isEqualTo("John");
    }
}

// ============= Controller Test =============
@WebMvcTest(controllers = UserController.class)
@Import(GlobalExceptionHandler.class)
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    UserService userService;

    @Test
    void create_validRequest_returns201() throws Exception {
        var req = new CreateUserRequest("John", "john@example.com", "password123");
        var resp = new UserResponse(1L, "John", "john@example.com", "USER", LocalDateTime.now());

        when(userService.create(any())).thenReturn(resp);

        mockMvc.perform(post("/api/v1/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    void create_invalidEmail_returns400() throws Exception {
        var req = new CreateUserRequest("John", "invalid", "password123");

        mockMvc.perform(post("/api/v1/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.details.email").exists());
    }

    @Test
    void get_notFound_returns404() throws Exception {
        when(userService.findById(999L))
            .thenThrow(new NotFoundException("User", 999L));

        mockMvc.perform(get("/api/v1/users/999"))
            .andExpect(status().isNotFound())
            .andExpect(jsonPath("$.code").value("NOT_FOUND"));
    }
}

// ============= Integration Test =============
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:15-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    @DynamicPropertySource
    static void config(DynamicPropertyRegistry r) {
        r.add("spring.datasource.url", postgres::getJdbcUrl);
        r.add("spring.datasource.username", postgres::getUsername);
        r.add("spring.datasource.password", postgres::getPassword);
        r.add("spring.jpa.hibernate.ddl-auto", () -> "create-drop");
    }

    @Autowired
    TestRestTemplate restTemplate;

    @Autowired
    UserRepository userRepository;

    @AfterEach
    void cleanup() {
        userRepository.deleteAll();
    }

    @Test
    void fullUserFlow() {
        var req = new CreateUserRequest("John", "john@example.com", "password123");

        var created = restTemplate.postForEntity(
            "/api/v1/users", req, UserResponse.class);

        assertThat(created.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        var id = created.getBody().id();

        var fetched = restTemplate.getForEntity(
            "/api/v1/users/" + id, UserResponse.class);

        assertThat(fetched.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(fetched.getBody().email()).isEqualTo("john@example.com");

        assertThat(userRepository.findById(id)).isPresent();
    }
}

// ============= Security Test =============
@WebMvcTest(AdminController.class)
@Import({SecurityConfig.class, GlobalExceptionHandler.class})
class AdminControllerSecurityTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    JwtService jwtService;

    @MockBean
    CustomUserDetailsService userDetailsService;

    @Test
    void adminEndpoint_noAuth_returns401() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(roles = "USER")
    void adminEndpoint_userRole_returns403() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    void adminEndpoint_adminRole_returns200() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }
}`,
          },
        ],
      },
      {
        id: "6",
        title: "Microservices với Spring Cloud",
        slug: "microservices-spring-cloud",
        duration: "90 phút",
        prerequisites: ["5"],
        content: `# Microservices với Spring Cloud

## Microservices Architecture

### Ưu điểm
- **Independent deployment**: Mỗi service deploy riêng
- **Technology diversity**: Có thể dùng tech stack khác nhau
- **Scalability**: Scale từng service độc lập
- **Fault isolation**: Lỗi 1 service không ảnh hưởng toàn hệ thống

### Nhược điểm
- **Complexity**: Phức tạp hơn monolith
- **Network latency**: Giao tiếp qua network
- **Distributed transactions**: Khó đảm bảo consistency
- **Testing**: Khó test integration

## Service Discovery với Eureka

### Eureka Server
\`\`\`java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
\`\`\`

### Eureka Client
\`\`\`java
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
spring:
  application:
    name: user-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
\`\`\`

## API Gateway

### Spring Cloud Gateway
\`\`\`java
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
server:
  port: 8080

spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=1

        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - StripPrefix=1
\`\`\`

### Custom Filter
\`\`\`java
@Component
public class AuthGatewayFilter implements GlobalFilter, Ordered {

    private final JwtService jwtService;

    public AuthGatewayFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getPath().value();

        if (path.startsWith("/api/auth/")) {
            return chain.filter(exchange);
        }

        String authHeader = exchange.getRequest().getHeaders()
            .getFirst(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        try {
            String token = authHeader.substring(7);
            String username = jwtService.extractUsername(token);
            exchange.getRequest().mutate()
                .header("X-Auth-User", username)
                .build();
        } catch (Exception e) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return -1;
    }
}
\`\`\`

## Inter-Service Communication

### OpenFeign Client
\`\`\`java
@FeignClient(name = "user-service", path = "/api/users")
public interface UserClient {

    @GetMapping("/{id}")
    UserResponse getUser(@PathVariable Long id);

    @PostMapping
    UserResponse createUser(@RequestBody CreateUserRequest request);
}
\`\`\`

### Feign với fallback
\`\`\`java
@FeignClient(
    name = "user-service",
    fallbackFactory = UserClientFallback.class
)
public interface UserClient {
    @GetMapping("/{id}")
    UserResponse getUser(@PathVariable Long id);
}

@Component
public class UserClientFallback implements FallbackFactory<UserClient> {
    @Override
    public UserClient create(Throwable cause) {
        return id -> {
            log.warn("Fallback for getUser({}): {}", id, cause.getMessage());
            return new UserResponse(id, "Unknown", null, null, null);
        };
    }
}
\`\`\`

## Circuit Breaker với Resilience4j

\`\`\`xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
\`\`\`

\`\`\`java
@Service
@RequiredArgsConstructor
public class OrderService {

    private final UserClient userClient;

    @CircuitBreaker(name = "userService", fallbackMethod = "fallback")
    @Retry(name = "userService")
    @TimeLimiter(name = "userService")
    public CompletableFuture<OrderResponse> createOrder(Long userId, OrderRequest req) {
        return CompletableFuture.supplyAsync(() -> {
            UserResponse user = userClient.getUser(userId);
            // process order
            return new OrderResponse(user.id(), req);
        });
    }

    private CompletableFuture<OrderResponse> fallback(
        Long userId, OrderRequest req, Throwable t
    ) {
        log.error("Circuit breaker fallback", t);
        return CompletableFuture.failedFuture(
            new BusinessException("User service unavailable"));
    }
}
\`\`\`

### Configuration
\`\`\`yaml
resilience4j:
  circuitbreaker:
    instances:
      userService:
        registerHealthIndicator: true
        slidingWindowSize: 10
        minimumNumberOfCalls: 5
        permittedNumberOfCallsInHalfOpenState: 3
        automaticTransitionFromOpenToHalfOpenEnabled: true
        waitDurationInOpenState: 10s
        failureRateThreshold: 50
  retry:
    instances:
      userService:
        maxAttempts: 3
        waitDuration: 1s
  timelimiter:
    instances:
      userService:
        timeoutDuration: 3s
\`\`\`

## Distributed Tracing

### Micrometer Tracing + Zipkin
\`\`\`xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.zipkin.reporter2</groupId>
    <artifactId>zipkin-reporter-brave</artifactId>
</dependency>
\`\`\`

\`\`\`yaml
management:
  tracing:
    sampling:
      probability: 1.0
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans
\`\`\`

## Configuration Server

### Config Server
\`\`\`java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
\`\`\`

## Message Queue với Kafka

### Producer
\`\`\`java
@Service
@RequiredArgsConstructor
public class OrderEventPublisher {

    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public void publishOrderCreated(OrderEvent event) {
        kafkaTemplate.send("order-events", event.orderId(), event)
            .whenComplete((result, ex) -> {
                if (ex != null) {
                    log.error("Failed to publish event", ex);
                }
            });
    }
}
\`\`\`

### Consumer
\`\`\`java
@Service
@Slf4j
public class OrderEventConsumer {

    @KafkaListener(topics = "order-events", groupId = "notification-service")
    public void handleOrderCreated(OrderEvent event) {
        log.info("Received order event: {}", event);
        // send notification
    }
}
\`\`\`

## Docker Compose cho microservices

\`\`\`yaml
version: '3.8'
services:
  eureka:
    build: ./eureka-server
    ports:
      - "8761:8761"

  config-server:
    build: ./config-server
    ports:
      - "8888:8888"
    depends_on:
      - eureka

  gateway:
    build: ./gateway
    ports:
      - "8080:8080"
    depends_on:
      - eureka

  user-service:
    build: ./user-service
    depends_on:
      - eureka
      - postgres

  order-service:
    build: ./order-service
    depends_on:
      - eureka
      - postgres
      - kafka

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: microservices
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres

  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181

  zipkin:
    image: openzipkin/zipkin:latest
    ports:
      - "9411:9411"
\`\`\`

## Bài tập thực hành
Hãy xây dựng microservices architecture hoàn chỉnh!`,
        exercises: [
          {
            id: "6-1",
            title: "E-commerce Microservices",
            description: "Thiết kế microservices cho e-commerce",
            instructions: `Thiết kế và implement:
1. Service discovery với Eureka
2. API Gateway với auth filter
3. User service, Product service, Order service
4. Inter-service communication với Feign
5. Circuit breaker và fallback
6. Event-driven với Kafka`,
            type: "code",
            starterCode: `// E-commerce microservices architecture
// Implement các services cần thiết`,
            solution: `// ============= Eureka Server =============
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {}

// ============= API Gateway =============
@SpringBootApplication
public class GatewayApplication {}

@Component
class AuthFilter implements GlobalFilter, Ordered {
    private final JwtService jwtService;

    AuthFilter(JwtService jwtService) { this.jwtService = jwtService; }

    @Override
    public Mono<Void> filter(ServerWebExchange ex, GatewayFilterChain chain) {
        String path = ex.getRequest().getPath().value();
        if (path.startsWith("/api/auth/") || path.startsWith("/actuator/")) {
            return chain.filter(ex);
        }
        String auth = ex.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (auth == null || !auth.startsWith("Bearer ")) {
            ex.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return ex.getResponse().setComplete();
        }
        try {
            String user = jwtService.extractUsername(auth.substring(7));
            return chain.filter(ex.mutate().request(
                ex.getRequest().mutate().header("X-User", user).build()
            ).build());
        } catch (Exception e) {
            ex.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return ex.getResponse().setComplete();
        }
    }

    @Override
    public int getOrder() { return -1; }
}

// ============= User Service =============
@Entity
class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @Column(unique = true) String email;
    String password;
    @Enumerated(EnumType.STRING) UserRole role;
}

@RestController
@RequestMapping("/api/users")
class UserController {
    private final UserService service;

    UserController(UserService service) { this.service = service; }

    @GetMapping("/{id}")
    UserResponse get(@PathVariable Long id) { return service.findById(id); }
}

// ============= Product Service =============
@Entity
class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    BigDecimal price;
    Integer stock;
}

@RestController
@RequestMapping("/api/products")
class ProductController {
    @GetMapping("/{id}")
    ProductResponse get(@PathVariable Long id) { return null; }

    @PutMapping("/{id}/stock")
    void updateStock(@PathVariable Long id, @RequestBody StockUpdateRequest req) {}
}

// ============= Order Service =============
@Entity
@Table(name = "orders")
class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Long userId;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    List<OrderItem> items = new ArrayList<>();
    BigDecimal total;
    @Enumerated(EnumType.STRING) OrderStatus status;
    LocalDateTime createdAt;
}

@Entity
class OrderItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Long productId;
    Integer quantity;
    BigDecimal price;
}

@FeignClient(name = "user-service", path = "/api/users")
interface UserClient {
    @GetMapping("/{id}")
    UserResponse getUser(@PathVariable Long id);
}

@FeignClient(name = "product-service", path = "/api/products")
interface ProductClient {
    @GetMapping("/{id}")
    ProductResponse getProduct(@PathVariable Long id);

    @PutMapping("/{id}/stock")
    void updateStock(@PathVariable Long id, @RequestBody StockUpdateRequest req);
}

@Service
@RequiredArgsConstructor
class OrderService {
    private final OrderRepository orderRepo;
    private final UserClient userClient;
    private final ProductClient productClient;
    private final OrderEventPublisher eventPublisher;

    @CircuitBreaker(name = "createOrder", fallbackMethod = "createOrderFallback")
    @Transactional
    public OrderResponse createOrder(Long userId, CreateOrderRequest req) {
        // validate user
        UserResponse user = userClient.getUser(userId);

        Order order = new Order();
        order.setUserId(userId);
        order.setStatus(OrderStatus.PENDING);

        BigDecimal total = BigDecimal.ZERO;

        for (var itemReq : req.items()) {
            ProductResponse product = productClient.getProduct(itemReq.productId());

            if (product.stock() < itemReq.quantity()) {
                throw new BusinessException("Insufficient stock: " + product.name());
            }

            OrderItem item = new OrderItem();
            item.setProductId(product.id());
            item.setQuantity(itemReq.quantity());
            item.setPrice(product.price());
            order.getItems().add(item);

            total = total.add(product.price().multiply(
                BigDecimal.valueOf(itemReq.quantity())));

            // reserve stock
            productClient.updateStock(product.id(),
                new StockUpdateRequest(-itemReq.quantity()));
        }

        order.setTotal(total);
        order.setCreatedAt(LocalDateTime.now());
        Order saved = orderRepo.save(order);

        eventPublisher.publishOrderCreated(OrderEvent.from(saved));

        return OrderResponse.from(saved);
    }

    OrderResponse createOrderFallback(Long userId, CreateOrderRequest req, Throwable t) {
        throw new BusinessException("Order creation failed: " + t.getMessage());
    }
}

// ============= Kafka Events =============
@Service
@RequiredArgsConstructor
class OrderEventPublisher {
    private final KafkaTemplate<String, OrderEvent> kafka;

    public void publishOrderCreated(OrderEvent event) {
        kafka.send("order-events", event.orderId().toString(), event);
    }
}

@Service
@Slf4j
class NotificationConsumer {

    @KafkaListener(topics = "order-events", groupId = "notification-service")
    public void onOrderCreated(OrderEvent event) {
        log.info("Order created: {}", event);
        // send email/SMS
    }
}

record OrderEvent(Long orderId, Long userId, BigDecimal total, LocalDateTime createdAt) {
    static OrderEvent from(Order o) {
        return new OrderEvent(o.getId(), o.getUserId(), o.getTotal(), o.getCreatedAt());
    }
}`,
          },
        ],
      },
    ],
  },
  {
    id: "symfony-framework",
    slug: "symfony",
    title: "Symfony Framework Toàn tập",
    description:
      "Xây dựng ứng dụng web chuyên nghiệp với Symfony, Doctrine và API Platform",
    image: "/images/symfony-course.jpg",
    duration: "10 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu Symfony và Setup",
        slug: "gioi-thieu-symfony",
        duration: "50 phút",
        content: `# Giới thiệu Symfony

## Symfony là gì?
Symfony là framework PHP mạnh mẽ, linh hoạt, được sử dụng bởi nhiều dự án lớn như Drupal, Laravel (components), Magento.

## Ưu điểm
- **Reusable components**: Hơn 50 components độc lập
- **Flex**: Quản lý dependencies linh hoạt
- **Doctrine ORM**: Tích hợp sẵn
- **Console commands**: CLI mạnh mẽ
- **Testing**: PHPUnit tích hợp
- **Long-term support**: LTS versions

## Cài đặt

### Yêu cầu
- PHP 8.2+
- Composer
- Symfony CLI (khuyến nghị)

### Cài đặt Symfony CLI
\`\`\`bash
# macOS
brew install symfony-cli/tap/symfony-cli

# Linux
curl -sS https://get.symfony.com/cli/installer | bash

# Windows: tải từ https://symfony.com/download
\`\`\`

### Tạo project mới
\`\`\`bash
symfony new myapp --webapp
cd myapp
symfony serve -d
\`\`\`

## Cấu trúc project

\`\`\`
myapp/
├── bin/
│   └── console
├── config/
│   ├── packages/
│   ├── routes.yaml
│   └── services.yaml
├── migrations/
├── public/
│   └── index.php
├── src/
│   ├── Controller/
│   ├── Entity/
│   ├── Repository/
│   ├── Service/
│   ├── Form/
│   ├── Security/
│   └── Kernel.php
├── templates/
├── tests/
├── translations/
├── var/
├── vendor/
├── .env
├── composer.json
└── symfony.lock
\`\`\`

## Controller đầu tiên

\`\`\`php
<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class HelloController extends AbstractController
{
    #[Route('/hello', name: 'app_hello')]
    public function index(): Response
    {
        return new Response('<h1>Hello, Symfony!</h1>');
    }

    #[Route('/hello/{name}', name: 'app_hello_name')]
    public function greet(string $name): Response
    {
        return $this->render('hello/greet.html.twig', [
            'name' => $name,
        ]);
    }

    #[Route('/api/hello', name: 'api_hello', methods: ['GET'])]
    public function apiHello(): JsonResponse
    {
        return $this->json([
            'message' => 'Hello from Symfony API',
            'timestamp' => time(),
        ]);
    }
}
\`\`\`

## Twig Template

\`\`\`twig
{# templates/hello/greet.html.twig #}
{% extends 'base.html.twig' %}

{% block title %}Hello {{ name }}{% endblock %}

{% block body %}
    <h1>Hello, {{ name }}!</h1>
    <p>Welcome to Symfony</p>
{% endblock %}
\`\`\`

## Console Commands

\`\`\`bash
# Xem tất cả commands
php bin/console list

# Debug routes
php bin/console debug:router

# Clear cache
php bin/console cache:clear

# Generate entity
php bin/console make:entity

# Generate controller
php bin/console make:controller

# Database
php bin/console doctrine:database:create
php bin/console make:migration
php bin/console doctrine:migrations:migrate
\`\`\`

## Environment Variables

\`\`\`env
# .env
APP_ENV=dev
APP_SECRET=your-secret-key
DATABASE_URL="postgresql://user:pass@127.0.0.1:5432/myapp?serverVersion=15&charset=utf8"
MAILER_DSN=smtp://localhost:1025
\`\`\`

## Bài tập thực hành
Hãy tạo controller và routes đầu tiên!`,
        exercises: [
          {
            id: "1-1",
            title: "Controller cơ bản",
            description: "Tạo controller với nhiều routes",
            instructions: `Tạo ProductController với:
- GET /products - list
- GET /products/{id} - show one
- GET /api/products - JSON list
- GET /api/products/{id} - JSON one`,
            type: "code",
            starterCode: `<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\Routing\\Attribute\\Route;

class ProductController extends AbstractController
{
    // Viết code ở đây
}`,
            solution: `<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\JsonResponse;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

#[Route('/products')]
class ProductController extends AbstractController
{
    private array $products = [
        ['id' => 1, 'name' => 'Laptop', 'price' => 1000],
        ['id' => 2, 'name' => 'Mouse', 'price' => 20],
        ['id' => 3, 'name' => 'Keyboard', 'price' => 50],
    ];

    #[Route('', name: 'product_list', methods: ['GET'])]
    public function list(): Response
    {
        return $this->render('product/list.html.twig', [
            'products' => $this->products,
        ]);
    }

    #[Route('/{id}', name: 'product_show', methods: ['GET'], requirements: ['id' => '\\d+'])]
    public function show(int $id): Response
    {
        $product = null;
        foreach ($this->products as $p) {
            if ($p['id'] === $id) {
                $product = $p;
                break;
            }
        }

        if (!$product) {
            throw $this->createNotFoundException("Product $id not found");
        }

        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }

    #[Route('/api', name: 'api_product_list', methods: ['GET'])]
    public function apiList(): JsonResponse
    {
        return $this->json([
            'data' => $this->products,
            'count' => count($this->products),
        ]);
    }

    #[Route('/api/{id}', name: 'api_product_show', methods: ['GET'], requirements: ['id' => '\\d+'])]
    public function apiShow(int $id): JsonResponse
    {
        foreach ($this->products as $p) {
            if ($p['id'] === $id) {
                return $this->json($p);
            }
        }

        return $this->json(['error' => 'Not found'], 404);
    }
}`,
          },
        ],
      },
      {
        id: "2",
        title: "Doctrine ORM và Entities",
        slug: "doctrine-orm-entities",
        duration: "75 phút",
        prerequisites: ["1"],
        content: `# Doctrine ORM và Entities

## Entity với Attributes

\`\`\`php
<?php

namespace App\\Entity;

use App\\Repository\\UserRepository;
use Doctrine\\Common\\Collections\\ArrayCollection;
use Doctrine\\Common\\Collections\\Collection;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Security\\Core\\User\\UserInterface;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity(repositoryClass: UserRepository::class)]
#[ORM\\Table(name: 'users')]
#[ORM\\HasLifecycleCallbacks]
class User implements UserInterface
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 100)]
    #[Assert\\NotBlank]
    #[Assert\\Length(min: 2, max: 100)]
    private string $name;

    #[ORM\\Column(length: 180, unique: true)]
    #[Assert\\NotBlank]
    #[Assert\\Email]
    private string $email;

    #[ORM\\Column]
    private array $roles = [];

    #[ORM\\Column]
    private string $password;

    #[ORM\\OneToMany(mappedBy: 'author', targetEntity: Post::class, cascade: ['persist', 'remove'])]
    private Collection $posts;

    #[ORM\\Column(type: 'datetime_immutable')]
    private \\DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->createdAt = new \\DateTimeImmutable();
    }

    #[ORM\\PrePersist]
    public function onPrePersist(): void
    {
        $this->createdAt = new \\DateTimeImmutable();
    }

    // Getters và Setters...

    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function setName(string $name): static { $this->name = $name; return $this; }
    public function getEmail(): string { return $this->email; }
    public function setEmail(string $email): static { $this->email = $email; return $this; }
    public function getUserIdentifier(): string { return $this->email; }
    public function getRoles(): array { return array_unique([...$this->roles, 'ROLE_USER']); }
    public function getPassword(): string { return $this->password; }
    public function setPassword(string $p): static { $this->password = $p; return $this; }
    public function eraseCredentials(): void {}
}
\`\`\`

## Relations

### ManyToOne / OneToMany
\`\`\`php
#[ORM\\Entity]
class Post
{
    #[ORM\\ManyToOne(inversedBy: 'posts')]
    #[ORM\\JoinColumn(nullable: false)]
    private User $author;

    // ...
}
\`\`\`

### ManyToMany
\`\`\`php
#[ORM\\Entity]
class Post
{
    #[ORM\\ManyToMany(targetEntity: Tag::class, inversedBy: 'posts')]
    #[ORM\\JoinTable(name: 'post_tags')]
    private Collection $tags;
}
\`\`\`

## Repository

\`\`\`php
<?php

namespace App\\Repository;

use App\\Entity\\User;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function findByEmail(string $email): ?User
    {
        return $this->findOneBy(['email' => $email]);
    }

    /** @return User[] */
    public function findActiveUsers(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.active = :active')
            ->setParameter('active', true)
            ->orderBy('u.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function search(string $term): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.name LIKE :term OR u.email LIKE :term')
            ->setParameter('term', "%$term%")
            ->setMaxResults(20)
            ->getQuery()
            ->getResult();
    }
}
\`\`\`

## Migrations

\`\`\`bash
# Generate migration
php bin/console make:migration

# Run migrations
php bin/console doctrine:migrations:migrate

# Check status
php bin/console doctrine:migrations:status

# Rollback
php bin/console doctrine:migrations:migrate prev
\`\`\`

### Migration file example
\`\`\`php
final class Version20240101120000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create users table';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(180) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL
        )');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE users');
    }
}
\`\`\`

## Fixtures (Test data)

\`\`\`php
<?php

namespace App\\DataFixtures;

use App\\Entity\\User;
use Doctrine\\Bundle\\FixturesBundle\\Fixtures;
use Doctrine\\Persistence\\ObjectManager;
use Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface;

class AppFixtures extends Fixtures
{
    public function __construct(
        private UserPasswordHasherInterface $hasher
    ) {}

    public function load(ObjectManager $manager): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $user = new User();
            $user->setName("User $i");
            $user->setEmail("user$i@example.com");
            $user->setPassword($this->hasher->hashPassword($user, 'password'));
            $manager->persist($user);
        }

        $manager->flush();
    }
}
\`\`\`

\`\`\`bash
php bin/console doctrine:fixtures:load
\`\`\`

## Service sử dụng Repository

\`\`\`php
<?php

namespace App\\Service;

use App\\Entity\\User;
use App\\Repository\\UserRepository;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface;

class UserService
{
    public function __construct(
        private UserRepository $repository,
        private EntityManagerInterface $em,
        private UserPasswordHasherInterface $hasher
    ) {}

    public function create(string $name, string $email, string $password): User
    {
        if ($this->repository->findByEmail($email)) {
            throw new \\DomainException('Email already exists');
        }

        $user = new User();
        $user->setName($name);
        $user->setEmail($email);
        $user->setPassword($this->hasher->hashPassword($user, $password));

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }

    public function update(int $id, array $data): User
    {
        $user = $this->repository->find($id)
            ?? throw new \\DomainException('User not found');

        if (isset($data['name'])) $user->setName($data['name']);
        if (isset($data['email'])) $user->setEmail($data['email']);

        $this->em->flush();

        return $user;
    }

    public function delete(int $id): void
    {
        $user = $this->repository->find($id)
            ?? throw new \\DomainException('User not found');

        $this->em->remove($user);
        $this->em->flush();
    }
}
\`\`\`

## Bài tập thực hành
Hãy tạo entity Product với CRUD operations!`,
        exercises: [
          {
            id: "2-1",
            title: "Product Entity với CRUD",
            description: "Tạo entity và service cho Product",
            instructions: `Tạo:
1. Product entity với id, name, price, stock, createdAt
2. ProductRepository với custom queries
3. ProductService với CRUD
4. Migration và fixtures`,
            type: "code",
            starterCode: `<?php

namespace App\\Entity;

use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
class Product
{
    // Viết code ở đây
}`,
            solution: `<?php
// ============= Entity =============
namespace App\\Entity;

use App\\Repository\\ProductRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity(repositoryClass: ProductRepository::class)]
#[ORM\\HasLifecycleCallbacks]
class Product
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 200)]
    #[Assert\\NotBlank]
    #[Assert\\Length(max: 200)]
    private string $name;

    #[ORM\\Column(type: 'decimal', precision: 12, scale: 2)]
    #[Assert\\Positive]
    private string $price;

    #[ORM\\Column]
    #[Assert\\PositiveOrZero]
    private int $stock = 0;

    #[ORM\\Column(type: 'datetime_immutable')]
    private \\DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \\DateTimeImmutable();
    }

    #[ORM\\PreUpdate]
    public function onPreUpdate(): void {}

    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function setName(string $n): static { $this->name = $n; return $this; }
    public function getPrice(): string { return $this->price; }
    public function setPrice(string $p): static { $this->price = $p; return $this; }
    public function getStock(): int { return $this->stock; }
    public function setStock(int $s): static { $this->stock = $s; return $this; }
    public function getCreatedAt(): \\DateTimeImmutable { return $this->createdAt; }
}

// ============= Repository =============
namespace App\\Repository;

use App\\Entity\\Product;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    public function findInStock(): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.stock > 0')
            ->orderBy('p.name')
            ->getQuery()
            ->getResult();
    }

    public function search(string $term): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.name LIKE :term')
            ->setParameter('term', "%$term%")
            ->getQuery()
            ->getResult();
    }

    public function findExpensive(float $minPrice): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.price >= :min')
            ->setParameter('min', $minPrice)
            ->getQuery()
            ->getResult();
    }
}

// ============= Service =============
namespace App\\Service;

use App\\Entity\\Product;
use App\\Repository\\ProductRepository;
use Doctrine\\ORM\\EntityManagerInterface;

class ProductService
{
    public function __construct(
        private ProductRepository $repository,
        private EntityManagerInterface $em
    ) {}

    public function create(string $name, string $price, int $stock): Product
    {
        $product = new Product();
        $product->setName($name)
            ->setPrice($price)
            ->setStock($stock);

        $this->em->persist($product);
        $this->em->flush();

        return $product;
    }

    public function find(int $id): Product
    {
        return $this->repository->find($id)
            ?? throw new \\DomainException("Product $id not found");
    }

    public function all(): array
    {
        return $this->repository->findAll();
    }

    public function update(int $id, array $data): Product
    {
        $product = $this->find($id);

        if (isset($data['name'])) $product->setName($data['name']);
        if (isset($data['price'])) $product->setPrice($data['price']);
        if (isset($data['stock'])) $product->setStock($data['stock']);

        $this->em->flush();
        return $product;
    }

    public function delete(int $id): void
    {
        $this->em->remove($this->find($id));
        $this->em->flush();
    }
}`,
          },
        ],
      },
      {
        id: "3",
        title: "Forms, Validation và Security",
        slug: "forms-validation-security",
        duration: "80 phút",
        prerequisites: ["2"],
        content: `# Forms, Validation và Security trong Symfony

## Form Types

\`\`\`php
<?php

namespace App\\Form;

use App\\Entity\\User;
use Symfony\\Component\\Form\\AbstractType;
use Symfony\\Component\\Form\\FormBuilderInterface;
use Symfony\\Component\\OptionsResolver\\OptionsResolver;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\EmailType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\PasswordType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\RepeatedType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\TextType;
use Symfony\\Component\\Validator\\Constraints\\Length;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Full Name',
                'attr' => ['placeholder' => 'Enter your name'],
                'constraints' => [
                    new Length(['min' => 2, 'max' => 100]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email Address',
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Password'],
                'second_options' => ['label' => 'Confirm Password'],
                'invalid_message' => 'The passwords must match.',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
\`\`\`

## Form trong Controller

\`\`\`php
#[Route('/register', name: 'app_register')]
public function register(
    Request $request,
    UserService $userService
): Response {
    $user = new User();
    $form = $this->createForm(UserType::class, $user);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $userService->create($user);

        $this->addFlash('success', 'Registration successful!');
        return $this->redirectToRoute('app_login');
    }

    return $this->render('user/register.html.twig', [
        'form' => $form,
    ]);
}
\`\`\`

## Template cho Form

\`\`\`twig
{# templates/user/register.html.twig #}
{% extends 'base.html.twig' %}

{% block body %}
    <div class="container">
        <h1>Register</h1>

        {{ form_start(form) }}
            {{ form_row(form.name) }}
            {{ form_row(form.email) }}
            {{ form_row(form.password) }}

            <button type="submit" class="btn btn-primary">Register</button>
        {{ form_end(form) }}
    </div>
{% endblock %}
\`\`\`

## Custom Validator

\`\`\`php
<?php

namespace App\\Validator;

use Symfony\\Component\\Validator\\Constraint;

#[\Attribute]
class UniqueEmail extends Constraint
{
    public string $message = 'This email is already registered: {{ email }}';

    public function validatedBy(): string
    {
        return UniqueEmailValidator::class;
    }

    public function getTargets(): string
    {
        return self::CLASS_CONSTRAINT;
    }
}
\`\`\`

\`\`\`php
<?php

namespace App\\Validator;

use App\\Repository\\UserRepository;
use Symfony\\Component\\Validator\\Constraint;
use Symfony\\Component\\Validator\\ConstraintValidator;

class UniqueEmailValidator extends ConstraintValidator
{
    public function __construct(
        private UserRepository $repository
    ) {}

    public function validate(mixed $value, Constraint $constraint): void
    {
        if (!$value instanceof User) return;

        if ($this->repository->findByEmail($value->getEmail())) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ email }}', $value->getEmail())
                ->atPath('email')
                ->addViolation();
        }
    }
}
\`\`\`

## Security Configuration

### config/packages/security.yaml
\`\`\`yaml
security:
    password_hashers:
        App\\Entity\\User:
            algorithm: bcrypt
            cost: 12

    providers:
        app_user_provider:
            entity:
                class: App\\Entity\\User
                property: email

    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false

        api:
            pattern: ^/api
            stateless: true
            jwt: ~

        main:
            lazy: true
            provider: app_user_provider
            form_login:
                login_path: app_login
                check_path: app_login
                enable_csrf: true
                default_target_path: app_dashboard
            logout:
                path: app_logout
                target: app_home

    access_control:
        - { path: ^/login, roles: PUBLIC_ACCESS }
        - { path: ^/register, roles: PUBLIC_ACCESS }
        - { path: ^/admin, roles: ROLE_ADMIN }
        - { path: ^/api, roles: PUBLIC_ACCESS }
        - { path: ^/, roles: ROLE_USER }
\`\`\`

## Custom Security Voter

\`\`\`php
<?php

namespace App\\Security\\Voter;

use App\\Entity\\Post;
use App\\Entity\\User;
use Symfony\\Component\\Security\\Core\\Authorization\\Voter\\Voter;
use Symfony\\Component\\Security\\Core\\Security;

class PostVoter extends Voter
{
    public const VIEW = 'POST_VIEW';
    public const EDIT = 'POST_EDIT';
    public const DELETE = 'POST_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::VIEW, self::EDIT, self::DELETE])
            && $subject instanceof Post;
    }

    protected function voteOnAttribute(
        string $attribute,
        mixed $subject,
        TokenInterface $token
    ): bool {
        $user = $token->getUser();

        if (!$user instanceof User) return false;

        /** @var Post $post */
        $post = $subject;

        return match ($attribute) {
            self::VIEW => true,
            self::EDIT, self::DELETE => $this->isOwner($user, $post),
            default => false,
        };
    }

    private function isOwner(User $user, Post $post): bool
    {
        return $user === $post->getAuthor() || in_array('ROLE_ADMIN', $user->getRoles());
    }
}
\`\`\`

## Login Controller

\`\`\`php
#[Route('/login', name: 'app_login')]
class SecurityController extends AbstractController
{
    #[Route('', name: 'login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_dashboard');
        }

        $error = $authUtils->getLastAuthenticationError();
        $lastUsername = $authUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route('/logout', name: 'logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new \\LogicException('This method can be blank');
    }
}
\`\`\`

## Template Login

\`\`\`twig
{% extends 'base.html.twig' %}

{% block body %}
    <form method="post">
        {% if error %}
            <div class="alert alert-danger">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
        {% endif %}

        {% if app.user %}
            <div>You are logged in as {{ app.user.userIdentifier }}</div>
        {% endif %}

        <h1>Please sign in</h1>
        <label for="username">Email</label>
        <input type="email" value="{{ last_username }}" name="_username" id="username" required autofocus>

        <label for="password">Password</label>
        <input type="password" name="_password" id="password" required>

        <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}">

        <button type="submit">Sign in</button>
    </form>
{% endblock %}
\`\`\`

## Bài tập thực hành
Hãy implement registration và login hoàn chỉnh!`,
        exercises: [
          {
            id: "3-1",
            title: "User Registration & Login",
            description: "Implement authentication system",
            instructions: `Tạo:
1. Registration form với validation
2. Login form
3. Security configuration
4. Custom voter cho Post authorization`,
            type: "code",
            starterCode: `<?php

namespace App\\Form;

use Symfony\\Component\\Form\\AbstractType;

class RegistrationFormType extends AbstractType
{
    // Viết code ở đây
}`,
            solution: `<?php
// ============= RegistrationFormType =============
namespace App\\Form;

use App\\Entity\\User;
use Symfony\\Component\\Form\\AbstractType;
use Symfony\\Component\\Form\\FormBuilderInterface;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\EmailType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\PasswordType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\RepeatedType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\TextType;
use Symfony\\Component\\OptionsResolver\\OptionsResolver;
use Symfony\\Component\\Validator\\Constraints\\Length;
use Symfony\\Component\\Validator\\Constraints\\NotBlank;
use Symfony\\Component\\Validator\\Constraints\\Regex;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'constraints' => [
                    new NotBlank(['message' => 'Please enter your name']),
                    new Length(['min' => 2, 'max' => 100]),
                ],
            ])
            ->add('email', EmailType::class, [
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'mapped' => false,
                'first_options' => ['label' => 'Password'],
                'second_options' => ['label' => 'Confirm Password'],
                'invalid_message' => 'Passwords must match',
                'constraints' => [
                    new NotBlank(),
                    new Length(['min' => 8]),
                    new Regex([
                        'pattern' => '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$/',
                        'message' => 'Password must contain uppercase, lowercase, and digit',
                    ]),
                ],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue(['message' => 'You must agree to terms']),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => User::class]);
    }
}

// ============= RegisterController =============
namespace App\\Controller;

use App\\Entity\\User;
use App\\Form\\RegistrationFormType;
use App\\Service\\UserService;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'app_register', methods: ['GET', 'POST'])]
    public function register(Request $request, UserService $userService): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userService->createFromRegistration(
                $user,
                $form->get('plainPassword')->getData()
            );

            $this->addFlash('success', 'Registration successful!');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form,
        ]);
    }
}

// ============= UserService createFromRegistration =============
namespace App\\Service;

use App\\Entity\\User;

class UserService
{
    // ... existing code

    public function createFromRegistration(User $user, string $plainPassword): User
    {
        if ($this->repository->findByEmail($user->getEmail())) {
            throw new \\DomainException('Email already exists');
        }

        $user->setPassword($this->hasher->hashPassword($user, $plainPassword));

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }
}

// ============= Security.yaml =============
# security:
#   password_hashers:
#     App\\Entity\\User: { algorithm: bcrypt, cost: 12 }
#   providers:
#     app_user_provider:
#       entity: { class: App\\Entity\\User, property: email }
#   firewalls:
#     main:
#       lazy: true
#       provider: app_user_provider
#       form_login:
#         login_path: app_login
#         check_path: app_login
#         enable_csrf: true
#       logout:
#         path: app_logout
#         target: app_home
#   access_control:
#     - { path: ^/register, roles: PUBLIC_ACCESS }
#     - { path: ^/login, roles: PUBLIC_ACCESS }
#     - { path: ^/, roles: ROLE_USER }

// ============= PostVoter =============
namespace App\\Security\\Voter;

use App\\Entity\\Post;
use App\\Entity\\User;
use Symfony\\Component\\Security\\Core\\Authorization\\Voter\\Voter;
use Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface;

class PostVoter extends Voter
{
    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, ['EDIT', 'DELETE'])
            && $subject instanceof Post;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) return false;

        /** @var Post $post */
        $post = $subject;

        return $user === $post->getAuthor()
            || in_array('ROLE_ADMIN', $user->getRoles());
    }
}`,
          },
        ],
      },
      {
        id: "4",
        title: "API Platform",
        slug: "api-platform",
        duration: "70 phút",
        prerequisites: ["3"],
        content: `# API Platform

## Giới thiệu
API Platform giúp tạo REST API nhanh chóng với ít code.

## Cài đặt
\`\`\`bash
composer require api
\`\`\`

## Entity với API Resource

\`\`\`php
<?php

namespace App\\Entity;

use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\Delete;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\GetCollection;
use ApiPlatform\\Metadata\\Post;
use ApiPlatform\\Metadata\\Put;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Serializer\\Annotation\\Groups;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity]
#[ApiResource(
    operations: [
        new GetCollection(),
        new Get(),
        new Post(security: "is_granted('ROLE_USER')"),
        new Put(security: "is_granted('ROLE_USER') and object.getAuthor() == user"),
        new Delete(security: "is_granted('ROLE_ADMIN')"),
    ],
    normalizationContext: ['groups' => ['product:read']],
    denormalizationContext: ['groups' => ['product:write']],
    paginationItemsPerPage: 20,
)]
class Product
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    #[Groups(['product:read'])]
    private ?int $id = null;

    #[ORM\\Column(length: 200)]
    #[Assert\\NotBlank]
    #[Groups(['product:read', 'product:write'])]
    private string $name;

    #[ORM\\Column(type: 'text', nullable: true)]
    #[Groups(['product:read', 'product:write'])]
    private ?string $description = null;

    #[ORM\\Column(type: 'decimal', precision: 12, scale: 2)]
    #[Assert\\Positive]
    #[Groups(['product:read', 'product:write'])]
    private string $price;

    #[ORM\\Column]
    #[Assert\\PositiveOrZero]
    #[Groups(['product:read', 'product:write'])]
    private int $stock = 0;

    #[ORM\\Column(type: 'datetime_immutable')]
    #[Groups(['product:read'])]
    private \\DateTimeImmutable $createdAt;

    #[ORM\\ManyToOne(inversedBy: 'products')]
    #[Groups(['product:read', 'product:write'])]
    private ?Category $category = null;

    public function __construct()
    {
        $this->createdAt = new \\DateTimeImmutable();
    }

    // Getters/Setters...
}
\`\`\`

## Auto-generated endpoints

Khi bạn tạo ApiResource, các endpoints sau sẽ tự động có:
- \`GET /api/products\` - list with pagination
- \`GET /api/products/{id}\` - get one
- \`POST /api/products\` - create
- \`PUT /api/products/{id}\` - update
- \`PATCH /api/products/{id}\` - partial update
- \`DELETE /api/products/{id}\` - delete

## Filtering và Sorting

\`\`\`php
use ApiPlatform\\Doctrine\\Orm\\Filter\\SearchFilter;
use ApiPlatform\\Doctrine\\Orm\\Filter\\OrderFilter;
use ApiPlatform\\Metadata\\ApiFilter;

#[ApiResource]
#[ApiFilter(SearchFilter::class, properties: [
    'name' => 'partial',
    'category.id' => 'exact',
    'price' => 'exact',
])]
#[ApiFilter(OrderFilter::class, properties: ['createdAt', 'price'])]
class Product
{
    // ...
}
\`\`\`

### Query examples
\`\`\`
GET /api/products?name=laptop
GET /api/products?category.id=5
GET /api/products?order[price]=desc
GET /api/products?page=2
\`\`\`

## Custom Operations

\`\`\`php
#[ApiResource]
class Product
{
    #[Get(
        uriTemplate: '/products/{id}/related',
        controller: RelatedProductsController::class
    )]
    public function related(): array
    {
        return [];
    }
}
\`\`\`

## Serialization Groups

\`\`\`php
#[ApiResource(
    normalizationContext: ['groups' => ['product:read']],
    denormalizationContext: ['groups' => ['product:write']],
)]
class Product
{
    #[Groups(['product:read'])]
    private ?int $id = null;

    #[Groups(['product:read', 'product:write'])]
    private string $name;
}
\`\`\`

## DTOs

\`\`\`php
use ApiPlatform\\Metadata\\ApiResource;

#[ApiResource(
    stateOptions: new Options(
        itemUriTemplate: '/products/{id}',
        collectionUriTemplate: '/products',
    )
)]
class ProductInput
{
    public string $name;
    public string $price;
}
\`\`\`

## Security

\`\`\`php
#[ApiResource(
    operations: [
        new GetCollection(),
        new Get(),
        new Post(
            security: "is_granted('ROLE_USER')",
            securityMessage: "Only authenticated users can create products"
        ),
        new Put(
            security: "is_granted('EDIT', object)",
            securityMessage: "You can only edit your own products"
        ),
        new Delete(
            security: "is_granted('ROLE_ADMIN')",
            securityMessage: "Only admins can delete products"
        ),
    ],
)]
class Product {}
\`\`\`

## JWT Integration

\`\`\`bash
composer require lexik/jwt-authentication-bundle
\`\`\`

### Generate keys
\`\`\`bash
php bin/console lexik:jwt:generate-keypair
\`\`\`

### Config
\`\`\`yaml
# config/packages/lexik_jwt_authentication.yaml
lexik_jwt_authentication:
    secret_key: '%env(resolve:JWT_SECRET_KEY)%'
    public_key: '%env(resolve:JWT_PUBLIC_KEY)%'
    pass_phrase: '%env(JWT_PASSPHRASE)%'
    token_ttl: 3600
\`\`\`

### security.yaml
\`\`\`yaml
security:
    firewalls:
        login:
            pattern: ^/api/login
            stateless: true
            json_login:
                check_path: /api/login_check
                success_handler: lexik_jwt_authentication.handler.authentication_success
                failure_handler: lexik_jwt_authentication.handler.authentication_failure

        api:
            pattern: ^/api
            stateless: true
            jwt: ~
\`\`\`

### routes
\`\`\`yaml
api_login_check:
    path: /api/login_check
\`\`\`

## Testing

\`\`\`bash
# Test API with curl
curl -X GET http://localhost:8000/api/products

curl -X POST http://localhost:8000/api/products \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -d '{"name":"New Product","price":"99.99","stock":10}'
\`\`\`

## OpenAPI Docs
Mặc định API Platform tạo Swagger UI tại \`/api/docs\`.

## Bài tập thực hành
Hãy expose entity Product qua API Platform!`,
        exercises: [
          {
            id: "4-1",
            title: "Product REST API với API Platform",
            description: "Expose Product qua REST API",
            instructions: `Tạo:
1. ApiResource cho Product entity
2. Filters cho search và sort
3. Custom operations
4. Serialization groups
5. JWT protection`,
            type: "code",
            starterCode: `<?php

namespace App\\Entity;

use ApiPlatform\\Metadata\\ApiResource;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
#[ApiResource]
class Product
{
    // Viết code ở đây
}`,
            solution: `<?php

namespace App\\Entity;

use ApiPlatform\\Doctrine\\Orm\\Filter\\OrderFilter;
use ApiPlatform\\Doctrine\\Orm\\Filter\\SearchFilter;
use ApiPlatform\\Metadata\\ApiFilter;
use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\Delete;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\GetCollection;
use ApiPlatform\\Metadata\\Post;
use ApiPlatform\\Metadata\\Put;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Serializer\\Annotation\\Groups;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity]
#[ApiResource(
    operations: [
        new GetCollection(),
        new Get(),
        new Post(security: "is_granted('ROLE_USER')"),
        new Put(security: "is_granted('ROLE_USER')"),
        new Delete(security: "is_granted('ROLE_ADMIN')"),
    ],
    normalizationContext: ['groups' => ['product:read']],
    denormalizationContext: ['groups' => ['product:write']],
    paginationItemsPerPage: 20,
    paginationMaximumItemsPerPage: 100,
)]
#[ApiFilter(SearchFilter::class, properties: [
    'name' => 'partial',
    'category.id' => 'exact',
])]
#[ApiFilter(OrderFilter::class, properties: ['createdAt', 'price', 'name'])]
class Product
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    #[Groups(['product:read'])]
    private ?int $id = null;

    #[ORM\\Column(length: 200)]
    #[Assert\\NotBlank]
    #[Assert\\Length(max: 200)]
    #[Groups(['product:read', 'product:write'])]
    private string $name;

    #[ORM\\Column(type: 'text', nullable: true)]
    #[Groups(['product:read', 'product:write'])]
    private ?string $description = null;

    #[ORM\\Column(type: 'decimal', precision: 12, scale: 2)]
    #[Assert\\Positive]
    #[Groups(['product:read', 'product:write'])]
    private string $price;

    #[ORM\\Column]
    #[Assert\\PositiveOrZero]
    #[Groups(['product:read', 'product:write'])]
    private int $stock = 0;

    #[ORM\\Column(type: 'datetime_immutable')]
    #[Groups(['product:read'])]
    private \\DateTimeImmutable $createdAt;

    #[ORM\\ManyToOne(inversedBy: 'products')]
    #[Groups(['product:read', 'product:write'])]
    private ?Category $category = null;

    public function __construct()
    {
        $this->createdAt = new \\DateTimeImmutable();
    }

    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function setName(string $n): static { $this->name = $n; return $this; }
    public function getDescription(): ?string { return $this->description; }
    public function setDescription(?string $d): static { $this->description = $d; return $this; }
    public function getPrice(): string { return $this->price; }
    public function setPrice(string $p): static { $this->price = $p; return $this; }
    public function getStock(): int { return $this->stock; }
    public function setStock(int $s): static { $this->stock = $s; return $this; }
    public function getCreatedAt(): \\DateTimeImmutable { return $this->createdAt; }
    public function getCategory(): ?Category { return $this->category; }
    public function setCategory(?Category $c): static { $this->category = $c; return $this; }
}

// ============= Custom Operation Controller =============
namespace App\\Controller\\Api;

use App\\Entity\\Product;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;

class ProductRelatedController extends AbstractController
{
    public function __invoke(Product $data): Response
    {
        // $data is the Product automatically resolved by API Platform
        $related = [
            ['id' => 1, 'name' => 'Related Product 1'],
            ['id' => 2, 'name' => 'Related Product 2'],
        ];

        return $this->json($related);
    }
}

// ============= config/api_platform.yaml =============
# api_platform:
#   mapping:
#     paths: ['%kernel.project_dir%/src/Entity']
#   patch_formats:
#     json: ['application/merge-patch+json']
#   swagger:
#     versions: [3]

// ============= Usage examples =============
// GET /api/products
// GET /api/products?page=2&itemsPerPage=10
// GET /api/products?name=laptop
// GET /api/products?order[price]=desc
// POST /api/products (with JWT)
// PUT /api/products/1 (with JWT)
// DELETE /api/products/1 (with ROLE_ADMIN)
// GET /api/products/1/related (custom operation)`,
          },
        ],
      },
      {
        id: "5",
        title: "Testing trong Symfony",
        slug: "testing-symfony",
        duration: "60 phút",
        prerequisites: ["4"],
        content: `# Testing trong Symfony

## Setup

\`\`\`bash
composer require --dev symfony/test-pack
\`\`\`

## Unit Tests

\`\`\`php
<?php

namespace App\\Tests\\Service;

use App\\Entity\\User;
use App\\Repository\\UserRepository;
use App\\Service\\UserService;
use Doctrine\\ORM\\EntityManagerInterface;
use PHPUnit\\Framework\\TestCase;
use Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface;

class UserServiceTest extends TestCase
{
    private UserService $service;
    private UserRepository $repository;
    private EntityManagerInterface $em;
    private UserPasswordHasherInterface $hasher;

    protected function setUp(): void
    {
        $this->repository = $this->createMock(UserRepository::class);
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->hasher = $this->createMock(UserPasswordHasherInterface::class);

        $this->service = new UserService(
            $this->repository,
            $this->em,
            $this->hasher
        );
    }

    public function testCreateSuccess(): void
    {
        $this->repository
            ->method('findByEmail')
            ->willReturn(null);

        $this->hasher
            ->method('hashPassword')
            ->willReturn('hashed');

        $this->em
            ->expects($this->once())
            ->method('persist');
        $this->em
            ->expects($this->once())
            ->method('flush');

        $user = $this->service->create('John', 'john@example.com', 'pass');

        $this->assertSame('John', $user->getName());
        $this->assertSame('john@example.com', $user->getEmail());
    }

    public function testCreateDuplicateThrows(): void
    {
        $existing = new User();
        $this->repository
            ->method('findByEmail')
            ->willReturn($existing);

        $this->expectException(\\DomainException::class);

        $this->service->create('John', 'john@example.com', 'pass');
    }
}
\`\`\`

## Functional Tests

\`\`\`php
<?php

namespace App\\Tests\\Controller;

use App\\Entity\\User;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Test\\WebTestCase;
use Symfony\\Component\\BrowserKit\\AbstractBrowser;

class UserControllerTest extends WebTestCase
{
    private ?AbstractBrowser $client = null;

    protected function setUp(): void
    {
        $this->client = static::createClient();
    }

    public function testIndexRequiresAuth(): void
    {
        $this->client->request('GET', '/users');

        $this->assertResponseRedirects('/login');
    }

    public function testIndexWithAuth(): void
    {
        $user = $this->createUser('john@example.com');
        $this->client->loginUser($user);

        $this->client->request('GET', '/users');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Users');
    }

    public function testCreateUser(): void
    {
        $this->client->request('GET', '/register');
        $this->assertResponseIsSuccessful();

        $this->client->submitForm('Register', [
            'registration_form[name]' => 'John Doe',
            'registration_form[email]' => 'john@example.com',
            'registration_form[plainPassword][first]' => 'Password123',
            'registration_form[plainPassword][second]' => 'Password123',
            'registration_form[agreeTerms]' => true,
        ]);

        $this->assertResponseRedirects('/login');
        $this->client->followRedirect();

        $em = static::getContainer()->get(EntityManagerInterface::class);
        $user = $em->getRepository(User::class)
            ->findOneBy(['email' => 'john@example.com']);
        $this->assertNotNull($user);
    }

    private function createUser(string $email): User
    {
        $em = static::getContainer()->get(EntityManagerInterface::class);
        $user = new User();
        $user->setName('Test');
        $user->setEmail($email);
        $user->setPassword('hashed');
        $em->persist($user);
        $em->flush();
        return $user;
    }
}
\`\`\`

## API Tests

\`\`\`php
public function testCreateProductAPI(): void
{
    $this->client->jsonRequest('POST', '/api/products', [
        'name' => 'Laptop',
        'price' => '1000.00',
        'stock' => 10,
    ]);

    $this->assertResponseStatusCodeSame(201);
    $this->assertJsonContains(['name' => 'Laptop']);

    $data = json_decode($this->client->getResponse()->getContent(), true);
    $this->assertArrayHasKey('id', $data);
}
\`\`\`

## Fixtures trong tests

\`\`\`php
use App\\DataFixtures\\UserFixtures;
use Liip\\TestFixturesBundle\\Test\\FixturesTrait;

class UserFunctionalTest extends WebTestCase
{
    use FixturesTrait;

    public function testWithFixtures(): void
    {
        $this->loadFixtures([UserFixtures::class]);
        // ...
    }
}
\`\`\`

## Test cho Form Validation

\`\`\`php
public function testRegisterWithInvalidEmail(): void
{
    $this->client->request('GET', '/register');

    $this->client->submitForm('Register', [
        'registration_form[name]' => 'J',
        'registration_form[email]' => 'invalid-email',
        'registration_form[plainPassword][first]' => '123',
        'registration_form[plainPassword][second]' => '456',
    ]);

    $this->assertSelectorExists('.form-error-message');
    $this->assertSelectorTextContains('body', 'Passwords must match');
}
\`\`\`

## Test Database

### .env.test
\`\`\`env
DATABASE_URL="sqlite:///%kernel.project_dir%/var/test.db"
\`\`\`

### Config
\`\`\`yaml
# config/packages/test/doctrine.yaml
doctrine:
    dbal:
        driver: pdo_sqlite
\`\`\`

## Chạy tests

\`\`\`bash
# Chạy tất cả
php bin/phpunit

# Chạy 1 file
php bin/phpunit tests/Service/UserServiceTest.php

# Filter
php bin/phpunit --filter testCreateSuccess

# Coverage
php bin/phpunit --coverage-html var/coverage
\`\`\`

## Bài tập thực hành
Hãy viết tests cho API Product!`,
        exercises: [
          {
            id: "5-1",
            title: "Test Suite cho Product API",
            description: "Viết unit và functional tests",
            instructions: `Viết:
1. Unit test cho ProductService
2. Functional test cho ProductController
3. API test cho create/update/delete
4. Test authentication required`,
            type: "code",
            starterCode: `<?php

namespace App\\Tests;

use PHPUnit\\Framework\\TestCase;

class ProductTest extends TestCase
{
    // Viết tests ở đây
}`,
            solution: `<?php
// ============= Unit Test =============
namespace App\\Tests\\Service;

use App\\Entity\\Product;
use App\\Repository\\ProductRepository;
use App\\Service\\ProductService;
use Doctrine\\ORM\\EntityManagerInterface;
use PHPUnit\\Framework\\TestCase;

class ProductServiceTest extends TestCase
{
    private ProductService $service;
    private ProductRepository $repository;
    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        $this->repository = $this->createMock(ProductRepository::class);
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->service = new ProductService($this->repository, $this->em);
    }

    public function testCreate(): void
    {
        $this->em->expects($this->once())->method('persist');
        $this->em->expects($this->once())->method('flush');

        $p = $this->service->create('Laptop', '1000.00', 10);

        $this->assertSame('Laptop', $p->getName());
        $this->assertSame('1000.00', $p->getPrice());
        $this->assertSame(10, $p->getStock());
    }

    public function testFindNotFound(): void
    {
        $this->repository->method('find')->willReturn(null);
        $this->expectException(\\DomainException::class);
        $this->service->find(999);
    }

    public function testUpdate(): void
    {
        $p = new Product();
        $p->setName('Old');

        $this->repository->method('find')->willReturn($p);
        $this->em->expects($this->once())->method('flush');

        $updated = $this->service->update(1, ['name' => 'New']);

        $this->assertSame('New', $updated->getName());
    }

    public function testDelete(): void
    {
        $p = new Product();
        $this->repository->method('find')->willReturn($p);
        $this->em->expects($this->once())->method('remove')->with($p);
        $this->em->expects($this->once())->method('flush');

        $this->service->delete(1);
    }
}

// ============= Functional Test =============
namespace App\\Tests\\Controller;

use App\\Entity\\Product;
use App\\Entity\\User;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Test\\WebTestCase;

class ProductControllerTest extends WebTestCase
{
    public function testListRequiresAuth(): void
    {
        $client = static::createClient();
        $client->request('GET', '/products');
        $this->assertResponseRedirects('/login');
    }

    public function testListSuccess(): void
    {
        $client = static::createClient();
        $user = $this->createUser();
        $client->loginUser($user);

        $client->request('GET', '/products');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('h1');
    }

    public function testCreateProduct(): void
    {
        $client = static::createClient();
        $client->loginUser($this->createUser());

        $client->request('GET', '/products/new');
        $this->assertResponseIsSuccessful();

        $client->submitForm('Save', [
            'product[name]' => 'Laptop',
            'product[price]' => '1000.00',
            'product[stock]' => 10,
        ]);

        $this->assertResponseRedirects();
    }

    public function testCreateProductInvalidData(): void
    {
        $client = static::createClient();
        $client->loginUser($this->createUser());

        $client->request('GET', '/products/new');
        $client->submitForm('Save', [
            'product[name]' => '',
            'product[price]' => '-100',
            'product[stock]' => -1,
        ]);

        $this->assertSelectorExists('.form-error-message');
    }

    private function createUser(): User
    {
        $em = static::getContainer()->get(EntityManagerInterface::class);
        $u = new User();
        $u->setName('Test');
        $u->setEmail('test'.uniqid().'@example.com');
        $u->setPassword('hashed');
        $em->persist($u);
        $em->flush();
        return $u;
    }
}

// ============= API Test =============
namespace App\\Tests\\Api;

use App\\Entity\\Product;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Test\\WebTestCase;

class ProductApiTest extends WebTestCase
{
    public function testGetProducts(): void
    {
        $client = static::createClient();
        $client->request('GET', '/api/products');

        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testCreateProductRequiresAuth(): void
    {
        $client = static::createClient();
        $client->jsonRequest('POST', '/api/products', [
            'name' => 'Laptop',
            'price' => '1000.00',
        ]);

        $this->assertResponseStatusCodeSame(401);
    }

    public function testCreateProductWithAuth(): void
    {
        $client = static::createClient();
        $user = $this->createUser();
        $client->loginUser($user);

        $client->jsonRequest('POST', '/api/products', [
            'name' => 'Laptop',
            'price' => '1000.00',
            'stock' => 10,
        ]);

        $this->assertResponseStatusCodeSame(201);
        $data = json_decode($client->getResponse()->getContent(), true);
        $this->assertSame('Laptop', $data['name']);
    }

    private function createUser(): \\App\\Entity\\User
    {
        $em = static::getContainer()->get(EntityManagerInterface::class);
        $u = new \\App\\Entity\\User();
        $u->setName('Test');
        $u->setEmail('api'.uniqid().'@test.com');
        $u->setPassword('hashed');
        $em->persist($u);
        $em->flush();
        return $u;
    }
}`,
          },
        ],
      },
    ],
  },
  {
    id: "codeigniter-framework",
    slug: "codeigniter",
    title: "CodeIgniter 4 Framework",
    description: "Xây dựng web application nhanh với CodeIgniter 4, MVC và ORM",
    image: "/images/codeigniter-course.jpg",
    duration: "8 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu CodeIgniter 4 và Setup",
        slug: "gioi-thieu-codeigniter",
        duration: "45 phút",
        content: `# Giới thiệu CodeIgniter 4

## CodeIgniter là gì?
CodeIgniter là framework PHP nhẹ, nhanh, dễ học, được nhiều developer Việt Nam sử dụng.

## Ưu điểm
- **Nhẹ và nhanh**: Ít overhead
- **Dễ học**: Documentation rõ ràng
- **MVC pattern**: Quen thuộc với nhiều developer
- **Không cần Composer bắt buộc**: Có thể download zip
- **Built-in security**: CSRF, XSS protection
- **ORM đơn giản**: Query Builder

## Cài đặt

### Yêu cầu
- PHP 8.1+
- Extensions: intl, mbstring, json, mysqlnd (hoặc pdo)

### Cài đặt với Composer
\`\`\`bash
composer create-project codeigniter4/appstarter myapp
cd myapp
\`\`\`

### Cấu hình
\`\`\`bash
# Copy env file
cp env .env

# Generate encryption key
php spark key:generate
\`\`\`

### Chạy development server
\`\`\`bash
php spark serve
# Mở http://localhost:8080
\`\`\`

## Cấu trúc project

\`\`\`
myapp/
├── app/
│   ├── Config/
│   ├── Controllers/
│   ├── Database/
│   │   ├── Migrations/
│   │   └── Seeds/
│   ├── Filters/
│   ├── Models/
│   ├── Views/
│   ├── Helpers/
│   └── Libraries/
├── public/
│   ├── index.php
│   └── .htaccess
├── system/
├── tests/
├── vendor/
├── writable/
├── .env
├── composer.json
└── spark
\`\`\`

## Controller đầu tiên

\`\`\`php
<?php

namespace App\\Controllers;

use CodeIgniter\\Controller;

class Blog extends BaseController
{
    public function index(): string
    {
        $data = [
            'title' => 'My Blog',
            'posts' => [
                ['id' => 1, 'title' => 'First post', 'content' => 'Hello world'],
                ['id' => 2, 'title' => 'Second post', 'content' => 'Another one'],
            ],
        ];
        return view('blog/index', $data);
    }

    public function view(int $id): string
    {
        return "Post ID: $id";
    }

    public function api(): \\CodeIgniter\\HTTP\\ResponseInterface
    {
        return $this->response->setJSON([
            'status' => 'ok',
            'data' => ['message' => 'Hello from API'],
        ]);
    }
}
\`\`\`

## Routing

\`\`\`php
<?php
// app/Config/Routes.php

$routes->get('/', 'Home::index');
$routes->get('blog', 'Blog::index');
$routes->get('blog/(:num)', 'Blog::view/$1');

$routes->group('api/v1', ['namespace' => 'App\\Controllers\\Api'], function ($routes) {
    $routes->get('posts', 'PostController::index');
    $routes->get('posts/(:num)', 'PostController::show/$1');
    $routes->post('posts', 'PostController::create');
    $routes->put('posts/(:num)', 'PostController::update/$1');
    $routes->delete('posts/(:num)', 'PostController::delete/$1');
});
\`\`\`

## Views với Template

\`\`\`php
<!-- app/Views/blog/index.php -->
<!DOCTYPE html>
<html>
<head>
    <title><?= esc($title) ?></title>
</head>
<body>
    <h1><?= esc($title) ?></h1>
    <ul>
        <?php foreach ($posts as $post): ?>
            <li>
                <a href="/blog/<?= $post['id'] ?>"><?= esc($post['title']) ?></a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
\`\`\`

## Base Controller với Helpers

\`\`\`php
<?php

namespace App\\Controllers;

use CodeIgniter\\Controller;

abstract class BaseController extends Controller
{
    protected $helpers = ['form', 'url', 'text'];
    protected array $data = [];

    public function initController(
        \\CodeIgniter\\HTTP\\RequestInterface $request,
        \\CodeIgniter\\HTTP\\ResponseInterface $response,
        \\Psr\\Log\\LoggerInterface $logger
    ): void {
        parent::initController($request, $response, $logger);
        $this->data['title'] = 'My App';
    }
}
\`\`\`

## Bài tập thực hành
Hãy tạo controller và views đầu tiên!`,
        exercises: [
          {
            id: "1-1",
            title: "Product Controller",
            description: "Tạo CRUD controller cơ bản",
            instructions: `Tạo ProductController với:
- index: list products
- show: single product
- new: form tạo
- create: xử lý POST
- edit: form sửa
- update: xử lý PUT
- delete: xóa`,
            type: "code",
            starterCode: `<?php

namespace App\\Controllers;

use CodeIgniter\\Controller;

class Product extends BaseController
{
    // Viết code ở đây
}`,
            solution: `<?php

namespace App\\Controllers;

use CodeIgniter\\Controller;

class Product extends BaseController
{
    private array $products = [
        1 => ['id' => 1, 'name' => 'Laptop', 'price' => 1000, 'stock' => 10],
        2 => ['id' => 2, 'name' => 'Mouse', 'price' => 20, 'stock' => 100],
        3 => ['id' => 3, 'name' => 'Keyboard', 'price' => 50, 'stock' => 50],
    ];

    public function index(): string
    {
        return view('products/index', [
            'title' => 'Products',
            'products' => $this->products,
        ]);
    }

    public function show(int $id): string
    {
        if (!isset($this->products[$id])) {
            throw \\CodeIgniter\\Exceptions\\PageNotFoundException::forPageNotFound();
        }

        return view('products/show', [
            'title' => $this->products[$id]['name'],
            'product' => $this->products[$id],
        ]);
    }

    public function new(): string
    {
        return view('products/form', ['title' => 'New Product']);
    }

    public function create(): \\CodeIgniter\\HTTP\\ResponseInterface
    {
        $rules = [
            'name' => 'required|min_length[2]|max_length[200]',
            'price' => 'required|numeric|greater_than[0]',
            'stock' => 'required|integer|greater_than_equal_to[0]',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        // Save logic
        session()->setFlashdata('success', 'Product created');
        return redirect()->to('/products');
    }

    public function edit(int $id): string
    {
        if (!isset($this->products[$id])) {
            throw \\CodeIgniter\\Exceptions\\PageNotFoundException::forPageNotFound();
        }

        return view('products/form', [
            'title' => 'Edit Product',
            'product' => $this->products[$id],
        ]);
    }

    public function update(int $id): \\CodeIgniter\\HTTP\\ResponseInterface
    {
        $rules = [
            'name' => 'required|min_length[2]',
            'price' => 'required|numeric|greater_than[0]',
            'stock' => 'required|integer|greater_than_equal_to[0]',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        // Update logic
        session()->setFlashdata('success', 'Product updated');
        return redirect()->to('/products');
    }

    public function delete(int $id): \\CodeIgniter\\HTTP\\ResponseInterface
    {
        // Delete logic
        session()->setFlashdata('success', 'Product deleted');
        return redirect()->to('/products');
    }
}`,
          },
        ],
      },
      {
        id: "2",
        title: "Models, Migrations và Query Builder",
        slug: "models-migrations-query-builder",
        duration: "70 phút",
        prerequisites: ["1"],
        content: `# Models, Migrations và Query Builder

## Database Configuration

\`\`\`env
# .env
database.default.hostname = localhost
database.default.database = myapp
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
database.default.port = 3306
\`\`\`

## Migrations

### Tạo migration
\`\`\`bash
php spark make:migration CreateUsersTable
\`\`\`

### Migration file
\`\`\`php
<?php

namespace App\\Database\\Migrations;

use CodeIgniter\\Database\\Migration;

class CreateUsersTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ],
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => 180,
            ],
            'password' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);

        $this->forge->addKey('id', true);
        $this->forge->addUniqueKey('email');
        $this->forge->createTable('users');
    }

    public function down()
    {
        $this->forge->dropTable('users');
    }
}
\`\`\`

### Chạy migrations
\`\`\`bash
php spark migrate
php spark migrate:rollback
php spark migrate:status
\`\`\`

## Models

### Model cơ bản
\`\`\`php
<?php

namespace App\\Models;

use CodeIgniter\\Model;

class UserModel extends Model
{
    protected $table         = 'users';
    protected $primaryKey    = 'id';
    protected $returnType    = 'array';
    protected $useTimestamps = true;
    protected $allowedFields = ['name', 'email', 'password'];

    protected $validationRules = [
        'name' => 'required|min_length[2]|max_length[100]',
        'email' => 'required|valid_email|is_unique[users.email,id,{id}]',
        'password' => 'required|min_length[8]',
    ];

    protected $validationMessages = [
        'email' => [
            'is_unique' => 'Email already registered',
        ],
    ];

    public function findByEmail(string $email): ?array
    {
        return $this->where('email', $email)->first();
    }

    public function search(string $term): array
    {
        return $this->like('name', $term)
            ->orLike('email', $term)
            ->findAll();
    }
}
\`\`\`

### Entity Model
\`\`\`php
<?php

namespace App\\Models;

use CodeIgniter\\Entity\\Entity;

class User extends Entity
{
    protected $casts = [
        'id' => 'integer',
        'created_at' => 'datetime',
    ];

    protected $hidden = ['password'];

    protected $datamap = [
        'fullName' => 'name',
    ];

    public function setPassword(string $password): self
    {
        $this->attributes['password'] = password_hash($password, PASSWORD_DEFAULT);
        return $this;
    }
}
\`\`\`

## Query Builder

### CRUD với Model
\`\`\`php
// Insert
$model->insert(['name' => 'John', 'email' => 'john@example.com']);
$id = $model->getInsertID();

// Insert batch
$model->insertBatch([
    ['name' => 'Alice', 'email' => 'alice@example.com'],
    ['name' => 'Bob', 'email' => 'bob@example.com'],
]);

// Find
$user = $model->find(1);
$users = $model->findAll();
$users = $model->where('active', 1)->orderBy('name')->findAll(10, 0);
$user = $model->where('email', 'john@example.com')->first();

// Update
$model->update(1, ['name' => 'Jane']);
$model->where('active', 0)->set('status', 'inactive')->update();

// Delete
$model->delete(1);
$model->where('active', 0)->delete();

// Soft delete
class PostModel extends Model
{
    protected $useSoftDeletes = true;
    protected $deletedField    = 'deleted_at';
}
\`\`\`

### Query Builder API
\`\`\`php
$db = \\Config\\Database::connect();

// Basic query
$users = $db->table('users')
    ->where('active', 1)
    ->orderBy('name', 'ASC')
    ->limit(10)
    ->get()
    ->getResultArray();

// Joins
$posts = $db->table('posts')
    ->select('posts.*, users.name as author_name')
    ->join('users', 'users.id = posts.user_id')
    ->where('posts.published', 1)
    ->get()
    ->getResult();

// Aggregations
$count = $db->table('users')->countAll();
$sum = $db->table('orders')->selectSum('total')->get()->getRow();

// Raw queries
$db->query('SELECT * FROM users WHERE id = ?', [1]);
$db->query('SELECT * FROM users WHERE id = :id:', ['id' => 1]);
\`\`\`

## Seeds

\`\`\`php
<?php

namespace App\\Database\\Seeds;

use CodeIgniter\\Database\\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => password_hash('password', PASSWORD_DEFAULT),
            ],
        ];

        $this->db->table('users')->insertBatch($data);
    }
}
\`\`\`

\`\`\`bash
php spark db:seed UserSeeder
\`\`\`

## Pagination

\`\`\`php
<?php

namespace App\\Controllers;

class Blog extends BaseController
{
    public function index(): string
    {
        $model = new \\App\\Models\\PostModel();
        $data = [
            'posts' => $model->paginate(10),
            'pager' => $model->pager,
        ];
        return view('blog/index', $data);
    }
}
\`\`\`

\`\`\`php
// View
<?= $pager->links() ?>
\`\`\`

## Bài tập thực hành
Hãy tạo model Product với đầy đủ CRUD!`,
        exercises: [
          {
            id: "2-1",
            title: "Product Model với CRUD",
            description: "Implement Product với Query Builder",
            instructions: `Tạo:
1. Migration cho products table
2. ProductModel với validation
3. ProductService
4. Seed data`,
            type: "code",
            starterCode: `<?php

namespace App\\Models;

use CodeIgniter\\Model;

class ProductModel extends Model
{
    // Viết code ở đây
}`,
            solution: `<?php
// ============= Migration =============
namespace App\\Database\\Migrations;

use CodeIgniter\\Database\\Migration;

class CreateProductsTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => ['type' => 'INT', 'constraint' => 11, 'unsigned' => true, 'auto_increment' => true],
            'name' => ['type' => 'VARCHAR', 'constraint' => 200],
            'description' => ['type' => 'TEXT', 'null' => true],
            'price' => ['type' => 'DECIMAL', 'constraint' => '12,2'],
            'stock' => ['type' => 'INT', 'constraint' => 11, 'default' => 0],
            'created_at' => ['type' => 'DATETIME', 'null' => true],
            'updated_at' => ['type' => 'DATETIME', 'null' => true],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('products');
    }

    public function down()
    {
        $this->forge->dropTable('products');
    }
}

// ============= Model =============
namespace App\\Models;

use CodeIgniter\\Model;

class ProductModel extends Model
{
    protected $table         = 'products';
    protected $primaryKey    = 'id';
    protected $returnType    = 'array';
    protected $useTimestamps = true;
    protected $allowedFields = ['name', 'description', 'price', 'stock'];

    protected $validationRules = [
        'name' => 'required|min_length[2]|max_length[200]',
        'price' => 'required|numeric|greater_than[0]',
        'stock' => 'required|integer|greater_than_equal_to[0]',
    ];

    public function findInStock(): array
    {
        return $this->where('stock >', 0)->orderBy('name')->findAll();
    }

    public function search(string $term): array
    {
        return $this->groupStart()
            ->like('name', $term)
            ->orLike('description', $term)
            ->groupEnd()
            ->findAll();
    }

    public function updateStock(int $id, int $delta): bool
    {
        $product = $this->find($id);
        if (!$product) return false;

        $newStock = max(0, $product['stock'] + $delta);
        return $this->update($id, ['stock' => $newStock]);
    }
}

// ============= Service =============
namespace App\\Services;

use App\\Models\\ProductModel;

class ProductService
{
    public function __construct(
        private ProductModel $model = new ProductModel()
    ) {}

    public function create(array $data): int|false
    {
        if (!$this->model->validate($data)) {
            return false;
        }
        return $this->model->insert($data);
    }

    public function update(int $id, array $data): bool
    {
        if (!$this->model->validate($data)) {
            return false;
        }
        return $this->model->update($id, $data);
    }

    public function delete(int $id): bool
    {
        return $this->model->delete($id);
    }

    public function getErrors(): array
    {
        return $this->model->errors();
    }
}

// ============= Seed =============
namespace App\\Database\\Seeds;

use CodeIgniter\\Database\\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['name' => 'Laptop', 'price' => 1000.00, 'stock' => 10],
            ['name' => 'Mouse', 'price' => 20.00, 'stock' => 100],
            ['name' => 'Keyboard', 'price' => 50.00, 'stock' => 50],
        ];

        $this->db->table('products')->insertBatch($data);
    }
}`,
          },
        ],
      },
      {
        id: "3",
        title: "Validation, Security và Sessions",
        slug: "validation-security-sessions",
        duration: "65 phút",
        prerequisites: ["2"],
        content: `# Validation, Security và Sessions

## Validation

### Controller validation
\`\`\`php
public function store()
{
    $rules = [
        'name' => [
            'label' => 'Product Name',
            'rules' => 'required|min_length[2]|max_length[200]',
            'errors' => [
                'required' => 'Vui lòng nhập tên sản phẩm',
                'min_length' => 'Tên phải có ít nhất 2 ký tự',
            ],
        ],
        'email' => 'required|valid_email|is_unique[users.email]',
        'price' => 'required|numeric|greater_than[0]',
        'image' => [
            'rules' => 'uploaded[image]|max_size[image,2048]|is_image[image]|mime_in[image,image/jpg,image/jpeg,image/png]',
        ],
    ];

    if (!$this->validate($rules)) {
        return redirect()->back()->withInput()
            ->with('errors', $this->validator->getErrors());
    }

    // Valid data
    $data = $this->validator->getValidated();
    // ...
}
\`\`\`

### Custom validation rules
\`\`\`php
// app/Validation/MyRules.php
namespace App\\Validation;

class MyRules
{
    public function even(string $value): bool
    {
        return ((int) $value) % 2 === 0;
    }

    public function phone(string $value): bool
    {
        return preg_match('/^[0-9]{10,11}$/', $value) === 1;
    }
}

// Sử dụng
$rules = [
    'quantity' => 'required|even',
    'phone' => 'required|phone',
];
\`\`\`

## Security

### CSRF Protection
\`\`\`php
// Tự động khi dùng form helper
<?= form_open('products/create') ?>
    <?= csrf_field() ?>
    <input type="text" name="name">
    <button type="submit">Save</button>
<?= form_close() ?>
\`\`\`

### XSS Protection
\`\`\`php
// Escape output
<?= esc($data) ?>
<?= esc($data, 'html') ?>

// Trong controller
$data = $this->request->getPost('comment', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
\`\`\`

### Password Hashing
\`\`\`php
$hash = password_hash($password, PASSWORD_DEFAULT);
password_verify($input, $hash);
\`\`\`

### SQL Injection Prevention
\`\`\`php
// Query Builder (an toàn)
$db->table('users')->where('email', $email)->get();

// Query bindings
$db->query('SELECT * FROM users WHERE email = ?', [$email]);
$db->query('SELECT * FROM users WHERE email = :email:', ['email' => $email]);
\`\`\`

## Filters

### Tạo Filter
\`\`\`bash
php spark make:filter AuthFilter
\`\`\`

### AuthFilter
\`\`\`php
<?php

namespace App\\Filters;

use CodeIgniter\\Filters\\FilterInterface;
use CodeIgniter\\HTTP\\RequestInterface;
use CodeIgniter\\HTTP\\ResponseInterface;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if (!session()->get('user_id')) {
            return redirect()->to('/login');
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // ...
    }
}
\`\`\`

### Register filter trong Routes
\`\`\`php
$routes->group('admin', ['filter' => 'auth'], function ($routes) {
    $routes->get('dashboard', 'Admin\\Dashboard::index');
    $routes->get('users', 'Admin\\Users::index');
});
\`\`\`

### Config Filters
\`\`\`php
// app/Config/Filters.php
public array $aliases = [
    'csrf' => \\CodeIgniter\\Filters\\CSRF::class,
    'auth' => \\App\\Filters\\AuthFilter::class,
    'admin' => \\App\\Filters\\AdminFilter::class,
];

public array $globals = [
    'before' => [
        'csrf' => ['except' => ['api/*']],
    ],
];
\`\`\`

## Sessions

### Sử dụng Session
\`\`\`php
$session = session();

// Set
$session->set('user_id', 123);
$session->set([
    'name' => 'John',
    'role' => 'admin',
]);

// Get
$userId = $session->get('user_id');
$name = $session->get('name') ?? 'Guest';

// Check
if ($session->has('user_id')) { }

// Remove
$session->remove('user_id');

// Destroy all
$session->destroy();

// Flash data (1 lần)
$session->setFlashdata('success', 'Saved!');
// Trong view
<?php if (session()->has('success')): ?>
    <div class="alert"><?= session('success') ?></div>
<?php endif; ?>
\`\`\`

## Login System

\`\`\`php
<?php

namespace App\\Controllers;

class Auth extends BaseController
{
    public function login()
    {
        return view('auth/login');
    }

    public function attemptLogin()
    {
        $rules = [
            'email' => 'required|valid_email',
            'password' => 'required',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $model = new \\App\\Models\\UserModel();
        $user = $model->where('email', $email)->first();

        if (!$user || !password_verify($password, $user['password'])) {
            return redirect()->back()->withInput()
                ->with('error', 'Invalid credentials');
        }

        session()->set([
            'user_id' => $user['id'],
            'user_name' => $user['name'],
            'is_logged_in' => true,
        ]);

        return redirect()->to('/dashboard');
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('/login');
    }
}
\`\`\`

## CORS cho API

\`\`\`php
<?php

namespace App\\Filters;

use CodeIgniter\\Filters\\FilterInterface;
use CodeIgniter\\HTTP\\RequestInterface;
use CodeIgniter\\HTTP\\ResponseInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

        if ($request->getMethod() === 'options') {
            exit(0);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}
\`\`\`

## Bài tập thực hành
Hãy implement login system với session!`,
        exercises: [
          {
            id: "3-1",
            title: "Authentication System",
            description: "Implement login/logout với filter",
            instructions: `Tạo:
1. Login form và controller
2. Register với validation
3. AuthFilter để bảo vệ routes
4. Session management
5. Logout functionality`,
            type: "code",
            starterCode: `<?php

namespace App\\Controllers;

class Auth extends BaseController
{
    // Viết code ở đây
}`,
            solution: `<?php
// ============= AuthController =============
namespace App\\Controllers;

use App\\Models\\UserModel;

class Auth extends BaseController
{
    public function loginForm()
    {
        if (session()->get('user_id')) {
            return redirect()->to('/dashboard');
        }
        return view('auth/login');
    }

    public function registerForm()
    {
        if (session()->get('user_id')) {
            return redirect()->to('/dashboard');
        }
        return view('auth/register');
    }

    public function register()
    {
        $rules = [
            'name' => 'required|min_length[2]|max_length[100]',
            'email' => 'required|valid_email|is_unique[users.email]',
            'password' => 'required|min_length[8]|matches[password_confirm]',
            'password_confirm' => 'required',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        $model = new UserModel();
        $model->insert([
            'name' => $this->request->getPost('name'),
            'email' => $this->request->getPost('email'),
            'password' => password_hash(
                $this->request->getPost('password'),
                PASSWORD_DEFAULT
            ),
        ]);

        session()->setFlashdata('success', 'Đăng ký thành công! Vui lòng đăng nhập.');
        return redirect()->to('/login');
    }

    public function login()
    {
        $rules = [
            'email' => 'required|valid_email',
            'password' => 'required',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        $model = new UserModel();
        $user = $model->where('email', $this->request->getPost('email'))->first();

        if (!$user || !password_verify($this->request->getPost('password'), $user['password'])) {
            return redirect()->back()->withInput()
                ->with('error', 'Email hoặc mật khẩu không đúng');
        }

        session()->set([
            'user_id' => $user['id'],
            'user_name' => $user['name'],
            'user_email' => $user['email'],
        ]);

        return redirect()->to('/dashboard');
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('/login');
    }
}

// ============= AuthFilter =============
namespace App\\Filters;

use CodeIgniter\\Filters\\FilterInterface;
use CodeIgniter\\HTTP\\RequestInterface;
use CodeIgniter\\HTTP\\ResponseInterface;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if (!session()->get('user_id')) {
            return redirect()->to('/login');
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}

class GuestFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if (session()->get('user_id')) {
            return redirect()->to('/dashboard');
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}

// ============= Routes =============
// $routes->get('/login', 'Auth::loginForm', ['filter' => 'guest']);
// $routes->post('/login', 'Auth::login', ['filter' => 'guest']);
// $routes->get('/register', 'Auth::registerForm', ['filter' => 'guest']);
// $routes->post('/register', 'Auth::register', ['filter' => 'guest']);
// $routes->get('/logout', 'Auth::logout', ['filter' => 'auth']);
// $routes->group('dashboard', ['filter' => 'auth'], function ($routes) {
//     $routes->get('/', 'Dashboard::index');
// });

// ============= Views =============
/* app/Views/auth/login.php
<!DOCTYPE html>
<html>
<head><title>Đăng nhập</title></head>
<body>
    <h1>Đăng nhập</h1>

    <?php if (session()->has('error')): ?>
        <div class="alert alert-danger"><?= session('error') ?></div>
    <?php endif; ?>

    <?= form_open('/login') ?>
        <?= csrf_field() ?>
        <div>
            <label>Email</label>
            <input type="email" name="email" value="<?= old('email') ?>" required>
        </div>
        <div>
            <label>Mật khẩu</label>
            <input type="password" name="password" required>
        </div>
        <button type="submit">Đăng nhập</button>
    <?= form_close() ?>

    <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
</body>
</html>
*/`,
          },
        ],
      },
      {
        id: "4",
        title: "REST API với CodeIgniter",
        slug: "rest-api-codeigniter",
        duration: "70 phút",
        prerequisites: ["3"],
        content: `# REST API với CodeIgniter 4

## API Structure

\`\`\`
app/Controllers/Api/
├── BaseApiController.php
├── AuthController.php
├── PostController.php
└── ProductController.php
\`\`\`

## Base API Controller

\`\`\`php
<?php

namespace App\\Controllers\\Api;

use CodeIgniter\\Controller;
use CodeIgniter\\HTTP\\ResponseInterface;

abstract class BaseApiController extends Controller
{
    protected $format = 'json';

    protected function success($data = null, string $message = 'OK', int $code = 200): ResponseInterface
    {
        return $this->response->setStatusCode($code)->setJSON([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ]);
    }

    protected function error(string $message, int $code = 400, array $errors = []): ResponseInterface
    {
        return $this->response->setStatusCode($code)->setJSON([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ]);
    }

    protected function paginated(array $items, object $pager): ResponseInterface
    {
        return $this->success([
            'items' => $items,
            'pagination' => [
                'current_page' => $pager->getCurrentPage(),
                'total_pages' => $pager->getPageCount(),
                'per_page' => $pager->getPerPage(),
                'total_items' => $pager->getTotal(),
            ],
        ]);
    }
}
\`\`\`

## Resource Controller

\`\`\`php
<?php

namespace App\\Controllers\\Api;

use App\\Models\\ProductModel;

class ProductController extends BaseApiController
{
    private ProductModel $model;

    public function __construct()
    {
        $this->model = new ProductModel();
    }

    public function index(): ResponseInterface
    {
        $search = $this->request->getGet('q');
        $sort   = $this->request->getGet('sort') ?? 'id';
        $order  = $this->request->getGet('order') ?? 'ASC';
        $page   = (int) ($this->request->getGet('page') ?? 1);

        if (!in_array($sort, ['id', 'name', 'price', 'created_at'])) {
            $sort = 'id';
        }
        if (!in_array(strtoupper($order), ['ASC', 'DESC'])) {
            $order = 'ASC';
        }

        if ($search) {
            $this->model->groupStart()
                ->like('name', $search)
                ->orLike('description', $search)
                ->groupEnd();
        }

        $products = $this->model->orderBy($sort, $order)->paginate(20, 'default', $page);

        return $this->paginated($products, $this->model->pager);
    }

    public function show($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);

        if (!$product) {
            return $this->error('Product not found', 404);
        }

        return $this->success($product);
    }

    public function create(): ResponseInterface
    {
        $data = $this->request->getJSON(true);

        if (!$this->model->validate($data)) {
            return $this->error('Validation failed', 422, $this->model->errors());
        }

        $id = $this->model->insert($data);
        $product = $this->model->find($id);

        return $this->success($product, 'Product created', 201);
    }

    public function update($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);
        if (!$product) {
            return $this->error('Product not found', 404);
        }

        $data = $this->request->getJSON(true);

        if (!$this->model->validate($data)) {
            return $this->error('Validation failed', 422, $this->model->errors());
        }

        $this->model->update((int) $id, $data);

        return $this->success($this->model->find($id), 'Product updated');
    }

    public function delete($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);
        if (!$product) {
            return $this->error('Product not found', 404);
        }

        $this->model->delete((int) $id);
        return $this->success(null, 'Product deleted');
    }
}
\`\`\`

## JWT Authentication

### Cài đặt
\`\`\`bash
composer require firebase/php-jwt
\`\`\`

### JWT Service
\`\`\`php
<?php

namespace App\\Libraries;

use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;

class JwtService
{
    private string $secret;
    private int $ttl;
    private string $algo;

    public function __construct()
    {
        $this->secret = env('JWT_SECRET', 'your-secret-key');
        $this->ttl    = (int) env('JWT_TTL', 3600);
        $this->algo   = 'HS256';
    }

    public function generate(array $payload): string
    {
        $issuedAt = time();
        $expire = $issuedAt + $this->ttl;

        $data = array_merge($payload, [
            'iat' => $issuedAt,
            'exp' => $expire,
        ]);

        return JWT::encode($data, $this->secret, $this->algo);
    }

    public function decode(string $token): ?array
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secret, $this->algo));
            return (array) $decoded;
        } catch (\\Exception $e) {
            return null;
        }
    }

    public function getBearerToken(): ?string
    {
        $header = service('request')->getHeaderLine('Authorization');
        if (preg_match('/Bearer\\s(\\S+)/', $header, $matches)) {
            return $matches[1];
        }
        return null;
    }
}
\`\`\`

### Auth Controller
\`\`\`php
<?php

namespace App\\Controllers\\Api;

use App\\Libraries\\JwtService;
use App\\Models\\UserModel;

class AuthController extends BaseApiController
{
    public function login(): ResponseInterface
    {
        $data = $this->request->getJSON(true);

        if (empty($data['email']) || empty($data['password'])) {
            return $this->error('Email and password required', 422);
        }

        $model = new UserModel();
        $user = $model->where('email', $data['email'])->first();

        if (!$user || !password_verify($data['password'], $user['password'])) {
            return $this->error('Invalid credentials', 401);
        }

        $jwt = new JwtService();
        $token = $jwt->generate([
            'sub' => $user['id'],
            'email' => $user['email'],
        ]);

        return $this->success([
            'token' => $token,
            'type' => 'Bearer',
            'expires_in' => 3600,
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
            ],
        ], 'Login successful');
    }

    public function me(): ResponseInterface
    {
        $user = $this->request->user ?? null;
        return $this->success($user);
    }

    public function register(): ResponseInterface
    {
        $data = $this->request->getJSON(true);

        $rules = [
            'name' => 'required|min_length[2]|max_length[100]',
            'email' => 'required|valid_email|is_unique[users.email]',
            'password' => 'required|min_length[8]',
        ];

        $validation = \\Config\\Services::validation();
        $validation->setRules($rules);

        if (!$validation->run($data)) {
            return $this->error('Validation failed', 422, $validation->getErrors());
        }

        $model = new UserModel();
        $id = $model->insert([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
        ]);

        $jwt = new JwtService();
        $token = $jwt->generate(['sub' => $id, 'email' => $data['email']]);

        return $this->success(['token' => $token], 'Registration successful', 201);
    }
}
\`\`\`

### JWT Filter
\`\`\`php
<?php

namespace App\\Filters;

use App\\Libraries\\JwtService;
use CodeIgniter\\Filters\\FilterInterface;
use CodeIgniter\\HTTP\\RequestInterface;
use CodeIgniter\\HTTP\\ResponseInterface;

class JwtFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $jwt = new JwtService();
        $token = $jwt->getBearerToken();

        if (!$token) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['success' => false, 'message' => 'Token required']);
        }

        $payload = $jwt->decode($token);
        if (!$payload) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['success' => false, 'message' => 'Invalid or expired token']);
        }

        // Make user available to controller
        $request->user = $payload;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}
\`\`\`

## Routes

\`\`\`php
$routes->group('api/v1', ['namespace' => 'App\\Controllers\\Api'], function ($routes) {
    // Public
    $routes->post('auth/login', 'AuthController::login');
    $routes->post('auth/register', 'AuthController::register');

    // Protected
    $routes->group('', ['filter' => 'jwt'], function ($routes) {
        $routes->get('auth/me', 'AuthController::me');

        $routes->get('products', 'ProductController::index');
        $routes->get('products/(:num)', 'ProductController::show/$1');
        $routes->post('products', 'ProductController::create');
        $routes->put('products/(:num)', 'ProductController::update/$1');
        $routes->delete('products/(:num)', 'ProductController::delete/$1');
    });
});
\`\`\`

## API Response Format

\`\`\`json
{
    "success": true,
    "message": "OK",
    "data": {
        "id": 1,
        "name": "Laptop",
        "price": "1000.00"
    }
}
\`\`\`

## Testing với cURL

\`\`\`bash
# Login
curl -X POST http://localhost:8080/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"user@example.com","password":"password"}'

# Get products with token
curl -X GET http://localhost:8080/api/v1/products \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Create product
curl -X POST http://localhost:8080/api/v1/products \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"name":"New Product","price":99.99,"stock":10}'
\`\`\`

## Bài tập thực hành
Hãy build REST API hoàn chỉnh với JWT!`,
        exercises: [
          {
            id: "4-1",
            title: "REST API với JWT",
            description: "Build complete REST API",
            instructions: `Tạo:
1. BaseApiController với helpers
2. Product CRUD API
3. JWT authentication
4. Filter bảo vệ routes
5. Error handling`,
            type: "code",
            starterCode: `<?php

namespace App\\Controllers\\Api;

class ProductController extends BaseApiController
{
    // Viết code ở đây
}`,
            solution: `<?php
// ============= BaseApiController =============
namespace App\\Controllers\\Api;

use CodeIgniter\\Controller;
use CodeIgniter\\HTTP\\ResponseInterface;

abstract class BaseApiController extends Controller
{
    protected function success($data = null, string $message = 'OK', int $code = 200): ResponseInterface
    {
        return $this->response->setStatusCode($code)->setJSON([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ]);
    }

    protected function error(string $message, int $code = 400, array $errors = []): ResponseInterface
    {
        return $this->response->setStatusCode($code)->setJSON([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ]);
    }
}

// ============= ProductController =============
namespace App\\Controllers\\Api;

use App\\Models\\ProductModel;

class ProductController extends BaseApiController
{
    private ProductModel $model;

    public function __construct()
    {
        $this->model = new ProductModel();
    }

    public function index(): ResponseInterface
    {
        $search = $this->request->getGet('q') ?? '';
        $sort = $this->request->getGet('sort') ?? 'id';
        $order = strtoupper($this->request->getGet('order') ?? 'ASC');
        $perPage = (int) ($this->request->getGet('per_page') ?? 20);

        $allowed = ['id', 'name', 'price', 'created_at'];
        if (!in_array($sort, $allowed)) $sort = 'id';
        if (!in_array($order, ['ASC', 'DESC'])) $order = 'ASC';
        if ($perPage < 1 || $perPage > 100) $perPage = 20;

        if ($search) {
            $this->model
                ->groupStart()
                ->like('name', $search)
                ->orLike('description', $search)
                ->groupEnd();
        }

        $products = $this->model->orderBy($sort, $order)->paginate($perPage);

        return $this->success([
            'items' => $products,
            'pagination' => [
                'current_page' => $this->model->pager->getCurrentPage(),
                'total_pages' => $this->model->pager->getPageCount(),
                'per_page' => $perPage,
                'total' => $this->model->pager->getTotal(),
            ],
        ]);
    }

    public function show($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);
        if (!$product) return $this->error('Product not found', 404);
        return $this->success($product);
    }

    public function create(): ResponseInterface
    {
        $data = $this->request->getJSON(true) ?? [];

        if (!$this->model->validate($data)) {
            return $this->error('Validation failed', 422, $this->model->errors());
        }

        $id = $this->model->insert($data);
        return $this->success($this->model->find($id), 'Product created', 201);
    }

    public function update($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);
        if (!$product) return $this->error('Product not found', 404);

        $data = $this->request->getJSON(true) ?? [];

        if (!$this->model->validate($data)) {
            return $this->error('Validation failed', 422, $this->model->errors());
        }

        $this->model->update((int) $id, $data);
        return $this->success($this->model->find($id), 'Product updated');
    }

    public function delete($id = null): ResponseInterface
    {
        $product = $this->model->find((int) $id);
        if (!$product) return $this->error('Product not found', 404);

        $this->model->delete((int) $id);
        return $this->success(null, 'Product deleted');
    }
}

// ============= JwtService =============
namespace App\\Libraries;

use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;

class JwtService
{
    private string $secret;
    private int $ttl;

    public function __construct()
    {
        $this->secret = env('JWT_SECRET', 'change-me');
        $this->ttl = (int) env('JWT_TTL', 3600);
    }

    public function generate(array $payload): string
    {
        $now = time();
        return JWT::encode(
            array_merge($payload, ['iat' => $now, 'exp' => $now + $this->ttl]),
            $this->secret,
            'HS256'
        );
    }

    public function decode(string $token): ?array
    {
        try {
            return (array) JWT::decode($token, new Key($this->secret, 'HS256'));
        } catch (\\Exception) {
            return null;
        }
    }

    public function getBearerToken(): ?string
    {
        $header = service('request')->getHeaderLine('Authorization');
        return preg_match('/Bearer\\s(\\S+)/', $header, $m) ? $m[1] : null;
    }
}

// ============= JwtFilter =============
namespace App\\Filters;

use App\\Libraries\\JwtService;
use CodeIgniter\\Filters\\FilterInterface;
use CodeIgniter\\HTTP\\RequestInterface;
use CodeIgniter\\HTTP\\ResponseInterface;

class JwtFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $jwt = new JwtService();
        $token = $jwt->getBearerToken();

        if (!$token) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['success' => false, 'message' => 'Token required']);
        }

        $payload = $jwt->decode($token);
        if (!$payload) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['success' => false, 'message' => 'Invalid or expired token']);
        }

        $request->user = $payload;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}

// ============= Routes =============
// $routes->group('api/v1', ['namespace' => 'App\\Controllers\\Api'], function ($routes) {
//     $routes->post('auth/login', 'AuthController::login');
//     $routes->post('auth/register', 'AuthController::register');
//     $routes->group('', ['filter' => 'jwt'], function ($routes) {
//         $routes->get('auth/me', 'AuthController::me');
//         $routes->resource('products', ['controller' => 'ProductController']);
//     });
// });`,
          },
        ],
      },
    ],
  },
  {
    id: "ruby-on-rails",
    slug: "ruby-on-rails",
    title: "Ruby on Rails Toàn tập",
    description:
      "Xây dựng web app nhanh chóng với Rails, ActiveRecord và Hotwire",
    image: "/images/rails-course.jpg",
    duration: "10 tuần",
    level: "intermediate",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu Rails và Setup",
        slug: "gioi-thieu-rails",
        duration: "50 phút",
        content: `# Giới thiệu Ruby on Rails

## Rails là gì?
Rails là framework web full-stack viết bằng Ruby, nổi tiếng với triết lý "Convention over Configuration" và "Don't Repeat Yourself".

## Ưu điểm
- **Convention over Configuration**: Ít config, nhiều convention
- **ActiveRecord ORM**: ORM mạnh mẽ
- **Scaffolding**: Tạo CRUD nhanh
- **Migration**: Quản lý schema
- **Testing**: Tích hợp sẵn
- **Hotwire**: Modern frontend không cần nhiều JS

## Cài đặt

### Yêu cầu
- Ruby 3.2+
- Rails 7+
- Node.js (cho asset pipeline)
- Database (PostgreSQL khuyến nghị)

### Install Ruby
\`\`\`bash
# macOS với rbenv
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0

# Ubuntu
sudo apt install ruby-full
\`\`\`

### Install Rails
\`\`\`bash
gem install rails
rails --version
\`\`\`

### Tạo project
\`\`\`bash
rails new myapp --database=postgresql
cd myapp
bin/rails db:create
bin/rails server
\`\`\`

## Cấu trúc project

\`\`\`
myapp/
├── app/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   ├── helpers/
│   ├── jobs/
│   ├── mailers/
│   └── assets/
├── config/
│   ├── routes.rb
│   ├── database.yml
│   └── initializers/
├── db/
│   ├── migrate/
│   ├── schema.rb
│   └── seeds.rb
├── lib/
├── public/
├── test/ (hoặc spec/)
├── Gemfile
└── Gemfile.lock
\`\`\`

## MVC Flow

\`\`\`
Request → Routes → Controller → Model → View → Response
                          ↓
                     Database
\`\`\`

## Scaffolding

### Tạo full CRUD
\`\`\`bash
rails generate scaffold Post title:string body:text published:boolean
rails db:migrate
\`\`\`

Điều này tạo ra:
- Model, Migration
- Controller với 7 actions
- Views (index, show, new, edit)
- Routes
- Tests

## Controller cơ bản

\`\`\`ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Post was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_url, notice: 'Post was successfully destroyed.'
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end
\`\`\`

## Routes

\`\`\`ruby
# config/routes.rb
Rails.application.routes.draw do
  root 'home#index'

  resources :posts
  resources :users, only: [:index, :show]

  # Nested routes
  resources :posts do
    resources :comments, only: [:create, :destroy]
  end

  # API namespace
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  # Custom routes
  get '/about', to: 'pages#about'
  post '/contact', to: 'pages#contact'
end
\`\`\`

## Rails Console

\`\`\`bash
bin/rails console
# hoặc ngắn gọn
bin/rails c
\`\`\`

\`\`\`ruby
# Trong console
Post.all
Post.first
Post.where(published: true)
post = Post.new(title: 'Hello')
post.save
\`\`\`

## Generators

\`\`\`bash
# Model
rails g model Product name:string price:decimal stock:integer

# Controller
rails g controller Products index show

# Migration
rails g migration AddPublishedToPosts published:boolean

# Scaffold
rails g scaffold Category name:string
\`\`\`

## Bài tập thực hành
Hãy tạo ứng dụng blog đơn giản với scaffold!`,
        exercises: [
          {
            id: "1-1",
            title: "Blog cơ bản",
            description: "Tạo blog với scaffold",
            instructions: `Tạo:
1. Post model với title, body, published
2. Scaffold full CRUD
3. Custom index view hiển thị published posts
4. Routes cho posts`,
            type: "code",
            starterCode: `# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  # Viết code ở đây
end`,
            solution: `# ============= Terminal commands =============
# rails generate scaffold Post title:string body:text published:boolean
# rails db:migrate

# ============= app/models/post.rb =============
class Post < ApplicationRecord
  validates :title, presence: true, length: { minimum: 2, maximum: 200 }
  validates :body, presence: true

  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }

  def to_s
    title
  end
end

# ============= app/controllers/posts_controller.rb =============
class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  def index
    @posts = Post.recent
  end

  def show
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to post_url(@post), notice: "Post was successfully created." }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to post_url(@post), notice: "Post was successfully updated." }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post.destroy!

    respond_to do |format|
      format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end

# ============= app/views/posts/index.html.erb =============
# <h1>Posts</h1>
# <% @posts.each do |post| %>
#   <div>
#     <h2><%= link_to post.title, post %></h2>
#     <p><%= truncate(post.body, length: 200) %></p>
#     <small><%= post.published ? "Published" : "Draft" %></small>
#   </div>
# <% end %>
# <%= link_to "New Post", new_post_path %>

# ============= config/routes.rb =============
# Rails.application.routes.draw do
#   resources :posts do
#     resources :comments, only: [:create, :destroy]
#   end
#   root "posts#index"
# end`,
          },
        ],
      },
      {
        id: "2",
        title: "ActiveRecord và Migrations",
        slug: "activerecord-migrations",
        duration: "80 phút",
        prerequisites: ["1"],
        content: `# ActiveRecord và Migrations

## Migrations

### Tạo migration
\`\`\`bash
rails g migration CreateProducts name:string price:decimal stock:integer
\`\`\`

### Migration file
\`\`\`ruby
class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 12, scale: 2, null: false
      t.integer :stock, default: 0, null: false
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end

    add_index :products, :name
    add_index :products, [:category_id, :name], unique: true
  end
end
\`\`\`

### Migration commands
\`\`\`bash
rails db:migrate
rails db:rollback
rails db:migrate:status
rails db:reset
rails db:seed
\`\`\`

### Modify table
\`\`\`ruby
class AddPublishedToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :published_at, :datetime
    add_index :posts, :published_at

    add_reference :posts, :user, foreign_key: true

    change_column_null :posts, :title, false
    change_column_default :posts, :views, from: nil, to: 0
  end
end
\`\`\`

## Models

### Basic Model
\`\`\`ruby
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_secure_password

  validates :name, presence: true, length: { in: 2..100 }
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }

  before_save :downcase_email
  after_create :send_welcome_email

  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }

  private

  def downcase_email
    self.email = email.downcase
  end

  def send_welcome_email
    UserMailer.welcome(self).deliver_later
  end
end
\`\`\`

## Associations

### has_many / belongs_to
\`\`\`ruby
class Author < ApplicationRecord
  has_many :books, dependent: :destroy
  has_many :reviews, through: :books
end

class Book < ApplicationRecord
  belongs_to :author
  has_many :reviews, dependent: :destroy
end

class Review < ApplicationRecord
  belongs_to :book
  belongs_to :user
end
\`\`\`

### has_one
\`\`\`ruby
class User < ApplicationRecord
  has_one :profile, dependent: :destroy
end

class Profile < ApplicationRecord
  belongs_to :user
end
\`\`\`

### has_many :through
\`\`\`ruby
class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end

class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments
end

class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
end
\`\`\`

### Polymorphic
\`\`\`ruby
class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
end

class Post < ApplicationRecord
  has_many :comments, as: :commentable
end

class Photo < ApplicationRecord
  has_many :comments, as: :commentable
end
\`\`\`

## Querying

### Basic queries
\`\`\`ruby
# Find
User.all
User.first
User.last
User.find(1)
User.find([1, 2, 3])
User.find_by(email: 'user@example.com')
User.find_by!(email: 'user@example.com')

# Where
User.where(active: true)
User.where(age: 18..65)
User.where.not(role: 'admin')
User.where(created_at: 1.week.ago..)

# Order
User.order(:name)
User.order(created_at: :desc)
User.order(name: :asc, created_at: :desc)

# Limit và Offset
User.limit(10).offset(20)

# Select
User.select(:id, :name)

# Group và Having
Order.group(:user_id).having('count(*) > 5').count
Order.group(:status).sum(:total)

# Joins
User.joins(:posts).where(posts: { published: true })
User.left_joins(:posts).where(posts: { id: nil })

# Includes (N+1 prevention)
Post.includes(:comments, :author).all
\`\`\`

### Find or create
\`\`\`ruby
User.find_or_create_by(email: 'user@example.com') do |u|
  u.name = 'John'
end

User.find_or_initialize_by(email: 'user@example.com')

User.create_or_find_by(email: 'user@example.com')
\`\`\`

### Batch processing
\`\`\`ruby
User.find_each(batch_size: 100) do |user|
  # process user
end

User.find_in_batches(batch_size: 100) do |users|
  # process batch
end
\`\`\`

### Scopes
\`\`\`ruby
class Post < ApplicationRecord
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }
  scope :by_author, ->(author_id) { where(author_id: author_id) }
  scope :popular, -> { where('views > ?', 1000) }

  # Default scope (dùng cẩn thận)
  # default_scope { where(deleted_at: nil) }
end

Post.published.recent.by_author(1)
Post.published.where('views > ?', 100)
\`\`\`

## Callbacks

\`\`\`ruby
class Post < ApplicationRecord
  before_validation :normalize_title
  before_save :calculate_word_count
  after_save :update_search_index
  before_destroy :check_can_delete
  after_commit :send_notification, on: :create

  private

  def normalize_title
    self.title = title.strip if title.present?
  end

  def calculate_word_count
    self.word_count = body.split.size
  end

  def update_search_index
    SearchIndexJob.perform_later(self)
  end

  def check_can_delete
    throw :abort if locked?
  end

  def send_notification
    NotificationJob.perform_later(id)
  end
end
\`\`\`

## Seeds

\`\`\`ruby
# db/seeds.rb
10.times do |i|
  User.create!(
    name: "User #{i}",
    email: "user#{i}@example.com",
    password: "password123"
  )
end

User.find_each do |user|
  5.times do |i|
    user.posts.create!(
      title: "Post #{i} by #{user.name}",
      body: Faker::Lorem.paragraphs(number: 3).join("\\n\\n"),
      published: [true, false].sample
    )
  end
end
\`\`\`

\`\`\`bash
rails db:seed
rails db:reset  # drop + create + migrate + seed
\`\`\`

## Bài tập thực hành
Hãy tạo model với associations và queries!`,
        exercises: [
          {
            id: "2-1",
            title: "Blog với comments",
            description: "Tạo models với associations",
            instructions: `Tạo:
1. User model (name, email, password)
2. Post model (title, body, published, user_id)
3. Comment model (body, user_id, post_id)
4. Associations và validations
5. Scopes và queries`,
            type: "code",
            starterCode: `# app/models/user.rb
class User < ApplicationRecord
  # Viết code ở đây
end`,
            solution: `# ============= Migrations =============
# rails g model User name:string email:string password_digest:string
# rails g model Post title:string body:text published:boolean user:references
# rails g model Comment body:text user:references post:references
# rails db:migrate

# ============= app/models/user.rb =============
class User < ApplicationRecord
  has_secure_password

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :name, presence: true, length: { in: 2..100 }
  validates :email, presence: true,
                    uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save :downcase_email

  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }

  def display_name
    name.presence || email.split('@').first
  end

  private

  def downcase_email
    self.email = email.downcase.strip
  end
end

# ============= app/models/post.rb =============
class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: { in: 2..200 }
  validates :body, presence: true, length: { minimum: 10 }

  scope :published, -> { where(published: true) }
  scope :drafts, -> { where(published: false) }
  scope :recent, -> { order(created_at: :desc) }
  scope :by_author, ->(user_id) { where(user_id: user_id) }

  before_save :calculate_word_count

  def self.search(term)
    return all if term.blank?
    where('title ILIKE :q OR body ILIKE :q', q: "%#{term}%")
  end

  def author
    user
  end

  private

  def calculate_word_count
    self.word_count = body.to_s.split.size
  end
end

# ============= app/models/comment.rb =============
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post, counter_cache: true

  validates :body, presence: true, length: { in: 1..1000 }

  scope :recent, -> { order(created_at: :desc) }
end

# ============= Example queries =============
# User.active.recent.limit(10)
# Post.published.recent.includes(:user, :comments)
# Post.search("rails")
# User.find_by(email: 'john@example.com').posts.published
# Post.joins(:comments).group(:id).having('COUNT(comments.id) > 5')
# Post.includes(:comments).where(comments: { user_id: 1 })`,
          },
        ],
      },
      {
        id: "3",
        title: "Views, Helpers và Hotwire",
        slug: "views-helpers-hotwire",
        duration: "75 phút",
        prerequisites: ["2"],
        content: `# Views, Helpers và Hotwire

## ERB Templates

### Layout
\`\`\`erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title><%= content_for(:title) || "My App" %></title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>
  <body>
    <nav>
      <%= link_to "Home", root_path %>
      <%= link_to "Posts", posts_path %>
      <% if current_user %>
        <%= link_to "Logout", logout_path, method: :delete %>
      <% end %>
    </nav>

    <% flash.each do |type, msg| %>
      <div class="flash flash-<%= type %>"><%= msg %></div>
    <% end %>

    <main>
      <%= yield %>
    </main>
  </body>
</html>
\`\`\`

### Partials
\`\`\`erb
<!-- app/views/posts/_post.html.erb -->
<div class="post" id="<%= dom_id(post) %>">
  <h2><%= link_to post.title, post %></h2>
  <p><%= truncate(post.body, length: 200) %></p>
  <p>By <%= post.user.display_name %></p>
  <p>
    <%= link_to "Edit", edit_post_path(post) %> |
    <%= link_to "Delete", post, data: { turbo_method: :delete, turbo_confirm: "Sure?" } %>
  </p>
</div>

<!-- app/views/posts/index.html.erb -->
<h1>Posts</h1>
<div id="posts">
  <%= render @posts %>
</div>

<!-- Collection rendering -->
<%= render partial: "post", collection: @posts %>
\`\`\`

## View Helpers

### Common helpers
\`\`\`erb
<%= link_to "Edit", edit_post_path(@post) %>
<%= link_to "Delete", @post, method: :delete, data: { confirm: "Sure?" } %>

<%= image_tag "logo.png", alt: "Logo", class: "logo" %>
<%= image_tag @user.avatar.variant(resize_to_limit: [100, 100]) %>

<%= form_with(model: @post) do |form| %>
  <% if form.object.errors.any? %>
    <div class="errors">
      <h3><%= pluralize(form.object.errors.count, "error") %> prohibited saving:</h3>
      <ul>
        <% form.object.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <div>
    <%= form.label :title %>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :body %>
    <%= form.text_area :body %>
  </div>

  <div>
    <%= form.label :published %>
    <%= form.check_box :published %>
  </div>

  <%= form.submit %>
<% end %>

<%= truncate(post.body, length: 100, separator: ' ') %>
<%= pluralize(@posts.count, "post") %>
<%= number_to_currency(1000) %>
<%= time_ago_in_words(post.created_at) %>
\`\`\`

## Custom Helpers

\`\`\`ruby
# app/helpers/posts_helper.rb
module PostsHelper
  def published_badge(post)
    if post.published?
      content_tag(:span, "Published", class: "badge badge-success")
    else
      content_tag(:span, "Draft", class: "badge badge-warning")
    end
  end

  def post_excerpt(post, length: 200)
    truncate(strip_tags(post.body), length: length)
  end

  def author_avatar(user, size: 40)
    if user.avatar.attached?
      image_tag user.avatar.variant(resize_to_fill: [size, size]), class: "avatar"
    else
      content_tag(:div, user.name[0].upcase, class: "avatar avatar-initial")
    end
  end
end
\`\`\`

## Hotwire - Turbo

### Turbo Frames
\`\`\`erb
<!-- app/views/posts/index.html.erb -->
<h1>Posts</h1>

<!-- Search form inside frame -->
<%= turbo_frame_tag "posts_search" do %>
  <%= form_with url: posts_path, method: :get, data: { turbo_frame: "posts_search" } do |f| %>
    <%= f.search_field :q, value: params[:q], placeholder: "Search..." %>
  <% end %>

  <div id="posts">
    <%= render @posts %>
  </div>
<% end %>
\`\`\`

### Turbo Streams
\`\`\`ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)

    if @post.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @post, notice: "Post created" }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@post) }
      format.html { redirect_to posts_url }
    end
  end
end
\`\`\`

\`\`\`erb
<!-- app/views/posts/create.turbo_stream.erb -->
<%= turbo_stream.prepend "posts", @post %>
<%= turbo_stream.update "new_post_form", "" %>
<%= turbo_stream.replace "flash", partial: "shared/flash" %>
\`\`\`

### Turbo Broadcasts
\`\`\`ruby
class Post < ApplicationRecord
  after_create_commit -> { broadcast_prepend_to "posts", target: "posts" }
  after_update_commit -> { broadcast_replace_to "posts" }
  after_destroy_commit -> { broadcast_remove_to "posts" }
end
\`\`\`

## Stimulus Controllers

\`\`\`javascript
// app/javascript/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]
  static values = { open: Boolean }

  toggle() {
    this.menuTarget.classList.toggle("hidden")
    this.openValue = !this.openValue
  }

  hide(event) {
    if (!this.element.contains(event.target)) {
      this.menuTarget.classList.add("hidden")
      this.openValue = false
    }
  }
}
\`\`\`

\`\`\`erb
<div data-controller="dropdown" data-action="click@window->dropdown#hide">
  <button data-action="click->dropdown#toggle">Menu</button>
  <div data-dropdown-target="menu" class="hidden">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
  </div>
</div>
\`\`\`

## Forms với FormBuilder

\`\`\`ruby
# app/views/posts/_form.html.erb
<%= form_with(model: post, class: "post-form") do |form| %>
  <%= render "shared/errors", object: post %>

  <div class="field">
    <%= form.label :title %>
    <%= form.text_field :title, class: "form-control" %>
  </div>

  <div class="field">
    <%= form.label :body %>
    <%= form.text_area :body, rows: 10, class: "form-control" %>
  </div>

  <div class="field">
    <%= form.label :category_id %>
    <%= form.collection_select :category_id, Category.all, :id, :name,
                                { prompt: "Select category" },
                                { class: "form-select" } %>
  </div>

  <div class="actions">
    <%= form.submit class: "btn btn-primary" %>
  </div>
<% end %>
\`\`\`

## Bài tập thực hành
Hãy tạo views với Turbo Frames và Stimulus!`,
        exercises: [
          {
            id: "3-1",
            title: "Interactive Posts với Hotwire",
            description: "Tạo UI tương tác với Turbo và Stimulus",
            instructions: `Tạo:
1. Turbo Frame search cho posts
2. Inline edit form
3. Real-time comments với Turbo Streams
4. Stimulus controller cho like button`,
            type: "code",
            starterCode: `# app/views/posts/index.html.erb
<h1>Posts</h1>
# Viết views ở đây`,
            solution: `# ============= Turbo Frame Search =============
# app/views/posts/index.html.erb
<%= turbo_frame_tag "posts_frame" do %>
  <h1>Posts</h1>

  <%= form_with url: posts_path, method: :get,
                data: { turbo_frame: "posts_frame", turbo_action: "advance" } do |f| %>
    <%= f.search_field :q, value: params[:q],
                       placeholder: "Search posts...",
                       data: { action: "input->form#submit" } %>
  <% end %>

  <div id="posts">
    <%= render @posts %>
  </div>
<% end %>

<%= link_to "New Post", new_post_path,
            data: { turbo_frame: "modal" },
            class: "btn btn-primary" %>

<%= turbo_frame_tag "modal" %>

# ============= Inline Edit =============
# app/views/posts/_post.html.erb
<div id="<%= dom_id(post) %>">
  <%= turbo_frame_tag dom_id(post) do %>
    <h2><%= post.title %></h2>
    <p><%= post.body %></p>
    <%= link_to "Edit", edit_post_path(post) %>
  <% end %>
</div>

# app/views/posts/edit.html.erb
<%= turbo_frame_tag dom_id(@post) do %>
  <h1>Editing post</h1>
  <%= render "form", post: @post %>
  <%= link_to "Cancel", @post %>
<% end %>

# ============= Real-time Comments =============
# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  before_action :set_post

  def create
    @comment = @post.comments.build(comment_params.merge(user: current_user))

    if @comment.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @post }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@comment) }
      format.html { redirect_to @post }
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end

# app/views/comments/create.turbo_stream.erb
<%= turbo_stream.prepend "comments", @comment %>
<%= turbo_stream.update "comment_form", "" %>
<%= turbo_stream.replace "flash", partial: "shared/flash" %>

# app/views/posts/show.html.erb
<h1><%= @post.title %></h1>
<p><%= @post.body %></p>

<h2>Comments (<%= @post.comments.count %>)</h2>

<div id="comments">
  <%= render @post.comments %>
</div>

<%= turbo_frame_tag "comment_form" do %>
  <%= form_with(model: [@post, Comment.new]) do |f| %>
    <%= f.text_area :body, placeholder: "Your comment..." %>
    <%= f.submit "Post Comment" %>
  <% end %>
<% end %>

# ============= Like Button (Stimulus) =============
# app/javascript/controllers/like_controller.js
# import { Controller } from "@hotwired/stimulus"
#
# export default class extends Controller {
#   static targets = ["button", "count"]
#   static values = { postId: Number, liked: Boolean }
#
#   async toggle() {
#     const response = await fetch(\`/posts/\${this.postIdValue}/like\`, {
#       method: "POST",
#       headers: {
#         "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
#         "Accept": "application/json"
#       }
#     })
#
#     if (response.ok) {
#       const data = await response.json()
#       this.likedValue = data.liked
#       this.countTarget.textContent = data.count
#       this.buttonTarget.classList.toggle("liked", data.liked)
#     }
#   }
# }

# app/views/posts/_like.html.erb
# <div data-controller="like"
#      data-like-post-id-value="<%= post.id %>"
#      data-like-liked-value="<%= current_user&.liked?(post) %>">
#   <button data-action="click->like#toggle"
#           data-like-target="button"
#           class="like-btn <%= 'liked' if current_user&.liked?(post) %>">
#     ❤
#   </button>
#   <span data-like-target="count"><%= post.likes.count %></span>
# </div>`,
          },
        ],
      },
      {
        id: "4",
        title: "Authentication và Authorization",
        slug: "authentication-authorization-rails",
        duration: "70 phút",
        prerequisites: ["3"],
        content: `# Authentication và Authorization trong Rails

## Authentication

### Setup với bcrypt
\`\`\`ruby
# Gemfile
gem 'bcrypt', '~> 3.1.7'
\`\`\`

\`\`\`bash
bundle install
rails g model User name:string email:string password_digest:string
rails db:migrate
\`\`\`

### User Model
\`\`\`ruby
class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save { self.email = email.downcase }

  def self.from_omniauth(auth)
    # OAuth integration
  end
end
\`\`\`

### Sessions Controller
\`\`\`ruby
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email].downcase)

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in successfully"
    else
      flash.now[:alert] = "Invalid email or password"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
end
\`\`\`

### Current User Helper
\`\`\`ruby
class ApplicationController < ActionController::Base
  helper_method :current_user, :user_signed_in?

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  def require_login
    unless user_signed_in?
      redirect_to login_path, alert: "You must be logged in"
    end
  end

  def require_admin
    unless current_user&.admin?
      redirect_to root_path, alert: "Access denied"
    end
  end
end
\`\`\`

### Routes
\`\`\`ruby
Rails.application.routes.draw do
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :users, only: [:new, :create]
  resources :posts
end
\`\`\`

## Devise (Alternative)

\`\`\`ruby
# Gemfile
gem 'devise'
\`\`\`

\`\`\`bash
bundle install
rails g devise:install
rails g devise User
rails db:migrate
\`\`\`

### Devise Views
\`\`\`bash
rails g devise:views
\`\`\`

### Devise Configuration
\`\`\`ruby
# config/initializers/devise.rb
config.password_length = 8..128
config.timeout_in = 30.minutes
config.confirm_within = 3.days
\`\`\`

### Protected routes
\`\`\`ruby
class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = current_user.posts
  end
end
\`\`\`

## Authorization với Pundit

\`\`\`ruby
# Gemfile
gem 'pundit'
\`\`\`

\`\`\`bash
bundle install
rails g pundit:install
\`\`\`

### Application Policy
\`\`\`ruby
class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?; false; end
  def show?; false; end
  def create?; false; end
  def new?; create?; end
  def update?; false; end
  def edit?; update?; end
  def destroy?; false; end

  private

  def admin?
    user&.admin?
  end

  def owner?
    user && record.respond_to?(:user_id) && record.user_id == user.id
  end

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      raise NotImplementedError
    end

    private
    attr_reader :user, :scope
  end
end
\`\`\`

### Post Policy
\`\`\`ruby
class PostPolicy < ApplicationPolicy
  def index?; true; end
  def show?; record.published? || owner? || admin?; end
  def create?; user.present?; end
  def update?; owner? || admin?; end
  def destroy?; owner? || admin?; end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user
        scope.where(published: true).or(scope.where(user_id: user.id))
      else
        scope.where(published: true)
      end
    end
  end
end
\`\`\`

### Sử dụng trong Controller
\`\`\`ruby
class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @posts = policy_scope(Post)
  end

  def show
    @post = Post.find(params[:id])
    authorize @post
  end

  def edit
    @post = Post.find(params[:id])
    authorize @post
  end

  def create
    @post = current_user.posts.build(post_params)
    authorize @post

    if @post.save
      redirect_to @post
    else
      render :new
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end
\`\`\`

## Roles

### Simple enum-based roles
\`\`\`ruby
# Migration
add_column :users, :role, :string, default: 'user'
add_index :users, :role

# Model
class User < ApplicationRecord
  ROLES = %w[user moderator admin].freeze

  validates :role, inclusion: { in: ROLES }

  ROLES.each do |r|
    define_method "#{r}?" do
      role == r
    end
  end
end
\`\`\`

### Sử dụng trong views
\`\`\`erb
<% if current_user&.admin? %>
  <%= link_to "Admin", admin_path %>
<% end %>

<% if policy(@post).edit? %>
  <%= link_to "Edit", edit_post_path(@post) %>
<% end %>
\`\`\`

## JWT cho API

\`\`\`ruby
# Gemfile
gem 'jwt'
\`\`\`

\`\`\`ruby
# app/services/json_web_token.rb
class JsonWebToken
  SECRET_KEY = Rails.application.secret_key_base

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY).first
    HashWithIndifferentAccess.new(decoded)
  rescue JWT::ExpiredSignature, JWT::DecodeError
    nil
  end
end

# app/controllers/api/v1/auth_controller.rb
module Api
  module V1
    class AuthController < ApplicationController
      skip_before_action :verify_authenticity_token

      def login
        user = User.find_by(email: params[:email]&.downcase)

        if user&.authenticate(params[:password])
          token = JsonWebToken.encode(user_id: user.id)
          render json: { token: token, user: user.as_json(except: :password_digest) }
        else
          render json: { error: "Invalid credentials" }, status: :unauthorized
        end
      end

      def register
        user = User.new(user_params)

        if user.save
          token = JsonWebToken.encode(user_id: user.id)
          render json: { token: token, user: user.as_json(except: :password_digest) },
                 status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
    end
  end
end

# app/controllers/api/v1/base_controller.rb
module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate_request
      attr_reader :current_user

      private

      def authenticate_request
        header = request.headers['Authorization']
        token = header.split(' ').last if header

        decoded = JsonWebToken.decode(token)
        @current_user = User.find(decoded[:user_id]) if decoded

        unless @current_user
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
    end
  end
end
\`\`\`

## Bài tập thực hành
Hãy implement authentication + authorization!`,
        exercises: [
          {
            id: "4-1",
            title: "Auth System với Pundit",
            description: "Build auth với roles và policies",
            instructions: `Tạo:
1. Session-based authentication
2. Roles (user, admin)
3. Pundit policies cho Post
4. Protected routes
5. JWT API auth`,
            type: "code",
            starterCode: `# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  # Viết code ở đây
end`,
            solution: `# ============= ApplicationController =============
class ApplicationController < ActionController::Base
  include Pundit::Authorization

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  helper_method :current_user, :user_signed_in?

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  def require_login
    unless user_signed_in?
      session[:return_to] = request.fullpath
      redirect_to login_path, alert: "Bạn cần đăng nhập"
    end
  end

  def require_admin
    unless current_user&.admin?
      redirect_to root_path, alert: "Bạn không có quyền truy cập"
    end
  end

  def user_not_authorized
    flash[:alert] = "Bạn không có quyền thực hiện hành động này"
    redirect_to(request.referrer || root_path)
  end
end

# ============= SessionsController =============
class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:email].to_s.downcase)

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to session.delete(:return_to) || root_path,
                  notice: "Đăng nhập thành công"
    else
      flash.now[:alert] = "Email hoặc mật khẩu không đúng"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Đã đăng xuất"
  end
end

# ============= User model =============
class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy

  ROLES = %w[user moderator admin].freeze

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :role, inclusion: { in: ROLES }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save { self.email = email.downcase }

  ROLES.each do |r|
    define_method "#{r}?" do
      role == r
    end
  end

  def admin?
    role == 'admin'
  end
end

# ============= PostPolicy =============
class PostPolicy < ApplicationPolicy
  def index?; true; end
  def show?; record.published? || owner? || user&.admin?; end
  def create?; user.present?; end
  def update?; owner? || user&.admin?; end
  def destroy?; owner? || user&.admin?; end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user
        scope.where(published: true).or(scope.where(user_id: user.id))
      else
        scope.where(published: true)
      end
    end
  end
end

# ============= PostsController =============
class PostsController < ApplicationController
  before_action :require_login, except: [:index, :show]
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = policy_scope(Post).recent
  end

  def show
    authorize @post
  end

  def new
    @post = Post.new
    authorize @post
  end

  def create
    @post = current_user.posts.build(post_params)
    authorize @post

    if @post.save
      redirect_to @post, notice: "Tạo bài viết thành công"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    authorize @post

    if @post.update(post_params)
      redirect_to @post, notice: "Cập nhật thành công"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @post
    @post.destroy
    redirect_to posts_path, notice: "Đã xóa"
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end

# ============= Routes =============
# Rails.application.routes.draw do
#   get 'login', to: 'sessions#new'
#   post 'login', to: 'sessions#create'
#   delete 'logout', to: 'sessions#destroy'
#   get 'signup', to: 'users#new'
#   resources :users, only: [:new, :create]
#   resources :posts
#
#   namespace :admin do
#     resources :users
#   end
#
#   namespace :api do
#     namespace :v1 do
#       post 'auth/login', to: 'auth#login'
#       post 'auth/register', to: 'auth#register'
#       resources :posts
#     end
#   end
# end`,
          },
        ],
      },
      {
        id: "5",
        title: "Testing với RSpec",
        slug: "testing-rspec",
        duration: "70 phút",
        prerequisites: ["4"],
        content: `# Testing với RSpec

## Setup

\`\`\`ruby
# Gemfile
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'shoulda-matchers'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'database_cleaner-active_record'
end
\`\`\`

\`\`\`bash
bundle install
rails generate rspec:install
\`\`\`

## Model Specs

\`\`\`ruby
# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should have_secure_password }
  end

  describe 'associations' do
    it { should have_many(:posts).dependent(:destroy) }
  end

  describe '#admin?' do
    it 'returns true for admin users' do
      user = build(:user, role: 'admin')
      expect(user.admin?).to be true
    end

    it 'returns false for regular users' do
      user = build(:user, role: 'user')
      expect(user.admin?).to be false
    end
  end

  describe '#email' do
    it 'downcases email before save' do
      user = create(:user, email: 'JOHN@EXAMPLE.COM')
      expect(user.email).to eq('john@example.com')
    end
  end
end
\`\`\`

## Factories

\`\`\`ruby
# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.unique.email }
    password { 'password123' }
    role { 'user' }

    trait :admin do
      role { 'admin' }
    end

    trait :with_posts do
      transient do
        posts_count { 3 }
      end

      after(:create) do |user, evaluator|
        create_list(:post, evaluator.posts_count, user: user)
      end
    end
  end
end

# spec/factories/posts.rb
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence }
    body { Faker::Lorem.paragraphs(number: 3).join("\\n\\n") }
    published { true }
    association :user

    trait :draft do
      published { false }
    end
  end
end
\`\`\`

## Controller/Request Specs

\`\`\`ruby
# spec/requests/posts_spec.rb
require 'rails_helper'

RSpec.describe 'Posts', type: :request do
  let(:user) { create(:user) }
  let(:post_record) { create(:post, user: user) }

  describe 'GET /posts' do
    it 'returns success' do
      get posts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /posts/:id' do
    it 'shows the post' do
      get post_path(post_record)
      expect(response).to have_http_status(:success)
      expect(response.body).to include(post_record.title)
    end
  end

  describe 'POST /posts' do
    context 'when signed in' do
      before { sign_in(user) }

      it 'creates a new post' do
        expect {
          post posts_path, params: {
            post: { title: 'New', body: 'Body', published: true }
          }
        }.to change(Post, :count).by(1)

        expect(response).to redirect_to(post_path(Post.last))
      end

      it 'fails with invalid params' do
        expect {
          post posts_path, params: { post: { title: '' } }
        }.not_to change(Post, :count)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when not signed in' do
      it 'redirects to login' do
        post posts_path, params: { post: { title: 'New', body: 'Body' } }
        expect(response).to redirect_to(login_path)
      end
    end
  end
end
\`\`\`

### Authentication helper
\`\`\`ruby
# spec/support/request_helpers.rb
module RequestHelpers
  def sign_in(user)
    post login_path, params: { email: user.email, password: 'password123' }
  end
end

RSpec.configure do |config|
  config.include RequestHelpers, type: :request
end
\`\`\`

## Feature Specs (System Tests)

\`\`\`ruby
# spec/system/user_registration_spec.rb
require 'rails_helper'

RSpec.describe 'User registration', type: :system do
  before { driven_by(:rack_test) }

  it 'allows a user to register' do
    visit signup_path

    fill_in 'Name', with: 'John Doe'
    fill_in 'Email', with: 'john@example.com'
    fill_in 'Password', with: 'password123'
    fill_in 'Password confirmation', with: 'password123'

    click_button 'Sign up'

    expect(page).to have_content 'Welcome'
    expect(User.last.email).to eq('john@example.com')
  end

  it 'shows validation errors' do
    visit signup_path
    click_button 'Sign up'

    expect(page).to have_content "Name can't be blank"
  end
end

# spec/system/post_management_spec.rb
RSpec.describe 'Post management', type: :system do
  let(:user) { create(:user) }

  before do
    driven_by(:rack_test)
    visit login_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'password123'
    click_button 'Log in'
  end

  it 'creates a new post' do
    visit new_post_path
    fill_in 'Title', with: 'My First Post'
    fill_in 'Body', with: 'This is the content'
    check 'Published'
    click_button 'Create Post'

    expect(page).to have_content 'Post was successfully created'
    expect(page).to have_content 'My First Post'
  end
end
\`\`\`

## Policy Specs

\`\`\`ruby
# spec/policies/post_policy_spec.rb
require 'rails_helper'

RSpec.describe PostPolicy do
  subject { described_class }

  let(:user) { create(:user) }
  let(:other_user) { create(:user) }
  let(:admin) { create(:user, :admin) }
  let(:post) { create(:post, user: user) }

  permissions :show? do
    it 'allows owner' do
      expect(subject).to permit(user, post)
    end

    it 'allows admin' do
      expect(subject).to permit(admin, post)
    end

    it 'denies other users for unpublished' do
      draft = create(:post, :draft, user: user)
      expect(subject).not_to permit(other_user, draft)
    end
  end

  permissions :update?, :destroy? do
    it 'allows owner' do
      expect(subject).to permit(user, post)
    end

    it 'allows admin' do
      expect(subject).to permit(admin, post)
    end

    it 'denies other users' do
      expect(subject).not_to permit(other_user, post)
    end
  end
end
\`\`\`

## Job Specs

\`\`\`ruby
# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  include ActiveJob::TestHelper

  let(:user) { create(:user) }

  it 'queues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends an email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)
  end
end
\`\`\`

## Test Configuration

\`\`\`ruby
# spec/rails_helper.rb
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'

abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort e.to_s.strip
end

RSpec.configure do |config|
  config.fixture_paths = ["#{::Rails.root}/spec/fixtures"]
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  # FactoryBot
  config.include FactoryBot::Syntax::Methods

  # Devise test helpers
  # config.include Devise::Test::IntegrationHelpers, type: :request
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
\`\`\`

## Running Tests

\`\`\`bash
bundle exec rspec
bundle exec rspec spec/models
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/user_spec.rb:15  # specific line

# Coverage
COVERAGE=true bundle exec rspec
\`\`\`

## Bài tập thực hành
Hãy viết tests cho blog app!`,
        exercises: [
          {
            id: "5-1",
            title: "Test Suite cho Blog",
            description: "Viết tests với RSpec",
            instructions: `Viết:
1. Factory cho User và Post
2. Model specs với validations
3. Request specs cho controller
4. Feature spec cho CRUD flow
5. Policy specs`,
            type: "code",
            starterCode: `# spec/factories/users.rb
FactoryBot.define do
  # Viết factory ở đây
end`,
            solution: `# ============= spec/factories/users.rb =============
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.unique.email }
    password { 'password123' }
    role { 'user' }

    trait :admin do
      role { 'admin' }
    end

    trait :with_posts do
      transient do
        posts_count { 3 }
      end

      after(:create) do |user, evaluator|
        create_list(:post, evaluator.posts_count, user: user)
      end
    end
  end
end

# ============= spec/factories/posts.rb =============
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence(word_count: 5) }
    body { Faker::Lorem.paragraphs(number: 3).join("\\n\\n") }
    published { true }
    association :user

    trait :draft do
      published { false }
    end

    trait :old do
      created_at { 1.month.ago }
    end
  end
end

# ============= spec/models/user_spec.rb =============
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { build(:user) }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should validate_length_of(:name).is_at_least(2).is_at_most(100) }
  end

  describe 'associations' do
    it { should have_many(:posts).dependent(:destroy) }
  end

  describe 'callbacks' do
    it 'downcases email before save' do
      user = create(:user, email: 'TEST@EXAMPLE.COM')
      expect(user.reload.email).to eq('test@example.com')
    end
  end

  describe 'roles' do
    it 'defaults to user role' do
      expect(create(:user).role).to eq('user')
    end

    it 'returns true for admin?' do
      expect(build(:user, :admin).admin?).to be true
    end

    it 'returns false for regular user' do
      expect(build(:user).admin?).to be false
    end
  end
end

# ============= spec/models/post_spec.rb =============
require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'validations' do
    subject { build(:post) }

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:title).is_at_least(2).is_at_most(200) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:comments).dependent(:destroy) }
  end

  describe 'scopes' do
    let!(:published) { create(:post, published: true) }
    let!(:draft) { create(:post, :draft) }

    it 'returns only published posts' do
      expect(Post.published).to include(published)
      expect(Post.published).not_to include(draft)
    end

    it 'returns drafts' do
      expect(Post.drafts).to include(draft)
      expect(Post.drafts).not_to include(published)
    end

    it 'orders by recent first' do
      old = create(:post, created_at: 1.week.ago)
      expect(Post.recent.first).not_to eq(old)
    end
  end

  describe '.search' do
    let!(:rails_post) { create(:post, title: 'Learning Rails') }
    let!(:python_post) { create(:post, title: 'Python Guide') }

    it 'finds posts matching title' do
      expect(Post.search('rails')).to include(rails_post)
      expect(Post.search('rails')).not_to include(python_post)
    end

    it 'returns all when term blank' do
      expect(Post.search('').count).to eq(Post.count)
    end
  end
end

# ============= spec/requests/posts_spec.rb =============
require 'rails_helper'

RSpec.describe 'Posts API', type: :request do
  let(:user) { create(:user) }
  let(:valid_attributes) { attributes_for(:post) }

  describe 'GET /posts' do
    it 'returns success' do
      create_list(:post, 3)
      get posts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /posts' do
    context 'when authenticated' do
      before { sign_in(user) }

      it 'creates a post' do
        expect {
          post posts_path, params: { post: valid_attributes }
        }.to change(Post, :count).by(1)
      end

      it 'with invalid data returns 422' do
        expect {
          post posts_path, params: { post: { title: '' } }
        }.not_to change(Post, :count)
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when not authenticated' do
      it 'redirects to login' do
        post posts_path, params: { post: valid_attributes }
        expect(response).to redirect_to(login_path)
      end
    end
  end

  describe 'PUT /posts/:id' do
    let(:post_record) { create(:post, user: user) }
    before { sign_in(user) }

    it 'updates own post' do
      put post_path(post_record), params: { post: { title: 'Updated' } }
      expect(post_record.reload.title).to eq('Updated')
    end
  end

  describe 'DELETE /posts/:id' do
    let!(:post_record) { create(:post, user: user) }
    before { sign_in(user) }

    it 'deletes own post' do
      expect {
        delete post_path(post_record)
      }.to change(Post, :count).by(-1)
    end
  end
end

# ============= spec/system/post_flow_spec.rb =============
require 'rails_helper'

RSpec.describe 'Post workflow', type: :system do
  let(:user) { create(:user) }

  before do
    driven_by(:rack_test)
    sign_in_as(user)
  end

  it 'creates a post end-to-end' do
    visit new_post_path
    fill_in 'Title', with: 'My Post'
    fill_in 'Body', with: 'Post body content'
    check 'Published'
    click_button 'Create Post'

    expect(page).to have_content('Post was successfully created')
    expect(page).to have_content('My Post')
  end

  it 'shows validation errors' do
    visit new_post_path
    click_button 'Create Post'

    expect(page).to have_content("Title can't be blank")
  end

  def sign_in_as(user)
    visit login_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'password123'
    click_button 'Log in'
  end
end

# ============= spec/policies/post_policy_spec.rb =============
require 'rails_helper'

RSpec.describe PostPolicy do
  subject { described_class }

  let(:owner) { create(:user) }
  let(:stranger) { create(:user) }
  let(:admin) { create(:user, :admin) }
  let(:post_record) { create(:post, user: owner) }

  permissions :update?, :destroy? do
    it 'permits owner' do
      expect(subject).to permit(owner, post_record)
    end

    it 'permits admin' do
      expect(subject).to permit(admin, post_record)
    end

    it 'denies stranger' do
      expect(subject).not_to permit(stranger, post_record)
    end
  end

  permissions :show? do
    it 'permits everyone for published posts' do
      expect(subject).to permit(nil, post_record)
    end

    it 'denies stranger for drafts' do
      draft = create(:post, :draft, user: owner)
      expect(subject).not_to permit(stranger, draft)
    end
  end
end`,
          },
        ],
      },
      {
        id: "6",
        title: "Background Jobs và Action Mailer",
        slug: "background-jobs-mailer",
        duration: "60 phút",
        prerequisites: ["5"],
        content: `# Background Jobs và Action Mailer

## Active Job

### Tạo Job
\`\`\`bash
rails g job SendWelcomeEmail
\`\`\`

\`\`\`ruby
# app/jobs/send_welcome_email_job.rb
class SendWelcomeEmailJob < ApplicationJob
  queue_as :default

  retry_on StandardError, wait: :exponentially_longer, attempts: 3

  def perform(user_id)
    user = User.find(user_id)
    UserMailer.welcome(user).deliver_now
  end
end
\`\`\`

### Enqueue Job
\`\`\`ruby
SendWelcomeEmailJob.perform_later(user.id)
SendWelcomeEmailJob.set(wait: 1.hour).perform_later(user.id)
SendWelcomeEmailJob.set(wait_until: Date.tomorrow.noon).perform_later(user.id)
SendWelcomeEmailJob.set(queue: :high_priority).perform_later(user.id)
\`\`\`

### Job với arguments
\`\`\`ruby
class ProcessOrderJob < ApplicationJob
  queue_as :orders

  discard_on ActiveRecord::RecordNotFound

  def perform(order)
    # ActiveRecord objects được serialize tự động
    order.process!
  end
end

ProcessOrderJob.perform_later(order)
\`\`\`

## Action Mailer

### Generate Mailer
\`\`\`bash
rails g mailer UserMailer welcome password_reset
\`\`\`

### Mailer Class
\`\`\`ruby
# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  default from: 'noreply@myapp.com'

  def welcome(user)
    @user = user
    @login_url = login_url

    mail(
      to: @user.email,
      subject: "Welcome to MyApp!"
    )
  end

  def password_reset(user)
    @user = user
    @reset_url = edit_password_reset_url(user.reset_token)

    mail(to: @user.email, subject: "Reset your password")
  end
end
\`\`\`

### Views
\`\`\`erb
<!-- app/views/user_mailer/welcome.html.erb -->
<h1>Welcome, <%= @user.name %>!</h1>

<p>Thanks for signing up. We're excited to have you.</p>

<p><%= link_to "Log in here", @login_url %></p>

<p>Best regards,<br>The MyApp Team</p>

<!-- app/views/user_mailer/welcome.text.erb -->
Welcome, <%= @user.name %>!

Thanks for signing up. Log in here: <%= @login_url %>

Best regards,
The MyApp Team
\`\`\`

### Application Mailer Layout
\`\`\`erb
<!-- app/views/layouts/mailer.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
      body { font-family: Arial, sans-serif; }
      .header { background: #333; color: white; padding: 20px; }
      .content { padding: 20px; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>MyApp</h1>
    </div>
    <div class="content">
      <%= yield %>
    </div>
  </body>
</html>
\`\`\`

## Configuration

### SMTP cho development (Mailcatcher/Mailhog)
\`\`\`ruby
# config/environments/development.rb
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: 'localhost',
  port: 1025
}
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
\`\`\`

### Production (Postmark, SendGrid, SES)
\`\`\`ruby
# config/environments/production.rb
config.action_mailer.delivery_method = :postmark
config.action_mailer.postmark_settings = {
  api_token: Rails.application.credentials.postmark_api_token
}
config.action_mailer.default_url_options = { host: 'myapp.com' }
\`\`\`

## Job Backends

### Sidekiq (Redis)
\`\`\`ruby
# Gemfile
gem 'sidekiq'
gem 'sidekiq-cron'

# config/application.rb
config.active_job.queue_adapter = :sidekiq
\`\`\`

\`\`\`yaml
# config/sidekiq.yml
:concurrency: 5
:queues:
  - [critical, 3]
  - [default, 2]
  - [low, 1]
\`\`\`

### Solid Queue (Rails 8 default)
\`\`\`ruby
config.active_job.queue_adapter = :solid_queue
\`\`\`

\`\`\`bash
bin/rails solid_queue:start
\`\`\`

## Recurring Jobs

### sidekiq-cron
\`\`\`ruby
# config/initializers/sidekiq.rb
schedule = {
  'daily_digest' => {
    'cron' => '0 8 * * *',
    'class' => 'DailyDigestJob',
    'queue' => 'default'
  },
  'cleanup_job' => {
    'cron' => '0 2 * * 0',
    'class' => 'CleanupJob',
    'queue' => 'low'
  }
}

Sidekiq::Cron::Job.load_from_hash(schedule)
\`\`\`

### Solid Queue recurring
\`\`\`yaml
# config/recurring.yml
production:
  daily_digest:
    class: DailyDigestJob
    schedule: every day at 8am

  cleanup:
    class: CleanupJob
    schedule: every sunday at 2am
\`\`\`

## Job Patterns

### Batch processing
\`\`\`ruby
class ProcessBatchJob < ApplicationJob
  def perform(user_ids)
    User.where(id: user_ids).find_each do |user|
      ProcessUserJob.perform_later(user.id)
    end
  end
end

# Enqueue
user_ids = User.pluck(:id)
ProcessBatchJob.perform_later(user_ids)
\`\`\`

### Job chaining
\`\`\`ruby
class ImportDataJob < ApplicationJob
  def perform(file_path)
    result = import_file(file_path)
    NotifyImportCompleteJob.perform_later(result.id)
  end
end
\`\`\`

### Idempotent jobs
\`\`\`ruby
class ChargeCustomerJob < ApplicationJob
  def perform(order_id)
    order = Order.find(order_id)
    return if order.paid?  # idempotency

    PaymentGateway.charge(order)
    order.mark_as_paid!
  end
end
\`\`\`

## Monitoring

### Sidekiq Web UI
\`\`\`ruby
# config/routes.rb
require 'sidekiq/web'
mount Sidekiq::Web => '/sidekiq'

# Với basic auth
authenticate :user, ->(u) { u.admin? } do
  mount Sidekiq::Web => '/sidekiq'
end
\`\`\`

## Mailer Preview

\`\`\`ruby
# test/mailers/previews/user_mailer_preview.rb
class UserMailerPreview < ActionMailer::Preview
  def welcome
    UserMailer.welcome(User.first)
  end

  def password_reset
    UserMailer.password_reset(User.first)
  end
end
\`\`\`

Truy cập \`/rails/mailers\` trong development.

## Test Jobs và Mailers

\`\`\`ruby
# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  let(:user) { create(:user) }

  it 'queues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends welcome email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)
  end

  it 'retries on error' do
    allow(UserMailer).to receive(:welcome).and_raise(StandardError)
    expect {
      described_class.perform_now(user.id)
    }.to have_enqueued_job(described_class)
  end
end

# spec/mailers/user_mailer_spec.rb
require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  let(:user) { create(:user) }

  describe '#welcome' do
    let(:mail) { described_class.welcome(user) }

    it 'renders the subject' do
      expect(mail.subject).to eq('Welcome to MyApp!')
    end

    it 'sends to user email' do
      expect(mail.to).to eq([user.email])
    end

    it 'sends from noreply' do
      expect(mail.from).to eq(['noreply@myapp.com'])
    end

    it 'includes user name in body' do
      expect(mail.body.encoded).to include(user.name)
    end
  end
end
\`\`\`

## Bài tập thực hành
Hãy tạo welcome email job và mailer!`,
        exercises: [
          {
            id: "6-1",
            title: "Welcome Email Flow",
            description: "Implement email workflow với jobs",
            instructions: `Tạo:
1. UserMailer với welcome email
2. SendWelcomeEmailJob
3. Trigger từ User model
4. Tests cho cả job và mailer
5. Mailer preview`,
            type: "code",
            starterCode: `# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  # Viết code ở đây
end`,
            solution: `# ============= UserMailer =============
class UserMailer < ApplicationMailer
  default from: 'noreply@myapp.com'

  def welcome(user)
    @user = user
    @login_url = login_url
    @support_email = 'support@myapp.com'

    mail(
      to: @user.email,
      subject: "Chào mừng #{@user.name} đến với MyApp!"
    )
  end

  def password_reset(user)
    @user = user
    @reset_token = user.signed_id(purpose: :password_reset, expires_in: 15.minutes)
    @reset_url = edit_password_reset_url(@reset_token)

    mail(to: @user.email, subject: 'Reset mật khẩu của bạn')
  end
end

# ============= SendWelcomeEmailJob =============
class SendWelcomeEmailJob < ApplicationJob
  queue_as :mailers

  retry_on StandardError, wait: :polynomially_longer, attempts: 3
  discard_on ActiveJob::DeserializationError

  def perform(user_id)
    user = User.find_by(id: user_id)
    return unless user

    UserMailer.welcome(user).deliver_now
  end
end

# ============= User model callback =============
class User < ApplicationRecord
  has_secure_password

  after_create_commit :enqueue_welcome_email

  private

  def enqueue_welcome_email
    SendWelcomeEmailJob.perform_later(id)
  end
end

# ============= Views =============
# app/views/user_mailer/welcome.html.erb
# <h1>Chào mừng <%= @user.name %>!</h1>
# <p>Cảm ơn bạn đã đăng ký tài khoản tại MyApp.</p>
# <p><%= link_to "Đăng nhập ngay", @login_url %></p>
# <p>Cần hỗ trợ? Liên hệ <%= @support_email %></p>

# app/views/user_mailer/welcome.text.erb
# Chào mừng <%= @user.name %>!
#
# Cảm ơn bạn đã đăng ký tài khoản tại MyApp.
# Đăng nhập tại: <%= @login_url %>
#
# Cần hỗ trợ? Liên hệ <%= @support_email %>

# ============= Preview =============
# test/mailers/previews/user_mailer_preview.rb
class UserMailerPreview < ActionMailer::Preview
  def welcome
    user = User.first || User.new(name: 'Preview User', email: 'preview@example.com')
    UserMailer.welcome(user)
  end
end

# ============= Tests =============
# spec/mailers/user_mailer_spec.rb
require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  let(:user) { create(:user) }

  describe '#welcome' do
    let(:mail) { described_class.welcome(user) }

    it 'sends to the user email' do
      expect(mail.to).to eq([user.email])
    end

    it 'has correct subject' do
      expect(mail.subject).to include('Chào mừng')
    end

    it 'includes user name' do
      expect(mail.body.encoded).to include(user.name)
    end

    it 'includes login URL' do
      expect(mail.body.encoded).to include(login_url)
    end
  end
end

# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  let(:user) { create(:user) }

  it 'enqueues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends welcome email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)

    mail = ActionMailer::Base.deliveries.last
    expect(mail.to).to eq([user.email])
  end

  it 'discards gracefully when user missing' do
    expect {
      described_class.perform_now(999_999)
    }.not_to raise_error
  end
end

# spec/models/user_spec.rb (bonus)
# describe 'callbacks' do
#   it 'enqueues welcome email after create' do
#     expect {
#       create(:user)
#     }.to have_enqueued_job(SendWelcomeEmailJob)
#   end
# end`,
          },
        ],
      },
    ],
  },
  {
    id: "wordpress-development",
    slug: "wordpress",
    title: "WordPress Development",
    description: "Phát triển theme và plugin WordPress chuyên nghiệp",
    image: "/images/wordpress-course.jpg",
    duration: "8 tuần",
    level: "beginner",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu WordPress và Setup",
        slug: "gioi-thieu-wordpress",
        duration: "45 phút",
        content: `# Giới thiệu WordPress

## WordPress là gì?
WordPress là CMS (Content Management System) phổ biến nhất, chiếm hơn 40% website toàn cầu. Được viết bằng PHP và MySQL.

## Hai loại WordPress
- **WordPress.org (Self-hosted)**: Bạn tự host, có thể chỉnh sửa code, cài plugin/theme tùy ý
- **WordPress.com**: Hosting managed, giới hạn tính năng

## Cài đặt WordPress

### Yêu cầu
- PHP 7.4+
- MySQL 5.7+ hoặc MariaDB 10.3+
- Apache/Nginx

### Cài đặt nhanh với wp-env (Docker)
\`\`\`bash
npm install -g @wordpress/env
mkdir my-wp && cd my-wp
wp-env start
# Admin: http://localhost:8888/wp-admin (admin/password)
# Site:  http://localhost:8888
\`\`\`

### Local by Flywheel / LocalWP
\`\`\`bash
# Download từ localwp.com
# Tạo site mới với giao diện trực quan
\`\`\`

### Cài đặt thủ công
\`\`\`bash
# Download WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress mysite
cd mysite

# Configure wp-config.php
cp wp-config-sample.php wp-config.php

# Sau đó mở http://localhost/mysite để chạy installer
\`\`\`

## WP-CLI

\`\`\`bash
# Install WP-CLI
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# Common commands
wp core download
wp core install --url=example.com --title="My Site" --admin_user=admin --admin_password=pass --admin_email=admin@example.com
wp plugin list
wp theme list
wp post list
wp user list
\`\`\`

## Cấu trúc thư mục

\`\`\`
wordpress/
├── wp-admin/          # Admin dashboard
├── wp-content/        # Custom code
│   ├── themes/        # Themes
│   ├── plugins/       # Plugins
│   ├── uploads/       # Uploaded files
│   └── mu-plugins/    # Must-use plugins
├── wp-includes/       # Core code
├── wp-config.php      # Configuration
└── .htaccess          # Apache rules
\`\`\`

## wp-config.php

\`\`\`php
<?php
// Database
define('DB_NAME', 'wordpress');
define('DB_USER', 'root');
define('DB_PASSWORD', 'password');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// Authentication keys
define('AUTH_KEY',         'put-your-unique-phrase-here');
define('SECURE_AUTH_KEY',  'put-your-unique-phrase-here');
define('LOGGED_IN_KEY',    'put-your-unique-phrase-here');
define('NONCE_KEY',        'put-your-unique-phrase-here');
define('AUTH_SALT',        'put-your-unique-phrase-here');
define('SECURE_AUTH_SALT', 'put-your-unique-phrase-here');
define('LOGGED_IN_SALT',   'put-your-unique-phrase-here');
define('NONCE_SALT',       'put-your-unique-phrase-here');

$table_prefix = 'wp_';

// Debug
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

// Memory
define('WP_MEMORY_LIMIT', '256M');

// Disable file edit from admin
define('DISALLOW_FILE_EDIT', true);

// Auto-updates
define('WP_AUTO_UPDATE_CORE', 'minor');

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}
require_once ABSPATH . 'wp-settings.php';
\`\`\`

## Hooks cơ bản

### Actions
\`\`\`php
// Thêm code khi theme setup
add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
});

// Thêm vào footer
add_action('wp_footer', function () {
    echo '<p>Custom footer content</p>';
});
\`\`\`

### Filters
\`\`\`php
// Sửa title
add_filter('the_title', function ($title) {
    return strtoupper($title);
});

// Sửa content
add_filter('the_content', function ($content) {
    return $content . '<p>Thanks for reading!</p>';
});
\`\`\`

## Bài tập thực hành
Hãy cài đặt WordPress và tạo child theme đầu tiên!`,
        exercises: [
          {
            id: "1-1",
            title: "Cài đặt và cấu hình WordPress",
            description: "Setup WordPress development environment",
            instructions: `1. Cài đặt WordPress local
2. Tạo database và cấu hình wp-config.php
3. Tạo child theme với style.css và functions.php
4. Thêm một custom hook đơn giản`,
            type: "code",
            starterCode: `<?php
// wp-content/themes/my-theme/functions.php

// Viết code ở đây`,
            solution: `<?php
// wp-content/themes/my-theme/style.css
/*
Theme Name: My Custom Theme
Theme URI: https://example.com/my-theme
Author: Your Name
Author URI: https://example.com
Description: Custom WordPress theme
Version: 1.0.0
License: GPL v2 or later
Text Domain: my-theme
*/

// wp-content/themes/my-theme/functions.php
<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme setup
 */
function my_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', [
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ]);
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    // Register navigation menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
        'footer'  => __('Footer Menu', 'my-theme'),
    ]);

    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'my_theme_setup');

/**
 * Enqueue assets
 */
function my_theme_assets() {
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'my-theme-style',
        get_stylesheet_uri(),
        [],
        $version
    );

    wp_enqueue_script(
        'my-theme-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        $version,
        true
    );
}
add_action('wp_enqueue_scripts', 'my_theme_assets');

/**
 * Register widget areas
 */
function my_theme_widgets_init() {
    register_sidebar([
        'name'          => __('Sidebar', 'my-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'my-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);
}
add_action('widgets_init', 'my_theme_widgets_init');

/**
 * Custom hook example
 */
add_action('wp_footer', function () {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        echo '<!-- My Theme v' . wp_get_theme()->get('Version') . ' -->';
    }
});

/**
 * Custom filter example
 */
add_filter('excerpt_length', function ($length) {
    return 25;
});

add_filter('excerpt_more', function ($more) {
    return '...';
});`,
          },
        ],
      },
      {
        id: "2",
        title: "Theme Development",
        slug: "theme-development",
        duration: "80 phút",
        prerequisites: ["1"],
        content: `# Theme Development

## Template Hierarchy

\`\`\`
Front Page:
  front-page.php → home.php → index.php

Single Post:
  single-post.php → single.php → singular.php → index.php

Page:
  page-{slug}.php → page-{id}.php → page.php → singular.php → index.php

Category:
  category-{slug}.php → category-{id}.php → category.php → archive.php → index.php

Tag, Author, Date, Custom Post Type
  Similar hierarchy to category
\`\`\`

## Cấu trúc theme cơ bản

\`\`\`
my-theme/
├── style.css              # Required
├── functions.php
├── index.php              # Required
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── archive.php
├── search.php
├── 404.php
├── screenshot.png
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── template-parts/
│   ├── content.php
│   ├── content-single.php
│   └── content-page.php
└── inc/
    ├── customizer.php
    ├── template-tags.php
    └── custom-functions.php
\`\`\`

## header.php

\`\`\`php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo('name'); ?>
                </a>
            <?php endif; ?>
        </div>

        <nav class="site-nav">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'menu',
                'fallback_cb'    => false,
            ]);
            ?>
        </nav>
    </div>
</header>
\`\`\`

## footer.php

\`\`\`php
<footer class="site-footer">
    <div class="container">
        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. 
           <?php esc_html_e('All rights reserved.', 'my-theme'); ?>
        </p>

        <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-menu',
            'depth'          => 1,
        ]);
        ?>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
\`\`\`

## index.php

\`\`\`php
<?php get_header(); ?>

<main class="site-main container">
    <?php if (have_posts()): ?>
        <div class="posts-grid">
            <?php while (have_posts()): the_post(); ?>
                <?php get_template_part('template-parts/content', get_post_type()); ?>
            <?php endwhile; ?>
        </div>

        <?php
        the_posts_pagination([
            'mid_size'  => 2,
            'prev_text' => __('&laquo; Previous', 'my-theme'),
            'next_text' => __('Next &raquo;', 'my-theme'),
        ]);
        ?>
    <?php else: ?>
        <p><?php esc_html_e('No posts found.', 'my-theme'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
\`\`\`

## template-parts/content.php

\`\`\`php
<article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
    <?php if (has_post_thumbnail()): ?>
        <a href="<?php the_permalink(); ?>" class="post-thumbnail">
            <?php the_post_thumbnail('medium_large'); ?>
        </a>
    <?php endif; ?>

    <div class="post-content">
        <header class="entry-header">
            <?php the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '">', '</a></h2>'); ?>

            <div class="entry-meta">
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                    <?php echo esc_html(get_the_date()); ?>
                </time>
                <span class="author">by <?php the_author_posts_link(); ?></span>
            </div>
        </header>

        <div class="entry-summary">
            <?php the_excerpt(); ?>
        </div>

        <a href="<?php the_permalink(); ?>" class="read-more">
            <?php esc_html_e('Read more', 'my-theme'); ?> &rarr;
        </a>
    </div>
</article>
\`\`\`

## single.php

\`\`\`php
<?php get_header(); ?>

<main class="site-main container">
    <?php while (have_posts()): the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                
                <div class="entry-meta">
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                        <?php echo esc_html(get_the_date()); ?>
                    </time>
                    <span>by <?php the_author_posts_link(); ?></span>
                    
                    <?php if (has_category()): ?>
                        <span class="categories">
                            <?php the_category(', '); ?>
                        </span>
                    <?php endif; ?>
                </div>
            </header>

            <?php if (has_post_thumbnail()): ?>
                <div class="post-thumbnail">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content">
                <?php the_content(); ?>
                
                <?php
                wp_link_pages([
                    'before' => '<nav class="page-links">' . __('Pages:', 'my-theme'),
                    'after'  => '</nav>',
                ]);
                ?>
            </div>

            <footer class="entry-footer">
                <?php the_tags('<div class="tags">', ', ', '</div>'); ?>
            </footer>
        </article>

        <?php
        the_post_navigation([
            'prev_text' => '<span class="nav-label">Previous</span><span class="nav-title">%title</span>',
            'next_text' => '<span class="nav-label">Next</span><span class="nav-title">%title</span>',
        ]);

        if (comments_open() || get_comments_number()) {
            comments_template();
        }
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
\`\`\`

## Functions.php essentials

\`\`\`php
<?php

// Prevent direct access
if (!defined('ABSPATH')) exit;

// Theme constants
define('MY_THEME_VERSION', '1.0.0');
define('MY_THEME_DIR', get_template_directory());
define('MY_THEME_URI', get_template_directory_uri());

// Include files
require_once MY_THEME_DIR . '/inc/template-tags.php';
require_once MY_THEME_DIR . '/inc/customizer.php';

/**
 * Theme setup
 */
function my_theme_setup() {
    load_theme_textdomain('my-theme', MY_THEME_DIR . '/languages');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');

    // Image sizes
    add_image_size('my-theme-featured', 1200, 600, true);
    add_image_size('my-theme-thumbnail', 600, 400, true);

    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
        'footer'  => __('Footer Menu', 'my-theme'),
    ]);
}
add_action('after_setup_theme', 'my_theme_setup');

/**
 * Enqueue scripts and styles
 */
function my_theme_scripts() {
    wp_enqueue_style(
        'my-theme-style',
        get_stylesheet_uri(),
        [],
        MY_THEME_VERSION
    );

    wp_enqueue_style(
        'my-theme-main',
        MY_THEME_URI . '/assets/css/main.css',
        ['my-theme-style'],
        MY_THEME_VERSION
    );

    wp_enqueue_script(
        'my-theme-script',
        MY_THEME_URI . '/assets/js/main.js',
        [],
        MY_THEME_VERSION,
        true
    );

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');

/**
 * Register widget areas
 */
function my_theme_widgets_init() {
    register_sidebar([
        'name'          => __('Sidebar', 'my-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'my-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);

    register_sidebar([
        'name'          => __('Footer Column 1', 'my-theme'),
        'id'            => 'footer-1',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ]);
}
add_action('widgets_init', 'my_theme_widgets_init');
\`\`\`

## Template tags

\`\`\`php
<?php // app/inc/template-tags.php ?>

/**
 * Display post meta
 */
function my_theme_post_meta() {
    printf(
        '<div class="entry-meta">
            <time datetime="%1$s">%2$s</time>
            <span class="author">%3$s</span>
        </div>',
        esc_attr(get_the_date('c')),
        esc_html(get_the_date()),
        sprintf(
            '<a href="%1$s">%2$s</a>',
            esc_url(get_author_posts_url(get_the_author_meta('ID'))),
            esc_html(get_the_author())
        )
    );
}

/**
 * Get the post thumbnail URL
 */
function my_theme_get_thumbnail_url($size = 'full') {
    if (!has_post_thumbnail()) {
        return get_theme_file_uri('/assets/images/placeholder.jpg');
    }
    return get_the_post_thumbnail_url(get_the_ID(), $size);
}

/**
 * Breadcrumbs
 */
function my_theme_breadcrumbs() {
    if (is_front_page()) return;

    echo '<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';

    if (is_single()) {
        $categories = get_the_category();
        if (!empty($categories)) {
            echo '<li><a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">'
                . esc_html($categories[0]->name) . '</a></li>';
        }
        echo '<li aria-current="page">' . esc_html(get_the_title()) . '</li>';
    } elseif (is_page()) {
        echo '<li aria-current="page">' . esc_html(get_the_title()) . '</li>';
    } elseif (is_category()) {
        echo '<li aria-current="page">' . esc_html(single_cat_title('', false)) . '</li>';
    }

    echo '</ol></nav>';
}
\`\`\`

## Custom Post Types và Taxonomies

\`\`\`php
/**
 * Register custom post type: Portfolio
 */
function my_theme_register_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => __('Portfolio', 'my-theme'),
            'singular_name' => __('Project', 'my-theme'),
            'add_new'       => __('Add New', 'my-theme'),
            'add_new_item'  => __('Add New Project', 'my-theme'),
            'edit_item'     => __('Edit Project', 'my-theme'),
            'view_item'     => __('View Project', 'my-theme'),
            'search_items'  => __('Search Projects', 'my-theme'),
            'not_found'     => __('No projects found', 'my-theme'),
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-portfolio',
        'menu_position' => 20,
        'supports'      => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite'       => ['slug' => 'projects'],
        'show_in_rest'  => true, // Gutenberg support
    ]);

    register_taxonomy('portfolio_category', 'portfolio', [
        'labels' => [
            'name'          => __('Project Categories', 'my-theme'),
            'singular_name' => __('Project Category', 'my-theme'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'project-category'],
    ]);

    register_taxonomy('portfolio_tag', 'portfolio', [
        'labels' => [
            'name'          => __('Project Tags', 'my-theme'),
            'singular_name' => __('Project Tag', 'my-theme'),
        ],
        'hierarchical' => false,
        'show_in_rest' => true,
    ]);
}
add_action('init', 'my_theme_register_cpt');
\`\`\`

## Customizer

\`\`\`php
<?php // app/inc/customizer.php ?>

function my_theme_customize_register($wp_customize) {
    // Add section
    $wp_customize->add_section('my_theme_options', [
        'title'    => __('Theme Options', 'my-theme'),
        'priority' => 30,
    ]);

    // Footer text setting
    $wp_customize->add_setting('footer_text', [
        'default'           => '© ' . date('Y') . ' ' . get_bloginfo('name'),
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ]);

    $wp_customize->add_control('footer_text', [
        'label'   => __('Footer Text', 'my-theme'),
        'section' => 'my_theme_options',
        'type'    => 'text',
    ]);

    // Primary color
    $wp_customize->add_setting('primary_color', [
        'default'           => '#0073aa',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);

    $wp_customize->add_control(
        new WP_Customize_Color_Control($wp_customize, 'primary_color', [
            'label'   => __('Primary Color', 'my-theme'),
            'section' => 'colors',
        ])
    );
}
add_action('customize_register', 'my_theme_customize_register');

/**
 * Output customizer CSS
 */
function my_theme_customizer_css() {
    $primary = get_theme_mod('primary_color', '#0073aa');
    ?>
    <style>
        :root {
            --primary-color: <?php echo esc_attr($primary); ?>;
        }
        a, button, .button {
            color: var(--primary-color);
        }
    </style>
    <?php
}
add_action('wp_head', 'my_theme_customizer_css');
\`\`\`

## Bài tập thực hành
Hãy tạo complete theme với custom post type!`,
        exercises: [
          {
            id: "2-1",
            title: "Portfolio Theme",
            description: "Tạo theme với custom post type",
            instructions: `Tạo:
1. Custom post type "Portfolio"
2. Templates cho single/archive portfolio
3. Template tags
4. Customizer options
5. Widget areas`,
            type: "code",
            starterCode: `<?php
// functions.php
// Viết code ở đây`,
            solution: `<?php
// ============= functions.php =============
if (!defined('ABSPATH')) exit;

function portfolio_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'gallery', 'caption']);
    add_theme_support('custom-logo', [
        'height' => 100,
        'width'  => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'portfolio-theme'),
        'footer'  => __('Footer Menu', 'portfolio-theme'),
    ]);

    add_image_size('portfolio-hero', 1600, 800, true);
    add_image_size('portfolio-card', 600, 400, true);
}
add_action('after_setup_theme', 'portfolio_theme_setup');

function portfolio_theme_assets() {
    wp_enqueue_style('portfolio-style', get_stylesheet_uri(), [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'portfolio_theme_assets');

/**
 * Register Portfolio Custom Post Type
 */
function portfolio_register_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => __('Portfolios', 'portfolio-theme'),
            'singular_name' => __('Project', 'portfolio-theme'),
            'add_new_item'  => __('Add New Project', 'portfolio-theme'),
            'edit_item'     => __('Edit Project', 'portfolio-theme'),
            'all_items'     => __('All Projects', 'portfolio-theme'),
            'not_found'     => __('No projects found', 'portfolio-theme'),
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-portfolio',
        'menu_position' => 5,
        'supports'      => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite'       => ['slug' => 'projects'],
        'show_in_rest'  => true,
    ]);

    register_taxonomy('portfolio_type', 'portfolio', [
        'labels' => [
            'name'          => __('Project Types', 'portfolio-theme'),
            'singular_name' => __('Project Type', 'portfolio-theme'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'project-type'],
    ]);
}
add_action('init', 'portfolio_register_cpt');

/**
 * Add meta boxes for portfolio details
 */
function portfolio_add_meta_boxes() {
    add_meta_box(
        'portfolio_details',
        __('Project Details', 'portfolio-theme'),
        'portfolio_meta_box_render',
        'portfolio',
        'side',
        'default'
    );
}
add_action('add_meta_boxes', 'portfolio_add_meta_boxes');

function portfolio_meta_box_render($post) {
    wp_nonce_field('portfolio_meta', 'portfolio_meta_nonce');

    $client_url = get_post_meta($post->ID, '_portfolio_client_url', true);
    $project_date = get_post_meta($post->ID, '_portfolio_date', true);
    ?>
    <p>
        <label for="portfolio_client_url">
            <?php esc_html_e('Client URL:', 'portfolio-theme'); ?>
        </label>
        <input type="url"
               id="portfolio_client_url"
               name="portfolio_client_url"
               value="<?php echo esc_attr($client_url); ?>"
               style="width: 100%;">
    </p>
    <p>
        <label for="portfolio_date">
            <?php esc_html_e('Project Date:', 'portfolio-theme'); ?>
        </label>
        <input type="date"
               id="portfolio_date"
               name="portfolio_date"
               value="<?php echo esc_attr($project_date); ?>"
               style="width: 100%;">
    </p>
    <?php
}

function portfolio_save_meta($post_id) {
    if (!isset($_POST['portfolio_meta_nonce']) ||
        !wp_verify_nonce($_POST['portfolio_meta_nonce'], 'portfolio_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['portfolio_client_url'])) {
        update_post_meta(
            $post_id,
            '_portfolio_client_url',
            esc_url_raw($_POST['portfolio_client_url'])
        );
    }

    if (isset($_POST['portfolio_date'])) {
        update_post_meta(
            $post_id,
            '_portfolio_date',
            sanitize_text_field($_POST['portfolio_date'])
        );
    }
}
add_action('save_post_portfolio', 'portfolio_save_meta');

/**
 * Template tags
 */
function portfolio_get_client_url($post_id = null) {
    return get_post_meta($post_id ?: get_the_ID(), '_portfolio_client_url', true);
}

function portfolio_get_date($post_id = null) {
    return get_post_meta($post_id ?: get_the_ID(), '_portfolio_date', true);
}

// ============= archive-portfolio.php =============
<?php get_header(); ?>

<main class="portfolio-archive container">
    <header class="page-header">
        <h1><?php post_type_archive_title(); ?></h1>
        <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
    </header>

    <?php if (have_posts()): ?>
        <div class="portfolio-grid">
            <?php while (have_posts()): the_post(); ?>
                <article <?php post_class('portfolio-card'); ?>>
                    <a href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()): ?>
                            <?php the_post_thumbnail('portfolio-card'); ?>
                        <?php endif; ?>
                        <h2 class="portfolio-title"><?php the_title(); ?></h2>
                        <?php the_excerpt(); ?>
                    </a>
                </article>
            <?php endwhile; ?>
        </div>

        <?php the_posts_pagination(); ?>
    <?php else: ?>
        <p><?php esc_html_e('No projects yet.', 'portfolio-theme'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>

// ============= single-portfolio.php =============
<?php get_header(); ?>

<main class="portfolio-single container">
    <?php while (have_posts()): the_post(); ?>
        <article <?php post_class(); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header>

            <?php if (has_post_thumbnail()): ?>
                <div class="portfolio-hero">
                    <?php the_post_thumbnail('portfolio-hero'); ?>
                </div>
            <?php endif; ?>

            <div class="portfolio-details">
                <?php $url = portfolio_get_client_url(); ?>
                <?php if ($url): ?>
                    <p><strong>Client:</strong>
                        <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">
                            <?php echo esc_html($url); ?>
                        </a>
                    </p>
                <?php endif; ?>

                <?php $date = portfolio_get_date(); ?>
                <?php if ($date): ?>
                    <p><strong>Date:</strong>
                        <?php echo esc_html(date_i18n(get_option('date_format'), strtotime($date))); ?>
                    </p>
                <?php endif; ?>
            </div>

            <div class="entry-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>

// ============= Customizer =============
add_action('customize_register', function ($wp_customize) {
    $wp_customize->add_section('portfolio_options', [
        'title'    => __('Portfolio Options', 'portfolio-theme'),
        'priority' => 30,
    ]);

    $wp_customize->add_setting('portfolio_items_per_page', [
        'default'           => 9,
        'sanitize_callback' => 'absint',
    ]);

    $wp_customize->add_control('portfolio_items_per_page', [
        'label'   => __('Items per page', 'portfolio-theme'),
        'section' => 'portfolio_options',
        'type'    => 'number',
        'input_attrs' => ['min' => 3, 'max' => 30],
    ]);
});`,
          },
        ],
      },
      {
        id: "3",
        title: "Plugin Development",
        slug: "plugin-development",
        duration: "90 phút",
        prerequisites: ["2"],
        content: `# Plugin Development

## Cấu trúc plugin

\`\`\`
my-plugin/
├── my-plugin.php          # Main file với plugin header
├── readme.txt
├── uninstall.php
├── includes/
│   ├── class-my-plugin.php
│   ├── class-admin.php
│   └── class-shortcodes.php
├── admin/
│   ├── css/
│   ├── js/
│   └── views/
├── public/
│   ├── css/
│   ├── js/
│   └── views/
└── languages/
\`\`\`

## Plugin header

\`\`\`php
<?php
/**
 * Plugin Name:       My Plugin
 * Plugin URI:        https://example.com/my-plugin
 * Description:       A custom WordPress plugin
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Your Name
 * Author URI:        https://example.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-plugin
 * Domain Path:       /languages
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Constants
define('MY_PLUGIN_VERSION', '1.0.0');
define('MY_PLUGIN_FILE', __FILE__);
define('MY_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MY_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MY_PLUGIN_BASENAME', plugin_basename(__FILE__));

// Autoloader hoặc includes
require_once MY_PLUGIN_DIR . 'includes/class-my-plugin.php';

// Activation/Deactivation hooks
register_activation_hook(__FILE__, ['My_Plugin', 'activate']);
register_deactivation_hook(__FILE__, ['My_Plugin', 'deactivate']);

// Initialize
function my_plugin_init() {
    My_Plugin::instance();
}
add_action('plugins_loaded', 'my_plugin_init');
\`\`\`

## Main Plugin Class

\`\`\`php
<?php
// includes/class-my-plugin.php

class My_Plugin {
    private static $instance = null;

    public static function instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        $this->define_hooks();
        $this->load_dependencies();
    }

    private function define_hooks() {
        add_action('init', [$this, 'register_post_types']);
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_public_assets']);
        add_shortcode('my_plugin', [$this, 'render_shortcode']);
        add_action('wp_ajax_my_plugin_action', [$this, 'handle_ajax']);
    }

    private function load_dependencies() {
        require_once MY_PLUGIN_DIR . 'includes/class-admin.php';
        require_once MY_PLUGIN_DIR . 'includes/class-shortcodes.php';
    }

    public function enqueue_admin_assets($hook) {
        if (strpos($hook, 'my-plugin') === false) {
            return;
        }

        wp_enqueue_style(
            'my-plugin-admin',
            MY_PLUGIN_URL . 'admin/css/admin.css',
            [],
            MY_PLUGIN_VERSION
        );

        wp_enqueue_script(
            'my-plugin-admin',
            MY_PLUGIN_URL . 'admin/js/admin.js',
            ['jquery'],
            MY_PLUGIN_VERSION,
            true
        );

        wp_localize_script('my-plugin-admin', 'myPlugin', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('my_plugin_nonce'),
        ]);
    }

    public function enqueue_public_assets() {
        wp_enqueue_style(
            'my-plugin-public',
            MY_PLUGIN_URL . 'public/css/public.css',
            [],
            MY_PLUGIN_VERSION
        );

        wp_enqueue_script(
            'my-plugin-public',
            MY_PLUGIN_URL . 'public/js/public.js',
            [],
            MY_PLUGIN_VERSION,
            true
        );
    }

    public function add_admin_menu() {
        add_menu_page(
            __('My Plugin', 'my-plugin'),
            __('My Plugin', 'my-plugin'),
            'manage_options',
            'my-plugin',
            [$this, 'render_admin_page'],
            'dashicons-admin-generic',
            30
        );

        add_submenu_page(
            'my-plugin',
            __('Settings', 'my-plugin'),
            __('Settings', 'my-plugin'),
            'manage_options',
            'my-plugin-settings',
            [$this, 'render_settings_page']
        );
    }

    public function render_admin_page() {
        if (!current_user_can('manage_options')) {
            wp_die(__('Access denied', 'my-plugin'));
        }
        include MY_PLUGIN_DIR . 'admin/views/dashboard.php';
    }

    public function render_settings_page() {
        include MY_PLUGIN_DIR . 'admin/views/settings.php';
    }

    public function render_shortcode($atts) {
        $atts = shortcode_atts([
            'title' => 'Default Title',
            'limit' => 5,
        ], $atts, 'my_plugin');

        ob_start();
        include MY_PLUGIN_DIR . 'public/views/shortcode.php';
        return ob_get_clean();
    }

    public function handle_ajax() {
        check_ajax_referer('my_plugin_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Unauthorized']);
        }

        $action = sanitize_text_field($_POST['action_type'] ?? '');

        switch ($action) {
            case 'save_settings':
                update_option('my_plugin_option', sanitize_text_field($_POST['value']));
                wp_send_json_success(['message' => 'Saved']);
                break;
            default:
                wp_send_json_error(['message' => 'Invalid action']);
        }
    }

    public static function activate() {
        // Create database table
        global $wpdb;
        $table_name = $wpdb->prefix . 'my_plugin_data';
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            user_id bigint(20) NOT NULL,
            data longtext NOT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY user_id (user_id)
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);

        // Set default options
        add_option('my_plugin_version', MY_PLUGIN_VERSION);

        // Flush rewrite rules
        flush_rewrite_rules();
    }

    public static function deactivate() {
        flush_rewrite_rules();
        // Không xóa data khi deactivate
    }
}
\`\`\`

## Admin Page

\`\`\`php
<!-- admin/views/dashboard.php -->
<div class="wrap my-plugin-admin">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>

    <div class="my-plugin-stats">
        <div class="stat-card">
            <h3><?php esc_html_e('Total Items', 'my-plugin'); ?></h3>
            <p class="stat-value"><?php echo esc_html($total_items ?? 0); ?></p>
        </div>
    </div>

    <form id="my-plugin-form" method="post">
        <?php wp_nonce_field('my_plugin_save', 'my_plugin_nonce'); ?>

        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="my_plugin_setting"><?php esc_html_e('Setting', 'my-plugin'); ?></label>
                </th>
                <td>
                    <input type="text"
                           id="my_plugin_setting"
                           name="my_plugin_setting"
                           value="<?php echo esc_attr(get_option('my_plugin_setting', '')); ?>"
                           class="regular-text">
                </td>
            </tr>
        </table>

        <?php submit_button(); ?>
    </form>

    <button id="my-plugin-ajax-btn" class="button button-primary">
        <?php esc_html_e('Test AJAX', 'my-plugin'); ?>
    </button>
</div>
\`\`\`

## Admin JavaScript

\`\`\`javascript
// admin/js/admin.js
jQuery(function ($) {
    $('#my-plugin-ajax-btn').on('click', function () {
        const $btn = $(this);

        $btn.prop('disabled', true).text('Loading...');

        $.ajax({
            url: myPlugin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'my_plugin_action',
                nonce: myPlugin.nonce,
                action_type: 'save_settings',
                value: 'test value'
            },
            success: function (response) {
                if (response.success) {
                    alert(response.data.message);
                } else {
                    alert('Error: ' + response.data.message);
                }
            },
            error: function () {
                alert('AJAX error');
            },
            complete: function () {
                $btn.prop('disabled', false).text('Test AJAX');
            }
        });
    });
});
\`\`\`

## Settings API

\`\`\`php
class My_Plugin_Admin {
    public function __construct() {
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function register_settings() {
        register_setting('my_plugin_settings', 'my_plugin_options', [
            'type'              => 'array',
            'sanitize_callback' => [$this, 'sanitize_options'],
            'default'           => [
                'enabled' => true,
                'text'    => '',
                'color'   => '#0073aa',
            ],
        ]);

        add_settings_section(
            'my_plugin_general',
            __('General Settings', 'my-plugin'),
            [$this, 'section_callback'],
            'my_plugin_settings'
        );

        add_settings_field(
            'enabled',
            __('Enable feature', 'my-plugin'),
            [$this, 'render_checkbox'],
            'my_plugin_settings',
            'my_plugin_general',
            ['label_for' => 'enabled', 'field' => 'enabled']
        );

        add_settings_field(
            'text',
            __('Text', 'my-plugin'),
            [$this, 'render_text_input'],
            'my_plugin_settings',
            'my_plugin_general',
            ['label_for' => 'text', 'field' => 'text']
        );
    }

    public function sanitize_options($input) {
        return [
            'enabled' => !empty($input['enabled']),
            'text'    => sanitize_text_field($input['text'] ?? ''),
            'color'   => sanitize_hex_color($input['color'] ?? '#0073aa'),
        ];
    }

    public function section_callback() {
        echo '<p>' . esc_html__('Configure the plugin behavior.', 'my-plugin') . '</p>';
    }

    public function render_checkbox($args) {
        $options = get_option('my_plugin_options', []);
        $field = $args['field'];
        ?>
        <input type="checkbox"
               id="<?php echo esc_attr($field); ?>"
               name="my_plugin_options[<?php echo esc_attr($field); ?>]"
               value="1"
               <?php checked(!empty($options[$field])); ?>>
        <?php
    }

    public function render_text_input($args) {
        $options = get_option('my_plugin_options', []);
        $field = $args['field'];
        ?>
        <input type="text"
               id="<?php echo esc_attr($field); ?>"
               name="my_plugin_options[<?php echo esc_attr($field); ?>]"
               value="<?php echo esc_attr($options[$field] ?? ''); ?>"
               class="regular-text">
        <?php
    }
}
\`\`\`

## Custom Database Table

\`\`\`php
class My_Plugin_DB {
    public static function get_table() {
        global $wpdb;
        return $wpdb->prefix . 'my_plugin_data';
    }

    public static function create(array $data): int|false {
        global $wpdb;
        $result = $wpdb->insert(
            self::get_table(),
            [
                'user_id'    => $data['user_id'],
                'data'       => maybe_serialize($data['data']),
                'created_at' => current_time('mysql'),
            ],
            ['%d', '%s', '%s']
        );
        return $result ? $wpdb->insert_id : false;
    }

    public static function get(int $id): ?object {
        global $wpdb;
        $table = self::get_table();
        return $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM $table WHERE id = %d", $id)
        );
    }

    public static function get_by_user(int $user_id): array {
        global $wpdb;
        $table = self::get_table();
        return $wpdb->get_results(
            $wpdb->prepare(
                "SELECT * FROM $table WHERE user_id = %d ORDER BY created_at DESC",
                $user_id
            )
        );
    }

    public static function delete(int $id): bool {
        global $wpdb;
        return (bool) $wpdb->delete(
            self::get_table(),
            ['id' => $id],
            ['%d']
        );
    }
}
\`\`\`

## Shortcode

\`\`\`php
class My_Plugin_Shortcodes {
    public function __construct() {
        add_shortcode('my_plugin', [$this, 'render']);
        add_shortcode('my_plugin_form', [$this, 'render_form']);
    }

    public function render($atts): string {
        $atts = shortcode_atts([
            'title' => __('My Plugin', 'my-plugin'),
            'limit' => 5,
        ], $atts, 'my_plugin');

        $items = My_Plugin_DB::get_by_user(get_current_user_id());
        $items = array_slice($items, 0, (int) $atts['limit']);

        ob_start();
        ?>
        <div class="my-plugin-shortcode">
            <h3><?php echo esc_html($atts['title']); ?></h3>
            <?php if ($items): ?>
                <ul>
                    <?php foreach ($items as $item): ?>
                        <li><?php echo esc_html($item->id); ?> - 
                            <?php echo esc_html($item->created_at); ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p><?php esc_html_e('No items found.', 'my-plugin'); ?></p>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    public function render_form(): string {
        ob_start();
        ?>
        <form class="my-plugin-form" method="post">
            <?php wp_nonce_field('my_plugin_submit', 'my_plugin_nonce'); ?>
            <input type="text" name="my_data" required>
            <button type="submit"><?php esc_html_e('Submit', 'my-plugin'); ?></button>
        </form>
        <?php
        return ob_get_clean();
    }
}
\`\`\`

## REST API Endpoints

\`\`\`php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/items', [
        [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => 'my_plugin_get_items',
            'permission_callback' => function () {
                return is_user_logged_in();
            },
        ],
        [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => 'my_plugin_create_item',
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            },
            'args' => [
                'title' => [
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                    'validate_callback' => function ($value) {
                        return strlen($value) >= 2;
                    },
                ],
            ],
        ],
    ]);
});

function my_plugin_get_items(WP_REST_Request $request): WP_REST_Response {
    $items = My_Plugin_DB::get_by_user(get_current_user_id());
    return new WP_REST_Response($items, 200);
}

function my_plugin_create_item(WP_REST_Request $request): WP_REST_Response {
    $id = My_Plugin_DB::create([
        'user_id' => get_current_user_id(),
        'data'    => ['title' => $request->get_param('title')],
    ]);

    if (!$id) {
        return new WP_REST_Response(['error' => 'Failed to create'], 500);
    }

    return new WP_REST_Response(['id' => $id], 201);
}
\`\`\`

## Uninstall

\`\`\`php
<?php
// uninstall.php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;

// Drop custom tables
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}my_plugin_data");

// Delete options
delete_option('my_plugin_version');
delete_option('my_plugin_settings');
delete_option('my_plugin_options');

// Delete user meta
delete_metadata('user', 0, 'my_plugin_user_setting', '', true);

// Delete posts (nếu plugin tạo CPT)
$posts = get_posts([
    'post_type'   => 'my_cpt',
    'numberposts' => -1,
    'post_status' => 'any',
]);
foreach ($posts as $post) {
    wp_delete_post($post->ID, true);
}
\`\`\`

## Bài tập thực hành
Hãy tạo plugin đầy đủ với admin page, shortcode và REST API!`,
        exercises: [
          {
            id: "3-1",
            title: "Custom Plugin: Book Manager",
            description: "Tạo plugin quản lý sách",
            instructions: `Tạo plugin Book Manager với:
1. Plugin header và main class
2. Custom database table
3. Admin page để CRUD books
4. Shortcode hiển thị books
5. REST API endpoints
6. AJAX for delete`,
            type: "code",
            starterCode: `<?php
/**
 * Plugin Name: Book Manager
 * Description: Quản lý sách
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: book-manager
 */

// Viết code ở đây`,
            solution: `<?php
/**
 * Plugin Name: Book Manager
 * Plugin URI:  https://example.com/book-manager
 * Description: Quản lý sách với admin UI và REST API
 * Version:     1.0.0
 * Author:      Your Name
 * Text Domain: book-manager
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) exit;

define('BM_VERSION', '1.0.0');
define('BM_FILE', __FILE__);
define('BM_DIR', plugin_dir_path(__FILE__));
define('BM_URL', plugin_dir_url(__FILE__));

// ============= Main Plugin Class =============
class Book_Manager {
    private static ?self $instance = null;

    public static function instance(): self {
        return self::$instance ??= new self();
    }

    private function __construct() {
        register_activation_hook(BM_FILE, [$this, 'activate']);
        register_deactivation_hook(BM_FILE, [$this, 'deactivate']);

        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init(): void {
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'public_assets']);
        add_action('wp_ajax_bm_delete_book', [$this, 'ajax_delete_book']);
        add_action('wp_ajax_bm_save_book', [$this, 'ajax_save_book']);
        add_action('rest_api_init', [$this, 'register_rest_routes']);
        add_shortcode('book_list', [$this, 'render_shortcode']);
    }

    public function activate(): void {
        global $wpdb;
        $table = $wpdb->prefix . 'books';
        $charset = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            title varchar(255) NOT NULL,
            author varchar(255) NOT NULL,
            isbn varchar(20) DEFAULT NULL,
            year int(4) DEFAULT NULL,
            description text,
            cover_url varchar(500) DEFAULT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY author (author),
            KEY year (year)
        ) $charset;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);

        add_option('bm_version', BM_VERSION);
    }

    public function deactivate(): void {
        // Không xóa data
    }

    public function add_admin_menu(): void {
        add_menu_page(
            __('Books', 'book-manager'),
            __('Book Manager', 'book-manager'),
            'manage_options',
            'book-manager',
            [$this, 'render_admin_page'],
            'dashicons-book',
            25
        );

        add_submenu_page(
            'book-manager',
            __('Add New Book', 'book-manager'),
            __('Add New', 'book-manager'),
            'manage_options',
            'book-manager-new',
            [$this, 'render_edit_page']
        );

        add_submenu_page(
            'book-manager',
            __('Settings', 'book-manager'),
            __('Settings', 'book-manager'),
            'manage_options',
            'book-manager-settings',
            [$this, 'render_settings_page']
        );
    }

    public function admin_assets(string $hook): void {
        if (strpos($hook, 'book-manager') === false) return;

        wp_enqueue_style('bm-admin', BM_URL . 'admin.css', [], BM_VERSION);
        wp_enqueue_script('bm-admin', BM_URL . 'admin.js', ['jquery'], BM_VERSION, true);

        wp_localize_script('bm-admin', 'bmData', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bm_nonce'),
            'restUrl' => rest_url('book-manager/v1'),
            'restNonce' => wp_create_nonce('wp_rest'),
        ]);
    }

    public function public_assets(): void {
        wp_enqueue_style('bm-public', BM_URL . 'public.css', [], BM_VERSION);
    }

    public function render_admin_page(): void {
        $books = self::get_all_books();
        ?>
        <div class="wrap bm-wrap">
            <h1 class="wp-heading-inline"><?php esc_html_e('Books', 'book-manager'); ?></h1>
            <a href="<?php echo esc_url(admin_url('admin.php?page=book-manager-new')); ?>"
               class="page-title-action">
                <?php esc_html_e('Add New', 'book-manager'); ?>
            </a>

            <?php if (isset($_GET['saved'])): ?>
                <div class="notice notice-success is-dismissible">
                    <p><?php esc_html_e('Book saved successfully.', 'book-manager'); ?></p>
                </div>
            <?php endif; ?>

            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php esc_html_e('ID', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Title', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Author', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Year', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Actions', 'book-manager'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($books)): ?>
                        <tr><td colspan="5"><?php esc_html_e('No books yet.', 'book-manager'); ?></td></tr>
                    <?php else: foreach ($books as $book): ?>
                        <tr data-id="<?php echo esc_attr($book->id); ?>">
                            <td><?php echo esc_html($book->id); ?></td>
                            <td><strong><?php echo esc_html($book->title); ?></strong></td>
                            <td><?php echo esc_html($book->author); ?></td>
                            <td><?php echo esc_html($book->year); ?></td>
                            <td>
                                <a href="<?php echo esc_url(add_query_arg([
                                    'page' => 'book-manager-new',
                                    'id'   => $book->id
                                ], admin_url('admin.php'))); ?>" class="button button-small">
                                    <?php esc_html_e('Edit', 'book-manager'); ?>
                                </a>
                                <button type="button"
                                        class="button button-small bm-delete"
                                        data-id="<?php echo esc_attr($book->id); ?>">
                                    <?php esc_html_e('Delete', 'book-manager'); ?>
                                </button>
                            </td>
                        </tr>
                    <?php endforeach; endif; ?>
                </tbody>
            </table>
        </div>
        <?php
    }

    public function render_edit_page(): void {
        $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
        $book = $id ? self::get_book($id) : null;

        if (isset($_POST['bm_save']) && check_admin_referer('bm_save_book')) {
            $data = [
                'title'       => sanitize_text_field($_POST['title']),
                'author'      => sanitize_text_field($_POST['author']),
                'isbn'        => sanitize_text_field($_POST['isbn']),
                'year'        => (int) $_POST['year'],
                'description' => sanitize_textarea_field($_POST['description']),
                'cover_url'   => esc_url_raw($_POST['cover_url']),
            ];

            if ($id) {
                self::update_book($id, $data);
            } else {
                self::create_book($data);
            }

            wp_safe_redirect(add_query_arg('saved', '1', admin_url('admin.php?page=book-manager')));
            exit;
        }
        ?>
        <div class="wrap bm-wrap">
            <h1><?php echo $id ? esc_html__('Edit Book', 'book-manager') : esc_html__('Add New Book', 'book-manager'); ?></h1>

            <form method="post">
                <?php wp_nonce_field('bm_save_book'); ?>

                <table class="form-table">
                    <tr>
                        <th><label for="title"><?php esc_html_e('Title', 'book-manager'); ?> *</label></th>
                        <td><input type="text" id="title" name="title" class="regular-text"
                                   value="<?php echo esc_attr($book->title ?? ''); ?>" required></td>
                    </tr>
                    <tr>
                        <th><label for="author"><?php esc_html_e('Author', 'book-manager'); ?> *</label></th>
                        <td><input type="text" id="author" name="author" class="regular-text"
                                   value="<?php echo esc_attr($book->author ?? ''); ?>" required></td>
                    </tr>
                    <tr>
                        <th><label for="isbn"><?php esc_html_e('ISBN', 'book-manager'); ?></label></th>
                        <td><input type="text" id="isbn" name="isbn" class="regular-text"
                                   value="<?php echo esc_attr($book->isbn ?? ''); ?>"></td>
                    </tr>
                    <tr>
                        <th><label for="year"><?php esc_html_e('Year', 'book-manager'); ?></label></th>
                        <td><input type="number" id="year" name="year" min="1000" max="<?php echo date('Y'); ?>"
                                   value="<?php echo esc_attr($book->year ?? date('Y')); ?>"></td>
                    </tr>
                    <tr>
                        <th><label for="description"><?php esc_html_e('Description', 'book-manager'); ?></label></th>
                        <td><textarea id="description" name="description" rows="5" class="large-text"><?php
                            echo esc_textarea($book->description ?? '');
                        ?></textarea></td>
                    </tr>
                    <tr>
                        <th><label for="cover_url"><?php esc_html_e('Cover URL', 'book-manager'); ?></label></th>
                        <td><input type="url" id="cover_url" name="cover_url" class="regular-text"
                                   value="<?php echo esc_attr($book->cover_url ?? ''); ?>"></td>
                    </tr>
                </table>

                <?php submit_button(
                    $id ? __('Update Book', 'book-manager') : __('Create Book', 'book-manager'),
                    'primary',
                    'bm_save'
                ); ?>
            </form>
        </div>
        <?php
    }

    public function render_settings_page(): void {
        if (isset($_POST['bm_settings']) && check_admin_referer('bm_settings_nonce')) {
            update_option('bm_settings', [
                'items_per_page' => absint($_POST['items_per_page']),
                'show_covers'    => !empty($_POST['show_covers']),
            ]);
            echo '<div class="notice notice-success"><p>Settings saved.</p></div>';
        }

        $settings = wp_parse_args(get_option('bm_settings', []), [
            'items_per_page' => 10,
            'show_covers'    => true,
        ]);
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Book Manager Settings', 'book-manager'); ?></h1>
            <form method="post">
                <?php wp_nonce_field('bm_settings_nonce'); ?>
                <table class="form-table">
                    <tr>
                        <th><label for="items_per_page"><?php esc_html_e('Items per page', 'book-manager'); ?></label></th>
                        <td><input type="number" id="items_per_page" name="items_per_page"
                                   value="<?php echo esc_attr($settings['items_per_page']); ?>" min="1" max="100"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Show covers', 'book-manager'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="show_covers" value="1"
                                    <?php checked($settings['show_covers']); ?>>
                                <?php esc_html_e('Display book covers', 'book-manager'); ?>
                            </label>
                        </td>
                    </tr>
                </table>
                <?php submit_button(__('Save Settings', 'book-manager'), 'primary', 'bm_settings'); ?>
            </form>
        </div>
        <?php
    }

    public function render_shortcode(array $atts): string {
        $atts = shortcode_atts([
            'limit'   => 10,
            'author'  => '',
            'orderby' => 'title',
        ], $atts, 'book_list');

        $books = self::get_all_books([
            'limit'   => (int) $atts['limit'],
            'author'  => sanitize_text_field($atts['author']),
            'orderby' => sanitize_key($atts['orderby']),
        ]);

        ob_start();
        ?>
        <div class="bm-shortcode">
            <?php if (empty($books)): ?>
                <p><?php esc_html_e('No books found.', 'book-manager'); ?></p>
            <?php else: ?>
                <ul class="bm-book-list">
                    <?php foreach ($books as $book): ?>
                        <li class="bm-book-item">
                            <strong><?php echo esc_html($book->title); ?></strong>
                            <?php if ($book->author): ?>
                                <span class="bm-author"><?php echo esc_html($book->author); ?></span>
                            <?php endif; ?>
                            <?php if ($book->year): ?>
                                <span class="bm-year">(<?php echo esc_html($book->year); ?>)</span>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    public function ajax_delete_book(): void {
        check_ajax_referer('bm_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Unauthorized'], 403);
        }

        $id = (int) ($_POST['id'] ?? 0);
        if (!$id) {
            wp_send_json_error(['message' => 'Invalid ID'], 400);
        }

        if (self::delete_book($id)) {
            wp_send_json_success(['message' => 'Book deleted']);
        } else {
            wp_send_json_error(['message' => 'Delete failed'], 500);
        }
    }

    public function register_rest_routes(): void {
        register_rest_route('book-manager/v1', '/books', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'rest_get_books'],
                'permission_callback' => '__return_true',
            ],
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'rest_create_book'],
                'permission_callback' => function () {
                    return current_user_can('manage_options');
                },
                'args' => [
                    'title'  => ['required' => true, 'type' => 'string'],
                    'author' => ['required' => true, 'type' => 'string'],
                ],
            ],
        ]);

        register_rest_route('book-manager/v1', '/books/(?P<id>\\d+)', [
            'methods'             => WP_REST_Server::DELETABLE,
            'callback'            => [$this, 'rest_delete_book'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);
    }

    public function rest_get_books(WP_REST_Request $request): WP_REST_Response {
        $books = self::get_all_books(['limit' => (int) ($request->get_param('limit') ?: 20)]);
        return new WP_REST_Response($books, 200);
    }

    public function rest_create_book(WP_REST_Request $request): WP_REST_Response {
        $id = self::create_book([
            'title'  => sanitize_text_field($request->get_param('title')),
            'author' => sanitize_text_field($request->get_param('author')),
            'isbn'   => sanitize_text_field($request->get_param('isbn') ?? ''),
            'year'   => (int) ($request->get_param('year') ?? 0),
        ]);

        if (!$id) {
            return new WP_REST_Response(['error' => 'Failed'], 500);
        }

        return new WP_REST_Response(self::get_book($id), 201);
    }

    public function rest_delete_book(WP_REST_Request $request): WP_REST_Response {
        $id = (int) $request['id'];
        if (!self::delete_book($id)) {
            return new WP_REST_Response(['error' => 'Not found'], 404);
        }
        return new WP_REST_Response(['deleted' => true], 200);
    }

    // ============= CRUD =============
    private static function table(): string {
        global $wpdb;
        return $wpdb->prefix . 'books';
    }

    public static function get_all_books(array $args = []): array {
        global $wpdb;
        $args = wp_parse_args($args, [
            'limit'   => 100,
            'author'  => '',
            'orderby' => 'created_at',
            'order'   => 'DESC',
        ]);

        $orderby = in_array($args['orderby'], ['title', 'author', 'year', 'created_at'], true)
            ? $args['orderby'] : 'created_at';
        $order = strtoupper($args['order']) === 'ASC' ? 'ASC' : 'DESC';
        $limit = (int) $args['limit'];
        $table = self::table();

        if ($args['author']) {
            return $wpdb->get_results($wpdb->prepare(
                "SELECT * FROM $table WHERE author = %s ORDER BY $orderby $order LIMIT %d",
                $args['author'], $limit
            ));
        }

        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $table ORDER BY $orderby $order LIMIT %d",
            $limit
        ));
    }

    public static function get_book(int $id): ?object {
        global $wpdb;
        $table = self::table();
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE id = %d", $id));
    }

    public static function create_book(array $data): int|false {
        global $wpdb;
        $result = $wpdb->insert(
            self::table(),
            [
                'title'       => $data['title'],
                'author'      => $data['author'],
                'isbn'        => $data['isbn'] ?? '',
                'year'        => $data['year'] ?? null,
                'description' => $data['description'] ?? '',
                'cover_url'   => $data['cover_url'] ?? '',
                'created_at'  => current_time('mysql'),
            ],
            ['%s', '%s', '%s', '%d', '%s', '%s', '%s']
        );

        return $result ? $wpdb->insert_id : false;
    }

    public static function update_book(int $id, array $data): bool {
        global $wpdb;
        return (bool) $wpdb->update(
            self::table(),
            [
                'title'       => $data['title'],
                'author'      => $data['author'],
                'isbn'        => $data['isbn'] ?? '',
                'year'        => $data['year'] ?? null,
                'description' => $data['description'] ?? '',
                'cover_url'   => $data['cover_url'] ?? '',
            ],
            ['id' => $id],
            ['%s', '%s', '%s', '%d', '%s', '%s'],
            ['%d']
        );
    }

    public static function delete_book(int $id): bool {
        global $wpdb;
        return (bool) $wpdb->delete(self::table(), ['id' => $id], ['%d']);
    }
}

Book_Manager::instance();

// ============= uninstall.php =============
/*
if (!defined('WP_UNINSTALL_PLUGIN')) exit;
global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}books");
delete_option('bm_version');
delete_option('bm_settings');
*/`,
          },
        ],
      },
      {
        id: "4",
        title: "Gutenberg Blocks và REST API",
        slug: "gutenberg-blocks-rest-api",
        duration: "85 phút",
        prerequisites: ["3"],
        content: `# Gutenberg Blocks và REST API

## Block Editor Basics

### Setup plugin cho blocks
\`\`\`bash
npx @wordpress/create-block my-blocks
cd my-blocks
npm start
\`\`\`

### Block registration
\`\`\`javascript
// src/block.json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "my-plugin/hero",
    "version": "1.0.0",
    "title": "Hero Section",
    "category": "design",
    "icon": "cover-image",
    "description": "A hero section with title, subtitle, and button",
    "keywords": ["hero", "banner", "header"],
    "supports": {
        "html": false,
        "align": ["wide", "full"],
        "color": {
            "background": true,
            "text": true
        },
        "spacing": {
            "padding": true
        }
    },
    "attributes": {
        "title": {
            "type": "string",
            "default": "Welcome"
        },
        "subtitle": {
            "type": "string",
            "default": ""
        },
        "buttonText": {
            "type": "string",
            "default": "Learn More"
        },
        "buttonUrl": {
            "type": "string",
            "default": ""
        },
        "backgroundImage": {
            "type": "object",
            "default": null
        }
    },
    "textdomain": "my-plugin",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css"
}
\`\`\`

### Edit component
\`\`\`jsx
// src/edit.js
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const {
        title,
        subtitle,
        buttonText,
        buttonUrl,
        backgroundImage,
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Button Settings', 'my-plugin')}>
                    <TextControl
                        label={__('Button URL', 'my-plugin')}
                        value={buttonUrl}
                        onChange={(value) => setAttributes({ buttonUrl: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Background', 'my-plugin')}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({
                                backgroundImage: { id: media.id, url: media.url }
                            })}
                            allowedTypes={['image']}
                            value={backgroundImage?.id}
                            render={({ open }) => (
                                <Button onClick={open} variant="secondary">
                                    {backgroundImage
                                        ? __('Replace Image', 'my-plugin')
                                        : __('Choose Image', 'my-plugin')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>

                    {backgroundImage && (
                        <Button
                            onClick={() => setAttributes({ backgroundImage: null })}
                            variant="link"
                            isDestructive
                        >
                            {__('Remove Image', 'my-plugin')}
                        </Button>
                    )}
                </PanelBody>
            </InspectorControls>

            <div
                {...blockProps}
                style={{
                    backgroundImage: backgroundImage
                        ? \`url(\${backgroundImage.url})\`
                        : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay">
                    <RichText
                        tagName="h1"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Enter title...', 'my-plugin')}
                        className="hero-title"
                    />

                    <RichText
                        tagName="p"
                        value={subtitle}
                        onChange={(value) => setAttributes({ subtitle: value })}
                        placeholder={__('Enter subtitle...', 'my-plugin')}
                        className="hero-subtitle"
                    />

                    <div className="hero-button">
                        <RichText
                            tagName="span"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                            className="button-text"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
\`\`\`

### Save component
\`\`\`jsx
// src/save.js
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        title,
        subtitle,
        buttonText,
        buttonUrl,
        backgroundImage,
    } = attributes;

    const blockProps = useBlockProps.save({
        style: {
            backgroundImage: backgroundImage
                ? \`url(\${backgroundImage.url})\`
                : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    });

    return (
        <div {...blockProps}>
            <div className="hero-overlay">
                <RichText.Content tagName="h1" value={title} className="hero-title" />
                <RichText.Content tagName="p" value={subtitle} className="hero-subtitle" />
                {buttonText && (
                    <a href={buttonUrl || '#'} className="hero-button">
                        <RichText.Content tagName="span" value={buttonText} />
                    </a>
                )}
            </div>
        </div>
    );
}
\`\`\`

### Block registration trong PHP
\`\`\`php
<?php
// my-plugin.php

function my_plugin_register_blocks() {
    register_block_type(__DIR__ . '/build/hero');
    register_block_type(__DIR__ . '/build/pricing-table');
}
add_action('init', 'my_plugin_register_blocks');

function my_plugin_enqueue_editor_assets() {
    wp_enqueue_script(
        'my-plugin-blocks',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
}
add_action('enqueue_block_editor_assets', 'my_plugin_enqueue_editor_assets');
\`\`\`

## Dynamic Blocks (PHP render)

\`\`\`php
// blocks/latest-books/block.json
{
    "name": "my-plugin/latest-books",
    "title": "Latest Books",
    "category": "widgets",
    "icon": "book",
    "attributes": {
        "count": { "type": "number", "default": 5 },
        "showExcerpt": { "type": "boolean", "default": true }
    },
    "render": "file:./render.php"
}

// blocks/latest-books/render.php
<?php
$count = $attributes['count'] ?? 5;
$show_excerpt = $attributes['showExcerpt'] ?? true;

$books = Book_Manager::get_all_books(['limit' => $count]);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'latest-books-block',
]);
?>
<div <?php echo $wrapper_attributes; ?>>
    <h2><?php esc_html_e('Latest Books', 'my-plugin'); ?></h2>
    <ul>
        <?php foreach ($books as $book): ?>
            <li>
                <strong><?php echo esc_html($book->title); ?></strong>
                <span>by <?php echo esc_html($book->author); ?></span>
                <?php if ($show_excerpt && $book->description): ?>
                    <p><?php echo esc_html(wp_trim_words($book->description, 20)); ?></p>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
\`\`\`

## Custom Block Variations

\`\`\`jsx
// src/variations.js
import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation('my-plugin/hero', {
    name: 'hero-dark',
    title: 'Dark Hero',
    description: 'Hero with dark background',
    attributes: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
    },
    isDefault: false,
});
\`\`\`

## Block Patterns

\`\`\`php
// register-patterns.php
add_action('init', function () {
    register_block_pattern_category('my-plugin', [
        'label' => __('My Plugin Patterns', 'my-plugin'),
    ]);

    register_block_pattern('my-plugin/hero-cta', [
        'title'       => __('Hero with CTA', 'my-plugin'),
        'description' => __('A hero section with call to action button', 'my-plugin'),
        'categories'  => ['my-plugin', 'call-to-action'],
        'content'     => '
            <!-- wp:my-plugin/hero -->
            <div class="wp-block-my-plugin-hero">
                <div class="hero-overlay">
                    <h1 class="hero-title">Build Amazing Things</h1>
                    <p class="hero-subtitle">Get started with our platform today</p>
                    <a href="#" class="hero-button"><span>Get Started</span></a>
                </div>
            </div>
            <!-- /wp:my-plugin/hero -->
        ',
    ]);
});
\`\`\`

## REST API Integration

\`\`\`javascript
// Trong block editor
import apiFetch from '@wordpress/api-fetch';

export default function Edit({ attributes, setAttributes }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch({ path: '/wp/v2/posts?per_page=5' })
            .then(posts => {
                setBooks(posts);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // ...
}
\`\`\`

## Block Transforms

\`\`\`javascript
// Từ paragraph sang hero
transforms: {
    from: [
        {
            type: 'block',
            blocks: ['core/paragraph'],
            transform: ({ content }) => {
                return createBlock('my-plugin/hero', {
                    title: content.replace(/<[^>]+>/g, ''),
                });
            },
        },
    ],
    to: [
        {
            type: 'block',
            blocks: ['core/paragraph'],
            transform: ({ title, subtitle }) => {
                return createBlock('core/paragraph', {
                    content: \`<h1>\${title}</h1><p>\${subtitle}</p>\`,
                });
            },
        },
    ],
}
\`\`\`

## Block Toolbar và Contextual Controls

\`\`\`jsx
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { formatBold } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes }) {
    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={attributes.textAlign}
                    onChange={(value) => setAttributes({ textAlign: value })}
                />
                <ToolbarGroup>
                    <ToolbarButton
                        icon={formatBold}
                        label="Toggle bold"
                        onClick={() => setAttributes({ bold: !attributes.bold })}
                    />
                </ToolbarGroup>
            </BlockControls>

            {/* block content */}
        </>
    );
}
\`\`\`

## Inner Blocks

\`\`\`jsx
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

const TEMPLATE = [
    ['core/heading', { level: 2, placeholder: 'Section title' }],
    ['core/paragraph', { placeholder: 'Section content' }],
];

export default function Edit() {
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: TEMPLATE,
        allowedBlocks: ['core/heading', 'core/paragraph', 'core/image'],
    });

    return <div {...innerBlocksProps} />;
}
\`\`\`

## WP REST API

### Đăng ký custom endpoint

\`\`\`php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/books', [
        [
            'methods'             => 'GET',
            'callback'            => 'my_plugin_rest_get_books',
            'permission_callback' => '__return_true',
            'args' => [
                'per_page' => [
                    'default'           => 10,
                    'sanitize_callback' => 'absint',
                ],
                'author' => [
                    'sanitize_callback' => 'sanitize_text_field',
                ],
            ],
        ],
        [
            'methods'             => 'POST',
            'callback'            => 'my_plugin_rest_create_book',
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            },
        ],
    ]);

    register_rest_route('my-plugin/v1', '/books/(?P<id>\\d+)', [
        'methods'             => 'DELETE',
        'callback'            => 'my_plugin_rest_delete_book',
        'permission_callback' => function () {
            return current_user_can('delete_posts');
        },
    ]);
});

function my_plugin_rest_get_books(WP_REST_Request $request): WP_REST_Response {
    $books = Book_Manager::get_all_books([
        'limit'  => $request->get_param('per_page'),
        'author' => $request->get_param('author') ?? '',
    ]);

    $response = new WP_REST_Response($books, 200);
    $response->header('X-Total-Count', count($books));
    return $response;
}

function my_plugin_rest_create_book(WP_REST_Request $request): WP_REST_Response|WP_Error {
    $title = $request->get_param('title');
    $author = $request->get_param('author');

    if (empty($title) || empty($author)) {
        return new WP_Error(
            'missing_data',
            __('Title and author are required.', 'my-plugin'),
            ['status' => 400]
        );
    }

    $id = Book_Manager::create_book([
        'title'  => sanitize_text_field($title),
        'author' => sanitize_text_field($author),
        'isbn'   => sanitize_text_field($request->get_param('isbn') ?? ''),
        'year'   => (int) ($request->get_param('year') ?? 0),
    ]);

    if (!$id) {
        return new WP_Error(
            'create_failed',
            __('Failed to create book.', 'my-plugin'),
            ['status' => 500]
        );
    }

    return new WP_REST_Response(Book_Manager::get_book($id), 201);
}

function my_plugin_rest_delete_book(WP_REST_Request $request): WP_REST_Response|WP_Error {
    $id = (int) $request['id'];

    if (!Book_Manager::get_book($id)) {
        return new WP_Error(
            'book_not_found',
            __('Book not found.', 'my-plugin'),
            ['status' => 404]
        );
    }

    Book_Manager::delete_book($id);
    return new WP_REST_Response(['deleted' => true], 200);
}
\`\`\`

### Custom post type REST support

\`\`\`php
register_post_type('book', [
    'public'       => true,
    'show_in_rest' => true,   // Enable REST API
    'rest_base'    => 'books',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
    'taxonomies'   => ['genre', 'author'],
]);

// Custom REST field
add_action('rest_api_init', function () {
    register_rest_field('book', 'rating', [
        'get_callback' => function ($post_array) {
            return (float) get_post_meta($post_array['id'], 'rating', true);
        },
        'update_callback' => function ($value, $post) {
            update_post_meta($post->ID, 'rating', (float) $value);
        },
        'schema' => [
            'type'    => 'number',
            'minimum' => 0,
            'maximum' => 5,
        ],
    ]);
});
\`\`\`

## Bài tập thực hành
Hãy tạo custom Gutenberg block và REST API!`,
        exercises: [
          {
            id: "4-1",
            title: "Custom Gutenberg Block",
            description: "Tạo block để hiển thị sách mới nhất",
            instructions: `Tạo:
1. Dynamic block "Latest Books"
2. Attributes cho count và layout
3. Server-side rendering
4. REST API integration
5. Block patterns`,
            type: "code",
            starterCode: `// src/index.js
import { registerBlockType } from '@wordpress/blocks';

// Viết code ở đây`,
            solution: `// ============= block.json =============
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "my-plugin/latest-books",
    "version": "1.0.0",
    "title": "Latest Books",
    "category": "widgets",
    "icon": "book-alt",
    "description": "Display the latest books",
    "keywords": ["books", "list", "latest"],
    "supports": {
        "html": false,
        "align": ["wide", "full"],
        "spacing": {
            "padding": true,
            "margin": true
        }
    },
    "attributes": {
        "count": {
            "type": "number",
            "default": 5
        },
        "columns": {
            "type": "number",
            "default": 3
        },
        "showExcerpt": {
            "type": "boolean",
            "default": true
        },
        "showAuthor": {
            "type": "boolean",
            "default": true
        },
        "orderBy": {
            "type": "string",
            "default": "created_at"
        }
    },
    "textdomain": "my-plugin",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css",
    "render": "file:./render.php"
}

// ============= src/index.js =============
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';

registerBlockType(metadata.name, {
    edit: Edit,
});

// ============= src/edit.js =============
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
    Placeholder,
    Spinner,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export default function Edit({ attributes, setAttributes }) {
    const { count, columns, showExcerpt, showAuthor, orderBy } = attributes;
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        apiFetch({
            path: \`/my-plugin/v1/books?per_page=\${count}&orderby=\${orderBy}\`,
        })
            .then(setBooks)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [count, orderBy]);

    const blockProps = useBlockProps({
        className: \`latest-books columns-\${columns}\`,
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Display Settings', 'my-plugin')}>
                    <RangeControl
                        label={__('Number of books', 'my-plugin')}
                        value={count}
                        onChange={(value) => setAttributes({ count: value })}
                        min={1}
                        max={20}
                    />

                    <RangeControl
                        label={__('Columns', 'my-plugin')}
                        value={columns}
                        onChange={(value) => setAttributes({ columns: value })}
                        min={1}
                        max={4}
                    />

                    <SelectControl
                        label={__('Order by', 'my-plugin')}
                        value={orderBy}
                        options={[
                            { label: __('Date', 'my-plugin'), value: 'created_at' },
                            { label: __('Title', 'my-plugin'), value: 'title' },
                            { label: __('Author', 'my-plugin'), value: 'author' },
                        ]}
                        onChange={(value) => setAttributes({ orderBy: value })}
                    />

                    <ToggleControl
                        label={__('Show excerpt', 'my-plugin')}
                        checked={showExcerpt}
                        onChange={(value) => setAttributes({ showExcerpt: value })}
                    />

                    <ToggleControl
                        label={__('Show author', 'my-plugin')}
                        checked={showAuthor}
                        onChange={(value) => setAttributes({ showAuthor: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {loading ? (
                    <div className="loading">
                        <Spinner />
                        <p>{__('Loading books...', 'my-plugin')}</p>
                    </div>
                ) : books.length === 0 ? (
                    <Placeholder
                        label={__('Latest Books', 'my-plugin')}
                        instructions={__('No books found. Add some books first.', 'my-plugin')}
                    />
                ) : (
                    <div className="books-grid">
                        {books.map((book) => (
                            <div key={book.id} className="book-card">
                                <h3 className="book-title">{book.title}</h3>
                                {showAuthor && (
                                    <p className="book-author">{book.author}</p>
                                )}
                                {showExcerpt && book.description && (
                                    <p className="book-excerpt">
                                        {book.description.substring(0, 100)}...
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

// ============= blocks/latest-books/render.php =============
<?php
$count = $attributes['count'] ?? 5;
$columns = $attributes['columns'] ?? 3;
$show_excerpt = $attributes['showExcerpt'] ?? true;
$show_author = $attributes['showAuthor'] ?? true;
$order_by = $attributes['orderBy'] ?? 'created_at';

$books = Book_Manager::get_all_books([
    'limit'   => $count,
    'orderby' => $order_by,
]);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => "latest-books columns-{$columns}",
]);
?>
<div <?php echo $wrapper_attributes; ?>>
    <?php if (empty($books)): ?>
        <p class="no-books"><?php esc_html_e('No books found.', 'my-plugin'); ?></p>
    <?php else: ?>
        <div class="books-grid">
            <?php foreach ($books as $book): ?>
                <div class="book-card">
                    <h3 class="book-title"><?php echo esc_html($book->title); ?></h3>
                    <?php if ($show_author): ?>
                        <p class="book-author"><?php echo esc_html($book->author); ?></p>
                    <?php endif; ?>
                    <?php if ($show_excerpt && !empty($book->description)): ?>
                        <p class="book-excerpt">
                            <?php echo esc_html(wp_trim_words($book->description, 20)); ?>
                        </p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>

// ============= style.css =============
// .latest-books .books-grid {
//     display: grid;
//     gap: 1.5rem;
// }
//
// .latest-books.columns-1 .books-grid { grid-template-columns: 1fr; }
// .latest-books.columns-2 .books-grid { grid-template-columns: repeat(2, 1fr); }
// .latest-books.columns-3 .books-grid { grid-template-columns: repeat(3, 1fr); }
// .latest-books.columns-4 .books-grid { grid-template-columns: repeat(4, 1fr); }
//
// .book-card {
//     background: #fff;
//     padding: 1.5rem;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }
//
// .book-title { margin: 0 0 0.5rem; }
// .book-author { color: #666; font-style: italic; }`,
          },
        ],
      },
      {
        id: "5",
        title: "Security, Performance và Deployment",
        slug: "security-performance-deployment",
        duration: "70 phút",
        prerequisites: ["4"],
        content: `# Security, Performance và Deployment

## Security Best Practices

### Sanitize inputs
\`\`\`php
// Text field
$text = sanitize_text_field($_POST['text']);

// Email
$email = sanitize_email($_POST['email']);

// URL
$url = esc_url_raw($_POST['url']);

// Textarea
$content = sanitize_textarea_field($_POST['content']);

// HTML content
$html = wp_kses_post($_POST['html']);

// Custom allowed HTML
$html = wp_kses($_POST['html'], [
    'a' => ['href' => [], 'title' => []],
    'strong' => [],
    'em' => [],
]);

// File name
$filename = sanitize_file_name($_FILES['file']['name']);
\`\`\`

### Escape outputs
\`\`\`php
// HTML text
echo esc_html($text);

// HTML attribute
echo esc_attr($attribute);

// URL
echo esc_url($url);

// JavaScript
echo esc_js($js_string);

// Textarea
echo esc_textarea($textarea);

// With translation
echo esc_html__('Text', 'my-plugin');

// printf patterns
printf(
    '<a href="%s" title="%s">%s</a>',
    esc_url($url),
    esc_attr($title),
    esc_html($link_text)
);
\`\`\`

### Nonces
\`\`\`php
// Form
<form method="post">
    <?php wp_nonce_field('my_action', 'my_nonce'); ?>
    <input type="text" name="data">
    <button type="submit">Save</button>
</form>

// Verify
if (!isset($_POST['my_nonce']) ||
    !wp_verify_nonce($_POST['my_nonce'], 'my_action')) {
    wp_die('Security check failed');
}

// Ajax
wp_localize_script('my-script', 'myData', [
    'nonce' => wp_create_nonce('my_ajax_nonce'),
]);

// Verify trong ajax handler
check_ajax_referer('my_ajax_nonce', 'nonce');
\`\`\`

### Capability checks
\`\`\`php
if (!current_user_can('manage_options')) {
    wp_die('Access denied');
}

if (!current_user_can('edit_post', $post_id)) {
    wp_die('You cannot edit this post');
}

// Trong AJAX
if (!current_user_can('edit_posts')) {
    wp_send_json_error('Unauthorized', 403);
}
\`\`\`

### SQL Injection
\`\`\`php
// Không tốt
$wpdb->query("SELECT * FROM table WHERE id = $id");

// Tốt - dùng prepare
$wpdb->prepare("SELECT * FROM table WHERE id = %d", $id);

// Với LIKE
$wpdb->prepare("SELECT * FROM table WHERE name LIKE %s",
    '%' . $wpdb->esc_like($term) . '%');

// Full query
$results = $wpdb->get_results($wpdb->prepare(
    "SELECT * FROM {$wpdb->prefix}books WHERE author = %s AND year > %d",
    $author, $year
));
\`\`\`

### File uploads
\`\`\`php
if (!function_exists('wp_handle_upload')) {
    require_once ABSPATH . 'wp-admin/includes/file.php';
}

$allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];

$uploaded = wp_handle_upload($_FILES['file'], [
    'test_form' => false,
    'mimes'     => [
        'jpg|jpeg' => 'image/jpeg',
        'png'      => 'image/png',
        'pdf'      => 'application/pdf',
    ],
]);

if (isset($uploaded['error'])) {
    wp_die($uploaded['error']);
}

// Insert to media library
$attachment = [
    'post_mime_type' => $uploaded['type'],
    'post_title'     => sanitize_file_name(basename($uploaded['file'])),
    'post_content'   => '',
    'post_status'    => 'inherit',
];

$attach_id = wp_insert_attachment($attachment, $uploaded['file']);
require_once ABSPATH . 'wp-admin/includes/image.php';
$metadata = wp_generate_attachment_metadata($attach_id, $uploaded['file']);
wp_update_attachment_metadata($attach_id, $metadata);
\`\`\`

## Performance Optimization

### Caching
\`\`\`php
// Transients
$data = get_transient('my_plugin_expensive_data');

if (false === $data) {
    $data = expensive_operation();
    set_transient('my_plugin_expensive_data', $data, HOUR_IN_SECONDS);
}

// Cache invalidation
delete_transient('my_plugin_expensive_data');

// Object cache (Redis/Memcached)
wp_cache_set('my_key', $value, 'my_group', 3600);
$value = wp_cache_get('my_key', 'my_group');

// Cache WP_Query
$query = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 10,
    'no_found_rows'  => true,           // Nếu không cần pagination
    'update_post_meta_cache' => false,   // Nếu không cần meta
    'update_post_term_cache' => false,   // Nếu không cần terms
]);
\`\`\`

### Query optimization
\`\`\`php
// Không tốt - N+1 queries
foreach ($posts as $post) {
    $author = get_the_author_meta('display_name', $post->post_author);
}

// Tốt - preload
$author_ids = wp_list_pluck($posts, 'post_author');
$authors = get_users(['include' => array_unique($author_ids)]);

// Meta query optimization
$query = new WP_Query([
    'post_type'  => 'book',
    'meta_query' => [
        'relation' => 'AND',
        [
            'key'     => 'price',
            'value'   => 100,
            'compare' => '<=',
            'type'    => 'NUMERIC',
        ],
    ],
    'meta_key'   => 'price',
    'orderby'    => 'meta_value_num',
]);
\`\`\`

### Enqueue assets properly
\`\`\`php
// Chỉ load khi cần
function my_plugin_enqueue() {
    // Chỉ load trên page cụ thể
    if (!is_page('contact')) {
        return;
    }

    wp_enqueue_script(
        'my-plugin-contact',
        plugins_url('js/contact.js', __FILE__),
        [],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'my_plugin_enqueue');

// Async/Defer
add_filter('script_loader_tag', function ($tag, $handle) {
    if ('my-plugin-analytics' !== $handle) {
        return $tag;
    }
    return str_replace(' src', ' async src', $tag);
}, 10, 2);
\`\`\`

### Database indexes
\`\`\`php
// Trong activation
$sql = "CREATE TABLE {$wpdb->prefix}books (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    year int(4) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY author (author),
    KEY year (year),
    KEY title_author (title(100), author(100))
) $charset_collate;";
\`\`\`

## Deployment

### Version control
\`\`\`bash
# .gitignore
wp-config.php
wp-content/uploads/
wp-content/upgrade/
wp-content/cache/
*.log
.env
node_modules/
vendor/
\`\`\`

### WP-CLI deploy
\`\`\`bash
# Sync files
rsync -avz --exclude='.git' --exclude='node_modules' \\
    ./ user@server:/var/www/html/wp-content/plugins/my-plugin/

# SSH and run commands
ssh user@server
cd /var/www/html
wp plugin activate my-plugin
wp cache flush
\`\`\`

### CI/CD với GitHub Actions
\`\`\`yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install deps
        run: npm ci

      - name: Build assets
        run: npm run build

      - name: Deploy via SSH
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: \${{ secrets.SSH_KEY }}
          REMOTE_HOST: \${{ secrets.HOST }}
          REMOTE_USER: \${{ secrets.USER }}
          SOURCE: "./"
          TARGET: "/var/www/html/wp-content/plugins/my-plugin/"
          EXCLUDE: "/node_modules/, /.git/, /src/"
\`\`\`

### Backup strategies
\`\`\`bash
# Backup database
wp db export backup-$(date +%Y%m%d).sql

# Restore
wp db import backup-20240101.sql

# Backup files
tar -czf backup-files-$(date +%Y%m%d).tar.gz wp-content/

# Automated backup script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Database
wp db export "$BACKUP_DIR/db_$DATE.sql" --path=/var/www/html

# Files
tar -czf "$BACKUP_DIR/files_$DATE.tar.gz" -C /var/www/html wp-content

# Cleanup old backups (keep 30 days)
find "$BACKUP_DIR" -type f -mtime +30 -delete
\`\`\`

### Security hardening
\`\`\`php
// wp-config.php
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true); // Disable plugin/theme installation via admin
define('FORCE_SSL_ADMIN', true);
define('WP_AUTO_UPDATE_CORE', 'minor');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove WP version
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

// Disable file editing
add_filter('wp_headers', function ($headers) {
    unset($headers['X-Pingback']);
    return $headers;
});

// Limit login attempts (dùng plugin như Limit Login Attempts)

// Force strong passwords
add_action('user_profile_update_errors', function ($errors, $update, $user) {
    if (!empty($_POST['pass1'])) {
        $strength = 0;
        if (strlen($_POST['pass1']) >= 12) $strength++;
        if (preg_match('/[A-Z]/', $_POST['pass1'])) $strength++;
        if (preg_match('/[0-9]/', $_POST['pass1'])) $strength++;
        if (preg_match('/[^A-Za-z0-9]/', $_POST['pass1'])) $strength++;

        if ($strength < 3) {
            $errors->add('weak_password', 'Password must be stronger.');
        }
    }
}, 10, 3);
\`\`\`

### .htaccess security
\`\`\`apache
# Protect wp-config.php
<files wp-config.php>
    order allow,deny
    deny from all
</files>

# Protect .htaccess
<files ~ "^.*\\.([Hh][Tt][Aa])">
    order allow,deny
    deny from all
    satisfy all
</files>

# Disable directory listing
Options -Indexes

# Protect wp-includes
<IfModule mod_rewrite.c>
    RewriteRule ^wp-admin/includes/ - [F,L]
    RewriteRule !^wp-includes/ - [S=3]
    RewriteRule ^wp-includes/[^/]+\\.php$ - [F,L]
    RewriteRule ^wp-includes/js/tinymce/langs/.+\\.php - [F,L]
    RewriteRule ^wp-includes/theme-compat/ - [F,L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
\`\`\`

## Bài tập thực hành
Hãy bảo mật và optimize plugin!`,
        exercises: [
          {
            id: "5-1",
            title: "Secure và Optimize Plugin",
            description: "Bảo mật và tối ưu plugin Book Manager",
            instructions: `Implement:
1. Nonce cho tất cả forms và AJAX
2. Sanitize inputs và escape outputs
3. Capability checks
4. Caching với transients
5. Database indexes
6. CI/CD workflow`,
            type: "code",
            starterCode: `<?php
// Security và performance improvements
// Viết code ở đây`,
            solution: `<?php
// ============= Security trong Book Manager =============

// 1. ADMIN PAGE với nonces
public function render_edit_page(): void {
    $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    if (!current_user_can('manage_options')) {
        wp_die(__('Access denied.', 'book-manager'));
    }

    $book = $id ? self::get_book($id) : null;

    if (isset($_POST['bm_save'])) {
        // Verify nonce
        if (!isset($_POST['bm_nonce']) ||
            !wp_verify_nonce($_POST['bm_nonce'], 'bm_save_book_' . $id)) {
            wp_die(__('Security check failed.', 'book-manager'));
        }

        // Sanitize all inputs
        $data = [
            'title'       => sanitize_text_field(wp_unslash($_POST['title'] ?? '')),
            'author'      => sanitize_text_field(wp_unslash($_POST['author'] ?? '')),
            'isbn'        => sanitize_text_field(wp_unslash($_POST['isbn'] ?? '')),
            'year'        => (int) ($_POST['year'] ?? 0),
            'description' => sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
            'cover_url'   => esc_url_raw(wp_unslash($_POST['cover_url'] ?? '')),
        ];

        // Validate
        if (empty($data['title']) || empty($data['author'])) {
            add_settings_error('bm', 'missing', __('Title and author are required.', 'book-manager'));
        } elseif ($data['year'] && ($data['year'] < 1000 || $data['year'] > (int) date('Y') + 1)) {
            add_settings_error('bm', 'year', __('Invalid year.', 'book-manager'));
        } else {
            if ($id) {
                self::update_book($id, $data);
            } else {
                self::create_book($data);
            }

            // Invalidate cache
            self::clear_cache();

            wp_safe_redirect(add_query_arg('saved', '1',
                admin_url('admin.php?page=book-manager')));
            exit;
        }
    }
    ?>
    <div class="wrap">
        <h1><?php echo esc_html($id ? 'Edit Book' : 'Add New Book'); ?></h1>

        <?php settings_errors('bm'); ?>

        <form method="post">
            <?php wp_nonce_field('bm_save_book_' . $id, 'bm_nonce'); ?>

            <table class="form-table">
                <tr>
                    <th>
                        <label for="title"><?php esc_html_e('Title', 'book-manager'); ?> <span class="required">*</span></label>
                    </th>
                    <td>
                        <input type="text"
                               id="title"
                               name="title"
                               class="regular-text"
                               value="<?php echo esc_attr($book->title ?? ''); ?>"
                               required
                               maxlength="255">
                    </td>
                </tr>
                <tr>
                    <th><label for="author"><?php esc_html_e('Author', 'book-manager'); ?> *</label></th>
                    <td>
                        <input type="text" id="author" name="author" class="regular-text"
                               value="<?php echo esc_attr($book->author ?? ''); ?>"
                               required maxlength="255">
                    </td>
                </tr>
                <tr>
                    <th><label for="isbn"><?php esc_html_e('ISBN', 'book-manager'); ?></label></th>
                    <td>
                        <input type="text" id="isbn" name="isbn" class="regular-text"
                               value="<?php echo esc_attr($book->isbn ?? ''); ?>"
                               maxlength="20">
                    </td>
                </tr>
                <tr>
                    <th><label for="year"><?php esc_html_e('Year', 'book-manager'); ?></label></th>
                    <td>
                        <input type="number" id="year" name="year"
                               min="1000" max="<?php echo esc_attr(date('Y') + 1); ?>"
                               value="<?php echo esc_attr($book->year ?? date('Y')); ?>">
                    </td>
                </tr>
                <tr>
                    <th><label for="description"><?php esc_html_e('Description', 'book-manager'); ?></label></th>
                    <td>
                        <textarea id="description" name="description" rows="5" class="large-text"><?php
                            echo esc_textarea($book->description ?? '');
                        ?></textarea>
                    </td>
                </tr>
                <tr>
                    <th><label for="cover_url"><?php esc_html_e('Cover URL', 'book-manager'); ?></label></th>
                    <td>
                        <input type="url" id="cover_url" name="cover_url" class="regular-text"
                               value="<?php echo esc_url($book->cover_url ?? ''); ?>">
                    </td>
                </tr>
            </table>

            <?php submit_button($id ? __('Update Book', 'book-manager') : __('Create Book', 'book-manager'), 'primary', 'bm_save'); ?>
        </form>
    </div>
    <?php
}

// 2. AJAX DELETE với capability + nonce
public function ajax_delete_book(): void {
    // Verify nonce
    check_ajax_referer('bm_nonce', 'nonce');

    // Check capability
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Unauthorized'], 403);
    }

    $id = isset($_POST['id']) ? absint($_POST['id']) : 0;

    if (!$id) {
        wp_send_json_error(['message' => 'Invalid ID'], 400);
    }

    if (!self::get_book($id)) {
        wp_send_json_error(['message' => 'Book not found'], 404);
    }

    if (self::delete_book($id)) {
        self::clear_cache();
        wp_send_json_success(['message' => 'Book deleted']);
    }

    wp_send_json_error(['message' => 'Delete failed'], 500);
}

// 3. CACHING với transients
class Book_Manager_Cache {
    const GROUP = 'book_manager';
    const TTL   = 300; // 5 minutes

    public static function get_books(array $args = []): array {
        $key = 'bm_books_' . md5(serialize($args));
        $cached = wp_cache_get($key, self::GROUP);

        if (false !== $cached) {
            return $cached;
        }

        $books = Book_Manager::get_all_books($args);
        wp_cache_set($key, $books, self::GROUP, self::TTL);

        return $books;
    }

    public static function clear(): void {
        wp_cache_flush_group(self::GROUP);
    }
}

// 4. DATABASE OPTIMIZATION
public static function activate(): void {
    global $wpdb;
    $table = $wpdb->prefix . 'books';
    $charset = $wpdb->get_charset_collate();

    // Composite indexes for common queries
    $sql = "CREATE TABLE $table (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        author varchar(255) NOT NULL,
        isbn varchar(20) DEFAULT NULL,
        year smallint(4) unsigned DEFAULT NULL,
        description text,
        cover_url varchar(500) DEFAULT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY author_year (author(100), year),
        KEY year_desc (year DESC),
        KEY created_at (created_at DESC),
        UNIQUE KEY isbn_unique (isbn)
    ) $charset;";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);

    add_option('bm_version', BM_VERSION);
    add_option('bm_db_version', '1.0.0');

    // Schedule cleanup
    if (!wp_next_scheduled('bm_cleanup_cache')) {
        wp_schedule_event(time(), 'hourly', 'bm_cleanup_cache');
    }
}

// 5. ENABLE OBJECT CACHE cho custom tables
public static function get_all_books(array $args = []): array {
    $cache_key = 'bm_all_' . md5(serialize($args));
    $cached = wp_cache_get($cache_key, 'book_manager');

    if (false !== $cached) {
        return $cached;
    }

    global $wpdb;
    $args = wp_parse_args($args, [
        'limit'   => 100,
        'author'  => '',
        'orderby' => 'created_at',
        'order'   => 'DESC',
    ]);

    $allowed_orderby = ['title', 'author', 'year', 'created_at'];
    $orderby = in_array($args['orderby'], $allowed_orderby, true)
        ? $args['orderby'] : 'created_at';
    $order = strtoupper($args['order']) === 'ASC' ? 'ASC' : 'DESC';
    $limit = max(1, min(1000, (int) $args['limit']));
    $table = self::table();

    if (!empty($args['author'])) {
        $results = $wpdb->get_results($wpdb->prepare(
            "SELECT id, title, author, year, description, cover_url, created_at
             FROM $table
             WHERE author = %s
             ORDER BY $orderby $order
             LIMIT %d",
            sanitize_text_field($args['author']),
            $limit
        ));
    } else {
        $results = $wpdb->get_results($wpdb->prepare(
            "SELECT id, title, author, year, description, cover_url, created_at
             FROM $table
             ORDER BY $orderby $order
             LIMIT %d",
            $limit
        ));
    }

    wp_cache_set($cache_key, $results, 'book_manager', 300);

    return $results;
}

// 6. GitHub Actions CI/CD
/*
name: Build and Deploy Book Manager

on:
  push:
    branches: [main]
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.2'
          tools: composer, phpunit

      - name: Validate composer
        run: composer validate --strict

      - name: Install dependencies
        run: composer install --prefer-dist --no-progress

      - name: Run PHP CodeSniffer
        run: vendor/bin/phpcs

      - name: Run PHPStan
        run: vendor/bin/phpstan analyse

      - name: Run tests
        run: vendor/bin/phpunit

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to production
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: \${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-rltgoDzvO --delete"
          SOURCE: "./"
          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}
          REMOTE_USER: \${{ secrets.REMOTE_USER }}
          TARGET: \${{ secrets.REMOTE_TARGET }}
          EXCLUDE: "/.git/, /node_modules/, /tests/"
*/

// 7. SECURITY HEADERS cho admin
add_action('admin_init', function () {
    if (!headers_sent()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('Referrer-Policy: strict-origin-when-cross-origin');
    }
});

// 8. SECURITY: Hide version
add_filter('script_loader_src', 'bm_remove_version_query', 9999);
add_filter('style_loader_src', 'bm_remove_version_query', 9999);

function bm_remove_version_query(string $src): string {
    if (strpos($src, 'ver=' . BM_VERSION) !== false) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}

// 9. Disable XML-RPC cho plugin security
add_filter('xmlrpc_enabled', '__return_false');

// 10. Rate limiting cho AJAX
function bm_rate_limit(string $action, int $max_requests = 30, int $window = 60): bool {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_id = get_current_user_id();
    $key = "bm_rate_{$action}_{$user_id}_{$ip}";

    $count = (int) get_transient($key);

    if ($count >= $max_requests) {
        return false;
    }

    set_transient($key, $count + 1, $window);
    return true;
}

add_action('wp_ajax_bm_save_book', function () {
    if (!bm_rate_limit('save_book', 20, 60)) {
        wp_send_json_error(['message' => 'Too many requests'], 429);
    }

    // ... existing logic
}, 5);`,
          },
        ],
      },
    ],
  },
];
