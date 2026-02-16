import { Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Orange', value: '#F97316' },
  { name: 'Green', value: '#10B981' },
  { name: 'Cyan', value: '#06B6D4' },
];

const ColorPicker = () => {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors'
        aria-label='Change Color'
      >
        <Palette size={20} style={{ color: primaryColor }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute right-0 mt-2 w-48 p-3 rounded-xl glass border border-slate-200 dark:border-white/10 shadow-xl z-50'
          >
            <div className='grid grid-cols-4 gap-2'>
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    setPrimaryColor(color.value);
                    setIsOpen(false);
                  }}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    primaryColor === color.value
                      ? 'border-slate-500 dark:border-white scale-110'
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <div className='mt-3 pt-3 border-t border-slate-200 dark:border-white/10'>
              <span className='text-xs text-slate-500 dark:text-slate-400 block mb-2 text-center'>
                Custom Hex
              </span>
              <input
                type='color'
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className='w-full h-8 rounded cursor-pointer'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
