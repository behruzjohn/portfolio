import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 inline-block'>
            {t('contact.title')}
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          <p className='mt-4 text-slate-600 dark:text-slate-300'>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
              {t('contact.title')}
            </h3>
            <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
              {t('contact.subtitle')}
            </p>

            <div className='space-y-6'>
              <a href='mailto:baxtiyorovbehruzjon6789@gmail.com'>
                <div className='p-4 rounded-xl glass-card flex items-center gap-3 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group'>
                  <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                    <Mail size={20} />
                  </div>
                  <div className='overflow-hidden'>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>
                      {t('about.email')}
                    </p>
                    <p
                      className='font-medium text-slate-900 dark:text-white'
                      title='baxtiyorovbehruzjon6789@gmail.com'
                    >
                      baxtiyorovbehruzjon6789@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              <a
                href='https://t.me/Behruzjon6789'
                className='flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all group'
              >
                <div className='p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                  <Send size={24} />
                </div>
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    {t('contact.label_message')}
                  </p>
                  <p className='font-medium text-slate-900 dark:text-white'>
                    @Behruzjon6789
                  </p>
                </div>
              </a>

              <div className='flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all group'>
                <div className='p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    {t('location')}
                  </p>
                  <p className='font-medium text-slate-900 dark:text-white'>
                    Jizzax, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='glass-card p-8 rounded-2xl'
          >
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium text-slate-700 dark:text-slate-300'
                  >
                    {t('contact.label_name')}
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
                    placeholder='Your Name'
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-slate-700 dark:text-slate-300'
                  >
                    {t('contact.email')}
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300'
                >
                  {t('contact.label_message')}
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none'
                  placeholder={t('contact.btn-placeholder')}
                />
              </div>

              <button
                type='submit'
                className='w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2'
              >
                <Send size={20} />
                {t('contact.send_btn')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
