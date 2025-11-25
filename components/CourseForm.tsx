// components/CourseForm.tsx
"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  message,
  Divider,
  Row,
  Col,
  Typography,
} from "antd";
import { Course } from "@/types";
import { courseService } from "@/services/courseService";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

interface CourseFormProps {
  onSuccess?: (courseId: string) => void;
  onCancel?: () => void;
  initialData?: Partial<Course>;
}

export const CourseForm: React.FC<CourseFormProps> = ({
  onSuccess,
  onCancel,
  initialData,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Omit<Course, "id" | "lessons">) => {
    setLoading(true);
    try {
      let courseId: string;

      if (initialData?.id) {
        // Update existing course
        await courseService.updateCourse(initialData.id, values);
        courseId = initialData.id;
        message.success("Course updated successfully!");
      } else {
        // Create new course
        courseId = await courseService.createCourse({
          ...values,
          lessons: [],
          image: "", // Empty image field
        });
        message.success("Course created successfully!");
      }

      onSuccess?.(courseId);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error(error);
      message.error(error.message || "Failed to save course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={
        <Title level={2} style={{ margin: 0 }}>
          {initialData?.id ? "Edit Course" : "Create New Course"}
        </Title>
      }
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          title: initialData?.title || "",
          slug: initialData?.slug || "",
          description: initialData?.description || "",
          duration: initialData?.duration || "",
          level: initialData?.level || "beginner",
        }}
        requiredMark="optional"
      >
        <Divider />

        {/* Other Fields */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Course Title"
              name="title"
              rules={[
                { required: true, message: "Please enter course title" },
                { min: 3, message: "Title must be at least 3 characters" },
              ]}
            >
              <Input placeholder="Enter course title" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Slug"
              name="slug"
              rules={[
                { required: true, message: "Please enter course slug" },
                {
                  pattern: /^[a-z0-9-]+$/,
                  message:
                    "Only lowercase letters, numbers, and hyphens allowed",
                },
              ]}
            >
              <Input placeholder="my-awesome-course" size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter description" },
            { min: 10, message: "Description too short" },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="What will students learn?"
            maxLength={500}
            showCount
          />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Duration"
              name="duration"
              rules={[{ required: true }]}
            >
              <Input placeholder="e.g., 6 weeks, 12 hours" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Level" name="level" rules={[{ required: true }]}>
              <Select size="large" placeholder="Select level">
                <Option value="beginner">Beginner</Option>
                <Option value="intermediate">Intermediate</Option>
                <Option value="advanced">Advanced</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginTop: 32, textAlign: "right" }}>
          <Space size="middle">
            <Button size="large" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
            >
              {initialData?.id ? "Update Course" : "Create Course"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
