import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Levels from "@/components/Levels";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Levels />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
