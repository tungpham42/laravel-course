import { Course } from "@/types";

export const mcsaWindowsServer: Course = {
  id: "mcsa-windows-server",
  slug: "mcsa",
  title: "MCSA Windows Server",
  description:
    "Quản trị Windows Server, Active Directory, Networking và Cloud",
  image: "/images/mcsa-course.jpg",
  duration: "12 tuần",
  level: "intermediate",
  lessons: [
    {
      id: "1",
      title: "Cài đặt và Quản trị Windows Server",
      slug: "cai-dat-windows-server",
      duration: "60 phút",
      content: `# Cài đặt và Quản trị Windows Server

## Giới thiệu Windows Server

### Các phiên bản
\`\`\`
Windows Server 2016 (Standard, Datacenter)
Windows Server 2019 (Standard, Datacenter)
Windows Server 2022 (Standard, Datacenter) ← Hiện tại
Windows Server 2025 (sắp ra)
\`\`\`

### Editions
\`\`\`
Standard:
- Cho môi trường ảo hóa nhẹ
- 2 OSE (Operating System Environments)
- Tối đa 64 sockets
- RAM tối đa 24TB

Datacenter:
- Cho môi trường ảo hóa cao
- Unlimited OSE
- Storage Spaces Direct
- Software Defined Networking
- Shielded VMs
\`\`\`

## Yêu cầu Hệ thống

### Minimum
\`\`\`
CPU: 1.4 GHz 64-bit
RAM: 512 MB (GUI) / 2 GB
Disk: 32 GB
Network: Gigabit Ethernet
\`\`\`

### Recommended
\`\`\`
CPU: 2 GHz 64-bit (2+ cores)
RAM: 8 GB+ (16 GB for AD)
Disk: 100 GB+ SSD
Network: 10 Gbps
\`\`\`

## Cài đặt Windows Server

### Các bước
\`\`\`
1. Mount ISO vào VM/Physical
2. Boot từ ISO
3. Chọn Language, Time, Keyboard
4. Install now
5. Chọn Edition (Standard/Datacenter)
6. Chấp nhận License
7. Custom installation
8. Chọn Disk
9. Chờ cài đặt
10. Đặt password Administrator
\`\`\`

### Installation Options
\`\`\`
Server Core:
- Không có GUI
- Ít bảo mật hơn
- Nhẹ hơn, nhanh hơn
- Quản lý qua PowerShell/RSAT

Desktop Experience:
- Có GUI đầy đủ
- Dễ dùng cho người mới
- Nặng hơn
\`\`\`

### Chuyển đổi Core ↔ GUI
\`\`\`powershell
# Xem tính năng hiện tại
Get-WindowsFeature Server-Gui-Shell

# Cài GUI từ Core
Install-WindowsFeature Server-Gui-Mgmt-Infra, Server-Gui-Shell -Restart

# Xóa GUI về Core
Uninstall-WindowsFeature Server-Gui-Mgmt-Infra, Server-Gui-Shell -Restart
\`\`\`

## Cấu hình sau cài đặt

### Đổi tên máy tính
\`\`\`powershell
Rename-Computer -NewName "DC01" -Restart
\`\`\`

### Cấu hình Network
\`\`\`powershell
# Xem adapter
Get-NetAdapter

# Đặt IP tĩnh
New-NetIPAddress -InterfaceAlias "Ethernet" \`
    -IPAddress 192.168.1.10 \`
    -PrefixLength 24 \`
    -DefaultGateway 192.168.1.1

# Đặt DNS
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" \`
    -ServerAddresses 192.168.1.10, 8.8.8.8
\`\`\`

### Windows Update
\`\`\`powershell
# Kiểm tra updates
Get-WindowsUpdate

# Cài updates
Install-WindowsUpdate -AcceptAll -AutoReboot
\`\`\`

### Time Zone
\`\`\`powershell
Set-TimeZone -Id "SE Asia Standard Time"
\`\`\`

## Quản trị với Server Manager

### Các phần chính
\`\`\`
1. Dashboard - Tổng quan
2. Local Server - Cấu hình local
3. All Servers - Quản lý nhiều server
4. File and Storage Services
5. Tools - Công cụ quản trị
\`\`\`

### Add Roles and Features
\`\`\`powershell
# Cài role AD DS
Install-WindowsFeature -Name AD-Domain-Services \`
    -IncludeManagementTools

# Cài DNS
Install-WindowsFeature -Name DNS -IncludeManagementTools

# Cài DHCP
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Cài Web Server (IIS)
Install-WindowsFeature -Name Web-Server \`
    -IncludeManagementTools
\`\`\`

## PowerShell cơ bản

### Cmdlets quan trọng
\`\`\`powershell
# System info
Get-ComputerInfo
Get-CimInstance Win32_OperatingSystem
Get-CimInstance Win32_Processor

# Services
Get-Service
Get-Service -Name "DNS"
Start-Service DNS
Stop-Service DNS
Restart-Service DNS

# Processes
Get-Process
Get-Process -Name "svchost"
Stop-Process -Name "notepad"

# Files
Get-ChildItem C:\\
New-Item -ItemType Directory -Path "C:\\Test"
Remove-Item "C:\\Test" -Recurse

# Users
Get-LocalUser
New-LocalUser -Name "TestUser" -Password (ConvertTo-SecureString "P@ssw0rd" -AsPlainText -Force)
Add-LocalGroupMember -Group "Administrators" -Member "TestUser"
\`\`\`

### Remote Management
\`\`\`powershell
# Enable PS Remoting
Enable-PSRemoting -Force

# Remote session
Enter-PSSession -ComputerName "Server01" -Credential (Get-Credential)

# Invoke command remotely
Invoke-Command -ComputerName "Server01" -ScriptBlock {
    Get-Service
}

# Multiple computers
$servers = "Server01", "Server02", "Server03"
Invoke-Command -ComputerName $servers -ScriptBlock {
    Get-Service -Name "DNS"
}
\`\`\`

## Windows Admin Center

### Cài đặt
\`\`\`
Download từ: https://aka.ms/WACDownload
Cài đặt trên Windows 10/11 hoặc Server
Truy cập: https://localhost:6516
\`\`\`

### Tính năng
- Quản lý server qua web browser
- Quản lý Hyper-V, Storage
- Quản lý AD, DNS, DHCP
- Cập nhật, backup
- Không cần GUI đầy đủ

## Backup và Recovery

### Windows Server Backup
\`\`\`powershell
# Cài feature
Install-WindowsFeature Windows-Server-Backup

# Backup System State
wbadmin start systemstatebackup -backuptarget:D:

# Backup Full Server
wbadmin start backup -backupTarget:D: -allCritical -quiet

# Restore
wbadmin get versions
wbadmin start recovery -version:01/01/2024-10:00 -itemType:Volume -items:C:
\`\`\`

### System Restore Points
\`\`\`powershell
# Enable
Enable-ComputerRestore -Drive "C:\\"

# Create point
Checkpoint-Computer -Description "Before update" \`
    -RestorePointType "MODIFY_SETTINGS"

# List points
Get-ComputerRestorePoint

# Restore
Restore-Computer -RestorePoint 1
\`\`\`

## Monitoring và Performance

### Performance Monitor
\`\`\`
Các counter quan trọng:
- Processor(_Total)\\% Processor Time
- Memory\\Available MBytes
- PhysicalDisk(_Total)\\% Disk Time
- Network Interface\\Bytes Total/sec
\`\`\`

### Event Viewer
\`\`\`powershell
# Xem event logs
Get-EventLog -LogName System -Newest 10
Get-EventLog -LogName Application -EntryType Error

# Tìm event
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 20
\`\`\`

### Task Manager
- Processes, Performance, Users, Details, Services

### Resource Monitor
- CPU, Memory, Disk, Network

## Bài tập thực hành
Hãy cài đặt và cấu hình Windows Server!`,
      exercises: [
        {
          id: "1-1",
          title: "Cài đặt và cấu hình Server",
          description: "Thực hành setup Windows Server",
          instructions: `Cài đặt và cấu hình Windows Server 2022:
1. Cài Windows Server 2022 Standard (Desktop Experience)
2. Đổi tên máy thành "SRV01"
3. Cấu hình IP tĩnh 192.168.10.10/24, GW 192.168.10.1
4. Set DNS 8.8.8.8, 8.8.4.4
5. Đặt TimeZone Việt Nam
6. Cài các roles: DNS, DHCP, File Server
7. Kiểm tra cấu hình bằng PowerShell`,
          type: "code",
          starterCode: `# Viết PowerShell commands ở đây`,
          solution: `# 1. Đổi tên máy tính
Rename-Computer -NewName "SRV01" -Restart

# 2. Cấu hình Network (sau khi restart)
$adapter = Get-NetAdapter | Where-Object Status -eq "Up"

# Đặt IP tĩnh
New-NetIPAddress -InterfaceAlias $adapter.Name \`
    -IPAddress 192.168.10.10 \`
    -PrefixLength 24 \`
    -DefaultGateway 192.168.10.1

# Đặt DNS
Set-DnsClientServerAddress -InterfaceAlias $adapter.Name \`
    -ServerAddresses 8.8.8.8, 8.8.4.4

# 3. Set TimeZone
Set-TimeZone -Id "SE Asia Standard Time"

# 4. Cài Windows Updates
Install-Module PSWindowsUpdate -Force
Get-WindowsUpdate
Install-WindowsUpdate -AcceptAll -AutoReboot

# 5. Cài các Roles
Install-WindowsFeature -Name DNS, DHCP, File-Services \`
    -IncludeManagementTools

# 6. Verify
Get-WindowsFeature | Where-Object Installed

# 7. Kiểm tra cấu hình
Get-NetIPAddress -InterfaceAlias $adapter.Name
Get-DnsClientServerAddress -InterfaceAlias $adapter.Name
Get-TimeZone
Get-ComputerInfo | Select-Object WindowsProductName, CsName

# 8. Test network
Test-NetConnection -ComputerName 8.8.8.8 -Port 443
Resolve-DnsName google.com`,
        },
      ],
    },
    {
      id: "2",
      title: "Active Directory Domain Services",
      slug: "active-directory-ds",
      duration: "90 phút",
      prerequisites: ["1"],
      content: `# Active Directory Domain Services (AD DS)

## AD DS là gì?
Active Directory Domain Services là dịch vụ thư mục của Microsoft, lưu trữ thông tin về users, computers, và resources trong domain.

## Các khái niệm cơ bản

### Domain
\`\`\`
Ví dụ: company.local
- Tên miền nội bộ
- Quản lý tập trung users, computers
- Authentication và Authorization
\`\`\`

### Forest
\`\`\`
Forest = Tập hợp các Domain trees
Root domain: company.local
Child domain: hcm.company.local
\`\`\`

### Tree
\`\`\`
Domain tree: company.local, hcm.company.local, hn.company.local
\`\`\`

### Organizational Unit (OU)
\`\`\`
company.local
├── Users
│   ├── IT
│   ├── HR
│   └── Sales
├── Computers
│   ├── Desktops
│   └── Laptops
├── Servers
└── Groups
\`\`\`

## Cài đặt AD DS

### Bước 1: Cài role
\`\`\`powershell
Install-WindowsFeature -Name AD-Domain-Services \`
    -IncludeManagementTools
\`\`\`

### Bước 2: Tạo forest mới
\`\`\`powershell
Import-Module ADDSDeployment

Install-ADDSForest \`
    -DomainName "company.local" \`
    -DomainNetbiosName "COMPANY" \`
    -ForestMode "WinThreshold" \`
    -DomainMode "WinThreshold" \`
    -InstallDns \`
    -SafeModeAdministratorPassword (ConvertTo-SecureString "P@ssw0rd123" -AsPlainText -Force) \`
    -Force

# Máy sẽ tự động restart
\`\`\`

### Bước 3: Join domain
\`\`\`powershell
# Trên client/server khác
Add-Computer -DomainName "company.local" \`
    -Credential (Get-Credential "COMPANY\\Administrator") \`
    -Restart
\`\`\`

## Quản lý Users và Groups

### Tạo User
\`\`\`powershell
# Tạo OU
New-ADOrganizationalUnit -Name "IT" -Path "DC=company,DC=local"

# Tạo User
New-ADUser \`
    -Name "Nguyen Van A" \`
    -GivenName "A" \`
    -Surname "Nguyen Van" \`
    -SamAccountName "nguyenvana" \`
    -UserPrincipalName "nguyenvana@company.local" \`
    -EmailAddress "a.nguyen@company.local" \`
    -Path "OU=IT,DC=company,DC=local" \`
    -AccountPassword (ConvertTo-SecureString "P@ssw0rd" -AsPlainText -Force) \`
    -Enabled $true \`
    -ChangePasswordAtLogon $true
\`\`\`

### Tạo Group
\`\`\`powershell
# Global group
New-ADGroup \`
    -Name "IT_Admins" \`
    -GroupScope Global \`
    -GroupCategory Security \`
    -Path "OU=IT,DC=company,DC=local"

# Thêm member vào group
Add-ADGroupMember -Identity "IT_Admins" -Members "nguyenvana"
\`\`\`

### Tạo User hàng loạt từ CSV
\`\`\`csv
Name,SamAccountName,Department,Title
John Doe,jdoe,IT,Developer
Jane Smith,jsmith,HR,Manager
Bob Wilson,bwilson,Sales,Executive
\`\`\`

\`\`\`powershell
Import-Csv "users.csv" | ForEach-Object {
    $password = ConvertTo-SecureString "P@ssw0rd123" -AsPlainText -Force
    New-ADUser \`
        -Name $_.Name \`
        -SamAccountName $_.SamAccountName \`
        -UserPrincipalName "$($_.SamAccountName)@company.local" \`
        -Department $_.Department \`
        -Title $_.Title \`
        -Path "OU=Users,DC=company,DC=local" \`
        -AccountPassword $password \`
        -Enabled $true
}
\`\`\`

## Group Policy Objects (GPO)

### Các GPO phổ biến

**1. Password Policy**
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Account Policies → Password Policy

Settings:
- Minimum password length: 12
- Password complexity: Enabled
- Maximum password age: 90 days
- Enforce password history: 24
\`\`\`

**2. Desktop Restrictions**
\`\`\`
User Configuration → Policies → Administrative Templates 
→ Desktop

- Prohibit changes to desktop
- Remove Recycle Bin from desktop
- Hide desktop icons
\`\`\`

**3. Control Panel Restrictions**
\`\`\`
User Configuration → Policies → Administrative Templates 
→ Control Panel

- Prohibit access to Control Panel and PC settings
\`\`\`

**4. Mapped Drives**
\`\`\`
User Configuration → Preferences → Windows Settings 
→ Drive Maps

Actions: Create
Location: \\\\SERVER\\Share
Drive Letter: S:
\`\`\`

**5. Software Installation**
\`\`\`
Computer Configuration → Policies → Software Settings 
→ Software Installation

Assign MSI packages
\`\`\`

### Tạo và Link GPO
\`\`\`powershell
# Tạo GPO
New-GPO -Name "Desktop Restrictions" \`
    -Comment "Restrict desktop changes"

# Link GPO tới OU
New-GPLink -Name "Desktop Restrictions" \`
    -Target "OU=IT,DC=company,DC=local"

# Configure GPO settings (via GUI hoặc PowerShell)
# Force update
Invoke-GPUpdate -Computer "PC01" -Force -RandomDelayInMinutes 0
\`\`\`

### Backup và Restore GPO
\`\`\`powershell
# Backup all GPOs
Backup-GPO -All -Path "C:\\GPOBackup" -Comment "Weekly backup"

# Backup single
Backup-GPO -Name "Desktop Restrictions" \`
    -Path "C:\\GPOBackup"

# Restore
Restore-GPO -Name "Desktop Restrictions" \`
    -Path "C:\\GPOBackup"

# Import
Import-GPO -BackupGpoName "Desktop Restrictions" \`
    -Path "C:\\GPOBackup" \`
    -TargetName "Desktop Restrictions New"
\`\`\`

## FSMO Roles

### 5 FSMO roles
\`\`\`
Forest-wide:
1. Schema Master
2. Domain Naming Master

Domain-wide:
3. PDC Emulator
4. RID Master
5. Infrastructure Master
\`\`\`

### Xem FSMO roles
\`\`\`powershell
# Xem Schema Master
Get-ADForest | Select-Object SchemaMaster

# Xem Domain Naming Master
Get-ADForest | Select-Object DomainNamingMaster

# Xem RID Master
Get-ADDomain | Select-Object RIDMaster

# Xem PDC Emulator
Get-ADDomain | Select-Object PDCEmulator

# Xem Infrastructure Master
Get-ADDomain | Select-Object InfrastructureMaster

# Hoặc dùng netdom
netdom query fsmo
\`\`\`

## Replication

### Kiểm tra replication
\`\`\`powershell
# Xem replication status
repadmin /replsummary

# Xem chi tiết
repadmin /showrepl

# Force replication
repadmin /syncall /APeD

# Kích hoạt replication
repadmin /kcc
\`\`\`

## AD Sites and Services

### Tạo Site
\`\`\`
Sites:
- Default-First-Site-Name
- HCM-Site
- HN-Site

Subnets:
- 192.168.1.0/24 → HCM-Site
- 192.168.2.0/24 → HN-Site
\`\`\`

### Cấu hình Site Link
\`\`\`
Khi có multiple sites, cần cấu hình:
- Site Link (cho replication)
- Site Link Bridge (nếu cần)
- Inter-Site Transport
\`\`\`

## Trust Relationships

### Các loại trust
\`\`\`
- Parent-Child: Tự động
- Tree-Root: Tự động
- External: Manual
- Forest: Manual
- Realm: Manual

Direction:
- One-way: A → B
- Two-way: A ↔ B

Transitivity:
- Transitive: A → B → C
- Non-transitive
\`\`\`

### Tạo External Trust
\`\`\`powershell
New-ADTrust -Name "partner.local" \`
    -Direction "Bidirectional" \`
    -TrustType "External" \`
    -Target "partner.local" \`
    -Credential (Get-Credential)
\`\`\`

## DNS trong AD

### Các DNS Record quan trọng
\`\`\`
A record: Tên host → IP
CNAME: Alias
MX: Mail Exchange
NS: Name Server
SOA: Start of Authority
SRV: Service records (AD cần)

Ví dụ SRV records:
_ldap._tcp.company.local
_kerberos._tcp.company.local
_gc._tcp.company.local
\`\`\`

### Cấu hình DNS Forwarder
\`\`\`powershell
# Set forwarder
Set-DnsServerForwarder -IPAddress "8.8.8.8", "1.1.1.1"
\`\`\`

## AD Recycle Bin

### Enable
\`\`\`powershell
Enable-ADOptionalFeature -Identity 'Recycle Bin Feature' \`
    -Scope ForestOrConfigurationSet \`
    -Target "company.local"
\`\`\`

### Restore deleted object
\`\`\`powershell
# Find deleted objects
Get-ADObject -Filter {Deleted -eq $true} \`
    -IncludeDeletedObjects -Properties *

# Restore
Restore-ADObject -Identity "CN=John Doe,CN=Users,DC=company,DC=local"
\`\`\`

## Best Practices

### Security
\`\`\`
1. Tiered Administration Model
2. Protected Users group
3. LAPS (Local Admin Password Solution)
4. Fine-Grained Password Policies
5. Audit AD changes
6. Regular backup System State
7. Monitor privileged accounts
\`\`\`

### Design
\`\`\`
1. Ít domain nhất có thể
2. OU structure theo business
3. Group-based access (không gán trực tiếp user)
4. GPO theo chức năng
5. Sites cho chi nhánh
6. Đặt tên nhất quán
\`\`\`

## Bài tập thực hành
Hãy triển khai AD DS cho doanh nghiệp!`,
      exercises: [
        {
          id: "2-1",
          title: "Triển khai AD DS",
          description: "Setup Active Directory hoàn chỉnh",
          instructions: `Triển khai AD DS cho công ty ABC:
1. Tạo forest "abc.local"
2. Tạo OU: Users, Computers, Servers, Groups
3. Trong OU Users, tạo OU: IT, HR, Sales, Marketing
4. Tạo 10 users trong các phòng ban (import CSV)
5. Tạo groups: IT_Admins, HR_Users, Sales_Team
6. Thêm users vào groups tương ứng
7. Tạo GPO: Password policy, Desktop lock, Mapped drive
8. Backup GPO và System State`,
          type: "code",
          starterCode: `# Triển khai AD DS`,
          solution: `# 1. Cài AD DS
Install-WindowsFeature -Name AD-Domain-Services \`
    -IncludeManagementTools

# 2. Tạo Forest
$password = ConvertTo-SecureString "P@ssw0rd123" -AsPlainText -Force
Install-ADDSForest \`
    -DomainName "abc.local" \`
    -DomainNetbiosName "ABC" \`
    -ForestMode "WinThreshold" \`
    -DomainMode "WinThreshold" \`
    -InstallDns \`
    -SafeModeAdministratorPassword $password \`
    -Force

# 3. Tạo OU Structure
$domain = "DC=abc,DC=local"
$ous = @(
    "Users", "Computers", "Servers", "Groups"
)
foreach ($ou in $ous) {
    New-ADOrganizationalUnit -Name $ou -Path $domain
}

$departments = @("IT", "HR", "Sales", "Marketing")
foreach ($dept in $departments) {
    New-ADOrganizationalUnit -Name $dept \`
        -Path "OU=Users,$domain"
}

# 4. Tạo users từ CSV
@"
Name,Sam,Department,Title
Nguyen Van A,nvana,IT,Developer
Tran Thi B,ttb,IT,Admin
Le Van C,lvc,HR,Manager
Pham Thi D,ptd,HR,Recruiter
Hoang Van E,hve,Sales,Executive
Vu Thi F,vtf,Sales,Manager
Do Van G,dvg,Marketing,Content
Bui Thi H,bth,Marketing,Designer
Ngo Van I,nvi,IT,Network Admin
Duong Thi K,dtk,Sales,Lead
"@ | Out-File "users.csv" -Encoding UTF8

Import-Csv "users.csv" | ForEach-Object {
    $pass = ConvertTo-SecureString "Welcome@2024" -AsPlainText -Force
    New-ADUser \`
        -Name $_.Name \`
        -SamAccountName $_.Sam \`
        -UserPrincipalName "$($_.Sam)@abc.local" \`
        -Department $_.Department \`
        -Title $_.Title \`
        -Path "OU=$($_.Department),OU=Users,$domain" \`
        -AccountPassword $pass \`
        -Enabled $true \`
        -ChangePasswordAtLogon $true
}

# 5. Tạo Groups
New-ADGroup -Name "IT_Admins" -GroupScope Global \`
    -GroupCategory Security -Path "OU=Groups,$domain"
New-ADGroup -Name "HR_Users" -GroupScope Global \`
    -GroupCategory Security -Path "OU=Groups,$domain"
New-ADGroup -Name "Sales_Team" -GroupScope Global \`
    -GroupCategory Security -Path "OU=Groups,$domain"

# 6. Thêm users vào groups
$itUsers = Get-ADUser -Filter 'Department -eq "IT"' -SearchBase "OU=Users,$domain"
Add-ADGroupMember -Identity "IT_Admins" -Members $itUsers

$hrUsers = Get-ADUser -Filter 'Department -eq "HR"' -SearchBase "OU=Users,$domain"
Add-ADGroupMember -Identity "HR_Users" -Members $hrUsers

$salesUsers = Get-ADUser -Filter 'Department -eq "Sales"' -SearchBase "OU=Users,$domain"
Add-ADGroupMember -Identity "Sales_Team" -Members $salesUsers

# 7. Tạo GPO - Password Policy
New-GPO -Name "ABC-PasswordPolicy" -Comment "Corporate password policy"
# Cấu hình qua Group Policy Management Console:
# Computer → Security → Account Policies → Password Policy
# Minimum: 12, Complexity: Enabled, Max Age: 90, History: 24
New-GPLink -Name "ABC-PasswordPolicy" -Target $domain

# 8. GPO - Desktop Restriction
New-GPO -Name "ABC-DesktopRestriction"
New-GPLink -Name "ABC-DesktopRestriction" \`
    -Target "OU=Users,$domain"

# 9. GPO - Mapped Drive
New-GPO -Name "ABC-MappedDrive"
New-GPLink -Name "ABC-MappedDrive" \`
    -Target "OU=Users,$domain"

# 10. Backup
New-Item -ItemType Directory -Path "C:\\GPOBackup" -Force
Backup-GPO -All -Path "C:\\GPOBackup" \`
    -Comment "Initial backup $(Get-Date)"

# Backup System State
wbadmin start systemstatebackup -backupTarget:C: -quiet

# 11. Verify
Get-ADOrganizationalUnit -Filter * | Select Name, DistinguishedName
Get-ADUser -Filter * -SearchBase "OU=Users,$domain" | Measure-Object
Get-ADGroup -Filter * | Select Name
Get-GPO -All | Select DisplayName, Id`,
        },
      ],
    },
    {
      id: "3",
      title: "DNS, DHCP và File Server",
      slug: "dns-dhcp-file-server",
      duration: "85 phút",
      prerequisites: ["2"],
      content: `# DNS, DHCP và File Server

## DNS Server

### Cấu hình DNS Zone

**Forward Lookup Zone:**
\`\`\`powershell
# Tạo Primary Zone
Add-DnsServerPrimaryZone -Name "abc.local" \`
    -ReplicationScope "Domain"

# Tạo record A
Add-DnsServerResourceRecordA -Name "server01" \`
    -ZoneName "abc.local" \`
    -IPv4Address "192.168.1.10"

# Tạo CNAME
Add-DnsServerResourceRecordCName \`
    -Name "www" \`
    -HostNameAlias "server01.abc.local" \`
    -ZoneName "abc.local"

# Tạo MX record
Add-DnsServerResourceRecordMX -Preference 10 \`
    -Name "." \`
    -MailExchange "mail.abc.local" \`
    -ZoneName "abc.local"

# Tạo SRV record
Add-DnsServerResourceRecord -Srv \`
    -Name "_sip._tcp" \`
    -DomainName "sipserver.abc.local" \`
    -Priority 10 \`
    -Weight 100 \`
    -Port 5060 \`
    -ZoneName "abc.local"
\`\`\`

**Reverse Lookup Zone:**
\`\`\`powershell
# Tạo Reverse Zone cho 192.168.1.x
Add-DnsServerPrimaryZone -NetworkId "192.168.1.0/24" \`
    -ReplicationScope "Domain"

# Tạo PTR record
Add-DnsServerResourceRecordPtr \`
    -Name "10" \`
    -ZoneName "1.168.192.in-addr.arpa" \`
    -PtrDomainName "server01.abc.local"
\`\`\`

### Conditional Forwarders
\`\`\`powershell
# Forward queries cho domain cụ thể
Add-DnsServerConditionalForwarderZone \`
    -Name "partner.local" \`
    -MasterServers 10.0.0.1, 10.0.0.2

# Xem forwarders
Get-DnsServerForwarder
\`\`\`

### DNS Forwarders
\`\`\`powershell
# Set external forwarders
Set-DnsServerForwarder -IPAddress "8.8.8.8", "8.8.4.4", "1.1.1.1"

# Root hints
Get-DnsServerRootHint
\`\`\`

### DNS Scavenging
\`\`\`powershell
# Enable scavenging
Set-DnsServerScavenging -ScavengingState $true \`
    -RefreshInterval 7.00:00:00 \`
    -NoRefreshInterval 7.00:00:00 \`
    -ScavengingInterval 7.00:00:00

# Set aging cho zone
Set-DnsServerZoneAging -Name "abc.local" \`
    -Aging $true \`
    -RefreshInterval 7.00:00:00 \`
    -NoRefreshInterval 7.00:00:00
\`\`\`

### Test DNS
\`\`\`powershell
# Test resolution
Resolve-DnsName server01.abc.local
Resolve-DnsName google.com -Server 8.8.8.8

# DNS query
nslookup server01.abc.local
nslookup -type=MX abc.local

# Kiểm tra DNS server
Get-DnsServerZone
Get-DnsServerResourceRecord -ZoneName "abc.local"
Test-DnsServer -IPAddress 192.168.1.10 -ZoneName "abc.local"
\`\`\`

## DHCP Server

### Cài đặt và cấu hình
\`\`\`powershell
# Cài DHCP role
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Authorize DHCP trong AD
Add-DhcpServerInDC -DnsName "dhcp01.abc.local" \`
    -IPAddress 192.168.1.10

# Tạo Scope
Add-DhcpServerv4Scope \`
    -Name "LAN-Scope" \`
    -StartRange 192.168.1.100 \`
    -EndRange 192.168.1.200 \`
    -SubnetMask 255.255.255.0 \`
    -State Active

# Set Scope Options
Set-DhcpServerv4OptionValue \`
    -ScopeId 192.168.1.0 \`
    -Router 192.168.1.1 \`
    -DnsServer 192.168.1.10 \`
    -DnsDomain "abc.local"

# Set lease duration
Set-DhcpServerv4Scope -ScopeId 192.168.1.0 \`
    -LeaseDuration 8.00:00:00
\`\`\`

### Reservations
\`\`\`powershell
# Đặt trước IP cho MAC
Add-DhcpServerv4Reservation \`
    -ScopeId 192.168.1.0 \`
    -IPAddress 192.168.1.50 \`
    -ClientId "00-11-22-33-44-55" \`
    -Description "Printer HP"

# Xem reservations
Get-DhcpServerv4Reservation -ScopeId 192.168.1.0
\`\`\`

### Exclusions
\`\`\`powershell
# Loại trừ IP range
Add-DhcpServerv4ExclusionRange \`
    -ScopeId 192.168.1.0 \`
    -StartRange 192.168.1.100 \`
    -EndRange 192.168.1.120
\`\`\`

### DHCP Failover
\`\`\`powershell
# Cấu hình failover giữa 2 DHCP servers
Add-DhcpServerv4Failover \`
    -Name "DHCP-Failover" \`
    -PartnerServer "dhcp02.abc.local" \`
    -ScopeId 192.168.1.0 \`
    -SharedSecret "SecretKey123" \`
    -Mode LoadBalance \`
    -LoadBalancePercent 50
\`\`\`

### Monitor DHCP
\`\`\`powershell
# Xem scopes
Get-DhcpServerv4Scope

# Xem leases
Get-DhcpServerv4Lease -ScopeId 192.168.1.0

# Statistics
Get-DhcpServerv4Statistics

# Xem options
Get-DhcpServerv4OptionValue -ScopeId 192.168.1.0
\`\`\`

## File Server

### Chia sẻ thư mục
\`\`\`powershell
# Tạo folder
New-Item -ItemType Directory -Path "D:\\Shares\\IT" -Force
New-Item -ItemType Directory -Path "D:\\Shares\\HR" -Force
New-Item -ItemType Directory -Path "D:\\Shares\\Public" -Force

# Share folder
New-SmbShare -Name "IT" -Path "D:\\Shares\\IT" \`
    -FullAccess "COMPANY\\Domain Admins" \`
    -ChangeAccess "COMPANY\\IT_Admins" \`
    -ReadAccess "COMPANY\\Domain Users"

New-SmbShare -Name "HR" -Path "D:\\Shares\\HR" \`
    -FullAccess "COMPANY\\Domain Admins" \`
    -ChangeAccess "COMPANY\\HR_Users"

New-SmbShare -Name "Public" -Path "D:\\Shares\\Public" \`
    -ChangeAccess "COMPANY\\Domain Users"

# Xem shares
Get-SmbShare
Get-SmbShareAccess -Name "IT"
\`\`\`

### NTFS Permissions
\`\`\`powershell
# Disable inheritance
icacls "D:\\Shares\\IT" /inheritance:d

# Remove default permissions
icacls "D:\\Shares\\IT" /remove:g "BUILTIN\\Users"

# Grant permissions
icacls "D:\\Shares\\IT" /grant "COMPANY\\IT_Admins:(OI)(CI)M"
icacls "D:\\Shares\\IT" /grant "COMPANY\\Domain Admins:(OI)(CI)F"
icacls "D:\\Shares\\IT" /grant "COMPANY\\Domain Users:(OI)(CI)R"

# OI = Object Inherit (files)
# CI = Container Inherit (folders)
# F = Full, M = Modify, R = Read, W = Write
\`\`\`

### Quotas
\`\`\`powershell
# Cài FSRM
Install-WindowsFeature -Name FS-Resource-Manager \`
    -IncludeManagementTools

# Áp dụng quota template
New-FsrmQuotaTemplate -Name "500MB User" \`
    -Size 500MB \`
    -SoftLimit $false

New-FsrmQuota -Path "D:\\Shares\\Users" \`
    -Template "500MB User"

# Hard quota vs Soft quota
# Hard: Chặn khi vượt quota
# Soft: Cảnh báo nhưng không chặn
\`\`\`

### File Screening
\`\`\`powershell
# Chặn file .mp3, .mp4, .exe trong Public
New-FsrmFileGroup -Name "Media Files" \`
    -IncludePattern @("*.mp3", "*.mp4", "*.avi", "*.mkv")

New-FsrmFileScreenTemplate -Name "No Media" \`
    -IncludeGroup "Media Files" \`
    -Active $true

New-FsrmFileScreen -Path "D:\\Shares\\Public" \`
    -Template "No Media"
\`\`\`

### DFS (Distributed File System)

**DFS Namespace:**
\`\`\`powershell
# Cài DFS
Install-WindowsFeature -Name FS-DFS-Namespace, \`
    FS-DFS-Replication -IncludeManagementTools

# Tạo Namespace
New-DfsnRoot -Path "\\\\abc.local\\Shares" \`
    -TargetPath "\\\\FS01\\Shares" \`
    -Type DomainV2

# Tạo Folder với targets
New-DfsnFolder -Path "\\\\abc.local\\Shares\\IT" \`
    -TargetPath "\\\\FS01\\IT"

New-DfsnFolderTarget -Path "\\\\abc.local\\Shares\\IT" \`
    -TargetPath "\\\\FS02\\IT"
\`\`\`

**DFS Replication:**
\`\`\`powershell
# Tạo Replication Group
New-DfsReplicationGroup -GroupName "RG-IT"

Add-DfsrMember -GroupName "RG-IT" \`
    -ComputerName "FS01", "FS02"

Add-DfsrConnection -GroupName "RG-IT" \`
    -SourceComputerName "FS01" \`
    -DestinationComputerName "FS02"

Add-DfsrMemberToReplicatedFolder -GroupName "RG-IT" \`
    -FolderName "IT" \`
    -ComputerName "FS01", "FS02"
\`\`\`

## Print Server

### Cài đặt
\`\`\`powershell
Install-WindowsFeature -Name Print-Server \`
    -IncludeManagementTools

# Thêm printer driver
Add-PrinterDriver -Name "HP Universal Printing PS"

# Thêm printer
Add-Printer -Name "HP LaserJet 01" \`
    -DriverName "HP Universal Printing PS" \`
    -PortName "IP_192.168.1.50"

# Chia sẻ printer
Set-Printer -Name "HP LaserJet 01" -Shared $true \`
    -ShareName "HP-LJ-01"

# Set permissions
Grant-PrinterAccess -Name "HP LaserJet 01" \`
    -UserName "COMPANY\\Sales_Team" \`
    -PrinterPermission Print
\`\`\`

## Backup và Restore

### Windows Server Backup
\`\`\`powershell
# Cài feature
Install-WindowsFeature Windows-Server-Backup

# Backup schedule
$policy = New-WBPolicy
$target = New-WBDisk -DiskPath "\\\\.\\PhysicalDrive1"
Add-WBBackupTarget -Policy $policy -Target $target

$filespec = New-WBFileSpec -FileSpec "D:\\Shares"
Add-WBFileSpec -Policy $policy -FileSpec $filespec

$time = New-WBBackupSchedule -TimesOfDay 23:00 \`
    -DaysOfWeek Monday, Tuesday, Wednesday, Thursday, Friday
Set-WBSchedule -Policy $policy -Schedule $time

Set-WBPolicy -Policy $policy

# Backup ngay
Start-WBBackup -Policy $policy

# Xem versions
Get-WBBackupSet

# Restore
Start-WBRecovery -BackupSet $backup
\`\`\`

## Bài tập thực hành
Hãy triển khai DNS, DHCP và File Server!`,
      exercises: [
        {
          id: "3-1",
          title: "Triển khai Infrastructure Services",
          description: "Setup DNS, DHCP, File Server",
          instructions: `Triển khai cho công ty ABC (192.168.10.0/24):
1. DNS: Tạo A, CNAME, MX records
2. DHCP: Scope 192.168.10.100-200, options đầy đủ
3. Reserved IP cho printer (MAC: 00-11-22-33-44-55)
4. File Shares: IT, HR, Public với permissions
5. FSRM: Quota 500MB/user, block media files
6. DFS Namespace cho redundancy
7. Backup schedule tự động`,
          type: "code",
          starterCode: `# Triển khai Infrastructure Services`,
          solution: `# 1. DNS Configuration
Add-DnsServerPrimaryZone -Name "abc.local" -ReplicationScope "Domain"

# A records cho servers
@("dc01:192.168.10.10", "fs01:192.168.10.20", "print01:192.168.10.30") | ForEach-Object {
    $parts = $_ -split ":"
    Add-DnsServerResourceRecordA -Name $parts[0] \`
        -ZoneName "abc.local" -IPv4Address $parts[1]
}

# CNAME
Add-DnsServerResourceRecordCName \`
    -Name "fs" -HostNameAlias "fs01.abc.local" \`
    -ZoneName "abc.local"

# MX record
Add-DnsServerResourceRecordMX -Preference 10 \`
    -Name "." -MailExchange "mail.abc.local" \`
    -ZoneName "abc.local"

# Reverse zone
Add-DnsServerPrimaryZone -NetworkId "192.168.10.0/24" \`
    -ReplicationScope "Domain"

# PTR
Add-DnsServerResourceRecordPtr \`
    -Name "10" -ZoneName "10.168.192.in-addr.arpa" \`
    -PtrDomainName "dc01.abc.local"

# 2. DHCP Configuration
Install-WindowsFeature -Name DHCP -IncludeManagementTools
Add-DhcpServerInDC -DnsName "dhcp01.abc.local" \`
    -IPAddress 192.168.10.10

Add-DhcpServerv4Scope \`
    -Name "LAN-Scope" \`
    -StartRange 192.168.10.100 \`
    -EndRange 192.168.10.200 \`
    -SubnetMask 255.255.255.0 \`
    -State Active

Set-DhcpServerv4OptionValue \`
    -ScopeId 192.168.10.0 \`
    -Router 192.168.10.1 \`
    -DnsServer 192.168.10.10 \`
    -DnsDomain "abc.local"

Set-DhcpServerv4Scope -ScopeId 192.168.10.0 \`
    -LeaseDuration 8.00:00:00

# 3. Reservation
Add-DhcpServerv4Reservation \`
    -ScopeId 192.168.10.0 \`
    -IPAddress 192.168.10.50 \`
    -ClientId "00-11-22-33-44-55" \`
    -Description "Printer HP LaserJet"

# 4. File Shares
$shares = @(
    @{Name="IT"; Path="D:\\Shares\\IT"; Change="ABC\\IT_Admins"},
    @{Name="HR"; Path="D:\\Shares\\HR"; Change="ABC\\HR_Users"},
    @{Name="Public"; Path="D:\\Shares\\Public"; Change="ABC\\Domain Users"}
)

foreach ($s in $shares) {
    New-Item -ItemType Directory -Path $s.Path -Force
    New-SmbShare -Name $s.Name -Path $s.Path \`
        -FullAccess "ABC\\Domain Admins" \`
        -ChangeAccess $s.Change \`
        -ReadAccess "ABC\\Domain Users"
}

# NTFS Permissions
icacls "D:\\Shares\\IT" /inheritance:d
icacls "D:\\Shares\\IT" /grant "ABC\\IT_Admins:(OI)(CI)M"
icacls "D:\\Shares\\IT" /grant "ABC\\Domain Admins:(OI)(CI)F"

# 5. FSRM
Install-WindowsFeature -Name FS-Resource-Manager \`
    -IncludeManagementTools

New-FsrmQuotaTemplate -Name "500MB User" -Size 500MB
New-FsrmQuota -Path "D:\\Shares\\Users" \`
    -Template "500MB User"

New-FsrmFileGroup -Name "Media Files" \`
    -IncludePattern @("*.mp3","*.mp4","*.avi","*.mkv","*.exe")
New-FsrmFileScreenTemplate -Name "No Media" \`
    -IncludeGroup "Media Files" -Active $true
New-FsrmFileScreen -Path "D:\\Shares\\Public" \`
    -Template "No Media"

# 6. DFS
Install-WindowsFeature -Name FS-DFS-Namespace, \`
    FS-DFS-Replication -IncludeManagementTools

New-DfsnRoot -Path "\\\\abc.local\\Shares" \`
    -TargetPath "\\\\FS01\\Shares" -Type DomainV2

# 7. Backup Schedule
Install-WindowsFeature Windows-Server-Backup

$policy = New-WBPolicy
$target = New-WBFileSpec -FileSpec "E:\\"
Add-WBFileSpec -Policy $policy -FileSpec $target

$time = New-WBBackupSchedule \`
    -TimesOfDay 23:00 \`
    -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday
Set-WBSchedule -Policy $policy -Schedule $time
Set-WBPolicy -Policy $policy -Force

# 8. Verify
Get-DnsServerZone
Get-DhcpServerv4Scope
Get-SmbShare
Get-FsrmQuota
Get-DfsnRoot`,
        },
      ],
    },
    {
      id: "4",
      title: "Group Policy và Security",
      slug: "group-policy-security",
      duration: "80 phút",
      prerequisites: ["3"],
      content: `# Group Policy và Security

## Group Policy Objects (GPO) nâng cao

### Scope of Management
\`\`\`
Site → Domain → OU → Child OU
GPOs apply theo thứ tự LSDOU (Local, Site, Domain, OU)
\`\`\`

### GPO Processing Order
\`\`\`
1. Local GPO
2. Site GPOs
3. Domain GPOs
4. OU GPOs (từ trên xuống)

Conflict: GPO applied last wins
Link Order: Số nhỏ apply sau (win)
\`\`\`

### Security Filtering
\`\`\`
- Authenticated Users (default)
- Chỉ định user/group cụ thể
- Deny Apply Group Policy
\`\`\`

### WMI Filters
\`\`\`
Ví dụ: Apply chỉ cho Windows 10
SELECT * FROM Win32_OperatingSystem 
WHERE Caption LIKE "%Windows 10%"

Ví dụ: Apply cho laptop
SELECT * FROM Win32_ComputerSystem 
WHERE PCSystemType = 2
\`\`\`

## Security Policies

### Password Policy
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Account Policies → Password Policy

- Enforce password history: 24 passwords
- Maximum password age: 60 days
- Minimum password age: 1 day
- Minimum password length: 12
- Password must meet complexity: Enabled
- Store passwords using reversible encryption: Disabled
\`\`\`

### Account Lockout Policy
\`\`\`
- Account lockout duration: 30 minutes
- Account lockout threshold: 5 attempts
- Reset account lockout counter: 30 minutes
\`\`\`

### Fine-Grained Password Policy
\`\`\`powershell
# Tạo PSO cho Admins
New-ADFineGrainedPasswordPolicy \`
    -Name "AdminPasswordPolicy" \`
    -Precedence 10 \`
    -MinPasswordLength 16 \`
    -PasswordHistoryCount 24 \`
    -MaxPasswordAge "30.00:00:00" \`
    -MinPasswordAge "1.00:00:00" \`
    -ComplexityEnabled $true \`
    -LockoutThreshold 3 \`
    -LockoutDuration "60.00:00:00" \`
    -LockoutObservationWindow "60.00:00:00"

# Apply to group
Add-ADFineGrainedPasswordPolicySubject \`
    -Identity "AdminPasswordPolicy" \`
    -Subjects "IT_Admins"
\`\`\`

## Audit Policy

### Enable Auditing
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Local Policies → Audit Policy

Audit events:
- Account logon events: Success, Failure
- Account management: Success, Failure
- Logon events: Success, Failure
- Object access: Success, Failure
- Policy change: Success, Failure
- Privilege use: Success, Failure
- System events: Success, Failure
\`\`\`

### Advanced Audit Policy
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Advanced Audit Policy Configuration

Categories:
- Account Logon
- Account Management
- Detailed Tracking
- DS Access
- Logon/Logoff
- Object Access
- Policy Change
- Privilege Use
- System
\`\`\`

### Audit PowerShell
\`\`\`powershell
# Enable module logging
Computer Configuration → Policies → Administrative Templates 
→ Windows Components → Windows PowerShell

Settings:
- Turn on Module Logging: Enabled
- Turn on PowerShell Script Block Logging: Enabled
- Turn on PowerShell Transcription: Enabled
\`\`\`

## Advanced GPO Settings

### Software Restriction Policies
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Software Restriction Policies

Rules:
- Path rules: Allow/Disallow by path
- Hash rules: By file hash
- Certificate rules
- Network zone rules
\`\`\`

### AppLocker
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Application Control Policies → AppLocker

Rule types:
- Executable rules
- Windows Installer rules
- Script rules
- Packaged app rules
- DLL rules
\`\`\`

### Firewall with Advanced Security
\`\`\`
Computer Configuration → Policies → Windows Settings 
→ Security Settings → Windows Firewall with Advanced Security

Inbound Rules:
- Block all by default
- Allow specific ports/services

Outbound Rules:
- Allow all by default
- Block specific

Connection Security Rules:
- IPsec
- Authentication
\`\`\`

## Security Baselines

### Microsoft Security Compliance Toolkit
\`\`\`
Download từ: https://www.microsoft.com/en-us/download/details.aspx?id=55319

Bao gồm:
- Windows Server 2022 Security Baseline
- Windows 10/11 Security Baseline
- Microsoft 365 Apps Security Baseline
- Edge Security Baseline
\`\`\`

### Import Baseline GPO
\`\`\`powershell
# Import GPO từ Microsoft baseline
Import-GPO \`
    -BackupGpoName "MSFT Windows Server 2022 - Domain Security" \`
    -Path "C:\\Baselines\\Windows Server 2022" \`
    -TargetName "WS2022-Domain-Security"

# Link GPO
New-GPLink -Name "WS2022-Domain-Security" \`
    -Target "DC=abc,DC=local"
\`\`\`

## Security Tools

### LAPS (Local Administrator Password Solution)
\`\`\`powershell
# Cài LAPS
Import-Module LAPS

# Extend AD Schema
Update-LapsADSchema

# Grant permissions
Set-LapsADComputerSelfPermission -Identity "OU=Computers,DC=abc,DC=local"
Set-LapsADReadPasswordPermission -Identity "OU=Computers,DC=abc,DC=local" \`
    -AllowedPrincipals "ABC\\IT_Admins"

# Configure via GPO
# Computer → Policies → Administrative Templates → LAPS
# - Enable password backup
# - Password complexity
# - Password age
# - Password length
\`\`\`

### Windows Defender ATP
\`\`\`
Integration với Microsoft Defender for Endpoint
Central management qua Microsoft 365 Defender portal
\`\`\`

## Monitoring và Troubleshooting

### gpresult
\`\`\`powershell
# Xem GPO applied
gpresult /R

# Report chi tiết
gpresult /H gpo-report.html

# Scope computer
gpresult /S CO01 /SCOPE COMPUTER /R

# RSOP
rsop.msc
Get-GPResultantSetOfPolicy -Computer "PC01" \`
    -ReportType Html -Path "C:\\Reports\\rsop.html"
\`\`\`

### GPO Troubleshooting
\`\`\`powershell
# Force update
gpupdate /force

# Xem GPO settings
Get-GPO -Name "PasswordPolicy" | Get-GPOReport \`
    -ReportType Html -Path "report.html"

# Backup all GPOs
Backup-GPO -All -Path "C:\\GPOBackup"

# Restore GPO
Restore-GPO -Name "PasswordPolicy" -Path "C:\\GPOBackup"
\`\`\`

### Event Logs
\`\`\`
Applications and Services Logs → 
Microsoft → Windows → GroupPolicy → Operational

Log level:
- Information
- Warning
- Error

Tìm errors khi apply GPO
\`\`\`

## Best Practices

### GPO Design
\`\`\`
1. Ít GPO nhất có thể
2. Tên rõ ràng, có prefix
   Ví dụ: "Sec-Password-Policy"
3. Comment đầy đủ
4. Phân loại:
   - Security GPOs
   - Configuration GPOs
   - Software GPOs
5. Test trong lab trước
6. Backup định kỳ
7. Documentation đầy đủ
\`\`\`

### Security Best Practices
\`\`\`
1. Least Privilege Principle
2. Tiered Admin Model:
   - Tier 0: Domain Controllers
   - Tier 1: Servers
   - Tier 2: Workstations
3. Separate admin accounts
4. PAWs (Privileged Access Workstations)
5. Regular security audit
6. Patch management
7. Backup + DR plan
8. Monitor privileged accounts
9. Enable auditing
10. Regular penetration test
\`\`\`

### Tiered Administration Model
\`\`\`
Tier 0 (Domain Controllers):
- Domain Admins
- Enterprise Admins
- Schema Admins
- DCs, AD FS, AD CS

Tier 1 (Servers):
- Server Admins
- Application Admins
- Member servers, apps

Tier 2 (Workstations):
- Helpdesk
- Workstation Admins
- User workstations
\`\`\`

## Bài tập thực hành
Hãy triển khai Security Baseline cho doanh nghiệp!`,
      exercises: [
        {
          id: "4-1",
          title: "Security Hardening",
          description: "Triển khai security GPOs",
          instructions: `Triển khai security hardening cho ABC:
1. Password policy: 14 ký tự, complexity, 60 ngày
2. Account lockout: 5 lần, 30 phút
3. Fine-Grained Policy cho IT_Admins (16 ký tự)
4. Audit: Logon, Account Management, Object Access
5. AppLocker: Chỉ cho phép apps ở Program Files
6. Firewall GPO: Block inbound, allow 80/443/3389
7. LAPS cho local admin
8. Import Microsoft Security Baseline`,
          type: "code",
          starterCode: `# Security Hardening cho ABC`,
          solution: `# 1. Password Policy GPO
      New-GPO -Name "Sec-PasswordPolicy" \`
    -Comment "Corporate password policy"
      New-GPLink -Name "Sec-PasswordPolicy" \`
    -Target "DC=abc,DC=local"

# Configure:
# Computer Config → Windows Settings → Security Settings 
# → Account Policies → Password Policy
# - Enforce history: 24
# - Max age: 60
# - Min age: 1
# - Min length: 14
# - Complexity: Enabled
# - Reversible encryption: Disabled

# 2. Account Lockout
# Trong cùng GPO, Account Lockout Policy:
# - Duration: 30 minutes
# - Threshold: 5
# - Reset counter: 30 minutes

# 3. Fine-Grained Password Policy
New-ADFineGrainedPasswordPolicy \`
  -Name "IT_AdminPolicy" \`
  -Precedence 10 \`
  -MinPasswordLength 16 \`
  -PasswordHistoryCount 24 \`
  -MaxPasswordAge "30.00:00:00" \`
  -MinPasswordAge "1.00:00:00" \`
  -ComplexityEnabled $true \`
  -LockoutThreshold 3 \`
  -LockoutDuration "60.00:00:00" \`
    -LockoutObservationWindow "60.00:00:00"

Add-ADFineGrainedPasswordPolicySubject \`
  -Identity "IT_AdminPolicy" \`
    -Subjects "IT_Admins"

# 4. Audit Policy GPO
New-GPO -Name "Sec-AuditPolicy"
New-GPLink -Name "Sec-AuditPolicy" \`
    -Target "DC=abc,DC=local"

# Computer Config → Windows Settings → Security Settings 
# → Advanced Audit Policy Configuration
# - Account Logon: Success + Failure
# - Account Management: Success + Failure
# - Logon/Logoff: Success + Failure
# - Object Access: Success + Failure
# - Policy Change: Success + Failure
# - Privilege Use: Success + Failure

# Enable PowerShell logging
# Administrative Templates → Windows PowerShell
# - Module Logging: Enabled
# - Script Block Logging: Enabled

# 5. AppLocker GPO
New-GPO -Name "Sec-AppLocker"
New-GPLink -Name "Sec-AppLocker" \`
    -Target "OU=Computers,DC=abc,DC=local"

# Configure AppLocker:
# Computer Config → Security Settings → Application Control Policies
# Default rules:
# - Allow: %ProgramFiles%\\* (Everyone)
# - Allow: %SystemRoot%\\* (Everyone)
# - Allow: %Windir%\\* (Everyone)
# - Deny: Everything else (optional)

# 6. Firewall GPO
New-GPO -Name "Sec-Firewall"
New-GPLink -Name "Sec-Firewall" \`
    -Target "DC=abc,DC=local"

# Configure:
# Computer Config → Security Settings → Windows Firewall with Advanced Security
# Domain Profile:
#   Firewall state: On
#   Inbound: Block (default)
#   Outbound: Allow (default)
# 
# Inbound Rules:
# - Allow RDP (3389) from IT subnet
# - Allow HTTP (80) from LAN
# - Allow HTTPS (443) from LAN
# - Allow DNS (53) 
# 
# Outbound Rules:
# - Allow all (default)

# 7. LAPS
# Install LAPS on management machine
Import-Module LAPS

# Extend AD schema
Update-LapsADSchema

# Grant computer self-permission
Set-LapsADComputerSelfPermission \`
    -Identity "OU=Computers,DC=abc,DC=local"

# Grant read permission to IT_Admins
Set-LapsADReadPasswordPermission \`
    -Identity "OU=Computers,DC=abc,DC=local" \`
    -AllowedPrincipals "ABC\\IT_Admins"

# Create GPO
New-GPO -Name "Sec-LAPS"
New-GPLink -Name "Sec-LAPS" \`
    -Target "OU=Computers,DC=abc,DC=local"

# Configure LAPS:
# Computer Config → Administrative Templates → LAPS
# - Enable local admin password management
# - Password length: 20
# - Password age: 30 days
# - Password complexity: 4

# 8. Import Microsoft Baseline
# Download MSFT Windows Server 2022 Security Baseline
Import-GPO \`
    -BackupGpoName "MSFT Windows Server 2022-Domain Security" \`
    -Path "C:\\Baselines\\WindowsServer2022" \`
    -TargetName "WS2022-SecurityBaseline"

New-GPLink -Name "WS2022-SecurityBaseline" \`
    -Target "DC=abc,DC=local"

# 9. Verify
Get-GPO -All | Select DisplayName, GpoStatus
Get-ADFineGrainedPasswordPolicy -Filter *
Get-GPResultantSetOfPolicy -Computer "PC01" -User "jdoe" \`
    -ReportType Html -Path "C:\\Reports\\rsop.html"

# 10. Backup
Backup-GPO -All -Path "C:\\GPO-Backup-$(Get-Date -Format 'yyyyMMdd')" \`
    -Comment "Security baseline backup"`,
        },
      ],
    },
    {
      id: "5",
      title: "Hyper-V và Cloud Integration",
      slug: "hyperv-cloud",
      duration: "75 phút",
      prerequisites: ["4"],
      content: `# Hyper-V và Cloud Integration

## Hyper-V

### Cài đặt
\`\`\`powershell
# Cài Hyper-V role
Install-WindowsFeature -Name Hyper-V \`
    -IncludeManagementTools -Restart

# Verify
Get-WindowsFeature Hyper-V
Get-VMHost
\`\`\`

### Cấu hình Host
\`\`\`powershell
# Tạo virtual switches
New-VMSwitch -Name "External-Switch" \`
    -NetAdapterName "Ethernet" \`
    -AllowManagementOS $true

New-VMSwitch -Name "Internal-Switch" \`
    -SwitchType Internal

New-VMSwitch -Name "Private-Switch" \`
    -SwitchType Private

# Set default paths
Set-VMHost -VirtualMachinePath "D:\\Hyper-V\\VMs" \`
    -VirtualHardDiskPath "D:\\Hyper-V\\VHDs"

# Enable nested virtualization (nếu cần)
Set-VMProcessor -VMName "VM01" -ExposeVirtualizationExtensions $true
\`\`\`

### Tạo VM
\`\`\`powershell
# Tạo VM
New-VM -Name "APP01" \`
    -MemoryStartupBytes 4GB \`
    -Generation 2 \`
    -NewVHDPath "D:\\Hyper-V\\VHDs\\APP01.vhdx" \`
    -NewVHDSizeBytes 80GB \`
    -SwitchName "External-Switch"

# Cấu hình
Set-VMProcessor -VMName "APP01" \`
    -Count 2 \`
    -Reserve 10 \`
    -Maximum 80

Set-VMMemory -VMName "APP01" \`
    -DynamicMemoryEnabled $true \`
    -MinimumBytes 2GB \`
    -MaximumBytes 8GB \`
    -StartupBytes 4GB

# Thêm network adapter
Add-VMNetworkAdapter -VMName "APP01" \`
    -Name "LAN" -SwitchName "External-Switch"

# Mount ISO và start
Set-VMDvdDrive -VMName "APP01" \`
    -Path "C:\\ISOs\\WindowsServer2022.iso"

Start-VM -Name "APP01"
\`\`\`

### Snapshots / Checkpoints
\`\`\`powershell
# Tạo checkpoint
Checkpoint-VM -Name "APP01" -SnapshotName "BeforeUpdate"

# Liệt kê
Get-VMSnapshot -VMName "APP01"

# Restore
Restore-VMSnapshot -VMName "APP01" \`
    -Name "BeforeUpdate" -Confirm:$false

# Xóa
Remove-VMSnapshot -VMName "APP01" -Name "BeforeUpdate"
\`\`\`

### Export/Import VM
\`\`\`powershell
# Export
Export-VM -Name "APP01" -Path "D:\\Exports"

# Import
Import-VM -Path "D:\\Exports\\APP01" \`
    -Copy -GenerateNewId

# Move VM storage
Move-VMStorage -VMName "APP01" \`
    -DestinationStoragePath "D:\\NewStorage"
\`\`\`

### Live Migration
\`\`\`powershell
# Enable Live Migration
Enable-VMMigration
Set-VMHost -VirtualMachineMigrationAuthenticationType Kerberos

# Configure networks
Set-VMHost -VirtualMachineMigrationPerformanceOption SMB

# Live migrate
Move-VM -Name "APP01" \`
    -DestinationHost "HV02.abc.local" \`
    -IncludeStorage \`
    -DestinationStoragePath "D:\\Hyper-V\\VMs"
\`\`\`

### Hyper-V Replica
\`\`\`powershell
# Enable Replica on primary
Set-VMReplicationServer -ReplicationEnabled $true \`
    -AllowedAuthenticationType Kerberos \`
    -ReplicationKerberosAuthenticationPort 8080 \`
    -DefaultStorageLocation "D:\\Replica"

# Enable Replica on secondary
Set-VMReplicationServer -ReplicationEnabled $true \`
    -AllowedAuthenticationType Kerberos \`
    -ReplicationKerberosAuthenticationPort 8080 \`
    -DefaultStorageLocation "D:\\Replica"

# Configure VM replication
Set-VMReplication -VMName "APP01" \`
    -ReplicaServerName "HV02.abc.local" \`
    -ReplicaServerPort 8080 \`
    -AuthenticationType Kerberos \`
    -CompressionEnabled $true \`
    -ReplicationFrequencySec 300

Start-VMInitialReplication -VMName "APP01"

# Test failover
Start-VMFailover -VMName "APP01" -AsTest
Complete-VMFailover -VMName "APP01"
\`\`\`

## Storage trong Hyper-V

### Storage Spaces Direct (S2D)
\`\`\`powershell
# Chỉ trên Datacenter edition
Enable-ClusterS2D
Get-ClusterS2D
Get-StoragePool -IsPrimordial $false
Get-Volume

# Tạo volume
New-Volume -StoragePoolFriendlyName "S2D*" \`
    -FriendlyName "CSV01" \`
    -FileSystem CSVFS_ReFS \`
    -Size 1TB
\`\`\`

### Shared VHDX
\`\`\`powershell
# Tạo shared VHDX cho guest clustering
New-VHD -Path "D:\\Hyper-V\\VHDs\\Shared.vhdx" \`
    -SizeBytes 100GB -Dynamic

Add-VMHardDiskDrive -VMName "SQL01" \`
    -Path "D:\\Hyper-V\\VHDs\\Shared.vhdx" \`
    -ShareVirtualDisk

Set-VM -Name "SQL01" -AutomaticStopAction TurnOff
\`\`\`

## Cloud Integration

### Azure AD Connect
\`\`\`
Sync on-prem AD với Azure AD

Download: https://www.microsoft.com/en-us/download/details.aspx?id=47594

Features:
- Password Hash Sync
- Pass-through Authentication
- Federation with AD FS
- Seamless SSO
\`\`\`

\`\`\`powershell
# Cài Azure AD Connect
# Chạy installer với GUI

# Verify sync
Get-ADSyncScheduler
Start-ADSyncSyncCycle -PolicyType Delta
Start-ADSyncSyncCycle -PolicyType Initial
\`\`\`

### Hybrid Azure AD Join
\`\`\`
Requirements:
- Azure AD Connect installed
- AD FS or PHS configured
- Service Connection Point (SCP) in AD
- Devices joined to on-prem AD

Config:
- Azure AD Connect → Device Options
- Configure Hybrid Azure AD Join
\`\`\`

### Azure Backup
\`\`\`powershell
# Download MARS agent
# Register with Recovery Services Vault

# Backup:
- Files and folders
- System State
- Volume

# Restore:
- Individual files
- Full server
- Alternate location
\`\`\`

### Azure Site Recovery
\`\`\`powershell
# Replicate on-prem VMs to Azure

# Enable replication for Hyper-V VMs:
# 1. Create Recovery Services Vault
# 2. Configure Hyper-V site
# 3. Install Provider and Agent
# 4. Enable replication per VM

# Failover to Azure:
Start-AzRecoveryServicesAsrUnplannedFailoverJob \`
    -ReplicationProtectedItem $rpi \`
    -Direction PrimaryToRecovery

# Failback:
Start-AzRecoveryServicesAsrUnplannedFailoverJob \`
    -ReplicationProtectedItem $rpi \`
    -Direction RecoveryToPrimary
\`\`\`

## Windows Admin Center

### Tính năng cho Hyper-V
\`\`\`
- Quản lý VMs từ browser
- Tạo VM, snapshot
- Live migration
- Storage management
- Cluster management
- Azure integration
- Backup và restore
\`\`\`

### Azure Integration với WAC
\`\`\`
- Azure Backup
- Azure Site Recovery
- Azure Update Management
- Azure Monitor
- Azure Security Center
\`\`\`

## Monitoring

### Performance Counters cho Hyper-V
\`\`\`
Hyper-V Hypervisor Logical Processor(_Total)\\% Total Run Time
Hyper-V Hypervisor Virtual Processor
Hyper-V Dynamic Memory VM
Hyper-V Virtual Storage Device\\Read/Write Bytes/sec
Hyper-V Virtual Network Adapter\\Bytes/sec
\`\`\`

### Best Practices
\`\`\`
CPU:
- Reserve 10% cho host
- Không oversubscribe quá 8:1

Memory:
- Dynamic memory
- Không overcommit quá 1.5x

Storage:
- Fixed VHDX cho production
- Dynamic VHDX cho test
- ReFS cho S2D
- Tiered storage

Network:
- SR-IOV nếu hỗ trợ
- VMQ (Virtual Machine Queue)
- NIC Teaming
- 10GbE cho production
\`\`\`

## Backup và DR

### Hyper-V Backup
\`\`\`powershell
# Windows Server Backup cho Hyper-V
$policy = New-WBPolicy

# Add VMs
$vms = Get-VM | Where-Object State -eq "Running"
Add-WBVirtualMachine -Policy $policy -VirtualMachine $vms

# Add backup target
$target = New-WBFileSpec -FileSpec "E:\\"
Add-WBBackupTarget -Policy $policy -Target $target

# Schedule
$schedule = New-WBBackupSchedule \`
    -TimesOfDay 22:00 \`
    -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday
Set-WBSchedule -Policy $policy -Schedule $schedule

Set-WBPolicy -Policy $policy

# Run
Start-WBBackup -Policy $policy
\`\`\`

### 3-2-1 Backup Rule
\`\`\`
3 copies of data
2 different media
1 offsite copy
\`\`\`

## Bài tập thực hành
Hãy triển khai Hyper-V với HA!`,
      exercises: [
        {
          id: "5-1",
          title: "Hyper-V Infrastructure",
          description: "Triển khai Hyper-V cluster với HA",
          instructions: `Triển khai cho ABC:
1. Cài Hyper-V trên 2 nodes
2. Tạo virtual switches cho cluster
3. Tạo VMs: DC, App, SQL
4. Cấu hình replication cho App VM
5. Backup schedule cho tất cả VMs
6. Setup Azure Backup integration
7. Enable Live Migration test`,
          type: "code",
          starterCode: `# Hyper-V Infrastructure`,
          solution: `# ============== NODE 1 ==============
# Cài Hyper-V
Install-WindowsFeature -Name Hyper-V, \`
    Failover-Clustering -IncludeManagementTools -Restart

# Network
New-VMSwitch -Name "LM-Network" \`
    -NetAdapterName "Ethernet 1" -AllowManagementOS $true
New-VMSwitch -Name "VM-Network" \`
    -NetAdapterName "Ethernet 2" -AllowManagementOS $false

# Paths
New-Item -ItemType Directory -Path "C:\\ClusterStorage" -Force

# Enable migration
Enable-VMMigration
Set-VMHost -VirtualMachineMigrationAuthenticationType Kerberos \`
    -VirtualMachineMigrationPerformanceOption Compression

# ============== NODE 2 ==============
# (Same configuration)

# ============== CLUSTER ==============
# Validate cluster
Test-Cluster -Node "HV01","HV02" \`
    -ReportName "C:\\Reports\\clustervalidation.htm"

# Create cluster
New-Cluster -Name "HV-CLUSTER" \`
    -Node "HV01","HV02" \`
    -StaticAddress 192.168.10.100 \`
    -NoStorage

# Configure cluster
Get-Cluster | Set-Cluster -QuorumType NodeMajority
(Get-Cluster).SameSubnetThreshold = 10
(Get-Cluster).CrossSubnetThreshold = 20

# ============== VMs ==============
$vms = @(
    @{Name="DC01"; Memory=4GB; CPU=2; Disk=100GB; Role="Domain Controller"},
    @{Name="APP01"; Memory=8GB; CPU=4; Disk=200GB; Role="Application Server"},
    @{Name="SQL01"; Memory=16GB; CPU=8; Disk=500GB; Role="SQL Server"}
)

foreach ($vm in $vms) {
    New-VM -Name $vm.Name \`
        -MemoryStartupBytes $vm.Memory \`
        -Generation 2 \`
        -NewVHDPath "C:\\ClusterStorage\\$($vm.Name).vhdx" \`
        -NewVHDSizeBytes $vm.Disk \`
        -SwitchName "VM-Network" \`
        -Path "C:\\ClusterStorage"
    
    Set-VMProcessor -VMName $vm.Name -Count $vm.CPU
    
    Set-VMMemory -VMName $vm.Name \`
        -DynamicMemoryEnabled $true \`
        -MinimumBytes 1GB \`
        -MaximumBytes ([long]$vm.Memory * 2) \`
        -StartupBytes $vm.Memory
    
    # Add to cluster for HA
    Add-ClusterVirtualMachineRole -VMName $vm.Name
    
    Start-VM -Name $vm.Name
}

# ============== REPLICATION ==============
# Enable on both hosts
Enable-VMReplication -ComputerName "HV01" \`
    -ReplicationEnabled $true \`
    -AllowedAuthenticationType Kerberos \`
    -DefaultStorageLocation "C:\\Replica" \`
    -ReplicationKerberosAuthenticationPort 8080

Enable-VMReplication -ComputerName "HV02" \`
    -ReplicationEnabled $true \`
    -AllowedAuthenticationType Kerberos \`
    -DefaultStorageLocation "C:\\Replica" \`
    -ReplicationKerberosAuthenticationPort 8080

# Configure replication
Set-VMReplication -VMName "APP01" \`
    -ReplicaServerName "HV02.abc.local" \`
    -ReplicaServerPort 8080 \`
    -AuthenticationType Kerberos \`
    -CompressionEnabled $true \`
    -ReplicationFrequencySec 300 \`
    -AutoResynchronizeEnabled $true \`
    -AutoResynchronizeIntervalStart 19:00:00 \`
    -AutoResynchronizeIntervalEnd 06:00:00

Start-VMInitialReplication -VMName "APP01"

# ============== BACKUP ==============
# Enable Windows Server Backup
Install-WindowsFeature Windows-Server-Backup

# Configure backup schedule
$policy = New-WBPolicy

# Add all VMs
$allVMs = Get-VM | Where-Object State -eq "Running"
Add-WBVirtualMachine -Policy $policy -VirtualMachine $allVMs

# Backup destination
$target = New-WBBackupTarget -NetworkPath "\\\\NAS01\\Backups"
Add-WBBackupTarget -Policy $policy -Target $target

# Schedule 10 PM daily
$schedule = New-WBBackupSchedule \`
    -TimesOfDay 22:00 \`
    -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
Set-WBSchedule -Policy $policy -Schedule $schedule

Set-WBPolicy -Policy $policy

# ============== AZURE BACKUP ==============
# Register MARS agent
# Download and install agent
# Register with Recovery Services Vault
# Configure backup policy:
#   - Daily 2 AM
#   - Retain 30 days
#   - Weekly retain 12 weeks
#   - Monthly retain 12 months

# ============== LIVE MIGRATION TEST ==============
# Migrate APP01 to HV02
Move-VM -Name "APP01" \`
    -DestinationHost "HV02.abc.local" \`
    -IncludeStorage \`
    -DestinationStoragePath "C:\\ClusterStorage"

# Migrate back
Move-VM -Name "APP01" \`
    -DestinationHost "HV01.abc.local" \`
    -IncludeStorage \`
    -DestinationStoragePath "C:\\ClusterStorage"

# ============== MONITORING ==============
# Check cluster status
Get-ClusterNode
Get-ClusterGroup
Get-ClusterResource

# Check VMs
Get-VM | Select Name, State, Status

# Check replication
Get-VMReplication

# Check backup
Get-WBSummary
Get-WBBackupSet`,
        },
      ],
    },
  ],
};
