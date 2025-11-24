"use client";
import React from "react";
import { Steps, Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Lesson } from "@/types";
import Link from "next/link";

interface ProgressTrackerProps {
  lessons: Lesson[];
  currentLessonId: string;
  courseSlug: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  lessons,
  currentLessonId,
  courseSlug,
}) => {
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  return (
    <Card title="Tiến độ khóa học" size="small">
      <Steps
        direction="vertical"
        current={currentIndex}
        items={lessons.map((lesson, index) => ({
          title: (
            <Link href={`/khoa-hoc/${courseSlug}/bai-hoc/${lesson.slug}`}>
              <Button type="link" style={{ padding: 0, height: "auto" }}>
                {lesson.title}
              </Button>
            </Link>
          ),
          description: lesson.duration,
          icon: index < currentIndex ? <CheckCircleOutlined /> : undefined,
          status:
            index < currentIndex
              ? "finish"
              : index === currentIndex
              ? "process"
              : "wait",
        }))}
      />
    </Card>
  );
};

export default ProgressTracker;
