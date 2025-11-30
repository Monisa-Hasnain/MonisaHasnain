import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data & Analytics",
    skills: ["Power BI", "SQL", "Python", "DAX", "Power Query", "Tableau", "Looker Studio"],
  },
  {
    title: "Automation & Integration",
    skills: ["Make.com", "n8n", "API integrations", "ETL pipelines", "CI/CD"],
  },
  {
    title: "Development",
    skills: ["lovable.dev", "cursor.ai", ".NET", "Android Studio", "AI-assisted development"],
  },
  {
    title: "Workflow & AI",
    skills: ["Automation workflow", "Multi-agent systems", "AI integration"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl p-6 border border-border card-hover shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-steel">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-sm font-medium text-teal transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
