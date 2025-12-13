import { motion } from 'framer-motion';
import { Code2, Terminal, Zap, Coffee } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '2+' },
  { icon: Terminal, label: 'Projects Completed', value: '5+' },
  { icon: Zap, label: 'Courses Completed', value: '10+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">// about me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Building the <span className="text-primary">Future</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer who loves building solutions that matter. 
                My journey started with curiosity about how websites work, and evolved into a 
                career crafting digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me working on personal projects, writing 
                technical articles, or exploring new technologies. I believe in clean code, 
                thoughtful design, and continuous learning.
              </p>
              <p className="text-lg leading-relaxed">
                Currently focused on building scalable web applications and tools 
                that make a real difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group card-shadow"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-3xl text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
