import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
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
        className={`fixed left-0 top-0 h-screen w-80 bg-card border-r border-border p-8 flex flex-col justify-between z-40 ${
          mobileMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gradient">Monisa Hasnain</span>
            </h1>
            <p className="text-lg text-steel font-medium">
              Data Automation & Integration Consultant
            </p>
          </motion.div>

          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-teal"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 font-medium">
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
          className="space-y-4"
        >
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/monisa-hasnain/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full gap-2 hover:bg-teal hover:text-white hover:border-teal transition-all">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/Monisa-Hasnain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full gap-2 hover:bg-steel hover:text-white hover:border-steel transition-all">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Monisa Hasnain
          </p>
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
