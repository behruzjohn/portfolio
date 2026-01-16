import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className='py-20 bg-slate-50 dark:bg-black/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            {t('contact.title')}
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
          <p className='mt-4 text-slate-600 dark:text-slate-300'>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-white/10'>
              <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                {t('contact.info_title')}
              </h3>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400'>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                      {t('contact.label_email')}
                    </p>
                    <a
                      href='mailto:contact@baxtiyorovbehruzjon6789@gmail.com'
                      className='text-lg font-medium text-slate-900 dark:text-white hover:text-blue-600 transition-colors'
                    >
                      baxtiyorovbehruzjon6789@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400'>
                    <Send size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                      Telegram
                    </p>
                    <a
                      href='https://t.me/Behruzjon6789'
                      className='text-lg font-medium text-slate-900 dark:text-white hover:text-purple-600 transition-colors'
                    >
                      @Behruzjon6789
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400'>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                      {t('about.location')}
                    </p>
                    <p className='text-lg font-medium text-slate-900 dark:text-white'>
                      Jizzakh Uzbekistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className='bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-white/10 space-y-6'>
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  {t('contact.label_name')}
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all'
                  placeholder={t('contact.placeholder_name')}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  {t('contact.label_email')}
                </label>
                <input
                  type='email'
                  className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all'
                  placeholder={t('contact.placeholder_email')}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  {t('contact.label_message')}
                </label>
                <textarea
                  rows='4'
                  className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none'
                  placeholder={t('contact.placeholder_message')}
                />
              </div>
              <button
                type='submit'
                className='w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'
              >
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
