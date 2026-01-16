import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Smartphone,
  Server,
} from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('skills.frontend'),
      icon: <Layout className='w-8 h-8 text-blue-500' />,
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'Framer Motion',
      ],
    },
    {
      category: t('skills.backend'),
      icon: <Server className='w-8 h-8 text-purple-500' />,
      items: ['Node.js', 'MongoDB', 'REST APIs', 'Authentication'],
    },
    {
      category: t('skills.tools'),
      icon: <Code2 className='w-8 h-8 text-green-500' />,
      items: [
        'Git & GitHub',
        'VS Code',
        'Vite',
        'SEO Optimization',
        'Responsive Design',
        'Figma Web Dizayn',
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 bg-slate-50 dark:bg-black/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            {t('skills.title')}
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
          <p className='mt-4 text-slate-600 dark:text-slate-300'>
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-white/10'
            >
              <div className='mb-6 bg-slate-100 dark:bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto'>
                {skill.icon}
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white text-center mb-6'>
                {skill.category}
              </h3>
              <div className='flex flex-wrap justify-center gap-2'>
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
