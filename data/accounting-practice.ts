import { Course } from "@/types";

export const accountingPractice: Course = {
  id: "accounting-practice",
  slug: "ketoan",
  title: "Kế toán Thực hành Toàn tập",
  description:
    "Kế toán doanh nghiệp, thuế, báo cáo tài chính và phần mềm kế toán",
  image: "/images/accounting-course.jpg",
  duration: "12 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Tổng quan Kế toán và Chuẩn mực",
      slug: "tong-quan-ke-toan",
      duration: "50 phút",
      content: `# Tổng quan Kế toán và Chuẩn mực

## Kế toán là gì?
Kế toán là quá trình ghi chép, phân loại, tổng hợp và báo cáo các giao dịch tài chính của một tổ chức.

## Vai trò của Kế toán
- **Ghi chép**: Ghi nhận mọi giao dịch tài chính
- **Kiểm soát**: Theo dõi tài sản, công nợ
- **Báo cáo**: Cung cấp thông tin cho nhà quản lý
- **Tuân thủ**: Đảm bảo tuân thủ pháp luật về thuế, kế toán
- **Ra quyết định**: Cung cấp dữ liệu cho decision making

## Nguyên tắc Kế toán cơ bản (VAS)

### 7 nguyên tắc cơ bản
\`\`\`
1. Cơ sở dồn tích (Accrual basis)
   - Ghi nhận khi phát sinh, không phải khi thu/chi tiền
   
2. Hoạt động liên tục (Going concern)
   - Doanh nghiệp hoạt động vô thời hạn
   
3. Giá gốc (Historical cost)
   - Ghi nhận theo giá gốc ban đầu
   
4. Phù hợp (Matching)
   - Chi phí phù hợp với doanh thu kỳ
   
5. Nhất quán (Consistency)
   - Áp dụng chính sách nhất quán
   
6. Thận trọng (Prudence)
   - Không đánh giá cao tài sản, không đánh giá thấp nợ
   
7. Trọng yếu (Materiality)
   - Bỏ qua các yếu tố không trọng yếu
\`\`\`

## Đối tượng Kế toán

### Tài sản (Assets)
\`\`\`
Tài sản ngắn hạn:
- Tiền mặt (111)
- Tiền gửi ngân hàng (112)
- Đầu tư ngắn hạn (121)
- Phải thu khách hàng (131)
- Hàng tồn kho (152, 153, 155, 156)

Tài sản dài hạn:
- TSCĐ hữu hình (211)
- TSCĐ vô hình (213)
- Đầu tư dài hạn (221)
- Xây dựng cơ bản dở dang (241)
\`\`\`

### Nguồn vốn (Liabilities + Equity)
\`\`\`
Nợ phải trả:
- Vay ngắn hạn (311)
- Phải trả người bán (331)
- Thuế phải nộp (333)
- Phải trả người lao động (334)

Vốn chủ sở hữu:
- Vốn góp (411)
- Lợi nhuận chưa phân phối (421)
- Quỹ đầu tư phát triển (414)
\`\`\`

## Hệ thống Tài khoản Kế toán (VAS)

### Phân loại tài khoản
\`\`\`
Loại 1: Tài sản ngắn hạn
Loại 2: Tài sản dài hạn
Loại 3: Nợ phải trả
Loại 4: Vốn chủ sở hữu
Loại 5: Doanh thu
Loại 6: Chi phí
Loại 7: Thu nhập khác
Loại 8: Chi phí khác
Loại 9: Xác định KQKD
Loại 0: Tài khoản ngoài bảng
\`\`\`

### Tài khoản thường dùng
\`\`\`
111 - Tiền mặt
112 - Tiền gửi ngân hàng
131 - Phải thu khách hàng
152 - Nguyên liệu, vật liệu
156 - Hàng hóa
211 - TSCĐ hữu hình
214 - Hao mòn TSCĐ
331 - Phải trả người bán
333 - Thuế và các khoản phải nộp NN
334 - Phải trả người lao động
411 - Vốn đầu tư của chủ sở hữu
421 - Lợi nhuận sau thuế chưa phân phối
511 - Doanh thu bán hàng
515 - Doanh thu hoạt động tài chính
632 - Giá vốn hàng bán
641 - Chi phí bán hàng
642 - Chi phí quản lý doanh nghiệp
\`\`\`

## Phương trình Kế toán

### Phương trình cơ bản
\`\`\`
TÀI SẢN = NỢ PHẢI TRẢ + VỐN CHỦ SỞ HỮU

Ví dụ:
Công ty A:
- Tài sản: 1 tỷ (Tiền: 300tr, Hàng: 500tr, TSCĐ: 200tr)
- Nợ phải trả: 400tr (Vay: 400tr)
- Vốn CSH: 600tr (Vốn góp: 500tr, LN: 100tr)

1.000.000.000 = 400.000.000 + 600.000.000 ✓
\`\`\`

## Kỳ Kế toán

### Các loại kỳ
\`\`\`
- Kỳ tháng (monthly)
- Kỳ quý (quarterly)
- Kỳ năm (annual): 1/1 - 31/12
\`\`\`

## Báo cáo Tài chính

### 4 báo cáo chính
\`\`\`
1. Bảng cân đối kế toán (Balance Sheet)
   - Tại 1 thời điểm
   - Tài sản = Nợ + Vốn CSH
   
2. Báo cáo KQKD (Income Statement)
   - Cho 1 kỳ
   - Doanh thu - Chi phí = Lợi nhuận
   
3. Báo cáo LCTT (Cash Flow Statement)
   - Cho 1 kỳ
   - Hoạt động KD, ĐT, TC
   
4. Thuyết minh BCTC
   - Giải thích chi tiết
   - Chính sách kế toán
\`\`\`

## Bài tập thực hành
Hãy phân loại các giao dịch và định khoản cơ bản!`,
      exercises: [
        {
          id: "1-1",
          title: "Định khoản giao dịch cơ bản",
          description: "Thực hành định khoản kế toán",
          instructions: `Định khoản các giao dịch sau:
1. Rút tiền gửi ngân hàng về nhập quỹ tiền mặt 100 triệu
2. Mua hàng hóa chưa trả tiền 50 triệu
3. Khách hàng trả nợ 30 triệu bằng chuyển khoản
4. Trả lương nhân viên 20 triệu bằng tiền mặt
5. Vay ngân hàng 200 triệu nhập quỹ tiền mặt`,
          type: "code",
          starterCode: `// Định khoản các giao dịch`,
          solution: `1. Rút tiền gửi ngân hàng về nhập quỹ tiền mặt 100tr:
   Nợ 111 - Tiền mặt: 100.000.000
   Có 112 - Tiền gửi ngân hàng: 100.000.000
   
   Giải thích: Tiền mặt tăng (Nợ), TGNH giảm (Có)

2. Mua hàng hóa chưa trả tiền 50tr:
   Nợ 156 - Hàng hóa: 50.000.000
   Có 331 - Phải trả người bán: 50.000.000
   
   Giải thích: Hàng hóa tăng (Nợ), Nợ phải trả tăng (Có)

3. Khách hàng trả nợ 30tr bằng chuyển khoản:
   Nợ 112 - Tiền gửi ngân hàng: 30.000.000
   Có 131 - Phải thu khách hàng: 30.000.000
   
   Giải thích: TGNH tăng (Nợ), Phải thu giảm (Có)

4. Trả lương nhân viên 20tr bằng tiền mặt:
   Nợ 334 - Phải trả người lao động: 20.000.000
   Có 111 - Tiền mặt: 20.000.000
   
   Giải thích: Nợ phải trả giảm (Nợ), Tiền mặt giảm (Có)

5. Vay ngân hàng 200tr nhập quỹ:
   Nợ 111 - Tiền mặt: 200.000.000
   Có 311 - Vay ngắn hạn: 200.000.000
   
   Giải thích: Tiền mặt tăng (Nợ), Vay tăng (Có)`,
        },
      ],
    },
    {
      id: "2",
      title: "Kế toán Tiền và Tương đương Tiền",
      slug: "ke-toan-tien",
      duration: "60 phút",
      prerequisites: ["1"],
      content: `# Kế toán Tiền và Tương đương Tiền

## Các tài khoản liên quan

### TK 111 - Tiền mặt
\`\`\`
TK 111 có 3 tiểu khoản:
- 1111: Tiền Việt Nam Đồng
- 1112: Ngoại tệ
- 1113: Vàng tiền tệ

Cấu trúc:
Nợ 111:
- Số dư đầu kỳ
- Các khoản tiền nhập quỹ

Có 111:
- Các khoản tiền xuất quỹ

Số dư Nợ: Tiền còn tồn quỹ
\`\`\`

### TK 112 - Tiền gửi ngân hàng
\`\`\`
TK 112 có 3 tiểu khoản:
- 1121: Tiền Việt Nam Đồng
- 1122: Ngoại tệ
- 1123: Vàng tiền tệ
\`\`\`

### TK 113 - Tiền đang chuyển
\`\`\`
Dùng khi:
- Nộp tiền vào ngân hàng chưa nhận giấy báo Có
- Chuyển tiền cho đơn vị khác chưa nhận
- Ngân hàng chuyển tiền chưa nhận
\`\`\`

## Nghiệp vụ Kế toán Tiền

### Rút TGNH về nhập quỹ tiền mặt
\`\`\`
Nợ 111: 100.000.000
Có 112: 100.000.000
\`\`\`

### Nộp tiền mặt vào ngân hàng
\`\`\`
Nợ 112: 100.000.000
Có 111: 100.000.000
\`\`\`

### Thu tiền bán hàng bằng tiền mặt
\`\`\`
Nợ 111: 110.000.000
Có 511: 100.000.000
Có 3331: 10.000.000 (VAT 10%)
\`\`\`

### Chi tiền mua văn phòng phẩm
\`\`\`
Nợ 642: 5.000.000
Nợ 1331: 500.000 (VAT)
Có 111: 5.500.000
\`\`\`

### Tạm ứng cho nhân viên đi công tác
\`\`\`
Khi tạm ứng:
Nợ 141: 10.000.000
Có 111: 10.000.000

Khi quyết toán (chi 9tr, trả lại 1tr):
Nợ 642: 8.181.818
Nợ 1331: 818.182
Nợ 111: 1.000.000
Có 141: 10.000.000
\`\`\`

## Kiểm soát Tiền mặt

### Sổ quỹ tiền mặt
\`\`\`
Ngày    Diễn giải          Thu        Chi        Tồn
01/10   Số dư đầu kỳ                            50.000.000
01/10   Thu tiền bán hàng  20.000.000            70.000.000
02/10   Chi mua VPP                    5.000.000  65.000.000
03/10   Rút TGNH nhập quỹ  100.000.000           165.000.000
\`\`\`

### Nguyên tắc kiểm soát
1. **Tách biệt nhiệm vụ**: Người giữ tiền ≠ người ghi sổ
2. **Kiểm kê định kỳ**: Đối chiếu quỹ thực tế vs sổ sách
3. **Giới hạn tồn quỹ**: Không giữ quá nhiều tiền mặt
4. **Ủy quyền chi**: Có phê duyệt của cấp trên
5. **Bảo quản an toàn**: Két sắt, camera, bảo hiểm

## Sổ Kế toán Tiền

### Sổ Nhật ký chung
\`\`\`
Ngày    Chứng từ   Diễn giải           TK Nợ   TK Có   Số tiền
01/10   PT001      Thu tiền KH A       111     131     30.000.000
01/10   PC001      Chi mua VPP         642     111     5.000.000
                                      1331    111     500.000
02/10   UNC001     Trả nợ NCC          331     112     50.000.000
\`\`\`

### Sổ cái TK 111
\`\`\`
Ngày    Diễn giải                TK đối ứng   Nợ         Có
01/10   Số dư đầu kỳ                                   50.000.000
01/10   Thu tiền KH A              131        30.000.000
01/10   Chi mua VPP                642                    5.000.000
                                   1331                   500.000
02/10   Rút TGNH                   112       100.000.000
...
Tổng phát sinh:                          130.000.000   5.500.000
Số dư cuối kỳ:                                       174.500.000
\`\`\`

## Chứng từ Kế toán Tiền

### Phiếu thu (Mẫu 01-TT)
\`\`\`
PHIẾU THU
Ngày 01 tháng 10 năm 2024
Số: PT001

Họ tên người nộp: Nguyễn Văn A
Địa chỉ: Công ty XYZ
Lý do: Thanh toán tiền hàng
Số tiền: 30.000.000đ
Bằng chữ: Ba mươi triệu đồng chẵn
Kèm theo: Hóa đơn 001

Người nộp tiền    Người lập phiếu    Kế toán trưởng    Thủ trưởng
   (ký)              (ký)               (ký)              (ký)
\`\`\`

### Phiếu chi (Mẫu 02-TT)
\`\`\`
PHIẾU CHI
Ngày 01 tháng 10 năm 2024
Số: PC001

Họ tên người nhận: Trần Thị B
Địa chỉ: Cửa hàng VPP ABC
Lý do: Mua văn phòng phẩm
Số tiền: 5.500.000đ
Bằng chữ: Năm triệu năm trăm nghìn đồng chẵn

Người nhận tiền    Người lập phiếu    Kế toán trưởng    Thủ trưởng
    (ký)              (ký)               (ký)              (ký)
\`\`\`

## Ngoại tệ

### Xử lý ngoại tệ
\`\`\`
Tỷ giá giao dịch thực tế:
- Mua ngoại tệ: giá mua
- Bán ngoại tệ: giá bán
- Nhận vốn: giá mua của ngân hàng

Ví dụ: Nhận 10.000 USD, TGTT 24.500
Nợ 1122: 245.000.000
Có 131: 245.000.000
\`\`\`

### Đánh giá lại cuối kỳ
\`\`\`
Chênh lệch tỷ giá:
- Lãi: Nợ 1122 / Có 515
- Lỗ: Nợ 635 / Có 1122

Ví dụ: 10.000 USD, TG ghi sổ 24.500, TG cuối kỳ 24.700
Chênh lệch = 10.000 × 200 = 2.000.000 (Lãi)
Nợ 1122: 2.000.000
Có 515: 2.000.000
\`\`\`

## Bài tập thực hành
Hãy ghi sổ kế toán tiền cho một tháng!`,
      exercises: [
        {
          id: "2-1",
          title: "Ghi sổ kế toán tiền mặt",
          description: "Thực hành ghi sổ quỹ và sổ cái",
          instructions: `Công ty ABC có số dư đầu kỳ TK 111: 50.000.000đ
Trong tháng 10 phát sinh:
1. 02/10: Thu tiền bán hàng 22.000.000 (VAT 10%)
2. 05/10: Chi mua VPP 3.300.000 (VAT 10%)
3. 08/10: Rút TGNH nhập quỹ 100.000.000
4. 10/10: Tạm ứng NV đi công tác 5.000.000
5. 15/10: Trả lương NV 30.000.000
6. 20/10: Nộp tiền vào NH 80.000.000
7. 25/10: Chi tiếp khách 2.200.000 (VAT 10%)

Yêu cầu: Ghi sổ quỹ, sổ cái TK 111, tính số dư cuối kỳ`,
          type: "code",
          starterCode: `// Ghi sổ kế toán tiền mặt`,
          solution: `# ĐỊNH KHOẢN

1. 02/10: Thu tiền bán hàng
   Nợ 111: 22.000.000
   Có 511: 20.000.000
   Có 3331: 2.000.000

2. 05/10: Chi mua VPP
   Nợ 642: 3.000.000
   Nợ 1331: 300.000
   Có 111: 3.300.000

3. 08/10: Rút TGNH
   Nợ 111: 100.000.000
   Có 112: 100.000.000

4. 10/10: Tạm ứng
   Nợ 141: 5.000.000
   Có 111: 5.000.000

5. 15/10: Trả lương
   Nợ 334: 30.000.000
   Có 111: 30.000.000

6. 20/10: Nộp tiền vào NH
   Nợ 112: 80.000.000
   Có 111: 80.000.000

7. 25/10: Chi tiếp khách
   Nợ 642: 2.000.000
   Nợ 1331: 200.000
   Có 111: 2.200.000

# SỔ QUỸ TIỀN MẶT
| Ngày | Diễn giải | Thu | Chi | Tồn |
|------|-----------|-----|-----|-----|
| 01/10 | Số dư đầu kỳ | | | 50.000.000 |
| 02/10 | Thu tiền bán hàng | 22.000.000 | | 72.000.000 |
| 05/10 | Chi mua VPP | | 3.300.000 | 68.700.000 |
| 08/10 | Rút TGNH | 100.000.000 | | 168.700.000 |
| 10/10 | Tạm ứng NV | | 5.000.000 | 163.700.000 |
| 15/10 | Trả lương | | 30.000.000 | 133.700.000 |
| 20/10 | Nộp tiền vào NH | | 80.000.000 | 53.700.000 |
| 25/10 | Chi tiếp khách | | 2.200.000 | 51.500.000 |
| | **Tổng** | **122.000.000** | **120.500.000** | **51.500.000** |

# SỔ CÁI TK 111
| Ngày | Diễn giải | TK ĐƯ | Nợ | Có |
|------|-----------|-------|-----|-----|
| 01/10 | Số dư đầu | | | 50.000.000 |
| 02/10 | Thu bán hàng | 511 | 20.000.000 | |
| | | 3331 | 2.000.000 | |
| 05/10 | Mua VPP | 642 | | 3.000.000 |
| | | 1331 | | 300.000 |
| 08/10 | Rút TGNH | 112 | 100.000.000 | |
| 10/10 | Tạm ứng | 141 | | 5.000.000 |
| 15/10 | Trả lương | 334 | | 30.000.000 |
| 20/10 | Nộp NH | 112 | | 80.000.000 |
| 25/10 | Tiếp khách | 642 | | 2.000.000 |
| | | 1331 | | 200.000 |
| | **Tổng PS** | | **122.000.000** | **120.500.000** |
| | **Số dư cuối** | | **51.500.000** | |`,
        },
      ],
    },
    {
      id: "3",
      title: "Kế toán Hàng tồn kho",
      slug: "ke-toan-hang-ton-kho",
      duration: "70 phút",
      prerequisites: ["2"],
      content: `# Kế toán Hàng tồn kho

## Tài khoản Hàng tồn kho

### Các TK chính
\`\`\`
151 - Hàng mua đang đi đường
152 - Nguyên liệu, vật liệu
153 - Công cụ, dụng cụ
154 - Chi phí SXKD dở dang
155 - Thành phẩm
156 - Hàng hóa
157 - Hàng gửi đi bán
\`\`\`

## Các phương pháp tính giá hàng tồn kho

### 1. Phương pháp Nhập trước - Xuất trước (FIFO)
\`\`\`
Ví dụ:
- Tồn đầu: 100kg × 10.000 = 1.000.000
- Nhập lần 1: 200kg × 12.000 = 2.400.000
- Nhập lần 2: 150kg × 11.000 = 1.650.000
- Xuất 250kg:
  - 100kg × 10.000 = 1.000.000 (tồn đầu)
  - 150kg × 12.000 = 1.800.000 (nhập 1)
  → Giá xuất = 2.800.000
- Tồn cuối: 50kg × 12.000 + 150kg × 11.000 = 2.250.000
\`\`\`

### 2. Phương pháp Bình quân gia quyền
\`\`\`
a) Bình quân cả kỳ dự trữ:
Đơn giá BQ = (Giá tồn ĐK + Giá nhập TK) / (SL tồn ĐK + SL nhập TK)

Ví dụ:
= (1.000.000 + 2.400.000 + 1.650.000) / (100 + 200 + 150)
= 5.050.000 / 450 = 11.222đ/kg

b) Bình quân liên hoàn (sau mỗi lần nhập):
Sau nhập 1:
= (1.000.000 + 2.400.000) / (100 + 200) = 11.333đ/kg
Sau nhập 2:
= (300 × 11.333 + 1.650.000) / (300 + 150) = 11.222đ/kg
\`\`\`

### 3. Phương pháp Thực tế đích danh
\`\`\`
Xuất lô nào ghi giá lô đó
Phù hợp với hàng có giá trị cao, dễ nhận biết
\`\`\`

### 4. Phương pháp Giá hạch toán
\`\`\`
Sử dụng giá ổn định trong kỳ
Cuối kỳ điều chỉnh về giá thực tế
\`\`\`

## Nghiệp vụ Mua hàng

### Mua hàng nhập kho, chưa trả tiền
\`\`\`
Nợ 156: 100.000.000
Nợ 1331: 10.000.000
Có 331: 110.000.000
\`\`\`

### Mua hàng đã trả tiền mặt
\`\`\`
Nợ 156: 100.000.000
Nợ 1331: 10.000.000
Có 111: 110.000.000
\`\`\`

### Chi phí vận chuyển
\`\`\`
Nợ 156: 2.000.000
Nợ 1331: 200.000
Có 111: 2.200.000
\`\`\`

### Mua hàng đang đi đường
\`\`\`
Khi mua:
Nợ 151: 100.000.000
Nợ 1331: 10.000.000
Có 331: 110.000.000

Khi hàng về nhập kho:
Nợ 156: 100.000.000
Có 151: 100.000.000
\`\`\`

## Nghiệp vụ Bán hàng

### Bán hàng thu tiền mặt
\`\`\`
a) Ghi doanh thu:
Nợ 111: 220.000.000
Có 511: 200.000.000
Có 3331: 20.000.000

b) Ghi giá vốn:
Nợ 632: 150.000.000
Có 156: 150.000.000
\`\`\`

### Bán hàng chưa thu tiền
\`\`\`
Nợ 131: 220.000.000
Có 511: 200.000.000
Có 3331: 20.000.000

Nợ 632: 150.000.000
Có 156: 150.000.000
\`\`\`

### Chiết khấu thương mại
\`\`\`
Nợ 521: 5.000.000
Nợ 3331: 500.000
Có 131: 5.500.000
\`\`\`

### Chiết khấu thanh toán
\`\`\`
Nợ 635: 2.000.000
Có 131: 2.000.000
\`\`\`

## Kế toán Dự phòng Giảm giá HTK

### Trích lập dự phòng
\`\`\`
Nợ 632: Số trích lập
Có 2294: Số trích lập

Ví dụ: HTK giá gốc 100tr, giá trị thuần 80tr
Nợ 632: 20.000.000
Có 2294: 20.000.000
\`\`\`

### Hoàn nhập dự phòng
\`\`\`
Nợ 2294: Số hoàn nhập
Có 632: Số hoàn nhập
\`\`\`

## Kiểm kê Hàng tồn kho

### Thừa HTK
\`\`\`
Chưa rõ nguyên nhân:
Nợ 156: Giá trị thừa
Có 3381: Giá trị thừa

Khi có quyết định xử lý:
Nợ 3381
Có 711 (nếu cho vào thu nhập khác)
\`\`\`

### Thiếu HTK
\`\`\`
Chưa rõ nguyên nhân:
Nợ 1381: Giá trị thiếu
Có 156: Giá trị thiếu

Xử lý:
- Cá nhân bồi thường: Nợ 334 / Có 1381
- Tính vào chi phí: Nợ 632 / Có 1381
- Bắt buộc bồi thường: Nợ 1388 / Có 1381
\`\`\`

## Sổ Kế toán HTK

### Thẻ kho
\`\`\`
Mã: SP001 - Tên: Áo thun nam
ĐVT: Cái

| Ngày | Chứng từ | Diễn giải | Nhập | Xuất | Tồn |
|------|----------|-----------|------|------|-----|
| 01/10 | | Tồn đầu | | | 100 |
| 05/10 | PN001 | Nhập mua | 200 | | 300 |
| 10/10 | PX001 | Xuất bán | | 150 | 150 |
| 15/10 | PN002 | Nhập mua | 100 | | 250 |
| 20/10 | PX002 | Xuất bán | | 200 | 50 |
\`\`\`

### Sổ chi tiết HTK
\`\`\`
TK 156 - Áo thun nam

| Ngày | Diễn giải | TK ĐƯ | Đơn giá | Nhập | Xuất | Tồn |
|------|-----------|-------|---------|------|------|-----|
| 01/10 | Tồn đầu | | 100 | | | 10.000.000 |
| 05/10 | Nhập mua | 331 | 110 | 22.000.000 | | 32.000.000 |
| 10/10 | Xuất bán | 632 | 105 | | 15.750.000 | 16.250.000 |
\`\`\`

## Bài tập thực hành
Hãy tính giá xuất kho theo các phương pháp!`,
      exercises: [
        {
          id: "3-1",
          title: "Tính giá xuất kho",
          description: "Thực hành tính giá theo FIFO và Bình quân",
          instructions: `Công ty ABC có tình hình hàng hóa X trong tháng:
- Tồn đầu: 100 đơn vị × 50.000 = 5.000.000
- 05/10 nhập: 200 đơn vị × 55.000 = 11.000.000
- 10/10 nhập: 150 đơn vị × 52.000 = 7.800.000
- 15/10 xuất bán: 300 đơn vị
- 20/10 nhập: 100 đơn vị × 54.000 = 5.400.000
- 25/10 xuất bán: 150 đơn vị

Yêu cầu:
1. Tính giá xuất kho theo FIFO
2. Tính giá xuất kho theo Bình quân liên hoàn
3. Tính giá xuất kho theo Bình quân cả kỳ`,
          type: "code",
          starterCode: `// Tính giá xuất kho theo các phương pháp`,
          solution: `# PHƯƠNG PHÁP FIFO

## Xuất 15/10 (300 đơn vị):
- 100 × 50.000 = 5.000.000 (tồn đầu)
- 200 × 55.000 = 11.000.000 (nhập 05/10)
→ Tổng = 16.000.000

## Tồn sau 15/10:
- 150 × 52.000 = 7.800.000

## Xuất 25/10 (150 đơn vị):
- 150 × 52.000 = 7.800.000

## Tồn cuối:
- 100 × 54.000 = 5.400.000

## Tổng giá xuất FIFO = 16.000.000 + 7.800.000 = 23.800.000

---

# PHƯƠNG PHÁP BÌNH QUÂN LIÊN HOÀN

## Sau nhập 05/10:
Đơn giá = (5.000.000 + 11.000.000) / (100 + 200) = 53.333đ

## Sau nhập 10/10:
Đơn giá = (300 × 53.333 + 7.800.000) / 450
        = (16.000.000 + 7.800.000) / 450
        = 23.800.000 / 450 = 52.889đ

## Xuất 15/10 (300):
= 300 × 52.889 = 15.866.700
Tồn = 150 × 52.889 = 7.933.300

## Sau nhập 20/10:
Đơn giá = (7.933.300 + 5.400.000) / 250
        = 13.333.300 / 250 = 53.333đ

## Xuất 25/10 (150):
= 150 × 53.333 = 8.000.000
Tồn cuối = 100 × 53.333 = 5.333.300

## Tổng giá xuất BQ liên hoàn = 15.866.700 + 8.000.000 = 23.866.700

---

# PHƯƠNG PHÁP BÌNH QUÂN CẢ KỲ

Tổng giá trị tồn + nhập = 5.000.000 + 11.000.000 + 7.800.000 + 5.400.000
                        = 29.200.000
Tổng số lượng = 100 + 200 + 150 + 100 = 550
Đơn giá BQ = 29.200.000 / 550 = 53.090đ

Tổng xuất = (300 + 150) × 53.090 = 450 × 53.090 = 23.890.500
Tồn cuối = 100 × 53.090 = 5.309.000

---

# SO SÁNH
| Phương pháp | Giá xuất | Tồn cuối |
|-------------|----------|----------|
| FIFO | 23.800.000 | 5.400.000 |
| BQ liên hoàn | 23.866.700 | 5.333.300 |
| BQ cả kỳ | 23.890.500 | 5.309.000 |`,
        },
      ],
    },
    {
      id: "4",
      title: "Kế toán Thuế GTGT và Thuế TNCN",
      slug: "ke-toan-thue",
      duration: "80 phút",
      prerequisites: ["3"],
      content: `# Kế toán Thuế GTGT và Thuế TNCN

## Thuế Giá trị gia tăng (GTGT)

### Khái niệm
Thuế GTGT là thuế tính trên giá trị tăng thêm của hàng hóa, dịch vụ phát sinh trong quá trình sản xuất, lưu thông đến tiêu dùng.

### Phương pháp tính thuế

**1. Phương pháp khấu trừ**
\`\`\`
Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ

Điều kiện áp dụng:
- Doanh thu > 1 tỷ/năm
- Có đầy đủ hóa đơn, chứng từ
- Có tài khoản ngân hàng
\`\`\`

**2. Phương pháp trực tiếp**
\`\`\`
Thuế GTGT phải nộp = GTGT × Thuế suất

Trong đó:
GTGT = Doanh thu - Chi phí
Hoặc:
Thuế GTGT = Doanh thu × Tỷ lệ % GTGT

Tỷ lệ % GTGT:
- Thương mại, dịch vụ: 1%
- Sản xuất, vận tải: 3%
- Khác: 2%
\`\`\`

### Thuế suất GTGT
\`\`\`
- 0%: Hàng xuất khẩu
- 5%: Nước sạch, thuốc chữa bệnh, thiết bị y tế, sách
- 8%: Giảm tạm thời (2024)
- 10%: Hàng hóa, dịch vụ thông thường
\`\`\`

### Tài khoản 3331 - Thuế GTGT
\`\`\`
33311 - Thuế GTGT đầu ra
33312 - Thuế GTGT hàng nhập khẩu
33313 - Thuế GTGT hàng bán nội địa (PP trực tiếp)

Sơ đồ:
Nợ 3331: Thuế GTGT được khấu trừ
Có 3331: Thuế GTGT đầu ra
Số dư Có: Thuế GTGT còn phải nộp
Số dư Nợ: Thuế GTGT được khấu trừ
\`\`\`

### Tài khoản 133 - Thuế GTGT được khấu trừ
\`\`\`
1331 - Thuế GTGT đầu vào của hàng hóa, dịch vụ
1332 - Thuế GTGT đầu vào của TSCĐ
\`\`\`

## Nghiệp vụ Kế toán GTGT

### Mua hàng nhập kho
\`\`\`
Nợ 156: 100.000.000 (giá chưa thuế)
Nợ 1331: 10.000.000 (VAT 10%)
Có 331: 110.000.000
\`\`\`

### Bán hàng
\`\`\`
a) Ghi doanh thu:
Nợ 131: 220.000.000
Có 511: 200.000.000
Có 33311: 20.000.000

b) Ghi giá vốn:
Nợ 632: 150.000.000
Có 156: 150.000.000
\`\`\`

### Cuối kỳ khấu trừ thuế
\`\`\`
TH1: Đầu ra > Đầu vào
Nợ 33311: Thuế đầu vào được khấu trừ
Có 1331: Thuế đầu vào được khấu trừ
Số chênh lệch = 33311 - 1331 → Nộp ngân sách
Nợ 33311: Số phải nộp
Có 112/111: Số phải nộp

TH2: Đầu vào > Đầu ra
Nợ 33311: Số đầu vào
Có 1331: Số đầu vào
Số chênh = 1331 - 33311 → Khấu trừ kỳ sau (ghi Nợ 1331)
\`\`\`

### Ví dụ đầy đủ
\`\`\`
Trong tháng:
- VAT đầu ra: 20.000.000
- VAT đầu vào: 15.000.000

Cuối tháng:
Nợ 33311: 15.000.000
Có 1331: 15.000.000

Số phải nộp = 20.000.000 - 15.000.000 = 5.000.000

Nợ 33311: 5.000.000
Có 112: 5.000.000

Nếu đầy đủ điều kiện: Nộp tờ khai thuế GTGT mẫu 01/GTGT
\`\`\`

## Thuế Thu nhập Cá nhân (TNCN)

### Đối tượng
- Cá nhân cư trú
- Cá nhân không cư trú

### Biểu thuế lũy tiến (cư trú)
\`\`\`
Bậc 1: 0-5tr        → 5%
Bậc 2: 5-10tr       → 10%
Bậc 3: 10-18tr      → 15%
Bậc 4: 18-32tr      → 20%
Bậc 5: 32-52tr      → 25%
Bậc 6: 52-80tr      → 30%
Bậc 7: > 80tr       → 35%
\`\`\`

### Giảm trừ gia cảnh (2024)
\`\`\`
- Bản thân: 11.000.000đ/tháng (132tr/năm)
- Người phụ thuộc: 4.400.000đ/tháng/người
- Bảo hiểm bắt buộc
- Từ thiện, nhân đạo
\`\`\`

### Công thức tính
\`\`\`
Thu nhập tính thuế = Tổng thu nhập - Giảm trừ - BH bắt buộc - Khác

Thuế TNCN = Thu nhập tính thuế × Thuế suất

Ví dụ:
Lương: 30.000.000đ/tháng
Bảo hiểm: 3.150.000 (10.5%)
Giảm trừ bản thân: 11.000.000
1 NPT: 4.400.000

Thu nhập tính thuế = 30.000.000 - 3.150.000 - 11.000.000 - 4.400.000
                   = 11.450.000

Thuế TNCN (theo bậc):
- 5tr × 5% = 250.000
- 5tr × 10% = 500.000
- 1.450.000 × 15% = 217.500
→ Tổng = 967.500đ/tháng
\`\`\`

### Kê khai thuế TNCN
\`\`\`
- Khấu trừ tại nguồn
- Kê khai theo tháng/quý
- Quyết toán năm (mẫu 05/KK-TNCN)
- Tờ khai tháng mẫu 05/KK-TNCN
\`\`\`

## Thuế Thu nhập Doanh nghiệp (TNDN)

### Thuế suất
\`\`\`
- Phổ thông: 20%
- Ưu đãi: 10%, 15%, 17% (theo điều kiện)
- Dầu khí: 32-50%
\`\`\`

### Công thức
\`\`\`
Thuế TNDN = Thu nhập tính thuế × Thuế suất

Thu nhập tính thuế = Thu nhập chịu thuế - Thu nhập miễn thuế

Thu nhập chịu thuế = (Doanh thu - Chi phí được trừ) + Thu nhập khác
\`\`\`

### Tạm nộp hàng quý
\`\`\`
Nợ 8211: Số tạm nộp
Có 3334: Số tạm nộp

Nộp:
Nợ 3334
Có 112/111
\`\`\`

### Quyết toán cuối năm
\`\`\`
Số phải nộp năm - Số đã tạm nộp = Số còn phải nộp (hoặc nộp thừa)

Nếu còn phải nộp:
Nợ 8211
Có 3334

Nếu nộp thừa:
Nợ 3334
Có 8211
\`\`\`

## Các loại thuế khác

### Thuế Môn bài
\`\`\`
Bậc 1: Vốn > 10 tỷ → 3tr/năm
Bậc 2: 5-10 tỷ → 2tr/năm
Bậc 3: 2-5 tỷ → 1.5tr/năm
Bậc 4: 0-2 tỷ → 1tr/năm
\`\`\`

### Thuế Xuất nhập khẩu
- Thuế XK
- Thuế NK
- Thuế TTĐB (Tiêu thụ đặc biệt)

### Thuế Nhà thầu
Đối với nhà thầu nước ngoài

## Báo cáo Thuế

### Các loại tờ khai
\`\`\`
- 01/GTGT: Khai GTGT (khấu trừ)
- 04/GTGT: Khai GTGT (trực tiếp)
- 05/KK-TNCN: Khai TNCN
- 03/TNDN: Tạm nộp TNDN
- 05/KK-TNDN: Quyết toán TNDN
\`\`\`

### Thời hạn
\`\`\`
- GTGT: Ngày 20 tháng sau
- TNCN: Ngày 20 tháng sau
- TNDN tạm nộp: Ngày 30 tháng sau quý
- Quyết toán năm: 90 ngày sau kết thúc năm tài chính
\`\`\`

## Bài tập thực hành
Hãy tính thuế GTGT và TNCN cho doanh nghiệp!`,
      exercises: [
        {
          id: "4-1",
          title: "Tính thuế GTGT và TNCN",
          description: "Thực hành tính thuế",
          instructions: `Công ty TNHH ABC trong tháng 10/2024:
- Doanh thu bán hàng: 500.000.000 (chưa VAT 10%)
- Mua hàng hóa: 300.000.000 (chưa VAT 10%)
- Chi phí dịch vụ: 50.000.000 (chưa VAT 10%)
- Chi phí khác có hóa đơn: 20.000.000 (VAT 10%)

Nhân viên A:
- Lương: 35.000.000đ
- Bảo hiểm bắt buộc: 10.5%
- 2 người phụ thuộc

Yêu cầu:
1. Tính thuế GTGT phải nộp
2. Tính thuế TNCN của nhân viên A
3. Định khoản các nghiệp vụ thuế`,
          type: "code",
          starterCode: `// Tính thuế GTGT và TNCN`,
          solution: `# 1. TÍNH THUẾ GTGT

## Thuế GTGT đầu ra:
= 500.000.000 × 10% = 50.000.000

## Thuế GTGT đầu vào:
- Mua hàng: 300.000.000 × 10% = 30.000.000
- Dịch vụ: 50.000.000 × 10% = 5.000.000
- Chi phí khác: 20.000.000 × 10% = 2.000.000
→ Tổng VAT vào = 37.000.000

## Thuế GTGT phải nộp:
= 50.000.000 - 37.000.000 = 13.000.000

## Định khoản:
a) Doanh thu:
Nợ 131: 550.000.000
Có 511: 500.000.000
Có 33311: 50.000.000

b) Mua hàng:
Nợ 156: 300.000.000
Nợ 1331: 30.000.000
Có 331: 330.000.000

c) Dịch vụ:
Nợ 642: 50.000.000
Nợ 1331: 5.000.000
Có 331: 55.000.000

d) Chi phí khác:
Nợ 642: 20.000.000
Nợ 1331: 2.000.000
Có 111: 22.000.000

e) Khấu trừ VAT cuối tháng:
Nợ 33311: 37.000.000
Có 1331: 37.000.000

f) Nộp thuế:
Nợ 33311: 13.000.000
Có 112: 13.000.000

---

# 2. TÍNH THUẾ TNCN NHÂN VIÊN A

## Bảo hiểm bắt buộc:
= 35.000.000 × 10.5% = 3.675.000

## Giảm trừ:
- Bản thân: 11.000.000
- 2 NPT: 2 × 4.400.000 = 8.800.000
- BHBB: 3.675.000
→ Tổng giảm trừ = 23.475.000

## Thu nhập tính thuế:
= 35.000.000 - 23.475.000 = 11.525.000

## Thuế TNCN (lũy tiến):
- Bậc 1: 5.000.000 × 5% = 250.000
- Bậc 2: 5.000.000 × 10% = 500.000
- Bậc 3: 1.525.000 × 15% = 228.750
→ Tổng thuế TNCN = 978.750đ

## Thực nhận:
= 35.000.000 - 3.675.000 - 978.750 = 30.346.250đ

## Định khoản tại công ty:
a) Tính lương:
Nợ 642: 35.000.000
Có 334: 35.000.000

b) Trích BH phần NV:
Nợ 334: 3.675.000
Có 338: 3.675.000

c) Trích BH phần DN (23.5%):
Nợ 642: 8.225.000
Có 338: 8.225.000

d) Khấu trừ thuế TNCN:
Nợ 334: 978.750
Có 3335: 978.750

e) Trả lương:
Nợ 334: 30.346.250
Có 112: 30.346.250

f) Nộp thuế TNCN:
Nợ 3335: 978.750
Có 112: 978.750

g) Nộp bảo hiểm:
Nợ 338: 11.900.000
Có 112: 11.900.000`,
        },
      ],
    },
    {
      id: "5",
      title: "Báo cáo Tài chính và Phân tích",
      slug: "bao-cao-tai-chinh",
      duration: "90 phút",
      prerequisites: ["4"],
      content: `# Báo cáo Tài chính và Phân tích

## 4 Báo cáo Tài chính

### 1. Bảng Cân đối Kế toán (Mẫu B01-DN)

**Cấu trúc:**
\`\`\`
TÀI SẢN
A. TÀI SẢN NGẮN HẠN
   I. Tiền và tương đương tiền (111, 112, 113)
   II. Đầu tư tài chính ngắn hạn (121, 128)
   III. Các khoản phải thu ngắn hạn (131, 136, 138, 141, 331...)
   IV. Hàng tồn kho (151, 152, 153, 154, 155, 156, 157)
   V. Tài sản ngắn hạn khác (151, 152...)

B. TÀI SẢN DÀI HẠN
   I. Các khoản phải thu dài hạn
   II. Tài sản cố định (211, 212, 213, 217, 221, 222)
   III. Bất động sản đầu tư (217)
   IV. Tài sản dở dang dài hạn (241, 242)
   V. Đầu tư tài chính dài hạn (221, 222, 228)
   VI. Tài sản dài hạn khác

TỔNG CỘNG TÀI SẢN

NGUỒN VỐN
A. NỢ PHẢI TRẢ
   I. Nợ ngắn hạn (311, 315, 331, 333, 334, 335, 336, 341, 342...)
   II. Nợ dài hạn (341, 342, 343, 344...)

B. VỐN CHỦ SỞ HỮU
   I. Vốn chủ sở hữu (411, 412, 413, 414, 415, 418, 419, 421...)
   II. Nguồn kinh phí và quỹ khác

TỔNG CỘNG NGUỒN VỐN

Kiểm tra: TỔNG TÀI SẢN = TỔNG NGUỒN VỐN
\`\`\`

### 2. Báo cáo Kết quả Kinh doanh (Mẫu B02-DN)

\`\`\`
CHỈ TIÊU                                    Mã    Kỳ này    Kỳ trước
1. Doanh thu bán hàng và cung cấp DV        01     X          X
2. Các khoản giảm trừ doanh thu             02     X          X
3. Doanh thu thuần (01-02)                  10     X          X
4. Giá vốn hàng bán                         11     X          X
5. Lợi nhuận gộp (10-11)                    20     X          X
6. Doanh thu hoạt động tài chính            21     X          X
7. Chi phí tài chính                        22     X          X
   - Trong đó: Chi phí lãi vay              23     X          X
8. Chi phí bán hàng                         25     X          X
9. Chi phí quản lý doanh nghiệp             26     X          X
10. Lợi nhuận thuần từ HĐKD (20+21-22-25-26) 30     X          X
11. Thu nhập khác                           31     X          X
12. Chi phí khác                            32     X          X
13. Lợi nhuận khác (31-32)                  40     X          X
14. Tổng lợi nhuận kế toán trước thuế (30+40) 50   X          X
15. Chi phí thuế TNDN                       51     X          X
16. Lợi nhuận sau thuế TNDN (50-51)         60     X          X
\`\`\`

### 3. Báo cáo Lưu chuyển Tiền tệ (Mẫu B03-DN)

**Phương pháp trực tiếp:**
\`\`\`
I. LƯU CHUYỂN TIỀN TỪ HĐKD
   1. Tiền thu từ bán hàng, cung cấp DV và doanh thu khác
   2. Tiền chi trả cho người cung cấp HH và DV
   3. Tiền chi trả cho người lao động
   4. Tiền chi trả lãi vay
   5. Tiền chi nộp thuế TNDN
   6. Tiền thu khác từ HĐKD
   7. Tiền chi khác cho HĐKD
   → Lưu chuyển tiền thuần từ HĐKD

II. LƯU CHUYỂN TIỀN TỪ HĐ ĐẦU TƯ
   1. Tiền chi để mua sắm, xây dựng TSCĐ
   2. Tiền thu từ thanh lý, nhượng bán TSCĐ
   3. Tiền chi cho vay, mua các công cụ nợ
   4. Tiền thu hồi cho vay, bán lại công cụ nợ
   5. Tiền chi đầu tư góp vốn vào đơn vị khác
   6. Tiền thu hồi đầu tư góp vốn vào đơn vị khác
   7. Tiền thu lãi cho vay, cổ tức và lợi nhuận được chia
   → Lưu chuyển tiền thuần từ HĐ Đầu tư

III. LƯU CHUYỂN TIỀN TỪ HĐ TÀI CHÍNH
   1. Tiền thu từ phát hành cổ phiếu, nhận vốn góp
   2. Tiền trả lại vốn góp cho các CSH
   3. Tiền thu từ đi vay
   4. Tiền trả nợ gốc vay
   5. Tiền trả nợ gốc thuê tài chính
   6. Cổ tức, lợi nhuận đã trả cho CSH
   → Lưu chuyển tiền thuần từ HĐ Tài chính

Lưu chuyển tiền thuần trong kỳ
Tiền và tương đương tiền đầu kỳ
Tiền và tương đương tiền cuối kỳ
\`\`\`

### 4. Thuyết minh BCTC (Mẫu B09-DN)

**Nội dung chính:**
- Đặc điểm hoạt động
- Kỳ kế toán, đơn vị tiền tệ
- Chuẩn mực và chế độ kế toán
- Chính sách kế toán
- Chi tiết các chỉ tiêu

## Phân tích Báo cáo Tài chính

### 1. Phân tích Khả năng thanh toán

**Hệ số thanh toán hiện hành:**
\`\`\`
= Tài sản ngắn hạn / Nợ ngắn hạn

Ý nghĩa: > 1 tốt, > 2 rất tốt
\`\`\`

**Hệ số thanh toán nhanh:**
\`\`\`
= (TSNH - HTK) / Nợ ngắn hạn

Ý nghĩa: > 0.5 chấp nhận được, > 1 tốt
\`\`\`

**Hệ số thanh toán tức thời:**
\`\`\`
= Tiền và tương đương tiền / Nợ ngắn hạn

Ý nghĩa: > 0.5 tốt
\`\`\`

### 2. Phân tích Cơ cấu Vốn

**Hệ số nợ:**
\`\`\`
= Tổng nợ phải trả / Tổng tài sản

Ý nghĩa: < 0.5 an toàn, > 0.7 rủi ro
\`\`\`

**Hệ số tự tài trợ:**
\`\`\`
= Vốn chủ sở hữu / Tổng tài sản
= 1 - Hệ số nợ

Ý nghĩa: > 0.5 tốt
\`\`\`

**Hệ số nợ/Vốn CSH:**
\`\`\`
= Tổng nợ / Vốn CSH

Ý nghĩa: < 1 an toàn
\`\`\`

### 3. Phân tích Hiệu quả Hoạt động

**Vòng quay hàng tồn kho:**
\`\`\`
= Giá vốn hàng bán / HTK bình quân

Ý nghĩa: Càng cao càng tốt
\`\`\`

**Số ngày tồn kho:**
\`\`\`
= 365 / Vòng quay HTK
\`\`\`

**Vòng quay khoản phải thu:**
\`\`\`
= Doanh thu thuần / Phải thu bình quân
Số ngày thu tiền = 365 / Vòng quay
\`\`\`

**Vòng quay phải trả:**
\`\`\`
= Giá vốn / Phải trả bình quân
Số ngày trả tiền = 365 / Vòng quay
\`\`\`

### 4. Phân tích Khả năng sinh lời

**Tỷ suất LN gộp:**
\`\`\`
= Lợi nhuận gộp / Doanh thu thuần

Ý nghĩa: Càng cao càng tốt
\`\`\`

**Tỷ suất LN ròng (ROS):**
\`\`\`
= Lợi nhuận sau thuế / Doanh thu thuần

Ý nghĩa: > 5% tốt tùy ngành
\`\`\`

**ROA:**
\`\`\`
= Lợi nhuận sau thuế / Tổng tài sản bình quân

Ý nghĩa: > 10% tốt
\`\`\`

**ROE:**
\`\`\`
= Lợi nhuận sau thuế / Vốn CSH bình quân

Ý nghĩa: > 15% tốt
\`\`\`

## Phân tích DuPont

\`\`\`
ROE = LN ròng / Doanh thu × Doanh thu / Tài sản × Tài sản / Vốn CSH
    = ROS × Vòng quay tài sản × Đòn bẩy tài chính
\`\`\`

## Ví dụ phân tích

\`\`\`
Công ty ABC - Năm 2024:
- Doanh thu thuần: 10 tỷ
- Lợi nhuận gộp: 3 tỷ
- LNST: 800 triệu
- Tổng tài sản: 8 tỷ
- Vốn CSH: 5 tỷ
- Nợ ngắn hạn: 2 tỷ
- TSNH: 4 tỷ
- HTK: 1 tỷ

Phân tích:
1. Thanh toán hiện hành = 4/2 = 2.0 ✅ (Rất tốt)
2. Thanh toán nhanh = (4-1)/2 = 1.5 ✅ (Tốt)
3. Hệ số nợ = 3/8 = 0.375 ✅ (< 0.5)
4. ROS = 800/10.000 = 8% ✅ (Tốt)
5. ROA = 800/8.000 = 10% ✅ (Khá)
6. ROE = 800/5.000 = 16% ✅ (Tốt)
7. Biên LN gộp = 3.000/10.000 = 30% ✅ (Tốt)

Kết luận: Công ty có tình hình tài chính tốt, 
khả năng thanh toán đảm bảo, sinh lời khá.
\`\`\`

## Bài tập thực hành
Hãy phân tích BCTC của doanh nghiệp!`,
      exercises: [
        {
          id: "5-1",
          title: "Phân tích BCTC",
          description: "Thực hành phân tích báo cáo tài chính",
          instructions: `Công ty XYZ có số liệu năm 2024:
- Doanh thu thuần: 20 tỷ
- Giá vốn: 14 tỷ
- Chi phí BH: 2 tỷ
- Chi phí QLDN: 1.5 tỷ
- Thuế TNDN: 20%

Bảng cân đối:
- TSNH: 10 tỷ (Tiền: 2 tỷ, Phải thu: 4 tỷ, HTK: 3 tỷ, Khác: 1 tỷ)
- TSDH: 5 tỷ
- Nợ ngắn hạn: 6 tỷ
- Nợ dài hạn: 2 tỷ
- Vốn CSH: 7 tỷ

Yêu cầu:
1. Tính các chỉ tiêu sinh lời
2. Tính các hệ số thanh toán
3. Phân tích DuPont
4. Đánh giá tình hình tài chính`,
          type: "code",
          starterCode: `// Phân tích BCTC`,
          solution: `# BÁO CÁO KQKD (tỷ VND)

Doanh thu thuần:              20.0
Giá vốn hàng bán:            (14.0)
Lợi nhuận gộp:                 6.0

Chi phí bán hàng:             (2.0)
Chi phí QLDN:                 (1.5)
Lợi nhuận thuần HĐKD:          2.5

Thu nhập khác:                 0.0
Chi phí khác:                  0.0
LN trước thuế:                 2.5

Thuế TNDN (20%):              (0.5)
LN sau thuế:                   2.0

---

# 1. CHỈ TIÊU SINH LỜI

## Biên LN gộp:
= 6.0 / 20.0 = 30%

## ROS (Tỷ suất LN ròng):
= 2.0 / 20.0 = 10%

## ROA:
Tổng TS = 10 + 5 = 15 tỷ
= 2.0 / 15.0 = 13.33%

## ROE:
= 2.0 / 7.0 = 28.57%

---

# 2. HỆ SỐ THANH TOÁN

## Thanh toán hiện hành:
= 10 / 6 = 1.67 ✅

## Thanh toán nhanh:
= (10 - 3) / 6 = 1.17 ✅

## Thanh toán tức thời:
= 2 / 6 = 0.33 ⚠️

---

# 3. CƠ CẤU VỐN

## Hệ số nợ:
= (6 + 2) / 15 = 0.533 ⚠️

## Hệ số tự tài trợ:
= 7 / 15 = 0.467

## Nợ/Vốn CSH:
= 8 / 7 = 1.14 ⚠️

---

# 4. PHÂN TÍCH DUPONT

ROE = ROS × Vòng quay TS × Đòn bẩy

Vòng quay TS = 20 / 15 = 1.33 lần
Đòn bẩy = 15 / 7 = 2.14
ROS = 10%

ROE = 10% × 1.33 × 2.14 = 28.57% ✓

---

# 5. ĐÁNH GIÁ

## Điểm mạnh:
✅ Biên LN gộp cao (30%)
✅ ROS tốt (10%)
✅ ROA khá (13.3%)
✅ ROE rất tốt (28.6%)
✅ Khả năng thanh toán ổn định
✅ Vòng quay tài sản khá (1.33)

## Điểm yếu:
⚠️ Hệ số nợ cao (53.3%)
⚠️ Nợ/Vốn CSH > 1 (1.14) - rủi ro
⚠️ Tiền mặt ít (2 tỷ)
⚠️ Thanh toán tức thời thấp

## Khuyến nghị:
1. Giảm nợ vay, tăng vốn CSH
2. Cải thiện dòng tiền
3. Kiểm soát chi phí tốt hơn
4. Tăng vòng quay tài sản
5. Duy trì biên lợi nhuận cao

## Kết luận:
Công ty sinh lời tốt nhưng có rủi ro tài chính
do tỷ lệ nợ cao. Cần cân đối lại cơ cấu vốn.`,
        },
      ],
    },
  ],
};
