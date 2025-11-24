// components/LessonForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Space,
  message,
  Divider,
  Row,
  Col,
  Typography,
  Select,
} from "antd";
import {
  SaveOutlined,
  CloseOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Lesson, Course } from "@/types";
import { lessonService } from "@/services/lessonService";

const { TextArea } = Input;
const { Option } = Select;
const { Title, Text } = Typography;

interface LessonFormProps {
  courseId: string;
  course: Course;
  onSuccess?: (lessonId: string) => void;
  onCancel?: () => void;
  initialData?: Partial<Lesson>;
}

export const LessonForm: React.FC<LessonFormProps> = ({
  courseId,
  course,
  onSuccess,
  onCancel,
  initialData,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [prerequisites, setPrerequisites] = useState<string[]>(
    initialData?.prerequisites || []
  );

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        title: initialData.title,
        slug: initialData.slug,
        content: initialData.content,
        duration: initialData.duration,
      });
      setPrerequisites(initialData.prerequisites || []);
    }
  }, [initialData, form]);

  const handleSubmit = async (values: Omit<Lesson, "id" | "exercises">) => {
    setLoading(true);
    try {
      let lessonId: string;

      if (initialData?.id) {
        // Update existing lesson
        await lessonService.updateLesson(courseId, initialData.id, {
          ...values,
          prerequisites,
        });
        lessonId = initialData.id;
        message.success("Lesson updated successfully!");
      } else {
        // Create new lesson
        lessonId = await lessonService.createLesson(courseId, {
          ...values,
          prerequisites,
          exercises: [],
        });
        message.success("Lesson created successfully!");
      }

      onSuccess?.(lessonId);
    } catch (err) {
      console.error(err);
      message.error("Failed to save lesson");
    } finally {
      setLoading(false);
    }
  };

  const addPrerequisite = () => {
    const newPrereq = form.getFieldValue("newPrerequisite");
    if (newPrereq && !prerequisites.includes(newPrereq)) {
      setPrerequisites([...prerequisites, newPrereq]);
      form.setFieldValue("newPrerequisite", "");
    }
  };

  const removePrerequisite = (prereq: string) => {
    setPrerequisites(prerequisites.filter((p) => p !== prereq));
  };

  const availableLessons =
    course.lessons?.filter((lesson) => lesson.id !== initialData?.id) || [];

  return (
    <Card
      title={
        <Title level={2} style={{ margin: 0 }}>
          {initialData?.id ? "Edit Lesson" : "Create New Lesson"}
        </Title>
      }
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Lesson Title"
              name="title"
              rules={[
                { required: true, message: "Please enter lesson title" },
                { min: 3, message: "Title must be at least 3 characters" },
              ]}
            >
              <Input placeholder="Enter lesson title" size="large" allowClear />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Slug"
              name="slug"
              rules={[
                { required: true, message: "Please enter lesson slug" },
                {
                  pattern: /^[a-z0-9-]+$/,
                  message: "Use only lowercase letters, numbers, and hyphens",
                },
              ]}
            >
              <Input placeholder="lesson-slug" size="large" allowClear />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Please enter lesson duration" }]}
        >
          <Input
            placeholder="e.g., 30 minutes, 1 hour"
            size="large"
            allowClear
          />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[
            { required: true, message: "Please enter lesson content" },
            { min: 10, message: "Content must be at least 10 characters" },
          ]}
        >
          <TextArea
            placeholder="Enter the lesson content, instructions, or description..."
            rows={6}
            showCount
            maxLength={2000}
            allowClear
          />
        </Form.Item>

        <Divider>Prerequisites</Divider>

        <Form.Item label="Add Prerequisite">
          <Space.Compact style={{ width: "100%" }}>
            <Select
              placeholder="Select prerequisite lesson"
              size="large"
              onChange={(value) => form.setFieldValue("newPrerequisite", value)}
            >
              {availableLessons.map((lesson) => (
                <Option key={lesson.id} value={lesson.id}>
                  {lesson.title}
                </Option>
              ))}
            </Select>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={addPrerequisite}
              size="large"
            >
              Add
            </Button>
          </Space.Compact>
        </Form.Item>

        {prerequisites.length > 0 && (
          <Form.Item label="Current Prerequisites">
            <Space direction="vertical" style={{ width: "100%" }}>
              {prerequisites.map((prereqId) => {
                const lesson = course.lessons?.find((l) => l.id === prereqId);
                return (
                  <Card
                    key={prereqId}
                    size="small"
                    style={{ backgroundColor: "#fafafa" }}
                    extra={
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => removePrerequisite(prereqId)}
                        size="small"
                      />
                    }
                  >
                    <Text strong>{lesson?.title || "Unknown Lesson"}</Text>
                  </Card>
                );
              })}
            </Space>
          </Form.Item>
        )}

        <Form.Item style={{ marginBottom: 0, marginTop: 32 }}>
          <Space
            size="middle"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button icon={<CloseOutlined />} onClick={onCancel} size="large">
              Cancel
            </Button>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              htmlType="submit"
              loading={loading}
              size="large"
            >
              {initialData?.id ? "Update Lesson" : "Create Lesson"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
