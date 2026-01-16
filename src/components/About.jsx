import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
             {/* Placeholder for About Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                  alt="Behruz" 
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              I'm a passionate Full-Stack Developer based in Uzbekistan.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              With a strong foundation in <span className="text-blue-600 font-semibold">web development</span>, I specialize in building scalable, responsive, and user-centric applications. My journey started with a curiosity for how the web works, which evolved into a career of solving complex problems through code.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I love working with the <span className="text-purple-600 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) and modern tools like Tailwind CSS and Next.js. When I'm not coding, you can find me learning new technologies or exploring the tech community on Telegram.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <div>
                <span className="text-blue-600 mr-2">Experience:</span> 2+ Years
              </div>
              <div>
                 <span className="text-blue-600 mr-2">Email:</span> contact@behruz.dev
              </div>
              <div>
                 <span className="text-blue-600 mr-2">Location:</span> Uzbekistan
              </div>
               <div>
                 <span className="text-blue-600 mr-2">Availability:</span> Open to Work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
