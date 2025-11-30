import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Technical Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className={`fixed left-0 top-0 h-screen w-80 bg-background p-12 flex flex-col justify-between z-40 ${
          mobileMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold mb-3 text-foreground tracking-tight">
              Monisa Hasnain
            </h1>
            <h2 className="text-xl font-medium text-foreground mb-4">
              Data Automation & Integration Consultant
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </motion.div>

          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left group flex items-center gap-4 transition-all duration-300"
              >
                <span 
                  className={`h-px transition-all duration-300 ${
                    activeSection === item.id 
                      ? "w-16 bg-foreground" 
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                  }`}
                />
                <span 
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-5"
        >
          <a
            href="https://github.com/Monisa-Hasnain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/monisa-hasnain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
};
