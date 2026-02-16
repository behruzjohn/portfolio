import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Layout, Server } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('skills.frontend'),
      icon: <Layout className='w-8 h-8' />,
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'Next.js',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: t('skills.backend'),
      icon: <Server className='w-8 h-8' />,
      items: ['Node.js', 'MongoDB', 'REST APIs', 'Authentication'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: t('skills.tools'),
      icon: <Code2 className='w-8 h-8' />,
      items: [
        'Git & GitHub',
        'VS Code',
        'Vite',
        'SEO Optimization',
        'Responsive Design',
        'Figma',
      ],
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 inline-block'>
            {t('skills.title')}
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
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
              className='glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300'
            >
              <div
                className={`mx-auto mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>

              <h3 className='text-xl font-bold text-slate-900 dark:text-white text-center mb-6 group-hover:text-primary transition-colors'>
                {skill.category}
              </h3>

              <div className='flex flex-wrap justify-center gap-2'>
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium group-hover:border-primary/30 group-hover:bg-primary/5 transition-all'
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
