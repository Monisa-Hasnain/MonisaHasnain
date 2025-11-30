import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { FloatingContact } from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-80 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <About />
          <Skills />
          <Certifications />
          <Experience />
          <Projects />
        </div>
      </main>

      <FloatingContact />
    </div>
  );
};

export default Index;
