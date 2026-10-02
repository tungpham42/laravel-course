import { Course } from "@/types";

export const symfonyFramework: Course = {
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
};
