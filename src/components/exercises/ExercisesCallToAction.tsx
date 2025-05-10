import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import ExercisesList from "@/components/exercises/ExercisesList";
import { premiumExercises } from "@/data/exercisesData";
import { useUser } from "@/context/UserContext";

const ExercisesCallToAction = () => {
  const [showMoreExercises, setShowMoreExercises] = useState(false);
  const { isLoggedIn, user } = useUser();

  const handleShowMoreClick = () => {
    setShowMoreExercises(true);
  };

  return (
    <>
      <div className="mt-10 text-center">
        <p className="text-slate-600 mb-4">
          Регулярно выполняйте эти упражнения для достижения наилучших
          результатов.
          {isLoggedIn
            ? ` ${user.name}, в личном кабинете доступно еще больше распевок с аудио примерами.`
            : " В личном кабинете доступно еще больше распевок с аудио примерами."}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleShowMoreClick}
          >
            Посмотреть больше распевок
          </Button>

          {!isLoggedIn && (
            <Button variant="outline" asChild>
              <Link to="/login">Получить полный доступ</Link>
            </Button>
          )}
        </div>
      </div>

      <Dialog open={showMoreExercises} onOpenChange={setShowMoreExercises}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Дополнительные распевки</DialogTitle>
            <DialogDescription>
              Более сложные упражнения для развития голоса
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <ExercisesList categories={premiumExercises} />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => setShowMoreExercises(false)}
            >
              Закрыть
            </Button>

            {!isLoggedIn && (
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/login">
                  Получить полный доступ ко всем распевкам
                </Link>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExercisesCallToAction;
