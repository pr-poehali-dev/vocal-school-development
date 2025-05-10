
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExercisesHeader from "@/components/exercises/ExercisesHeader";
import ExercisesList from "@/components/exercises/ExercisesList";
import ExercisesCallToAction from "@/components/exercises/ExercisesCallToAction";
import { exerciseCategories } from "@/data/exercisesData";

const ExercisesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <ExercisesHeader 
              title="Распевки и упражнения для вокалистов"
              description="Полная коллекция вокальных упражнений для совершенствования вашей техники и раскрытия голоса"
            />
            
            <ExercisesList categories={exerciseCategories} />
            
            <ExercisesCallToAction />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExercisesPage;
