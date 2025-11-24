// components/CourseForm.tsx
"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Card,
  Space,
  message,
  Divider,
  Row,
  Col,
  Typography,
} from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Course } from "@/types";
import { courseService } from "@/services/courseService";
import Image from "next/image";

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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    initialData?.image || ""
  );

  const handleSubmit = async (values: Omit<Course, "id" | "lessons">) => {
    setLoading(true);
    try {
      let courseId: string;

      if (initialData?.id) {
        // Update existing course
        await courseService.updateCourse(
          initialData.id,
          values,
          imageFile || undefined
        );
        courseId = initialData.id;
        message.success("Course updated successfully!");
      } else {
        // Create new course
        courseId = await courseService.createCourse(
          {
            ...values,
            lessons: [],
          },
          imageFile || undefined
        );
        message.success("Course created successfully!");
      }

      onSuccess?.(courseId);
    } catch (err) {
      console.error(err);
      message.error("Failed to save course");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange: UploadProps["onChange"] = (info) => {
    const file = info.file.originFileObj;
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        message.error("Please select a valid image file");
        return;
      }

      // Validate file size (25MB max)
      if (file.size > 25 * 1024 * 1024) {
        message.error("Image size should be less than 25MB");
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
    form.setFieldValue("image", null);
  };

  const normFile = (e: UploadFile[] | { fileList: UploadFile[] }) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Course Image"
              name="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  validator: () => {
                    if (!imagePreview && !initialData?.image) {
                      return Promise.reject(
                        new Error("Please upload a course image")
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <div style={{ textAlign: "center" }}>
                {imagePreview && (
                  <div style={{ marginBottom: 16 }}>
                    <Image
                      src={imagePreview}
                      alt="Course preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: 300,
                        borderRadius: 8,
                        border: "1px solid #d9d9d9",
                      }}
                    />
                    <div style={{ marginTop: 8 }}>
                      <Button
                        icon={<DeleteOutlined />}
                        onClick={handleRemoveImage}
                        danger
                        size="small"
                      >
                        Remove Image
                      </Button>
                    </div>
                  </div>
                )}
                {!imagePreview && (
                  <Upload.Dragger
                    name="image"
                    listType="picture"
                    multiple={false}
                    beforeUpload={() => false}
                    onChange={handleImageChange}
                    accept="image/*"
                    showUploadList={false}
                    style={{ padding: 20 }}
                  >
                    <p className="ant-upload-drag-icon">
                      <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag image to upload
                    </p>
                    <p className="ant-upload-hint">
                      Recommended: 800x450px, max 25MB
                    </p>
                  </Upload.Dragger>
                )}
              </div>
            </Form.Item>
          </Col>
        </Row>

        <Divider />

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
              <Input placeholder="Enter course title" size="large" allowClear />
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
                  message: "Use only lowercase letters, numbers, and hyphens",
                },
              ]}
            >
              <Input placeholder="course-slug-name" size="large" allowClear />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter course description" },
            { min: 10, message: "Description must be at least 10 characters" },
          ]}
        >
          <TextArea
            placeholder="Describe what students will learn in this course..."
            rows={4}
            showCount
            maxLength={500}
            allowClear
          />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Duration"
              name="duration"
              rules={[
                { required: true, message: "Please enter course duration" },
              ]}
            >
              <Input
                placeholder="e.g., 4 weeks, 10 hours"
                size="large"
                allowClear
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Level"
              name="level"
              rules={[
                { required: true, message: "Please select course level" },
              ]}
            >
              <Select size="large" placeholder="Select difficulty level">
                <Option value="beginner">Beginner</Option>
                <Option value="intermediate">Intermediate</Option>
                <Option value="advanced">Advanced</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

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
              {initialData?.id ? "Update Course" : "Create Course"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
