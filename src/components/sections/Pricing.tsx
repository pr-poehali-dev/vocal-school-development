import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const pricingOptions = [
  {
    title: "Индивидуальные занятия",
    description:
      "Персональный подход с фокусом на ваши цели и особенности голоса",
    pricePerLesson: 1200,
    duration: "60 минут",
    format: "Офлайн",
    features: [
      "Персональная программа обучения",
      "Работа с репертуаром по выбору",
      "Коррекция вокальных недостатков",
      "Подготовка к выступлениям",
    ],
    recommended: true,
  },
  {
    title: "Групповые занятия",
    description: "Обучение в мини-группах до 4 человек с общей программой",
    pricePerLesson: 800,
    duration: "60 минут",
    format: "Офлайн",
    features: [
      "Освоение базовых вокальных техник",
      "Работа в ансамблях",
      "Развитие музыкального слуха",
      "Участие в отчетных концертах",
    ],
    recommended: false,
  },
  {
    title: "Онлайн обучение",
    description: "Дистанционные уроки из любой точки мира через Zoom",
    pricePerLesson: 1000,
    duration: "60 минут",
    format: "Онлайн",
    features: [
      "Гибкий график занятий",
      "Запись урока для самостоятельной работы",
      "Доступ к обучающим материалам",
      "Рекомендации по домашним упражнениям",
    ],
    recommended: false,
  },
  {
    title: "Интенсивный курс",
    description:
      "Ускоренная программа для быстрого прогресса и подготовки к мероприятиям",
    pricePerLesson: 1500,
    duration: "90 минут",
    format: "Офлайн/Онлайн",
    features: [
      "Расширенные занятия повышенной интенсивности",
      "Комплексная работа над техникой и репертуаром",
      "Подготовка к конкурсам и выступлениям",
      "Экспресс-обучение для конкретных целей",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Стоимость обучения
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
            Выберите формат занятий, который подходит именно вам
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingOptions.map((option, index) => (
            <Card
              key={index}
              className={`border-slate-200 transition-all hover:shadow-md relative ${
                option.recommended ? "border-purple-300 shadow-md" : ""
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                  Рекомендуем
                </div>
              )}

              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {option.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-slate-900">
                    {option.pricePerLesson} ₽
                    <span className="text-sm font-normal text-slate-600">
                      {" "}
                      / занятие
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Длительность: {option.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>Формат: {option.format}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="Check"
                        className="mt-0.5 text-green-500 shrink-0"
                        size={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${option.recommended ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                  variant={option.recommended ? "default" : "outline"}
                >
                  <Link to="/trial-lesson">Записаться</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Первое пробное занятие — 600 ₽</p>
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Link to="/trial-lesson">Записаться на пробное занятие</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
