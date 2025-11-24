import LessonPage from "@/components/LessonPage";
import { courses } from "@/data/courses";

interface LessonPageProps {
  params: Promise<{
    slug: string;
    lessonSlug: string;
  }>;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;

  const course = courses.find((c) => c.slug === slug);

  const currentLesson = course?.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );

  // Here you can fetch lesson data based on the slug and lessonSlug to get dynamic metadata
  // For simplicity, we'll just use them in the title
  return {
    title: `Bài học "${
      currentLesson ? currentLesson.title : lessonSlug
    }" - Khóa học "${course ? course.title : slug}"`,
    description: `Tìm hiểu về bài học "${
      currentLesson ? currentLesson.title : lessonSlug
    }" trong khóa học "${
      course ? course.title : slug
    }" trên nền tảng của chúng tôi.`,
  };
}

export default async function Lesson({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;

  return <LessonPage params={{ slug, lessonSlug }} />;
}
