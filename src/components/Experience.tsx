import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Systems Analyst',
    company: 'Triad Asia Pvt. Ltd.',
    period: '2023 - Present',
    description: 'Develop real time backend, frontend and automation applications for US and Europe oil terminals.',
    technologies: ['React', 'Node.js', 'Azure', 'MySQL', 'Docker', 'Linux System Administration'],
  },
  {
    title: 'Freelance Frontend Developer',
    company: 'Astrapi Technology',
    period: '2023 - 2024',
    description: 'Build user friendly frontend applications for clients.',
    technologies: ['React', 'JavaScript', 'shadcn', 'Tailwind'],
  },
  {
    title: 'IT Officer',
    company: 'LalNepal Pvt. Ltd.',
    period: '2022 - 2023',
    description: 'Quality Assurance',
    technologies: ['QA', 'Manual Testing'],
  },
  // {
  //   title: 'Junior Developer',
  //   company: 'WebStudio',
  //   period: '2018 - 2019',
  //   description: 'Started my professional journey building responsive websites and web applications.',
  //   technologies: ['JavaScript', 'PHP', 'WordPress', 'CSS'],
  // },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">// experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I've <span className="text-primary">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 animate-glow-pulse" />

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors card-shadow">
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  
                  <div className={`flex items-center gap-2 text-primary mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded bg-muted border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
