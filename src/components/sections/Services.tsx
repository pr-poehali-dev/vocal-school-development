
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const serviceItems = [
  {
    title: "Академический вокал",
    description: "Классическая постановка голоса, работа с дыханием и диапазоном. Подойдет любителям оперного и хорового пения.",
    icon: "Music",
  },
  {
    title: "Эстрадный вокал",
    description: "Современная вокальная техника для исполнения поп, рок и R&B композиций. Работа с микрофоном и сценическим образом.",
    icon: "Mic2",
  },
  {
    title: "Джазовый вокал",
    description: "Особенности джазовой импровизации, скэт-пение, работа с джазовыми стандартами и разнообразными ритмическими рисунками.",
    icon: "MusicNotes",
  },
  {
    title: "Постановка голоса",
    description: "Базовая техника для начинающих вокалистов. Формирование правильного звукоизвлечения и вокальных навыков.",
    icon: "Megaphone",
  },
  {
    title: "Работа над дыханием",
    description: "Специальные упражнения для развития вокального дыхания. Увеличение объема легких и контроль потока воздуха.",
    icon: "Wind",
  },
  {
    title: "Расширение диапазона",
    description: "Техники для безопасного и эффективного развития верхних и нижних нот. Сглаживание регистровых переходов.",
    icon: "LineChart",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Направления обучения
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
            Выберите подходящее направление вокала и совершенствуйте свои навыки под руководством опытных педагогов
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((item, index) => (
            <Card key={index} className="border-slate-200 transition-all hover:shadow-md hover:border-purple-200">
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Icon name={item.icon} size={24} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
