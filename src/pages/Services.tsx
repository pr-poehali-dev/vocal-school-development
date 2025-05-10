
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
              Направления обучения
            </h1>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto mb-10">
              Выберите подходящее направление вокала и начните свой путь к музыкальному совершенству
            </p>
          </div>
        </section>
        
        <ServicesSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Форматы обучения</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Индивидуальные занятия</h3>
                      <p className="text-slate-600">
                        Персональный подход, максимальное внимание педагога и программа, адаптированная под ваши цели и особенности голоса.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Users2" className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Групповые занятия</h3>
                      <p className="text-slate-600">
                        Обучение в мини-группах до 4 человек, что позволяет практиковать ансамблевое пение и учиться у других участников.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Laptop" className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Онлайн обучение</h3>
                      <p className="text-slate-600">
                        Дистанционные уроки из любой точки мира через Zoom с записью занятия для самостоятельной работы.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Интенсивный курс</h3>
                      <p className="text-slate-600">
                        Ускоренная программа для быстрого прогресса, подготовки к конкретным мероприятиям или выступлениям.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop" 
                    alt="Индивидуальное занятие" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                    alt="Групповое занятие" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/pricing">Узнать стоимость занятий</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
