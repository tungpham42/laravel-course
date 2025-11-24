"use client";
import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function CoursesPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
          padding: "0 50px",
        }}
      >
        <div style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          📚 Danh sách khóa học
        </div>
      </Header>

      <Content style={{ padding: "50px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Title level={2}>Các khóa học có sẵn</Title>
          <Paragraph
            style={{
              fontSize: 16,
              color: "#666",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Chọn khóa học phù hợp với mục tiêu học tập của bạn. Từ cơ bản đến
            nâng cao, chúng tôi có đầy đủ các khóa học để giúp bạn phát triển kỹ
            năng.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
          {courses.map((course) => (
            <Col key={course.id} xs={24} md={12} lg={8}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}
