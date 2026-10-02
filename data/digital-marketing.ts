import { Course } from "@/types";

export const digitalMarketing: Course = {
  id: "digital-marketing",
  slug: "marketing",
  title: "Digital Marketing Toàn tập",
  description:
    "Từ SEO, Content Marketing, Social Media đến Google Ads, Facebook Ads và Analytics",
  image: "/images/marketing-course.jpg",
  duration: "10 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Tổng quan Digital Marketing",
      slug: "tong-quan-digital-marketing",
      duration: "45 phút",
      content: `# Tổng quan Digital Marketing

## Digital Marketing là gì?
Digital Marketing là việc quảng bá sản phẩm/dịch vụ thông qua các kênh kỹ thuật số như website, mạng xã hội, email, search engine và các nền tảng quảng cáo trực tuyến.

## Các kênh Digital Marketing chính
- **SEO (Search Engine Optimization)**: Tối ưu hóa công cụ tìm kiếm
- **SEM/PPC**: Quảng cáo trả phí trên công cụ tìm kiếm
- **Content Marketing**: Marketing nội dung
- **Social Media Marketing**: Marketing mạng xã hội
- **Email Marketing**: Marketing qua email
- **Affiliate Marketing**: Marketing liên kết
- **Video Marketing**: Marketing qua video

## Phễu Marketing (Marketing Funnel)

### AIDA Model
1. **Awareness** - Nhận biết: Khách hàng biết đến thương hiệu
2. **Interest** - Quan tâm: Khách hàng tìm hiểu sản phẩm
3. **Desire** - Mong muốn: Khách hàng muốn sở hữu
4. **Action** - Hành động: Khách hàng mua hàng

### Phễu hiện đại
\`\`\`
TOFU (Top of Funnel)     → Awareness
MOFU (Middle of Funnel)  → Consideration
BOFU (Bottom of Funnel)  → Conversion
                         → Retention & Advocacy
\`\`\`

## Marketing Metrics cơ bản

### Chỉ số quan trọng
- **CTR** (Click-Through Rate) = Clicks / Impressions × 100%
- **CPC** (Cost Per Click) = Total Cost / Clicks
- **CPM** (Cost Per Mille) = Cost / Impressions × 1000
- **CPA** (Cost Per Acquisition) = Total Cost / Conversions
- **ROI** (Return on Investment) = (Revenue - Cost) / Cost × 100%
- **ROAS** (Return on Ad Spend) = Revenue / Ad Spend

### Ví dụ tính toán
\`\`\`
Chiến dịch Facebook Ads:
- Chi phí: 10.000.000đ
- Impressions: 500.000
- Clicks: 5.000
- Conversions: 100
- Revenue: 50.000.000đ

CTR = 5.000 / 500.000 = 1%
CPC = 10.000.000 / 5.000 = 2.000đ
CPM = 10.000.000 / 500.000 × 1000 = 20.000đ
CPA = 10.000.000 / 100 = 100.000đ
ROAS = 50.000.000 / 10.000.000 = 5x
ROI = (50.000.000 - 10.000.000) / 10.000.000 = 400%
\`\`\`

## Customer Persona

### Xây dựng chân dung khách hàng
\`\`\`
Demographics:
- Tuổi: 25-35
- Giới tính: Nữ
- Thu nhập: 15-30 triệu/tháng
- Địa điểm: TP.HCM, Hà Nội

Psychographics:
- Thích mua sắm online
- Quan tâm đến sức khỏe
- Ưa chuộng thương hiệu bền vững
- Active trên Facebook, Instagram, TikTok

Behaviors:
- Mua hàng qua mobile 70%
- So sánh giá trước khi mua
- Đọc review trước khi quyết định
- Mua lặp lại nếu sản phẩm tốt
\`\`\`

## Content Pillars

### 4 trụ cột nội dung
1. **Educational**: Dạy, hướng dẫn
2. **Entertaining**: Giải trí, thư giãn
3. **Inspiring**: Truyền cảm hứng
4. **Promotional**: Bán hàng trực tiếp

### Tỷ lệ 3-2-2-1
- 3 bài Educational
- 2 bài Entertaining
- 2 bài Inspiring
- 1 bài Promotional

## Bài tập thực hành
Hãy xây dựng customer persona và content strategy cho một sản phẩm!`,
      exercises: [
        {
          id: "1-1",
          title: "Xây dựng Marketing Strategy",
          description: "Lập kế hoạch marketing cho sản phẩm",
          instructions: `Chọn một sản phẩm/dịch vụ và xây dựng:
1. Customer persona (demographics, psychographics, behaviors)
2. Phễu marketing với 4 giai đoạn
3. Content pillars với tỷ lệ 3-2-2-1
4. KPIs cho mỗi giai đoạn`,
          type: "theory",
          solution: `# Marketing Strategy: Sản phẩm Nước hoa hữu cơ

## 1. Customer Persona
**Tên:** Nguyễn Thị Mai
**Tuổi:** 28
**Giới tính:** Nữ
**Thu nhập:** 20 triệu/tháng
**Địa điểm:** TP.HCM

**Psychographics:**
- Yêu thích sản phẩm thiên nhiên, organic
- Quan tâm đến môi trường
- Thường xuyên mua sắm online
- Active trên Instagram, TikTok

**Behaviors:**
- Mua qua mobile 80%
- Research kỹ trước khi mua
- Sẵn sàng trả giá cao cho sản phẩm chất lượng
- Thường recommend cho bạn bè nếu hài lòng

## 2. Marketing Funnel
**TOFU (Awareness):**
- TikTok video về "5 loại nước hoa hữu cơ hot nhất"
- Blog SEO: "Nước hoa hữu cơ là gì?"
- Facebook ads targeting women 25-35 yêu thiên nhiên

**MOFU (Consideration):**
- Email series: "Vì sao nên chọn nước hoa organic?"
- So sánh sản phẩm organic vs thường
- Reviews từ khách hàng cũ
- Retargeting ads cho website visitors

**BOFU (Conversion):**
- Discount code lần đầu
- Free shipping
- Combo deal
- Urgency: limited edition

**Retention:**
- Loyalty program
- Email re-engagement
- Referral bonus

## 3. Content Pillars
**Educational (3):**
- Cách phân biệt nước hoa organic thật/giả
- Bảo quản nước hoa đúng cách
- Các note hương cho mùa hè

**Entertaining (2):**
- TikTok chuyển trend với sản phẩm
- Behind-the-scenes video

**Inspiring (2):**
- Câu chuyện founder
- Customer testimonial

**Promotional (1):**
- Product launch announcement
- Flash sale

## 4. KPIs
- TOFU: Reach, Impressions, Video views
- MOFU: Engagement rate, Website visits, Email opens
- BOFU: Conversion rate, AOV, CPA
- Retention: Repeat purchase rate, LTV, NPS`,
        },
      ],
    },
    {
      id: "2",
      title: "SEO - Search Engine Optimization",
      slug: "seo",
      duration: "75 phút",
      prerequisites: ["1"],
      content: `# SEO - Search Engine Optimization

## SEO là gì?
SEO là quá trình tối ưu hóa website để đạt thứ hạng cao trên kết quả tìm kiếm tự nhiên của Google, Bing, và các search engine khác.

## 3 loại SEO chính

### 1. On-page SEO
Tối ưu hóa trên chính website của bạn.

### 2. Off-page SEO
Các yếu tố bên ngoài website (backlinks, social signals).

### 3. Technical SEO
Các yếu tố kỹ thuật (tốc độ, mobile-friendly, structured data).

## Keyword Research

### Phân loại keywords
\`\`\`
Theo độ dài:
- Short-tail: "nước hoa" (1-2 từ)
- Mid-tail: "nước hoa nữ" (2-3 từ)
- Long-tail: "nước hoa nữ hữu cơ giá rẻ" (4+ từ)

Theo intent:
- Informational: "nước hoa là gì"
- Navigational: "shop nước hoa ABC"
- Commercial: "nước hoa loại nào tốt"
- Transactional: "mua nước hoa online"
\`\`\`

### Công cụ nghiên cứu từ khóa
- **Google Keyword Planner** (miễn phí)
- **Ahrefs Keywords Explorer** (trả phí)
- **SEMrush** (trả phí)
- **Ubersuggest** (freemium)
- **Google Search Console** (miễn phí)

### Keyword metrics quan trọng
- **Search Volume**: Số lượng tìm kiếm/tháng
- **Keyword Difficulty (KD)**: Độ khó (0-100)
- **CPC**: Chi phí quảng cáo ước tính
- **Search Intent**: Ý định người dùng

## On-page SEO

### Title Tag
\`\`\`html
<title>Nước hoa hữu cơ cao cấp | 100% Natural | ShopName</title>
\`\`\`
- Độ dài: 50-60 ký tự
- Chứa keyword chính
- Hấp dẫn để tăng CTR

### Meta Description
\`\`\`html
<meta name="description" content="Khám phá bộ sưu tập nước hoa hữu cơ 100% thiên nhiên, an toàn cho da. Giao hàng miễn phí toàn quốc.">
\`\`\`
- Độ dài: 150-160 ký tự
- Có CTA
- Chứa keyword

### Heading Structure
\`\`\`html
<h1>Nước hoa hữu cơ - Sự lựa chọn của phái đẹp</h1>
<h2>Vì sao chọn nước hoa hữu cơ?</h2>
<h3>An toàn cho da nhạy cảm</h3>
<h3>Thân thiện môi trường</h3>
<h2>Các loại nước hoa organic phổ biến</h2>
\`\`\`

### URL Structure
\`\`\`
Tốt:
https://example.com/nuoc-hoa-huu-co

Không tốt:
https://example.com/p=123&cat=45
\`\`\`

### Image SEO
\`\`\`html
<img src="nuoc-hoa-organic.jpg" 
     alt="Nước hoa hữu cơ chai thủy tinh 50ml" 
     title="Nước hoa Organic cho nữ" 
     loading="lazy">
\`\`\`

## Technical SEO

### Page Speed
- **Core Web Vitals**: LCP, FID, CLS
- Nén ảnh (WebP, lazy loading)
- Minify CSS/JS
- CDN
- Caching

### Mobile-Friendly
- Responsive design
- Touch-friendly buttons
- Font size readable
- Không dùng Flash

### Structured Data (Schema.org)
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nước hoa hữu cơ XYZ",
  "image": "https://example.com/image.jpg",
  "description": "Nước hoa hữu cơ 100% thiên nhiên",
  "brand": {
    "@type": "Brand",
    "name": "BrandName"
  },
  "offers": {
    "@type": "Offer",
    "price": "500000",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
\`\`\`

### Sitemap và Robots.txt
\`\`\`
# robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /cart/

Sitemap: https://example.com/sitemap.xml
\`\`\`

## Off-page SEO

### Backlinks
- **Quality > Quantity**: 1 backlink từ VnExpress > 100 từ spam sites
- **Relevant**: Từ website cùng niche
- **Natural**: Tự nhiên, không mua link hàng loạt

### Link building strategies
1. **Guest posting**: Viết bài cho blog uy tín
2. **HARO**: Trả lời câu hỏi của journalist
3. **Broken link building**: Tìm broken links và đề xuất
4. **Skyscraper technique**: Tạo content tốt hơn competitors
5. **Digital PR**: Báo chí, PR online

### Domain Authority metrics
- **DA (Domain Authority)**: Moz
- **DR (Domain Rating)**: Ahrefs
- **AS (Authority Score)**: SEMrush

## SEO Audit Checklist

### On-page
- [ ] Title tags unique, có keyword
- [ ] Meta descriptions hấp dẫn
- [ ] H1 duy nhất mỗi trang
- [ ] Internal linking hợp lý
- [ ] Image alt tags đầy đủ
- [ ] URL thân thiện

### Technical
- [ ] Page speed > 90 (PageSpeed Insights)
- [ ] Mobile-friendly
- [ ] HTTPS
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Canonical tags

### Off-page
- [ ] Backlink profile chất lượng
- [ ] Social signals
- [ ] Brand mentions
- [ ] Google Business Profile

## Bài tập thực hành
Hãy audit SEO cho một website và đề xuất cải thiện!`,
      exercises: [
        {
          id: "2-1",
          title: "SEO Audit Report",
          description: "Thực hiện SEO audit cho một website",
          instructions: `Chọn một website và audit:
1. Keyword research cho 10 từ khóa
2. On-page analysis (title, meta, headings)
3. Technical check (speed, mobile, HTTPS)
4. Backlink profile
5. Đề xuất 10 cải thiện cụ thể`,
          type: "theory",
          solution: `# SEO Audit Report: Shop Thời Trang ABC

## 1. Keyword Research (Top 10)
| Keyword | Volume | KD | Intent |
|---------|--------|-----|--------|
| áo thun nam | 15K | 45 | Commercial |
| áo thun nam đẹp | 5K | 30 | Commercial |
| mua áo thun nam | 2K | 25 | Transactional |
| áo thun nam cotton | 3K | 35 | Commercial |
| áo thun nam hàn quốc | 4K | 40 | Commercial |
| áo thun nam form rộng | 2.5K | 28 | Commercial |
| áo thun nam cao cấp | 1.5K | 32 | Commercial |
| áo thun nam giá rẻ | 3.5K | 22 | Transactional |
| shop áo thun nam | 1.8K | 20 | Navigational |
| áo thun nam size lớn | 1.2K | 18 | Commercial |

## 2. On-page Analysis
**Vấn đề phát hiện:**
- Title tag: "Áo thun nam - Shop ABC" (quá ngắn, thiếu keyword)
- Meta description: Không có trên 30% pages
- H1 duplicates: 2 H1 trên homepage
- Image alt: 70% hình ảnh thiếu alt
- Internal links: Chỉ 3-5 links/page (nên 10-15)

**Đề xuất:**
\`\`\`html
<title>Áo Thun Nam Đẹp, Cao Cấp, Giá Rẻ | Shop ABC</title>
<meta name="description" content="Khám phá 500+ mẫu áo thun nam đẹp, cotton cao cấp. Giao hàng toàn quốc, đổi trả 30 ngày. Giảm 20% đơn đầu tiên.">
<h1>Áo Thun Nam - Bộ Sưu Tập Mới Nhất 2024</h1>
\`\`\`

## 3. Technical Check
- Page speed: 45/100 (mobile), 62/100 (desktop) → Cần cải thiện
- Mobile-friendly: ✓ Pass
- HTTPS: ✓ Pass
- Sitemap: Không có
- Robots.txt: Có nhưng chặn nhầm /products/

## 4. Backlink Profile
- Total backlinks: 234
- Referring domains: 45
- Domain Authority: 18
- Toxic links: 12 (cần disavow)

## 5. Top 10 Actionable Recommendations
1. Viết lại title tags cho tất cả pages (50-60 chars, có keyword)
2. Thêm meta descriptions cho 100% pages
3. Fix duplicate H1 trên homepage
4. Optimize images: alt text + nén WebP + lazy load
5. Tạo XML sitemap và submit lên Google Search Console
6. Fix robots.txt để cho phép crawl /products/
7. Cải thiện page speed: minify CSS/JS, CDN, browser caching
8. Xây dựng internal linking: 10-15 links/page
9. Disavow 12 toxic backlinks
10. Tạo content hub cho "áo thun nam" (20+ bài blog)`,
        },
      ],
    },
    {
      id: "3",
      title: "Content Marketing và Social Media",
      slug: "content-marketing-social-media",
      duration: "70 phút",
      prerequisites: ["2"],
      content: `# Content Marketing và Social Media

## Content Marketing

### Định nghĩa
Content Marketing là chiến lược tạo và phân phối nội dung có giá trị, liên quan và nhất quán để thu hút và giữ chân khán giả mục tiêu.

### Content Funnel
\`\`\`
Awareness (TOFU):
- Blog posts
- Infographics
- Videos ngắn
- Podcasts
- Social media posts

Consideration (MOFU):
- eBooks
- Whitepapers
- Webinars
- Case studies
- Email series

Conversion (BOFU):
- Product demos
- Free trials
- Consultations
- Testimonials
- Comparison guides
\`\`\`

### Content Formats
1. **Blog posts**: 1.500-2.500 từ cho SEO
2. **Videos**: YouTube, TikTok, Reels
3. **Infographics**: Hình ảnh trực quan
4. **Podcasts**: Audio content
5. **eBooks/Whitepapers**: Lead magnets
6. **Case studies**: Social proof
7. **Webinars**: Live education

### Content Calendar
\`\`\`
Thứ 2: Blog post (Educational)
Thứ 3: TikTok video
Thứ 4: Instagram carousel
Thứ 5: Blog post (Inspirational)
Thứ 6: Facebook Live
Thứ 7: Story behind the scenes
Chủ nhật: User-generated content
\`\`\`

## Copywriting

### AIDA Formula
\`\`\`
Attention: "Bạn có biết 90% người dùng mắc lỗi này khi chăm sóc da?"
Interest: "Hầu hết mọi người đều sử dụng sản phẩm sai cách..."
Desire: "Hãy tưởng tượng làn da căng mịn, rạng rỡ chỉ sau 2 tuần."
Action: "Đặt hàng ngay hôm nay - Giảm 30% cho 100 khách đầu tiên!"
\`\`\`

### 6 công thức headline hiệu quả
1. **How-to**: "Cách chăm sóc da mùa đông cho người da khô"
2. **Listicle**: "10 sai lầm khiến da bạn xấu đi"
3. **Question**: "Bạn đã rửa mặt đúng cách chưa?"
4. **Number**: "5 sản phẩm dưới 500K da bạn sẽ yêu"
5. **Controversial**: "Đừng bao giờ dùng toner nếu bạn chưa biết điều này"
6. **Story**: "Hành trình 5 năm chữa mụn của tôi"

## Social Media Marketing

### Facebook Marketing
\`\`\`
Page Setup:
- Ảnh cover: 820 x 312 px
- Profile: 180 x 180 px
- CTA button: "Mua ngay" / "Liên hệ"

Content types:
- Ảnh: 40%
- Video: 40%
- Text: 10%
- Link: 10%

Best times (Vietnam):
- 7-9h sáng
- 12-13h trưa
- 19-22h tối
\`\`\`

### Instagram Marketing
- **Feed posts**: 1080 x 1080 px
- **Stories**: 1080 x 1920 px
- **Reels**: 1080 x 1920 px (video ngắn)
- **Hashtags**: 20-30 per post
- **Bio**: Có link, CTA rõ ràng

### TikTok Marketing
- **Video length**: 15-60 giây
- **Trending sounds**: Luôn update
- **Hook**: 3 giây đầu quyết định
- **Hashtags**: #fyp #xuhuong #viral + niche tags

### Content Ideas theo Platform
\`\`\`
Facebook:
- Câu chuyện khách hàng
- Behind-the-scenes
- Khuyến mãi
- Mini-game

Instagram:
- Lifestyle photos
- Reels trends
- Carousel hướng dẫn
- Stories polls

TikTok:
- Trend challenge
- Product demo
- Tips nhanh
- POV content
\`\`\`

## Community Management

### Response Guidelines
\`\`\`
Comment tích cực: Response trong 1h, tone vui vẻ
Comment tiêu cực: Response trong 30 phút, xin lỗi chân thành
Câu hỏi sản phẩm: Response trong 15 phút với thông tin chính xác
Spam: Ẩn và block
\`\`\`

### UGC (User Generated Content)
- Khuyến khích khách hàng share
- Repost content chất lượng
- Tổ chức contest
- Feature khách hàng hàng tuần

## Influencer Marketing

### Phân loại influencer
\`\`\`
Nano (1K-10K): Engagement 5-8%
Micro (10K-100K): Engagement 3-6%
Macro (100K-1M): Engagement 2-3%
Mega (1M+): Engagement 1-2%
\`\`\`

### Chọn influencer phù hợp
- Niche relevance
- Engagement rate (không chỉ follower)
- Content quality
- Brand fit
- Audience demographics

## Email Marketing

### Email types
1. **Welcome email**: Ngay sau khi signup
2. **Nurture sequence**: 5-7 emails
3. **Promotional**: Sale, new product
4. **Re-engagement**: 30 ngày inactive
5. **Transactional**: Order confirm, shipping

### Metrics
- **Open rate**: 20-30% (industry avg)
- **CTR**: 2-3%
- **Conversion rate**: 1-5%
- **Unsubscribe rate**: <0.5%

### Email best practices
\`\`\`
Subject line:
- Ngắn (30-50 chars)
- Có urgency hoặc benefit
- Cá nhân hóa
- Không dùng CAPS LOCK toàn bộ

Body:
- Preheader 40-100 chars
- 1 CTA chính
- Mobile-friendly
- Personalization tokens
\`\`\`

## Bài tập thực hành
Hãy tạo Content Calendar và 1 tuần content cho brand!`,
      exercises: [
        {
          id: "3-1",
          title: "30-Day Content Calendar",
          description: "Lên kế hoạch content 30 ngày",
          instructions: `Tạo content calendar 30 ngày cho một brand bao gồm:
1. Content pillars với tỷ lệ phù hợp
2. Platform distribution
3. Posting schedule
4. 5 sample posts với caption
5. KPIs tracking`,
          type: "theory",
          solution: `# 30-Day Content Calendar: Cafe Sạch ABC

## Content Pillars (3-2-2-1)
- Educational: 30% (9 posts)
- Entertaining: 20% (6 posts)
- Inspiring: 20% (6 posts)
- Promotional: 10% (3 posts)
- UGC/Community: 20% (6 posts)

## Platform Distribution
- Facebook: 60% content
- Instagram: 60% content (cross-post)
- TikTok: 40% content (video only)

## Weekly Schedule
\`\`\`
Thứ 2: Blog + Facebook share
Thứ 3: TikTok video
Thứ 4: Instagram carousel
Thứ 5: Blog + TikTok
Thứ 6: Facebook Live
Thứ 7: Story + UGC
CN: TikTok trend video
\`\`\`

## Sample Posts

### Post 1 - Educational (Facebook)
**Headline:** 5 sai lầm khi pha cà phê tại nhà

**Caption:**
Bạn có biết 80% người pha cà phê tại nhà mắc ít nhất 3 lỗi trong số này?

1️⃣ Dùng nước quá nóng (trên 96°C)
2️⃣ Không cân lượng cà phê
3️⃣ Xay cà phê quá sớm
4️⃣ Bảo quản sai cách
5️⃣ Không vệ sinh máy đúng

Lưu lại để áp dụng ngay! 👇

#CafeSach #HomeBarista

### Post 2 - Entertaining (TikTok)
**Hook:** "POV: Bạn là barista và khách order cà phê 'ít đá nhưng nhiều nước'"
**Video:** 30s hài hước với trending sound
**Caption:** Có ai đồng cảm không ạ 😂 #baristalife

### Post 3 - Inspiring (Instagram)
**Visual:** Ảnh người nông dân hái cà phê
**Caption:** Từ vườn cà phê Đà Lạt đến tách cà phê của bạn - mỗi hạt là một câu chuyện về sự kiên nhẫn. ☕🌱

### Post 4 - Promotional (Facebook)
**Headline:** 🎉 KHAI TRƯƠNG CHI NHÁNH MỚI
**Caption:** Giảm 50% toàn menu cho 200 khách đầu tiên. Combo 2 ly chỉ 49K. 📍 123 Nguyễn Huệ, Q1

### Post 5 - UGC (Instagram)
Repost khách hàng với hashtag #CafeSachMoments + tag @cafesach

## KPIs Dashboard
| Metric | Target | Measurement |
|--------|--------|-------------|
| Reach | 100K | FB Insights |
| Engagement | 5% | Platform tools |
| Website visits | 5K | GA4 |
| Orders | 200 | POS |
| UGC posts | 50 | Hashtag search |

## Weekly Review
- Top performing post → Boost ads
- Low engagement → Adjust content
- Comments → FAQ for next week
- A/B test hooks và CTA`,
        },
      ],
    },
    {
      id: "4",
      title: "Google Ads và Facebook Ads",
      slug: "google-ads-facebook-ads",
      duration: "85 phút",
      prerequisites: ["3"],
      content: `# Google Ads và Facebook Ads

## Google Ads

### Các loại campaign
1. **Search**: Quảng cáo trên trang kết quả tìm kiếm
2. **Display**: Banner quảng cáo trên website
3. **Shopping**: Quảng cáo sản phẩm e-commerce
4. **Video (YouTube)**: Quảng cáo video
5. **Performance Max**: AI-optimized multi-channel
6. **App**: Quảng cáo app mobile

### Search Campaign Structure
\`\`\`
Account
└── Campaign (Budget, Location, Language)
    └── Ad Group (Theme, Keywords)
        ├── Keywords (10-20 per group)
        ├── Ads (2-3 variations)
        └── Landing Page
\`\`\`

### Keyword Match Types
\`\`\`
Broad match: nước hoa nữ
→ Hiển thị cho: nước hoa, nước hoa phụ nữ, hương thơm nữ

Phrase match: "nước hoa nữ"
→ Hiển thị cho: nước hoa nữ cao cấp, mua nước hoa nữ

Exact match: [nước hoa nữ]
→ Chỉ hiển thị khi search chính xác "nước hoa nữ"

Negative: -review
→ Loại bỏ search có "review"
\`\`\`

### Ad Copy Best Practices
\`\`\`
Headlines (30 chars, tối đa 15):
1. Nước Hoa Nữ Cao Cấp
2. Chính Hãng 100%
3. Freeship Toàn Quốc
4. Giảm 30% Hôm Nay

Descriptions (90 chars, tối đa 4):
1. Bộ sưu tập nước hoa nữ chính hãng từ Pháp, Ý. Cam kết 100% authentic.
2. Giao hàng 2h tại TP.HCM. Đổi trả miễn phí 30 ngày.
\`\`\`

### Quality Score
\`\`\`
Quality Score = Expected CTR + Ad Relevance + Landing Page Experience

Tác động:
- QS 10: Giảm 50% CPC
- QS 5: Giá trung bình
- QS 1: Tăng 400% CPC
\`\`\`

## Facebook Ads (Meta Ads)

### Campaign Objectives
\`\`\`
Awareness:
- Brand awareness
- Reach

Consideration:
- Traffic
- Engagement
- App installs
- Video views
- Lead generation
- Messages

Conversion:
- Conversions
- Catalog sales
- Store traffic
\`\`\`

### Campaign Structure
\`\`\`
Campaign (Objective, Budget)
└── Ad Set (Audience, Placement, Schedule)
    └── Ad (Creative, Copy, CTA)
        ├── Image/Video
        ├── Primary text (125 chars)
        ├── Headline (40 chars)
        └── Description (30 chars)
\`\`\`

### Targeting Options
\`\`\`
Demographics:
- Age, Gender
- Location
- Language
- Education
- Job title

Interests:
- Hobbies
- Pages liked
- Apps used

Behaviors:
- Purchase behavior
- Device usage
- Travel patterns

Custom Audiences:
- Customer list
- Website visitors
- App users
- Engagement

Lookalike Audiences:
- 1% (chất lượng cao)
- 5-10% (mở rộng)
\`\`\`

### Ad Creative Best Practices
\`\`\`
Image:
- 1080 x 1080 (feed)
- 1080 x 1920 (story)
- Ít text (<20%)
- Contrast cao
- Human faces
- Bright colors

Video:
- Hook 3 giây đầu
- Subtitle (85% xem không sound)
- 15-30 giây
- Square hoặc vertical

Copy:
- Primary text: hook + benefit + CTA
- Emoji hợp lý
- Social proof
- Urgency (khi phù hợp)
\`\`\`

### Facebook Pixel
\`\`\`html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
\`\`\`

### Standard Events
\`\`\`javascript
// View content
fbq('track', 'ViewContent', {
  content_ids: ['1234'],
  content_type: 'product',
  value: 100000,
  currency: 'VND'
});

// Add to cart
fbq('track', 'AddToCart', {
  content_ids: ['1234'],
  value: 100000,
  currency: 'VND'
});

// Purchase
fbq('track', 'Purchase', {
  value: 100000,
  currency: 'VND',
  contents: [{
    id: '1234',
    quantity: 1
  }]
});
\`\`\`

## A/B Testing

### Elements to test
1. **Audience**: Different targeting
2. **Creative**: Image vs video
3. **Copy**: Long vs short
4. **CTA**: "Mua ngay" vs "Tìm hiểu thêm"
5. **Landing page**: Different versions
6. **Placement**: Feed vs Story

### Test structure
\`\`\`
Test 1: Audience A vs Audience B
- Same creative, copy, budget
- Run 7 ngày
- So sánh CPM, CTR, CPA

Test 2: Creative A vs Creative B  
- Same audience, copy, budget
- Run 7 ngày
- So sánh engagement, CTR

Test 3: Copy A vs Copy B
- Winner từ Test 1 & 2
- Run 7 ngày
- So sánh conversion rate
\`\`\`

## Optimization

### Google Ads optimization
- Thêm negative keywords hàng tuần
- Pause keywords có QS < 5
- Bid adjustment theo device/time
- A/B test ad copies
- Improve landing pages

### Facebook Ads optimization
- Kill ads có frequency > 3
- Refresh creative mỗi 2-3 tuần
- Scale winner (20% budget/tuần)
- Test new audiences
- Retarget website visitors

## Budget Planning

### Phân bổ ngân sách mẫu (100tr/tháng)
\`\`\`
Google Search: 40tr (40%)
Facebook Ads: 35tr (35%)
TikTok Ads: 10tr (10%)
Retargeting: 15tr (15%)
\`\`\`

### Scaling rules
\`\`\`
Nếu ROAS > 3: Tăng budget 20-30%
Nếu ROAS 1.5-3: Giữ nguyên, optimize
Nếu ROAS < 1.5: Pause, review
Nếu ROAS < 1: Kill campaign
\`\`\`

## Bài tập thực hành
Hãy thiết kế campaign Google Ads và Facebook Ads!`,
      exercises: [
        {
          id: "4-1",
          title: "Multi-channel Ads Campaign",
          description: "Thiết kế campaign cho sản phẩm",
          instructions: `Thiết kế campaign cho sản phẩm "Kem chống nắng ABC" bao gồm:
1. Google Search campaign structure
2. Facebook Ads campaign
3. Ad copy cho mỗi platform
4. Targeting strategy
5. Budget phân bổ và KPIs`,
          type: "theory",
          solution: `# Multi-channel Ads Campaign: Kem Chống Nắng ABC

## 1. Google Search Campaign

### Campaign Settings
\`\`\`
Name: Search_KemChongNang_Conversion
Budget: 500.000đ/ngày
Bid strategy: Maximize Conversions
Target CPA: 80.000đ
Location: Vietnam
Language: Vietnamese
Device: All (bid +20% mobile)
Schedule: All day (bid +30% 19-22h)
\`\`\`

### Ad Group 1: Kem chống nắng nữ
**Keywords:**
\`\`\`
[kem chống nắng cho da dầu]
"kem chống nắng nữ"
kem chống nắng tốt nhất
kem chống nắng không gây mụn
-kem chống nắng nam
-dạy học
-review
\`\`\`

**Ads:**
\`\`\`
Headlines:
1. Kem Chống Nắng ABC
2. SPF50+ Không Gây Mụn
3. Chính Hãng 100%
4. Freeship Toàn Quốc
5. Giảm 30% Hôm Nay
6. Da Dầu Vẫn Thoáng Mát
7. Được Bác Sĩ Da Liễu Khuyên
8. 100.000+ Khách Hài Lòng
9. Mua 1 Tặng 1 Hôm Nay
10. Đổi Trả 30 Ngày

Descriptions:
1. Kem chống nắng ABC SPF50+ PA++++. Kiểm nghiệm da liễu. Không gây mụn, không bết dính. Đặt ngay!
2. Công thức độc quyền từ Hàn Quốc. Thấm nhanh, không nhờn. Giảm giá 30% cho 100 khách đầu.
\`\`\`

### Ad Group 2: Kem chống nắng trẻ em
**Keywords:**
\`\`\`
[kem chống nắng cho bé]
kem chống nắng trẻ em an toàn
kem chống nắng cho bé sơ sinh
\`\`\`

## 2. Facebook Ads Campaign

### Campaign Structure
\`\`\`
Campaign: KemChongNang_Conversion
Objective: Conversions
Budget: 700.000đ/ngày (CBO)
Optimization: Purchase
Pixel: Đã cài đặt
\`\`\`

### Ad Set 1: Interest Targeting
\`\`\`
Audience:
- Nữ 22-35
- Việt Nam (trừ vùng sâu)
- Interests: Skincare, Beauty, K-beauty, Mỹ phẩm Hàn Quốc
- Behaviors: Engaged shoppers, Mobile device users
- Exclude: Đã mua trong 30 ngày

Placement: Facebook Feed, Instagram Feed, Stories
Budget: 300.000đ/ngày
\`\`\`

### Ad Set 2: Lookalike
\`\`\`
Source: Customer list 5.000 người
Lookalike: 1% (Việt Nam)
Budget: 250.000đ/ngày
\`\`\`

### Ad Set 3: Retargeting
\`\`\`
Audience:
- Website visitors 30 ngày
- Add to cart chưa mua
- Video views 50%+

Budget: 150.000đ/ngày
\`\`\`

### Ad Creative

**Primary Text:**
\`\`\`
☀️ Nắng gắt không còn là nỗi lo với Kem Chống Nắng ABC!

✅ SPF50+ PA++++ bảo vệ tối đa
✅ Không gây mụn - kiểm nghiệm da liễu
✅ Thấm nhanh, không bết dính
✅ Phù hợp mọi loại da

🔥 GIẢM 30% - Chỉ hôm nay!
🎁 Mua 1 TẶNG 1 cho 100 khách đầu
🚚 Miễn phí ship toàn quốc

👉 Đặt ngay: [Link]
\`\`\`

**Headline:** Kem Chống Nắng ABC - Giảm 30%
**Description:** Freeship + Đổi trả 30 ngày
**CTA:** Shop Now

**Creative:**
- Video 15s: Before/After sau 2 tuần
- Image: Sản phẩm + UV test demo

## 3. Ad Copy Variations (Test)

### Variation A (Benefit-focused)
"Bảo vệ da khỏi 99% tia UV có hại. Kem chống nắng ABC SPF50+"

### Variation B (Social proof)
"100.000+ phụ nữ Việt đã chọn. Kem chống nắng ABC - Không gây mụn!"

### Variation C (Urgency)
"⏰ Chỉ còn 3 giờ! Giảm 30% Kem Chống Nắng ABC + Freeship"

## 4. Targeting Strategy

### Primary Audience
- Phụ nữ 22-40
- TP.HCM, Hà Nội, Đà Nẵng
- Thu nhập trung bình cao
- Quan tâm beauty, skincare

### Secondary Audience
- Lookalike 1% từ high-value customers
- Engaged với competitors
- Mẹ có con nhỏ (cho dòng trẻ em)

### Retargeting
- Website visitors 7-30 ngày
- Cart abandoners
- Video viewers 50%+
- Email subscribers chưa mua

## 5. Budget & KPIs

### Monthly Budget: 36.000.000đ
\`\`\`
Google Search: 15tr (42%)
Facebook Interest: 9tr (25%)
Facebook Lookalike: 7.5tr (21%)
Retargeting: 4.5tr (12%)
\`\`\`

### Target KPIs
| Channel | CPM | CTR | CPC | CVR | CPA | ROAS |
|---------|-----|-----|-----|-----|-----|------|
| Google Search | - | 5% | 8K | 4% | 200K | 5x |
| Facebook | 25K | 2% | 1.5K | 3% | 50K | 6x |
| Retargeting | 30K | 4% | 2K | 8% | 25K | 10x |

### Success Metrics
- CPA < 100K
- ROAS > 4x
- 500 đơn/tháng
- Revenue 200tr/tháng`,
        },
      ],
    },
    {
      id: "5",
      title: "Google Analytics và Data-driven Marketing",
      slug: "google-analytics-data-marketing",
      duration: "65 phút",
      prerequisites: ["4"],
      content: `# Google Analytics và Data-driven Marketing

## Google Analytics 4 (GA4)

### Setup GA4
\`\`\`html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

### GA4 vs Universal Analytics
\`\`\`
UA (cũ):
- Sessions-based
- Pageviews
- Bounce rate

GA4 (mới):
- Event-based
- Engagement rate
- Retention focus
- Cross-platform
- Privacy-first
\`\`\`

## GA4 Key Concepts

### Events
\`\`\`javascript
// Automatic events
page_view, scroll, click, first_visit, session_start

// Enhanced measurement
scroll (90%), outbound click, site search, video engagement

// Recommended events
purchase, add_to_cart, begin_checkout, view_item, sign_up, login

// Custom events
gtag('event', 'click_whatsapp', {
  'event_category': 'engagement',
  'event_label': 'header_button',
  'value': 1
});
\`\`\`

### Purchase Event
\`\`\`javascript
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 299000,
  tax: 0,
  shipping: 30000,
  currency: 'VND',
  items: [
    {
      item_id: 'SKU_12345',
      item_name: 'Kem chống nắng ABC',
      affiliation: 'Online Store',
      item_brand: 'ABC',
      item_category: 'Skincare',
      price: 299000,
      quantity: 1
    }
  ]
});
\`\`\`

### Conversions
\`\`\`
Mark as conversion:
- purchase
- add_to_cart
- begin_checkout
- generate_lead
- sign_up
- contact (custom)

Track via:
- Admin → Events → Mark as conversion
- Or in Google Ads: Import from GA4
\`\`\`

## Reports trong GA4

### Realtime
Xem user đang active ngay lúc này

### Acquisition Reports
\`\`\`
Traffic acquisition:
- Organic Search
- Direct
- Paid Search
- Social
- Referral
- Email

User acquisition:
- First user source
- First user medium
- First user campaign
\`\`\`

### Engagement Reports
- Pages and screens
- Events
- Conversions
- Landing pages

### Monetization Reports
- Ecommerce purchases
- Purchase journey
- Item performance
- Promotion performance

### Retention Reports
- Cohort analysis
- User retention
- Lifetime value

## Attribution Models

### Attribution models
\`\`\`
Last-click: 100% cho điểm chạm cuối
First-click: 100% cho điểm chạm đầu
Linear: Chia đều
Time decay: Nhiều hơn cho gần đây
Position-based: 40% first, 40% last, 20% middle
Data-driven: AI-based (GA4 default)
\`\`\`

### Ví dụ attribution
\`\`\`
Customer journey:
1. Facebook Ad (awareness)
2. Google Search (research)
3. Email (nurture)
4. Direct (purchase)

Last-click: Direct gets 100%
First-click: Facebook gets 100%
Data-driven: Chia cho cả 4
\`\`\`

## UTM Parameters

### Cấu trúc UTM
\`\`\`
https://example.com/product?
utm_source=facebook
&utm_medium=cpc
&utm_campaign=summer_sale_2024
&utm_content=video_ad_v1
&utm_term=kem_chong_nang
\`\`\`

### UTM Conventions
\`\`\`
utm_source: facebook, google, email, zalo
utm_medium: cpc, organic, email, social
utm_campaign: {name}_{year}_{month}
utm_content: {type}_{version}
utm_term: keyword (for paid search)
\`\`\`

## Conversion Rate Optimization (CRO)

### CRO Process
\`\`\`
1. Research: Analytics, heatmap, user feedback
2. Hypothesis: "If we change X, Y will improve by Z%"
3. Test: A/B test
4. Analyze: Statistical significance
5. Implement: Roll out winner
6. Repeat
\`\`\`

### Landing Page Optimization

**Above the fold:**
- Clear value proposition
- CTA visible
- Trust signals (badges, ratings)
- Hero image/video

**Below the fold:**
- Benefits (không phải features)
- Social proof
- FAQ
- Multiple CTAs

**Elements to test:**
1. Headline
2. CTA button (color, text, size)
3. Form fields (ít hơn = tốt hơn)
4. Social proof
5. Pricing display
6. Urgency elements

### Statistical Significance
\`\`\`
Sample size calculator:
- Baseline: 3% CVR
- Min detectable: 20% lift
- Confidence: 95%
- Power: 80%
→ Cần ~8.000 visitors/variant
\`\`\`

## Heatmaps và Session Recording

### Công cụ
- **Hotjar**: Heatmap, recording, feedback
- **Microsoft Clarity**: Free unlimited
- **Crazy Egg**: Heatmap, scrollmap

### Insights
\`\`\`
Heatmap:
- Click map: Điểm click nhiều
- Scroll map: Bao nhiêu user scroll đến đâu
- Move map: Chuột di chuyển

Session Recording:
- Xem user journey thực tế
- Phát hiện friction points
- Không phải để "spy" user
\`\`\`

## Data-driven Decision Making

### Framework
\`\`\`
1. Define goal (SMART)
2. Identify KPIs
3. Setup tracking
4. Collect data
5. Analyze insights
6. Make decision
7. Test & measure
8. Iterate
\`\`\`

### Dashboard mẫu
\`\`\`
Marketing Dashboard (Looker Studio):

ROW 1: Overview
- Users, Sessions, Conversions, Revenue
- WoW, MoM change

ROW 2: Acquisition
- Traffic by channel
- Top campaigns
- CPA by channel

ROW 3: Behavior
- Top landing pages
- Bounce rate by page
- Conversion funnel

ROW 4: Revenue
- Revenue by product
- AOV, LTV
- Customer acquisition cost
\`\`\`

## Reporting

### Weekly Report Template
\`\`\`
1. KPI Summary
   - Revenue, orders, AOV
   - Traffic, CVR
   - Ad spend, ROAS

2. Channel Performance
   - Google: spend, CPA, ROAS
   - Facebook: spend, CPA, ROAS
   - Email: open, CTR, revenue

3. Top Performers
   - Best campaigns
   - Best products
   - Best content

4. Issues & Insights
   - Underperformers
   - Opportunities
   - Learnings

5. Action Items
   - Next week priorities
   - Tests to run
   - Budget adjustments
\`\`\`

## Bài tập thực hành
Hãy setup GA4 và tạo dashboard!`,
      exercises: [
        {
          id: "5-1",
          title: "GA4 Setup & Dashboard",
          description: "Setup tracking và tạo dashboard",
          instructions: `Cho một website bán hàng:
1. Setup GA4 với events cần thiết
2. Tạo UTM convention
3. Setup conversion tracking
4. Thiết kế dashboard Looker Studio
5. Weekly report template`,
          type: "practice",
          solution: `# GA4 Setup & Dashboard

## 1. GA4 Tracking Setup

### Base Installation
\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX', {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure'
  });
</script>
\`\`\`

### E-commerce Events
\`\`\`javascript
// View item list
gtag('event', 'view_item_list', {
  item_list_id: 'homepage_featured',
  item_list_name: 'Featured Products',
  items: [
    { item_id: 'SKU_123', item_name: 'Kem chống nắng ABC', price: 299000 },
    { item_id: 'SKU_124', item_name: 'Serum Vitamin C', price: 450000 }
  ]
});

// View item detail
gtag('event', 'view_item', {
  currency: 'VND',
  value: 299000,
  items: [{ item_id: 'SKU_123', item_name: 'Kem chống nắng ABC', price: 299000 }]
});

// Add to cart
gtag('event', 'add_to_cart', {
  currency: 'VND',
  value: 299000,
  items: [{ item_id: 'SKU_123', item_name: 'Kem chống nắng ABC', price: 299000, quantity: 1 }]
});

// Begin checkout
gtag('event', 'begin_checkout', {
  currency: 'VND',
  value: 598000,
  items: [/* items */]
});

// Purchase
gtag('event', 'purchase', {
  transaction_id: 'T' + Date.now(),
  currency: 'VND',
  value: 598000,
  tax: 0,
  shipping: 30000,
  items: [/* items */]
});
\`\`\`

### Custom Events
\`\`\`javascript
// WhatsApp click
document.querySelectorAll('[data-track="whatsapp"]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: 'floating_button'
    });
  });
});

// Scroll 75%
let scrolled75 = false;
window.addEventListener('scroll', () => {
  if (!scrolled75 && 
      window.scrollY / (document.body.scrollHeight - window.innerHeight) > 0.75) {
    scrolled75 = true;
    gtag('event', 'scroll_75', {
      event_category: 'engagement'
    });
  }
});
\`\`\`

## 2. UTM Convention

### Standard Format
\`\`\`
Source:
- facebook, instagram, tiktok
- google, bing
- email, zalo, sms
- affiliate_{partner}

Medium:
- cpc, display, video (paid)
- organic, social (unpaid)
- email, newsletter
- referral, affiliate

Campaign naming:
{objective}_{product}_{time}
e.g., conv_kemchongnang_summer2024

Content:
{format}_{version}
e.g., video_v1, image_v2, carousel_a
\`\`\`

### Example URLs
\`\`\`
Facebook Ads:
https://shopabc.com/kem-chong-nang?utm_source=facebook&utm_medium=cpc&utm_campaign=conv_kcn_summer24&utm_content=video_v1

Email:
https://shopabc.com/sale?utm_source=email&utm_medium=newsletter&utm_campaign=promo_black_friday

Google:
https://shopabc.com/kem-chong-nang?utm_source=google&utm_medium=cpc&utm_campaign=search_kcn&utm_term=kem+chong+nang&gclid=xxx

TikTok:
https://shopabc.com/kem-chong-nang?utm_source=tiktok&utm_medium=paid&utm_campaign=conv_kcn_tiktok&utm_content=trend_a
\`\`\`

## 3. Conversion Tracking

### GA4 Conversions
\`\`\`
Admin → Events → Mark as conversion:
- purchase (primary)
- add_to_cart
- begin_checkout
- sign_up
- generate_lead

Import to Google Ads:
- Google Ads → Tools → Conversions
- Import from GA4
- Select conversions
\`\`\`

### Facebook Pixel Events
\`\`\`javascript
// View content
fbq('track', 'ViewContent', {
  content_ids: ['SKU_123'],
  content_type: 'product',
  value: 299000,
  currency: 'VND'
});

// Add to cart
fbq('track', 'AddToCart', {
  content_ids: ['SKU_123'],
  value: 299000,
  currency: 'VND'
});

// Purchase
fbq('track', 'Purchase', {
  value: 598000,
  currency: 'VND',
  contents: [{ id: 'SKU_123', quantity: 2 }]
});

// Custom event
fbq('trackCustom', 'ClickWhatsApp');
\`\`\`

## 4. Dashboard Looker Studio

### Pages & Layout

**Page 1: Executive Summary**
\`\`\`
KPI Scorecards:
- Revenue (vs previous period)
- Orders
- AOV (Average Order Value)
- Conversion Rate
- New Users

Charts:
- Revenue trend (line, last 30 days)
- Revenue by channel (pie)
- Top 5 products (table)
\`\`\`

**Page 2: Acquisition**
\`\`\`
Tables:
- Traffic by source/medium
- Campaign performance
- Top landing pages

Charts:
- Users by channel (bar)
- CPA by channel (bar)
- Conversion funnel (funnel)
\`\`\`

**Page 3: Behavior**
\`\`\`
Charts:
- Sessions by page (bar)
- Engagement rate by page
- User flow (sankey)

Tables:
- Top events
- Bounce rate by page
\`\`\`

**Page 4: Revenue**
\`\`\`
Charts:
- Revenue by product (bar)
- Revenue by category (pie)
- Revenue vs Ad Spend (combo)

Tables:
- Product performance
- LTV by cohort
- ROAS by channel
\`\`\`

### Data Sources
\`\`\`
- GA4 connector
- Google Ads connector
- Facebook Ads (Supermetrics)
- Google Sheets (import)
- BigQuery (advanced)
\`\`\`

## 5. Weekly Report Template

\`\`\`
📊 WEEKLY MARKETING REPORT
Week: {date range}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1️⃣ KPI OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Revenue:     250,000,000đ  (+15% WoW)
Orders:      500           (+12% WoW)
AOV:         500,000đ      (+3%)
CVR:         2.8%          (+0.2pp)
Ad Spend:    60,000,000đ   (+10%)
ROAS:        4.17x         (+5%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2️⃣ CHANNEL PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Google Search:
- Spend: 25M
- Revenue: 125M
- ROAS: 5.0x ✅

Facebook Ads:
- Spend: 25M
- Revenue: 90M
- ROAS: 3.6x ⚠️

Email:
- Sent: 50K
- Revenue: 20M
- ROAS: 20x ✅

Retargeting:
- Spend: 10M
- Revenue: 15M
- ROAS: 1.5x ❌

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3️⃣ TOP PERFORMERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Products:
1. Kem chống nắng ABC - 150 orders
2. Serum Vitamin C - 100 orders
3. Toner XYZ - 80 orders

Campaigns:
1. Search_KCN_Brand - ROAS 8x
2. FB_Lookalike_1% - ROAS 5x

Content:
1. TikTok "5 sai lầm skincare" - 500K views
2. Blog "Chọn kem chống nắng" - 10K visits

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4️⃣ ISSUES & INSIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Retargeting ROAS thấp - cần refresh creative
⚠️ Facebook frequency cao (4.2) - cần audience mới
✅ Email channel outstanding - tăng tần suất
💡 Mobile traffic tăng 30% - optimize mobile UX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5️⃣ ACTION ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Next week:
- [ ] Refresh FB retargeting creative
- [ ] Test new audience (18-24 tuổi)
- [ ] Launch email series "Tips skincare"
- [ ] A/B test mobile checkout
- [ ] Boost top TikTok content
\`\`\``,
        },
      ],
    },
  ],
};
