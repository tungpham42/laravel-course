// components/ExerciseList.tsx
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
  Collapse,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CodeOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Exercise, Lesson } from "@/types";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;
const { Panel } = Collapse;

interface ExerciseListProps {
  courseId: string;
  lesson: Lesson;
  onEditExercise?: (exercise: Exercise) => void;
  onCreateExercise?: () => void;
  refreshLesson?: () => void;
}

export const ExerciseList: React.FC<ExerciseListProps> = ({
  courseId,
  lesson,
  onEditExercise,
  onCreateExercise,
  refreshLesson,
}) => {
  const [exercises, setExercises] = useState<Exercise[]>(
    lesson.exercises || []
  );
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const screens = useBreakpoint();

  useEffect(() => {
    setExercises(lesson.exercises || []);
    setLoading(false);
  }, [lesson]);

  const handleDelete = async (exerciseId: string) => {
    setDeletingId(exerciseId);
    try {
      const { exerciseService } = await import("@/services/exerciseService");
      await exerciseService.deleteExercise(courseId, lesson.id, exerciseId);
      message.success("Exercise deleted successfully!");
      refreshLesson?.();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete exercise");
    } finally {
      setDeletingId(null);
    }
  };

  const getExerciseIcon = (type: Exercise["type"]) => {
    switch (type) {
      case "code":
        return <CodeOutlined />;
      case "multiple-choice":
        return <QuestionCircleOutlined />;
      case "theory":
        return <FileTextOutlined />;
      default:
        return <FileTextOutlined />;
    }
  };

  const getExerciseColor = (type: Exercise["type"]) => {
    switch (type) {
      case "code":
        return "blue";
      case "multiple-choice":
        return "green";
      case "theory":
        return "orange";
      default:
        return "default";
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading exercises...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: screens.xs ? 16 : 24 }}>
      <div style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              Exercises ({exercises.length})
            </Title>
            <Text type="secondary">for {lesson.title}</Text>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={onCreateExercise}
            >
              Add Exercise
            </Button>
          </Col>
        </Row>
      </div>

      {exercises.length === 0 ? (
        <Card>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No exercises found for this lesson"
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={onCreateExercise}
            >
              Create First Exercise
            </Button>
          </Empty>
        </Card>
      ) : (
        <Collapse ghost>
          {exercises.map((exercise) => (
            <Panel
              key={exercise.id}
              header={
                <Space>
                  {getExerciseIcon(exercise.type)}
                  <Text strong>{exercise.title}</Text>
                  <Tag color={getExerciseColor(exercise.type)}>
                    {exercise.type.replace("-", " ").toUpperCase()}
                  </Tag>
                </Space>
              }
              extra={
                <Space>
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditExercise?.(exercise);
                    }}
                  >
                    Edit
                  </Button>
                  <Popconfirm
                    title="Delete this exercise?"
                    description="Are you sure you want to delete this exercise?"
                    onConfirm={(e) => {
                      e?.stopPropagation();
                      handleDelete(exercise.id);
                    }}
                    okText="Yes"
                    cancelText="No"
                    okType="danger"
                  >
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      loading={deletingId === exercise.id}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Delete
                    </Button>
                  </Popconfirm>
                </Space>
              }
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <div>
                  <Text strong>Description: </Text>
                  <Paragraph style={{ margin: 0 }}>
                    {exercise.description}
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Instructions: </Text>
                  <Paragraph style={{ margin: 0 }}>
                    {exercise.instructions}
                  </Paragraph>
                </div>

                {exercise.type === "multiple-choice" && exercise.options && (
                  <div>
                    <Text strong>Options: </Text>
                    <ol>
                      {exercise.options.map((option, idx) => (
                        <li key={idx}>
                          <Text code={idx === exercise.correctAnswer}>
                            {option}
                            {idx === exercise.correctAnswer && " ✓"}
                          </Text>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {exercise.type === "code" && exercise.starterCode && (
                  <div>
                    <Text strong>Starter Code: </Text>
                    <pre
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: 12,
                        borderRadius: 6,
                        margin: "8px 0",
                        overflow: "auto",
                      }}
                    >
                      <code>{exercise.starterCode}</code>
                    </pre>
                  </div>
                )}

                {exercise.solution && (
                  <div>
                    <Text strong>Solution: </Text>
                    <pre
                      style={{
                        backgroundColor: "#f6ffed",
                        padding: 12,
                        borderRadius: 6,
                        margin: "8px 0",
                        overflow: "auto",
                      }}
                    >
                      <code>{exercise.solution}</code>
                    </pre>
                  </div>
                )}
              </Space>
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};
