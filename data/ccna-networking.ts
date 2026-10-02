import { Course } from "@/types";

export const ccnaNetworking: Course = {
  id: "ccna-networking",
  slug: "ccna",
  title: "CCNA - Cisco Networking",
  description:
    "Kiến thức mạng Cisco từ cơ bản đến nâng cao, chuẩn bị thi CCNA 200-301",
  image: "/images/ccna-course.jpg",
  duration: "12 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Network Fundamentals",
      slug: "network-fundamentals",
      duration: "60 phút",
      content: `# Network Fundamentals

## OSI Model

### 7 Layers
\`\`\`
7. Application    - HTTP, FTP, SMTP, DNS
6. Presentation   - Encryption, compression, format
5. Session        - Session management
4. Transport      - TCP, UDP (end-to-end)
3. Network        - IP, ICMP, routing (logical addressing)
2. Data Link      - Ethernet, MAC, switching (physical addressing)
1. Physical       - Cables, signals, bits
\`\`\`

### Mnemonic
\`\`\`
Layer 7 → 1:
"All People Seem To Need Data Processing"

Layer 1 → 7:
"Please Do Not Throw Sausage Pizza Away"
\`\`\`

## TCP/IP Model

### 4 Layers
\`\`\`
Application    = OSI 5-7
Transport      = OSI 4
Internet       = OSI 3
Network Access = OSI 1-2
\`\`\`

### Encapsulation
\`\`\`
Data → Segment (TCP) → Packet (IP) → Frame (Ethernet) → Bits
\`\`\`

## TCP vs UDP

### TCP (Transmission Control Protocol)
\`\`\`
Connection-oriented
Reliable - có ACK
Ordered - đảm bảo thứ tự
Flow control - sliding window
Congestion control
3-way handshake: SYN → SYN/ACK → ACK

Applications: HTTP, HTTPS, FTP, SSH, SMTP, Telnet
\`\`\`

### UDP (User Datagram Protocol)
\`\`\`
Connectionless
Unreliable - không ACK
Unordered
Fast - ít overhead
Best-effort delivery

Applications: DNS, DHCP, TFTP, SNMP, VoIP, video streaming
\`\`\`

### TCP Header
\`\`\`
Source Port (16)    Destination Port (16)
Sequence Number (32)
Acknowledgment Number (32)
Flags (9)           Window Size (16)
Checksum (16)       Urgent Pointer (16)
Options             Data
\`\`\`

### TCP Flags
\`\`\`
URG - Urgent
ACK - Acknowledgment
PSH - Push
RST - Reset
SYN - Synchronize
FIN - Finish

Ví dụ 3-way handshake:
Client → Server: SYN (seq=x)
Server → Client: SYN-ACK (seq=y, ack=x+1)
Client → Server: ACK (ack=y+1)
\`\`\`

## IP Addressing

### IPv4
\`\`\`
32 bits = 4 octets
Format: A.B.C.D
Example: 192.168.1.1

Classes:
Class A: 1-126     /8  (0.0.0.0 - 127.255.255.255)
Class B: 128-191   /16 (128.0.0.0 - 191.255.255.255)
Class C: 192-223   /24 (192.0.0.0 - 223.255.255.255)
Class D: 224-239   Multicast
Class E: 240-255   Experimental

Private IP (RFC 1918):
10.0.0.0/8         (10.0.0.0 - 10.255.255.255)
172.16.0.0/12      (172.16.0.0 - 172.31.255.255)
192.168.0.0/16     (192.168.0.0 - 192.168.255.255)

Special:
127.0.0.0/8        Loopback
169.254.0.0/16     APIPA (link-local)
0.0.0.0/0          Default route
\`\`\`

### Subnetting
\`\`\`
Subnet Mask:
/24 = 255.255.255.0   256 addresses
/25 = 255.255.255.128 128 addresses
/26 = 255.255.255.192 64 addresses
/27 = 255.255.255.224 32 addresses
/28 = 255.255.255.240 16 addresses
/29 = 255.255.255.248 8 addresses
/30 = 255.255.255.252 4 addresses (point-to-point)
/31 = 255.255.255.254 2 addresses (RFC 3021)
/32 = 255.255.255.255 1 address (host route)

Công thức:
Số host = 2^(32 - prefix) - 2
Số subnet = 2^(prefix - original_prefix)
\`\`\`

### Ví dụ subnetting
\`\`\`
Cho: 192.168.10.0/24
Chia thành 4 subnet bằng nhau:

Cần 2 bits → /26
Subnet mask: 255.255.255.192

Subnet 1: 192.168.10.0/26    (hosts .1-.62)
Subnet 2: 192.168.10.64/26   (hosts .65-.126)
Subnet 3: 192.168.10.128/26  (hosts .129-.190)
Subnet 4: 192.168.10.192/26  (hosts .193-.254)

Broadcast:
Subnet 1: 192.168.10.63
Subnet 2: 192.168.10.127
Subnet 3: 192.168.10.191
Subnet 4: 192.168.10.255
\`\`\`

### VLSM
\`\`\`
Variable Length Subnet Mask
Sử dụng các subnet mask khác nhau cho các subnet khác nhau

Ví dụ: 10.0.0.0/24 cho 4 phòng:
Phòng A: 100 hosts → /25 (126 hosts)
Phòng B: 50 hosts  → /26 (62 hosts)
Phòng C: 20 hosts  → /27 (30 hosts)
Phòng D: 10 hosts  → /28 (14 hosts)
\`\`\`

### IPv6
\`\`\`
128 bits = 8 groups × 16 bits (hex)
Format: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx

Ví dụ:
2001:0db8:85a3:0000:0000:8a2e:0370:7334

Viết tắt:
2001:db8:85a3::8a2e:370:7334
(Bỏ số 0 đầu, dùng :: cho nhóm 0 liên tiếp)

Prefix: /64 thông thường cho LAN
\`\`\`

### IPv6 Address Types
\`\`\`
Global Unicast: 2000::/3 (public)
Link-Local:    fe80::/10 (auto-config)
Unique Local:  fc00::/7 (private, như RFC1918)
Multicast:     ff00::/8
Loopback:      ::1/128
Unspecified:   ::/128
\`\`\`

### EUI-64
\`\`\`
Tạo IPv6 từ MAC address:
1. Tách MAC: 00:1A:2B:3C:4D:5E
2. Chèn FFFE: 00:1A:2B:FF:FE:3C:4D:5E
3. Đảo bit 7: 02:1A:2B:FF:FE:3C:4D:5E
4. Thêm prefix: 2001:db8::21a:2bff:fe3c:4d5e
\`\`\`

### SLAAC (Stateless Address Autoconfiguration)
\`\`\`
1. Host gửi Router Solicitation (RS)
2. Router trả Router Advertisement (RA)
3. Host tự cấu hình địa chỉ từ prefix trong RA
4. Host verify uniqueness (DAD)
\`\`\`

## Ethernet

### Frame Format (Ethernet II)
\`\`\`
Preamble (7)   - 10101010...
SFD (1)        - 10101011
Destination MAC (6)
Source MAC (6)
Type/Length (2)
Data (46-1500)
FCS (4)        - CRC
\`\`\`

### MAC Address
\`\`\`
48 bits = 6 bytes (hex)
Format: 00:1A:2B:3C:4D:5E

OUI (24 bits)   - Organizationally Unique Identifier
NIC (24 bits)   - Network Interface Controller

Ví dụ:
00:1A:2B = OUI (nhà sản xuất)
3C:4D:5E = NIC (serial number)

Special MAC:
FF:FF:FF:FF:FF:FF = Broadcast
01:00:5E:xx:xx:xx = Multicast IPv4
33:33:xx:xx:xx:xx = Multicast IPv6
\`\`\`

### Ethernet Types
\`\`\`
10Base-T    10 Mbps     Category 3
100Base-TX  100 Mbps    Category 5
1000Base-T  1 Gbps      Category 5e/6
10GBase-T   10 Gbps     Category 6a/7
\`\`\`

## Cabling

### Twisted Pair
\`\`\`
UTP - Unshielded Twisted Pair
STP - Shielded Twisted Pair

Category:
Cat 3:  10 Mbps
Cat 5:  100 Mbps
Cat 5e: 1 Gbps
Cat 6:  10 Gbps (55m)
Cat 6a: 10 Gbps (100m)
Cat 7:  10 Gbps shielded
\`\`\`

### Cable Types
\`\`\`
Straight-through:
- Host to Switch
- Host to Router
- Router to Switch
- Both ends same standard (T568A or T568B)

Crossover:
- Switch to Switch
- Host to Host
- Router to Router
- Different standards on each end

Rollover:
- Console connection
- Cisco proprietary

T568A vs T568B:
Colors khác nhau ở cặp 2 & 3
\`\`\`

### Fiber Optic
\`\`\`
Single-mode:
- Core 9 micron
- Long distance (km)
- Laser
- Yellow jacket

Multi-mode:
- Core 50/62.5 micron
- Short distance (m)
- LED/VCSEL
- Orange/Aqua jacket

Connectors:
- ST, SC, LC, MTRJ
\`\`\`

## ARP

### ARP Process
\`\`\`
1. Host cần MAC của 192.168.1.1
2. Check ARP cache
3. Nếu không có → gửi ARP Request (broadcast)
4. Target reply ARP Reply (unicast)
5. Cache MAC address

Commands:
arp -a           # Windows
show arp         # Cisco
show ip arp      # Cisco
arp -d *         # Clear (Windows)
\`\`\`

### ARP Table
\`\`\`
Windows:
C:\\> arp -a

Interface: 192.168.1.100
  Internet Address      Physical Address      Type
  192.168.1.1          00-11-22-33-44-55     dynamic
  192.168.1.10         66-77-88-99-aa-bb     dynamic
\`\`\`

## ICMP

### Message Types
\`\`\`
Type 0  - Echo Reply (ping response)
Type 3  - Destination Unreachable
Type 5  - Redirect
Type 8  - Echo Request (ping)
Type 11 - Time Exceeded (traceroute)
\`\`\`

### Tools
\`\`\`
ping - ICMP Echo Request/Reply
traceroute/tracert - Trace route
pathping - Windows
mtr - Linux
\`\`\`

## Network Topologies

### Physical
\`\`\`
Bus    - All on one cable
Star   - All to central switch
Ring   - Circular
Mesh   - Full/Partial
Hybrid - Combination
\`\`\`

### Logical
\`\`\`
Broadcast domain - Tất cả devices nhận broadcast
Collision domain - Trong hub/repeater (legacy)
\`\`\`

## Network Devices

### Hub
\`\`\`
Layer 1
1 collision domain
1 broadcast domain
Shared bandwidth
Legacy, obsolete
\`\`\`

### Switch
\`\`\`
Layer 2
1 collision domain per port
1 broadcast domain (default)
Full-duplex
MAC address table
\`\`\`

### Router
\`\`\`
Layer 3
Separate collision domains
Separate broadcast domains
Routing between networks
\`\`\`

### Firewall
\`\`\`
Layer 3-7
Filter traffic
Stateful inspection
NAT
VPN
\`\`\`

## Bài tập thực hành
Hãy subnetting và troubleshoot mạng!`,
      exercises: [
        {
          id: "1-1",
          title: "Subnetting Practice",
          description: "Thực hành subnetting",
          instructions: `Cho 192.168.100.0/24, chia thành:
1. Subnet A: 100 hosts
2. Subnet B: 50 hosts
3. Subnet C: 25 hosts
4. Subnet D: 10 hosts
5. Subnet E: 2 hosts (WAN link)

Yêu cầu:
- Xác định subnet mask cho mỗi subnet
- Liệt kê network address, first host, last host, broadcast
- Kiểm tra không overlap`,
          type: "code",
          starterCode: `// Subnetting calculation`,
          solution: `# Subnetting Solution

## Yêu cầu host:
A: 100 hosts → cần 7 bits (2^7 - 2 = 126) → /25
B: 50 hosts  → cần 6 bits (2^6 - 2 = 62)  → /26
C: 25 hosts  → cần 5 bits (2^5 - 2 = 30)  → /27
D: 10 hosts  → cần 4 bits (2^4 - 2 = 14)  → /28
E: 2 hosts   → cần 2 bits (2^2 - 2 = 2)   → /30

## Phân bổ (từ lớn đến nhỏ):

### Subnet A - 192.168.100.0/25
Network:    192.168.100.0
First host: 192.168.100.1
Last host:  192.168.100.126
Broadcast:  192.168.100.127
Mask:       255.255.255.128

### Subnet B - 192.168.100.128/26
Network:    192.168.100.128
First host: 192.168.100.129
Last host:  192.168.100.190
Broadcast:  192.168.100.191
Mask:       255.255.255.192

### Subnet C - 192.168.100.192/27
Network:    192.168.100.192
First host: 192.168.100.193
Last host:  192.168.100.222
Broadcast:  192.168.100.223
Mask:       255.255.255.224

### Subnet D - 192.168.100.224/28
Network:    192.168.100.224
First host: 192.168.100.225
Last host:  192.168.100.238
Broadcast:  192.168.100.239
Mask:       255.255.255.240

### Subnet E - 192.168.100.240/30
Network:    192.168.100.240
First host: 192.168.100.241
Last host:  192.168.100.242
Broadcast:  192.168.100.243
Mask:       255.255.255.252

## Summary Table
| Subnet | Network | Mask | Range | Broadcast |
|--------|---------|------|-------|-----------|
| A | .0 | /25 | .1-.126 | .127 |
| B | .128 | /26 | .129-.190 | .191 |
| C | .192 | /27 | .193-.222 | .223 |
| D | .224 | /28 | .225-.238 | .239 |
| E | .240 | /30 | .241-.242 | .243 |

## Còn trống: 192.168.100.244 - 192.168.100.255 (12 addresses)

## Verify không overlap:
✅ A: .0 - .127
✅ B: .128 - .191
✅ C: .192 - .223
✅ D: .224 - .239
✅ E: .240 - .243
Không có overlap!`,
        },
      ],
    },
    {
      id: "2",
      title: "Switching và VLAN",
      slug: "switching-vlan",
      duration: "75 phút",
      prerequisites: ["1"],
      content: `# Switching và VLAN

## Cisco IOS

### Command Modes
\`\`\`
User EXEC mode (>)       - Read-only
Privileged EXEC mode (#) - All commands
Global config (config)# - Global config
Interface config (config-if)#
Line config (config-line)#
Router config (config-router)#
\`\`\`

### Basic Commands
\`\`\`
Router> enable                    # Enter privileged
Router# configure terminal        # Enter global config
Router(config)# hostname SW01     # Set hostname
SW01(config)# exit                # Back
SW01# disable                     # Back to user mode

# Save config
SW01# write memory
SW01# copy running-config startup-config

# Show config
SW01# show running-config
SW01# show startup-config
SW01# show version
SW01# show ip interface brief
SW01# show interfaces
SW01# show mac address-table
SW01# show vlan
\`\`\`

### Help Features
\`\`\`
?                - Context help
TAB              - Autocomplete
show ?           - List show commands
sh ip int br     - Abbreviation
Ctrl+A           - Beginning of line
Ctrl+E           - End of line
Ctrl+Z           - Exit to privileged
Ctrl+C           - Cancel command
\`\`\`

## Switch Configuration

### Initial Setup
\`\`\`cisco
Switch> enable
Switch# configure terminal
Switch(config)# hostname SW01
SW01(config)# enable secret Cisco123
SW01(config)# line console 0
SW01(config-line)# password Console123
SW01(config-line)# login
SW01(config-line)# exit
SW01(config)# line vty 0 4
SW01(config-line)# password Vty123
SW01(config-line)# login
SW01(config-line)# transport input ssh
SW01(config-line)# exit
SW01(config)# service password-encryption
SW01(config)# banner motd # Authorized access only #
SW01(config)# end
SW01# write memory
\`\`\`

### Interface Configuration
\`\`\`cisco
SW01(config)# interface FastEthernet0/1
SW01(config-if)# description "Uplink to Core"
SW01(config-if)# speed 100
SW01(config-if)# duplex full
SW01(config-if)# no shutdown
SW01(config-if)# exit

# Range
SW01(config)# interface range fa0/1-10
SW01(config-if-range)# switchport mode access
SW01(config-if-range)# switchport access vlan 10
SW01(config-if-range)# spanning-tree portfast
SW01(config-if-range)# exit
\`\`\`

### Management IP
\`\`\`cisco
SW01(config)# interface vlan 1
SW01(config-if)# ip address 192.168.1.10 255.255.255.0
SW01(config-if)# no shutdown
SW01(config-if)# exit

SW01(config)# ip default-gateway 192.168.1.1
\`\`\`

## MAC Address Table

### View MAC table
\`\`\`cisco
SW01# show mac address-table
SW01# show mac address-table dynamic
SW01# show mac address-table interface fa0/1
SW01# show mac address-table vlan 10
SW01# show mac address-table address 0001.2222.3333
\`\`\`

### Static MAC
\`\`\`cisco
SW01(config)# mac address-table static 0001.2222.3333 vlan 10 interface fa0/5
\`\`\`

### Port Security
\`\`\`cisco
SW01(config)# interface fa0/1
SW01(config-if)# switchport mode access
SW01(config-if)# switchport port-security
SW01(config-if)# switchport port-security maximum 2
SW01(config-if)# switchport port-security mac-address sticky
SW01(config-if)# switchport port-security violation shutdown
SW01(config-if)# end

# Verify
SW01# show port-security
SW01# show port-security interface fa0/1
SW01# show port-security address

# Violation types:
# Protect  - Drop, no notification
# Restrict - Drop, increment counter, SNMP trap
# Shutdown - Err-disable port (default)
\`\`\`

## VLAN

### VLAN Ranges
\`\`\`
0        - Reserved
1        - Default VLAN (không xóa được)
2-1001   - Normal VLAN range
1002-1005 - Reserved (Token Ring, FDDI)
1006-4094 - Extended range
\`\`\`

### Create VLAN
\`\`\`cisco
SW01(config)# vlan 10
SW01(config-vlan)# name Sales
SW01(config-vlan)# exit

SW01(config)# vlan 20
SW01(config-vlan)# name HR
SW01(config-vlan)# exit

# Verify
SW01# show vlan brief
SW01# show vlan id 10
\`\`\`

### Assign Ports to VLAN
\`\`\`cisco
# Access port
SW01(config)# interface fa0/1
SW01(config-if)# switchport mode access
SW01(config-if)# switchport access vlan 10
SW01(config-if)# exit

# Voice VLAN
SW01(config)# interface fa0/5
SW01(config-if)# switchport mode access
SW01(config-if)# switchport access vlan 10
SW01(config-if)# switchport voice vlan 100
SW01(config-if)# mls qos trust cos
\`\`\`

### Trunk Ports
\`\`\`cisco
# Manual trunking (không khuyến nghị)
SW01(config)# interface gi0/1
SW01(config-if)# switchport trunk encapsulation dot1q
SW01(config-if)# switchport mode trunk
SW01(config-if)# switchport trunk native vlan 99
SW01(config-if)# switchport trunk allowed vlan 10,20,30
SW01(config-if)# exit

# DTP (Dynamic Trunking Protocol)
# switchport mode:
# - access
# - trunk
# - dynamic auto (chờ bên kia)
# - dynamic desirable (chủ động)

# Best practice: hardcode
SW01(config-if)# switchport nonegotiate
\`\`\`

### Verify Trunk
\`\`\`cisco
SW01# show interfaces trunk
SW01# show interfaces gi0/1 switchport
SW01# show vlan brief
\`\`\`

### Native VLAN
\`\`\`
VLAN mà traffic untagged đi qua trunk
Mặc định: VLAN 1
Best practice: đổi thành VLAN khác (VD: 999)
Phải giống nhau 2 đầu trunk!

Cấu hình:
SW01(config)# vlan 999
SW01(config-vlan)# name Native
SW01(config-vlan)# exit
SW01(config)# interface gi0/1
SW01(config-if)# switchport trunk native vlan 999
\`\`\`

## Inter-VLAN Routing

### Router-on-a-Stick
\`\`\`cisco
# Router
Router(config)# interface gi0/0
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# interface gi0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit

Router(config)# interface gi0/0.20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit

# Switch port to router
SW01(config)# interface gi0/1
SW01(config-if)# switchport mode trunk
SW01(config-if)# switchport trunk native vlan 999
\`\`\`

### Layer 3 Switch (SVI)
\`\`\`cisco
SW01(config)# ip routing

SW01(config)# vlan 10
SW01(config-vlan)# exit
SW01(config)# interface vlan 10
SW01(config-if)# ip address 192.168.10.1 255.255.255.0
SW01(config-if)# no shutdown
SW01(config-if)# exit

SW01(config)# vlan 20
SW01(config-vlan)# exit
SW01(config)# interface vlan 20
SW01(config-if)# ip address 192.168.20.1 255.255.255.0
SW01(config-if)# no shutdown
SW01(config-if)# exit

# Routed port (không phải SVI)
SW01(config)# interface gi0/1
SW01(config-if)# no switchport
SW01(config-if)# ip address 10.0.0.1 255.255.255.252
\`\`\`

## VTP (VLAN Trunking Protocol)

### VTP Modes
\`\`\`
Server  - Create, modify, delete VLANs, advertise
Client  - Receive updates, không tạo được VLAN
Transparent - Local only, forward VTP
Off     - Disabled (VTPv3)
\`\`\`

### VTP Configuration
\`\`\`cisco
SW01(config)# vtp mode server
SW01(config)# vtp domain COMPANY
SW01(config)# vtp password Cisco123
SW01(config)# vtp version 2

# Client
SW02(config)# vtp mode client
SW02(config)# vtp domain COMPANY
SW02(config)# vtp password Cisco123

# Verify
SW01# show vtp status
SW01# show vtp password
\`\`\`

### VTP Pruning
\`\`\`cisco
SW01(config)# vtp pruning
# Giảm broadcast traffic trên trunk links
\`\`\`

## STP (Spanning Tree Protocol)

### STP Port States
\`\`\`
Blocking     - 20s (max age)
Listening    - 15s (forward delay)
Learning     - 15s (forward delay)
Forwarding   - Operational
Disabled     - Shutdown

Total convergence: 30-50s
\`\`\`

### STP Timers
\`\`\`
Hello: 2 seconds
Max Age: 20 seconds
Forward Delay: 15 seconds
\`\`\`

### STP Port Roles
\`\`\`
Root Port - 1 per non-root switch (best path to root)
Designated Port - 1 per segment (forwarding)
Non-Designated Port - Blocking
\`\`\`

### Root Bridge Election
\`\`\`
Lowest Bridge ID wins
Bridge ID = Priority (4 bits) + MAC (48 bits)
Default priority: 32768

Cấu hình:
SW01(config)# spanning-tree vlan 10 root primary
SW01(config)# spanning-tree vlan 20 root secondary
SW01(config)# spanning-tree vlan 10 priority 4096
\`\`\`

### Verify STP
\`\`\`cisco
SW01# show spanning-tree
SW01# show spanning-tree vlan 10
SW01# show spanning-tree summary
SW01# show spanning-tree interface fa0/1
SW01# show spanning-tree root
\`\`\`

### PortFast và BPDU Guard
\`\`\`cisco
# Global (trên tất cả access ports)
SW01(config)# spanning-tree portfast default

# Interface
SW01(config)# interface range fa0/1-10
SW01(config-if-range)# spanning-tree portfast
SW01(config-if-range)# spanning-tree bpduguard enable
SW01(config-if-range)# exit

# Global BPDU Guard
SW01(config)# spanning-tree portfast bpduguard default

# BPDU Filter
SW01(config-if-range)# spanning-tree bpdufilter enable
# Cẩn thận khi dùng - có thể tạo loop
\`\`\`

### Rapid PVST+ (RSTP)
\`\`\`cisco
SW01(config)# spanning-tree mode rapid-pvst

# Port states (RSTP):
# Discarding (Blocking + Listening + Disabled)
# Learning
# Forwarding

# Convergence: < 1s
\`\`\`

### EtherChannel
\`\`\`cisco
# LACP (IEEE)
SW01(config)# interface range gi0/1-2
SW01(config-if-range)# shutdown
SW01(config-if-range)# switchport mode trunk
SW01(config-if-range)# channel-protocol lacp
SW01(config-if-range)# channel-group 1 mode active
SW01(config-if-range)# no shutdown
SW01(config-if-range)# exit

SW01(config)# interface port-channel 1
SW01(config-if)# switchport mode trunk
SW01(config-if)# exit

# PAgP (Cisco)
SW01(config-if-range)# channel-group 1 mode desirable

# Static
SW01(config-if-range)# channel-group 1 mode on

# Verify
SW01# show etherchannel summary
SW01# show etherchannel port-channel
SW01# show lacp neighbor
\`\`\`

## Bài tập thực hành
Hãy cấu hình VLAN và trunk!`,
      exercises: [
        {
          id: "2-1",
          title: "VLAN và Inter-VLAN Routing",
          description: "Cấu hình VLAN, Trunk, STP, Inter-VLAN",
          instructions: `Công ty ABC có 3 phòng:
- Sales (VLAN 10): 192.168.10.0/24
- HR (VLAN 20): 192.168.20.0/24
- IT (VLAN 30): 192.168.30.0/24

Yêu cầu:
1. Cấu hình 2 switches (SW1, SW2) với VTP
2. Trunk giữa SW1-SW2
3. Access ports cho mỗi phòng
4. Port security trên access ports
5. Root bridge cho VLAN 10 là SW1
6. Inter-VLAN routing với Router-on-a-Stick
7. EtherChannel giữa SW1-SW2`,
          type: "code",
          starterCode: `# Cấu hình VLAN`,
          solution: `# ============ SW1 (VTP Server, Root Bridge) ============
SW1# configure terminal
SW1(config)# hostname SW1
SW1(config)# vtp mode server
SW1(config)# vtp domain ABC
SW1(config)# vtp password ABC123
SW1(config)# vtp version 2

# VLANs
SW1(config)# vlan 10
SW1(config-vlan)# name Sales
SW1(config-vlan)# exit
SW1(config)# vlan 20
SW1(config-vlan)# name HR
SW1(config-vlan)# exit
SW1(config)# vlan 30
SW1(config-vlan)# name IT
SW1(config-vlan)# exit

# Root bridge
SW1(config)# spanning-tree vlan 10 root primary
SW1(config)# spanning-tree vlan 20 root primary
SW1(config)# spanning-tree vlan 30 root primary

# Access ports
SW1(config)# interface range fa0/1-10
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10
SW1(config-if-range)# spanning-tree portfast
SW1(config-if-range)# spanning-tree bpduguard enable
SW1(config-if-range)# switchport port-security
SW1(config-if-range)# switchport port-security maximum 2
SW1(config-if-range)# switchport port-security mac-address sticky
SW1(config-if-range)# switchport port-security violation restrict
SW1(config-if-range)# exit

SW1(config)# interface range fa0/11-15
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 20
SW1(config-if-range)# spanning-tree portfast
SW1(config-if-range)# exit

# Uplink to router
SW1(config)# interface gi0/1
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 999
SW1(config-if)# switchport trunk allowed vlan 10,20,30
SW1(config-if)# no shutdown
SW1(config-if)# exit

# EtherChannel to SW2
SW1(config)# interface range gi0/2-3
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk native vlan 999
SW1(config-if-range)# switchport trunk allowed vlan 10,20,30
SW1(config-if-range)# channel-protocol lacp
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# no shutdown
SW1(config-if-range)# exit

SW1(config)# interface port-channel 1
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 999
SW1(config-if)# exit
SW1(config)# end
SW1# write memory

# ============ SW2 (VTP Client) ============
SW2# configure terminal
SW2(config)# hostname SW2
SW2(config)# vtp mode client
SW2(config)# vtp domain ABC
SW2(config)# vtp password ABC123
SW2(config)# vtp version 2

# Access ports
SW2(config)# interface range fa0/1-5
SW2(config-if-range)# switchport mode access
SW2(config-if-range)# switchport access vlan 30
SW2(config-if-range)# spanning-tree portfast
SW2(config-if-range)# spanning-tree bpduguard enable
SW2(config-if-range)# switchport port-security
SW2(config-if-range)# switchport port-security maximum 1
SW2(config-if-range)# exit

# EtherChannel to SW1
SW2(config)# interface range gi0/1-2
SW2(config-if-range)# switchport mode trunk
SW2(config-if-range)# switchport trunk native vlan 999
SW2(config-if-range)# switchport trunk allowed vlan 10,20,30
SW2(config-if-range)# channel-protocol lacp
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# no shutdown
SW2(config-if-range)# exit

SW2(config)# interface port-channel 1
SW2(config-if)# switchport mode trunk
SW2(config-if)# exit
SW2(config)# end
SW2# write memory

# ============ Router (Router-on-a-Stick) ============
R1# configure terminal
R1(config)# hostname R1

R1(config)# interface gi0/0
R1(config-if)# no shutdown
R1(config-if)# exit

R1(config)# interface gi0/0.10
R1(config-subif)# encapsulation dot1q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface gi0/0.20
R1(config-subif)# encapsulation dot1q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface gi0/0.30
R1(config-subif)# encapsulation dot1q 30
R1(config-subif)# ip address 192.168.30.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface gi0/0.999
R1(config-subif)# encapsulation dot1q 999 native
R1(config-subif)# exit

R1(config)# end
R1# write memory

# ============ Verify ============
SW1# show vlan brief
SW1# show interfaces trunk
SW1# show spanning-tree vlan 10
SW1# show etherchannel summary
SW1# show port-security

R1# show ip interface brief
R1# show ip route

# Test connectivity
PC1 (VLAN 10): 192.168.10.10/24, GW 192.168.10.1
PC2 (VLAN 20): 192.168.20.10/24, GW 192.168.20.1
PC3 (VLAN 30): 192.168.30.10/24, GW 192.168.30.1

PC1> ping 192.168.20.10  # Inter-VLAN ✅
PC1> ping 192.168.30.10  # Inter-VLAN ✅`,
        },
      ],
    },
    {
      id: "3",
      title: "Routing và Static Routes",
      slug: "routing-static",
      duration: "70 phút",
      prerequisites: ["2"],
      content: `# Routing và Static Routes

## Router Fundamentals

### Router Components
\`\`\`
- CPU
- RAM (running-config, routing table)
- NVRAM (startup-config)
- Flash (IOS image)
- ROM (bootstrap)
- Interfaces
\`\`\`

### Boot Process
\`\`\`
1. POST (Power-On Self Test)
2. Load bootstrap từ ROM
3. Load IOS từ Flash
4. Load startup-config từ NVRAM
5. Nếu không có → Setup mode
\`\`\`

## Router Configuration

### Initial Config
\`\`\`cisco
Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret Cisco123
R1(config)# line console 0
R1(config-line)# password Console123
R1(config-line)# login
R1(config-line)# logging synchronous
R1(config-line)# exit
R1(config)# line vty 0 4
R1(config-line)# password Vty123
R1(config-line)# login
R1(config-line)# transport input ssh
R1(config-line)# exit
R1(config)# ip domain-name abc.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# username admin privilege 15 secret Admin123
R1(config)# service password-encryption
R1(config)# banner motd # Authorized access only #
R1(config)# end
R1# write memory
\`\`\`

### Interface Configuration
\`\`\`cisco
R1(config)# interface gi0/0
R1(config-if)# description "WAN to ISP"
R1(config-if)# ip address 203.0.113.2 255.255.255.252
R1(config-if)# no shutdown
R1(config-if)# exit

R1(config)# interface gi0/1
R1(config-if)# description "LAN Gateway"
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit

# Verify
R1# show ip interface brief
R1# show interfaces gi0/0
R1# show ip interface gi0/0
\`\`\`

## Static Routing

### Cấu trúc lệnh
\`\`\`
ip route <network> <mask> {next-hop | exit-interface} [AD] [permanent]

AD (Administrative Distance):
- Connected: 0
- Static: 1
- eBGP: 20
- EIGRP: 90
- OSPF: 110
- RIP: 120
- iBGP: 200
\`\`\`

### Các loại Static Route

**1. Next-hop route**
\`\`\`cisco
R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
\`\`\`

**2. Directly connected route**
\`\`\`cisco
R1(config)# ip route 192.168.2.0 255.255.255.0 gi0/0
\`\`\`

**3. Fully specified route (khuyến nghị)**
\`\`\`cisco
R1(config)# ip route 192.168.2.0 255.255.255.0 gi0/0 10.0.0.2
\`\`\`

**4. Default route**
\`\`\`cisco
R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
\`\`\`

**5. Host route**
\`\`\`cisco
R1(config)# ip route 192.168.1.100 255.255.255.255 10.0.0.2
\`\`\`

**6. Floating static route (backup)**
\`\`\`cisco
# AD cao hơn để làm backup
R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2 1
R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.6 5
\`\`\`

## IPv4 Routing Table

### Cấu trúc
\`\`\`
Codes: C - Connected, S - Static, R - RIP, O - OSPF, D - EIGRP

Gateway of last resort is 203.0.113.1 to network 0.0.0.0

S*  0.0.0.0/0 [1/0] via 203.0.113.1
C   192.168.1.0/24 is directly connected, GigabitEthernet0/1
L   192.168.1.1/32 is directly connected, GigabitEthernet0/1
S   192.168.2.0/24 [1/0] via 10.0.0.2
\`\`\`

### Xem routing table
\`\`\`cisco
R1# show ip route
R1# show ip route static
R1# show ip route connected
R1# show ip route 192.168.1.0
R1# show ip route summary
\`\`\`

### Longest Prefix Match
\`\`\`
Destination 192.168.1.100:
- 0.0.0.0/0 (default) - /0
- 192.168.1.0/24       - /24
- 192.168.1.100/32     - /32 ← Chọn route này

Rule: Prefix dài nhất thắng
\`\`\`

## IPv6 Static Routes

\`\`\`cisco
# Enable IPv6 routing
R1(config)# ipv6 unicast-routing

# Configure interface
R1(config)# interface gi0/0
R1(config-if)# ipv6 address 2001:db8:1::1/64
R1(config-if)# ipv6 enable
R1(config-if)# no shutdown
R1(config-if)# exit

# Static IPv6 route
R1(config)# ipv6 route 2001:db8:2::/64 2001:db8:1::2

# Default IPv6 route
R1(config)# ipv6 route ::/0 2001:db8:1::2

# Verify
R1# show ipv6 route
R1# show ipv6 interface brief
R1# show ipv6 interface gi0/0
\`\`\`

## NAT (Network Address Translation)

### NAT Types
\`\`\`
Static NAT: 1-1 mapping (private to public)
Dynamic NAT: Pool to pool
PAT (Overload): Many to 1 (most common)
\`\`\`

### Static NAT
\`\`\`cisco
R1(config)# ip nat inside source static 192.168.1.10 203.0.113.10

R1(config)# interface gi0/1
R1(config-if)# ip nat inside
R1(config-if)# exit

R1(config)# interface gi0/0
R1(config-if)# ip nat outside
R1(config-if)# exit
\`\`\`

### Dynamic NAT
\`\`\`cisco
# Define pool
R1(config)# ip nat pool MYPOOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0

# ACL cho inside
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255

# NAT rule
R1(config)# ip nat inside source list 1 pool MYPOOL

# Apply to interfaces
R1(config)# interface gi0/1
R1(config-if)# ip nat inside
R1(config-if)# exit
R1(config)# interface gi0/0
R1(config-if)# ip nat outside
\`\`\`

### PAT (Overload)
\`\`\`cisco
# Với interface
R1(config)# ip nat inside source list 1 interface gi0/0 overload

# Với pool
R1(config)# ip nat inside source list 1 pool MYPOOL overload

# Verify
R1# show ip nat translations
R1# show ip nat statistics
R1# clear ip nat translation *
\`\`\`

### Port Forwarding
\`\`\`cisco
# Forward port 80 to internal server
R1(config)# ip nat inside source static tcp 192.168.1.100 80 203.0.113.10 80
R1(config)# ip nat inside source static tcp 192.168.1.100 443 203.0.113.10 443
\`\`\`

## DHCP

### DHCP Server trên Router
\`\`\`cisco
# Enable service
R1(config)# service dhcp

# Exclude IPs
R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10
R1(config)# ip dhcp excluded-address 192.168.1.100 192.168.1.110

# DHCP Pool
R1(config)# ip dhcp pool LAN-POOL
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
R1(dhcp-config)# domain-name abc.local
R1(dhcp-config)# lease 7
R1(dhcp-config)# exit

# Static binding
R1(config)# ip dhcp pool PRINTER
R1(dhcp-config)# host 192.168.1.50 255.255.255.0
R1(dhcp-config)# hardware-address 0011.2233.4455
R1(dhcp-config)# client-name Printer
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# exit

# Verify
R1# show ip dhcp binding
R1# show ip dhcp pool
R1# show ip dhcp statistics
\`\`\`

### DHCP Relay
\`\`\`cisco
# Trên router (khi DHCP server ở subnet khác)
R1(config)# interface gi0/1.10
R1(config-subif)# ip helper-address 10.0.0.10
R1(config-subif)# exit
\`\`\`

## Bài tập thực hành
Hãy cấu hình routing và NAT!`,
      exercises: [
        {
          id: "3-1",
          title: "Multi-router Network",
          description: "Cấu hình static routing và NAT",
          instructions: `Topology:
- R1 (LAN 192.168.1.0/24) - R2 - R3 (LAN 192.168.3.0/24)
- Links: R1-R2: 10.0.0.0/30, R2-R3: 10.0.0.4/30
- R1 kết nối Internet (203.0.113.2/30, GW 203.0.113.1)

Yêu cầu:
1. Cấu hình IP cho các router
2. Static routes để các LAN ping nhau
3. Default route trên R1
4. NAT PAT trên R1 cho LAN
5. DHCP server trên R1 cho LAN
6. Port forwarding cho web server 192.168.1.100:80`,
          type: "code",
          starterCode: `# Cấu hình Multi-router Network`,
          solution: `# ============ R1 ============
R1(config)# hostname R1
R1(config)# no ip domain-lookup

# Interface to Internet
R1(config)# interface gi0/0
R1(config-if)# description "Internet"
R1(config-if)# ip address 203.0.113.2 255.255.255.252
R1(config-if)# ip nat outside
R1(config-if)# no shutdown
R1(config-if)# exit

# Interface to LAN
R1(config)# interface gi0/1
R1(config-if)# description "LAN"
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# ip nat inside
R1(config-if)# no shutdown
R1(config-if)# exit

# Interface to R2
R1(config)# interface gi0/2
R1(config-if)# description "To R2"
R1(config-if)# ip address 10.0.0.1 255.255.255.252
R1(config-if)# no shutdown
R1(config-if)# exit

# Static routes
R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
R1(config)# ip route 192.168.3.0 255.255.255.0 10.0.0.2

# NAT
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)# ip nat inside source list 1 interface gi0/0 overload

# Port forwarding
R1(config)# ip nat inside source static tcp 192.168.1.100 80 interface gi0/0 80
R1(config)# ip nat inside source static tcp 192.168.1.100 443 interface gi0/0 443

# DHCP
R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.50
R1(config)# ip dhcp pool LAN
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# dns-server 8.8.8.8
R1(dhcp-config)# exit

R1(config)# end
R1# write memory

# ============ R2 ============
R2(config)# hostname R2

R2(config)# interface gi0/0
R2(config-if)# ip address 10.0.0.2 255.255.255.252
R2(config-if)# no shutdown
R2(config-if)# exit

R2(config)# interface gi0/1
R2(config-if)# ip address 10.0.0.5 255.255.255.252
R2(config-if)# no shutdown
R2(config-if)# exit

# Static routes (2 chiều)
R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1
R2(config)# ip route 192.168.3.0 255.255.255.0 10.0.0.6
R2(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1

R2(config)# end
R2# write memory

# ============ R3 ============
R3(config)# hostname R3

R3(config)# interface gi0/0
R3(config-if)# ip address 10.0.0.6 255.255.255.252
R3(config-if)# no shutdown
R3(config-if)# exit

R3(config)# interface gi0/1
R3(config-if)# ip address 192.168.3.1 255.255.255.0
R3(config-if)# no shutdown
R3(config-if)# exit

# Static routes
R3(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.5
R3(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.5

R3(config)# end
R3# write memory

# ============ Verify ============
R1# show ip route
R1# show ip nat translations
R1# show ip dhcp binding

# Test:
PC1 (192.168.1.10) → ping 192.168.3.10 ✅ (qua R1-R2-R3)
PC3 (192.168.3.10) → ping 8.8.8.8 ✅ (qua R3-R2-R1, NAT)
External → curl http://203.0.113.2 → Forward tới 192.168.1.100:80`,
        },
      ],
    },
    {
      id: "4",
      title: "OSPF và Dynamic Routing",
      slug: "ospf-dynamic-routing",
      duration: "85 phút",
      prerequisites: ["3"],
      content: `# OSPF và Dynamic Routing

## Dynamic Routing Protocols

### Phân loại
\`\`\`
IGP (Interior Gateway Protocol):
- Distance Vector: RIP, EIGRP
- Link State: OSPF, IS-IS

EGP (Exterior Gateway Protocol):
- BGP (Border Gateway Protocol)

So sánh:
RIP:    Hop count, max 15 hops, slow convergence
OSPF:   Link state, cost-based, fast convergence
EIGRP:  Hybrid, DUAL algorithm, Cisco proprietary
BGP:    Path vector, Internet routing, policy-based
\`\`\`

## OSPF Overview

### Đặc điểm
\`\`\`
- Open standard (RFC 2328 OSPFv2)
- Link-state routing protocol
- Sử dụng Dijkstra SPF algorithm
- Cost = Reference BW / Interface BW
- Reference BW mặc định: 100 Mbps
- Administrative Distance: 110
- Multicast: 224.0.0.5, 224.0.0.6
- Protocol number: 89
\`\`\`

### OSPF Cost
\`\`\`
Cost = 10^8 / Bandwidth (bps)

Interface costs:
Ethernet (10 Mbps):   Cost = 10
FastEthernet (100):   Cost = 1
GigabitEthernet (1G): Cost = 1
10G:                  Cost = 1

Với reference BW 100 Mbps, tất cả >= 100Mbps đều có cost 1

Cấu hình reference BW:
R1(config)# router ospf 1
R1(config-router)# auto-cost reference-bandwidth 10000
# Trên tất cả routers phải giống nhau!
\`\`\`

### OSPF Areas
\`\`\`
Backbone Area: Area 0
Regular Areas: Area 1, 2, 3...
Special:
- Stub: No external routes (LSA 5)
- Totally Stubby: Only default route (Cisco)
- NSSA: Not-So-Stubby Area (Cisco)

Rules:
- Tất cả areas phải kết nối với Area 0
- Nếu không trực tiếp → virtual link
- Area 0 là core của OSPF
\`\`\`

### OSPF Neighbor States
\`\`\`
Down         - Chưa có thông tin
Init         - Nhận được Hello, chưa 2-way
2-Way        - 2-way communication
ExStart      - Bắt đầu trao đổi DBD
Exchange     - Trao đổi DBD packets
Loading      - Trao đổi LSAs
Full         - Đồng bộ database ✓
\`\`\`

### Hello Packet
\`\`\`
Interval:
- Broadcast: 10s
- NBMA: 30s

Dead Interval:
- Broadcast: 40s (4×Hello)
- NBMA: 120s

Phải khớp:
- Hello interval
- Dead interval
- Area ID
- Authentication
- Stub flag
- MTU (khi Exchange)
\`\`\`

## Cấu hình OSPF cơ bản

### Single Area
\`\`\`cisco
# R1
R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
R1(config-router)# exit

# R2
R2(config)# router ospf 1
R2(config-router)# router-id 2.2.2.2
R2(config-router)# network 10.0.0.0 0.0.0.3 area 0
R2(config-router)# network 10.0.0.4 0.0.0.3 area 0
R2(config-router)# exit

# R3
R3(config)# router ospf 1
R3(config-router)# router-id 3.3.3.3
R3(config-router)# network 10.0.0.4 0.0.0.3 area 0
R3(config-router)# network 192.168.3.0 0.0.0.255 area 0
\`\`\`

### Interface-level config (khuyến nghị)
\`\`\`cisco
R1(config)# interface gi0/1
R1(config-if)# ip ospf 1 area 0
R1(config-if)# ip ospf priority 100
R1(config-if)# ip ospf cost 10
R1(config-if)# ip ospf hello-interval 10
R1(config-if)# ip ospf dead-interval 40
R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 Cisco123
R1(config-if)# exit
\`\`\`

### Verify OSPF
\`\`\`cisco
R1# show ip ospf neighbor
R1# show ip ospf neighbor detail
R1# show ip ospf database
R1# show ip ospf interface
R1# show ip ospf interface brief
R1# show ip protocols
R1# show ip route ospf
R1# show ip ospf
\`\`\`

### Debug OSPF
\`\`\`cisco
R1# debug ip ospf adj
R1# debug ip ospf events
R1# debug ip ospf hello
R1# debug ip ospf packet
R1# undebug all
\`\`\`

## DR/BDR Election

### Trên broadcast networks
\`\`\`
DR  - Designated Router
BDR - Backup Designated Router
DROther - Các router khác

Election:
1. Priority cao nhất (0-255, default 1)
2. Nếu bằng → Router ID cao nhất
3. Priority = 0 → không tham gia

DRother chỉ form adjacency Full với DR và BDR
DRother-DRother: 2-Way state
\`\`\`

### Cấu hình DR
\`\`\`cisco
R1(config)# interface gi0/1
R1(config-if)# ip ospf priority 100
R1(config-if)# exit

# Non-preemptive: không tự động đổi DR
# Cần clear để bầu lại
R1# clear ip ospf process
\`\`\`

### Verify DR/BDR
\`\`\`cisco
R1# show ip ospf neighbor
# Output:
Neighbor ID     Pri   State           Dead Time   Address
2.2.2.2         1     2WAY/DROTHER    00:00:38    10.0.0.2
3.3.3.3         1     FULL/BDR        00:00:35    10.0.0.6
4.4.4.4         1     FULL/DR         00:00:32    10.0.0.10
\`\`\`

## Multi-Area OSPF

### Cấu hình ABR
\`\`\`cisco
# ABR (Area Border Router)
ABR(config)# router ospf 1
ABR(config-router)# router-id 1.1.1.1
ABR(config-router)# network 192.168.1.0 0.0.0.255 area 1
ABR(config-router)# network 10.0.0.0 0.0.0.3 area 0
ABR(config-router)# exit

# Interface-level
ABR(config)# interface gi0/0
ABR(config-if)# ip ospf 1 area 0
ABR(config-if)# exit

ABR(config)# interface gi0/1
ABR(config-if)# ip ospf 1 area 1
ABR(config-if)# exit
\`\`\`

### Stub Area
\`\`\`cisco
# Trên tất cả routers trong stub area
R1(config)# router ospf 1
R1(config-router)# area 1 stub
R1(config-router)# exit

# Trên ABR
ABR(config)# router ospf 1
ABR(config-router)# area 1 stub
ABR(config-router)# exit

# Totally Stubby (Cisco)
ABR(config-router)# area 1 stub no-summary
\`\`\`

### NSSA (Not-So-Stubby Area)
\`\`\`cisco
R1(config)# router ospf 1
R1(config-router)# area 1 nssa
R1(config-router)# exit

# ABR
ABR(config)# router ospf 1
ABR(config-router)# area 1 nssa
\`\`\`

### Virtual Link
\`\`\`cisco
# Khi area không kết nối trực tiếp area 0
R1(config)# router ospf 1
R1(config-router)# area 1 virtual-link 2.2.2.2
R1(config-router)# exit

# Cả 2 đầu đều phải config
R2(config)# router ospf 1
R2(config-router)# area 1 virtual-link 1.1.1.1
\`\`\`

## OSPF Authentication

### Type 1 - Plain text (không khuyến nghị)
\`\`\`cisco
R1(config)# interface gi0/1
R1(config-if)# ip ospf authentication
R1(config-if)# ip ospf authentication-key Cisco123
\`\`\`

### Type 2 - MD5
\`\`\`cisco
R1(config)# interface gi0/1
R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 Cisco123
\`\`\`

### Type 3 - SHA (mới hơn)
\`\`\`cisco
R1(config)# interface gi0/1
R1(config-if)# ip ospf authentication key-chain MYKEY
R1(config-if)# exit

R1(config)# key chain MYKEY
R1(config-keychain)# key 1
R1(config-keychain-key)# key-string Cisco123
R1(config-keychain-key)# cryptographic-algorithm hmac-sha-256
R1(config-keychain-key)# exit
R1(config-keychain)# exit
\`\`\`

## OSPF Network Types

### Broadcast (default cho Ethernet)
\`\`\`
- DR/BDR election
- Multicast 224.0.0.5, 224.0.0.6
- Hello 10s, Dead 40s
- Auto neighbor discovery
\`\`\`

### Point-to-Point
\`\`\`cisco
R1(config)# interface serial0/0
R1(config-if)# ip ospf network point-to-point
\`\`\`
\`\`\`
- Không DR/BDR
- Hello 10s, Dead 40s
- Auto neighbor discovery
\`\`\`

### Non-Broadcast (NBMA)
\`\`\`
- DR/BDR election
- Unicast
- Hello 30s, Dead 120s
- Cần neighbor statement
\`\`\`

### Point-to-Multipoint
\`\`\`cisco
R1(config)# interface serial0/0
R1(config-if)# ip ospf network point-to-multipoint
\`\`\`
\`\`\`
- Không DR/BDR
- Hello 30s, Dead 120s
- Auto neighbor discovery
\`\`\`

## EIGRP

### Overview
\`\`\`
- Cisco proprietary (đã mở 2013)
- Advanced distance vector
- DUAL algorithm
- AD: 90 (internal), 170 (external)
- Multicast: 224.0.0.10
- Protocol number: 88
\`\`\`

### Cấu hình cơ bản
\`\`\`cisco
R1(config)# router eigrp 100
R1(config-router)# no auto-summary
R1(config-router)# network 192.168.1.0 0.0.0.255
R1(config-router)# network 10.0.0.0 0.0.0.3
R1(config-router)# exit

# Với passive interface
R1(config-router)# passive-interface gi0/1
R1(config-router)# exit

# Verify
R1# show ip eigrp neighbors
R1# show ip eigrp topology
R1# show ip route eigrp
R1# show ip protocols
\`\`\`

### EIGRP Metrics
\`\`\`
Composite metric:
- Bandwidth (K1)
- Delay (K3)
- Load (K2)
- Reliability (K4, K5)

Default: BW + Delay
Formula: 256 × (10^7/min_BW + sum_delay/10)
\`\`\`

## Bài tập thực hành
Hãy cấu hình OSPF multi-area!`,
      exercises: [
        {
          id: "4-1",
          title: "OSPF Multi-Area Configuration",
          description: "Cấu hình OSPF multi-area với authentication",
          instructions: `Topology:
- Area 0 (Backbone): R1-R2
- Area 1: R2-R3
- Area 2: R2-R4
- R1 là ABR giữa Area 0 và Area 1
- R2 là ABR giữa Area 0, Area 1, Area 2

Yêu cầu:
1. Cấu hình OSPF multi-area
2. MD5 authentication trên tất cả links
3. Area 1 là Stub Area
4. Đảm bảo DR election hợp lý
5. Verify full adjacency`,
          type: "code",
          starterCode: `# OSPF Multi-Area Configuration`,
          solution: `# ============ R1 (ABR Area 0 & 1) ============
R1(config)# hostname R1
R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# area 1 stub
R1(config-router)# auto-cost reference-bandwidth 10000
R1(config-router)# exit

# Interface Area 0
R1(config)# interface gi0/0
R1(config-if)# description "To R2 (Area 0)"
R1(config-if)# ip address 10.0.0.1 255.255.255.252
R1(config-if)# ip ospf 1 area 0
R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R1(config-if)# ip ospf priority 100
R1(config-if)# no shutdown
R1(config-if)# exit

# Interface Area 1
R1(config)# interface gi0/1
R1(config-if)# description "To R5 (Area 1)"
R1(config-if)# ip address 10.1.0.1 255.255.255.252
R1(config-if)# ip ospf 1 area 1
R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R1(config-if)# no shutdown
R1(config-if)# exit

# LAN in Area 1
R1(config)# interface gi0/2
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# ip ospf 1 area 1
R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R1(config-if)# exit

R1(config)# end
R1# write memory

# ============ R2 (ABR Area 0, 1, 2) ============
R2(config)# hostname R2
R2(config)# router ospf 1
R2(config-router)# router-id 2.2.2.2
R2(config-router)# area 1 stub
R2(config-router)# auto-cost reference-bandwidth 10000
R2(config-router)# exit

# Area 0
R2(config)# interface gi0/0
R2(config-if)# ip address 10.0.0.2 255.255.255.252
R2(config-if)# ip ospf 1 area 0
R2(config-if)# ip ospf authentication message-digest
R2(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R2(config-if)# no shutdown
R2(config-if)# exit

# Area 1
R2(config)# interface gi0/1
R2(config-if)# ip address 10.1.0.5 255.255.255.252
R2(config-if)# ip ospf 1 area 1
R2(config-if)# ip ospf authentication message-digest
R2(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R2(config-if)# no shutdown
R2(config-if)# exit

# Area 2
R2(config)# interface gi0/2
R2(config-if)# ip address 10.2.0.1 255.255.255.252
R2(config-if)# ip ospf 1 area 2
R2(config-if)# ip ospf authentication message-digest
R2(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R2(config-if)# no shutdown
R2(config-if)# exit

R2(config)# end
R2# write memory

# ============ R3 (Area 2) ============
R3(config)# hostname R3
R3(config)# router ospf 1
R3(config-router)# router-id 3.3.3.3
R3(config-router)# auto-cost reference-bandwidth 10000
R3(config-router)# exit

R3(config)# interface gi0/0
R3(config-if)# ip address 10.2.0.2 255.255.255.252
R3(config-if)# ip ospf 1 area 2
R3(config-if)# ip ospf authentication message-digest
R3(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R3(config-if)# no shutdown
R3(config-if)# exit

R3(config)# interface gi0/1
R3(config-if)# ip address 192.168.3.1 255.255.255.0
R3(config-if)# ip ospf 1 area 2
R3(config-if)# ip ospf authentication message-digest
R3(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R3(config-if)# exit

R3(config)# end
R3# write memory

# ============ R5 (Area 1 - Stub) ============
R5(config)# hostname R5
R5(config)# router ospf 1
R5(config-router)# router-id 5.5.5.5
R5(config-router)# area 1 stub
R5(config-router)# auto-cost reference-bandwidth 10000
R5(config-router)# exit

R5(config)# interface gi0/0
R5(config-if)# ip address 10.1.0.6 255.255.255.252
R5(config-if)# ip ospf 1 area 1
R5(config-if)# ip ospf authentication message-digest
R5(config-if)# ip ospf message-digest-key 1 md5 OSPF123
R5(config-if)# no shutdown
R5(config-if)# exit

R5(config)# interface gi0/1
R5(config-if)# ip address 192.168.5.1 255.255.255.0
R5(config-if)# ip ospf 1 area 1
R5(config-if)# exit

R5(config)# end
R5# write memory

# ============ VERIFY ============
R1# show ip ospf neighbor
R1# show ip ospf database
R1# show ip route ospf
R1# show ip ospf interface brief

R2# show ip ospf neighbor
R2# show ip ospf database
R2# show ip route ospf

# Test connectivity
R1# ping 192.168.3.1 source 192.168.1.1
R3# ping 192.168.5.1 source 192.168.3.1

# Kiểm tra Stub area
R5# show ip route ospf
# Chỉ có default route, không có external routes ✅

# Kiểm tra authentication
R1# show ip ospf interface gi0/0
# Simple password authentication enabled: Yes
# Message digest authentication enabled: Yes`,
        },
      ],
    },
    {
      id: "5",
      title: "ACL, NAT và Network Security",
      slug: "acl-nat-security",
      duration: "80 phút",
      prerequisites: ["4"],
      content: `# ACL, NAT và Network Security

## Access Control Lists (ACLs)

### ACL Types
\`\`\`
Standard ACL:
- Số: 1-99, 1300-1999
- Filter: Source IP only
- Vị trí: Gần destination

Extended ACL:
- Số: 100-199, 2000-2699
- Filter: Source, Destination, Protocol, Port
- Vị trí: Gần source

Named ACL:
- Standard hoặc Extended
- Có tên thay vì số
\`\`\`

### Wildcard Mask
\`\`\`
Subnet Mask:   255.255.255.0
Wildcard:      0.0.0.255

Công thức: Wildcard = 255.255.255.255 - Subnet Mask

Ví dụ:
/24: 255.255.255.0 → 0.0.0.255
/25: 255.255.255.128 → 0.0.0.127
/26: 255.255.255.192 → 0.0.0.63
/30: 255.255.255.252 → 0.0.0.3
Host: 255.255.255.255 → 0.0.0.0

Ví dụ:
Match 192.168.1.0/24: 192.168.1.0 0.0.0.255
Match 192.168.1.100/32: 192.168.1.100 0.0.0.0
Match any: 0.0.0.0 255.255.255.255 (hoặc "any")
Match host: host 192.168.1.100
\`\`\`

### Standard ACL
\`\`\`cisco
# Numbered
R1(config)# access-list 10 permit 192.168.1.0 0.0.0.255
R1(config)# access-list 10 deny 192.168.2.0 0.0.0.255
R1(config)# access-list 10 permit any

# Apply to interface
R1(config)# interface gi0/1
R1(config-if)# ip access-group 10 in
R1(config-if)# exit

# Verify
R1# show access-lists
R1# show ip interface gi0/1
R1# show ip access-lists
\`\`\`

### Named Standard ACL
\`\`\`cisco
R1(config)# ip access-list standard ALLOW_LAN
R1(config-std-nacl)# permit 192.168.1.0 0.0.0.255
R1(config-std-nacl)# permit 192.168.10.0 0.0.0.255
R1(config-std-nacl)# deny any log
R1(config-std-nacl)# exit

R1(config)# interface gi0/1
R1(config-if)# ip access-group ALLOW_LAN in
R1(config-if)# exit
\`\`\`

### Extended ACL
\`\`\`cisco
# Cấu trúc:
# access-list <number> <action> <protocol> <src> <dst> [operator port]

# Ví dụ:
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 22
R1(config)# access-list 100 permit icmp 192.168.1.0 0.0.0.255 any echo
R1(config)# access-list 100 permit tcp any 192.168.1.0 0.0.0.255 established
R1(config)# access-list 100 deny ip any any log
\`\`\`

### Named Extended ACL
\`\`\`cisco
R1(config)# ip access-list extended WEB_ACCESS
R1(config-ext-nacl)# remark Allow HTTP/HTTPS to web server
R1(config-ext-nacl)# permit tcp any host 192.168.1.100 eq 80
R1(config-ext-nacl)# permit tcp any host 192.168.1.100 eq 443

R1(config-ext-nacl)# remark Allow DNS
R1(config-ext-nacl)# permit udp any any eq 53
R1(config-ext-nacl)# permit tcp any any eq 53

R1(config-ext-nacl)# remark Allow established traffic
R1(config-ext-nacl)# permit tcp any any established

R1(config-ext-nacl)# remark Deny everything else
R1(config-ext-nacl)# deny ip any any log
R1(config-ext-nacl)# exit

# Apply to interface
R1(config)# interface gi0/0
R1(config-if)# ip access-group WEB_ACCESS in
R1(config-if)# exit
\`\`\`

### Editing ACLs
\`\`\`cisco
# Xem số sequence
R1# show access-lists

# Thêm rule vào giữa
R1(config)# ip access-list extended MY_ACL
R1(config-ext-nacl)# 15 permit tcp any any eq 21
R1(config-ext-nacl)# exit

# Xóa một rule
R1(config)# ip access-list extended MY_ACL
R1(config-ext-nacl)# no 15
R1(config-ext-nacl)# exit

# Resequence
R1(config)# ip access-list resequence MY_ACL 10 10
\`\`\`

### ACL Applications
\`\`\`cisco
# Inbound (khuyến nghị cho extended)
R1(config-if)# ip access-group 100 in

# Outbound
R1(config-if)# ip access-group 100 out

# VTY access
R1(config)# line vty 0 4
R1(config-line)# access-class 10 in
R1(config-line)# exit

# SNMP
R1(config)# snmp-server community public RO 10

# Route filtering
R1(config)# distribute-list 10 in gi0/0
\`\`\`

## NAT Advanced

### Static NAT
\`\`\`cisco
R1(config)# ip nat inside source static 192.168.1.10 203.0.113.10
R1(config)# ip nat inside source static tcp 192.168.1.100 80 203.0.113.10 80
R1(config)# ip nat inside source static udp 192.168.1.100 53 203.0.113.10 53
\`\`\`

### Dynamic NAT
\`\`\`cisco
# Define pool
R1(config)# ip nat pool PUBLIC_POOL 203.0.113.10 203.0.113.20 prefix-length 24

# ACL
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255

# NAT rule
R1(config)# ip nat inside source list 1 pool PUBLIC_POOL
\`\`\`

### PAT (Overload)
\`\`\`cisco
# Interface overload
R1(config)# ip nat inside source list 1 interface gi0/0 overload

# Pool overload
R1(config)# ip nat inside source list 1 pool PUBLIC_POOL overload

# Verify
R1# show ip nat translations
R1# show ip nat translations verbose
R1# show ip nat statistics
R1# clear ip nat translation *
R1# clear ip nat translation inside 192.168.1.10
\`\`\`

### NAT với Route-map
\`\`\`cisco
# Match traffic và apply NAT policy
R1(config)# route-map NAT_POLICY permit 10
R1(config-route-map)# match ip address 1
R1(config-route-map)# match interface gi0/0
R1(config-route-map)# exit

R1(config)# ip nat inside source route-map NAT_POLICY pool PUBLIC_POOL overload
\`\`\`

## Zone-Based Firewall (ZBF)

### Zones
\`\`\`
INSIDE zone   - LAN
OUTSIDE zone  - Internet
DMZ zone      - Web servers
\`\`\`

### Cấu hình ZBF
\`\`\`cisco
# Define zones
R1(config)# zone security INSIDE
R1(config)# zone security OUTSIDE

# Class-map
R1(config)# class-map type inspect match-any WEB_TRAFFIC
R1(config-cmap)# match protocol http
R1(config-cmap)# match protocol https
R1(config-cmap)# exit

# Policy-map
R1(config)# policy-map type inspect INSIDE_TO_OUTSIDE
R1(config-pmap)# class type inspect WEB_TRAFFIC
R1(config-pmap-c)# inspect
R1(config-pmap-c)# exit
R1(config-pmap)# class class-default
R1(config-pmap-c)# drop
R1(config-pmap-c)# exit
R1(config-pmap)# exit

# Zone-pair
R1(config)# zone-pair security IN_TO_OUT source INSIDE destination OUTSIDE
R1(config-sec-zone-pair)# service-policy type inspect INSIDE_TO_OUTSIDE
R1(config-sec-zone-pair)# exit

# Assign interfaces to zones
R1(config)# interface gi0/0
R1(config-if)# zone-member security OUTSIDE
R1(config-if)# exit
R1(config)# interface gi0/1
R1(config-if)# zone-member security INSIDE
\`\`\`

## VPN (Site-to-Site IPsec)

### Cấu hình Site-to-Site VPN
\`\`\`cisco
# ============ Site A Router ============

# 1. IKE Phase 1 Policy
R1(config)# crypto isakmp policy 10
R1(config-isakmp)# encryption aes 256
R1(config-isakmp)# hash sha256
R1(config-isakmp)# authentication pre-share
R1(config-isakmp)# group 14
R1(config-isakmp)# lifetime 86400
R1(config-isakmp)# exit

# 2. Pre-shared key
R1(config)# crypto isakmp key Cisco12345 address 203.0.113.10

# 3. IKE Phase 2 (IPsec)
R1(config)# crypto ipsec transform-set MY_TS esp-aes 256 esp-sha256-hmac
R1(config-crypto-trans)# mode tunnel
R1(config-crypto-trans)# exit

# 4. ACL cho interesting traffic
R1(config)# ip access-list extended VPN_TRAFFIC
R1(config-ext-nacl)# permit ip 192.168.1.0 0.0.0.255 192.168.2.0 0.0.0.255
R1(config-ext-nacl)# exit

# 5. Crypto map
R1(config)# crypto map VPN_MAP 10 ipsec-isakmp
R1(config-crypto-map)# set peer 203.0.113.10
R1(config-crypto-map)# set transform-set MY_TS
R1(config-crypto-map)# match address VPN_TRAFFIC
R1(config-crypto-map)# set pfs group14
R1(config-crypto-map)# exit

# 6. Apply to interface
R1(config)# interface gi0/0
R1(config-if)# crypto map VPN_MAP
R1(config-if)# exit

# ============ Site B Router ============
# Mirror config với peer/address swap

# Verify
R1# show crypto isakmp sa
R1# show crypto ipsec sa
R1# show crypto map
R1# show crypto session
\`\`\`

## AAA (Authentication, Authorization, Accounting)

### Local AAA
\`\`\`cisco
# Enable AAA
R1(config)# aaa new-model

# Local user
R1(config)# username admin privilege 15 secret Admin123

# Authentication
R1(config)# aaa authentication login default local
R1(config)# aaa authentication login CONSOLE local

# Apply to lines
R1(config)# line con 0
R1(config-line)# login authentication CONSOLE
R1(config-line)# exit

R1(config)# line vty 0 4
R1(config-line)# login authentication default
R1(config-line)# transport input ssh
\`\`\`

### TACACS+ / RADIUS
\`\`\`cisco
# TACACS+
R1(config)# tacacs server TACACS1
R1(config-server-tacacs)# address ipv4 10.0.0.100
R1(config-server-tacacs)# key Cisco123
R1(config-server-tacacs)# exit

R1(config)# aaa group server tacacs+ TACACS_GROUP
R1(config-sg-tacacs+)# server name TACACS1
R1(config-sg-tacacs+)# exit

R1(config)# aaa authentication login default group TACACS_GROUP local
R1(config)# aaa authorization exec default group TACACS_GROUP local
R1(config)# aaa accounting exec default start-stop group TACACS_GROUP

# RADIUS
R1(config)# radius server RADIUS1
R1(config-radius-server)# address ipv4 10.0.0.101 auth-port 1812 acct-port 1813
R1(config-radius-server)# key Cisco123
R1(config-radius-server)# exit
\`\`\`

## SSH Configuration

\`\`\`cisco
# Generate RSA keys
R1(config)# ip domain-name abc.local
R1(config)# crypto key generate rsa modulus 2048

# SSH version 2
R1(config)# ip ssh version 2
R1(config)# ip ssh time-out 60
R1(config)# ip ssh authentication-retries 3

# User
R1(config)# username admin privilege 15 secret Admin123

# VTY
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh
R1(config-line)# exec-timeout 10 0
R1(config-line)# exit

# Verify
R1# show ip ssh
R1# show ssh

# Kết nối
ssh -l admin 192.168.1.1
\`\`\`

## Port Security

\`\`\`cisco
SW1(config)# interface fa0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport port-security
SW1(config-if)# switchport port-security maximum 2
SW1(config-if)# switchport port-security mac-address sticky
SW1(config-if)# switchport port-security violation restrict
SW1(config-if)# switchport port-security aging time 60
SW1(config-if)# switchport port-security aging type inactivity
SW1(config-if)# exit

# Verify
SW1# show port-security
SW1# show port-security interface fa0/1
SW1# show port-security address

# Clear
SW1# clear port-security all
SW1# clear port-security sticky interface fa0/1
\`\`\`

## DHCP Snooping

\`\`\`cisco
# Enable globally
SW1(config)# ip dhcp snooping
SW1(config)# ip dhcp snooping vlan 10,20,30

# Trusted ports (uplink to DHCP server)
SW1(config)# interface gi0/1
SW1(config-if)# ip dhcp snooping trust
SW1(config-if)# exit

# Rate limit
SW1(config)# interface range fa0/1-24
SW1(config-if-range)# ip dhcp snooping limit rate 10
SW1(config-if-range)# exit

# Option 82
SW1(config)# ip dhcp snooping information option

# Verify
SW1# show ip dhcp snooping
SW1# show ip dhcp snooping binding
SW1# show ip dhcp snooping statistics
\`\`\`

## Dynamic ARP Inspection (DAI)

\`\`\`cisco
# Requires DHCP snooping
SW1(config)# ip arp inspection vlan 10,20,30

# Trusted ports
SW1(config)# interface gi0/1
SW1(config-if)# ip arp inspection trust
SW1(config-if)# exit

# Rate limit
SW1(config)# interface range fa0/1-24
SW1(config-if-range)# ip arp inspection limit rate 15
SW1(config-if-range)# exit

# Verify
SW1# show ip arp inspection
SW1# show ip arp inspection statistics
SW1# show ip arp inspection interfaces
\`\`\`

## Bài tập thực hành
Hãy cấu hình ACL và security!`,
      exercises: [
        {
          id: "5-1",
          title: "Network Security Configuration",
          description: "Cấu hình ACL, NAT, Firewall, VPN",
          instructions: `Topology:
- Inside: 192.168.1.0/24 (LAN)
- DMZ: 192.168.100.0/24 (Web, Mail servers)
- Outside: Internet (WAN 203.0.113.2/30)

Yêu cầu:
1. ACL:
   - LAN → Internet: HTTP, HTTPS, DNS, ICMP, SSH
   - Internet → DMZ: HTTP, HTTPS, SMTP, POP3
   - DMZ → LAN: Deny all
2. NAT: PAT cho LAN, Static NAT cho DMZ web
3. ZBF: Protect LAN từ Internet
4. SSH with local auth
5. Site-to-Site VPN tới chi nhánh
6. Port security trên switch`,
          type: "code",
          starterCode: `# Network Security Configuration`,
          solution: `# ============ ACL Configuration ============

# 1. ACL cho LAN → Internet
R1(config)# ip access-list extended LAN_OUT
R1(config-ext-nacl)# remark Allow web
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 80
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 443
R1(config-ext-nacl)# remark Allow DNS
R1(config-ext-nacl)# permit udp 192.168.1.0 0.0.0.255 any eq 53
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 53
R1(config-ext-nacl)# remark Allow ICMP
R1(config-ext-nacl)# permit icmp 192.168.1.0 0.0.0.255 any echo
R1(config-ext-nacl)# remark Allow SSH to specific
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 host 203.0.113.100 eq 22
R1(config-ext-nacl)# remark Return traffic
R1(config-ext-nacl)# permit tcp any any established
R1(config-ext-nacl)# deny ip any any log
R1(config-ext-nacl)# exit

# 2. ACL cho Internet → DMZ
R1(config)# ip access-list extended INTERNET_IN
R1(config-ext-nacl)# permit tcp any host 192.168.100.10 eq 80
R1(config-ext-nacl)# permit tcp any host 192.168.100.10 eq 443
R1(config-ext-nacl)# permit tcp any host 192.168.100.20 eq 25
R1(config-ext-nacl)# permit tcp any host 192.168.100.20 eq 110
R1(config-ext-nacl)# permit tcp any host 192.168.100.20 eq 143
R1(config-ext-nacl)# permit icmp any any echo-reply
R1(config-ext-nacl)# deny ip any any log
R1(config-ext-nacl)# exit

# 3. ACL DMZ → LAN (Deny all)
R1(config)# ip access-list extended DMZ_TO_LAN
R1(config-ext-nacl)# deny ip any 192.168.1.0 0.0.0.255 log
R1(config-ext-nacl)# permit ip any any
R1(config-ext-nacl)# exit

# Apply ACLs
R1(config)# interface gi0/1
R1(config-if)# ip access-group LAN_OUT in
R1(config-if)# exit

R1(config)# interface gi0/0
R1(config-if)# ip access-group INTERNET_IN in
R1(config-if)# exit

R1(config)# interface gi0/2
R1(config-if)# ip access-group DMZ_TO_LAN in
R1(config-if)# exit

# ============ NAT Configuration ============

# Mark interfaces
R1(config)# interface gi0/1
R1(config-if)# ip nat inside
R1(config-if)# exit

R1(config)# interface gi0/2
R1(config-if)# ip nat inside
R1(config-if)# exit

R1(config)# interface gi0/0
R1(config-if)# ip nat outside
R1(config-if)# exit

# PAT for LAN
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)# ip nat inside source list 1 interface gi0/0 overload

# Static NAT for DMZ web server
R1(config)# ip nat inside source static 192.168.100.10 203.0.113.10

# Static port forwarding for mail
R1(config)# ip nat inside source static tcp 192.168.100.20 25 203.0.113.11 25
R1(config)# ip nat inside source static tcp 192.168.100.20 110 203.0.113.11 110
R1(config)# ip nat inside source static tcp 192.168.100.20 143 203.0.113.11 143

# ============ ZBF Configuration ============

# Define zones
R1(config)# zone security LAN
R1(config)# zone security DMZ
R1(config)# zone security INTERNET

# Class maps
R1(config)# class-map type inspect match-any LAN_TO_INTERNET
R1(config-cmap)# match protocol http
R1(config-cmap)# match protocol https
R1(config-cmap)# match protocol dns
R1(config-cmap)# match protocol icmp
R1(config-cmap)# exit

R1(config)# class-map type inspect match-any INTERNET_TO_DMZ
R1(config-cmap)# match protocol http
R1(config-cmap)# match protocol https
R1(config-cmap)# match protocol smtp
R1(config-cmap)# exit

# Policy maps
R1(config)# policy-map type inspect LAN_POLICY
R1(config-pmap)# class type inspect LAN_TO_INTERNET
R1(config-pmap-c)# inspect
R1(config-pmap-c)# exit
R1(config-pmap)# class class-default
R1(config-pmap-c)# drop log
R1(config-pmap-c)# exit
R1(config-pmap)# exit

R1(config)# policy-map type inspect DMZ_POLICY
R1(config-pmap)# class type inspect INTERNET_TO_DMZ
R1(config-pmap-c)# inspect
R1(config-pmap-c)# exit
R1(config-pmap)# class class-default
R1(config-pmap-c)# drop log
R1(config-pmap-c)# exit
R1(config-pmap)# exit

# Zone pairs
R1(config)# zone-pair security LAN-TO-INTERNET source LAN destination INTERNET
R1(config-sec-zone-pair)# service-policy type inspect LAN_POLICY
R1(config-sec-zone-pair)# exit

R1(config)# zone-pair security INTERNET-TO-DMZ source INTERNET destination DMZ
R1(config-sec-zone-pair)# service-policy type inspect DMZ_POLICY
R1(config-sec-zone-pair)# exit

# Assign interfaces
R1(config)# interface gi0/0
R1(config-if)# zone-member security INTERNET
R1(config-if)# exit

R1(config)# interface gi0/1
R1(config-if)# zone-member security LAN
R1(config-if)# exit

R1(config)# interface gi0/2
R1(config-if)# zone-member security DMZ
R1(config-if)# exit

# ============ SSH ============
R1(config)# ip domain-name abc.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# ip ssh version 2
R1(config)# ip ssh time-out 60
R1(config)# ip ssh authentication-retries 3

R1(config)# username admin privilege 15 secret Admin123

R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh
R1(config-line)# exec-timeout 10 0
R1(config-line)# exit

# ============ Site-to-Site VPN ============
R1(config)# crypto isakmp policy 10
R1(config-isakmp)# encryption aes 256
R1(config-isakmp)# hash sha256
R1(config-isakmp)# authentication pre-share
R1(config-isakmp)# group 14
R1(config-isakmp)# lifetime 28800
R1(config-isakmp)# exit

R1(config)# crypto isakmp key VPN@2024! address 198.51.100.2

R1(config)# crypto ipsec transform-set VPN_TS esp-aes 256 esp-sha256-hmac

R1(config)# ip access-list extended VPN_INTERESTING
R1(config-ext-nacl)# permit ip 192.168.1.0 0.0.0.255 192.168.10.0 0.0.0.255
R1(config-ext-nacl)# exit

R1(config)# crypto map SITE_VPN 10 ipsec-isakmp
R1(config-crypto-map)# set peer 198.51.100.2
R1(config-crypto-map)# set transform-set VPN_TS
R1(config-crypto-map)# match address VPN_INTERESTING
R1(config-crypto-map)# set pfs group14
R1(config-crypto-map)# exit

R1(config)# interface gi0/0
R1(config-if)# crypto map SITE_VPN
R1(config-if)# exit

# ============ Switch Port Security ============
SW1(config)# interface range fa0/1-20
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport port-security
SW1(config-if-range)# switchport port-security maximum 1
SW1(config-if-range)# switchport port-security mac-address sticky
SW1(config-if-range)# switchport port-security violation restrict
SW1(config-if-range)# switchport port-security aging time 30
SW1(config-if-range)# switchport port-security aging type inactivity
SW1(config-if-range)# exit

# ============ Verify ============
R1# show access-lists
R1# show ip nat translations
R1# show zone-pair security
R1# show crypto isakmp sa
R1# show crypto ipsec sa
R1# show crypto session
SW1# show port-security

# Test:
LAN PC → web: ✅
LAN PC → telnet internet: ❌ (blocked by ACL)
Internet → web server: ✅
Internet → LAN: ❌ (blocked)
DMZ → LAN: ❌ (blocked)
VPN site-to-site: ✅`,
        },
      ],
    },
  ],
};
