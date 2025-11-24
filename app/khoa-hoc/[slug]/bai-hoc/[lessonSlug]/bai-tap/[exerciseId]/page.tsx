import ExercisePage from "@/components/ExercisePage";
import { courses } from "@/data/courses";

interface ExercisePageProps {
  params: Promise<{
    slug: string;
    lessonSlug: string;
    exerciseId: string;
  }>;
}

export async function generateMetadata({ params }: ExercisePageProps) {
  const { slug, lessonSlug, exerciseId } = await params;

  const course = courses.find((c) => c.slug === slug);

  const currentLesson = course?.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );

  const exercise = currentLesson?.exercises.find((ex) => ex.id === exerciseId);

  // Here you can fetch exercise data based on the slug, lessonSlug, and exerciseId to get dynamic metadata
  // For simplicity, we'll just use them in the title
  return {
    title: `Bài tập "${exercise ? exercise.title : exerciseId}" - Bài học "${
      currentLesson ? currentLesson.title : lessonSlug
    }" - Khóa học "${course ? course.title : slug}"`,
    description: `Thực hành bài tập "${
      exercise ? exercise.title : exerciseId
    }" trong bài học "${
      currentLesson ? currentLesson.title : lessonSlug
    }" của khóa học "${
      course ? course.title : slug
    }" trên nền tảng của chúng tôi.`,
  };
}

export default async function Exercise({ params }: ExercisePageProps) {
  const { slug, lessonSlug, exerciseId } = await params;

  return <ExercisePage params={{ slug, lessonSlug, exerciseId }} />;
}
