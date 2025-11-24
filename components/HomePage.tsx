"use client";
import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
          padding: "0 50px",
        }}
      >
        <div style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          📚 Bộ Sưu Tập Khóa Học
        </div>
      </Header>

      <Content style={{ padding: "50px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Title level={1}>Bộ Sưu Tập Các Khóa Học</Title>
          <Paragraph
            style={{
              fontSize: 18,
              color: "#666",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Khám phá bộ sưu tập các khóa học đa dạng từ cơ bản đến nâng cao.
            Nâng cao kỹ năng và kiến thức của bạn thông qua các bài học thực tế
            và dự án thực hành chuyên nghiệp.
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
