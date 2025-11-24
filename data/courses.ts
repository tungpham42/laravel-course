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

text

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
        ],
      },
    ],
  },
];
