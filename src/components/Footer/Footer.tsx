import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='glass mt-20 border-t border-white/20 dark:border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <span className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500'>
              Behruz.dev
            </span>
          </div>

          <div className='text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1'>
            <span>Made with</span>
            <Heart size={16} className='text-red-500 fill-red-500' />
            <span>by Behruz</span>
          </div>

          <div className='flex space-x-6'>
            <a
              href='#'
              className='text-slate-500 hover:text-primary transition-colors'
            >
              <Github size={20} />
            </a>
            <a
              href='#'
              className='text-slate-500 hover:text-primary transition-colors'
            >
              <Linkedin size={20} />
            </a>
            <a
              href='#'
              className='text-slate-500 hover:text-primary transition-colors'
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
