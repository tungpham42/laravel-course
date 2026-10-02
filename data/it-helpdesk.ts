import { Course } from "@/types";

export const itHelpdesk: Course = {
  id: "it-helpdesk",
  slug: "it-helpdesk",
  title: "IT Helpdesk Professional",
  description:
    "Kỹ năng IT Support, troubleshooting, ITSM, ticketing và customer service",
  image: "/images/helpdesk-course.jpg",
  duration: "8 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Tổng quan IT Helpdesk và ITSM",
      slug: "tong-quan-helpdesk",
      duration: "50 phút",
      content: `# Tổng quan IT Helpdesk và ITSM

## IT Helpdesk là gì?
IT Helpdesk là bộ phận tiếp nhận và giải quyết các yêu cầu hỗ trợ kỹ thuật từ người dùng cuối.

## Vai trò của IT Helpdesk

### Nhiệm vụ chính
\`\`\`
1. Tiếp nhận sự cố (Incident Management)
2. Xử lý yêu cầu (Request Fulfillment)
3. Cập nhật và bảo trì hệ thống
4. Quản lý tài khoản người dùng
5. Đào tạo người dùng
6. Ghi nhận, phân loại và chuyển ticket
7. Documentation và Knowledge Base
\`\`\`

### Levels of Support
\`\`\`
Level 1 (L1) - Front-line Support:
- Tiếp nhận ticket
- Xử lý sự cố đơn giản theo script
- Reset password, unlock account
- Hướng dẫn sử dụng cơ bản
- Chuyển ticket lên L2 nếu cần
- Thời gian xử lý: 15-30 phút

Level 2 (L2) - Technical Support:
- Xử lý sự cố phức tạp
- Cấu hình hệ thống
- Troubleshooting software/hardware
- Escalate lên L3 nếu cần
- Thời gian: 1-4 giờ

Level 3 (L3) - Expert Support:
- Xử lý sự cố hệ thống critical
- Phát triển, thay đổi infrastructure
- Vendor liên hệ
- Thời gian: 4-48 giờ
\`\`\`

## ITIL Framework

### ITIL 4 Core Concepts
\`\`\`
- Service Value System (SVS)
- Four Dimensions:
  1. Organizations and People
  2. Information and Technology
  3. Partners and Suppliers
  4. Value Streams and Processes

- Service Value Chain:
  Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support
\`\`\`

### ITSM Processes chính

**1. Incident Management**
\`\`\`
Mục tiêu: Khôi phục dịch vụ nhanh nhất
Priority = Impact × Urgency

Impact:
- High: Toàn bộ công ty
- Medium: Một phòng ban
- Low: Một cá nhân

Urgency:
- High: Không thể làm việc
- Medium: Ảnh hưởng công việc
- Low: Minor inconvenience

Priority Matrix:
         Impact High  Medium  Low
Urgency
High              P1      P2      P3
Medium            P2      P3      P4
Low               P3      P4      P5
\`\`\`

**2. Service Request Management**
\`\`\`
- Yêu cầu cấp mới (new account, software)
- Yêu cầu thay đổi nhỏ
- Có quy trình chuẩn
- Không phải incident
\`\`\`

**3. Problem Management**
\`\`\`
- Tìm root cause của incidents
- Prevent recurring issues
- Known Error Database (KEDB)
- Workarounds và solutions
\`\`\`

**4. Change Management**
\`\`\`
- Change Advisory Board (CAB)
- Change types:
  - Standard: Pre-approved
  - Normal: Cần approval
  - Emergency: Fast-track
- Change Request (RFC)
\`\`\`

**5. Knowledge Management**
\`\`\`
- Knowledge Base articles
- SOPs (Standard Operating Procedures)
- FAQs
- Troubleshooting guides
\`\`\`

## SLA, SLO, KPI

### SLA (Service Level Agreement)
\`\`\`
Cam kết giữa IT và business

Ví dụ:
- P1 (Critical): Response 15min, Resolution 4h
- P2 (High): Response 30min, Resolution 8h
- P3 (Medium): Response 2h, Resolution 24h
- P4 (Low): Response 8h, Resolution 72h
- P5 (Planning): Response 24h, Resolution 5 days
\`\`\`

### SLO (Service Level Objective)
\`\`\`
Mục tiêu nội bộ (thường chặt hơn SLA)

Ví dụ:
- 95% tickets resolved trong SLA
- First call resolution > 60%
- Customer satisfaction > 4.5/5
- Average handle time < 15 min
\`\`\`

### KPIs quan trọng
\`\`\`
1. First Call Resolution (FCR): % giải quyết lần đầu
2. Average Handle Time (AHT): Thời gian xử lý TB
3. First Response Time (FRT): Thời gian phản hồi đầu
4. Mean Time to Resolve (MTTR): TB thời gian giải quyết
5. Ticket Volume: Số lượng tickets
6. Backlog: Tickets tồn đọng
7. CSAT: Customer satisfaction
8. Reopen Rate: % tickets mở lại
9. Escalation Rate: % tickets escalate
10. SLA Compliance: % đạt SLA
\`\`\`

## Ticketing Systems

### Các hệ thống phổ biến
\`\`\`
- Jira Service Management (Atlassian)
- ServiceNow (Enterprise)
- Freshdesk / Freshservice
- Zendesk
- ManageEngine ServiceDesk Plus
- osTicket (Open source)
- GLPI (Open source, ITSM)
- BMC Remedy
\`\`\`

### Ticket Lifecycle
\`\`\`
1. New       → Ticket vừa tạo
2. Open      → Đã được assign
3. In Progress → Đang xử lý
4. Pending   → Chờ user/vendor
5. Resolved  → Đã giải quyết
6. Closed    → User xác nhận
7. Reopened  → User không hài lòng
\`\`\`

### Ticket Fields
\`\`\`
Required:
- Subject/Title: Ngắn gọn, mô tả vấn đề
- Description: Chi tiết
- Category: Hardware, Software, Network, Account
- Priority: P1-P5
- Requester: Người yêu cầu
- Assignee: Người xử lý
- Status: Current state

Optional:
- Attachments: Screenshots, logs
- Tags: Keywords
- Linked tickets
- Related assets
- Due date
\`\`\`

## Communication Skills

### Customer Service Principles
\`\`\`
1. Empathy: Hiểu và đồng cảm
2. Patience: Kiên nhẫn
3. Active Listening: Lắng nghe chủ động
4. Clear Communication: Rõ ràng, đơn giản
5. Positive Attitude: Thái độ tích cực
6. Professional: Chuyên nghiệp
7. Ownership: Chịu trách nhiệm đến cùng
\`\`\`

### Email/Phone Etiquette
\`\`\`
Email:
- Subject line rõ ràng
- Greeting phù hợp
- Nội dung ngắn gọn, có cấu trúc
- Tránh jargon phức tạp
- Kết thúc với signature chuyên nghiệp
- Proofread trước khi gửi

Phone:
- Trả lời trong 3 rings
- Giới thiệu tên và bộ phận
- Xác nhận tên và vấn đề của user
- Ghi chú lại
- Confirm next steps
- Follow-up email sau cuộc gọi
\`\`\`

### Handling Difficult Customers
\`\`\`
LEARN model:
L - Listen: Nghe không ngắt
E - Empathize: Đồng cảm
A - Apologize: Xin lỗi (even if not your fault)
R - Resolve: Tập trung giải quyết
N - Notify: Thông báo next steps

Ví dụ:
"Tôi hiểu bạn đang rất bực bội vì không thể truy cập 
hệ thống trong khi có deadline quan trọng. Tôi xin lỗi 
vì sự bất tiện này. Tôi sẽ kiểm tra ngay và cập nhật 
trong 15 phút tới."
\`\`\`

## Tools và Utilities

### Remote Support Tools
\`\`\`
- TeamViewer
- AnyDesk
- ConnectWise Control (ScreenConnect)
- LogMeIn Rescue
- Microsoft Quick Assist
- Remote Desktop (RDP)
- VNC
- Chrome Remote Desktop
\`\`\`

### Monitoring Tools
\`\`\`
- PRTG
- Nagios
- Zabbix
- SolarWinds
- ManageEngine OpManager
- Datadog
\`\`\`

### Documentation
\`\`\`
- Confluence
- Notion
- SharePoint
- Wiki
- Google Sites
- OneNote
\`\`\`

## Bài tập thực hành
Hãy tạo quy trình Helpdesk chuẩn!`,
      exercises: [
        {
          id: "1-1",
          title: "Helpdesk Process Design",
          description: "Thiết kế quy trình IT Helpdesk",
          instructions: `Thiết kế hệ thống Helpdesk cho công ty 200 nhân viên:
1. Các ticket categories chính
2. Priority matrix (Impact × Urgency)
3. SLA cho mỗi priority
4. Ticket routing rules
5. Escalation matrix
6. Mẫu email template
7. KPI dashboard`,
          type: "theory",
          solution: `# IT Helpdesk Design - Company ABC (200 users)

## 1. Ticket Categories

### Incident Categories
\`\`\`
Hardware:
- Desktop/Laptop không khởi động
- Màn hình hỏng
- Keyboard/Mouse
- Printer
- Network port

Software:
- OS issues
- Office apps
- Business apps (ERP, CRM)
- Email client
- Browser

Network:
- Không kết nối Internet
- VPN không hoạt động
- Wifi chập chờn
- Share folder không truy cập
- Printer network

Account & Access:
- Quên mật khẩu
- Account bị lock
- Cần cấp quyền
- MFA issues
- Email quota

Security:
- Suspicious email
- Malware alert
- Phishing report
- Data breach concern
\`\`\`

### Service Request Categories
\`\`\`
- New user onboarding
- New hardware request
- Software installation
- Access request
- Equipment return (offboarding)
- Training request
- Report request
\`\`\`

## 2. Priority Matrix

| Impact / Urgency | High | Medium | Low |
|-----------------|------|--------|-----|
| **High**        | P1   | P2     | P3  |
| **Medium**      | P2   | P3     | P4  |
| **Low**         | P3   | P4     | P5  |

**Impact Definition:**
- High: Toàn công ty (>50 users) hoặc critical system
- Medium: 1 phòng ban (10-50 users)
- Low: 1 user hoặc nhóm nhỏ (<10)

**Urgency Definition:**
- High: Không thể làm việc
- Medium: Khó khăn trong công việc
- Low: Inconvenience, không ảnh hưởng

## 3. SLA Matrix

| Priority | Response | Workaround | Resolution | Update Freq |
|----------|----------|------------|------------|-------------|
| P1       | 15 min   | 1 hour     | 4 hours    | Every 30min |
| P2       | 30 min   | 4 hours    | 8 hours    | Every 2h    |
| P3       | 2 hours  | 8 hours    | 24 hours   | Daily       |
| P4       | 4 hours  | 24 hours   | 72 hours   | Daily       |
| P5       | 8 hours  | -          | 5 days     | Every 2 days|

**Business Hours:** 8:00-18:00 Mon-Fri
**After-hours P1:** On-call rotation

## 4. Ticket Routing Rules

\`\`\`
Auto-routing based on:
- Category + Subcategory
- Keywords in subject/description
- User department
- Priority

Routes:
- Password/Account → L1
- Hardware → L1 (basic) hoặc L2 (advanced)
- Network → L2
- Security → L2/InfoSec
- Business apps → App team
- Infrastructure → L3

Sample rules:
IF category=Password AND priority<=P3
   THEN assign to L1_Group, skill=Account
IF category=Network AND priority=P1
   THEN assign to L2_Group, notify=Network_Manager
IF subject CONTAINS "phishing"
   THEN assign to Security_Team, priority=P2
\`\`\`

## 5. Escalation Matrix

\`\`\`
L1 → L2:
- Không giải quyết trong 30 min
- Cần technical expertise
- Advanced troubleshooting

L2 → L3:
- Không giải quyết trong 2 hours
- Cần access hệ thống
- Vendor involvement
- Architecture changes

Functional Escalation:
- SLA breach > 50%
- Customer request
- VIP user
- P1 incident

Management Escalation:
- SLA breach
- Multiple complaints
- Critical business impact
\`\`\`

## 6. Email Templates

### Acknowledgment Email
\`\`\`
Subject: [Ticket #12345] Đã tiếp nhận yêu cầu của bạn - [Vấn đề]

Kính gửi Anh/Chị [Name],

Cảm ơn Anh/Chị đã liên hệ IT Helpdesk.

Chúng tôi đã tiếp nhận yêu cầu của Anh/Chị:
- Ticket ID: #12345
- Vấn đề: [Mô tả ngắn]
- Priority: P3
- SLA: Phản hồi trong 2 giờ, giải quyết trong 24 giờ

Kỹ thuật viên phụ trách: [Name]
Dự kiến xử lý: [Time]

Chúng tôi sẽ cập nhật tình hình trong [X giờ].

Trân trọng,
IT Helpdesk
Ext: 1234
\`\`\`

### Resolution Email
\`\`\`
Subject: [Ticket #12345] Đã giải quyết - [Vấn đề]

Kính gửi Anh/Chị [Name],

Chúng tôi đã giải quyết yêu cầu của Anh/Chị.

Chi tiết:
- Vấn đề: [Mô tả]
- Nguyên nhân: [Root cause]
- Giải pháp: [Đã làm gì]
- Thời gian xử lý: [X giờ]

Vui lòng xác nhận đã hoạt động bình thường bằng cách:
- Reply "OK" nếu đã ổn
- Reply "NOT RESOLVED" nếu vẫn còn vấn đề

Khảo sát mức độ hài lòng: [Link]

Trân trọng,
IT Helpdesk
\`\`\`

## 7. KPI Dashboard

### Weekly Report Metrics
\`\`\`
Volume:
- Total tickets: 250
- By category: Hardware 30%, Software 40%, Network 15%, Account 10%, Other 5%
- By priority: P1 1%, P2 5%, P3 40%, P4 40%, P5 14%

Performance:
- First Response Time (avg): 45 min ✅
- Resolution Time (avg): 6.5 hours ✅
- First Call Resolution: 65% ✅
- SLA Compliance: 94% ✅
- Backlog: 25 tickets ✅

Quality:
- CSAT: 4.6/5 ✅
- Reopen Rate: 3% ✅
- Escalation Rate: 15% ✅

Top Issues:
1. Password reset (40 tickets)
2. Office 365 issues (30 tickets)
3. VPN connection (25 tickets)
\`\`\`

## 8. Staffing
\`\`\`
L1: 2 staff (peak hours 8-10am, 2-4pm)
L2: 1 staff + on-call
L3: 1 staff (part-time)

Coverage:
- 8-18: Full staff
- 18-8: On-call for P1 only
- Weekend: On-call rotation
\`\`\``,
        },
      ],
    },
    {
      id: "2",
      title: "Hardware Troubleshooting",
      slug: "hardware-troubleshooting",
      duration: "70 phút",
      prerequisites: ["1"],
      content: `# Hardware Troubleshooting

## Troubleshooting Methodology

### 7-Step Process
\`\`\`
1. Identify the problem
   - Gather information
   - Question users
   - Identify symptoms
   - Determine changes

2. Establish a theory of probable cause
   - Question the obvious
   - Research symptoms

3. Test the theory
   - Confirm or deny
   - If denied → new theory

4. Establish a plan of action
   - Research solutions
   - Plan before acting

5. Implement the solution
   - Document steps
   - Verify full functionality

6. Verify full system functionality
   - Test all related functions
   - Prevent recurrence

7. Document findings
   - Update KB
   - User training
\`\`\`

## Desktop/Laptop Hardware

### Boot Issues

**Không khởi động được**
\`\`\`
Check order:
1. Power source (adapter, battery)
2. Power button/LED
3. Fans, noises
4. POST errors (beep codes)
5. BIOS settings
6. Boot order
7. HDD/SSD detection
8. OS corruption

Common causes:
- Dead battery
- Dead adapter
- RAM faulty
- HDD failure
- MBR corrupted
- Boot sector virus
\`\`\`

**Beep codes (AMI BIOS)**
\`\`\`
1 beep:  DRAM refresh failure
2 beeps: Parity circuit failure
3 beeps: Base 64K RAM failure
4 beeps: System timer failure
5 beeps: Processor failure
6 beeps: Keyboard controller failure
7 beeps: Virtual mode exception
8 beeps: Display memory read/write failure
9 beeps: ROM BIOS checksum failure
10 beeps: CMOS shutdown register error
11 beeps: Cache memory error
\`\`\`

### RAM Issues
\`\`\`
Symptoms:
- BSOD
- Random reboots
- Boot failures
- Application crashes
- Data corruption

Diagnosis:
- Memtest86+
- Windows Memory Diagnostic
- Swap/test RAM sticks
- Reseat RAM

Solutions:
- Replace faulty RAM
- Reseat contacts
- Update BIOS
- Check compatibility
\`\`\`

### Storage Issues
\`\`\`
Symptoms:
- Slow performance
- Boot failures
- Clicking noises (HDD)
- Read/write errors
- SMART warnings

Diagnosis:
- CrystalDiskInfo (SMART)
- chkdsk /f /r
- sfc /scannow
- HDTune
- Manufacturer tools

Solutions:
- Replace faulty drive
- Clone to new drive (Acronis, Clonezilla)
- Recover data
- Update firmware
\`\`\`

### Display Issues
\`\`\`
Symptoms:
- No display
- Flickering
- Artifacts
- Wrong resolution
- Dim/tinted

Diagnosis:
- Test external monitor
- Test different cable
- Safe Mode test
- Update drivers
- Check connections

Solutions:
- Reseat display cable
- Replace cable
- Update/reinstall GPU driver
- Replace display (laptop)
- Replace GPU (desktop)
\`\`\`

### Power Issues
\`\`\`
Laptop:
- Not charging
- Battery not detected
- Shuts down randomly

Diagnosis:
- Battery health (powercfg /batteryreport)
- Test different charger
- Check DC jack
- Reset power (hold power 30s)

Desktop:
- No power
- Random shutdowns

Diagnosis:
- PSU tester
- Test PSU voltage
- Check motherboard capacitors
- Reset CMOS

Solutions:
- Replace battery
- Replace charger
- Replace DC jack
- Replace PSU
- Replace CMOS battery
\`\`\`

### Overheating
\`\`\`
Symptoms:
- Loud fans
- Throttling
- Sudden shutdown
- Very hot surface

Diagnosis:
- HWMonitor, Core Temp
- Check fan speeds
- Visual inspection

Solutions:
- Clean dust/fans
- Replace thermal paste
- Replace faulty fans
- Improve airflow
- Undervolt CPU
\`\`\`

## Printer Troubleshooting

### Common Issues
\`\`\`
1. Not printing
2. Paper jam
3. Poor print quality
4. Offline status
5. Toner/ink issues
6. Network connectivity

Troubleshooting steps:
- Check power/connections
- Check paper/toner
- Print test page
- Check print queue
- Restart spooler
- Reinstall driver
- Network ping test
\`\`\`

### Windows Print Spooler
\`\`\`powershell
# Restart print spooler
Restart-Service -Name Spooler -Force

# Clear print queue
Stop-Service -Name Spooler -Force
Remove-Item -Path "C:\\Windows\\System32\\spool\\PRINTERS\\*" -Force
Start-Service -Name Spooler

# List printers
Get-Printer
Get-PrinterDriver

# Add printer
Add-Printer -Name "HP-01" -DriverName "HP UPD" \`
    -PortName \`"IP_192.168.1.50"
\`\`\`

## Network Troubleshooting

### Network Commands
\`\`\`powershell
# IP configuration
ipconfig /all
ipconfig /release
ipconfig /renew
ipconfig /flushdns
ipconfig /registerdns

# Connectivity
ping google.com
ping -t 8.8.8.8      # Continuous
ping -n 100 8.8.8.8  # 100 pings
tracert google.com
pathping google.com

# DNS
nslookup google.com
nslookup google.com 8.8.8.8
Resolve-DnsName google.com

# Network info
netstat -an
netstat -b
Get-NetAdapter
Get-NetIPConfiguration
Get-NetRoute

# Test port
Test-NetConnection google.com -Port 443
tnc server01 -Port 3389 -InformationLevel Detailed

# ARP
arp -a
\`\`\`

### OSI Troubleshooting
\`\`\`
Layer 1 (Physical):
- Cable connected?
- Link LED on?
- Cable damage?
- Port working?
- Test: Cable tester, different cable

Layer 2 (Data Link):
- MAC address learned?
- VLAN correct?
- Duplex mismatch?
- Test: show mac address-table

Layer 3 (Network):
- IP address correct?
- Subnet mask correct?
- Gateway reachable?
- Routing?
- Test: ping, tracert

Layer 4 (Transport):
- Firewall blocking?
- Port open?
- Test: telnet, tnc

Layer 5-7:
- Application issues
- Authentication
- Permissions
\`\`\`

### Common Network Issues
\`\`\`
"Không có kết nối mạng"
- Check cable
- Check WiFi
- Restart router
- ipconfig /release + /renew
- Reset TCP/IP: netsh int ip reset
- Reset Winsock: netsh winsock reset

"Không vào được website"
- Ping IP (8.8.8.8) → Check DNS
- nslookup domain
- ipconfig /flushdns
- Change DNS to 8.8.8.8

"Chậm mạng"
- Speedtest
- Check bandwidth usage
- Virus scan
- Update driver
- Cable/port quality

"WiFi yếu"
- Signal strength
- Interference (channels)
- Distance
- Number of devices
- Router placement
\`\`\`

## Mobile Device Troubleshooting

### Common Issues
\`\`\`
iOS:
- Cannot connect WiFi
- App crashes
- Battery draining
- Storage full
- Email not syncing

Android:
- Similar issues
- App force close
- Overheating
- Bluetooth issues
\`\`\`

### Solutions
\`\`\`
1. Restart device
2. Update OS
3. Clear app cache
4. Reinstall problematic app
5. Reset network settings
6. Factory reset (last resort)
\`\`\`

## Peripheral Troubleshooting

### Keyboard/Mouse
\`\`\`
Wireless:
- Batteries
- USB receiver
- Pairing
- Interference

Wired:
- USB port test
- Cable damage
- Driver issues
- Different computer test
\`\`\`

### Monitor
\`\`\`
- No signal: check cable, input source
- Flickering: cable, refresh rate
- Wrong resolution: settings, driver
- Dead pixels: replace if many
\`\`\`

### Docking Station
\`\`\`
- Power adapter correct?
- Firmware update
- Driver install
- USB ports test
- Display output check
\`\`\`

## Diagnostics Tools

### Windows Built-in
\`\`\`powershell
# System info
msinfo32
dxdiag

# Performance
perfmon

# Event Viewer
eventvwr.msc

# Task Manager
taskmgr

# Resource Monitor
resmon

# System Configuration
msconfig

# Device Manager
devmgmt.msc

# Disk Management
diskmgmt.msc
\`\`\`

### Third-party Tools
\`\`\`
- CrystalDiskInfo: HDD/SSD health
- CPU-Z: CPU, RAM, motherboard info
- GPU-Z: GPU info
- HWiNFO: Hardware monitoring
- MemTest86: RAM test
- Prime95: CPU stress test
- FurMark: GPU stress test
- SpeedFan: Fan control
- CCleaner: System cleanup
- Hiren's BootCD: All-in-one
\`\`\`

## Hardware Replacement

### Warranty Check
\`\`\`
- Serial number lookup
- Manufacturer website
- Vendor portal (Dell, HP, Lenovo)
- Parts availability
- Onsite vs depot service
\`\`\`

### Replacement Procedure
\`\`\`
1. Backup data (if possible)
2. Document issue
3. Raise vendor ticket/RMA
4. Get replacement
5. Restore data
6. Verify functionality
7. Update asset database
8. Dispose/recycle old
\`\`\`

## Prevention

### Preventive Maintenance
\`\`\`
- Regular updates
- Dust cleaning
- Backup verification
- Disk health monitoring
- Battery calibration
- Cable inspection
- Firmware updates
- User training
\`\`\`

## Bài tập thực hành
Hãy troubleshoot các sự cố hardware!`,
      exercises: [
        {
          id: "2-1",
          title: "Hardware Troubleshooting Scenarios",
          description: "Giải quyết các tình huống hardware",
          instructions: `Giải quyết các tình huống sau:

Scenario 1: Laptop Dell không khởi động, đèn nguồn sáng nhưng không lên hình
Scenario 2: Desktop HP tự restart ngẫu nhiên
Scenario 3: Printer HP không in, hiện "Offline"
Scenario 4: User báo WiFi chập chờn, thường xuyên mất kết nối
Scenario 5: Laptop Lenovo nóng và tự tắt sau 10 phút

Với mỗi scenario:
1. Áp dụng 7-step troubleshooting
2. Liệt kê câu hỏi cần hỏi user
3. Các bước chẩn đoán
4. Likely causes
5. Solutions`,
          type: "theory",
          solution: `# Hardware Troubleshooting Solutions

## Scenario 1: Laptop không lên hình

### Information Gathering
Questions:
- Khi nào bắt đầu? (After update, drop, etc.)
- Có tiếng bíp không?
- Có tiếng quạt không?
- Đèn LED nào sáng?
- Đã thử khởi động lại chưa?
- Có kết nối với màn hình ngoài không?

### Diagnosis Steps
1. Check power (adapter, battery)
2. Test external monitor (Fn + F4/F8)
3. Hard reset (30s power hold)
4. Check RAM (remove/reseat)
5. Beep codes interpretation
6. BIOS access (F2/F10/Del)

### Likely Causes
- RAM lỏng/hỏng (40%)
- Display cable lỏng (20%)
- Motherboard issue (20%)
- Battery dead (10%)
- Display faulty (10%)

### Solutions
\`\`\`
1. Hard reset:
   - Unplug power
   - Remove battery (if removable)
   - Hold power 30s
   - Reconnect and start

2. RAM test:
   - Open back panel
   - Remove both RAM
   - Try 1 stick at a time
   - Test different slot

3. External monitor test:
   - Connect HDMI/VGA
   - Press Win+P or Fn+F4
   - If external works → Display issue

4. If all fail → Send to service center
\`\`\`

## Scenario 2: Desktop tự restart

### Information Gathering
- Khi nào restart? (During use, idle, specific app)
- Có BSOD không?
- Nhiệt độ?
- Recent changes? (Hardware, software)
- Có tiếng lạ không?

### Diagnosis
\`\`\`powershell
# Check event log
Get-WinEvent -FilterHashtable @{LogName='System'; ID=41} -MaxEvents 10

# Check temperature
# Dùng HWiNFO, HWMonitor

# Check PSU
# Dùng PSU tester

# Memory test
mdsched.exe
\`\`\`

### Likely Causes
- PSU failing (30%)
- Overheating (25%)
- RAM faulty (20%)
- Driver issue (15%)
- Virus/Malware (10%)

### Solutions
\`\`\`
1. Clean dust from fans
2. Check PSU voltages
3. Test RAM with MemTest86
4. Update all drivers
5. Run antivirus scan
6. Disable auto-restart to see BSOD:
   System → Advanced → Startup and Recovery
   → Uncheck "Automatically restart"
7. Check minidump files
\`\`\`

## Scenario 3: Printer Offline

### Diagnosis Steps
\`\`\`powershell
# 1. Check network
Test-Connection -ComputerName 192.168.1.50

# 2. Check print spooler
Get-Service -Name Spooler

# 3. Check printer status
Get-Printer -Name "HP-01"

# 4. Clear queue
Stop-Service Spooler
Remove-Item "C:\\Windows\\System32\\spool\\PRINTERS\\*" -Force
Start-Service Spooler
\`\`\`

### Solutions
\`\`\`
1. Printer side:
   - Check power
   - Check network cable/WiFi
   - Check paper, toner
   - Restart printer
   - Print config page

2. Client side:
   - Restart Print Spooler
   - Clear print queue
   - Set printer online
   - Remove and re-add printer
   - Update driver

3. Network:
   - Ping printer IP
   - Check VLAN
   - Check firewall
\`\`\`

## Scenario 4: WiFi chập chờn

### Diagnosis
\`\`\`powershell
# Check WiFi signal
netsh wlan show interfaces

# WiFi profiles
netsh wlan show profiles
netsh wlan show profile name="ABC-WiFi" key=clear

# Signal strength
netsh wlan show interfaces | findstr Signal

# Scan networks
netsh wlan show networks mode=bssid
\`\`\`

### Likely Causes
- Signal yếu (far from AP)
- Interference (channels)
- Too many devices
- Driver cũ
- AP overload
- DHCP conflict

### Solutions
\`\`\`
1. Move closer to AP
2. Update WiFi driver
3. Change WiFi channel (1, 6, 11)
4. Switch to 5GHz if possible
5. Forget and reconnect
6. Reset TCP/IP:
   netsh int ip reset
   netsh winsock reset
7. Check AP configuration
8. Add more APs / mesh
\`\`\`

## Scenario 5: Laptop nóng và tự tắt

### Diagnosis
\`\`\`
Software:
- HWiNFO64 (temps)
- Core Temp (CPU temp)
- HWMonitor

Check:
- Idle temp: Should be < 50°C
- Load temp: Should be < 85°C
- Shutdown temp: Usually 95-100°C

Physical:
- Fan speed
- Airflow blocked?
- Dust buildup
- Thermal paste condition
\`\`\`

### Solutions
\`\`\`
1. Software:
   - Undervolt CPU (ThrottleStop)
   - Limit CPU max (Power Options)
   - Close resource-heavy apps
   - Update BIOS/Drivers

2. Hardware:
   - Clean fans (compressed air)
   - Replace thermal paste
   - Replace fan if noisy/dead
   - Add cooling pad
   - Elevate laptop

3. Environment:
   - Use on hard surface
   - Avoid direct sunlight
   - Ambient temp < 30°C
\`\`\`

### When to escalate
- Hardware failure (fan, motherboard)
- Under warranty → Service center
- Out of warranty → Cost/benefit analysis`,
        },
      ],
    },
    {
      id: "3",
      title: "Windows Troubleshooting",
      slug: "windows-troubleshooting",
      duration: "75 phút",
      prerequisites: ["2"],
      content: `# Windows Troubleshooting

## Common Windows Issues

### Blue Screen of Death (BSOD)
\`\`\`
Common Stop Codes:
- CRITICAL_PROCESS_DIED: System file corrupted
- IRQL_NOT_LESS_OR_EQUAL: Driver issue
- MEMORY_MANAGEMENT: RAM issue
- INACCESSIBLE_BOOT_DEVICE: Boot config issue
- PAGE_FAULT_IN_NONPAGED_AREA: Driver/memory
- SYSTEM_SERVICE_EXCEPTION: System file/driver
- DPC_WATCHDOG_VIOLATION: Driver timeout
- KERNEL_SECURITY_CHECK_FAILURE: Corrupted driver
\`\`\`

### BSOD Troubleshooting
\`\`\`powershell
# Check minidumps
Get-ChildItem "C:\\Windows\\Minidump"

# Read dump file
# Dùng BlueScreenView, WinDbg

# Check reliability
perfmon /rel

# System File Checker
sfc /scannow

# DISM
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /RestoreHealth

# Check disk
chkdsk C: /f /r

# Test memory
mdsched.exe
\`\`\`

### Safe Mode
\`\`\`
Truy cập Safe Mode:
1. Shift + Restart
2. Troubleshoot → Advanced → Startup Settings → Restart
3. Chọn 4 (Safe Mode) hoặc 5 (Safe Mode with Networking)
4. Hoặc F8 (older Windows)

Trong Safe Mode:
- Uninstall problematic driver
- Remove recent software
- Run virus scan
- System Restore
\`\`\`

## Windows Performance Issues

### Slow Performance
\`\`\`powershell
# Check startup programs
Get-CimInstance Win32_StartupCommand | 
    Select Name, Command, Location

# Disable startup via Task Manager
taskmgr → Startup tab

# Check disk usage
Get-PSDrive C | Select Used, Free

# Check CPU/Memory
Get-Process | Sort CPU -Desc | Select -First 10
Get-Process | Sort WS -Desc | Select -First 10

# Check services
Get-Service | Where Status -eq "Running"
\`\`\`

### Solutions
\`\`\`
1. Disable unnecessary startup programs
2. Uninstall bloatware
3. Run Disk Cleanup
   cleanmgr
4. Defragment HDD
   defrag C: /O
5. Disable visual effects
6. Increase RAM
7. Upgrade to SSD
8. Malware scan
9. Windows Update
10. Reset Windows (last resort)
\`\`\`

## Windows Update Issues

### Common Problems
\`\`\`
- Update stuck at X%
- Failed to install (Error 0x800...)
- Update loop
- Update broke system
- Cannot connect to update server
\`\`\`

### Troubleshooting
\`\`\`powershell
# Check update status
Get-WindowsUpdateLog

# Stop update services
Stop-Service -Name wuauserv, cryptSvc, bits, msiserver

# Rename folders
Rename-Item "C:\\Windows\\SoftwareDistribution" SoftwareDistribution.old
Rename-Item "C:\\Windows\\System32\\catroot2" catroot2.old

# Start services
Start-Service -Name wuauserv, cryptSvc, bits, msiserver

# Reset Windows Update components
net stop wuauserv
net stop cryptSvc
net stop bits
net stop msiserver
ren C:\\Windows\\SoftwareDistribution SoftwareDistribution.old
ren C:\\Windows\\System32\\catroot2 Catroot2.old
net start wuauserv
net start cryptSvc
net start bits
net start msiserver
\`\`\`

### WSUS Reset Script
\`\`\`batch
@echo off
echo Resetting Windows Update components...
net stop bits
net stop wuauserv
net stop appidsvc
net stop cryptsvc

Del "%ALLUSERSPROFILE%\\Application Data\\Microsoft\\Network\\Downloader\\*.*" /f /q /s
Del "%SystemRoot%\\SoftwareDistribution\\Download\\*.*" /f /q /s

regsvr32.exe /s atl.dll
regsvr32.exe /s urlmon.dll
regsvr32.exe /s mshtml.dll
regsvr32.exe /s shdocvw.dll
regsvr32.exe /s browseui.dll
regsvr32.exe /s jscript.dll
regsvr32.exe /s vbscript.dll
regsvr32.exe /s scrrun.dll
regsvr32.exe /s msxml.dll
regsvr32.exe /s msxml3.dll
regsvr32.exe /s msxml6.dll
regsvr32.exe /s actxprxy.dll
regsvr32.exe /s softpub.dll
regsvr32.exe /s wintrust.dll
regsvr32.exe /s dssenh.dll
regsvr32.exe /s rsaenh.dll
regsvr32.exe /s gpkcsp.dll
regsvr32.exe /s sccbase.dll
regsvr32.exe /s slbcsp.dll
regsvr32.exe /s cryptdlg.dll
regsvr32.exe /s oleaut32.dll
regsvr32.exe /s ole32.dll
regsvr32.exe /s shell32.dll
regsvr32.exe /s initpki.dll
regsvr32.exe /s wuapi.dll
regsvr32.exe /s wuaueng.dll
regsvr32.exe /s wuaueng1.dll
regsvr32.exe /s wucltui.dll
regsvr32.exe /s wups.dll
regsvr32.exe /s wups2.dll
regsvr32.exe /s wuweb.dll
regsvr32.exe /s qmgr.dll
regsvr32.exe /s qmgrprxy.dll
regsvr32.exe /s wucltux.dll
regsvr32.exe /s muweb.dll
regsvr32.exe /s wuwebv.dll

net start bits
net start wuauserv
net start appidsvc
net start cryptsvc

echo Done!
pause
\`\`\`

## User Profile Issues

### Common Issues
\`\`\`
- Temporary profile loaded
- Profile corruption
- Cannot log in
- Settings not saving
- Desktop files missing
- Slow login
\`\`\`

### Troubleshooting
\`\`\`powershell
# Check profiles
Get-CimInstance Win32_UserProfile

# View profile list
reg query "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList"

# Backup registry before modifying
reg export "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList" \`
    profilelist.reg

# Remove corrupted profile
# 1. Reboot (may log in with temp profile)
# 2. Log in as admin
# 3. Backup user data (C:\\Users\\username)
# 4. Delete profile via Advanced System Settings
# 5. Remove from ProfileList registry
# 6. Reboot and login again
\`\`\`

## Application Issues

### Common Problems
\`\`\`
- App won't start
- App crashes
- App runs slow
- Missing components
- License issues
- Compatibility
\`\`\`

### Troubleshooting
\`\`\`powershell
# Check event logs
Get-EventLog -LogName Application -EntryType Error -Newest 20

# Compatibility mode
# Right-click → Properties → Compatibility

# Run as administrator
Start-Process "app.exe" -Verb RunAs

# Check dependencies
# Visual C++ Redistributable
# .NET Framework
# Java Runtime

# Reinstall app
# Use Revo Uninstaller for complete removal

# Check for updates

# SFC for system files
sfc /scannow
\`\`\`

## Network Sharing Issues

### File Sharing
\`\`\`powershell
# Check network discovery
Get-NetFirewallRule -DisplayGroup "Network Discovery"

# Enable sharing
Set-NetFirewallRule -DisplayGroup "File and Printer Sharing" \`
    -Enabled True

# Check share
Get-SmbShare
New-SmbShare -Name "Data" -Path "D:\\Data" \`
    -FullAccess "Domain Admins" \`
    -ChangeAccess "Domain Users"

# Check permissions
Get-SmbShareAccess -Name "Data"
icacls "D:\\Data"

# Enable sharing on network
# Control Panel → Network and Sharing Center
# → Advanced sharing settings
\`\`\`

### Mapped Drive Issues
\`\`\`powershell
# Map drive
net use Z: \\\\server\\share /persistent:yes

# With credentials
net use Z: \\\\server\\share /user:domain\\username password

# Disconnect
net use Z: /delete

# View mappings
net use

# GPO mapping (preferred)
# User Config → Preferences → Windows Settings → Drive Maps
\`\`\`

## Windows Recovery

### System Restore
\`\`\`powershell
# Enable System Restore
Enable-ComputerRestore -Drive "C:\\"

# Create restore point
Checkpoint-Computer -Description "Before major change" \`
    -RestorePointType "MODIFY_SETTINGS"

# List restore points
Get-ComputerRestorePoint

# Restore
Restore-Computer -RestorePoint 5
\`\`\`

### Reset Windows
\`\`\`
Windows 10/11:
Settings → Update & Security → Recovery
→ Reset this PC

Options:
- Keep my files: Remove apps, keep user data
- Remove everything: Clean install

Advanced:
- Restore from cloud
- Restore locally
- Change settings (clean data?)
\`\`\`

### Boot Repair
\`\`\`batch
# Boot from Windows installation media
# Press Shift+F10 for command prompt

# Check disk
chkdsk C: /f /r

# Rebuild BCD
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd

# Repair boot
bcdedit /enum
bcdboot C:\\Windows /s C:
\`\`\`

## Windows Tools

### Event Viewer
\`\`\`
Windows Logs:
- Application
- Security
- Setup
- System
- Forwarded Events

Applications and Services Logs:
- Microsoft
- Windows
- Custom

Filter:
- Level: Critical, Error, Warning, Info
- Source
- Event ID
- Date range
\`\`\`

### Performance Monitor
\`\`\`powershell
# Open perfmon
perfmon

# Data Collector Sets
# Custom counters

# Key counters:
Processor(_Total)\\% Processor Time
Memory\\Available MBytes
PhysicalDisk(_Total)\\% Disk Time
Network Interface\\Bytes Total/sec
\`\`\`

### Reliability Monitor
\`\`\`powershell
perfmon /rel

# Xem:
- Application failures
- Windows failures
- Misc failures
- Warnings
- Information
\`\`\`

## Bài tập thực hành
Hãy troubleshoot các sự cố Windows!`,
      exercises: [
        {
          id: "3-1",
          title: "Windows Troubleshooting Scenarios",
          description: "Giải quyết các tình huống Windows",
          instructions: `Giải quyết các tình huống:

Scenario 1: User báo máy chậm, khởi động 5 phút
Scenario 2: BSOD "IRQL_NOT_LESS_OR_EQUAL" xuất hiện
Scenario 3: Windows Update lỗi 0x80073712
Scenario 4: User login vào temp profile
Scenario 5: Outlook không mở được

Với mỗi scenario:
1. Câu hỏi cần hỏi
2. Chẩn đoán steps
3. Root causes có thể
4. Solutions
5. Prevention`,
          type: "theory",
          solution: `# Windows Troubleshooting Solutions

## Scenario 1: Máy chậm, khởi động 5 phút

### Questions
- Khi nào bắt đầu?
- Cài thêm gì không?
- Disk usage?
- Antivirus status?
- HDD hay SSD?

### Diagnosis
\`\`\`powershell
# Boot time
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Diagnostics-Performance/Operational'; ID=100} |
    Select-Object TimeCreated, Message

# Startup programs
Get-CimInstance Win32_StartupCommand | Select Name, Command, Location

# Top processes
Get-Process | Sort CPU -Desc | Select -First 10
Get-Process | Sort WS -Desc | Select -First 10

# Disk health
Get-PhysicalDisk
Get-Disk
Get-Volume

# Services
Get-Service | Where Status -eq "Running" | 
    Group DisplayName | Sort Count -Desc

# Check bloatware
Get-AppxPackage | Select Name
\`\`\`

### Likely Causes
1. Too many startup programs (40%)
2. HDD failing/slow (25%)
3. Malware (15%)
4. Not enough RAM (10%)
5. Windows updates pending (5%)
6. Disk almost full (5%)

### Solutions
\`\`\`
1. Startup cleanup:
   - taskmgr → Startup tab
   - Disable unnecessary
   - Common to disable:
     * Skype, Spotify, Teams
     * Adobe Updater, Java Updater
     * OneDrive (if not used)
     * Game launchers

2. Disk cleanup:
   - cleanmgr → Clean up system files
   - Delete temp files
   - Empty recycle bin
   - Remove old Windows updates

3. Virus scan:
   - Windows Defender full scan
   - Malwarebytes scan

4. Defragment (HDD only):
   defrag C: /O
   
5. RAM check:
   - Increase if < 8GB

6. Upgrade HDD → SSD (best improvement)

7. Windows update:
   - Complete all updates
\`\`\`

## Scenario 2: BSOD IRQL_NOT_LESS_OR_EQUAL

### Diagnosis
\`\`\`powershell
# 1. Check recent changes
Get-WinEvent -LogName System -MaxEvents 100 | 
    Where {$_.LevelDisplayName -eq "Error"}

# 2. Read minidump
Get-ChildItem "C:\\Windows\\Minidump" | Sort LastWriteTime -Desc

# 3. Check drivers
Get-WmiObject Win32_PnPSignedDriver | 
    Where {$_.DeviceName -like "*" } | 
    Select DeviceName, DriverVersion, DriverDate |
    Sort DriverDate -Desc | Select -First 20

# 4. System files
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth

# 5. Memory test
mdsched.exe  # Windows Memory Diagnostic
# Or boot MemTest86 from USB
\`\`\`

### Likely Causes
1. Faulty driver (60%)
   - Usually GPU, NIC, or storage driver
2. RAM issue (20%)
3. Windows corruption (10%)
4. Antivirus conflict (5%)
5. Hardware failure (5%)

### Solutions
\`\`\`
Step 1: Identify driver
- BlueScreenView tool
- Look for recent driver updates

Step 2: Update/Rollback drivers
- GPU: nVidia/AMD/Intel latest
- Chipset: From motherboard vendor
- Network, Storage: From manufacturer

Step 3: Check RAM
- MemTest86 overnight
- Test 1 stick at a time
- Reseat modules

Step 4: Windows repair
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth

Step 5: Uninstall recent software
- Especially security tools, drivers

Step 6: BIOS update
- Check motherboard vendor

Step 7: System Restore
- To point before issue started
\`\`\`

## Scenario 3: Windows Update Error 0x80073712

### Meaning
\`\`\`
0x80073712 = ERROR_SXS_COMPONENT_STORE_CORRUPT
Windows component store corrupted
\`\`\`

### Solutions
\`\`\`powershell
# 1. DISM restore
DISM /Online /Cleanup-Image /RestoreHealth
# May take 15-30 min

# 2. SFC
sfc /scannow

# 3. Reset Windows Update
Stop-Service -Name wuauserv, cryptSvc, bits, msiserver
Rename-Item "C:\\Windows\\SoftwareDistribution" SD.old
Rename-Item "C:\\Windows\\System32\\catroot2" catroot2.old
Start-Service -Name wuauserv, cryptSvc, bits, msiserver

# 4. Check disk
chkdsk C: /f /r

# 5. Windows Update Troubleshooter
# Settings → Update → Troubleshoot

# 6. Reset components
regsvr32 /s wuaueng.dll
regsvr32 /s wuapi.dll
regsvr32 /s wups.dll
regsvr32 /s wups2.dll

# 7. If all fail:
# - Install update manually from Microsoft Update Catalog
# - In-place upgrade
\`\`\`

## Scenario 4: Temp Profile

### Symptoms
\`\`\`
- "We can't sign into your account"
- Desktop, documents empty
- Settings reset
- Downloads folder missing
\`\`\`

### Root Causes
1. Profile folder corrupted
2. Registry issue
3. Antivirus blocked
4. Disk corruption
5. Group Policy issue

### Solutions
\`\`\`powershell
# 1. Check event log
Get-WinEvent -LogName "Microsoft-Windows-User Profile Service/Operational" |
    Where {$_.Id -in @(1500, 1511, 1530)} |
    Select TimeCreated, Message

# 2. Check ProfileList registry
reg query "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList" /s |
    Select-String -Pattern "ProfileImagePath"

# 3. Fix procedure:
# a) Backup user data first
Robocopy "C:\\Users\\olduser" "D:\\Backup\\olduser" /E /COPYALL

# b) Log in as admin
# c) System Properties → Advanced → User Profiles → Settings
# d) Delete corrupted profile
# e) Remove from registry:
reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\S-1-5-21-xxx" /f

# f) Restart
# g) Login as user (create new profile)
# h) Restore data

# 4. Common SID fix:
# If key name has .bak suffix:
# - Remove .bak
# - Change State value to 0
\`\`\`

## Scenario 5: Outlook không mở

### Diagnosis
\`\`\`powershell
# 1. Try safe mode
outlook.exe /safe

# 2. Try /resetnavpane
outlook.exe /resetnavpane

# 3. Check event log
Get-EventLog Application -Source "Outlook" -Newest 10

# 4. Check OST/PST file
# C:\\Users\\%username%\\AppData\\Local\\Microsoft\\Outlook\\
# Look for .ost or .pst files
\`\`\`

### Common Causes
1. Corrupted profile
2. Add-in conflict
3. OST file issues
4. Windows Update
5. Disk full

### Solutions
\`\`\`
1. Safe mode test:
   outlook.exe /safe
   → If works → Add-in issue

2. Disable add-ins:
   File → Options → Add-ins
   → COM Add-ins → Go
   → Uncheck all

3. New Outlook profile:
   Control Panel → Mail → Show Profiles
   → Add new profile
   → Set as default

4. OST repair:
   - Close Outlook
   - Rename .ost to .ost.old
   - Restart Outlook (creates new)

5. Scanpst.exe (PST only):
   - Find via search
   - Repair PST file

6. Repair Office:
   Settings → Apps → Microsoft 365
   → Modify → Quick Repair
   → If fails → Online Repair

7. Create new Windows profile (last resort)

8. Check disk space:
   Need at least 2GB free
\`\`\`

## Escalation Matrix
\`\`\`
L1 (Helpdesk):
- Basic troubleshooting
- Password reset
- Driver updates
- Simple app issues

L2 (Desktop Support):
- Profile issues
- Complex app issues
- Hardware diagnostics
- Windows repair

L3 (Engineering):
- OS image issues
- Group Policy problems
- Mass deployments
- Architecture changes

Vendor:
- Hardware warranty
- Software bugs
- Licensed software issues
\`\`\``,
        },
      ],
    },
    {
      id: "4",
      title: "Network và Account Management",
      slug: "network-account-management",
      duration: "65 phút",
      prerequisites: ["3"],
      content: `# Network và Account Management

## Account Management

### User Lifecycle
\`\`\`
1. Onboarding:
   - Request from HR/Manager
   - Create account in AD
   - Assign to groups
   - Provision email
   - Setup MFA
   - Configure access
   - Issue equipment

2. Transfer:
   - Update department
   - Change group memberships
   - Adjust permissions
   - Keep same account
   - Update email signature

3. Offboarding:
   - Disable account (immediately)
   - Forward email to manager
   - Convert to shared mailbox (if needed)
   - Remove from groups
   - Backup data
   - Retrieve equipment
   - Delete account (after 30-90 days)
\`\`\`

### AD Account Operations
\`\`\`powershell
# Create user
New-ADUser -Name "John Doe" \`
    -SamAccountName "jdoe" \`
    -UserPrincipalName "jdoe@company.com" \`
    -EmailAddress "jdoe@company.com" \`
    -Path "OU=IT,OU=Users,DC=company,DC=com" \`
    -AccountPassword (ConvertTo-SecureString "Welcome@2024" -AsPlainText -Force) \`
    -Enabled $true \`
    -ChangePasswordAtLogon $true \`
    -Department "IT" \`
    -Title "Developer" \`
    -Manager "CN=Jane Smith,OU=IT,OU=Users,DC=company,DC=com"

# Modify user
Set-ADUser -Identity "jdoe" -Title "Senior Developer" -Department "Engineering"

# Disable account
Disable-ADAccount -Identity "jdoe"

# Enable account
Enable-ADAccount -Identity "jdoe"

# Reset password
Set-ADAccountPassword -Identity "jdoe" \`
    -NewPassword (ConvertTo-SecureString "NewPass@2024" -AsPlainText -Force) \`
    -Reset \`
    -ChangePasswordAtLogon $true

# Unlock account
Unlock-ADAccount -Identity "jdoe"

# Find locked accounts
Search-ADAccount -LockedOut | Select Name, SamAccountName

# Find password never expires
Get-ADUser -Filter {PasswordNeverExpires -eq $true} -Properties PasswordNeverExpires

# Find inactive users (90 days)
$days = (Get-Date).AddDays(-90)
Get-ADUser -Filter {LastLogonDate -lt $days} -Properties LastLogonDate |
    Select Name, SamAccountName, LastLogonDate

# Group membership
Add-ADGroupMember -Identity "IT_Admins" -Members "jdoe"
Remove-ADGroupMember -Identity "IT_Admins" -Members "jdoe" -Confirm:$false
Get-ADPrincipalGroupMembership -Identity "jdoe" | Select Name

# Offboard user
$user = "jdoe"
Disable-ADAccount -Identity $user
Set-ADUser -Identity $user -Manager $null
Get-ADPrincipalGroupMembership -Identity $user | 
    Where {$_.Name -ne "Domain Users"} |
    ForEach { Remove-ADGroupMember -Identity $_.Name -Members $user -Confirm:$false }
Set-ADUser -Identity $user \`
    -Description "Offboarded on \$(Get-Date -Format 'yyyy-MM-dd')" \`
    -EmailAddress $null
\`\`\`

### Password Reset Best Practices
\`\`\`
1. Identity verification:
   - Manager approval (for critical accounts)
   - Personal questions (SSN, DOB, etc.)
   - Video call with ID
   - Phone callback to known number

2. Password requirements:
   - Min 12 chars (or per policy)
   - Complexity: Upper, lower, digit, symbol
   - No dictionary words
   - History: 24
   - Max age: 60-90 days

3. Reset procedure:
   - Notify user of reset
   - Force change at next logon
   - Send password via secure channel
   - Log the action

4. Alert for suspicious:
   - Multiple resets in short time
   - Reset for VIP/Admin
   - After-hours request
\`\`\`

## Email Management

### Exchange / Microsoft 365
\`\`\`powershell
# Connect to Exchange Online
Connect-ExchangeOnline -UserPrincipalName admin@company.com

# Mailbox info
Get-Mailbox -Identity "jdoe@company.com" | 
    Select DisplayName, PrimarySmtpAddress, Quota, UseDatabaseQuotaDefaults

# Mailbox size
Get-MailboxStatistics -Identity "jdoe@company.com" | 
    Select DisplayName, TotalItemSize, ItemCount

# Mailbox permissions
Get-MailboxPermission -Identity "jdoe@company.com"
Add-MailboxPermission -Identity "jdoe@company.com" \`
    -User "jane@company.com" -AccessRights FullAccess \`
    -InheritanceType All

# Send As / Send on Behalf
Add-RecipientPermission -Identity "jdoe@company.com" \`
    -Trustee "jane@company.com" -AccessRights SendAs -Confirm:$false
Set-Mailbox -Identity "jdoe@company.com" \`
    -GrantSendOnBehalfTo "jane@company.com"

# Forwarding
Set-Mailbox -Identity "jdoe@company.com" \`
    -ForwardingSmtpAddress "manager@company.com" \`
    -DeliverToMailboxAndForward $true

# Convert to shared mailbox (offboarding)
Set-Mailbox -Identity "jdoe@company.com" -Type Shared
# Remove license after conversion

# Distribution Groups
New-DistributionGroup -Name "IT Team" \`
    -Type Distribution -PrimarySmtpAddress \"it@company.com\"
Add-DistributionGroupMember -Identity \"IT Team\" -Member \"jdoe@company.com\"

# Mailbox rules
Get-InboxRule -Mailbox \"jdoe@company.com\"
"Remove-InboxRule -Mailbox \"jdoe@company.com\" -Identity \"RuleName\"";
\`\`\`

### Email Troubleshooting
\`\`\`
Problem: Email not received
Check:
1. Spam folder
2. Junk folder
3. Blocked senders
4. Mailbox rules (auto-delete?)
5. Mailbox full
6. Message trace (admin)

Problem: Cannot send
Check:
1. Mailbox full
2. Attachment too large (>25MB default)
3. Recipient incorrect
4. Blocked by anti-spam
5. SMTP restrictions
6. NDR (Non-Delivery Report)

Message Trace (M365):
\`\`\`powershell
Get-MessageTrace -SenderAddress "jdoe@company.com" \`
    -StartDate (Get-Date).AddDays(-7) \`
    -EndDate (Get-Date) |
    Select Received, SenderAddress, RecipientAddress, Subject, Status
\`\`\`
\`\`\`

## VPN Troubleshooting

### Common Issues
\`\`\`
1. Cannot connect
2. Connected but no access
3. Slow connection
4. Disconnects frequently
5. Certificate errors
6. Authentication failures
\`\`\`

### Diagnosis
\`\`\`powershell
# Check VPN connections
Get-VpnConnection

# Test VPN server
Test-NetConnection vpn.company.com -Port 443
Test-NetConnection vpn.company.com -Port 1723  # PPTP

# Check routes
Get-VpnConnection -AllUserConnection | 
    Select Name, ServerAddress, ConnectionStatus

# Event logs
Get-WinEvent -LogName "Microsoft-Windows-RasClient/Operational" -MaxEvents 20

# Test certificate
certmgr.msc  # Personal → Certificates
\`\`\`

### Troubleshooting Steps
\`\`\`
1. Basic connectivity:
   - Ping VPN server
   - Test port: tnc vpn.company.com -Port 443

2. Credentials:
   - Verify username format (domain\\user)
   - Check password expiry
   - Test in OWA first

3. Client:
   - Restart VPN client
   - Re-create VPN profile
   - Update client software

4. Network:
   - Test from different network (mobile hotspot)
   - Check firewall at client location
   - ISP blocking? (usually port 443 works)

5. Server:
   - Check VPN server status
   - RADIUS/AD connectivity
   - Certificate validity
   - License limits

6. Split Tunnel:
   - Check routes
   - DNS resolution
   - Firewall rules
\`\`\`

## Remote Desktop (RDP)

### Setup
\`\`\`powershell
# Enable RDP
Set-ItemProperty -Path 'HKLM:\\System\\CurrentControlSet\\Control\\Terminal Server' \`
    -Name "fDenyTSConnections" -Value 0

# Enable firewall
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"

# Add user to Remote Desktop Users
Add-LocalGroupMember -Group "Remote Desktop Users" -Member "domain\\username"

# Configure RDP
# Settings → System → Remote Desktop → On
\`\`\`

### Troubleshooting
\`\`\`powershell
# Test connectivity
Test-NetConnection server01 -Port 3389

# Check RDP service
Get-Service -Name TermService

# Check listener
netstat -an | findstr 3389

# Check RDP settings
Get-ItemProperty 'HKLM:\\System\\CurrentControlSet\\Control\\Terminal Server' |
    Select fDenyTSConnections

# RDP session info
qwinsta
qwinsta /server:server01

# Log off session
logoff <session-id> /server:server01

# Kill session
rwinsta <session-id> /server:server01

# Check RDP sessions
Get-RDUserSession -ConnectionBroker "rdcb.company.com"
\`\`\`

### Common RDP Errors
\`\`\`
"Cannot connect to the remote computer":
1. Machine offline
2. RDP disabled
3. Firewall blocking
4. Wrong IP/hostname
5. Port changed
6. Network issue

"Credentials did not work":
1. Wrong username format
2. Password expired
3. Account locked
4. User not in RDP Users group
5. NLA issues

"Internal error":
1. Corrupt RDP settings
2. Registry issue
3. Certificate problem
4. Restart needed

Solution:
# Reset RDP
reg delete "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\RCM" /f
# Restart
\`\`\`

## File Share Access

### Troubleshooting
\`\`\`powershell
# Check share exists
Get-SmbShare -CimSession server01 | 
    Where Name -eq "Data"

# Check share permissions
Get-SmbShareAccess -Name "Data" -CimSession server01

# Check NTFS permissions
icacls "\\\\server01\\Data"

# Effective permissions
# Advanced Security Settings → Effective Access
# Or: Get-Acl "\\\\server01\\Data"

# Test access
Test-Path "\\\\server01\\Data\\file.txt"

# Check connectivity
Test-NetConnection server01 -Port 445
net use Z: \\\\server01\\Data

# Clear credentials
cmdkey /list
cmdkey /delete:server01
\`\`\`

### Common Issues
\`\`\`
"Cannot access \\\\server\\share":
1. Network down: ping server
2. Firewall blocking SMB (445): Test port
3. Wrong credentials: clear cached
4. Permission denied: check ACL
5. Share not exists: verify name
6. SMB version: enable SMB1 (legacy, not recommended)
7. DNS issue: use IP instead

"Access is denied":
1. No permission at share level
2. No permission at NTFS level
3. UAC issues: run as admin
4. Explicit deny somewhere
5. User not in group
6. Kerberos issue

"Credentials conflict":
cmdkey /list  # List cached creds
cmdkey /delete:server01  # Delete

# Or use different credentials
net use \\\\server01\\share /user:domain\\user pass
\`\`\`

## Printer Management

### Add Network Printer
\`\`\`powershell
# Add by IP
Add-PrinterPort -Name "IP_192.168.1.50" -PrinterHostAddress "192.168.1.50"

Add-Printer -Name "HP LaserJet 01" \`
    -DriverName "HP Universal Printing PS" \`
    -PortName "IP_192.168.1.50"

# Add by share
Add-Printer -Name "HP-01" \`
    -ConnectionName "\\\\print01\\HP-LJ-01"

# Deploy via GPO
# User Config → Preferences → Control Panel → Printers
# Or Computer Config → Policies → Windows Settings → Deployed Printers

# Default printer
Set-Printer -Name "HP-01" -Shared $true
Set-Printer -Name "HP-01" -Published $true

# Permissions
Grant-PrinterAccess -Name "HP-01" \`
    -UserName "COMPANY\\Sales_Team" \`
    -PrinterPermission Print
\`\`\`

### Troubleshooting
\`\`\`
"Printer not found":
1. Ping printer IP
2. Web interface accessible?
3. Print server reachable?
4. Printer powered on?
5. Network config correct?

"Cannot print":
1. Print queue stuck → clear
2. Spooler service → restart
3. Driver issues → reinstall
4. Default printer changed?
5. Print from different app?

"Poor quality":
1. Toner/ink low
2. Print head dirty
3. Paper quality
4. Print settings
5. Transfer belt/roller
\`\`\`

## Mobile Device Management (MDM)

### Intune / MDM
\`\`\`
Enrollment:
- Automatic (Azure AD Join)
- User-driven (Company Portal)
- Bulk (Autopilot)

Policies:
- Compliance: OS version, encryption, password
- Configuration: WiFi, VPN, Email, Apps
- Security: Conditional Access, MFA
- Apps: Required, Available, Uninstall

Commands:
- Wipe
- Retire
- Reset Passcode
- Locate device
- Remote lock
\`\`\`

## Bài tập thực hành
Hãy thực hành Account và Network management!`,
      exercises: [
        {
          id: "4-1",
          title: "Account & Network Scenarios",
          description: "Xử lý các tình huống account và network",
          instructions: `Giải quyết các tình huống:

Scenario 1: Nhân viên mới cần tạo tài khoản đầy đủ
Scenario 2: Nhân viên quên mật khẩu, gọi Helpdesk
Scenario 3: Nhân viên nghỉ việc, cần offboard
Scenario 4: User không truy cập được shared folder
Scenario 5: VPN không kết nối từ nhà
Scenario 6: User không nhận được email từ khách hàng

Với mỗi scenario:
1. Câu hỏi cần hỏi
2. PowerShell commands/scripts
3. Verification steps
4. Documentation requirements`,
          type: "code",
          starterCode: `# Account & Network Scenarios`,
          solution: `# Account & Network Solutions

## Scenario 1: Onboarding

### Information Needed
- Full name, email
- Department, title
- Manager
- Start date
- Required access
- Equipment needed
- Special requirements

### PowerShell Script
\`\`\`powershell
# Onboarding Script
param(
    [string]$FirstName,
    [string]$LastName,
    [string]$Department,
    [string]$Title,
    [string]$Manager,
    [string]$StartDate
)

# Variables
$SamAccountName = ($FirstName.Substring(0,1) + $LastName).ToLower()
$UPN = "$SamAccountName@company.com"
$DisplayName = "$FirstName $LastName"
$OUPath = "OU=$Department,OU=Users,DC=company,DC=com"
$TempPassword = "Welcome@2024!"

# Create user
New-ADUser \`
    -Name $DisplayName \`
    -GivenName $FirstName \`
    -Surname $LastName \`
    -DisplayName $DisplayName \`
    -SamAccountName $SamAccountName \`
    -UserPrincipalName $UPN \`
    -EmailAddress $UPN \`
    -Path $OUPath \`
    -AccountPassword (ConvertTo-SecureString $TempPassword -AsPlainText -Force) \`
    -Enabled $true \`
    -ChangePasswordAtLogon $true \`
    -Department $Department \`
    -Title $Title \`
    -Manager $Manager \`
    -Description "Start: $StartDate"

# Add to department group
Add-ADGroupMember -Identity "\${Department}_Users" -Members $SamAccountName
Add-ADGroupMember -Identity "All_Employees" -Members $SamAccountName

# Add to domain user group
Add-ADGroupMember -Identity "Domain Users" -Members $SamAccountName

# Create mailbox
Enable-Mailbox -Identity $UPN -Database "MBX-DB01"

# Set quota (default)
Set-Mailbox -Identity $UPN -UseDatabaseQuotaDefaults $true

# Add to distribution groups
Add-DistributionGroupMember -Identity "All-Staff@company.com" -Member $UPN

# Set OOO message
Set-MailboxAutoReplyConfiguration -Identity $UPN -AutoReplyState Disabled

# Configure Lync/Teams
# Get-CsUser -Identity $UPN | Enable-CsUser

# Record in HR system
# Notify manager
Send-MailMessage -To $Manager -Subject "New User Created" \`
    -Body "Account $SamAccountName created. Password: $TempPassword" \`
    -SmtpServer smtp.company.com

Write-Host "User $SamAccountName created successfully"
Write-Host "Temp Password: $TempPassword"
Write-Host "User must change password on first login"

# Print onboarding checklist
@"
ONBOARDING CHECKLIST - $DisplayName
=====================================
☐ AD Account created: $SamAccountName
☐ Mailbox enabled: $UPN
☐ Added to groups: \${Department}_Users, All_Employees
☐ Equipment assigned (ticket required)
☐ Email setup on devices
☐ VPN access (if required)
☐ Access badges (Security team)
☐ Training scheduled
☐ Manager notified
☐ Welcome email sent
"@ | Out-File "C:\\Onboarding\\$SamAccountName.txt"
\`\`\`

## Scenario 2: Password Reset

### Verification Steps
\`\`\`
⚠️ Identity verification is CRITICAL:
1. Ask: Employee ID
2. Ask: Manager name
3. Ask: Office location
4. Callback to registered number (for critical accounts)

Never reset if:
- Request via email only
- Suspicious behavior
- Outside normal hours + no verification
- Requests for other users
\`\`\`

### PowerShell
\`\`\`powershell
param(
    [string]$SamAccountName,
    [string]$TemporaryPassword = "Reset@2024!",
    [string]$TicketNumber
)

# Verify user exists
$user = Get-ADUser -Identity $SamAccountName -ErrorAction SilentlyContinue
if (-not $user) {
    Write-Error "User not found"
    return
}

# Log the action
$logEntry = @"
Password Reset Log
==================
Time: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
User: $SamAccountName ($($user.Name))
Ticket: $TicketNumber
Action by: $env:USERNAME
Workstation: $env:COMPUTERNAME
"@
Add-Content -Path "C:\\Logs\\PasswordResets.log" -Value $logEntry

# Reset password
Set-ADAccountPassword -Identity $SamAccountName \`
    -NewPassword (ConvertTo-SecureString $TemporaryPassword -AsPlainText -Force) \`
    -Reset \`
    -ErrorAction Stop

# Force change at next logon
Set-ADUser -Identity $SamAccountName -ChangePasswordAtLogon $true

# Unlock if locked
Unlock-ADAccount -Identity $SamAccountName -ErrorAction SilentlyContinue

# Verify
$verify = Get-ADUser -Identity $SamAccountName -Properties LockedOut, PasswordExpired
Write-Host "User: $($verify.Name)"
Write-Host "Locked: $($verify.LockedOut)"
Write-Host "Password Expired: $($verify.PasswordExpired)"

# Send to user (securely)
Send-MailMessage \`
    -To "$SamAccountName@company.com" \`
    -Subject "Password Reset - Ticket #$TicketNumber" \`
    -Body @"
Your password has been reset.

Temporary Password: $TemporaryPassword

You will be prompted to change it on next login.

If you did NOT request this, contact IT immediately.

- IT Helpdesk
"@ \`
    -SmtpServer smtp.company.com

# Update ticket
# Add: "Password reset, temp password sent to user"
# Set status: Resolved
Write-Host "Password reset completed. Ticket #$TicketNumber updated."
\`\`\`

## Scenario 3: Offboarding

### PowerShell
\`\`\`powershell
param(
    [string]$SamAccountName,
    [string]$ManagerEmail,
    [string]$LastDay,
    [switch]$Immediate
)

$upn = "$SamAccountName@company.com"

# 1. Disable account immediately
Disable-ADAccount -Identity $SamAccountName
Write-Host "✓ Account disabled"

# 2. Set description
Set-ADUser -Identity $SamAccountName \`
    -Description "Offboarded: $(Get-Date -Format 'yyyy-MM-dd') Last day: $LastDay"

# 3. Backup mailbox
# (Done by admin via Exchange - New-MailboxExportRequest)

# 4. Convert to shared mailbox (after 30 days)
# Set-Mailbox -Identity $upn -Type Shared
# Remove-MsolUserLicense -UserPrincipalName $upn

# 5. Setup email forwarding
Set-Mailbox -Identity $upn \`
    -ForwardingSmtpAddress $ManagerEmail \`
    -DeliverToMailboxAndForward $true
Write-Host "✓ Email forwarding to $ManagerEmail"

# 6. Set auto-reply
Set-MailboxAutoReplyConfiguration -Identity $upn \`
    -AutoReplyState Enabled \`
    -ExternalMessage "I am no longer with the company. Please contact $ManagerEmail" \`
    -InternalMessage "I am no longer with the company. Please contact $ManagerEmail"
Write-Host "✓ Auto-reply configured"

# 7. Remove group memberships
Get-ADPrincipalGroupMembership -Identity $SamAccountName |
    Where {$_.Name -ne "Domain Users"} |
    ForEach {
        Remove-ADGroupMember -Identity $_.Name -Members $SamAccountName -Confirm:$false
        Write-Host "  Removed from: $($_.Name)"
    }

# 8. Revoke MFA sessions
# Connect-MsolService
# Revoke-AzureADUserAllRefreshToken -ObjectId $upn

# 9. Wipe mobile device
# Get-MobileDevice -Mailbox $upn | 
#     Clear-MobileDevice -NotificationEmailAddresses $ManagerEmail

# 10. Convert OneDrive to manager
# Set-SPOSite -Identity "https://company-my.sharepoint.com/personal/$SamAccountName" \`
#     -Owner $ManagerEmail

# 11. Remove LAPS password
# Reset-LapsPassword -Identity $SamAccountName

# 12. Move to Disabled OU
Move-ADObject -Identity $SamAccountName \`
    -TargetPath "OU=Disabled,DC=company,DC=com"
Write-Host "✓ Moved to Disabled OU"

# 13. Set deletion date (30 days)
$deletionDate = (Get-Date).AddDays(30)
Set-ADUser -Identity $SamAccountName \`
    -AccountExpirationDate $deletionDate
Write-Host "✓ Account will expire on $deletionDate"

# 14. Notification
Send-MailMessage -To $ManagerEmail \`
    -Subject "Offboarding Complete - $SamAccountName" \`
    -Body @"
Offboarding completed for $SamAccountName

Actions taken:
✓ Account disabled
✓ Email forwarded to $ManagerEmail
✓ Auto-reply enabled
✓ Group memberships removed
✓ MFA revoked
✓ Moved to Disabled OU
✓ Account expires: $deletionDate

Please arrange equipment return.

- IT Team
"@ \`
    -SmtpServer smtp.company.com

# 15. Log
$logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - OFFBOARD $SamAccountName by $env:USERNAME"
Add-Content "C:\\Logs\\Offboarding.log" -Value $logEntry

Write-Host ""
Write-Host "Offboarding Summary for $SamAccountName"
Write-Host "========================================"
Write-Host "Account: Disabled ✓"
Write-Host "Email: Forwarding to $ManagerEmail ✓"
Write-Host "Groups: Removed ✓"
Write-Host "OU: Disabled ✓"
Write-Host "Deletion: $deletionDate"
\`\`\`

## Scenario 4: Share Folder Access

### Diagnosis
\`\`\`powershell
$user = "jdoe"
$share = "\\\\server01\\Data"
$server = "server01"

# 1. Test connectivity
Test-NetConnection $server -Port 445

# 2. Check share exists
Get-SmbShare -CimSession $server -Name "Data"

# 3. Check share permissions
Get-SmbShareAccess -CimSession $server -Name "Data"

# 4. Check NTFS permissions
icacls $share

# 5. Check user's groups
Get-ADPrincipalGroupMembership $user | Select Name

# 6. Get effective access
# Advanced → Effective Access (GUI)
# Or: (Get-Acl $share).Access | 
#     Where {$_.IdentityReference -match $user}
\`\`\`

### Solutions
\`\`\`powershell
# Grant access
# 1. Share level
Grant-SmbShareAccess -Name "Data" \`
    -AccountName "COMPANY\\Sales_Team" \`
    -AccessRight Change \`
    -CimSession $server -Force

# 2. NTFS level
$acl = Get-Acl $share
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule(
    "COMPANY\\Sales_Team",
    "Modify",
    "ContainerInherit,ObjectInherit",
    "None",
    "Allow"
)
$acl.SetAccessRule($rule)
Set-Acl -Path $share -AclObject $acl

# 3. Add user to group
Add-ADGroupMember -Identity "Sales_Team" -Members "jdoe"

# 4. Clear cached credentials on user's PC
# On user's machine:
cmdkey /delete:server01
net use \\\\server01\\Data /delete
net use \\\\server01\\Data /user:COMPANY\\jdoe
\`\`\`

## Scenario 5: VPN Issues

### Diagnostic Script
\`\`\`powershell
# VPN Diagnostics
Write-Host "=== VPN Diagnostics ===" -ForegroundColor Cyan

# 1. Basic connectivity
Write-Host "\`n1. Testing Internet connectivity..."
$internet = Test-NetConnection 8.8.8.8 -Port 53
if ($internet.TcpTestSucceeded) {
    Write-Host "  ✓ Internet OK" -ForegroundColor Green
} else {
    Write-Host "  ✗ No Internet" -ForegroundColor Red
    Write-Host "  Solution: Check local network first"
    return
}

# 2. VPN server reachability
Write-Host "\`n2. Testing VPN server..."
$vpnServer = "vpn.company.com"
$vpnPort = 443

$server = Test-NetConnection $vpnServer -Port $vpnPort
if ($server.TcpTestSucceeded) {
    Write-Host "  ✓ VPN server reachable on port $vpnPort" -ForegroundColor Green
} else {
    Write-Host "  ✗ Cannot reach VPN server" -ForegroundColor Red
    Write-Host "  Possible causes:"
    Write-Host "    - ISP blocking port"
    Write-Host "    - Firewall at location"
    Write-Host "    - VPN server down"
    Write-Host "  Solutions:"
    Write-Host "    1. Try mobile hotspot"
    Write-Host "    2. Contact network admin"
    return
}

# 3. DNS resolution
Write-Host "\`n3. Testing DNS..."
try {
    $dns = Resolve-DnsName $vpnServer -ErrorAction Stop
    Write-Host "  ✓ DNS resolves to $($dns[0].IPAddress)" -ForegroundColor Green
} catch {
    Write-Host "  ✗ DNS resolution failed" -ForegroundColor Red
    Write-Host "  Solution: nslookup $vpnServer 8.8.8.8"
}

# 4. VPN profile
Write-Host "\`n4. Checking VPN profile..."
$profiles = Get-VpnConnection -ErrorAction SilentlyContinue
if ($profiles) {
    Write-Host "  Found profiles:"
    $profiles | ForEach-Object {
        Write-Host "    - $($_.Name) [$($_.ServerAddress)]"
        Write-Host "      Status: $($_.ConnectionStatus)"
        Write-Host "      Type: $($_.TunnelType)"
    }
} else {
    Write-Host "  No VPN profile found" -ForegroundColor Yellow
    Write-Host "  Solution: Re-create VPN profile"
}

# 5. Test connection
Write-Host "\`n5. Attempting connection test..."
# Note: This requires credentials
# Connect-VpnConnection -Name "Company-VPN"

Write-Host "\`n=== Diagnostics Complete ===" -ForegroundColor Cyan
\`\`\`

### Common Solutions
\`\`\`
"If VPN fails from home but works in office":
1. Home router firewall - allow UDP 500/4500, ESP
2. ISP blocking - use SSL VPN (port 443)
3. ISP CGNAT - need different VPN method
4. MTU issues - try lower MTU
5. Try mobile hotspot to isolate

"Connects but cannot access resources":
1. Check split tunnel configuration
2. DNS not resolving internal names
3. Routes not pushed correctly
4. Firewall rules
5. Check: nslookup internal.company.com
6. Check: ping server.internal.company.com

"Certificate error":
1. Client certificate expired
2. Server certificate not trusted
3. Clock skew (time wrong)
4. Root CA not installed
5. Solutions:
   - Renew client certificate
   - Install root CA
   - Sync time with NTP
   - Update VPN client
\`\`\`

## Scenario 6: Email Issues

### Message Trace
\`\`\`powershell
# Connect to Exchange Online
Connect-ExchangeOnline

# Trace emails from sender
Get-MessageTrace \`
    -SenderAddress "customer@external.com" \`
    -RecipientAddress "jdoe@company.com" \`
    -StartDate (Get-Date).AddDays(-2) \`
    -EndDate (Get-Date) |
    Format-List Received, SenderAddress, RecipientAddress, 
                Subject, Status, MessageTraceId

# Expand details
Get-MessageTraceDetail -MessageTraceId "abc-123" |
    Select Date, Event, Detail

# Search by subject
Get-MessageTrace \`
    -SenderAddress "customer@external.com" \`
    -StartDate (Get-Date).AddDays(-7) \`
    -EndDate (Get-Date) |
    Where {$_.Subject -like "*invoice*"}
\`\`\`

### Common Solutions
\`\`\`
"Email not received":
1. Check spam/junk/quarantine
   Get-QuarantineMessage -RecipientAddress "jdoe@company.com"

2. Check blocked senders
   Get-BlockedSenderAddress -RecipientAddress "jdoe@company.com"

3. Check mailbox rules
   Get-InboxRule -Mailbox "jdoe@company.com"

4. Check mailbox quota
   Get-MailboxStatistics -Identity "jdoe@company.com" |
       Select TotalItemSize, ItemCount

5. Check message trace (admin)
   See above

6. Check transport rules
   Get-TransportRule

"Email not sending":
1. Check attachment size (default 25MB)
2. Recipient wrong
3. SPF/DKIM/DMARC issues
4. Blocked by recipient
5. Blacklisted

"Emails going to spam":
1. Check SPF record:
   Resolve-DnsName company.com -Type TXT
   Should have: v=spf1 include:spf.protection.outlook.com -all

2. Check DKIM
3. Check DMARC
4. Request recipient whitelist
5. Check sender reputation
\`\`\``,
        },
      ],
    },
    {
      id: "5",
      title: "ITSM Tools và Career Development",
      slug: "itsm-tools-career",
      duration: "60 phút",
      prerequisites: ["4"],
      content: `# ITSM Tools và Career Development

## ITSM Tools

### ServiceNow
\`\`\`
Enterprise ITSM platform
Modules:
- Incident Management
- Problem Management
- Change Management
- Request Management
- Asset Management
- CMDB
- Knowledge Base
- Reporting

Key Concepts:
- Incidents vs Requests
- SLA Definitions
- Workflows
- Business Rules
- UI Policies
- Notifications

Roles:
- End User
- ITIL User
- Fulfiller
- Approver
- Admin
- Process Owner
\`\`\`

### Jira Service Management
\`\`\`
Atlassian's ITSM
Features:
- Request types
- Queues
- SLAs
- Automations
- Forms
- Integrations (Confluence, Slack)

Good for:
- SMBs
- Agile teams
- Developer-heavy orgs

Configuration:
- Project settings
- Request types
- Workflows
- SLAs
- Reports
\`\`\`

### Freshservice
\`\`\`
User-friendly ITSM
Features:
- Ticket management
- Asset management
- Change management
- Project management
- Reporting

Good for:
- SMB to mid-market
- Cost-effective
- Easy setup
\`\`\`

### ManageEngine ServiceDesk Plus
\`\`\`
Comprehensive ITSM
Features:
- ITIL processes
- Asset management
- CMDB
- Project management
- Purchase management

On-premises or Cloud
Good for:
- Enterprises
- Full ITIL implementation
\`\`\`

### GLPI (Open Source)
\`\`\`
Free ITSM
Features:
- Helpdesk
- Asset management
- CMDB
- Inventory
- Project management

Good for:
- Budget-conscious orgs
- Full control
- Customization needed
\`\`\`

## Ticket Best Practices

### Ticket Writing

**Good ticket:**
\`\`\`
Title: [P3] Cannot access shared folder \\\\server01\\Data

Description:
User: John Doe (jdoe)
Department: Sales
Computer: WS-SALES-042
Time of issue: 10:15 AM today

Problem:
Cannot access shared folder \\\\server01\\Data.
Error: "Access is denied"

Steps to reproduce:
1. Open File Explorer
2. Navigate to \\\\server01\\Data
3. Error appears

Impact:
Cannot access sales reports needed for client meeting at 2 PM

Troubleshooting done:
- Restarted computer
- Cleared credentials
- Can ping server01 successfully
- Can access \\\\server01\\Public

Attachments:
- error-screenshot.png
- ping-results.txt

Related tickets:
- INC001234 (similar issue last week)
\`\`\`

**Bad ticket:**
\`\`\`
Title: Help!
Description: I can't work
\`\`\`

### Ticket Documentation
\`\`\`
Always include:
1. User impact
2. Steps taken
3. Current status
4. Next actions
5. Time spent

Update regularly:
- Every 30 min for P1
- Every 2h for P2
- Daily for P3-P4

Resolution notes:
- Root cause
- Solution applied
- Verification steps
- Prevention measures
- User education
\`\`\`

## Knowledge Base

### KB Article Structure
\`\`\`
Title: [Clear, searchable]

Overview:
- What is this about
- Who is this for

Symptoms:
- What user sees

Cause:
- Why it happens

Solution:
- Step-by-step
- Screenshots
- Expected results

Prevention:
- How to avoid

Related articles:
- Links
\`\`\`

### KB Example
\`\`\`
Title: How to connect to company VPN

Category: Network / VPN

Audience: All employees

Prerequisites:
- Company laptop
- AD credentials
- MFA enabled

Steps:
1. Click Start → Company VPN
2. Enter username: domain\\username
3. Enter password
4. Approve MFA on phone
5. Wait for "Connected" message

Troubleshooting:
- Cannot connect → Check Internet
- Wrong password → Reset at password.company.com
- MFA not working → Call IT Helpdesk

Last updated: 2024-01-15
Author: IT Helpdesk
Review: Annually
\`\`\`

## Metrics và Reporting

### Daily Report
\`\`\`
DAILY HELPDESK REPORT - [Date]
==============================

Ticket Volume:
- Opened: 25
- Closed: 30
- Open EOD: 15 (from 20)
- Backlog: ↓ 5

Priority Breakdown:
- P1: 0
- P2: 2 (both resolved in SLA)
- P3: 8
- P4: 12
- P5: 3

SLA Compliance:
- Response: 96%
- Resolution: 92%

Top Issues:
1. Password resets (8)
2. Outlook sync (5)
3. VPN (4)
4. Printer (3)
5. Other (5)

Notable Incidents:
- 10:30 AM: Email server brief outage (10 min)
- 2:15 PM: Network latency in building A

Staffing:
- L1: John, Jane
- L2: Bob
- On-call: Alice
\`\`\`

### Weekly/Monthly Report
\`\`\`
MONTHLY REPORT - [Month/Year]
=============================

Executive Summary:
Total tickets: 520 (↑ 5% vs last month)
Avg resolution: 6.2h (↓ 0.3h)
SLA compliance: 94% (↑ 2%)
CSAT: 4.6/5 (stable)

Trends:
- Password resets steady
- Office 365 issues ↑ 20% (new update)
- VPN issues ↓ 30% (after firewall fix)

Top Categories:
1. Account: 30%
2. Software: 25%
3. Hardware: 20%
4. Network: 15%
5. Other: 10%

Top Problem Tickets:
- KB article updated for Office 365 issues
- VPN solution documented
- New hire training improved

Recommendations:
1. Self-service password portal (reduce 30% tickets)
2. Automated software deployment
3. Additional L1 staff for peak hours
\`\`\`

## Career Development

### Career Paths
\`\`\`
Helpdesk L1 → L2 → L3 → System Admin → Cloud/DevOps
                     ↘ Network Engineer
                     ↘ Security Analyst
                     ↘ IT Manager
                     ↘ Solutions Architect
\`\`\`

### Certifications
\`\`\`
Entry Level:
- CompTIA A+ (Hardware/Software)
- CompTIA Network+ (Networking)
- Microsoft 365 Certified: Fundamentals

Intermediate:
- CompTIA Security+
- CCNA (Cisco)
- MCSA / MCSE (Microsoft)
- ITIL Foundation

Advanced:
- CCNP / CCIE (Cisco)
- Azure Administrator (AZ-104)
- AWS Solutions Architect
- CISSP / CISM (Security)
\`\`\`

### Skills Development
\`\`\`
Technical:
- PowerShell scripting
- Networking (TCP/IP, DNS, DHCP)
- Windows Server administration
- Linux basics
- Cloud platforms (Azure, AWS)
- Cybersecurity basics
- Scripting (Python, Bash)

Soft Skills:
- Communication
- Problem solving
- Time management
- Documentation
- Customer service
- Teamwork
\`\`\`

### Interview Preparation

**Technical Questions:**
\`\`\`
1. How do you troubleshoot a slow computer?
2. User cannot access Internet - what do you check?
3. How to reset a password in AD?
4. What is DNS? DHCP?
5. Explain OSI model
6. Difference TCP vs UDP?
7. How to map a network drive?
8. User lost file - how to recover?
9. Difference between POP3 and IMAP?
10. What is VPN and why use it?
\`\`\`

**Behavioral Questions:**
\`\`\`
1. Tell me about a difficult customer
2. How do you handle priority conflicts?
3. Describe a time you solved a complex issue
4. How do you explain technical concepts to non-technical users?
5. What's your approach to continuous learning?
6. Describe a time you made a mistake - how did you handle it?
7. How do you handle stress/pressure?
8. Why should we hire you?
\`\`\`

**STAR Method:**
\`\`\`
S - Situation: Set the context
T - Task: What needed to be done
A - Action: What you did
R - Result: What was the outcome

Example:
"There was a P1 incident where the email server went down 
during a critical product launch (Situation). I needed to 
restore service ASAP while keeping users informed (Task). 
I quickly diagnosed an IIS issue, restarted the service, 
and sent status updates every 15 minutes (Action). Email 
was back up in 20 minutes, and we were ready for launch 
(Result)."
\`\`\`

## Soft Skills

### Communication
\`\`\`
With Users:
- Use simple language
- Avoid technical jargon
- Confirm understanding
- Set expectations
- Follow up

With Team:
- Daily standups
- Handoffs clear
- Knowledge sharing
- Escalate properly

With Management:
- Status updates
- Metrics reporting
- Resource requests
- Strategic input
\`\`\`

### Time Management
\`\`\`
Priorities:
1. P1 incidents (drop everything)
2. P2 incidents
3. P3/P4 tickets (in queue order)
4. Projects

Techniques:
- Time blocking
- Pomodoro (25 min focus)
- Batch similar tasks
- Calendar management
- Learn to say "no"
- Delegate when possible
- Document everything
\`\`\`

### Stress Management
\`\`\`
During crisis:
- Breathe
- Prioritize
- Communicate
- Focus on solution
- Document

Long-term:
- Work-life balance
- Regular breaks
- Physical activity
- Mentorship
- Continuous learning
- Celebrate wins
\`\`\`

## Bài tập thực hành
Hãy tạo portfolio và luyện phỏng vấn!`,
      exercises: [
        {
          id: "5-1",
          title: "IT Helpdesk Portfolio",
          description: "Xây dựng portfolio và luyện phỏng vấn",
          instructions: `Xây dựng portfolio cho IT Helpdesk:
1. CV với skills và experience
2. Cover letter template
3. Sample KB articles (3)
4. Sample PowerShell scripts (3)
5. STAR stories cho 5 behavioral questions
6. 10 technical questions và answers
7. 90-day plan cho vị trí mới`,
          type: "theory",
          solution: `# IT Helpdesk Portfolio

## 1. CV Sample

\`\`\`
NGUYEN VAN A
IT Support Specialist
📧 a.nguyen@email.com | 📱 090-123-4567
📍 Ho Chi Minh City, Vietnam | 🔗 linkedin.com/in/anguyen

SUMMARY
Detail-oriented IT Support Specialist with 2 years experience 
providing L1/L2 technical support. Skilled in Windows 
administration, Active Directory, Office 365, and network 
troubleshooting. ITIL Foundation certified. Passionate about 
delivering excellent customer service.

TECHNICAL SKILLS
Operating Systems: Windows 10/11, Windows Server 2016-2022, 
                   macOS, Linux (Ubuntu)
Directory Services: Active Directory, Azure AD
Email:             Exchange Online, Outlook, M365
Networking:        TCP/IP, DNS, DHCP, VPN, VLAN
Tools:             Jira Service Management, ServiceNow
Scripting:         PowerShell, Python (basic)
Remote Tools:      TeamViewer, Quick Assist, RDP
ITSM:              ITIL v4 Foundation

EXPERIENCE

IT Support Engineer | ABC Company | Jan 2023 - Present
- Provide L1/L2 support to 200+ users
- Resolve 95% of tickets within SLA
- Manage AD accounts (onboarding/offboarding)
- Maintain CSAT > 4.5/5
- Created 15 KB articles
- Automated onboarding with PowerShell (reduced 60% time)
- Configure and deploy Windows/macOS devices

IT Helpdesk Intern | XYZ Ltd | Jul 2022 - Dec 2022
- Handled 30+ tickets per day
- Assisted with Windows deployments
- Documented common issues in KB
- Learned ticketing workflows

EDUCATION
B.Sc. Information Technology | University of Tech | 2018-2022

CERTIFICATIONS
- CompTIA A+ (2022)
- ITIL v4 Foundation (2023)
- Microsoft 365 Fundamentals (2023)
- CCNA (in progress)

PROJECTS
Network Upgrade Project
- Assisted in switching from unmanaged to managed switches
- Configured VLANs for department separation
- Documented new topology

PowerShell Automation Project
- Created automated onboarding script
- Reduced user setup time from 30 min to 5 min
- Script has been used for 50+ onboardings
\`\`\`

## 2. Cover Letter

\`\`\`
Dear Hiring Manager,

I am writing to apply for the IT Support Specialist position 
at [Company]. With 2 years of L1/L2 helpdesk experience 
supporting 200+ users, I am confident I can contribute to 
your IT team.

In my current role at ABC Company, I:
- Maintain 95% SLA compliance and 4.5/5 CSAT
- Automate onboarding with PowerShell, saving 25+ hours/month
- Created KB articles that reduced repeat tickets by 20%

I am particularly drawn to [Company] because [specific reason]. 
I am eager to bring my technical skills and customer-service 
focus to your team.

Thank you for considering my application. I look forward to 
discussing how I can help.

Sincerely,
Nguyen Van A
\`\`\`

## 3. Sample KB Articles

### KB Article 1: Password Reset
\`\`\`
Title: How to reset your AD password (Self-Service)

Category: Account Management
Audience: All employees
Estimated time: 2 minutes

Overview:
Reset your company account password using the self-service portal.

Prerequisites:
- Company laptop or personal device
- Mobile phone (for MFA)

Steps:
1. Open browser, go to: https://password.company.com
2. Enter your email: username@company.com
3. Click "Forgot my password"
4. Verify identity:
   a. Receive code via SMS to registered phone
   b. Enter 6-digit code
5. Enter new password:
   - Minimum 12 characters
   - Must include: uppercase, lowercase, number, symbol
   - Cannot be previous 24 passwords
6. Confirm new password
7. Click "Reset"
8. Login with new password

Troubleshooting:
- Don't receive SMS → Check phone number, use "Voice call" option
- Account locked → Wait 30 min or call IT
- Password rejected → Follow complexity rules

Related:
- KB001: MFA Setup
- KB015: VPN Connection

Last updated: 2024-01-15
\`\`\`

### KB Article 2: VPN Connection
\`\`\`
Title: How to connect to company VPN

Category: Network
Audience: Remote workers
Estimated time: 3 minutes

Prerequisites:
- Company laptop
- Working Internet
- AD account active
- MFA configured

Steps:
1. Click Start → "Company VPN"
2. Enter credentials:
   - Username: COMPANYPASSWORD\\yourname
   - Password: your password
3. Click "Connect"
4. MFA prompt on phone → Approve
5. Wait for "Connected" (green icon)
6. Verify: Open browser → access internal.company.com

Windows:
- App: Settings → Network & Internet → VPN
- Should show "Company VPN - Connected"

macOS:
- Menu bar → VPN icon → Connect

Troubleshooting:
| Issue | Solution |
|-------|----------|
| Can't connect | Check Internet, restart VPN |
| Wrong password | Reset at password.company.com |
| MFA fails | Re-register MFA |
| Connected but no access | Restart browser, flush DNS |
| Slow VPN | Switch to different WiFi |

Escalation:
If issue persists after 3 attempts, contact IT Helpdesk:
- Ext: 1234
- Email: it@company.com
- Include: Screenshots, error messages
\`\`\`

## 4. PowerShell Scripts

### Script 1: New User Onboarding
\`\`\`powershell
<#
.SYNOPSIS
    Automated user onboarding
.DESCRIPTION
    Creates AD user, mailbox, adds to groups
.PARAMETER FirstName
    User's first name
.EXAMPLE
    .\\New-UserOnboarding.ps1 -FirstName "John" -LastName "Doe" -Department "IT"
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$FirstName,
    
    [Parameter(Mandatory)]
    [string]$LastName,
    
    [Parameter(Mandatory)]
    [ValidateSet("IT","HR","Sales","Marketing")]
    [string]$Department,
    
    [string]$Title = "Employee"
)

# Config
$domain = "company.com"
$defaultPassword = "Welcome@$(Get-Date -Format 'yyyy')!"
$ouPath = "OU=$Department,OU=Users,DC=company,DC=com"

# Generate SamAccountName
$sam = ($FirstName.Substring(0,1) + $LastName).ToLower()
$counter = 1
while (Get-ADUser -Filter "SamAccountName -eq '$sam'" -ErrorAction SilentlyContinue) {
    $sam = ($FirstName.Substring(0,1) + $LastName + $counter).ToLower()
    $counter++
}

$upn = "$sam@$domain"
$displayName = "$FirstName $LastName"

try {
    # Create AD user
    New-ADUser -Name $displayName \`
        -GivenName $FirstName -Surname $LastName \`
        -DisplayName $displayName \`
        -SamAccountName $sam \`
        -UserPrincipalName $upn \`
        -EmailAddress $upn \`
        -Path $ouPath \`
        -AccountPassword (ConvertTo-SecureString $defaultPassword -AsPlainText -Force) \`
        -Enabled $true -ChangePasswordAtLogon $true \`
        -Department $Department -Title $Title
    
    Write-Host "✓ AD user created: $sam" -ForegroundColor Green
    
    # Add to groups
    Add-ADGroupMember -Identity "\${Department}_Users" -Members $sam
    Add-ADGroupMember -Identity "All_Employees" -Members $sam
    Write-Host "✓ Added to groups" -ForegroundColor Green
    
    # Output summary
    @"
=========================================
ONBOARDING COMPLETE
=========================================
Name:        $displayName
Username:    $sam
Email:       $upn
Password:    $defaultPassword
Department:  $Department
Title:       $Title
=========================================
User must change password on first login.
"@ | Write-Host
    
} catch {
    Write-Error "Onboarding failed: $_"
    # Cleanup
    if (Get-ADUser -Identity $sam -ErrorAction SilentlyContinue) {
        Remove-ADUser -Identity $sam -Confirm:$false
    }
}
\`\`\`

### Script 2: Password Reset
\`\`\`powershell
<#
.SYNOPSIS
    Reset AD user password
#>
param(
    [Parameter(Mandatory)]
    [string]$SamAccountName,
    
    [string]$TicketNumber = "N/A"
)

# Verify user
$user = Get-ADUser -Identity $SamAccountName -Properties EmailAddress -ErrorAction Stop
if (-not $user) {
    Write-Error "User not found: $SamAccountName"
    exit 1
}

$newPassword = "Reset@$(Get-Date -Format 'yyyyMMdd')!"

# Reset
Set-ADAccountPassword -Identity $SamAccountName \`
    -NewPassword (ConvertTo-SecureString $newPassword -AsPlainText -Force) \`
    -Reset
Set-ADUser -Identity $SamAccountName -ChangePasswordAtLogon $true
Unlock-ADAccount -Identity $SamAccountName -ErrorAction SilentlyContinue

# Log
$log = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | $SamAccountName | Ticket: $TicketNumber | By: $env:USERNAME"
Add-Content -Path "C:\\Logs\\PasswordResets.log" -Value $log

Write-Host "✓ Password reset for $($user.Name)"
Write-Host "  Temp password: $newPassword"
Write-Host "  User must change at next logon"
\`\`\`

### Script 3: System Health Check
\`\`\`powershell
<#
.SYNOPSIS
    Quick system health report for helpdesk
#>
function Get-SystemHealth {
    Write-Host "\`n=== SYSTEM HEALTH REPORT ===" -ForegroundColor Cyan
    Write-Host "Time: $(Get-Date)"
    Write-Host "Computer: $env:COMPUTERNAME"
    Write-Host "User: $env:USERNAME"
    
    # OS
    $os = Get-CimInstance Win32_OperatingSystem
    Write-Host "\`n[OS]" -ForegroundColor Yellow
    Write-Host "  $($os.Caption) - Version $($os.Version)"
    $uptime = (Get-Date) - $os.LastBootUpTime
    Write-Host "  Uptime: $($uptime.Days)d $($uptime.Hours)h $($uptime.Minutes)m"
    
    # CPU
    Write-Host "\`n[CPU]" -ForegroundColor Yellow
    $cpu = Get-CimInstance Win32_Processor
    Write-Host "  $($cpu.Name)"
    Write-Host "  Load: $($cpu.LoadPercentage)%"
    
    # Memory
    Write-Host "\`n[Memory]" -ForegroundColor Yellow
    $mem = Get-CimInstance Win32_OperatingSystem
    $totalGB = [math]::Round($mem.TotalVisibleMemorySize/1MB, 2)
    $freeGB = [math]::Round($mem.FreePhysicalMemory/1MB, 2)
    $usedPercent = [math]::Round((($totalGB - $freeGB)/$totalGB)*100, 1)
    Write-Host "  Total: $totalGB GB"
    Write-Host "  Free:  $freeGB GB"
    Write-Host "  Used:  $usedPercent%"
    
    # Disk
    Write-Host "\`n[Disk]" -ForegroundColor Yellow
    Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" | ForEach-Object {
        $sizeGB = [math]::Round($_.Size/1GB, 2)
        $freeGB = [math]::Round($_.FreeSpace/1GB, 2)
        $usedPct = [math]::Round((($sizeGB - $freeGB)/$sizeGB)*100, 1)
        Write-Host "  $($_.DeviceID) $sizeGB GB total, $freeGB GB free ($usedPct% used)"
    }
    
    # Network
    Write-Host "\`n[Network]" -ForegroundColor Yellow
    Get-NetIPAddress -AddressFamily IPv4 | 
        Where {$_.InterfaceAlias -notlike "*Loopback*"} |
        ForEach-Object {
            Write-Host "  $($_.InterfaceAlias): $($_.IPAddress)"
        }
    
    # Top processes
    Write-Host "\`n[Top 5 CPU Processes]" -ForegroundColor Yellow
    Get-Process | Sort CPU -Descending | Select -First 5 |
        Format-Table Name, CPU, WS -AutoSize
}
\`\`\`

## 5. STAR Stories

### Story 1: Difficult Customer
\`\`\`
S: A sales manager was very angry because she couldn't access 
   her email during a client presentation. She called and 
   was yelling at me.

T: I needed to calm her down, fix the issue quickly, and 
   maintain professional relationship.

A: 
- Listened without interrupting
- Acknowledged her frustration: "I understand this is critical"
- Apologized for the inconvenience
- Asked specific questions (when did it start, any changes)
- Found issue: mailbox was full
- Removed old attachments, freed space
- Guided her through login
- Followed up with email with permanent solution

R: 
- Email working in 8 minutes
- Customer apologized for yelling
- CSAT: 5/5
- She became a regular positive reviewer
\`\`\`

### Story 2: Complex Problem Solving
\`\`\`
S: Multiple users in Finance department reported random 
   Outlook crashes, but only during certain times.

T: Find root cause, prevent recurrence.

A:
- Collected detailed information:
  - Time patterns (end of month)
  - Specific actions
  - Error messages
- Reviewed event logs (found AppCrash)
- Analyzed: Correlation with month-end reports
- Checked: Add-in installed recently
- Found: New add-in was timing out with large attachments
- Solution: Updated add-in + adjusted timeout
- Follow-up: Monitoring for 2 weeks

R:
- Crashes stopped
- Created KB article
- Improved with vendor
- Team learned log analysis
\`\`\`

## 6. Technical Q&A

### Q1: Troubleshoot slow PC
\`\`\`
Step 1: Check resources
- Task Manager: CPU, RAM, Disk, Network
- Resource Monitor for details

Step 2: Common causes
- Startup programs
- Low RAM
- Full disk
- Malware
- Windows update pending

Step 3: Solutions
- Disable startup items
- Add RAM
- Free disk space
- Antivirus scan
- Windows update

Step 4: Prevention
- Regular maintenance
- User education
\`\`\`

### Q2: User cannot access Internet
\`\`\`
Step 1: Check physical
- Cable connected?
- WiFi connected?
- LEDs on NIC/router?

Step 2: Check IP
- ipconfig /all
- APIPA (169.254.x.x)? → DHCP issue
- Wrong subnet? → DHCP/static

Step 3: Test layers
- Ping 127.0.0.1 (stack)
- Ping gateway (LAN)
- Ping 8.8.8.8 (Internet)
- Ping google.com (DNS)

Step 4: Solutions
- ipconfig /release + /renew
- ipconfig /flushdns
- netsh int ip reset
- netsh winsock reset
- Restart adapter
\`\`\`

## 7. 90-Day Plan

\`\`\`
DAYS 1-30: Learn
- Complete onboarding
- Learn tools (ticketing, monitoring)
- Shadow senior staff
- Read KB articles
- Understand org structure
- Meet key contacts
- Pass any required certs

Goals:
- Handle L1 tickets independently
- Respond to 80% tickets within SLA
- Complete 5 KB articles

DAYS 31-60: Contribute
- Handle L1 + some L2
- Suggest improvements
- Automate routine tasks
- Improve KB
- Take on small projects

Goals:
- 90% SLA compliance
- Create 3 automation scripts
- Improve KB articles

DAYS 61-90: Lead
- Mentor new team members
- Lead small projects
- Propose strategic changes
- Document processes
- Consider certifications

Goals:
- 95% SLA compliance
- Complete 1 major project
- Present improvement ideas
- Start next certification
\`\`\``,
        },
      ],
    },
  ],
};
