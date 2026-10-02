import { Course } from "@/types";

export const codeigniterFramework: Course = {
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
};
