import { Course } from "@/types";

export const htmlCssAdvanced: Course = {
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
};
