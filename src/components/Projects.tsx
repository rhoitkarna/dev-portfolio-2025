// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

// const projects = [
//   {
//     title: 'Railman',
//     description: 'A web-based real time monitoring system for railcar fuel loading.',
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
//     technologies: ['Node.js', 'Automation'],
//     github: '#',
//     demo: '#',
//     stars: 2500,
//     forks: 340,
//     featured: true,
//   },
//   {
//     title: 'FarmEasy',
//     description: 'Mobile and web app to detect disease infected paddy leaves.',
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
//     technologies: ['React', 'Tensorflow', 'FastAPI'],
//     github: '#',
//     demo: '#',
//     stars: 890,
//     forks: 120,
//     featured: true,
//   },
//   {
//     title: 'APIForge',
//     description: 'Generate REST APIs from database schemas with automatic documentation, validation, and testing.',
//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
//     technologies: ['Node.js', 'OpenAPI', 'PostgreSQL'],
//     github: '#',
//     demo: '#',
//     stars: 650,
//     forks: 89,
//     featured: false,
//   },
//   {
//     title: 'TerminalCSS',
//     description: 'A terminal-inspired CSS framework for building retro-futuristic web interfaces.',
//     image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
//     technologies: ['CSS', 'SCSS', 'JavaScript'],
//     github: '#',
//     demo: '#',
//     stars: 420,
//     forks: 56,
//     featured: false,
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="font-mono text-primary text-sm">// projects</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             Things I've <span className="text-primary">Built</span>
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <motion.article
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow ${
//                 project.featured ? 'md:col-span-1' : ''
//               }`}
//             >
//               {/* Project Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-mono">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <div className="flex items-center gap-3">
//                     <a
//                       href={project.github}
//                       className="p-2 rounded-md hover:bg-muted transition-colors"
//                       aria-label="View on GitHub"
//                     >
//                       <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
//                     </a>
//                     <a
//                       href={project.demo}
//                       className="p-2 rounded-md hover:bg-muted transition-colors"
//                       aria-label="View live demo"
//                     >
//                       <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground mb-4 line-clamp-2">
//                   {project.description}
//                 </p>

//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 text-xs font-mono rounded bg-muted border border-border text-muted-foreground"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center gap-3 text-sm text-muted-foreground">
//                     <span className="flex items-center gap-1">
//                       <Star className="w-4 h-4" />
//                       {project.stars}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <GitFork className="w-4 h-4" />
//                       {project.forks}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'RailMan',
    description:
      'A web application that simplifies railcar fuel loading at US Oil Terminals, integrating with the Terminal Management System (TMS).',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    technologies: ['Express.js', 'React', 'MSSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Farm Easy',
    description:
      'A mobile app for farmers to detect paddy leaf infections using TensorFlow CNN models, built with over 10,000 images.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    technologies: ['React', 'Tensorflow', 'FastAPI', 'React Native'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Regmon',
    description:
      'A Python script to monitor changes in the Multiload device register and send email notifications on detected changes.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['Python', 'SMTP', 'Bash', 'cron'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Triad EMS',
    description:
      'An internal employee management system for Triad Asia, including features like user management and leave tracking.',
    image:
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    technologies: ['Express.js', 'React', 'MySQL'],
    github: '#',
    demo: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Things I've <span className="text-primary">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="p-2 rounded-md hover:bg-muted transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 rounded-md hover:bg-muted transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  </div> */}
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
