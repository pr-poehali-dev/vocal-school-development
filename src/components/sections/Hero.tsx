
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 pt-16 pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-[40%] -top-[10%] h-[600px] w-[600px] rounded-full bg-purple-100/50 blur-3xl"></div>
        <div className="absolute -left-[40%] top-[30%] h-[500px] w-[500px] rounded-full bg-pink-100/40 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Школа вокала <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">VocalArt</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-[600px]">
              Раскройте свой голос и покорите сцену с профессиональными педагогами. Индивидуальные и групповые занятия для всех возрастов и уровней подготовки.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/trial-lesson">Записаться на пробное занятие</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <Link to="/pricing">Узнать стоимость</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="inline-block h-10 w-10 rounded-full border-2 border-white bg-purple-200 overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${id + 10}`} 
                    alt="Student" 
                    className="h-full w-full object-cover" 
                  />
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-medium">100+ учеников</span> уже занимаются у нас
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop" 
              alt="Singer performing" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 aspect-square w-36 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1570537332532-a51f7d5654fe?q=80&w=1335&auto=format&fit=crop" 
              alt="Voice training" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
