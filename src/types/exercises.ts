
export interface Exercise {
  id: string;
  title: string;
  description: string;
  instruction: string;
  audioUrl: string;
  level: "Начальный" | "Средний" | "Продвинутый";
}

export interface ExerciseCategory {
  id: string;
  name: string;
  exercises: Exercise[];
}
