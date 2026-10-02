import { Course } from "@/types";

export const dockerDevops: Course = {
  id: "docker-devops",
  slug: "docker-devops",
  title: "Docker & DevOps",
  description: "Containerization, CI/CD và DevOps practices",
  image: "/images/docker-course.jpg",
  duration: "12 tuần",
  level: "intermediate",
  lessons: [
    {
      id: "1",
      title: "Docker Containerization",
      slug: "docker-containerization",
      duration: "65 phút",
      content: `# Docker Containerization

## Giới thiệu Docker
Docker là platform để phát triển, vận chuyển và chạy ứng dụng trong containers.

## Docker Basics

### Dockerfile
\`\`\`dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]
\`\`\`

### Build Docker Image
\`\`\`bash
# Build image
docker build -t my-app:1.0 .

# List images
docker images

# Run container
docker run -d -p 3000:3000 --name my-app-container my-app:1.0
\`\`\`

## Docker Commands

### Container Management
\`\`\`bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop my-app-container

# Remove container
docker rm my-app-container

# View logs
docker logs my-app-container
\`\`\`

### Image Management
\`\`\`bash
# Remove image
docker rmi my-app:1.0

# Pull image from registry
docker pull nginx:latest

# Tag image
docker tag my-app:1.0 my-registry.com/my-app:1.0

# Push to registry
docker push my-registry.com/my-app:1.0
\`\`\`

## Docker Compose

### docker-compose.yml
\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

### Docker Compose Commands
\`\`\`bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Scale services
docker-compose up -d --scale app=3
\`\`\`

## Multi-stage Builds
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

## Best Practices

### Security
\`\`\`dockerfile
# Use non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Use .dockerignore
# node_modules
# npm-debug.log
# .env
# .git
\`\`\`

### Optimization
\`\`\`dockerfile
# Use specific version tags
FROM node:18-alpine

# Leverage build cache
COPY package*.json ./
RUN npm ci

# Copy source code after dependencies
COPY . .

# Use multi-stage builds
# Minimize layer size
\`\`\`

## Bài tập thực hành
Hãy dockerize một ứng dụng Node.js đơn giản!`,
      exercises: [
        {
          id: "1-1",
          title: "Dockerize Node.js Application",
          description:
            "Tạo Dockerfile và docker-compose cho ứng dụng Node.js",
          instructions: `Dockerize một ứng dụng Node.js với:
1. Dockerfile sử dụng multi-stage build
2. docker-compose.yml với database (PostgreSQL) và cache (Redis)
3. Environment variables cho configuration
4. Volume cho data persistence`,
          type: "code",
          starterCode: `# Dockerfile
# Viết Dockerfile của bạn ở đây

# docker-compose.yml
# Viết docker-compose.yml của bạn ở đây`,
          solution: `# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source code
COPY src ./src

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S appuser -u 1001

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder --chown=appuser:nodejs /app/dist ./dist

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD node healthcheck.js

# Start application
CMD ["node", "dist/server.js"]

# docker-compose.yml
version: '3.8'

services:
  app:
    build: 
      context: .
      target: production
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
      - PORT=3000
    depends_on:
      - db
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:6-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:`,
        },
        {
          id: "1-2",
          title: "Multi-service Application với Docker Compose",
          description: "Tạo multi-service application với load balancer",
          instructions: `Tạo docker-compose cho ứng dụng multi-service:
1. 3 instances của web application
2. Nginx load balancer
3. PostgreSQL database
4. Redis cache
5. Monitoring với Prometheus và Grafana`,
          type: "code",
          starterCode: `# docker-compose.yml
# Viết docker-compose.yml cho multi-service application`,
          solution: `# docker-compose.yml
version: '3.8'

services:
  # Web application instances
  web:
    build: 
      context: ./app
      target: production
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    deploy:
      replicas: 3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Load balancer
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped

  # Database
  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped

  # Cache
  redis:
    image: redis:6-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    restart: unless-stopped

  # Monitoring - Prometheus
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=200h'
      - '--web.enable-lifecycle'
    restart: unless-stopped

  # Monitoring - Grafana
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin123
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./monitoring/grafana/datasources:/etc/grafana/provisioning/datasources
    depends_on:
      - prometheus
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
  prometheus_data:
  grafana_data:

# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream backend {
        least_conn;
        server web:3000 max_fails=3 fail_timeout=30s;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }

        location /health {
            access_log off;
            return 200 "healthy\\n";
            add_header Content-Type text/plain;
        }
    }
}

# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'web-app'
    static_configs:
      - targets: ['web:3000']
    metrics_path: '/metrics'
    scrape_interval: 10s

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093`,
        },
      ],
    },
    {
      id: "2",
      title: "Container Orchestration với Kubernetes",
      slug: "kubernetes-orchestration",
      duration: "80 phút",
      prerequisites: ["1"],
      content: `# Container Orchestration với Kubernetes

## Giới thiệu Kubernetes
Kubernetes là hệ thống container orchestration mã nguồn mở để tự động hóa deployment, scaling, và quản lý ứng dụng containerized.

## Kubernetes Concepts

### Pods
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  labels:
    app: my-app
    tier: frontend
spec:
  containers:
  - name: my-app
    image: my-app:1.0
    ports:
    - containerPort: 3000
    env:
    - name: NODE_ENV
      value: "production"
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
\`\`\`

### Deployments
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:1.0
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

### Services
\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
\`\`\`

## Kubernetes Commands

### Basic Commands
\`\`\`bash
# Get cluster information
kubectl cluster-info

# Get nodes
kubectl get nodes

# Get pods
kubectl get pods

# Get services
kubectl get services

# Get deployments
kubectl get deployments
\`\`\`

### Application Management
\`\`\`bash
# Apply configuration
kubectl apply -f deployment.yaml

# Scale deployment
kubectl scale deployment my-app-deployment --replicas=5

# View logs
kubectl logs -f deployment/my-app-deployment

# Port forwarding
kubectl port-forward service/my-app-service 8080:80
\`\`\`

## Advanced Kubernetes Features

### ConfigMaps và Secrets
\`\`\`yaml
# ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.url: "postgresql://localhost:5432/mydb"
  cache.host: "redis://localhost:6379"
  app.port: "3000"

# Secret
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database.password: cGFzc3dvcmQxMjM=  # base64 encoded
  api.key: YXBpLWtleS1zZWNyZXQ=
\`\`\`

### Persistent Volumes
\`\`\`yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
\`\`\`

## Kubernetes trong Production

### Resource Management
\`\`\`yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "250m"
  limits:
    memory: "256Mi"
    cpu: "500m"
\`\`\`

### Health Checks
\`\`\`yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
  successThreshold: 1
  failureThreshold: 3
\`\`\`

### Horizontal Pod Autoscaling
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
\`\`\``,
      exercises: [
        {
          id: "2-1",
          title: "Deploy Microservices trên Kubernetes",
          description:
            "Triển khai microservices architecture trên Kubernetes cluster",
          instructions: `Tạo Kubernetes manifests cho microservices application:
1. API service deployment và service
2. Frontend web application
3. Database với persistent storage
4. Redis cache
5. Ingress controller cho routing
6. ConfigMaps và Secrets cho configuration`,
          type: "code",
          starterCode: `# Viết Kubernetes manifests của bạn ở đây
# api-deployment.yaml, frontend-deployment.yaml, ingress.yaml, v.v.`,
          solution: `# api-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  labels:
    app: api-service
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-service
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: api-service
        version: v1
    spec:
      containers:
      - name: api-service
        image: my-registry/api-service:1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: redis.url
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        securityContext:
          runAsNonRoot: true
          runAsUser: 1000
          allowPrivilegeEscalation: false
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
  labels:
    app: api-service
spec:
  selector:
    app: api-service
  ports:
  - port: 80
    targetPort: 3000
    protocol: TCP
  type: ClusterIP

# frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-app
  labels:
    app: frontend-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend-app
  template:
    metadata:
      labels:
        app: frontend-app
    spec:
      containers:
      - name: frontend-app
        image: my-registry/frontend-app:1.0.0
        ports:
        - containerPort: 80
        env:
        - name: API_URL
          value: "http://api-service"
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-app
spec:
  selector:
    app: frontend-app
  ports:
  - port: 80
    targetPort: 80
  type: ClusterIP

# database-deployment.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres-db
spec:
  serviceName: "postgres"
  replicas: 1
  selector:
    matchLabels:
      app: postgres-db
  template:
    metadata:
      labels:
        app: postgres-db
    spec:
      containers:
      - name: postgres
        image: postgres:13-alpine
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_DB
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.name
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.user
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database.password
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          exec:
            command:
            - sh
            - -c
            - exec pg_isready -U $POSTGRES_USER -d $POSTGRES_DB
          initialDelaySeconds: 60
          periodSeconds: 30
        readinessProbe:
          exec:
            command:
            - sh
            - -c
            - exec pg_isready -U $POSTGRES_USER -d $POSTGRES_DB
          initialDelaySeconds: 5
          periodSeconds: 10
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-db
spec:
  selector:
    app: postgres-db
  ports:
  - port: 5432
    targetPort: 5432
  type: ClusterIP

# redis-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-cache
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis-cache
  template:
    metadata:
      labels:
        app: redis-cache
    spec:
      containers:
      - name: redis
        image: redis:6-alpine
        command: ["redis-server", "--appendonly", "yes"]
        ports:
        - containerPort: 6379
        volumeMounts:
        - name: redis-data
          mountPath: /data
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 5
          periodSeconds: 5
      volumes:
      - name: redis-data
        persistentVolumeClaim:
          claimName: redis-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: redis-cache
spec:
  selector:
    app: redis-cache
  ports:
  - port: 6379
    targetPort: 6379
  type: ClusterIP

# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
spec:
  rules:
  - host: myapp.local
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-app
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80

# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  redis.url: "redis://redis-cache:6379"
  app.port: "3000"
  app.env: "production"
  log.level: "info"

# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database.url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc3dvcmRAcG9zdGdyZXMtZGI6NTQzMi9teWRi
  database.name: bXlkYg==
  database.user: dXNlcg==
  database.password: cGFzc3dvcmQxMjM=
  api.secret: eW91ci1zZWNyZXQtYXBpLWtleQ==

# redis-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: redis-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi

# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`,
        },
      ],
    },
    {
      id: "3",
      title: "CI/CD Pipelines với GitHub Actions",
      slug: "ci-cd-pipelines",
      duration: "70 phút",
      prerequisites: ["2"],
      content: `# CI/CD Pipelines với GitHub Actions

## Giới thiệu CI/CD
CI/CD (Continuous Integration/Continuous Deployment) là practice tự động hóa quá trình build, test và deploy ứng dụng.

## GitHub Actions Basics

### Workflow Structure
\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
\`\`\`

### Environment Variables và Secrets
\`\`\`yaml
env:
  NODE_ENV: production
  REGISTRY: ghcr.io

jobs:
  deploy:
    environment: production
    steps:
    - name: Deploy to production
      run: echo "Deploying..."
      env:
        DATABASE_URL: \${{ secrets.DATABASE_URL }}
        API_KEY: \${{ secrets.API_KEY }}
\`\`\`

## Advanced CI/CD Patterns

### Matrix Builds
\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
        os: [ubuntu-latest, windows-latest]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js \${{ matrix.node-version }} on \${{ matrix.os }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
\`\`\`

### Caching
\`\`\`yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

## Deployment Strategies

### Blue-Green Deployment
\`\`\`yaml
deploy-blue:
  runs-on: ubuntu-latest
  steps:
  - name: Deploy to blue environment
    run: |
      kubectl apply -f deployment-blue.yaml
      kubectl rollout status deployment/my-app-blue

  - name: Test blue deployment
    run: |
      # Run smoke tests
      curl -f http://blue.myapp.com/health

  - name: Switch traffic to blue
    run: |
      kubectl apply -f service-blue.yaml
\`\`\`

### Canary Deployment
\`\`\`yaml
deploy-canary:
  runs-on: ubuntu-latest
  steps:
  - name: Deploy canary
    run: |
      kubectl apply -f deployment-canary.yaml
      # Start with 10% traffic
      kubectl set traffic deployment/my-app --weight=90,10

  - name: Monitor canary
    run: |
      # Monitor metrics for 15 minutes
      sleep 900
      # Check error rate and performance

  - name: Rollout to 100%
    if: success()
    run: |
      kubectl set traffic deployment/my-app --weight=0,100
      kubectl delete deployment/my-app-canary
\`\`\`

## Security Scanning

### Code Security
\`\`\`yaml
security-scan:
  runs-on: ubuntu-latest
  steps:
  - uses: actions/checkout@v3
  
  - name: Run SAST
    uses: github/codeql-action/analyze@v2
    with:
      languages: javascript
  
  - name: Dependency vulnerability scan
    run: npm audit --audit-level moderate
  
  - name: Run Snyk security scan
    uses: snyk/actions/node@master
    env:
      SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
\`\`\`

### Container Security
\`\`\`yaml
container-scan:
  runs-on: ubuntu-latest
  steps:
  - name: Build container
    run: docker build -t my-app:\${{ github.sha }} .
  
  - name: Scan container
    uses: aquasecurity/trivy-action@master
    with:
      image-ref: 'my-app:\${{ github.sha }}'
      format: 'sarif'
      output: 'trivy-results.sarif'
  
  - name: Upload scan results
    uses: github/codeql-action/upload-sarif@v2
    with:
      sarif_file: 'trivy-results.sarif'
\`\`\`

## Monitoring và Notifications

### Slack Notifications
\`\`\`yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: \${{ job.status }}
    channel: '#deployments'
    text: 'Deployment \${{ job.status }} for \${{ github.ref }}'
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
  if: always()
\`\`\`

### Status Checks
\`\`\`yaml
health-check:
  runs-on: ubuntu-latest
  needs: deploy
  steps:
  - name: Wait for deployment
    run: sleep 30
  
  - name: Health check
    run: |
      response=$(curl -s -o /dev/null -w "%{http_code}" https://myapp.com/health)
      if [ $response -ne 200 ]; then
        echo "Health check failed"
        exit 1
      fi
\`\`\``,
      exercises: [
        {
          id: "3-1",
          title: "End-to-End CI/CD Pipeline",
          description: "Tạo complete CI/CD pipeline từ code đến production",
          instructions: `Tạo GitHub Actions workflow cho:
1. Automated testing trên multiple environments
2. Security scanning và code quality checks
3. Container build và push to registry
4. Deployment to staging và production
5. Automated rollback mechanisms
6. Notifications và monitoring`,
          type: "code",
          starterCode: `# .github/workflows/ci-cd.yml
# Viết complete CI/CD pipeline của bạn ở đây`,
          solution: `# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  release:
    types: [published]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # Test và Build
  test:
    name: Test và Build
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'

    - name: Cache node modules
      uses: actions/cache@v4
      with:
        path: ~/.npm
        key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          \${{ runner.os }}-node-

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run unit tests
      run: npm run test:unit

    - name: Run integration tests
      run: npm run test:integration

    - name: Build application
      run: npm run build

    - name: Upload build artifacts
      uses: actions/upload-artifact@v4
      with:
        name: build-\${{ matrix.node-version }}
        path: dist/
        retention-days: 7

  # Security Scanning
  security:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run CodeQL Analysis
      uses: github/codeql-action/analyze@v3
      with:
        languages: javascript

    - name: Run Snyk to check for vulnerabilities
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        args: --severity-threshold=high

    - name: Run npm audit
      run: npm audit --audit-level high

    - name: Run hadolint for Dockerfile
      uses: hadolint/hadolint-action@v3.1.0
      with:
        dockerfile: Dockerfile

  # Build và Push Container
  build-container:
    name: Build và Push Container
    runs-on: ubuntu-latest
    needs: [test, security]
    if: github.event_name == 'push' && (github.ref == 'refs/heads/main' || github.ref == 'refs/heads/develop')
    
    outputs:
      image-tag: \${{ steps.meta.outputs.tags }}

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Log in to Container Registry
      uses: docker/login-action@v3
      with:
        registry: \${{ env.REGISTRY }}
        username: \${{ github.actor }}
        password: \${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=semver,pattern={{version}}
          type=semver,pattern={{major}}.{{minor}}
          type=sha,prefix={{branch}}-

    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: \${{ steps.meta.outputs.tags }}
        labels: \${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    - name: Scan container image
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v3
      with:
        sarif_file: 'trivy-results.sarif'

  # Deploy to Staging
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build-container
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy to Kubernetes
      uses: azure/k8s-deploy@v4
      with:
        namespace: staging
        manifests: |
          k8s/staging/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: blue-green

    - name: Run smoke tests
      run: |
        curl -f https://staging.myapp.com/health
        npm run test:smoke

    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        channel: '#deployments'
        text: 'Staging deployment \${{ job.status }} for \${{ github.sha }}'
      env:
        SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
      if: always()

  # Deploy to Production
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: 
      - build-container
      - deploy-staging
    if: github.ref == 'refs/heads/main' || github.event_name == 'release'
    environment: production
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy with canary strategy
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: canary
        traffic-split-method: smi
        percentage: 10
        baseline-and-canary-replicas: 2

    - name: Wait for canary stabilization
      run: sleep 600

    - name: Run canary tests
      run: |
        curl -f https://canary.myapp.com/health
        npm run test:e2e -- --baseUrl=https://canary.myapp.com

    - name: Promote canary to 100%
      if: success()
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
        strategy: canary
        action: promote

    - name: Rollback on failure
      if: failure()
      uses: azure/k8s-deploy@v4
      with:
        namespace: production
        manifests: |
          k8s/production/
        images: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.ref_name }}
        strategy: canary
        action: reject

    - name: Health check
      run: |
        for i in {1..10}; do
          if curl -f https://myapp.com/health; then
            echo "Health check passed"
            break
          fi
          sleep 30
        done

    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        channel: '#deployments'
        text: 'Production deployment \${{ job.status }} for \${{ github.sha }}'
      env:
        SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
      if: always()

  # Performance Testing
  performance:
    name: Performance Tests
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/develop'
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run performance tests
      run: |
        npm run test:performance -- --url=https://staging.myapp.com

    - name: Upload performance results
      uses: actions/upload-artifact@v4
      with:
        name: performance-results
        path: performance-results/
        retention-days: 30

  # Database Migrations
  migrations:
    name: Database Migrations
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run database migrations
      run: |
        kubectl set env deployment/api-service -n staging RUN_MIGRATIONS=true
        sleep 30
        kubectl set env deployment/api-service -n staging RUN_MIGRATIONS-

    - name: Verify migrations
      run: |
        kubectl exec -n staging deployment/api-service -- npm run db:status

  # Cleanup
  cleanup:
    name: Cleanup
    runs-on: ubuntu-latest
    if: always()
    
    steps:
    - name: Clean up old containers
      run: |
        # Remove containers older than 30 days
        docker system prune -f --filter "until=720h"
        
    - name: Clean up workflow runs
      uses: Mattraks/delete-workflow-runs@v2
      with:
        token: \${{ github.token }}
        repository: \${{ github.repository }}
        retain_days: 30
        keep_minimum_runs: 10`,
        },
      ],
    },
  ],
};
