"use client";
import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import ExerciseComponent from "@/components/ExerciseComponent";
import NotFoundView from "@/components/NotFoundView";
import PageShell from "@/components/PageShell";
import { getLevelLabel } from "@/components/courseTheme";
import { courses } from "@/data";

interface ExercisePageProps {
  params: {
    slug: string;
    lessonSlug: string;
    exerciseId: string;
  };
}

const EXERCISE_TYPE_LABELS: Record<string, string> = {
  "multiple-choice": "Trắc nghiệm",
  code: "Lập trình",
};
const DEFAULT_EXERCISE_TYPE_LABEL = "Lý thuyết";

export default function ExercisePage({ params }: ExercisePageProps) {
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

  const courseHref = `/khoa-hoc/${params.slug}`;
  const lesson = course.lessons.find((les) => les.slug === params.lessonSlug);

  if (!lesson) {
    return (
      <NotFoundView
        message="Không tìm thấy bài học"
        backHref={courseHref}
        backLabel="Quay lại khóa học"
      />
    );
  }

  const lessonHref = `${courseHref}/bai-hoc/${params.lessonSlug}`;
  const exercise = lesson.exercises.find((ex) => ex.id === params.exerciseId);

  if (!exercise) {
    return (
      <NotFoundView
        message="Không tìm thấy bài tập"
        backHref={lessonHref}
        backLabel="Quay lại bài học"
      />
    );
  }

  return (
    <PageShell
      headerTitle={exercise.title}
      trail={[
        { title: course.title, href: courseHref },
        { title: lesson.title, href: lessonHref },
        { title: exercise.title },
      ]}
    >
      <div style={{ marginBottom: 20 }}>
        <Link href={lessonHref} className="btn btn--outline btn--sm">
          <LeftOutlined /> Quay lại bài học
        </Link>
      </div>

      <div className="layout-grid layout-grid--exercise">
        <ExerciseComponent exercise={exercise} />

        <aside className="panel sticky">
          <h2 className="panel__title">Thông tin bài tập</h2>
          <dl className="info-list">
            <div>
              <dt>Khóa học</dt>
              <dd>{course.title}</dd>
            </div>
            <div>
              <dt>Bài học</dt>
              <dd>{lesson.title}</dd>
            </div>
            <div>
              <dt>Loại bài tập</dt>
              <dd>
                {EXERCISE_TYPE_LABELS[exercise.type] ??
                  DEFAULT_EXERCISE_TYPE_LABEL}
              </dd>
            </div>
            <div>
              <dt>Độ khó</dt>
              <dd>{getLevelLabel(course.level)}</dd>
            </div>
            <div>
              <dt>Thời lượng</dt>
              <dd>{lesson.duration}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </PageShell>
  );
}
