const GRADIENTS = [
  "linear-gradient(135deg, #6247F5 0%, #9B6BFF 100%)",
  "linear-gradient(135deg, #0EA5E9 0%, #6247F5 100%)",
  "linear-gradient(135deg, #F0568B 0%, #8B5CF6 100%)",
  "linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)",
  "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
];

/** Stable gradient per course so each card has its own identity. */
export function getCourseGradient(key: string): string {
  let hash = 0;
  for (const ch of key) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return GRADIENTS[hash % GRADIENTS.length];
}

const LEVEL_LABELS: Record<string, string> = {
  beginner: "Cơ bản",
  intermediate: "Trung cấp",
};

export function getLevelLabel(level: string): string {
  return LEVEL_LABELS[level] ?? "Nâng cao";
}
