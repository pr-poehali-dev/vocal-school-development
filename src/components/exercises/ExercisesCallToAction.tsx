
import { Button } from "@/components/ui/button";

const ExercisesCallToAction = () => {
  return (
    <div className="mt-10 text-center">
      <p className="text-slate-600 mb-4">
        Регулярно выполняйте эти упражнения для достижения наилучших результатов. 
        В личном кабинете доступно еще больше распевок с аудио примерами.
      </p>
      <Button className="bg-purple-600 hover:bg-purple-700">
        Получить полный доступ
      </Button>
    </div>
  );
};

export default ExercisesCallToAction;
