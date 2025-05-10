
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const exerciseCategories = [
  {
    id: "warm-up",
    name: "Разминка",
    exercises: [
      {
        id: "lip-trill",
        title: "Губная трель",
        description: "Упражнение для расслабления мышц губ и языка. Помогает настроить голосовой аппарат перед пением.",
        instruction: "Сомкните губы и начните выдувать воздух, вызывая вибрацию губ (напоминает звук мотора). Начните с удобной для вас ноты и двигайтесь вверх и вниз по полутонам.",
        audioUrl: "#",
        level: "Начальный",
      },
      {
        id: "humming",
        title: "Хаммер (пение с закрытым ртом)",
        description: "Упражнение для разогрева голосового аппарата и настройки резонаторов.",
        instruction: "Закройте рот и начните петь звук 'ммм', ощущая вибрацию в области носа и маски лица. Двигайтесь по нисходящей шкале от 5 к 1 ступени.",
        audioUrl: "#",
        level: "Начальный",
      },
      {
        id: "jaw-relaxation",
        title: "Расслабление челюсти",
        description: "Упражнение для снятия зажимов челюсти, которые часто мешают свободному звукоизвлечению.",
        instruction: "Положите пальцы на область челюстных суставов (перед ушами). Осторожно массируйте эту область круговыми движениями. Затем мягко откройте и закройте рот несколько раз.",
        audioUrl: "#",
        level: "Начальный",
      },
    ],
  },
  {
    id: "breathing",
    name: "Дыхание",
    exercises: [
      {
        id: "diaphragm-breathing",
        title: "Диафрагмальное дыхание",
        description: "Базовое упражнение для развития нижнего (диафрагмального) дыхания, которое является основой вокальной техники.",
        instruction: "Положите руку на живот. Вдохните носом, направляя воздух в нижнюю часть легких так, чтобы живот выпячивался. Затем медленно выдыхайте через рот, контролируя процесс втягивания живота.",
        audioUrl: "#",
        level: "Начальный",
      },
      {
        id: "staccato-breaths",
        title: "Стаккатное дыхание",
        description: "Тренирует контроль диафрагмы и укрепляет дыхательные мышцы.",
        instruction: "Вдохните глубоко, затем выдыхайте короткими, отрывистыми выдохами (как будто задуваете свечи), активно работая мышцами живота. Повторите 10-15 раз.",
        audioUrl: "#",
        level: "Средний",
      },
      {
        id: "counted-breath",
        title: "Счетное дыхание",
        description: "Развивает контроль дыхания и увеличивает емкость легких.",
        instruction: "Вдохните на 4 счета, задержите дыхание на 4 счета, выдохните на 8 счетов. Постепенно увеличивайте продолжительность выдоха до 12, 16 и более счетов.",
        audioUrl: "#",
        level: "Продвинутый",
      },
    ],
  },
  {
    id: "range",
    name: "Диапазон",
    exercises: [
      {
        id: "siren",
        title: "Сирена",
        description: "Плавно соединяет регистры и развивает гибкость голоса.",
        instruction: "На звук 'У' плавно двигайтесь от самой низкой комфортной ноты до самой высокой и обратно, имитируя звук сирены. Следите за свободой звукоизвлечения.",
        audioUrl: "#",
        level: "Средний",
      },
      {
        id: "octave-leaps",
        title: "Октавные скачки",
        description: "Развивает способность быстро переключаться между регистрами.",
        instruction: "На слог 'ЙА' пойте упражнение, перепрыгивая через октаву вверх и возвращаясь назад. Начните с комфортной ноты в нижнем регистре.",
        audioUrl: "#",
        level: "Продвинутый",
      },
      {
        id: "messa-di-voce",
        title: "Месса ди воче",
        description: "Классическое упражнение для контроля динамики на одной ноте.",
        instruction: "Возьмите удобную ноту на гласную 'А'. Начните с тихого звука, постепенно усиливайте до максимально громкого, а затем снова уменьшайте до тихого. Удерживайте ноту около 8 секунд.",
        audioUrl: "#",
        level: "Продвинутый",
      },
    ],
  },
];

const ExerciseCard = ({ exercise }: { exercise: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="border-slate-200 transition-all hover:shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              {exercise.title}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                exercise.level === "Начальный" ? "bg-green-100 text-green-700" :
                exercise.level === "Средний" ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"
              }`}>
                {exercise.level}
              </span>
            </CardTitle>
            <CardDescription className="text-slate-600">
              {exercise.description}
            </CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-purple-600"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-2 text-slate-700">Инструкция:</h4>
              <p className="text-sm text-slate-600">{exercise.instruction}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" className="gap-2">
                <Icon name="Play" size={16} />
                Послушать пример
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 gap-1">
                Сохранить <Icon name="Bookmark" size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const VocalExercises = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Распевки для занятий
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
            Используйте эти упражнения для ежедневной практики и совершенствования вокальной техники
          </p>
        </div>

        <Tabs defaultValue="warm-up" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {exerciseCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {exerciseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              {category.exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">
            Регулярно выполняйте эти упражнения для достижения наилучших результатов. 
            В личном кабинете доступно еще больше распевок с аудио примерами.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Получить полный доступ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VocalExercises;
