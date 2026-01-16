import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
    tech: ["React", "Tailwind CS", "Recharts", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media App",
    description: "A modern social media application featuring real-time messaging, post sharing, and user profiles.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?fit=crop&w=800&q=80",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Travel Booking Platform",
    description: "An intuitive booking platform for flights and hotels with integrated map services and payment gateways.",
    tech: ["React", "Express", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?fit=crop&w=800&q=80",
    liveLink: "#",
    githubLink: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300">A selection of my recent work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-white/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-100 dark:border-white/10"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.githubLink} className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={project.liveLink} className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
