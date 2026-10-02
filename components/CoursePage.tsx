"use client";
import React from "react";
import { ClockCircleOutlined, ReadOutlined } from "@ant-design/icons";
import LessonContent from "@/components/LessonContent";
import NotFoundView from "@/components/NotFoundView";
import PageShell from "@/components/PageShell";
import ProgressTracker from "@/components/ProgressTracker";
import { getLevelLabel } from "@/components/courseTheme";
import { courses } from "@/data";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <NotFoundView
        message="Không tìm thấy khóa học"
        backHref="/khoa-hoc"
        backLabel="Quay lại danh sách khóa học"
      />
    );
  }

  const firstLesson = course.lessons[0];

  return (
    <PageShell headerTitle={course.title} trail={[{ title: course.title }]}>
      <div className="chip-row" style={{ marginBottom: 24 }}>
        <span className="pill pill--soft">{getLevelLabel(course.level)}</span>
        <span className="pill pill--soft">
          <ClockCircleOutlined /> {course.duration}
        </span>
        <span className="pill pill--soft">
          <ReadOutlined /> {course.lessons.length} bài học
        </span>
      </div>

      <div className="layout-grid">
        <LessonContent lesson={firstLesson} courseSlug={course.slug} />
        <ProgressTracker
          lessons={course.lessons}
          currentLessonId={firstLesson.id}
          courseSlug={course.slug}
        />
      </div>
    </PageShell>
  );
}
