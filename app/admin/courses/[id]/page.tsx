// app/admin/courses/[id]/page.tsx
"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Modal,
  Tabs,
  Button,
  Space,
  Typography,
  Spin,
  Card,
  Row,
  Col,
  Tag,
  Image,
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  BookOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { LessonForm } from "@/components/LessonForm";
import { LessonList } from "@/components/LessonList";
import { ExerciseForm } from "@/components/ExerciseForm";
import { ExerciseList } from "@/components/ExerciseList";
import { Lesson, Exercise } from "@/types";
import { useCourse } from "@/hooks/useCourse";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const { course, loading, error, refreshCourse } = useCourse(courseId);
  const [activeTab, setActiveTab] = useState("lessons");

  // Modal states
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isExerciseModalOpen, setIsExerciseModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | undefined>();
  const [editingExercise, setEditingExercise] = useState<
    Exercise | undefined
  >();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>();

  const handleCreateLesson = () => {
    setEditingLesson(undefined);
    setIsLessonModalOpen(true);
  };

  const handleEditLesson = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setIsLessonModalOpen(true);
  };

  const handleViewExercises = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveTab("exercises");
  };

  const handleCreateExercise = () => {
    setEditingExercise(undefined);
    setIsExerciseModalOpen(true);
  };

  const handleEditExercise = (exercise: Exercise) => {
    setEditingExercise(exercise);
    setIsExerciseModalOpen(true);
  };

  const handleLessonSuccess = () => {
    setIsLessonModalOpen(false);
    setEditingLesson(undefined);
    refreshCourse();
  };

  const handleExerciseSuccess = () => {
    setIsExerciseModalOpen(false);
    setEditingExercise(undefined);
    refreshCourse();
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "green";
      case "intermediate":
        return "orange";
      case "advanced":
        return "red";
      default:
        return "blue";
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading course...</div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Title level={3}>Course not found</Title>
        <Text type="secondary">{error}</Text>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={() => router.push("/admin/courses")}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Course Header */}
      <Card style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Space>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push("/admin/courses")}
            >
              Back to Courses
            </Button>
            <Button
              icon={<EditOutlined />}
              onClick={() => router.push(`/admin/courses/${courseId}/edit`)}
            >
              Edit Course
            </Button>
          </Space>

          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={6}>
              <Image
                src={course.image}
                alt={course.title}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
                fallback="/images/course-placeholder.jpg"
              />
            </Col>
            <Col xs={24} md={18}>
              <Title level={2} style={{ margin: 0 }}>
                {course.title}
              </Title>
              <Paragraph type="secondary" style={{ margin: "8px 0" }}>
                {course.description}
              </Paragraph>
              <Space>
                <Tag color={getLevelColor(course.level)}>
                  {course.level.toUpperCase()}
                </Tag>
                <Tag color="blue" icon={<ClockCircleOutlined />}>
                  {course.duration}
                </Tag>
                <Text type="secondary">
                  {course.lessons?.length || 0} lessons
                </Text>
              </Space>
            </Col>
          </Row>
        </Space>
      </Card>

      {/* Lessons & Exercises Tabs */}
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane
          tab={
            <Space>
              <BookOutlined />
              Lessons ({course.lessons?.length || 0})
            </Space>
          }
          key="lessons"
        >
          <LessonList
            course={course}
            onEditLesson={handleEditLesson}
            onCreateLesson={handleCreateLesson}
            onViewExercises={handleViewExercises}
            refreshCourse={refreshCourse}
          />
        </TabPane>

        <TabPane
          tab={
            <Space>
              <FileTextOutlined />
              Exercises {selectedLesson && `- ${selectedLesson.title}`}
            </Space>
          }
          key="exercises"
          disabled={!selectedLesson}
        >
          {selectedLesson && (
            <ExerciseList
              courseId={courseId}
              lesson={selectedLesson}
              onEditExercise={handleEditExercise}
              onCreateExercise={handleCreateExercise}
              refreshLesson={refreshCourse}
            />
          )}
        </TabPane>
      </Tabs>

      {/* Lesson Modal */}
      <Modal
        title={editingLesson ? "Edit Lesson" : "Create Lesson"}
        open={isLessonModalOpen}
        onCancel={() => {
          setIsLessonModalOpen(false);
          setEditingLesson(undefined);
        }}
        footer={null}
        width={800}
        destroyOnClose
      >
        <LessonForm
          courseId={courseId}
          course={course}
          initialData={editingLesson}
          onSuccess={handleLessonSuccess}
          onCancel={() => {
            setIsLessonModalOpen(false);
            setEditingLesson(undefined);
          }}
        />
      </Modal>

      {/* Exercise Modal */}
      <Modal
        title={editingExercise ? "Edit Exercise" : "Create Exercise"}
        open={isExerciseModalOpen}
        onCancel={() => {
          setIsExerciseModalOpen(false);
          setEditingExercise(undefined);
        }}
        footer={null}
        width={800}
        destroyOnClose
      >
        <ExerciseForm
          courseId={courseId}
          lessonId={selectedLesson?.id || ""}
          initialData={editingExercise}
          onSuccess={handleExerciseSuccess}
          onCancel={() => {
            setIsExerciseModalOpen(false);
            setEditingExercise(undefined);
          }}
        />
      </Modal>
    </div>
  );
}
