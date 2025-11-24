"use client";
import React, { useState } from "react";
import {
  Card,
  Button,
  Radio,
  Space,
  Form,
  message,
  Alert,
  Tabs,
  Tag,
} from "antd";
import { Exercise } from "@/types";

interface ExerciseComponentProps {
  exercise: Exercise;
}

const ExerciseComponent: React.FC<ExerciseComponentProps> = ({ exercise }) => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (values: any) => {
    setSubmitted(true);

    if (exercise.type === "multiple-choice") {
      const correct = values.answer === exercise.correctAnswer;
      setIsCorrect(correct);

      if (correct) {
        message.success("Chính xác! 🎉");
      } else {
        message.error("Chưa chính xác. Hãy thử lại!");
      }
    }
  };

  const renderMultipleChoice = () => (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        name="answer"
        label="Chọn câu trả lời đúng:"
        rules={[{ required: true, message: "Vui lòng chọn câu trả lời" }]}
      >
        <Radio.Group>
          <Space direction="vertical">
            {exercise.options?.map((option, index) => (
              <Radio key={index} value={index}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Kiểm tra kết quả
        </Button>
      </Form.Item>
    </Form>
  );

  const renderCodeExercise = () => (
    <Tabs
      items={[
        {
          key: "instructions",
          label: "Hướng dẫn",
          children: (
            <div>
              <p>{exercise.instructions}</p>
              {exercise.starterCode && (
                <Alert
                  message="Code mẫu"
                  description={
                    <pre
                      style={{
                        background: "#f5f5f5",
                        padding: 12,
                        borderRadius: 6,
                      }}
                    >
                      {exercise.starterCode}
                    </pre>
                  }
                  type="info"
                  style={{ marginTop: 16 }}
                />
              )}
            </div>
          ),
        },
        {
          key: "solution",
          label: "Lời giải",
          children: (
            <Alert
              message="Đáp án"
              description={
                <pre
                  style={{
                    background: "#f6ffed",
                    padding: 12,
                    borderRadius: 6,
                  }}
                >
                  {exercise.solution}
                </pre>
              }
              type="success"
            />
          ),
        },
      ]}
    />
  );

  return (
    <Card
      title={exercise.title}
      extra={
        <Tag
          color={
            exercise.type === "multiple-choice"
              ? "blue"
              : exercise.type === "code"
              ? "green"
              : "orange"
          }
        >
          {exercise.type === "multiple-choice"
            ? "Trắc nghiệm"
            : exercise.type === "code"
            ? "Lập trình"
            : "Lý thuyết"}
        </Tag>
      }
    >
      <p>
        <strong>Mô tả:</strong> {exercise.description}
      </p>

      {submitted && isCorrect && (
        <Alert
          message="Chúc mừng!"
          description="Bạn đã trả lời đúng câu hỏi này."
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      {submitted && !isCorrect && exercise.type === "multiple-choice" && (
        <Alert
          message="Chưa chính xác"
          description="Hãy kiểm tra lại câu trả lời của bạn."
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      {exercise.type === "multiple-choice" && renderMultipleChoice()}
      {exercise.type === "code" && renderCodeExercise()}
      {exercise.type === "theory" && (
        <div>
          <p>{exercise.instructions}</p>
          <Alert
            message="Bài tập lý thuyết"
            description="Hãy nghiên cứu kỹ tài liệu và trả lời câu hỏi dựa trên hiểu biết của bạn."
            type="info"
            showIcon
          />
        </div>
      )}
    </Card>
  );
};

export default ExerciseComponent;
