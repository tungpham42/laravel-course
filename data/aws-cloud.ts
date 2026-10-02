import { Course } from "@/types";

export const awsCloud: Course = {
  id: "aws-cloud",
  slug: "aws-cloud",
  title: "AWS Cloud Practitioner",
  description: "Dịch vụ AWS cơ bản và kiến trúc cloud",
  image: "/images/aws-course.jpg",
  duration: "9 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "AWS Core Services",
      slug: "aws-core-services",
      duration: "70 phút",
      content: `# AWS Core Services

## Giới thiệu AWS
Amazon Web Services (AWS) là nền tảng cloud computing hàng đầu.

## Compute Services

### EC2 (Elastic Compute Cloud)
\`\`\`bash
# Launch EC2 instance via AWS CLI
aws ec2 run-instances \\
    --image-id ami-0c02fb55956c7d316 \\
    --count 1 \\
    --instance-type t2.micro \\
    --key-name my-key-pair \\
    --security-group-ids sg-903004f8 \\
    --subnet-id subnet-6e7f829e
\`\`\`

### Lambda (Serverless)
\`\`\`javascript
// Lambda function handler
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      input: event,
    }),
  };
  
  return response;
};
\`\`\`

## Storage Services

### S3 (Simple Storage Service)
\`\`\`python
import boto3

# Create S3 client
s3 = boto3.client('s3')

# Upload file
s3.upload_file('local-file.txt', 'my-bucket', 'remote-file.txt')

# Download file
s3.download_file('my-bucket', 'remote-file.txt', 'local-file.txt')

# List objects
response = s3.list_objects_v2(Bucket='my-bucket')
for obj in response.get('Contents', []):
    print(f"Key: {obj['Key']}, Size: {obj['Size']}")
\`\`\`

### EBS (Elastic Block Store)
- Persistent block storage for EC2
- Multiple volume types (gp3, io1, st1)
- Snapshots for backup

## Database Services

### RDS (Relational Database Service)
\`\`\`bash
# Create RDS instance
aws rds create-db-instance \\
    --db-instance-identifier my-db \\
    --db-instance-class db.t3.micro \\
    --engine mysql \\
    --master-username admin \\
    --master-user-password password123 \\
    --allocated-storage 20
\`\`\`

### DynamoDB (NoSQL)
\`\`\`javascript
// DynamoDB document client
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

// Put item
await docClient.send(new PutCommand({
  TableName: "Users",
  Item: {
    UserId: "123",
    Name: "John Doe",
    Email: "john@example.com",
    CreatedAt: new Date().toISOString()
  }
}));
\`\`\`

## Networking & Content Delivery

### VPC (Virtual Private Cloud)
\`\`\`yaml
# CloudFormation VPC template
Resources:
  MyVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: MyVPC
\`\`\`

### CloudFront (CDN)
- Global content delivery network
- Low latency
- DDoS protection

## IAM (Identity and Access Management)
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
\`\`\`

## Bài tập thực hành
Hãy tạo architecture diagram cho ứng dụng web trên AWS!`,
      exercises: [
        {
          id: "1-1",
          title: "Web Application Architecture",
          description: "Thiết kế kiến trúc ứng dụng web trên AWS",
          instructions: `Thiết kế kiến trúc cho ứng dụng web với:
- Frontend: S3 + CloudFront
- Backend: EC2 hoặc Lambda
- Database: RDS PostgreSQL
- Caching: ElastiCache Redis
- File storage: S3
Vẽ architecture diagram và giải thích data flow
Tạo bản thiết kế kiến trúc ứng dụng web trên AWS bao gồm:
1. Vẽ architecture diagram
2. Mô tả luồng dữ liệu
3. Giải thích lý do chọn từng service
4. Ước tính chi phí cơ bản`,
          type: "theory",
          solution: `# Web Application Architecture trên AWS

## Architecture Diagram
User -> CloudFront -> S3 (Static Website)
-> API Gateway -> Lambda Functions -> RDS PostgreSQL
-> ElastiCache Redis
-> S3 (File Storage)

## Data Flow
1. **Static Content**: User requests -> CloudFront -> S3 bucket (HTML, CSS, JS)
2. **API Requests**: User -> CloudFront -> API Gateway -> Lambda Functions
3. **Database**: Lambda -> RDS PostgreSQL (user data, application data)
4. **Caching**: Lambda -> ElastiCache Redis (session cache, query cache)
5. **File Storage**: Lambda -> S3 (user uploads, images, documents)

## Service Justification
- **CloudFront**: CDN cho low latency, global distribution
- **S3**: Highly available, durable storage for static files
- **API Gateway**: Managed API service với throttling và caching
- **Lambda**: Serverless compute, auto-scaling, pay-per-use
- **RDS**: Managed relational database với automated backups
- **ElastiCache**: In-memory caching cho performance improvement

## Cost Estimation (us-east-1)
- CloudFront: $0.085/GB (first 10TB)
- S3: $0.023/GB (first 50TB)
- Lambda: $0.20 per 1M requests
- API Gateway: $3.50 per 1M requests
- RDS: $0.016/hr (db.t3.micro)
- ElastiCache: $0.020/hr (cache.t3.micro)

Total estimated monthly cost: ~$50-100 cho small application`,
        },
        {
          id: "1-2",
          title: "Tạo S3 Bucket và Upload Files",
          description:
            "Thực hành tạo S3 bucket và upload files sử dụng AWS CLI",
          instructions: `Sử dụng AWS CLI để:
1. Tạo S3 bucket với tên duy nhất
2. Upload file text lên bucket
3. Cấu hình public read access cho file
4. Tạo presigned URL cho file
5. Xóa bucket và resources

Viết script hoặc commands để hoàn thành các bước trên.`,
          type: "practice",
          solution: `#!/bin/bash

# 1. Tạo S3 bucket
BUCKET_NAME="my-unique-bucket-$(date +%s)"
aws s3 mb s3://$BUCKET_NAME

# 2. Tạo và upload file
echo "Hello AWS S3" > demo-file.txt
aws s3 cp demo-file.txt s3://$BUCKET_NAME/

# 3. Cấu hình public read access
aws s3api put-object-acl \\
    --bucket $BUCKET_NAME \\
    --key demo-file.txt \\
    --acl public-read

# 4. Tạo presigned URL (valid 1 hour)
aws s3 presign s3://$BUCKET_NAME/demo-file.txt --expires-in 3600

# 5. Cleanup (comment để giữ resources)
# aws s3 rb s3://$BUCKET_NAME --force
# rm demo-file.txt`,
        },
      ],
    },
    {
      id: "2",
      title: "AWS Security & IAM",
      slug: "aws-security-iam",
      duration: "60 phút",
      content: `# AWS Security & IAM

## IAM Fundamentals
Identity and Access Management (IAM) là dịch vụ quản lý truy cập AWS.

### IAM Components
- **Users**: Người dùng cuối
- **Groups**: Tập hợp users với common policies
- **Roles**: Temporary credentials cho AWS services
- **Policies**: JSON documents định nghĩa permissions

### Best Practices
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::example-bucket",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.0.2.0/24"
        }
      }
    }
  ]
}
\`\`\`

## Security Groups & NACLs
### Security Groups (Stateful)
\`\`\`bash
# Create security group
aws ec2 create-security-group \\
    --group-name MyWebSG \\
    --description "Security group for web servers"
\`\`\`

### NACLs (Stateless)
Network Access Control Lists cho subnet-level filtering.

## AWS Organizations
Quản lý multiple AWS accounts.

## KMS & Encryption
Key Management Service cho encryption keys management.`,
      exercises: [
        {
          id: "2-1",
          title: "Tạo IAM Policy và Role",
          description: "Thực hành tạo IAM policy và role cho EC2",
          instructions: `Tạo IAM policy và role cho phép EC2 instance:
1. Read-only access to S3
2. Read access to DynamoDB
3. Không được phép xóa resources
4. Áp dụng role cho EC2 instance

Viết CloudFormation template hoặc AWS CLI commands.`,
          type: "practice",
          solution: `Resources:
  EC2Role:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: ec2.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
      Policies:
        - PolicyName: DynamoDBReadOnly
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - dynamodb:GetItem
                  - dynamodb:BatchGetItem
                  - dynamodb:Query
                  - dynamodb:Scan
                Resource: "*"
  
  EC2InstanceProfile:
    Type: AWS::IAM::InstanceProfile
    Properties:
      Roles:
        - !Ref EC2Role`,
        },
      ],
    },
    {
      id: "3",
      title: "AWS Networking & VPC",
      slug: "aws-networking-vpc",
      duration: "80 phút",
      content: `# AWS Networking & VPC

## VPC Fundamentals
Virtual Private Cloud - isolated network environment.

### VPC Components
- **Subnets**: Network segments trong VPC
- **Route Tables**: Định hướng network traffic
- **Internet Gateway**: Kết nối ra internet
- **NAT Gateway**: Outbound internet cho private subnets

### VPC Setup
\`\`\`yaml
Resources:
  MyVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
  
  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref MyVPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: us-east-1a
\`\`\`

## Load Balancing
### Application Load Balancer
\`\`\`bash
# Create ALB
aws elbv2 create-load-balancer \\
    --name my-alb \\
    --subnets subnet-123456 subnet-789012 \\
    --security-groups sg-903004f8
\`\`\`

### Network Load Balancer
Cho high-performance, low-latency applications.

## Route 53
DNS service với health checks và routing policies.`,
      exercises: [
        {
          id: "3-1",
          title: "Thiết kế Multi-Tier VPC",
          description: "Thiết kế VPC cho ứng dụng 3-tier",
          instructions: `Thiết kế VPC architecture cho ứng dụng 3-tier:
- Public subnets cho load balancers
- Private subnets cho application servers  
- Isolated subnets cho databases
- NAT Gateway cho outbound internet
- Security groups và NACLs

Vẽ diagram và viết CloudFormation template.`,
          type: "theory",
          solution: `# Multi-Tier VPC Architecture

## Diagram
Internet -> Internet Gateway -> Public Subnets (ALB)
-> Private Subnets (EC2 App Servers) -> Isolated Subnets (RDS)
NAT Gateway trong Public Subnets

## CloudFormation Template
\`\`\`yaml
Parameters:
  VpcCidr:
    Type: String
    Default: 10.0.0.0/16

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: !Ref VpcCidr
      EnableDnsHostnames: true

  InternetGateway:
    Type: AWS::EC2::InternetGateway

  VPCGatewayAttachment:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  PublicSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']

  # ... additional subnets and routing tables
\`\`\``,
        },
      ],
    },
    {
      id: "4",
      title: "AWS Monitoring & Cost Optimization",
      slug: "aws-monitoring-cost",
      duration: "50 phút",
      content: `# AWS Monitoring & Cost Optimization

## CloudWatch
### Metrics & Alarms
\`\`\`bash
# Create CloudWatch alarm
aws cloudwatch put-metric-alarm \\
    --alarm-name "HighCPU" \\
    --alarm-description "Alarm when CPU exceeds 80 percent" \\
    --metric-name CPUUtilization \\
    --namespace AWS/EC2 \\
    --statistic Average \\
    --period 300 \\
    --threshold 80 \\
    --comparison-operator GreaterThanThreshold \\
    --evaluation-periods 2
\`\`\`

### Logs & Dashboards
Centralized logging và custom dashboards.

## AWS Cost Explorer
Phân tích và dự báo chi phí.

## Trusted Advisor
Best practices recommendations.

## Budgets & Alerts
\`\`\`bash
# Create budget
aws budgets create-budget \\
    --account-id 123456789012 \\
    --budget file://budget.json \\
    --notifications-with-subscribers file://notifications.json
\`\`\``,
      exercises: [
        {
          id: "4-1",
          title: "Tạo Cost Monitoring Dashboard",
          description: "Xây dựng CloudWatch dashboard để monitor costs",
          instructions: `Tạo CloudWatch dashboard để monitor:
1. EC2 instance costs
2. S3 storage costs  
3. Data transfer costs
4. Set up billing alerts
5. Cost optimization recommendations

Viết CloudFormation template hoặc AWS CLI commands.`,
          type: "practice",
          solution: `Resources:
  BillingAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: "MonthlyBillingAlert"
      AlarmDescription: "Alarm when monthly billing exceeds $100"
      Namespace: "AWS/Billing"
      MetricName: "EstimatedCharges"
      Dimensions:
        - Name: Currency
          Value: USD
      Statistic: Maximum
      Period: 21600
      EvaluationPeriods: 1
      Threshold: 100
      ComparisonOperator: GreaterThanThreshold
      AlarmActions:
        - !Ref BillingNotification

  BillingNotification:
    Type: AWS::SNS::Topic
    Properties:
      DisplayName: "Billing Alerts"

  # CloudWatch Dashboard for cost monitoring
  CostDashboard:
    Type: AWS::CloudWatch::Dashboard
    Properties:
      DashboardName: "CostMonitoring"
      DashboardBody: |
        {
          "widgets": [
            {
              "type": "metric",
              "x": 0,
              "y": 0,
              "width": 12,
              "height": 6,
              "properties": {
                "metrics": [
                  [ "AWS/Billing", "EstimatedCharges", "Currency", "USD" ]
                ],
                "period": 21600,
                "stat": "Maximum",
                "region": "us-east-1",
                "title": "Estimated Charges"
              }
            }
          ]
        }`,
        },
      ],
    },
  ],
};
