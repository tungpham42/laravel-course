"use client";
import React, { useState } from "react";
import { Button, Radio, Form, message, Alert, Tabs } from "antd";
import { Exercise } from "@/types";

interface ExerciseComponentProps {
  exercise: Exercise;
}

const TYPE_META: Record<string, { label: string; pill: string }> = {
  "multiple-choice": { label: "Trắc nghiệm", pill: "pill--soft" },
  code: { label: "Lập trình", pill: "pill--success" },
  theory: { label: "Lý thuyết", pill: "pill--warm" },
};

const ExerciseComponent: React.FC<ExerciseComponentProps> = ({ exercise }) => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const meta = TYPE_META[exercise.type] ?? TYPE_META.theory;

  const handleSubmit = (values: { answer: number }) => {
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
        <Radio.Group className="choice-group">
          {exercise.options?.map((option, index) => (
            <Radio key={index} value={index}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Button type="primary" size="large" htmlType="submit">
        Kiểm tra kết quả
      </Button>
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
              <p style={{ lineHeight: 1.7 }}>{exercise.instructions}</p>
              {exercise.starterCode && (
                <>
                  <div className="code-label">Code mẫu</div>
                  <pre className="code-block">{exercise.starterCode}</pre>
                </>
              )}
            </div>
          ),
        },
        {
          key: "solution",
          label: "Lời giải",
          children: (
            <>
              <div className="code-label">Đáp án</div>
              <pre className="code-block">{exercise.solution}</pre>
            </>
          ),
        },
      ]}
    />
  );

  return (
    <article className="panel">
      <div className="exercise-head">
        <h2>{exercise.title}</h2>
        <span className={`pill ${meta.pill}`}>{meta.label}</span>
      </div>
      <p className="exercise-desc">{exercise.description}</p>

      {submitted && isCorrect && (
        <Alert
          title="Chúc mừng!"
          description="Bạn đã trả lời đúng câu hỏi này."
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      {submitted && !isCorrect && exercise.type === "multiple-choice" && (
        <Alert
          title="Chưa chính xác"
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
          <p style={{ marginBottom: 16, lineHeight: 1.7 }}>
            {exercise.instructions}
          </p>
          <Alert
            title="Bài tập lý thuyết"
            description="Hãy nghiên cứu kỹ tài liệu và trả lời câu hỏi dựa trên hiểu biết của bạn."
            type="info"
            showIcon
          />
        </div>
      )}
    </article>
  );
};

export default ExerciseComponent;
