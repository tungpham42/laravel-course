import { Course } from "@/types";

export const laravelBasics: Course = {
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
};
