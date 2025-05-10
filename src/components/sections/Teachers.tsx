import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teachers = [
  {
    name: "Елена Соловьева",
    title: "Академический вокал",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    experience: "15 лет опыта",
    description:
      "Лауреат международных конкурсов, выпускница консерватории. Елена поможет вам освоить классическую вокальную технику и раскрыть природную красоту голоса.",
    specialties: ["Оперный вокал", "Хоровое пение", "Вокальное дыхание"],
    fullBio:
      "Елена Соловьева — выпускница Московской государственной консерватории им. П.И. Чайковского по классу академического вокала. Лауреат международных конкурсов в Италии и Франции. Солистка камерного хора. В течение 10 лет преподавала в музыкальной школе им. Гнесиных, после чего основала собственную вокальную студию. Среди ее учеников — профессиональные вокалисты, солисты оперных театров и участники престижных международных конкурсов.",
    education: [
      "Московская государственная консерватория им. П.И. Чайковского",
      "Стажировка в La Scala (Милан, Италия)",
    ],
    achievements: [
      "Лауреат I степени конкурса вокалистов в Милане (2016)",
      "Лауреат II степени конкурса Belcanto в Париже (2018)",
      "Автор методического пособия по развитию голоса",
    ],
    teachingApproach:
      "Уделяю особое внимание постановке дыхания и работе с резонаторами. Преподаю по авторской методике, сочетающей классические подходы и современные техники развития голоса. Для каждого ученика разрабатываю индивидуальную программу с учетом природных данных и личных целей.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Александр Петров",
    title: "Эстрадный вокал",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop",
    experience: "12 лет опыта",
    description:
      "Профессиональный артист и автор песен. Поможет освоить современные вокальные техники и найти свой неповторимый стиль исполнения.",
    specialties: ["Поп-вокал", "Рок", "Работа с микрофоном"],
    fullBio:
      "Александр Петров — профессиональный эстрадный исполнитель, композитор и автор песен. Выпустил 3 сольных альбома, участник телепроектов «Голос» и «Песни». С 2011 года занимается преподавательской деятельностью, помогая талантливым вокалистам найти свой уникальный стиль и выразительность в исполнении. Тренер вокала для нескольких известных российских исполнителей.",
    education: [
      "Российская академия музыки им. Гнесиных, эстрадно-джазовый вокал",
      "Курс Sound Check (США), работа с микрофоном",
    ],
    achievements: [
      "Участник телепроекта «Голос»",
      "Лауреат фестиваля «Новая волна»",
      "Автор хитов для известных исполнителей",
    ],
    teachingApproach:
      "Считаю, что каждый голос уникален, и моя задача — помочь ученику раскрыть свои сильные стороны. Фокусируюсь на современных вокальных техниках, работе с микрофоном и сценическом движении. Большое внимание уделяю работе над сценическим образом и эмоциональной подаче материала.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ирина Джазова",
    title: "Джазовый вокал",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=987&auto=format&fit=crop",
    experience: "18 лет опыта",
    description:
      "Джазовая вокалистка с богатым концертным опытом. Научит вас импровизировать, чувствовать джазовую гармонию и развить уникальную манеру исполнения.",
    specialties: ["Скэт", "Импровизация", "Джазовые стандарты"],
    fullBio:
      "Ирина Джазова — джазовая вокалистка с международным признанием, выступала на джазовых фестивалях в России, Европе и США. Сотрудничает с известными джазовыми музыкантами, записала 5 альбомов джазовых композиций. Последние 18 лет делится своим опытом с начинающими и продвинутыми вокалистами, помогая им освоить уникальный язык джаза.",
    education: [
      "Беркли, колледж музыки (Бостон, США)",
      "Мастер-классы у Курта Эллинга и Дайаны Кролл",
    ],
    achievements: [
      "Выступления на джазовых фестивалях в Монтрё и Нью-Орлеане",
      "Выпуск 5 джазовых альбомов",
      "Разработка авторской методики преподавания скэта",
    ],
    teachingApproach:
      "Джаз — это свобода и творчество, и я стараюсь привить своим ученикам не только технические навыки, но и глубокое чувство музыки. Особое внимание уделяю развитию музыкального слуха, импровизации и аутентичности исполнения. В работе использую фонетический метод для освоения скэта и особое внимание уделяю ритмике.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Дмитрий Вокалов",
    title: "Вокальный коуч",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    experience: "10 лет опыта",
    description:
      "Специалист по постановке голоса и исправлению вокальных проблем. Поможет расширить диапазон и улучшить качество звука вашего голоса.",
    specialties: [
      "Вокальные техники",
      "Расширение диапазона",
      "Работа над тембром",
    ],
    fullBio:
      "Дмитрий Вокалов — специалист по работе с голосом, вокальный коуч с медицинским образованием. Разработал собственную методику устранения зажимов и исправления дефектов голоса. Работает как с начинающими вокалистами, так и с профессиональными исполнителями, нуждающимися в коррекции техники. Проводит мастер-классы по всей России и создал онлайн-курсы по развитию голоса.",
    education: [
      "Российский государственный медицинский университет, фониатрия",
      "Институт современного искусства, эстрадно-джазовый вокал",
    ],
    achievements: [
      "Автор методики «Свободный голос»",
      "Спикер международных конференций по вокальной педагогике",
      "Создатель популярного YouTube-канала о вокале",
    ],
    teachingApproach:
      "Благодаря медицинскому образованию я подхожу к голосу комплексно, понимая анатомию и физиологию голосового аппарата. Моя методика основана на устранении зажимов, работе с резонаторами и постановке правильного дыхания. Специализируюсь на расширении вокального диапазона и улучшении тембральных характеристик голоса.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showTeacherDialog, setShowTeacherDialog] = useState(false);

  const handleShowTeacherDetails = (teacher) => {
    setSelectedTeacher(teacher);
    setShowTeacherDialog(true);
  };

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Наши преподаватели
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
            Опытные педагоги с концертной практикой помогут вам достичь ваших
            музыкальных целей
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="border-slate-200 overflow-hidden transition-all hover:shadow-md"
            >
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
                  <Badge
                    variant="outline"
                    className="border-purple-200 bg-purple-50 text-purple-700"
                  >
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
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-purple-100 text-purple-700"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-end">
                <button
                  className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                  onClick={() => handleShowTeacherDetails(teacher)}
                >
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedTeacher && (
        <Dialog open={showTeacherDialog} onOpenChange={setShowTeacherDialog}>
          <DialogContent className="sm:max-w-[700px] overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedTeacher.name}
              </DialogTitle>
              <DialogDescription className="text-purple-600 font-medium">
                {selectedTeacher.title} • {selectedTeacher.experience}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <img
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    className="w-full rounded-md object-cover aspect-[3/4]"
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Биография</h3>
                    <p className="text-slate-600">{selectedTeacher.fullBio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Образование</h3>
                    <ul className="list-disc pl-5 text-slate-600">
                      {selectedTeacher.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Достижения</h3>
                    <ul className="list-disc pl-5 text-slate-600">
                      {selectedTeacher.achievements.map(
                        (achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Подход к обучению
                </h3>
                <p className="text-slate-600">
                  {selectedTeacher.teachingApproach}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Демонстрация</h3>
                <div className="aspect-video w-full rounded-md overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedTeacher.videoUrl}
                    title={`${selectedTeacher.name} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedTeacher.specialties.map((specialty, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <DialogFooter>
              <Button
                onClick={() => setShowTeacherDialog(false)}
                variant="outline"
              >
                Закрыть
              </Button>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/trial-lesson">Записаться на пробное занятие</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Teachers;
