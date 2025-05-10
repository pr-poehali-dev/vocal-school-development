
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExerciseCard from "@/components/exercises/ExerciseCard";
import { ExerciseCategory } from "@/types/exercises";

interface ExercisesListProps {
  categories: ExerciseCategory[];
}

const ExercisesList = ({ categories }: ExercisesListProps) => {
  return (
    <Tabs defaultValue={categories[0]?.id || ""} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="space-y-4">
          {category.exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ExercisesList;
