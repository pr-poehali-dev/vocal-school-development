
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-12 md:gap-16">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">О школе вокала <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">VocalArt</span></h1>
                <p className="text-xl text-slate-600">
                  Мы помогаем талантливым людям раскрыть свой голос и обрести уверенность в пении с 2012 года
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop" 
                    alt="Наша школа вокала" 
                    className="rounded-xl shadow-xl w-full h-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-purple-600 rounded-xl"></div>
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop" 
                      alt="Выступление ученика" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Наша миссия</h2>
                  <p className="text-lg text-slate-600">
                    Мы создали VocalArt с одной целью — сделать качественное вокальное образование доступным для каждого, 
                    кто мечтает научиться петь. Мы верим, что с правильным подходом и регулярной практикой 
                    любой человек может раскрыть красоту своего голоса.
                  </p>
                  <p className="text-lg text-slate-600">
                    Наша школа — это не просто уроки вокала, это сообщество единомышленников, 
                    где каждый находит поддержку и мотивацию для творческого роста.
                  </p>
                  
                  <div className="flex items-center gap-4 pt-2">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link to="/trial-lesson">Записаться на пробное занятие</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/teachers">Познакомиться с преподавателями</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">500+</h3>
                  <p className="text-slate-600">учеников добились успеха</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Calendar" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">13 лет</h3>
                  <p className="text-slate-600">успешной работы</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">86</h3>
                  <p className="text-slate-600">лауреатов конкурсов</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Music" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">4</h3>
                  <p className="text-slate-600">направления вокала</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-3xl font-bold mb-6 text-center">Наши ценности</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="Heart" className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Индивидуальный подход</h3>
                    <p className="text-slate-600">
                      Мы учитываем особенности голоса и цели каждого ученика, адаптируя программу обучения.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="Star" className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Профессионализм</h3>
                    <p className="text-slate-600">
                      Наши преподаватели — опытные вокалисты с профильным образованием и концертной практикой.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="Sparkles" className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Творческая атмосфера</h3>
                    <p className="text-slate-600">
                      Мы создаем вдохновляющую среду, где каждый может раскрыть свой творческий потенциал.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12 rounded-xl shadow-lg text-white">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Начните свой путь в мир вокала сегодня</h2>
                  <p className="text-lg md:text-xl opacity-90">
                    Первый шаг к раскрытию вашего голоса — это пробное занятие с профессиональным педагогом
                  </p>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
                    <Link to="/trial-lesson">Записаться на пробное занятие</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
