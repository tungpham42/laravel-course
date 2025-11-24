// components/ExerciseForm.tsx
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
  Collapse,
} from "antd";
import {
  SaveOutlined,
  CloseOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Exercise } from "@/types";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;
const { Panel } = Collapse;

interface ExerciseFormProps {
  courseId: string;
  lessonId: string;
  onSuccess?: (exerciseId: string) => void;
  onCancel?: () => void;
  initialData?: Partial<Exercise>;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({
  courseId,
  lessonId,
  onSuccess,
  onCancel,
  initialData,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [exerciseType, setExerciseType] = useState<Exercise["type"]>(
    initialData?.type || "theory"
  );
  const [options, setOptions] = useState<string[]>(initialData?.options || []);
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        title: initialData.title,
        description: initialData.description,
        instructions: initialData.instructions,
        starterCode: initialData.starterCode,
        solution: initialData.solution,
        type: initialData.type,
        correctAnswer: initialData.correctAnswer,
      });
      setExerciseType(initialData.type || "theory");
      setOptions(initialData.options || []);
    }
  }, [initialData, form]);

  const handleSubmit = async (values: Omit<Exercise, "id">) => {
    setLoading(true);
    try {
      const exerciseData = {
        ...values,
        options: exerciseType === "multiple-choice" ? options : undefined,
        correctAnswer:
          exerciseType !== "theory" ? values.correctAnswer : undefined,
      };

      // Import here to avoid circular dependencies
      const { exerciseService } = await import("@/services/exerciseService");

      let exerciseId: string;

      if (initialData?.id) {
        // Update existing exercise
        await exerciseService.updateExercise(
          courseId,
          lessonId,
          initialData.id,
          exerciseData
        );
        exerciseId = initialData.id;
        message.success("Exercise updated successfully!");
      } else {
        // Create new exercise
        exerciseId = await exerciseService.createExercise(
          courseId,
          lessonId,
          exerciseData
        );
        message.success("Exercise created successfully!");
      }

      onSuccess?.(exerciseId);
    } catch (err) {
      console.error(err);
      message.error("Failed to save exercise");
    } finally {
      setLoading(false);
    }
  };

  const addOption = () => {
    if (newOption.trim() && !options.includes(newOption.trim())) {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
    }
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleTypeChange = (type: Exercise["type"]) => {
    setExerciseType(type);
    // Clear options when switching away from multiple-choice
    if (type !== "multiple-choice") {
      setOptions([]);
    }
  };

  return (
    <Card
      title={
        <Title level={2} style={{ margin: 0 }}>
          {initialData?.id ? "Edit Exercise" : "Create New Exercise"}
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
              label="Exercise Title"
              name="title"
              rules={[
                { required: true, message: "Please enter exercise title" },
                { min: 3, message: "Title must be at least 3 characters" },
              ]}
            >
              <Input
                placeholder="Enter exercise title"
                size="large"
                allowClear
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                { required: true, message: "Please select exercise type" },
              ]}
            >
              <Select
                size="large"
                placeholder="Select exercise type"
                onChange={handleTypeChange}
              >
                <Option value="theory">Theory</Option>
                <Option value="multiple-choice">Multiple Choice</Option>
                <Option value="code">Code</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter exercise description" },
          ]}
        >
          <TextArea
            placeholder="Describe what this exercise is about..."
            rows={3}
            allowClear
          />
        </Form.Item>

        <Form.Item
          label="Instructions"
          name="instructions"
          rules={[
            { required: true, message: "Please enter exercise instructions" },
          ]}
        >
          <TextArea
            placeholder="Provide clear instructions for the exercise..."
            rows={4}
            allowClear
          />
        </Form.Item>

        {exerciseType === "multiple-choice" && (
          <>
            <Divider>Multiple Choice Options</Divider>

            <Form.Item label="Add Option">
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  placeholder="Enter option text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  size="large"
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={addOption}
                  size="large"
                >
                  Add
                </Button>
              </Space.Compact>
            </Form.Item>

            {options.length > 0 && (
              <Form.Item label="Options">
                <Space direction="vertical" style={{ width: "100%" }}>
                  {options.map((option, index) => (
                    <Card
                      key={index}
                      size="small"
                      style={{ backgroundColor: "#fafafa" }}
                      extra={
                        <Button
                          type="text"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => removeOption(index)}
                          size="small"
                        />
                      }
                    >
                      <Space>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: "#1890ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 12,
                          }}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span>{option}</span>
                      </Space>
                    </Card>
                  ))}
                </Space>
              </Form.Item>
            )}

            <Form.Item
              label="Correct Answer"
              name="correctAnswer"
              rules={[
                { required: true, message: "Please select correct answer" },
              ]}
            >
              <Select placeholder="Select correct option" size="large">
                {options.map((_, index) => (
                  <Option key={index} value={index}>
                    Option {String.fromCharCode(65 + index)}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}

        {exerciseType === "code" && (
          <>
            <Divider>Code Exercise</Divider>

            <Form.Item label="Starter Code" name="starterCode">
              <TextArea
                placeholder="Provide starter code for the exercise..."
                rows={6}
                allowClear
              />
            </Form.Item>

            <Form.Item label="Solution" name="solution">
              <TextArea
                placeholder="Provide the solution code..."
                rows={6}
                allowClear
              />
            </Form.Item>
          </>
        )}

        <Collapse ghost style={{ marginBottom: 24 }}>
          <Panel header="Advanced Settings" key="1">
            <Form.Item
              label="Correct Answer (for theory exercises)"
              name="correctAnswer"
              help="For theory exercises, this can be a reference answer"
            >
              <Input placeholder="Reference answer or key points..." />
            </Form.Item>
          </Panel>
        </Collapse>

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
              {initialData?.id ? "Update Exercise" : "Create Exercise"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
