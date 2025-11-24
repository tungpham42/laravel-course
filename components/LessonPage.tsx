"use client";
import React from "react";
import { Layout, Row, Col, Breadcrumb } from "antd";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import Link from "next/link";
import LessonContent from "@/components/LessonContent";
import ProgressTracker from "@/components/ProgressTracker";
import { courses } from "@/data/courses";

const { Header, Content } = Layout;

interface LessonPageProps {
  params: {
    slug: string;
    lessonSlug: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  // Find course by slug
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <Layout>
        <Content style={{ padding: 50, textAlign: "center" }}>
          <h1>Không tìm thấy khóa học</h1>
          <Link href="/khoa-hoc">
            <button
              type="button"
              style={{
                background: "#1890ff",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Quay lại danh sách khóa học
            </button>
          </Link>
        </Content>
      </Layout>
    );
  }

  // Find lesson by lessonSlug
  const currentLesson = course.lessons.find(
    (lesson) => lesson.slug === params.lessonSlug
  );

  if (!currentLesson) {
    return (
      <Layout>
        <Content style={{ padding: 50, textAlign: "center" }}>
          <h1>Không tìm thấy bài học</h1>
          <Link href={`/khoa-hoc/${course.slug}`}>
            <button
              type="button"
              style={{
                background: "#1890ff",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Quay lại khóa học
            </button>
          </Link>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
          padding: "0 50px",
        }}
      >
        <div style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          📖 {course.title} - {currentLesson.title}
        </div>
      </Header>

      <Content style={{ padding: "24px 50px" }}>
        <Breadcrumb style={{ marginBottom: 24 }}>
          <Breadcrumb.Item>
            <Link href="/">
              <HomeOutlined /> Trang chủ
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/khoa-hoc">
              <BookOutlined /> Khóa học
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={`/khoa-hoc/${course.slug}`}>{course.title}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{currentLesson.title}</Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={32}>
          <Col xs={24} lg={16}>
            <LessonContent
              lesson={currentLesson}
              courseSlug={course.slug}
              completed={false} // You can add completion logic here
            />
          </Col>

          <Col xs={24} lg={8}>
            <ProgressTracker
              lessons={course.lessons}
              currentLessonId={currentLesson.id}
              courseSlug={course.slug}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
