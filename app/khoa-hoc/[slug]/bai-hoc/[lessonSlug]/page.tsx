import LessonPage from "@/components/LessonPage";
import { getLessonMetadata } from "@/utils/metadata";

interface LessonPageProps {
  params: Promise<{ slug: string; lessonSlug: string }>;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;
  return getLessonMetadata(slug, lessonSlug);
}

export default async function Lesson({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;
  return <LessonPage params={{ slug, lessonSlug }} />;
}
