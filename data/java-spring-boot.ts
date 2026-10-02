import { Course } from "@/types";

export const javaSpringBoot: Course = {
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
};
