import { Course } from "@/types";

export const golangComplete: Course = {
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
};
