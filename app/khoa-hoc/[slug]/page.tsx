import CoursePage from "@/components/CoursePage";
import { getCourseMetadata } from "@/utils/metadata";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  return getCourseMetadata(slug);
}

export default async function Course({ params }: CoursePageProps) {
  const { slug } = await params;
  return <CoursePage params={{ slug }} />;
}
