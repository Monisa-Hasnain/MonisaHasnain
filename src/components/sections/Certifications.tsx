import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Vibe Coding & AI Agents",
    date: "Nov 2025 – ongoing",
    color: "teal",
  },
  {
    title: "Data Visualization – TATA Groups",
    date: "Aug–Sep 2024",
    color: "steel",
  },
  {
    title: "Google Advanced Data Analytics (4 modules)",
    date: "2024",
    color: "teal",
  },
  {
    title: "Leverify: Data Analytics",
    date: "Jun–Jul 2024",
    color: "steel",
  },
  {
    title: "Google IT Automation with Python (3 modules)",
    date: "2024",
    color: "teal",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-xl p-6 border border-border card-hover shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-${cert.color}/10`}>
                  <Award className={`h-6 w-6 text-${cert.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
