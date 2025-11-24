// components/LessonList.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Space,
  Tag,
  Typography,
  Empty,
  Spin,
  message,
  Popconfirm,
  Grid,
  List,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  BookOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Lesson, Course } from "@/types";
import { lessonService } from "@/services/lessonService";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

interface LessonListProps {
  course: Course;
  onEditLesson?: (lesson: Lesson) => void;
  onCreateLesson?: () => void;
  onViewExercises?: (lesson: Lesson) => void;
  refreshCourse?: () => void;
}

export const LessonList: React.FC<LessonListProps> = ({
  course,
  onEditLesson,
  onCreateLesson,
  onViewExercises,
  refreshCourse,
}) => {
  const [lessons, setLessons] = useState<Lesson[]>(course.lessons || []);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const screens = useBreakpoint();

  useEffect(() => {
    setLessons(course.lessons || []);
    setLoading(false);
  }, [course]);

  const handleDelete = async (lessonId: string) => {
    setDeletingId(lessonId);
    try {
      await lessonService.deleteLesson(course.id, lessonId);
      message.success("Lesson deleted successfully!");
      refreshCourse?.();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete lesson");
    } finally {
      setDeletingId(null);
    }
  };

  const getPrerequisiteTitles = (prereqIds: string[] = []) => {
    return prereqIds.map((id) => {
      const lesson = lessons.find((l) => l.id === id);
      return lesson?.title || "Unknown Lesson";
    });
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading lessons...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: screens.xs ? 16 : 24 }}>
      <div style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              Lessons ({lessons.length})
            </Title>
            <Text type="secondary">for {course.title}</Text>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={onCreateLesson}
            >
              Add Lesson
            </Button>
          </Col>
        </Row>
      </div>

      {lessons.length === 0 ? (
        <Card>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No lessons found for this course"
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={onCreateLesson}
            >
              Create First Lesson
            </Button>
          </Empty>
        </Card>
      ) : (
        <List
          itemLayout="vertical"
          dataSource={lessons}
          renderItem={(lesson, index) => (
            <List.Item
              key={lesson.id}
              actions={[
                <Button
                  key="exercises"
                  type="link"
                  icon={<BookOutlined />}
                  onClick={() => onViewExercises?.(lesson)}
                >
                  Exercises ({lesson.exercises?.length || 0})
                </Button>,
                <Button
                  key="edit"
                  type="link"
                  icon={<EditOutlined />}
                  onClick={() => onEditLesson?.(lesson)}
                >
                  Edit
                </Button>,
                <Popconfirm
                  key="delete"
                  title="Delete this lesson?"
                  description="Are you sure you want to delete this lesson? All exercises will also be deleted."
                  onConfirm={() => handleDelete(lesson.id)}
                  okText="Yes"
                  cancelText="No"
                  okType="danger"
                >
                  <Button
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                    loading={deletingId === lesson.id}
                  >
                    Delete
                  </Button>
                </Popconfirm>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#1890ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {index + 1}
                  </div>
                }
                title={
                  <Space>
                    <Text strong style={{ fontSize: "16px" }}>
                      {lesson.title}
                    </Text>
                    <Tag icon={<ClockCircleOutlined />} color="blue">
                      {lesson.duration}
                    </Tag>
                  </Space>
                }
                description={
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: "100%" }}
                  >
                    <Paragraph
                      ellipsis={{ rows: 2 }}
                      type="secondary"
                      style={{ margin: 0 }}
                    >
                      {lesson.content}
                    </Paragraph>

                    {lesson.prerequisites &&
                      lesson.prerequisites.length > 0 && (
                        <div>
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            Prerequisites:{" "}
                            {getPrerequisiteTitles(lesson.prerequisites).join(
                              ", "
                            )}
                          </Text>
                        </div>
                      )}

                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      Slug: {lesson.slug}
                    </Text>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};
