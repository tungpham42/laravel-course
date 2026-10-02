import type { Metadata } from "next";
import { courses } from "@/data";

// placehold.co serves SVG by default; Open Graph needs a raster format, so use .png
const OG_IMAGE_SIZE = { width: 1200, height: 630 };

function getCourseImage(courseName: string) {
  const text = encodeURIComponent(courseName);
  return {
    url: `https://placehold.co/${OG_IMAGE_SIZE.width}x${OG_IMAGE_SIZE.height}/2D235B/FFFFFF.png?font=roboto&text=${text}`,
    ...OG_IMAGE_SIZE,
    alt: courseName,
  };
}

function build(
  title: string,
  description: string,
  courseName: string,
): Metadata {
  const image = getCourseImage(courseName);

  return {
    title,
    description,
    openGraph: {
      title, // -> <meta property="og:title">
      description, // -> <meta property="og:description">
      type: "article",
      locale: "vi_VN",
      images: [image], // -> <meta property="og:image">
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function getCourseMetadata(slug: string): Metadata {
  const course = courses.find((c) => c.slug === slug);

  const courseName = course?.title ?? slug;

  return build(
    courseName,
    course?.description ??
      `Tìm hiểu về khóa học "${courseName}" trên nền tảng của chúng tôi.`,
    courseName,
  );
}

export function getLessonMetadata(slug: string, lessonSlug: string): Metadata {
  const course = courses.find((c) => c.slug === slug);
  const lesson = course?.lessons.find((l) => l.slug === lessonSlug);

  const courseName = course?.title ?? slug;
  const lessonName = lesson?.title ?? lessonSlug;

  return build(
    lesson
      ? `${courseName} - Bài ${lesson.id}`
      : `${courseName} - ${lessonSlug}`,
    `Tìm hiểu bài học "${lessonName}" trong khóa học "${courseName}" trên nền tảng của chúng tôi.`,
    courseName,
  );
}

export function getExerciseMetadata(
  slug: string,
  lessonSlug: string,
  exerciseId: string,
): Metadata {
  const course = courses.find((c) => c.slug === slug);
  const lesson = course?.lessons.find((l) => l.slug === lessonSlug);
  const exercise = lesson?.exercises.find((e) => e.id === exerciseId);

  const courseName = course?.title ?? slug;
  const lessonName = lesson?.title ?? lessonSlug;
  const exerciseName = exercise?.title ?? exerciseId;

  const title =
    lesson && exercise
      ? `${courseName} - Bài ${lesson.id} - Bài tập ${exercise.id}`
      : `${courseName} - ${lessonSlug} - ${exerciseId}`;

  return build(
    title,
    `Thực hành bài tập "${exerciseName}" trong bài học "${lessonName}" của khóa học "${courseName}" trên nền tảng của chúng tôi.`,
    courseName,
  );
}
