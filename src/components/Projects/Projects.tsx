import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';
import donDonZiki from '../../../public/images/don-don-ziki.png';
import foodApp from '../../../public/images/food-app.png';
import tavsifBook from '../../../public/images/tavsifBook.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.project_1_title'),
      description: t('projects.project_1_desc'),
      tech: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      image: `${foodApp}`,
      liveLink: 'https://behruzjon-restaurant.netlify.app',
      githubLink: 'https://github.com/behruzjohn/Food-app',
    },
    {
      title: t('projects.project_2_title'),
      description: t('projects.project_2_desc'),
      tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
      image: `${tavsifBook}`,
      liveLink: 'https://tavsif-book.netlify.app',
      githubLink: 'https://github.com/behruzjohn/Books-app',
    },
    {
      title: t('projects.project_3_title'),
      description: t('projects.project_3_desc'),
      tech: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      image: `${donDonZiki}`,
      liveLink: 'https://don-don-ziki-game6789.netlify.app/',
      githubLink: 'https://github.com/behruzjohn/Don-don-ziki-in-react',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 inline-block">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 glass rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 glass rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                    title="View Live"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-white/10 flex items-center gap-1"
                    >
                      <Code size={10} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a 
                href="https://github.com/behruzjohn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
                View More on GitHub
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
