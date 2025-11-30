import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Building Data Solutions That <span className="text-gradient">Scale</span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi! I'm <span className="text-teal font-semibold">Monisa Hasnain</span>, a Data Automation & Integration Consultant 
              passionate about turning complex data challenges into elegant, automated solutions.
            </p>
            <p>
              With expertise spanning <span className="text-steel font-semibold">Power BI, SQL, Python, and modern automation tools</span>, 
              I specialize in building production-ready applications and data pipelines that drive real business impact.
            </p>
            <p>
              My work focuses on the intersection of <span className="text-teal font-semibold">AI-assisted development</span> and 
              <span className="text-steel font-semibold"> data analytics</span>, creating solutions that reduce manual work by up to 80% 
              while maintaining 99.5% data accuracy.
            </p>
            <p>
              Currently, I'm developing multi-agent AI systems, building collaborative task management applications, 
              and crafting real-time dashboards that empower teams to make data-driven decisions faster.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 p-6 bg-accent rounded-lg border border-teal/20"
          >
            <p className="text-accent-foreground">
              <span className="font-semibold">Education:</span> Bachelor of Computer Science (BCS – Honors), IQRA University – Karachi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
