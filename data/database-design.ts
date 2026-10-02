import { Course } from "@/types";

export const databaseDesign: Course = {
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
};
