import { motion } from 'framer-motion';
import myPhoto from '../assets/myphotos.jpg';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className='py-20 bg-white dark:bg-dark'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            {t('about.title')}
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex justify-center'
          >
            <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3px hover:rotate-0 transition-all duration-300'>
              <div className='absolute inset-0 bg-blue-600/20 mix-blend-overlay'></div>
              <img
                src={myPhoto}
                alt='Behruz'
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              {t('about.subtitle')}
            </h3>
            <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
              {t('about.description_1')}
            </p>
            <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
              {t('about.description_2')}
            </p>

            <div className='grid grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 font-medium'>
              <div>
                <span className='text-blue-600 mr-2'>
                  {t('about.experience')}:
                </span>{' '}
                {t('about.years')}
              </div>
              <div>
                <span className='text-blue-600 mr-2'>{t('about.email')}:</span>{' '}
                baxtiyorovbehruzjon6789@gmail.com
              </div>
              <div>
                <span className='text-blue-600 mr-2'>
                  {t('about.location')}:
                </span>{' '}
                Jizzakh,Uzbekistan
              </div>
              <div>
                <span className='text-blue-600 mr-2'>
                  {t('about.availability')}:
                </span>{' '}
                {t('about.open_to_work')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
