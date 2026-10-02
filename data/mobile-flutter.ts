import { Course } from "@/types";

export const mobileFlutter: Course = {
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
};
