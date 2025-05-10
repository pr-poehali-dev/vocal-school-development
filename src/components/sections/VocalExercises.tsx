
import ExercisesHeader from "@/components/exercises/ExercisesHeader";
import ExercisesList from "@/components/exercises/ExercisesList";
import ExercisesCallToAction from "@/components/exercises/ExercisesCallToAction";
import { exerciseCategories } from "@/data/exercisesData";

const VocalExercises = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <ExercisesHeader 
          title="Распевки для занятий"
          description="Используйте эти упражнения для ежедневной практики и совершенствования вокальной техники"
        />
        
        <ExercisesList categories={exerciseCategories} />
        
        <ExercisesCallToAction />
      </div>
    </section>
  );
};

export default VocalExercises;
