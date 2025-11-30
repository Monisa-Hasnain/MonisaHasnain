import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "AI & Data Analytics Consultant",
    company: "Independent",
    period: "Feb 2023 – Present",
    achievements: [
      "Developed production-ready collaborative task management application with user authentication, real-time updates, and role-based access control using Lovable.dev, Supabase, and deployed to Netlify with complete CRUD operations and responsive design",
      "Built multi-agent AI system to automate scheduling, emailing, note-taking from transcripts, and task refinement workflows using N8N with intelligent meta-agent routing for seamless agent coordination",
      "Automated end-to-end supplier research and management process using Make.com, reducing manual research time by 80% through API integrations with Google Sheets and Gmail for supplier discovery, background checks, quotation tracking, and cross-departmental approval workflows",
      "Delivered dashboards for 6 clients, improving decision speed by 40%",
      "Built 12 pipelines integrating 25+ data sources",
      "Reduced processing time by 65%, ensured 99.5% data accuracy",
      "Created 8 real-time dashboards, boosting client retention by 25%",
      "Managed 10+ BI projects with 100% on-time delivery",
    ],
  },
  {
    title: "Software Engineer",
    company: "Independent Consultancy",
    period: "Apr 2014 – Oct 2022",
    achievements: [
      "Developed scalable .NET apps with integrated dashboards",
      "Managed 20+ SQL Server databases for 500+ users",
      "Built reusable BI components, optimized performance by 50%",
    ],
  },
  {
    title: "Software Engineer",
    company: "PIMS (Contract)",
    period: "Nov 2022 – Feb 2023",
    achievements: [
      "Designed custom SQL reports for healthcare systems",
      "Integrated healthcare systems ensuring seamless data flow",
      "Ensured data integrity and availability across hospital databases",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl p-8 border border-border card-hover shadow-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-teal/10">
                  <Briefcase className="h-6 w-6 text-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-lg text-steel font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + achIndex * 0.05, duration: 0.4 }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <TrendingUp className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
