"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Tag, Timeline, Button } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Lesson } from "@/types";
import Link from "next/link";

interface LessonContentProps {
  lesson: Lesson;
  courseSlug: string;
  completed?: boolean;
}

const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  courseSlug,
  completed = false,
}) => {
  return (
    <div>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <Tag icon={<ClockCircleOutlined />} color="blue">
            {lesson.duration}
          </Tag>
          {completed && (
            <Tag icon={<CheckCircleOutlined />} color="green">
              Đã hoàn thành
            </Tag>
          )}
        </div>

        <ReactMarkdown>{lesson.content}</ReactMarkdown>

        {lesson.exercises.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <h3>📝 Bài tập ({lesson.exercises.length})</h3>
            <Timeline>
              {lesson.exercises.map((exercise, index) => (
                <Timeline.Item
                  key={exercise.id}
                  dot={<CheckCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  <Link
                    href={`/khoa-hoc/${courseSlug}/bai-hoc/${lesson.slug}/bai-tap/${exercise.id}`}
                  >
                    <Button type="link" style={{ padding: 0 }}>
                      {index + 1}. {exercise.title}
                    </Button>
                  </Link>
                  <p style={{ margin: 0, color: "#666" }}>
                    {exercise.description}
                  </p>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        )}
      </Card>
    </div>
  );
};

export default LessonContent;
