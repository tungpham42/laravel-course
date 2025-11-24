export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  content: string;
  duration: string;
  exercises: Exercise[];
  prerequisites?: string[];
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  instructions: string;
  starterCode?: string;
  solution?: string;
  type: "multiple-choice" | "code" | "theory";
  options?: string[];
  correctAnswer?: string | number;
}
