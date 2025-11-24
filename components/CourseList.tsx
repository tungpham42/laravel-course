// components/CourseList.tsx
"use client";
import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Space,
  Tag,
  Typography,
  Image,
  Empty,
  Spin,
  message,
  Popconfirm,
  Grid,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useCourses } from "@/hooks/useCourses";
import { Course } from "@/types";

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

interface CourseListProps {
  onEditCourse?: (course: Course) => void;
  onCreateCourse?: () => void;
  onViewCourse?: (course: Course) => void;
}

export const CourseList: React.FC<CourseListProps> = ({
  onEditCourse,
  onCreateCourse,
  onViewCourse,
}) => {
  const { courses, loading, error, deleteCourse } = useCourses();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const screens = useBreakpoint();

  const handleDelete = async (courseId: string) => {
    setDeletingId(courseId);
    try {
      await deleteCourse(courseId);
      message.success("Course deleted successfully!");
    } catch (err) {
      console.error(err);
      message.error("Failed to delete course");
    } finally {
      setDeletingId(null);
    }
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
        <div style={{ marginTop: 16 }}>Loading courses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span>Failed to load courses: {error}</span>}
        >
          <Button type="primary" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Empty>
      </Card>
    );
  }

  return (
    <div style={{ padding: screens.xs ? 16 : 24 }}>
      <div style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              Courses ({courses.length})
            </Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={onCreateCourse}
            >
              Create Course
            </Button>
          </Col>
        </Row>
      </div>

      {courses.length === 0 ? (
        <Card>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No courses found"
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={onCreateCourse}
            >
              Create First Course
            </Button>
          </Empty>
        </Card>
      ) : (
        <Row gutter={[16, 16]}>
          {courses.map((course) => (
            <Col key={course.id} xs={24} sm={12} lg={8} xl={6}>
              <Card
                hoverable
                cover={
                  <div style={{ height: 200, overflow: "hidden" }}>
                    <Image
                      alt={course.title}
                      src={course.image}
                      preview={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      fallback="/images/course-placeholder.jpg"
                    />
                  </div>
                }
                actions={[
                  <React.Fragment key="view">
                    <Button
                      type="text"
                      icon={<EyeOutlined />}
                      onClick={() => onViewCourse?.(course)}
                    >
                      View
                    </Button>
                  </React.Fragment>,
                  <React.Fragment key="edit">
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => onEditCourse?.(course)}
                    >
                      Edit
                    </Button>
                  </React.Fragment>,
                  <React.Fragment key="delete">
                    <Popconfirm
                      title="Delete this course?"
                      description="Are you sure you want to delete this course? This action cannot be undone."
                      onConfirm={() => handleDelete(course.id)}
                      okText="Yes"
                      cancelText="No"
                      okType="danger"
                    >
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        loading={deletingId === course.id}
                      >
                        Delete
                      </Button>
                    </Popconfirm>
                  </React.Fragment>,
                ]}
              >
                <Meta
                  title={
                    <Typography.Title level={5} ellipsis={{ rows: 2 }}>
                      {course.title}
                    </Typography.Title>
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
                        style={{ margin: 0, fontSize: "14px" }}
                      >
                        {course.description}
                      </Paragraph>
                      <Space size={[0, 8]} wrap style={{ marginTop: 8 }}>
                        <Tag color={getLevelColor(course.level)}>
                          {course.level.toUpperCase()}
                        </Tag>
                        <Tag color="blue">{course.duration}</Tag>
                      </Space>
                      {course.lessons && (
                        <div style={{ fontSize: "12px", color: "#666" }}>
                          {course.lessons.length} lessons
                        </div>
                      )}
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
