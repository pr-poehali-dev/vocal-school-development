
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const teachers = [
  {
    name: "Елена Соловьева",
    title: "Академический вокал",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    experience: "15 лет опыта",
    description: "Лауреат международных конкурсов, выпускница консерватории. Елена поможет вам освоить классическую вокальную технику и раскрыть природную красоту голоса.",
    specialties: ["Оперный вокал", "Хоровое пение", "Вокальное дыхание"],
  },
  {
    name: "Александр Петров",
    title: "Эстрадный вокал",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop",
    experience: "12 лет опыта",
    description: "Профессиональный артист и автор песен. Поможет освоить современные вокальные техники и найти свой неповторимый стиль исполнения.",
    specialties: ["Поп-вокал", "Рок", "Работа с микрофоном"],
  },
  {
    name: "Ирина Джазова",
    title: "Джазовый вокал",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=987&auto=format&fit=crop",
    experience: "18 лет опыта",
    description: "Джазовая вокалистка с богатым концертным опытом. Научит вас импровизировать, чувствовать джазовую гармонию и развить уникальную манеру исполнения.",
    specialties: ["Скэт", "Импровизация", "Джазовые стандарты"],
  },
  {
    name: "Дмитрий Вокалов",
    title: "Вокальный коуч",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    experience: "10 лет опыта",
    description: "Специалист по постановке голоса и исправлению вокальных проблем. Поможет расширить диапазон и улучшить качество звука вашего голоса.",
    specialties: ["Вокальные техники", "Расширение диапазона", "Работа над тембром"],
  },
];

const Teachers = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Наши преподаватели
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
            Опытные педагоги с концертной практикой помогут вам достичь ваших музыкальных целей
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <Card key={index} className="border-slate-200 overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
                    {teacher.experience}
                  </Badge>
                </div>
                <CardDescription className="text-purple-600 font-medium">
                  {teacher.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{teacher.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {teacher.specialties.map((specialty, i) => (
                    <Badge key={i} variant="secondary" className="bg-purple-100 text-purple-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-end">
                <button className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
