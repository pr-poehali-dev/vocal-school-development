
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Teachers from "@/components/sections/Teachers";

const TeachersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
              Наши преподаватели
            </h1>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto mb-10">
              Профессиональные педагоги с многолетним опытом и концертной практикой
            </p>
          </div>
        </section>
        
        <Teachers />
      </main>
      <Footer />
    </div>
  );
};

export default TeachersPage;
