import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-slate-200 dark:border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Behruz.dev. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/behruzjohn" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
