"use client";
import React from "react";
import { Layout, Row, Col, Breadcrumb, Button } from "antd";
import { HomeOutlined, BookOutlined, LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import ExerciseComponent from "@/components/ExerciseComponent";
import { courses } from "@/data/courses";

const { Header, Content } = Layout;

interface ExercisePageProps {
  params: {
    slug: string;
    lessonSlug: string;
    exerciseId: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  // Find course by slug
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <Layout>
        <Content style={{ padding: 50, textAlign: "center" }}>
          <h1>Không tìm thấy khóa học</h1>
          <Link href="/khoa-hoc">
            <Button type="primary">Quay lại danh sách khóa học</Button>
          </Link>
        </Content>
      </Layout>
    );
  }

  // Find lesson by lessonSlug
  const lesson = course.lessons.find((les) => les.slug === params.lessonSlug);

  if (!lesson) {
    return (
      <Layout>
        <Content style={{ padding: 50, textAlign: "center" }}>
          <h1>Không tìm thấy bài học</h1>
          <Link href={`/khoa-hoc/${params.slug}`}>
            <Button type="primary">Quay lại khóa học</Button>
          </Link>
        </Content>
      </Layout>
    );
  }

  // Find exercise by exerciseId within the lesson
  const exercise = lesson.exercises.find((ex) => ex.id === params.exerciseId);

  if (!exercise) {
    return (
      <Layout>
        <Content style={{ padding: 50, textAlign: "center" }}>
          <h1>Không tìm thấy bài tập</h1>
          <Link href={`/khoa-hoc/${params.slug}/bai-hoc/${params.lessonSlug}`}>
            <Button type="primary">Quay lại bài học</Button>
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
          💻 Bài tập: {exercise.title}
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
            <Link href={`/khoa-hoc/${params.slug}`}>{course.title}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              href={`/khoa-hoc/${params.slug}/bai-hoc/${params.lessonSlug}`}
            >
              {lesson.title}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{exercise.title}</Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={32}>
          <Col xs={24} lg={18}>
            <div style={{ marginBottom: 16 }}>
              <Link
                href={`/khoa-hoc/${params.slug}/bai-hoc/${params.lessonSlug}`}
              >
                <Button icon={<LeftOutlined />} type="text">
                  Quay lại bài học
                </Button>
              </Link>
            </div>

            <ExerciseComponent exercise={exercise} />
          </Col>

          <Col xs={24} lg={6}>
            <div
              style={{ background: "#f0f2f5", padding: 16, borderRadius: 6 }}
            >
              <h4>Thông tin bài tập</h4>
              <p>
                <strong>Khóa học:</strong> {course.title}
              </p>
              <p>
                <strong>Bài học:</strong> {lesson.title}
              </p>
              <p>
                <strong>Loại bài tập:</strong>{" "}
                {exercise.type === "multiple-choice"
                  ? "Trắc nghiệm"
                  : exercise.type === "code"
                  ? "Lập trình"
                  : "Lý thuyết"}
              </p>
              <p>
                <strong>Độ khó:</strong>{" "}
                {course.level === "beginner"
                  ? "Cơ bản"
                  : course.level === "intermediate"
                  ? "Trung cấp"
                  : "Nâng cao"}
              </p>
              <p>
                <strong>Thời lượng:</strong> {lesson.duration}
              </p>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
