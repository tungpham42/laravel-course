"use client";
import React from "react";
import Link from "next/link";
import { CheckOutlined } from "@ant-design/icons";
import { Lesson } from "@/types";

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
    (lesson) => lesson.id === currentLessonId,
  );
  const percent = lessons.length
    ? Math.round((Math.max(currentIndex, 0) / lessons.length) * 100)
    : 0;

  return (
    <aside className="panel sticky" aria-label="Tiến độ khóa học">
      <div className="progress-head">
        <h2 className="panel__title">Tiến độ khóa học</h2>
        <span>
          Bài {currentIndex + 1}/{lessons.length}
        </span>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div style={{ width: `${percent}%` }} />
      </div>

      <ol className="steps">
        {lessons.map((lesson, index) => {
          const state =
            index < currentIndex
              ? "done"
              : index === currentIndex
                ? "current"
                : "wait";
          return (
            <li key={lesson.id} className={`step step--${state}`}>
              <span className="step__dot">
                {state === "done" ? <CheckOutlined /> : index + 1}
              </span>
              <div className="step__text">
                <Link
                  href={`/khoa-hoc/${courseSlug}/bai-hoc/${lesson.slug}`}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {lesson.title}
                </Link>
                <small>{lesson.duration}</small>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default ProgressTracker;
