import { Course } from "@/types";

export const pythonBasics: Course = {
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
};
