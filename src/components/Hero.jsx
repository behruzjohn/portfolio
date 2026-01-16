import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              Available for Work
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Behruz</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              A passionate <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Web Developer</span> crafting modern, high-performance, and accessible web experiences. I turn ideas into reality with code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400">
               <a href="https://github.com/behruzjohn" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github size={24} />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  <Instagram size={24} />
               </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="md:w-1/2 flex justify-center relative">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
           >
              {/* Decorative Circle/Blob behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              {/* Use a placeholder or generated image for now. Since I can't generate files directly to that path without them being artifacts, I will use a placeholder div or an img tag with a placeholder service for now, or just a stylish CSS composition */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="code-block p-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <p><span className="text-purple-500">const</span> <span className="text-blue-500">developer</span> = <span className="text-yellow-500">{'{'}</span></p>
                    <p className="pl-4">name: <span className="text-green-500">'Behruz'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-500">'React'</span>, <span className="text-green-500">'Node'</span>],</p>
                    <p className="pl-4">hardWorker: <span className="text-orange-500">true</span>,</p>
                    <p className="pl-4">coffeeLover: <span className="text-orange-500">true</span></p>
                    <p><span className="text-yellow-500">{'}'}</span>;</p>
                  </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
