import ExercisePage from "@/components/ExercisePage";
import { getExerciseMetadata } from "@/utils/metadata";

interface ExercisePageProps {
  params: Promise<{ slug: string; lessonSlug: string; exerciseId: string }>;
}

export async function generateMetadata({ params }: ExercisePageProps) {
  const { slug, lessonSlug, exerciseId } = await params;
  return getExerciseMetadata(slug, lessonSlug, exerciseId);
}

export default async function Exercise({ params }: ExercisePageProps) {
  const { slug, lessonSlug, exerciseId } = await params;
  return <ExercisePage params={{ slug, lessonSlug, exerciseId }} />;
}
