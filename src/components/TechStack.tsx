import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', category: 'language' },
  { name: 'React', category: 'frontend' },
  { name: 'RestAPI', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Azure', category: 'devops' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'shadcn', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'Go', category: 'language' },
  { name: 'MongoDB', category: 'database' },
];

const categories = [
  { key: 'language', label: 'Languages', color: 'primary' },
  { key: 'frontend', label: 'Frontend', color: 'secondary' },
  { key: 'backend', label: 'Backend', color: 'primary' },
  { key: 'database', label: 'Databases', color: 'secondary' },
  { key: 'devops', label: 'DevOps', color: 'primary' },
  { key: 'tools', label: 'Tools', color: 'secondary' },
];

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">// tech stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technologies I <span className="text-primary">Work With</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors card-shadow"
            >
              <h3 className="font-mono text-sm text-primary mb-4">
                {`// ${category.label.toLowerCase()}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category.key)
                  .map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 rounded-md bg-muted border border-border font-mono text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
