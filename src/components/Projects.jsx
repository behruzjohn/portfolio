import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import donDonZiki from '../assets/don-don-ziki.png';
import foodApp from '../assets/food-app.png';
import tavsifBook from '../assets/tavsifBook.png';
import { Image } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.project_1_title'),
      description: t('projects.project_1_desc'),
      tech: ['React', 'Java Script', 'CSS', 'Node.js', 'MongoDB'],
      image: `${foodApp}`,
      liveLink: 'behruzjon-restaurant.netlify.app',
      githubLink: 'https://github.com/behruzjohn/Food-app',
    },
    {
      title: t('projects.project_2_title'),
      description: t('projects.project_2_desc'),
      tech: ['HTML', 'CSS', 'JAVA SCRIPT', 'Socket.io'],
      image: `${tavsifBook}`,
      liveLink: 'https://tavsif-book.netlify.app',
      githubLink: 'https://github.com/behruzjohn/Books-app',
    },
    {
      title: t('projects.project_3_title'),
      description: t('projects.project_3_desc'),
      tech: ['HTML', 'CSS', 'JAVA SCRIPT', 'React'],
      image: `${donDonZiki}`,
      liveLink: 'https://don-don-ziki-game6789.netlify.app/',
      githubLink: 'https://github.com/behruzjohn/Don-don-ziki-in-react',
    },
  ];

  return (
    <section id='projects' className='py-20 bg-white dark:bg-dark'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            {t('projects.title')}
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
          <p className='mt-4 text-slate-600 dark:text-slate-300'>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-slate-50 dark:bg-white/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-100 dark:border-white/10'
            >
              <div className='relative overflow-hidden h-48'>
                <img
                  src={project?.image}
                  alt={project?.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
                  <a
                    href={project?.githubLink}
                    target='_blank'
                    className='p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors'
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    className='p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors'
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-4 line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
