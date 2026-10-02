"use client";
import React from "react";
import LessonContent from "@/components/LessonContent";
import NotFoundView from "@/components/NotFoundView";
import PageShell from "@/components/PageShell";
import ProgressTracker from "@/components/ProgressTracker";
import { courses } from "@/data";

interface LessonPageProps {
  params: {
    slug: string;
    lessonSlug: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
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

  const currentLesson = course.lessons.find(
    (lesson) => lesson.slug === params.lessonSlug,
  );

  if (!currentLesson) {
    return (
      <NotFoundView
        message="Không tìm thấy bài học"
        backHref={`/khoa-hoc/${course.slug}`}
        backLabel="Quay lại khóa học"
      />
    );
  }

  return (
    <PageShell
      headerTitle={currentLesson.title}
      trail={[
        { title: course.title, href: `/khoa-hoc/${course.slug}` },
        { title: currentLesson.title },
      ]}
    >
      <div className="layout-grid">
        <LessonContent
          lesson={currentLesson}
          courseSlug={course.slug}
          completed={false} // You can add completion logic here
        />
        <ProgressTracker
          lessons={course.lessons}
          currentLessonId={currentLesson.id}
          courseSlug={course.slug}
        />
      </div>
    </PageShell>
  );
}
