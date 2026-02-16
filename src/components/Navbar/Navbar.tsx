import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), to: 'home' },
    { name: t('navbar.about'), to: 'about' },
    { name: t('navbar.skills'), to: 'skills' },
    { name: t('navbar.projects'), to: 'projects' },
    { name: t('navbar.contact'), to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex-shrink-0 cursor-pointer'>
            <Link
              to='home'
              smooth={true}
              duration={500}
              className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500'
            >
              Behruz.dev
            </Link>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass='text-primary font-semibold'
                  className='cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors relative group'
                >
                  {link.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className='hidden md:flex items-center gap-4'>
            <ColorPicker />
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors'
              aria-label='Toggle Theme'
            >
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className='border-l border-slate-300 dark:border-white/20 h-6 mx-1'></div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden gap-4 items-center'>
            <ColorPicker />
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors'
            >
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden glass border-t border-slate-200 dark:border-white/10 overflow-hidden'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className='cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-100 dark:hover:bg-white/10 w-full text-center'
                >
                  {link.name}
                </Link>
              ))}
              <div className='pt-4 pb-2'>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
