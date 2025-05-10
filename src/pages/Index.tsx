
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Teachers from "@/components/sections/Teachers";
import Pricing from "@/components/sections/Pricing";
import VocalExercises from "@/components/sections/VocalExercises";
import ContactForm from "@/components/sections/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Teachers />
        <Pricing />
        <VocalExercises />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
