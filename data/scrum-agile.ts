import { Course } from "@/types";

export const scrumAgile: Course = {
  id: "scrum-agile",
  slug: "scrum-agile",
  title: "Scrum & Agile Mastery",
  description:
    "Scrum Master, Product Owner, Agile coaching và quản lý dự án linh hoạt",
  image: "/images/scrum-course.jpg",
  duration: "10 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Agile Fundamentals và Mindset",
      slug: "agile-fundamentals",
      duration: "50 phút",
      content: `# Agile Fundamentals và Mindset

## Agile là gì?
Agile là một tập hợp các nguyên tắc và phương pháp phát triển phần mềm, tập trung vào việc cung cấp giá trị nhanh chóng, thích ứng với thay đổi và cải tiến liên tục.

## Agile Manifesto (2001)

### 4 Giá trị cốt lõi
\`\`\`
1. Cá nhân và tương tác HƠN quy trình và công cụ
2. Phần mềm chạy được HƠN tài liệu đầy đủ
3. Cộng tác với khách hàng HƠN đàm phán hợp đồng
4. Phản hồi với thay đổi HƠN tuân thủ kế hoạch

(Trong khi vẫn có giá trị ở vế phải, chúng ta đánh giá cao vế trái hơn)
\`\`\`

### 12 Nguyên tắc Agile
\`\`\`
1. Ưu tiên cao nhất: thỏa mãn khách hàng qua giao hàng sớm và liên tục
2. Chấp nhận yêu cầu thay đổi, ngay cả muộn
3. Giao hàng thường xuyên (2 tuần - 2 tháng)
4. Business và Dev làm việc cùng nhau hàng ngày
5. Xây dựng dự án xung quanh cá nhân có động lực
6. Truyền đạt trực tiếp (face-to-face)
7. Phần mềm chạy được là thước đo chính
8. Phát triển bền vững
9. Chú ý đến excellence kỹ thuật
10. Đơn giản - tối đa hóa công việc không cần làm
11. Kiến trúc, yêu cầu, thiết kế nổi lên từ self-organizing teams
12. Định kỳ phản tư và điều chỉnh
\`\`\`

## Agile vs Waterfall

### Waterfall
\`\`\`
Requirements → Design → Development → Testing → Deployment

Characteristics:
- Sequential
- Big design upfront
- Long delivery cycles (6-24 months)
- Changes expensive
- Document-driven
- Working software at end
\`\`\`

### Agile
\`\`\`
Iteration 1: Req → Design → Dev → Test → Deploy
Iteration 2: Req → Design → Dev → Test → Deploy
Iteration 3: ...

Characteristics:
- Iterative & Incremental
- Just enough design
- Short iterations (1-4 weeks)
- Welcome changes
- Working software each iteration
- Customer collaboration
\`\`\`

### Khi nào dùng cái nào?
\`\`\`
Waterfall tốt khi:
- Yêu cầu rõ ràng, cố định
- Dự án nhỏ, ngắn
- Regulatory requirements
- Fixed-price contract
- Team nhỏ, senior

Agile tốt khi:
- Yêu cầu thay đổi
- Dự án phức tạp, dài
- Customer available
- Team có thể self-organize
- Time-to-market quan trọng
\`\`\`

## Agile Mindset

### Growth Mindset
\`\`\`
Fixed Mindset:
- "Tôi không thể làm được"
- Tránh thử thách
- Bỏ cuộc khi khó
- Bỏ qua feedback

Growth Mindset:
- "Tôi chưa làm được"
- Chấp nhận thử thách
- Kiên trì
- Học từ feedback
\`\`\`

### Empirical Process
\`\`\`
3 trụ cột:
1. Transparency: Thông tin minh bạch cho tất cả
2. Inspection: Kiểm tra thường xuyên
3. Adaptation: Điều chỉnh khi cần

Chu kỳ: Transparent → Inspect → Adapt → Repeat
\`\`\`

### Servant Leadership
\`\`\`
Scrum Master là servant-leader:
- Không ra lệnh
- Phục vụ team
- Loại bỏ obstacles
- Coach và mentor
- Tạo môi trường phát triển
\`\`\`

## Agile Frameworks

### Scrum (Chi tiết ở lesson sau)
\`\`\`
- Iterations: 2-4 tuần (Sprints)
- Roles: PO, SM, Dev Team
- Artifacts: Product Backlog, Sprint Backlog, Increment
- Ceremonies: Planning, Daily, Review, Retro
- Phổ biến nhất
\`\`\`

### Kanban
\`\`\`
- Continuous flow (không iterations)
- Visual board
- WIP limits
- Pull system
- Lead time, Cycle time
- Tốt cho support/maintenance
\`\`\`

### XP (Extreme Programming)
\`\`\`
- Pair programming
- TDD (Test-Driven Development)
- Continuous Integration
- Small releases
- Refactoring
- Simple design
\`\`\`

### SAFe (Scaled Agile Framework)
\`\`\`
- Enterprise-scale Agile
- Multiple teams
- Release Trains
- PI Planning
- Tốt cho organizations lớn
\`\`\`

### LeSS (Large-Scale Scrum)
\`\`\`
- Scaling Scrum
- Multiple teams, one product
- One PO, one backlog
- Simple as possible
\`\`\`

### Nexus
\`\`\`
- Scrum.org framework
- 3-9 teams
- Nexus Integration Team
- Nexus Sprint
\`\`\`

## Agile Metrics

### Velocity
\`\`\`
Story Points hoàn thành mỗi Sprint

Ví dụ:
Sprint 1: 25 points
Sprint 2: 28 points
Sprint 3: 32 points
Sprint 4: 30 points
Sprint 5: 35 points
Average: 30 points

Dùng để:
- Forecast (không so sánh teams)
- Không dùng làm KPI
- Team tự nguyện dùng
\`\`\`

### Burndown Chart
\`\`\`
- Trục X: Thời gian (ngày)
- Trục Y: Work remaining (points/hours)
- Đường lý tưởng: từ tổng work → 0
- Đường thực tế: theo dõi hàng ngày

Đọc:
- Phía trên đường lý tưởng → chậm
- Phía dưới → nhanh
- Đường phẳng → không tiến triển
\`\`\`

### Burnup Chart
\`\`\`
- Tổng scope (thay đổi?)
- Work completed
- So sánh hai đường

Ưu điểm so với burndown:
- Thấy scope changes
- Thấy progress rõ hơn
\`\`\`

### Lead Time & Cycle Time
\`\`\`
Lead Time: Từ khi tạo request → khi deliver
Cycle Time: Từ khi bắt đầu work → khi deliver

Ví dụ:
- Ticket tạo: 1/1
- Bắt đầu: 1/3
- Hoàn thành: 1/5
- Lead time: 4 ngày
- Cycle time: 2 ngày
\`\`\`

### Cumulative Flow Diagram (CFD)
\`\`\`
Stacked area chart theo thời gian:
- Y: Số items ở mỗi state
- X: Thời gian

Đọc:
- Band width: WIP
- Song song: flow ổn định
- Mở rộng: backlog tăng
- Thu hẹp: problem
\`\`\`

## Bài tập thực hành
Hãy so sánh Agile vs Waterfall cho 1 dự án cụ thể!`,
      exercises: [
        {
          id: "1-1",
          title: "Agile vs Waterfall Analysis",
          description: "Phân tích khi nào dùng Agile/Waterfall",
          instructions: `Cho 5 dự án sau, quyết định nên dùng Agile hay Waterfall và giải thích:

1. Xây dựng app mobile cho startup
2. Nâng cấp hệ thống ngân hàng core
3. Website bán hàng cho SME
4. Hệ thống y tế cần FDA approval
5. Nền tảng SaaS B2B đang phát triển

Với mỗi dự án:
- Chọn phương pháp
- Giải thích 3 lý do
- Rủi ro nếu chọn sai
- Cách áp dụng hiệu quả`,
          type: "theory",
          solution: `# Agile vs Waterfall Analysis

## 1. App Mobile cho Startup
**Chọn:** Agile

**Lý do:**
1. Requirements chưa rõ, cần validate với user
2. Cần ra mắt nhanh để có funding
3. Startup cần pivot khi cần

**Rủi ro nếu chọn Waterfall:**
- Xây xong nhưng user không cần
- Chậm time-to-market
- Không kịp thay đổi khi thị trường thay đổi

**Cách áp dụng:**
- Scrum với sprint 1-2 tuần
- Lean Startup (Build-Measure-Learn)
- MVP first, iterate
- User feedback liên tục

## 2. Nâng cấp hệ thống Ngân hàng Core
**Chọn:** Hybrid (Waterfall + Agile)

**Lý do:**
1. Compliance và audit requirements nghiêm ngặt
2. Cần tài liệu đầy đủ cho regulators
3. Nhưng vẫn cần iterative cho UX/features

**Rủi ro nếu chọn pure Agile:**
- Không đủ documentation
- Compliance issues
- Audit failures

**Cách áp dụng:**
- Waterfall cho: Architecture, Security, Compliance
- Agile cho: UI/UX, Features, Integrations
- Sprint review với stakeholders
- Formal change management

## 3. Website bán hàng cho SME
**Chọn:** Agile (Scrum)

**Lý do:**
1. Có thể dùng template/platform sẵn
2. Need quick wins
3. Budget limited

**Rủi ro nếu chọn Waterfall:**
- Tốn thời gian planning
- Không adaptive khi market changes
- Customer không thấy progress

**Cách áp dụng:**
- Scrum với sprint 2 tuần
- MVP: product catalog + checkout
- Then: marketing, analytics, etc.
- Frequent demos to stakeholder

## 4. Hệ thống Y tế cần FDA
**Chọn:** Waterfall + V-Model

**Lý do:**
1. Regulatory requirements
2. Safety-critical
3. Extensive documentation needed

**Rủi ro nếu chọn Agile:**
- FDA approval khó
- Traceability issues
- Safety concerns

**Cách áp dụng:**
- Waterfall cho: Requirements, Design, Validation
- Document mọi decision
- Risk management
- Quality gates

## 5. Nền tảng SaaS B2B
**Chọn:** Agile (Scrum/SAFe)

**Lý do:**
1. Complex, evolving requirements
2. Multiple stakeholders
3. Competitive market

**Rủi ro nếu chọn Waterfall:**
- Too slow
- Cannot iterate
- Miss market windows

**Cách áp dụng:**
- Scrum cho từng product area
- SAFe nếu multiple teams
- Continuous deployment
- Customer advisory boards
- Data-driven decisions`,
        },
      ],
    },
    {
      id: "2",
      title: "Scrum Framework Deep Dive",
      slug: "scrum-framework",
      duration: "80 phút",
      prerequisites: ["1"],
      content: `# Scrum Framework Deep Dive

## Scrum Overview

### Scrum Theory
\`\`\`
3 pillars:
1. Transparency: Mọi thứ visible
2. Inspection: Thường xuyên kiểm tra
3. Adaptation: Điều chỉnh khi cần

5 values:
1. Commitment: Cam kết với goal
2. Focus: Tập trung vào sprint goal
3. Openness: Cởi mở về challenges
4. Respect: Tôn trọng nhau
5. Courage: Can đảm làm đúng
\`\`\`

## 3 Roles

### Product Owner (PO)
\`\`\`
Trách nhiệm:
- Define product vision
- Manage Product Backlog
- Prioritize items
- Accept/reject work
- Talk to stakeholders
- Maximize value

KHÔNG:
- Manage team (không phải manager)
- Estimate work
- Assign tasks
- Implement solutions
- Attend daily

Skills:
- Business acumen
- Communication
- Decision making
- Negotiation
\`\`\`

### Scrum Master (SM)
\`\`\`
Trách nhiệm:
- Facilitate Scrum events
- Coach team on Scrum
- Remove obstacles
- Protect team
- Facilitate improvements
- Teach stakeholders

Servant Leadership:
- Phục vụ team
- Không command
- Tạo điều kiện
- Mentor

KHÔNG:
- Project manager
- Team lead
- Decision maker
\`\`\`

### Development Team
\`\`\`
Đặc điểm:
- Self-organizing
- Cross-functional
- Size: 3-9 người
- Full-time dedicated
- No titles (theo Scrum)
- Collective accountability

Skills (ví dụ):
- Developers
- Testers
- Designers
- DevOps
- Data

Trách nhiệm:
- Estimate
- Plan Sprint
- Deliver increment
- Self-manage
- Raise impediments
\`\`\`

## 5 Events

### 1. Sprint (Iteration)
\`\`\`
Duration: 2-4 tuần (thường 2)
Fixed length
Never extend

Bao gồm:
- Sprint Planning
- Daily Scrum
- Sprint Review
- Sprint Retrospective

Sprint Goal:
- 1 objective
- Shared by team
- Guide the work
- Không đổi mid-sprint
\`\`\`

### 2. Sprint Planning
\`\`\`
Khi: Đầu sprint
Duration: 2-4 giờ (2 tuần sprint)

3 topics:
1. WHY - Sprint Goal (value)
2. WHAT - Items selected (backlog)
3. HOW - Plan to deliver

Participants:
- PO (chủ trì)
- SM (facilitate)
- Dev team (toàn bộ)

Outputs:
- Sprint Goal
- Sprint Backlog
- Delivery plan
\`\`\`

### 3. Daily Scrum
\`\`\`
Khi: Mỗi ngày
Duration: 15 phút (time-boxed)
Format: Standup

3 questions (traditional):
1. Đã làm gì hôm qua?
2. Sẽ làm gì hôm nay?
3. Có obstacles?

Modern approach:
- Focus on Sprint Goal progress
- Update board
- Re-plan if needed

Best practices:
- Same time, same place
- On time, end on time
- Focused discussion
- Offline after (parking lot)
\`\`\`

### 4. Sprint Review
\`\`\`
Khi: Cuối sprint
Duration: 1-2 giờ
Participants: Team + stakeholders

Agenda:
1. Sprint overview
2. Demo increment
3. Feedback
4. Backlog updates
5. Next steps

Purpose:
- Inspect increment
- Adapt backlog
- Transparent
- Collaborative

Không phải:
- Status meeting
- Complaint session
\`\`\`

### 5. Sprint Retrospective
\`\`\`
Khi: Cuối sprint, sau Review
Duration: 1.5 giờ
Participants: SM + Dev team (không stakeholders)

Formats:
1. Start-Stop-Continue
2. Mad-Sad-Glad
3. 4Ls (Liked, Learned, Lacked, Longed for)
4. Sailboat
5. Timeline
6. Starfish

Outputs:
- Action items (2-3)
- Owners assigned
- Follow up in next retro

Purpose:
- Inspect process
- Improve
- Team building
- Open communication
\`\`\`

## 3 Artifacts

### Product Backlog
\`\`\`
Owned by: PO
Content: All desired features, changes
Order: Priority (value)

Structure:
- Epic → Feature → User Story → Task

Item format (User Story):
"As a [role], I want [feature], so that [benefit]"

Example:
"As a customer, I want to search products, 
so that I can find what I need quickly"

Attributes:
- ID
- Title
- Description
- Acceptance Criteria
- Priority
- Estimate
- Dependencies
\`\`\`

### Sprint Backlog
\`\`\`
Owned by: Dev Team
Content: Sprint Goal + selected items + plan

Format:
- Sprint Goal statement
- Selected Product Backlog items
- Task breakdown
- Estimates (hours/days)
- Assignment

Updated daily
Tự thay đổi trong sprint
\`\`\`

### Increment
\`\`\`
Định nghĩa: Tổng hợp các backlog items hoàn thành trong sprint
Điều kiện: Đáp ứng Definition of Done
Đặc điểm: Có thể sử dụng được (usable)
Quan trọng: Working software > documentation

Ví dụ Increment:
- Feature A: Completed + tested + deployed to staging
- Feature B: Completed + tested
- → Increment = A + B
\`\`\`

## Definition of Done (DoD)

### Ví dụ DoD cho team software
\`\`\`
☐ Code complete
☐ Code reviewed (peer)
☐ Unit tests written and passing
☐ Integration tests passing
☐ Acceptance criteria met
☐ No critical bugs
☐ Documentation updated
☐ Deployed to staging
☐ PO accepted
\`\`\`

### DoD tốt vs xấu
\`\`\`
TỐT:
- Rõ ràng, đo lường được
- Team thống nhất
- Rigorous enough
- Không thay đổi giữa các sprint
- Include quality standards

XẤU:
- Vague ("Done means done")
- Too weak (chỉ "code complete")
- Too strong (không thể achieve)
- Thay đổi liên tục
- Không có testing/quality
\`\`\`

## Scrum Anti-Patterns

### Common Anti-Patterns
\`\`\`
1. Scrum Master as Project Manager
2. Daily Scrum = status report to SM
3. PO không available
4. Sprint Goal không có
5. Mid-sprint changes
6. Skipping Retro
7. Retro không có action
8. Velocity as KPI
9. Micro-management
10. No stakeholder involvement
\`\`\`

## Scrum vs Kanban

\`\`\`
                Scrum                Kanban
Iterations      Fixed (2-4 weeks)    Continuous
Changes         No mid-sprint        Anytime
Roles           Defined (PO/SM/Dev)  Optional
Metrics         Velocity             Lead time
Ceremonies      Mandatory            Optional
WIP Limits      Sprint-based         Explicit limits
Best for        New products         Support, ops
\`\`\`

## Scaling Scrum

### Multiple Teams, One Product
\`\`\`
Options:
1. Scrum of Scrums
   - Daily sync between teams
   - Representative from each

2. SAFe
   - Full framework
   - PI Planning
   - Release Train Engineer

3. LeSS
   - Same PO, one backlog
   - Multiple teams
   - Sprint Planning Part 1 + 2

4. Nexus
   - Scrum.org
   - 3-9 teams
   - Nexus Integration Team
\`\`\`

## Bài tập thực hành
Hãy thiết kế Scrum setup cho một team!`,
      exercises: [
        {
          id: "2-1",
          title: "Scrum Setup Design",
          description: "Thiết kế Scrum cho team mới",
          instructions: `Team: 7 người (4 dev, 2 QA, 1 designer)
Product: E-commerce web app
Duration: 6 months
Stakeholders: CTO, Marketing Lead, Customer Support

Thiết kế:
1. Roles và responsibilities
2. Sprint duration và schedule
3. DoD cho team
4. Sample Sprint 1
5. Ceremonies chi tiết
6. Metrics tracking`,
          type: "theory",
          solution: `# Scrum Setup Design - E-commerce Team

## 1. Roles & Responsibilities

### Product Owner
\`\`\`
Person: Senior PM từ business side
Time: 100% dedicated

Responsibilities:
- Manage Product Backlog
- Prioritize features
- Accept/reject work
- Communicate with stakeholders (CTO, Marketing, CS)
- Define product vision

Tools: Jira, Confluence
Availability: Daily standup, Sprint planning, Review

Skills needed:
- E-commerce knowledge
- Customer insight
- Decision making
- Communication
\`\`\`

### Scrum Master
\`\`\`
Person: Experienced SM
Time: 100% (or 50% if part of another team)

Responsibilities:
- Facilitate ceremonies
- Coach team on Scrum
- Remove impediments
- Shield team from distractions
- Facilitate retrospectives

Certifications: PSM I/II, CSM
Availability: All ceremonies, on-call for impediments
\`\`\`

### Development Team (7)
\`\`\`
Roles (informal):
- 2 Backend Developers (Node.js, PostgreSQL)
- 2 Frontend Developers (React)
- 1 Full-stack Developer
- 2 QA Engineers
- 1 UX/UI Designer (part-time)

All skills needed:
- Full feature delivery
- Testing
- Deployment
- Design

Cross-functional:
- Không có "chỉ frontend" hoặc "chỉ backend"
- Ai cũng có thể test
- Ai cũng có thể help others
\`\`\`

## 2. Sprint Schedule

\`\`\`
Duration: 2 weeks

Monday Week 1:
- 9:00-11:00: Sprint Planning
- 11:00-17:00: Work

Daily:
- 9:30-9:45: Daily Scrum
- Rest of day: Work

Friday Week 2:
- 14:00-16:00: Sprint Review
- 16:00-17:30: Sprint Retrospective
- 17:30: Sprint end, next begins

Cadence:
- Sprint 1: Jan 1 - Jan 14
- Sprint 2: Jan 15 - Jan 28
- Sprint 3: Jan 29 - Feb 11
- ...
\`\`\`

## 3. Definition of Done

\`\`\`
☐ Code written, follows standards
☐ Code reviewed (1+ approvals)
☐ Unit tests written (80% coverage)
☐ Integration tests passing
☐ E2E tests for critical flows
☐ Acceptance criteria met
☐ No critical/high bugs
☐ Accessibility check (WCAG AA)
☐ Responsive (mobile/tablet/desktop)
☐ Performance: Page load < 3s
☐ Security: No OWASP Top 10 issues
☐ Documentation updated
☐ CHANGELOG updated
☐ Deployed to staging
☐ Product Owner accepted
\`\`\`

## 4. Sample Sprint 1

### Sprint Goal
"Deliver MVP product browsing experience"

### Selected Backlog Items (24 story points)
\`\`\`
US-001: Product listing page (5)
US-002: Product detail page (5)
US-003: Search functionality (3)
US-004: Category filter (3)
US-005: User registration (3)
US-006: User login (2)
US-007: Setup CI/CD pipeline (3)
\`\`\`

### Sprint Backlog
\`\`\`
Day 1:
- Setup project structure
- CI/CD pipeline
- Design mockups review

Days 2-4:
- US-001: Product listing
- US-005: User registration

Days 5-7:
- US-002: Product detail
- US-006: User login

Days 8-9:
- US-003: Search
- US-004: Category filter

Day 10:
- Testing, bug fixes
- Sprint Review prep
\`\`\`

## 5. Ceremonies Detail

### Sprint Planning (2h)
\`\`\`
Attendees: PO, SM, Dev Team
Time: 9:00-11:00 Monday Week 1

Agenda:
09:00-09:20: Why - Sprint Goal (PO presents)
09:20-10:00: What - Backlog review & selection
10:00-10:45: How - Task breakdown
10:45-11:00: Commit & summary

Inputs:
- Refined Product Backlog
- Team capacity
- Velocity average (25)

Outputs:
- Sprint Goal
- Sprint Backlog
- Task assignments
\`\`\`

### Daily Scrum (15 min)
\`\`\`
Time: 9:30 AM every day
Location: Team area / Zoom
Format: Standup

Questions:
1. What did I do yesterday toward Sprint Goal?
2. What will I do today?
3. Any obstacles?

Facilitation (SM):
- Start on time
- Keep focused
- Parking lot for deep topics
- Update board

After standup:
- 15 min for detailed discussions
\`\`\`

### Sprint Review (2h)
\`\`\`
Time: Friday 14:00-16:00 Week 2
Attendees: Team + Stakeholders

Agenda:
14:00-14:15: Sprint overview
14:15-14:45: Demo (working software)
14:45-15:15: Stakeholder feedback
15:15-15:45: Backlog review
15:45-16:00: Next sprint preview

Stakeholders:
- CTO
- Marketing Lead
- Customer Support
- Others invited

Output:
- Feedback documented
- Backlog updated
- Next sprint focus
\`\`\`

### Sprint Retrospective (1.5h)
\`\`\`
Time: Friday 16:00-17:30 Week 2
Attendees: SM + Dev Team

Format: Start-Stop-Continue

Agenda:
16:00-16:15: Set the stage
16:15-16:45: Gather data
16:45-17:15: Generate insights
17:15-17:25: Decide actions
17:25-17:30: Close

Actions (2-3 max):
- Owner assigned
- Due date
- Follow up next retro

Example actions:
1. Reduce WIP to 3 items per person
2. Improve code review process
3. Add automation for repetitive tasks
\`\`\`

## 6. Metrics Tracking

### Sprint Metrics
\`\`\`
| Sprint | Planned | Done | Velocity | Notes |
|--------|---------|------|----------|-------|
| 1 | 24 | 20 | 20 | Learning curve |
| 2 | 25 | 24 | 24 | Better estimation |
| 3 | 28 | 26 | 26 | |
| 4 | 26 | 25 | 25 | |
| 5 | 25 | 27 | 27 | |

Average velocity: 24.4
Forecast next sprint: 24-27

Burndown:
- Track daily
- Update at standup
- Visible on team board

Quality Metrics:
- Bugs: Track per sprint
- Code coverage: > 80%
- Escaped defects: Trending down
- CSAT: > 4.5

Team Health:
- Team morale: 4.2/5
- Retro actions completed: 80%
- Impediments resolved: 90%
\`\`\`

### Tools
\`\`\`
- Jira for backlog
- Confluence for docs
- Miro for retros
- Slack for communication
- GitHub for code
- Grafana for metrics
\`\`\`

## Communication Plan
\`\`\`
Internal:
- Daily: Standup
- Weekly: Sprint progress
- Sprint: Review, Retro

With Stakeholders:
- Monthly: Product update
- Sprint: Review
- Ad-hoc: Major decisions

With Users:
- Beta group for early access
- Quarterly NPS
- Feature releases
\`\`\``,
        },
      ],
    },
    {
      id: "3",
      title: "Product Owner và Backlog Management",
      slug: "product-owner-backlog",
      duration: "75 phút",
      prerequisites: ["2"],
      content: `# Product Owner và Backlog Management

## Product Owner Role Deep Dive

### PO Responsibilities
\`\`\`
Strategic:
- Product vision
- Roadmap
- Stakeholder management
- Business value maximization

Tactical:
- Backlog management
- Prioritization
- Refinement
- Acceptance criteria

Day-to-day:
- Answer team questions
- Clarify requirements
- Accept/reject work
- Attend ceremonies
\`\`\`

### PO Anti-Patterns
\`\`\`
1. Proxy PO (không quyết được)
2. Committee PO (nhiều PO)
3. Part-time PO (không focus)
4. Absent PO (không available)
5. Micromanager PO
6. Order-taker PO (chỉ ghi yêu cầu)
\`\`\`

## User Story

### Format
\`\`\`
As a [type of user],
I want [some goal]
So that [some reason/benefit]

Ví dụ:
As a registered customer,
I want to save products to a wishlist,
So that I can buy them later.

As an admin,
I want to export user data to CSV,
So that I can analyze it in Excel.
\`\`\`

### INVEST Criteria
\`\`\`
I - Independent: Không phụ thuộc story khác
N - Negotiable: Không phải contract cố định
V - Valuable: Có giá trị cho user
E - Estimable: Có thể estimate
S - Small: Fit trong 1 sprint
T - Testable: Có thể verify
\`\`\`

### Acceptance Criteria
\`\`\`
Format: Given-When-Then

Story: User login

Acceptance Criteria:
1. Given I am on login page
   When I enter valid credentials
   Then I am redirected to dashboard

2. Given I am on login page
   When I enter invalid password
   Then I see error "Invalid credentials"

3. Given I enter wrong password 3 times
   When I try again
   Then my account is locked for 30 minutes

4. Given I am on login page
   When I click "Forgot password"
   Then I see password reset flow
\`\`\`

### Story Splitting

**Ví dụ: User Story "Search products"**
\`\`\`
Too big (13 points): 
"As a user, I want to search products"

Split by workflow:
- Search by keyword (3)
- Search with filters (5)
- Search suggestions (3)
- Search history (2)

Split by data:
- Search products only (3)
- Search products + categories (5)
- Search all content (8)

Split by platform:
- Desktop search (5)
- Mobile search (5)
- API search (3)
\`\`\`

### Story Mapping
\`\`\`
User Activities (backbone):
Browse → Search → Add to Cart → Checkout → Pay → Confirm

Tasks (walking skeleton):
Browse: 
- View homepage
- View category
- View product detail

Search:
- Search bar
- Filters
- Sort

MVP line (draw horizontal):
- All "Browse" tasks
- Basic "Search"
- Basic "Add to Cart"
- Simple checkout

Then add:
- Advanced search
- Recommendations
- Multiple payment
- etc.
\`\`\`

## Backlog Management

### Backlog Structure
\`\`\`
Epic (large feature)
├── Feature 1
│   ├── User Story 1.1
│   ├── User Story 1.2
│   └── User Story 1.3
├── Feature 2
│   ├── User Story 2.1
│   └── User Story 2.2
└── Feature 3
    └── ...

Ví dụ:
Epic: "E-commerce Platform"
├── Feature: User Management
│   ├── Story: User registration
│   ├── Story: User login
│   └── Story: Password reset
├── Feature: Product Catalog
│   ├── Story: Product listing
│   └── Story: Product detail
└── Feature: Shopping Cart
    ├── Story: Add to cart
    └── Story: Remove from cart
\`\`\`

### Prioritization

**MoSCoW Method**
\`\`\`
Must have: Critical, non-negotiable
Should have: Important, not critical
Could have: Nice to have
Won't have: Not this time

Ví dụ (cho MVP):
Must:
- User registration
- Product listing
- Add to cart

Should:
- Search
- Filters

Could:
- Wishlist
- Reviews

Won't (now):
- Social features
- Advanced analytics
\`\`\`

**Weighted Shortest Job First (WSJF)**
\`\`\`
WSJF = Cost of Delay / Job Size

Cost of Delay = User Value + Time Criticality + Risk Reduction

Ví dụ:
Story A: Value=8, Time=5, Risk=3, Size=3
WSJF = (8+5+3)/3 = 5.3

Story B: Value=5, Time=5, Risk=2, Size=1
WSJF = (5+5+2)/1 = 12

→ B first (higher WSJF)
\`\`\`

**Kano Model**
\`\`\`
1. Must-be: Có thì không khen, thiếu thì chê
   Ví dụ: Login works

2. Performance: Càng tốt càng hài lòng
   Ví dụ: Faster load time

3. Attractive: Có thì wow, không thì không sao
   Ví dụ: Voice search

4. Indifferent: Không ai quan tâm
   Ví dụ: Feature nobody uses

5. Reverse: Có lại gây khó chịu
   Ví dụ: Too many notifications
\`\`\`

### Refinement (Grooming)
\`\`\`
Khi: Weekly, 1-2 giờ
Attendees: PO, SM, some Dev

Mục đích:
- Clarify stories
- Add AC
- Estimate
- Split if needed
- Re-order

Output:
- Next sprint stories ready
- 2-3 sprints refined ahead

Definition of Ready (DoR):
- Story format clear
- Acceptance criteria defined
- Estimated
- Small enough
- Dependencies known
- Testable
\`\`\`

## Roadmap

### Product Roadmap
\`\`\`
Now (0-3 months):
- MVP features
- Core user journeys

Next (3-6 months):
- Enhanced features
- User feedback items

Later (6-12 months):
- Advanced capabilities
- Innovation

Ví dụ E-commerce:
Q1: Basic shopping
- Product catalog
- Cart
- Checkout
- Payment (basic)

Q2: User experience
- User accounts
- Wishlist
- Reviews
- Search filters

Q3: Scale
- Multiple payment methods
- Shipping integration
- Inventory

Q4: Growth
- Recommendations
- Marketing tools
- Analytics
\`\`\`

### Roadmap Formats
\`\`\`
1. Timeline roadmap
   - Gantt-style
   - Risk: Commitments

2. Theme-based roadmap
   - Focus on outcomes
   - Flexible timing

3. Now-Next-Later
   - Simple, honest
   - Recommended

4. Goal-based roadmap
   - OKR-aligned
   - Outcome-focused
\`\`\`

## Stakeholder Management

### Stakeholder Mapping
\`\`\`
Power/Interest Grid:

High Power, High Interest:
- Manage closely
- CTO, Head of Product

High Power, Low Interest:
- Keep satisfied
- CFO, Legal

Low Power, High Interest:
- Keep informed
- Regular users, Support

Low Power, Low Interest:
- Monitor
- Peripheral teams
\`\`\`

### Communication Plan
\`\`\`
Weekly:
- Sprint progress email
- Team updates

Sprint:
- Sprint Review demo
- Feedback collection

Monthly:
- Product metrics
- Roadmap updates

Quarterly:
- Strategy review
- OKR planning

Ad-hoc:
- Major decisions
- Critical issues
\`\`\`

## Metrics

### Product Metrics
\`\`\`
Value Metrics:
- DAU/MAU ratio
- Feature adoption
- Conversion rate
- Revenue per user

Quality Metrics:
- NPS (Net Promoter Score)
- CSAT
- Churn rate
- Retention

Delivery Metrics:
- Time to market
- Feature cycle time
- Predictability
\`\`\`

### OKRs
\`\`\`
Objective: Improve user experience
Key Results:
- Increase NPS from 40 to 55
- Reduce support tickets by 30%
- Increase feature adoption by 25%

Objective: Scale infrastructure
Key Results:
- Support 10x traffic
- Reduce page load to < 2s
- Achieve 99.99% uptime
\`\`\`

## Bài tập thực hành
Hãy viết user stories và prioritize backlog!`,
      exercises: [
        {
          id: "3-1",
          title: "Product Backlog Creation",
          description: "Tạo và quản lý product backlog",
          instructions: `Cho sản phẩm: App đặt đồ ăn online (như GrabFood)

Tạo:
1. Product Vision
2. 3 Epics
3. 15 User Stories (phân bổ 3 epics)
4. Acceptance Criteria cho 5 stories
5. Prioritize với MoSCoW
6. Sprint 1 plan (10-15 points)
7. Definition of Ready`,
          type: "theory",
          solution: `# Product Backlog - Food Delivery App

## 1. Product Vision

\`\`\`
"Giúp mọi người đặt đồ ăn yêu thích một cách nhanh chóng,
tiện lợi và tin cậy, từ bất cứ đâu, bất cứ lúc nào."
\`\`\`

## 2. Epics

\`\`\`
Epic 1: User Onboarding
- Registration, login, profile

Epic 2: Restaurant & Menu
- Browse restaurants, view menus, search

Epic 3: Order & Delivery
- Cart, checkout, payment, tracking
\`\`\`

## 3. User Stories (15)

### Epic 1: User Onboarding (5 stories)
\`\`\`
US-001: Register with email (3 points)
As a new user,
I want to register with email,
So that I can start ordering food.

US-002: Login with email (2 points)
As a registered user,
I want to login,
So that I can access my account.

US-003: Login with Google (3 points)
As a user,
I want to login with Google,
So that I can skip registration.

US-004: Manage profile (3 points)
As a logged-in user,
I want to update my profile,
So that my info is current.

US-005: Reset password (3 points)
As a user who forgot password,
I want to reset it,
So that I can regain access.
\`\`\`

### Epic 2: Restaurant & Menu (5 stories)
\`\`\`
US-006: Browse restaurants (5 points)
As a hungry user,
I want to see restaurants near me,
So that I can choose where to eat.

US-007: View restaurant detail (3 points)
As a user interested in a restaurant,
I want to see its menu,
So that I can decide what to order.

US-008: Search restaurants (3 points)
As a user,
I want to search restaurants by name,
So that I can find a specific one.

US-009: Filter restaurants (5 points)
As a user,
I want to filter by cuisine, price, rating,
So that I can find the best match.

US-010: Sort restaurants (2 points)
As a user,
I want to sort by distance, rating,
So that I can pick the best option.
\`\`\`

### Epic 3: Order & Delivery (5 stories)
\`\`\`
US-011: Add to cart (3 points)
As a user,
I want to add items to cart,
So that I can order multiple items.

US-012: Checkout (5 points)
As a user,
I want to enter delivery address and confirm,
So that I can place an order.

US-013: Pay with card (5 points)
As a user,
I want to pay with credit card,
So that I can complete payment.

US-014: Pay with cash (2 points)
As a user,
I want to pay with cash,
So that I have an alternative.

US-015: Track order (5 points)
As a user who placed order,
I want to see real-time status,
So that I know when to expect food.
\`\`\`

## 4. Acceptance Criteria (5 stories)

### US-001: Register with Email
\`\`\`
Given I am on the registration page
When I enter valid email, phone, password
And click "Register"
Then I receive confirmation email
And I am logged in automatically

Given I enter invalid email
When I click "Register"
Then I see error "Please enter valid email"

Given I enter email that already exists
When I click "Register"
Then I see error "Email already registered"

Given password is less than 8 chars
When I click "Register"
Then I see error "Password must be at least 8 characters"
\`\`\`

### US-006: Browse Restaurants
\`\`\`
Given I am on home page
When page loads
Then I see list of restaurants within 5km
And each shows: name, image, rating, delivery time, min order

Given I scroll down
When I reach bottom
Then more restaurants load (infinite scroll)

Given location permission denied
When page loads
Then I see prompt to enable location
And can enter address manually

Given no restaurants available
When page loads
Then I see "No restaurants in your area yet"
\`\`\`

### US-011: Add to Cart
\`\`\`
Given I am on restaurant menu
When I tap "Add to Cart" on an item
Then item is added to cart
And cart badge increments

Given item already in cart
When I tap "Add to Cart" again
Then quantity increments

Given I have items from Restaurant A in cart
When I add item from Restaurant B
Then I see "Clear cart and add?"
And cart resets if confirmed

Given cart has items
When I tap cart icon
Then I see cart with items and total
\`\`\`

### US-012: Checkout
\`\`\`
Given I have items in cart
When I go to checkout
Then I see:
- Delivery address
- Delivery time (ASAP or scheduled)
- Payment method
- Order summary with total

Given I haven't set address
When I checkout
Then I'm prompted to add address

Given delivery fee computed
When I see order summary
Then fee shown transparently

Given I confirm order
When payment successful
Then I see "Order confirmed"
And receive order number
\`\`\`

### US-015: Track Order
\`\`\`
Given I placed an order
When I open order tracking
Then I see:
- Order status (confirmed, preparing, on the way, delivered)
- Estimated time
- Map with driver location
- Contact driver button

Given order status changes
When status updates
Then I receive push notification
And map updates automatically

Given order delivered
When user opens app
Then asks for rating and review
\`\`\`

## 5. MoSCoW Prioritization

### Must Have (MVP)
\`\`\`
US-001: Register email (3)
US-002: Login email (2)
US-006: Browse restaurants (5)
US-007: View menu (3)
US-011: Add to cart (3)
US-012: Checkout (5)
US-013: Pay with card (5)
US-015: Track order (5)

Total: 31 points
\`\`\`

### Should Have
\`\`\`
US-003: Login Google (3)
US-005: Reset password (3)
US-008: Search (3)
US-009: Filters (5)
US-014: Pay cash (2)

Total: 16 points
\`\`\`

### Could Have
\`\`\`
US-004: Profile (3)
US-010: Sort (2)

Total: 5 points
\`\`\`

### Won't Have (this release)
\`\`\`
- Referral program
- Subscription
- Group orders
- Meal planning
- Nutrition info
- Chat with driver
\`\`\`

## 6. Sprint 1 Plan

### Sprint Goal
"Users có thể browse và xem menu nhà hàng"

### Capacity
- 7 người × 10 ngày × ~5h effective = ~35h (1 sprint)
- Velocity ước tính: 20-25 points

### Selected Items (22 points)
\`\`\`
US-001: Register email (3) - Full stack
US-002: Login email (2) - Full stack
US-006: Browse restaurants (5) - Frontend + API
US-007: View menu (3) - Frontend + API
US-003: Login Google (3) - Frontend
US-008: Search (3) - Full stack
US-013: Pay card (5) - Backend integration
\`\`\`

### Sprint Backlog Tasks
\`\`\`
Day 1: Setup & Design
- Setup infrastructure
- Design review

Days 2-4: Backend APIs
- Auth API (register/login)
- Restaurant listing API
- Menu API
- Search API

Days 3-6: Frontend
- Registration form
- Login page
- Restaurant list
- Menu view
- Search bar

Days 5-8: Integration
- Payment integration
- Testing

Days 9-10:
- Bug fixes
- Sprint Review prep
\`\`\`

## 7. Definition of Ready

\`\`\`
☐ User story format (As a, I want, So that)
☐ Acceptance criteria written
☐ Estimated by team
☐ Fits within a sprint
☐ Dependencies identified
☐ Design mockups ready
☐ Technical approach discussed
☐ Testable
☐ Prioritized
☐ No blocking questions
\`\`\``,
        },
      ],
    },
    {
      id: "4",
      title: "Scrum Master và Facilitation",
      slug: "scrum-master-facilitation",
      duration: "70 phút",
      prerequisites: ["3"],
      content: `# Scrum Master và Facilitation

## Scrum Master Role

### 3 Areas of Service
\`\`\`
1. Serve the Product Owner
   - Techniques for backlog management
   - Understand product planning
   - Facilitate stakeholder collaboration

2. Serve the Development Team
   - Coach self-organization
   - Remove impediments
   - Facilitate events
   - Coach cross-functionality

3. Serve the Organization
   - Lead Scrum adoption
   - Coach stakeholders
   - Remove barriers
   - Work with other SMs
\`\`\`

### Scrum Master vs Project Manager

| Aspect | Scrum Master | Project Manager |
|--------|--------------|-----------------|
| Focus | Process & team | Delivery & scope |
| Authority | Servant leader | Formal authority |
| Team | Coaches | Directs |
| Planning | Facilitates | Creates plans |
| Risk | Removes impediments | Manages risks |
| Success | Team maturity | Project delivery |
| Reports | Team health | Status to stakeholders |

## Facilitation Skills

### Facilitator vs Presenter
\`\`\`
Presenter:
- Truyền đạt
- One-way
- Audience passive
- Outcome: Information shared

Facilitator:
- Hướng dẫn
- Two-way
- Participants active
- Outcome: Decision/conclusion
\`\`\`

### Core Facilitation Skills
\`\`\`
1. Active Listening
   - Nghe để hiểu, không phải để trả lời
   - Không ngắt lời
   - Note-taking
   - Paraphrasing

2. Questioning
   - Open-ended: "What, How, Why"
   - Clarifying: "Can you explain..."
   - Probing: "What else?"
   - Reframing: "So you're saying..."

3. Observing
   - Body language
   - Energy level
   - Participation balance
   - Group dynamics

4. Intervening
   - Redirect when off-topic
   - Equalize participation
   - Handle conflict
   - Parking lot
\`\`\`

### Meeting Facilitation

**Preparation (5 W's):**
\`\`\`
Why: Purpose of meeting
What: Agenda, topics
Who: Required, optional attendees
When: Time, duration
Where: Location, tools
\`\`\`

**During:**
\`\`\`
- Start on time
- Review agenda
- Set ground rules
- Park off-topics
- Time-box
- Summarize decisions
- Assign actions
- End on time
\`\`\`

**After:**
\`\`\`
- Send minutes
- Track actions
- Follow up
- Gather feedback
\`\`\`

## Obstacle Removal

### Types of Impediments
\`\`\`
Team-level:
- Skill gaps
- Technical debt
- Slow builds
- Unclear requirements
- Dependencies

Organizational:
- Processes
- Bureaucracy
- Tools not available
- Organizational structure
- Resource constraints

External:
- Vendor delays
- Compliance
- Third-party API issues
- Customer availability
\`\`\`

### Impediment Log
\`\`\`
| ID | Description | Owner | Priority | Status | Notes |
|----|-------------|-------|----------|--------|-------|
| 1 | Cannot access prod DB | SM | High | In Progress | Ticket #1234 |
| 2 | Slow CI build | DevOps | Medium | Open | 15min builds |
| 3 | Missing designer | PO | High | Resolved | Contract signed |
\`\`\`

### Impediment Removal Process
\`\`\`
1. Identify
   - Daily standup
   - Retro
   - Team observation

2. Log it
   - Add to log
   - Categorize
   - Prioritize

3. Analyze
   - Root cause
   - Impact
   - Solutions

4. Act
   - SM handles if possible
   - Escalate if needed
   - Track progress

5. Follow up
   - Verify resolution
   - Close in log
   - Update team
\`\`\`

## Coaching

### Coaching vs Mentoring vs Teaching
\`\`\`
Teaching:
- Telling how
- Transfer knowledge
- Subject-focused

Mentoring:
- Sharing experience
- Career-oriented
- Long-term

Coaching:
- Asking questions
- Self-discovery
- Skills growth
- Present-focused
\`\`\`

### GROW Model
\`\`\`
G - Goal: What do you want?
R - Reality: What's happening now?
O - Options: What could you do?
W - Will: What will you do?
\`\`\`

### Powerful Questions
\`\`\`
Instead of "Did you try...":
"What have you tried so far?"
"What would you do if I weren't here?"

Instead of "The problem is...":
"What's your understanding of the problem?"
"What's the impact?"

Instead of "You should...":
"What options do you see?"
"What would success look like?"
\`\`\`

### Coaching Team Self-Organization
\`\`\`
Stage 1: Forming
- SM provides more structure
- Team learning

Stage 2: Storming
- Conflicts arise
- SM coaches, not solves

Stage 3: Norming
- Team builds norms
- SM steps back

Stage 4: Performing
- Self-organized
- SM mostly observes

Stage 5: Adjourning
- Team dissolves
- Celebrate
\`\`\`

## Conflict Resolution

### Thomas-Kilmann Model
\`\`\`
Assertive ↑
    │
    │  Competing   Collaborating
    │  (Win-Lose)  (Win-Win)
    │
    │  Compromising
    │
    │  Avoiding    Accommodating
    │  (Lose-Lose) (Lose-Win)
    └─────────────────────────→
                              Cooperative
\`\`\`

### When to Use
\`\`\`
Competing:
- Emergency
- Unpopular decisions
- Quick decision needed

Collaborating:
- Complex issue
- Long-term solution
- Time available

Compromising:
- Time-limited
- Equal power
- Temporary solution

Avoiding:
- Trivial matter
- Cool down needed
- Other issues more important

Accommodating:
- You're wrong
- Relationship matters
- Build goodwill
\`\`\`

### Conflict Resolution Process
\`\`\`
1. Acknowledge
   "I notice some tension about X"

2. Private conversations
   Talk to each separately first

3. Joint meeting
   Facilitate discussion

4. Focus on interest
   Not positions

5. Find common ground
   Win-win solution

6. Agree on actions
   Document, follow up
\`\`\`

## Team Building

### Tuckman's Stages
\`\`\`
Forming → Storming → Norming → Performing
   ↓         ↓          ↓          ↓
Polite   Conflicts   Cohesive   High-perf
Guidance  Mediation  Support    Delegate
\`\`\`

### Team Health Check
\`\`\`
Anonymous survey (quarterly):
1. We deliver quality work
2. We have clear goals
3. We collaborate well
4. We have right skills
5. We're recognized for work
6. We can raise issues
7. We learn from mistakes
8. We have fun

Scale: 1-5
Track over time
Discuss in retro
\`\`\`

### Team Building Activities
\`\`\`
Low-effort:
- Daily appreciations
- Team lunch
- Coffee breaks
- Show & tell

Medium-effort:
- Retro variations
- Personal user manuals
- Team canvas
- Vision board

High-effort:
- Off-site retreat
- Workshop
- Team charter
- Community project
\`\`\`

## Metrics for Scrum Master

### Team Metrics
\`\`\`
Team Health:
- Morale score
- Engagement
- Turnover

Process:
- Velocity trend
- Sprint predictability
- Ceremony attendance
- Ceremony effectiveness (survey)

Quality:
- Defect escape rate
- Technical debt
- Code review metrics

Delivery:
- Lead time
- Cycle time
- Throughput
\`\`\`

### SM Self-Assessment
\`\`\`
1. Team is self-organizing?
2. Impediments removed quickly?
3. Ceremonies effective?
4. Retro actions implemented?
5. Team members growing?
6. Stakeholders engaged?
7. Continuous improvement happening?
\`\`\`

## Bài tập thực hành
Hãy luyện facilitation và coaching!`,
      exercises: [
        {
          id: "4-1",
          title: "Scrum Master Scenarios",
          description: "Xử lý các tình huống Scrum Master",
          instructions: `Xử lý các tình huống:

Scenario 1: Daily Scrum kéo dài 45 phút, nhiều người nói lan man
Scenario 2: Team estimate 30 points nhưng chỉ deliver 15
Scenario 3: PO liên tục đổi requirements mid-sprint
Scenario 4: 2 developers có conflict về technical approach
Scenario 5: Stakeholder không tham gia Sprint Review
Scenario 6: Team skip Retro vì "không có gì mới"

Với mỗi scenario:
1. Phân tích root cause
2. Hành động ngay (immediate)
3. Giải pháp dài hạn (long-term)
4. Coaching opportunity`,
          type: "theory",
          solution: `# Scrum Master Scenarios Solutions

## Scenario 1: Daily Scrum 45 phút

### Root Cause
\`\`\`
- Không có time-box enforcement
- Detailed technical discussions
- Không focused on Sprint Goal
- SM không facilitate properly
- Missing "parking lot" concept
\`\`\`

### Immediate Action
\`\`\`
1. Intervene gently: "Let's take this offline"
2. Redirect to 3 questions
3. Note issues for after standup
4. End at 15 min regardless
5. Announce: "Let's continue after in the parking lot"
\`\`\`

### Long-term Solution
\`\`\`
1. Revisit Daily Scrum purpose with team
2. Use timer prominently
3. Stand up (not sit)
4. Update board during standup
5. Follow-up session for deep topics (post-standup)
6. Rotate facilitator
\`\`\`

### Coaching Opportunity
\`\`\`
- Ask: "What's the purpose of standup?"
- Discuss: Sprint Goal focus
- Teach: Parking lot technique
- Practice: Time-boxing
- Review: After 2 weeks
\`\`\`

## Scenario 2: Estimate 30, Deliver 15

### Root Cause
\`\`\`
- Overestimating capacity (holidays, meetings, support)
- Optimistic estimation
- Unclear stories
- Interruptions not accounted
- Technical surprises
\`\`\`

### Immediate Action
\`\`\`
1. Review in Retrospective
2. Check capacity calculation
3. Identify interruptions
4. Look at "done" vs "almost done"
5. Adjust next sprint forecast
\`\`\`

### Long-term Solution
\`\`\`
1. Better capacity calculation:
   - Team members × working days
   - Minus: PTO, holidays, meetings, support
   - Minus: Ceremonies time
   
2. Example:
   7 people × 10 days = 70 days
   - PTO: -5 days
   - Meetings: -5 days
   - Support: -10 days
   - Ceremonies: -5 days
   Net: 45 days ≈ 22 points

3. Use planning poker
4. Split large stories
5. Track "yesterday's weather"
\`\`\`

### Coaching Opportunity
\`\`\`
- Retrospective focus: Why differences?
- Teaching: Capacity vs. Velocity
- Practice: Better estimation
- Review: Trend over 3-5 sprints
\`\`\`

## Scenario 3: PO Đổi Requirements Mid-Sprint

### Root Cause
\`\`\`
- PO không hiểu Sprint commitment
- Stakeholder pressure
- Chưa có Sprint Goal rõ
- PO không được coach
\`\`\`

### Immediate Action
\`\`\`
1. Private conversation với PO
2. Remind Sprint Goal commitment
3. If critical: Discuss with team
4. Team decides (không phải SM hay PO)
5. Document impact on Sprint Goal
\`\`\`

### Long-term Solution
\`\`\`
1. Strengthen Sprint Goal:
   - Clear objective
   - Value-focused
   - Team commits

2. Coach PO:
   - Sprint is time-box
   - Changes go to backlog
   - Exception: Only if Sprint Goal becomes obsolete

3. Educate stakeholders:
   - Predictability value
   - Cost of changes
   - Next Sprint window
\`\`\`

### Coaching Opportunity
\`\`\`
- Teach: Sprint is contract
- Practice: Saying no
- Build: Trust với team
- Review: Sprint Goal achievement
\`\`\`

## Scenario 4: Developer Conflict

### Root Cause
\`\`\`
- Technical disagreement
- Ego
- Different experience levels
- Poor communication
- Unresolved past issues
\`\`\`

### Immediate Action
\`\`\`
1. Separate conversations first
   - Understand each side
   - Empathize
   - Don't take sides

2. Joint meeting
   - Neutral location
   - Focus on facts, not persons
   - Listen actively
   - Find common goal
\`\`\`

### Long-term Solution
\`\`\`
1. Technical decision process:
   - Spike if needed
   - Prototype both approaches
   - Data-driven decision
   - Team votes

2. Communication agreement:
   - Respect each other
   - Attack problem, not person
   - Follow up regularly

3. Team norms:
   - Code review guidelines
   - Architecture decisions
   - Learning from each other
\`\`\`

### Coaching Opportunity
\`\`\`
- Teach: Conflict is normal
- Practice: Crucial conversations
- Build: Trust and respect
- Review: Team dynamics
\`\`\`

## Scenario 5: Stakeholder Không Tham Gia Review

### Root Cause
\`\`\`
- Không thấy value
- Busy schedule
- Không được invite properly
- Review không hấp dẫn
- Không có "shiny demo"
\`\`\`

### Immediate Action
\`\`\`
1. Reach out to key stakeholders
2. Ask what they want to see
3. Adjust Review format
4. Send calendar invite with agenda
5. Send reminder 1 day before
\`\`\`

### Long-term Solution
\`\`\`
1. Make Review valuable:
   - Focus on working software
   - Show business value
   - Collect real feedback
   - No PPT slides

2. Communication:
   - Regular cadence
   - Clear agenda
   - Highlight their input matters

3. Follow-up:
   - Send summary
   - Show how feedback used
   - Build relationship

4. Executive sponsor:
   - Get buy-in
   - Influence other stakeholders
\`\`\`

### Coaching Opportunity
\`\`\`
- Teach: Value of Inspection
- Practice: Storytelling demos
- Build: Stakeholder relationships
- Review: Engagement metrics
\`\`\`

## Scenario 6: Skip Retrospective

### Root Cause
\`\`\`
- Không thấy value
- Actions không được implement
- Same discussion mỗi lần
- Too busy với delivery
- Poorly facilitated
\`\`\`

### Immediate Action
\`\`\`
1. Ask team: "What's happening?"
2. Listen to concerns
3. Share purpose of retro
4. Acknowledge past issues
\`\`\`

### Long-term Solution
\`\`\`
1. Make retros meaningful:
   - Vary formats (không lặp lại)
   - Focus on 1-2 topics
   - Actionable outcomes
   - Follow up on actions

2. Show impact:
   - Track actions completed
   - Show improvements made
   - Celebrate wins

3. Make it safe:
   - Confidential
   - No blame
   - Team-only
   - SM participates, not leads

4. Address blockers:
   - If team overloaded → Address capacity
   - If actions ignored → Escalate
\`\`\`

### Coaching Opportunity
\`\`\`
- Teach: Continuous improvement
- Practice: Retro formats
- Build: Psychological safety
- Review: Action completion rate
\`\`\`

## General SM Principles

### When in doubt, ask:
\`\`\`
1. Is the team self-organizing?
2. Am I enabling or directing?
3. What's the team's feedback?
4. What does Scrum guide say?
5. Am I over-functioning?
6. What's the root cause?
\`\`\`

### Coaching Questions
\`\`\`
Instead of telling:
- "What have you tried?"
- "What's your theory?"
- "How could you find out?"
- "What would help?"
- "What would you like to do?"

Instead of problem-solving:
- "What's the real problem?"
- "Who else is impacted?"
- "What would success look like?"
- "What's in your control?"
- "What's the first step?"
\`\`\``,
        },
      ],
    },
    {
      id: "5",
      title: "Agile Metrics và Scaling",
      slug: "agile-metrics-scaling",
      duration: "80 phút",
      prerequisites: ["4"],
      content: `# Agile Metrics và Scaling

## Agile Metrics

### Why Metrics?
\`\`\`
Good metrics:
- Guide decisions
- Reveal trends
- Inspect & adapt
- Transparent

Bad uses:
- Performance reviews
- Comparison between teams
- Gaming the system
- Micromanagement
\`\`\`

### Leading vs Lagging Indicators
\`\`\`
Leading:
- Predictive
- Early signals
- Actions now
Ví dụ: Test coverage, WIP, Cycle time

Lagging:
- Outcome-based
- After the fact
Ví dụ: Bugs in production, Revenue, NPS

Best: Both
\`\`\`

## Velocity

### Definition
\`\`\`
Velocity = Sum of story points completed per Sprint

Track:
- Over 5+ sprints
- Average, not single sprint
- Trend, not absolute

Ví dụ:
Sprint 1: 25
Sprint 2: 30
Sprint 3: 28
Sprint 4: 32
Sprint 5: 35
Average: 30
Trend: Increasing

Forecast:
Next sprint: 30-35 points
Release (10 sprints): 300-350 points
\`\`\`

### Velocity Anti-patterns
\`\`\`
1. Use as KPI for individuals
2. Compare teams
3. Bonus based on velocity
4. Inflate story points
5. Decrease story points same work

Better:
- Use for forecasting
- Focus on value delivered
- Team commitment
\`\`\`

## Burndown Chart

### Types
\`\`\`
Sprint Burndown:
- X: Days in sprint
- Y: Story points remaining
- Update: Daily

Release Burndown:
- X: Sprints
- Y: Story points remaining
- Tracked: Per sprint
\`\`\`

### Reading Burndown
\`\`\`
Ideal line: Straight line from total to 0

Actual:
- Above ideal: Behind
- Below ideal: Ahead
- Flat: Blocked/stuck
- Going up: Scope added

Ví dụ:
Day 0: 30
Day 1: 28
Day 2: 26
Day 3: 26 (flat - problem!)
Day 4: 20 (recovered)
...
Day 10: 0 ✓
\`\`\`

## Burnup Chart

### Structure
\`\`\`
Lines:
- Total scope (may change)
- Work completed

Ví dụ:
Sprint 1: Scope 50, Done 30
Sprint 2: Scope 55, Done 50
Sprint 3: Scope 60, Done 55

Advantages vs Burndown:
- Shows scope changes
- Progress visible
- Easier to read
\`\`\`

## Cumulative Flow Diagram (CFD)

### Structure
\`\`\`
Stacked area chart:
Y-axis: Number of items
X-axis: Time

Bands (bottom to top):
- Done
- In Testing
- In Progress
- Ready for Dev
- Backlog

Read:
- Band width = WIP
- Parallel bands = Flow
- Widen = Increasing WIP
- Narrow = Decreasing WIP
\`\`\`

### CFD Patterns
\`\`\`
Healthy: Parallel bands, steady flow

Problem 1: "In Progress" widening
→ Too much WIP, need to focus

Problem 2: "Testing" widening
→ Bottleneck, need more testers or automation

Problem 3: "Backlog" widening
→ Scope growing faster than delivery

Problem 4: Bands not parallel
→ Inconsistent flow
\`\`\`

## Lead Time & Cycle Time

### Definitions
\`\`\`
Lead Time:
From: Request created
To: Request delivered
Includes: Wait + Work time

Cycle Time:
From: Work started
To: Work delivered
Only: Actual work time
\`\`\`

### Ví dụ
\`\`\`
Story timeline:
Jan 1: Created
Jan 3: Moved to In Progress
Jan 5: Moved to Testing
Jan 6: Deployed

Lead Time: Jan 1 → Jan 6 = 5 days
Cycle Time: Jan 3 → Jan 6 = 3 days
Wait Time: Jan 1 → Jan 3 = 2 days

Improvements:
- Reduce lead time (earlier start)
- Reduce cycle time (faster work)
- Reduce wait time (less queue)
\`\`\`

### Little's Law
\`\`\`
Cycle Time = WIP / Throughput

Ví dụ:
WIP = 20 items
Throughput = 4 items/week
Cycle Time = 20/4 = 5 weeks

To reduce cycle time:
- Reduce WIP
- Increase throughput
- Both
\`\`\`

## Throughput

### Definition
\`\`\`
Throughput = Items completed per time period

Track:
- Daily
- Weekly
- Sprint

Ví dụ:
Week 1: 5 stories
Week 2: 6 stories
Week 3: 4 stories
Week 4: 7 stories

Average: 5.5 stories/week
\`\`\`

## Flow Metrics

### Flow Distribution
\`\`\`
Types:
- Story: 60%
- Bug: 25%
- Tech Debt: 10%
- Support: 5%

Healthy:
- Story > 70%
- Bug < 15%
- Balanced

Warning:
- Bug > 30%: Quality issue
- Support > 20%: Operational issue
\`\`\`

### Flow Efficiency
\`\`\`
Flow Efficiency = Work Time / Total Time × 100%

Ví dụ:
Total time: 5 days
Work time: 2 days
Wait time: 3 days
Efficiency = 2/5 = 40%

Industry average: 15-40%
Best-in-class: > 50%
\`\`\`

## Scaling Agile

### When to Scale?
\`\`\`
Signals:
- Multiple teams
- Same product
- Coordination needed
- Dependencies common
- Shared architecture
- Same customer

Not scaled when:
- Independent products
- Different business units
- Stable interfaces
\`\`\`

### Scaling Frameworks

**1. Scrum of Scrums**
\`\`\`
Structure:
- Multiple Scrum teams
- Each sends 1-2 representatives
- Daily sync (SoS)
- Weekly coordination

Pros:
- Simple
- Low overhead
- Flexible

Cons:
- Limited scaling
- Communication gaps
- No architectural focus

Best for: 2-5 teams
\`\`\`

**2. SAFe (Scaled Agile Framework)**
\`\`\`
Structure:
- Team level: Scrum teams
- Program level: Agile Release Train (ART)
- Large Solution: Multiple ARTs
- Portfolio: Strategic

Key elements:
- PI Planning (quarterly, 2 days)
- Program Increment (8-12 weeks)
- Release Train Engineer (RTE)
- System Architect
- Product Management

Ceremonies:
- PI Planning
- Scrum of Scrums
- PO Sync
- System Demo
- Inspect & Adapt
- ART Sync

Pros:
- Comprehensive
- Enterprise-ready
- Well documented

Cons:
- Heavy
- Can be bureaucratic
- Requires training

Best for: 50+ people, enterprises
\`\`\`

**3. LeSS (Large-Scale Scrum)**
\`\`\`
Structure:
- One Product Owner
- One Product Backlog
- Multiple teams (2-8+)
- Same Sprint

Ceremonies:
- Sprint Planning 1 (all teams)
- Sprint Planning 2 (per team)
- Daily Scrum (per team)
- SoS (Scrum of Scrums)
- Overall Retro

Rules:
- Same length sprint
- Same Definition of Done
- Common codebase

Pros:
- Simple rules
- Team autonomy
- Less overhead

Cons:
- Hard to adopt
- Requires disciplined teams
- Organizational change

Best for: Product companies
\`\`\`

**4. Nexus**
\`\`\`
Structure:
- Scrum.org framework
- 3-9 Scrum teams
- Nexus Integration Team (NIT)
- One Product Backlog

Ceremonies:
- Nexus Sprint Planning
- Nexus Daily Scrum
- Nexus Sprint Review
- Nexus Sprint Retro

Focus:
- Dependencies
- Integration
- Common goals

Pros:
- Scrum-aligned
- Simple
- Well-defined

Cons:
- Newer
- Less adoption

Best for: Scrum.org users
\`\`\`

### Scaling Comparison
\`\`\`

| Aspect | SoS | SAFe | LeSS | Nexus |
|--------|-----|------|------|-------|
| Teams | 2-5 | 50+ | 2-8+ | 3-9 |
| Complexity | Low | High | Medium | Medium |
| Ceremony | Light | Heavy | Medium | Medium |
| Framework | Simple | Full | Minimal | Scrum-aligned |
| Cost | Low | High | Medium | Low |
| Adoption | Easy | Complex | Hard | Medium |
\`\`\`

## Cross-Team Dependencies

### Types
\`\`\`
1. Same codebase
   - Merge conflicts
   - Breaking changes

2. Shared services
   - API changes
   - Versioning

3. Shared resources
   - Test environment
   - DevOps support

4. Sequential work
   - Team A waits for Team B
   - Handoffs

5. Architectural
   - Platform changes
   - Standards
\`\`\`

### Managing Dependencies
\`\`\`
1. Identify early
   - PI Planning
   - Dependency mapping
   - Board visualization

2. Minimize
   - Architecture
   - API-first
   - Team topology
   - Vertical slicing

3. Coordinate
   - Regular syncs
   - Slack channels
   - Joint refinement
   - Pair work

4. Visualize
   - Dependency board
   - Colored strings
   - Owner tracking
\`\`\`

## Scaled Ceremonies

### PI Planning (SAFe)
\`\`\`
Duration: 2 days
Frequency: Every 8-12 weeks

Attendees:
- All teams
- Product Managers
- Architects
- Stakeholders

Agenda Day 1:
- Business context
- Product vision
- Architecture vision
- Team breakouts (plan)
- Draft plans

Agenda Day 2:
- Draft plan review
- Management review
- Adjust
- Final plan
- Confidence vote

Outputs:
- PI Objectives
- Team PI plans
- Program Board
- Risks
\`\`\`

### Scrum of Scrums
\`\`\`
Frequency: Daily or 2-3x/week
Duration: 15 min
Attendees: 1-2 from each team

Questions:
1. What did team do?
2. What will team do?
3. What blockers?
4. What dependencies?
5. What risks?

Follow-up: After sync
\`\`\`

## Agile Transformation

### Kotter's 8 Steps
\`\`\`
1. Create urgency
2. Build guiding coalition
3. Form vision
4. Communicate vision
5. Empower action
6. Create short-term wins
7. Consolidate gains
8. Anchor changes
\`\`\`

### Common Pitfalls
\`\`\`
1. "Doing" Agile, not "Being" Agile
   - Ceremonies only
   - No mindset change

2. Top-down push
   - No buy-in
   - Resistance

3. Too fast
   - Everything at once
   - Overwhelming

4. Not enough training
   - Teams don't know how
   - Bad practices

5. No executive support
   - Middle managers block
   - Budgets unchanged

6. Copy-paste
   - One size fits all
   - No context

7. Metrics misuse
   - Velocity as KPI
   - Performance reviews

8. Stop halfway
   - Revert to old ways
   - Cynicism
\`\`\`

### Success Factors
\`\`\`
1. Executive sponsorship
2. Middle management engaged
3. Coaches experienced
4. Clear vision
5. Training investment
6. Patience (2-5 years)
7. Cultural fit
8. Metrics aligned
9. Continuous improvement
10. Celebrate wins
\`\`\`

## Bài tập thực hành
Hãy thiết kế scaling approach cho tổ chức!`,
      exercises: [
        {
          id: "5-1",
          title: "Scaling Strategy Design",
          description: "Thiết kế chiến lược scaling Agile",
          instructions: `Công ty TechCorp có:
- 120 nhân viên IT
- 10 Scrum teams (12 người/team)
- 3 products (B2B SaaS)
- HQ ở Hà Nội, chi nhánh HCM
- Hiện tại: Multiple Scrum teams, no scaling framework
- Problems: 
  * Dependencies phức tạp
  * Integration issues
  * Release coordination khó
  * Cross-team communication gaps

Thiết kế:
1. Chọn scaling framework phù hợp
2. Cấu trúc teams
3. Ceremonies ở các level
4. Roles mới
5. Metrics để track scaling success
6. 6-month roadmap
7. Risks và mitigation`,
          type: "theory",
          solution: `# Scaling Strategy - TechCorp

## 1. Framework Recommendation

**Chọn: SAFe + Scrum of Scrums Hybrid**

**Lý do:**
- 10 teams (đủ lớn cho SAFe)
- 3 products (cần coordination)
- Enterprise scale
- Có thể adopt progressively

**Alternative options:**
- LeSS: Too disruptive for 10 teams
- Nexus: Max 9 teams
- SoS only: Không đủ structure

## 2. Team Structure

### Team Organization
\`\`\`
Product 1: B2B CRM
├── Team 1: Core platform (Backend)
├── Team 2: User interface (Frontend)
├── Team 3: Integrations
└── Team 4: Reporting

Product 2: B2B Analytics
├── Team 5: Data platform
├── Team 6: Analytics engine
└── Team 7: Visualization

Product 3: B2B Workflow
├── Team 8: Workflow engine
├── Team 9: UI & integrations
└── Team 10: Mobile

Shared Services:
├── Platform/DevOps (existing team)
└── QA/Test (existing team)
\`\`\`

### Team Compositions
\`\`\`
Each product team (7-10 people):
- 1 Product Owner (shared for product)
- 1 Scrum Master (may serve 2 teams)
- 4-6 Developers
- 1-2 QA Engineers
- 1 Designer (shared)

Cross-functional:
- All skills to deliver end-to-end
- Không phụ thuộc other teams
\`\`\`

## 3. Ceremonies by Level

### Team Level (Daily/Sprint)
\`\`\`
- Daily Scrum (15 min, per team)
- Sprint Planning (2h, per team)
- Sprint Review (1.5h, per team)
- Sprint Retro (1.5h, per team)
- Refinement (1h/week, per team)
\`\`\`

### Product Level (Sprint/Week)
\`\`\`
- Scrum of Scrums (Daily 15 min)
  * 1 rep from each team
  * Cross-team coordination
  
- PO Sync (Weekly 1h)
  * 3 POs + Product Managers
  * Backlog alignment

- Integration Sync (Weekly 1h)
  * Tech leads
  * Architecture, API changes

- System Demo (End of PI, 2h)
  * Integrated demo
  * All teams + stakeholders
\`\`\`

### Portfolio Level (Quarter)
\`\`\`
- PI Planning (2 days, every 10 weeks)
  * All teams
  * Business & Architecture vision
  * Draft plans
  * Dependencies mapping

- Inspect & Adapt (1 day, end of PI)
  * Metrics review
  * Problem solving
  * Continuous improvement

- Portfolio Sync (Monthly)
  * Executives
  * Strategy alignment
  * Budget review
\`\`\`

## 4. New Roles

### Release Train Engineer (RTE)
\`\`\`
Person: Senior SM or hired
Reports to: Head of Engineering
Time: 100%

Responsibilities:
- Facilitate PI Planning
- Coordinate across teams
- Remove program-level impediments
- Coach SMs
- Track metrics
- Communicate with stakeholders

Skills:
- SAFe certified
- Experience with multiple teams
- Strong facilitation
- Technical background
\`\`\`

### Product Management
\`\`\`
Roles:
- Chief Product Officer (existing)
  * Portfolio vision
  * Business outcomes

- Product Managers (3, new)
  * 1 per product
  * Roadmap, features
  * Customer research
  * Work with POs

- Product Owners (existing)
  * Team-level backlog
  * Story refinement
  * Acceptance
\`\`\`

### System Architect / Solution Architect
\`\`\`
Person: Senior architect
Reports to: CTO
Time: 100%

Responsibilities:
- Architecture vision
- Technical guidance
- Cross-team standards
- NFRs (Non-functional requirements)
- PI Planning input

Skills:
- Deep technical
- Strategic thinking
- Communication
\`\`\`

## 5. Metrics

### Team Metrics
\`\`\`
- Velocity (per team)
- Sprint predictability
- Quality (defect escape)
- Team health
\`\`\`

### Program Metrics
\`\`\`
- Program Predictability Measure (PPM)
  * % of PI Objectives met
  * Target: 80-100%

- Feature cycle time
  * From idea to production
  * Target: reduce 30%

- Integration frequency
  * Deployments per week
  * Target: daily

- Defect density
  * Bugs per release
  * Target: reduce 50%

- Dependencies resolved
  * % resolved before PI start
  * Target: > 80%
\`\`\`

### Portfolio Metrics
\`\`\`
- Business value delivered
- Time to market
- Customer satisfaction (NPS)
- Innovation ratio (R&D investment)
- Flow distribution:
  * Features: 60%
  * Tech debt: 20%
  * Bugs: 15%
  * Compliance: 5%
\`\`\`

## 6. 6-Month Roadmap

### Month 1-2: Foundation
\`\`\`
Goals:
- Align leadership
- Hire RTE
- Train SMs, POs
- Define teams

Activities:
- Kickoff workshop (2 days)
- SAFe training (2 days)
- SM/PO training (2 days)
- Team formation
- Vision & roadmap

Metrics:
- All leaders trained
- Teams defined
- RTE hired
\`\`\`

### Month 3: First PI Planning
\`\`\`
Goals:
- Conduct successful PI Planning
- First PI Objectives defined

Activities:
- Preparation (2 weeks)
- PI Planning (2 days)
- Retro (half day)
- Action items

Outputs:
- PI Plan
- Program Board
- Risks identified
\`\`\`

### Month 4-5: Execution
\`\`\`
Goals:
- Execute first PI
- Establish ceremonies

Activities:
- Weekly SoS
- PO Sync
- Integration Sync
- Monthly Inspect & Adapt

Metrics:
- Velocity tracking
- Dependency resolution
- Integration frequency
\`\`\`

### Month 6: Review & Improve
\`\`\`
Goals:
- Complete first PI
- Plan PI 2
- Evaluate progress

Activities:
- System Demo
- Inspect & Adapt
- PI Planning 2
- Retrospective
- Report to leadership

Metrics:
- Predictability: Baseline
- Team health
- Business value
- Identified improvements
\`\`\`

## 7. Risks & Mitigation

### Risk 1: Resistance to change
\`\`\`
Probability: High
Impact: High

Mitigation:
- Executive sponsorship (visible)
- Early wins communication
- Address fears directly
- Include skeptics in planning
- Training investment
\`\`\`

### Risk 2: Teams can't deliver PI Objectives
\`\`\`
Probability: Medium
Impact: High

Mitigation:
- Realistic capacity planning
- Not over-commit
- Buffer for unknown
- Track early, adjust
- Focus on flow, not utilization
\`\`\`

### Risk 3: SAFe too heavy
\`\`\`
Probability: Medium
Impact: Medium

Mitigation:
- Start minimal
- Add practices gradually
- Customize to context
- Skip what doesn't apply
- Review at 6 months
\`\`\`

### Risk 4: Cross-team dependencies persist
\`\`\`
Probability: High
Impact: High

Mitigation:
- Dependency mapping in PI Planning
- Architectural improvements
- API-first approach
- Team topology review
- Feature teams vs component teams
\`\`\`

### Risk 5: Middle management resistance
\`\`\`
Probability: High
Impact: High

Mitigation:
- Engage early
- Reframe roles (facilitators, not controllers)
- New career paths
- Training
- Clear expectations
\`\`\`

### Risk 6: Metrics misused
\`\`\`
Probability: Medium
Impact: Medium

Mitigation:
- Educate on correct use
- Team-level, not individual
- Focus on outcomes
- Review metrics quarterly
- Adjust as needed
\`\`\`

## 8. Success Criteria (6 months)

\`\`\`
Quantitative:
- 80%+ PI Objectives met
- Feature cycle time reduced 20%
- Deployment frequency: daily
- Team velocity stable
- NPS improved 10 points

Qualitative:
- Teams self-organizing
- Cross-team collaboration improved
- Stakeholder engagement
- Employee satisfaction
- Predictable delivery

Signals to continue:
- Momentum positive
- Business benefits visible
- Team buy-in
- Leadership commitment

Signals to pivot:
- Heavy resistance
- No business value
- Team burnout
- Metrics not improving
\`\`\``,
        },
      ],
    },
  ],
};
