import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============ PROJECT IMAGES ============
// Add your images to the folders below, then uncomment the imports:

// Dues Reminder System - src/assets/projects/dues-reminder/
// import duesReminder1 from "@/assets/projects/dues-reminder/screenshot-1.png";
// import duesReminder2 from "@/assets/projects/dues-reminder/screenshot-2.png";

// NeonRail FPS - src/assets/projects/neonrail/
// import neonrail1 from "@/assets/projects/neonrail/screenshot-1.png";
// import neonrail2 from "@/assets/projects/neonrail/screenshot-2.png";

// Data Cleaning Assistant - src/assets/projects/data-cleaning/
// import dataCleaning1 from "@/assets/projects/data-cleaning/screenshot-1.png";
// import dataCleaning2 from "@/assets/projects/data-cleaning/screenshot-2.png";

// Data Scraping & Email - src/assets/projects/data-scraping/
// import dataScraping1 from "@/assets/projects/data-scraping/screenshot-1.png";
// import dataScraping2 from "@/assets/projects/data-scraping/screenshot-2.png";

// Oil & Gas Analytics - src/assets/projects/oil-gas/
// import oilGas1 from "@/assets/projects/oil-gas/screenshot-1.png";
// import oilGas2 from "@/assets/projects/oil-gas/screenshot-2.png";

// Sales Insights - src/assets/projects/sales-insights/
// import salesInsights1 from "@/assets/projects/sales-insights/screenshot-1.png";
// import salesInsights2 from "@/assets/projects/sales-insights/screenshot-2.png";

// ========================================

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Dues Reminder System",
    description: "90% reduction in follow-up time and 100% elimination of manual tracking",
    tags: ["Automation", "n8n", "Email Integration"],
    link: null,
    images: [], // Add: [duesReminder1, duesReminder2]
  },
  {
    title: "FPS Shooting Game - NeonRail",
    description: "AI-powered game development with Cursor AI and Android deployment",
    tags: ["Unity", "Android", "AI Development"],
    link: "https://github.com/Monisa-Hasnain/NeonRailFPS/releases/tag/v1.0",
    images: [], // Add: [neonrail1, neonrail2]
  },
  {
    title: "Data Cleaning Assistant",
    description: "70% time reduction in data preprocessing with automated validation",
    tags: ["Cursor ai", "Data Processing", "AI"],
    link: "https://data-cleaning-assistant.vercel.app",
    images: [], // Add: [dataCleaning1, dataCleaning2]
  },
  {
    title: "Data Scraping & Email Automation",
    description: "85% reduction in response time through intelligent automation",
    tags: ["Make.com", "Web Scraping", "Automation"],
    link: null,
    images: [], // Add: [dataScraping1, dataScraping2]
  },
  {
    title: "Oil and Gas Production Analytics",
    description: "Comprehensive Power BI solution analyzing 30,000+ production records across multiple counties, with real-time monitoring for oil, gas, and water production metrics (1967-1999 data)",
    tags: ["Power BI", "Excel", "Analytics"],
    link: "https://github.com/Monisa-Hasnain/oil-gas-production-analytics/tree/Dashboard",
    images: [], // Add: [oilGas1, oilGas2]
  },
  {
    title: "Sales Insights Dashboard",
    description: "Interactive Power BI analytics project with comprehensive KPI tracking and performance visualization",
    tags: ["Power BI", "Excel", "Business Intelligence"],
    link: "https://github.com/Monisa-Hasnain/Sales-Insights",
    images: [], // Add: [salesInsights1, salesInsights2]
  },
];

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-xl p-6 border border-border card-hover shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                {project.images && project.images.length > 0 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="p-1 hover:bg-muted rounded-md transition-colors"
                  >
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                )}
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {expandedIndex === index && project.images && project.images.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                      {project.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="rounded-lg w-full h-32 object-cover"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-teal hover:text-white hover:border-teal transition-all"
                  >
                    {project.link.includes("github") ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    View Project
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
