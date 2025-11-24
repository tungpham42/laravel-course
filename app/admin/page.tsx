// app/admin/page.tsx
"use client";
import { Row, Col, Card, List, Typography, Space, Button, Spin } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useCourses } from "@/hooks/useCourses";

const { Title, Text } = Typography;

export default function AdminDashboard() {
  const router = useRouter();
  const { courses, loading } = useCourses();

  const quickActions = [
    {
      title: "Create Course",
      description: "Add a new course",
      icon: <BookOutlined />,
      action: () => router.push("/admin/courses/new"),
      color: "#1890ff",
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={[16, 16]}>
        {/* Quick Actions */}
        <Col xs={24} lg={12}>
          <Card title="Quick Actions" bordered={false}>
            <Row gutter={[16, 16]}>
              {quickActions.map((action, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Card
                    hoverable
                    style={{
                      border: `1px solid ${action.color}20`,
                      background: `${action.color}05`,
                    }}
                    onClick={action.action}
                  >
                    <Space
                      direction="vertical"
                      align="center"
                      style={{ width: "100%" }}
                    >
                      <div style={{ fontSize: 24, color: action.color }}>
                        {action.icon}
                      </div>
                      <Text strong>{action.title}</Text>
                      <Text type="secondary" style={{ textAlign: "center" }}>
                        {action.description}
                      </Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* Recent Courses */}
        <Col xs={24} lg={12}>
          <Card title="Recent Courses" bordered={false}>
            <List
              dataSource={courses}
              renderItem={(course) => (
                <List.Item
                  key={course.id}
                  actions={[
                    <Button
                      key={`view-${course.id}`}
                      type="link"
                      onClick={() => router.push(`/admin/courses/${course.id}`)}
                    >
                      View
                    </Button>,
                  ]}
                ></List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
