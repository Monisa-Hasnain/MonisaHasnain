import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dues Reminder System",
    description: "90% reduction in follow-up time and 100% elimination of manual tracking",
    tags: ["Automation", "Make.com", "Email Integration"],
    link: null,
  },
  {
    title: "FPS Shooting Game - NeonRail",
    description: "AI-powered game development with Cursor AI and Android deployment",
    tags: ["Unity", "Android", "AI Development"],
    link: "https://github.com/Monisa-Hasnain/NeonRailFPS/releases/tag/v1.0",
  },
  {
    title: "Data Cleaning Assistant",
    description: "70% time reduction in data preprocessing with automated validation",
    tags: ["Python", "Data Processing", "AI"],
    link: "https://data-cleaning-assistant.vercel.app",
  },
  {
    title: "Data Scraping & Email Automation",
    description: "85% reduction in response time through intelligent automation",
    tags: ["Python", "Web Scraping", "Automation"],
    link: null,
  },
  {
    title: "Oil and Gas Production Analytics",
    description: "Comprehensive Power BI solution analyzing 30,000+ production records across multiple counties, with real-time monitoring for oil, gas, and water production metrics (1967-1999 data)",
    tags: ["Power BI", "Excel", "Analytics"],
    link: "https://github.com/Monisa-Hasnain/oil-gas-production-analytics/tree/Dashboard",
  },
  {
    title: "Sales Insights Dashboard",
    description: "Interactive Power BI analytics project with comprehensive KPI tracking and performance visualization",
    tags: ["Power BI", "Excel", "Business Intelligence"],
    link: "https://github.com/Monisa-Hasnain/Sales-Insights",
  },
];

export const Projects = () => {
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
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

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
