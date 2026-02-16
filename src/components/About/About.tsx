import { motion } from 'framer-motion';
import myPhoto from '../../../public/images/myPhotos.jpg';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Calendar, Building2 } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className='py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 inline-block'>
            {t('about.title')}
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex justify-center'
          >
            <div className='relative group'>
              <div className='absolute inset-0 bg-primary/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500' />
              <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass border border-white/20 dark:border-white/10 shadow-2xl'>
                <div className='absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300' />
                <img
                  src={myPhoto}
                  alt='Behruz'
                  className='w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500'
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
              {t('about.subtitle')}
            </h3>

            <div className='text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed'>
              <p>{t('about.description_1')}</p>
              <p>{t('about.description_2')}</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
              <div className='p-4 rounded-xl glass-card flex items-center gap-3 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group'>
                <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                  <Calendar size={20} />
                </div>
                <div>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {t('about.experience')}
                  </p>
                  <p className='font-semibold text-slate-800 dark:text-white'>
                    {t('about.years')}
                  </p>
                </div>
              </div>

              <div className='p-4 rounded-xl glass-card flex items-center gap-3 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group'>
                <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                  <Mail size={20} />
                </div>
                <div className='overflow-hidden'>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {t('about.email')}
                  </p>
                  <p
                    className='font-semibold text-slate-800 dark:text-white truncate'
                    title='baxtiyorovbehruzjon6789@gmail.com'
                  >
                    baxtiyorovbehruzjon6789@gmail.com
                  </p>
                </div>
              </div>

              <a
                href='https://maps.app.goo.gl/BXzLETHuMk2uFJSb6'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 rounded-xl glass-card flex items-center gap-3 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group'
              >
                <div className='p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {t('about.location')}
                  </p>
                  <p className='font-semibold text-slate-800 dark:text-white'>
                    Jizzax, Uzbekistan
                  </p>
                </div>
              </a>

              <a
                href='https://alicode.uz'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 rounded-xl glass-card flex items-center gap-3 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group'
              >
                <div className='p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                  <Building2 size={20} />
                </div>
                <div>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {t('about.learnedIn')}
                  </p>
                  <p className='font-semibold text-slate-800 dark:text-white'>
                    {t('about.companyNameToLearn')}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
