import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  console.log('jdbasjbdbas');
  
  return (
    <>
     <h1>  PAGE IS WORKING 🚀</h1>
    <HelmetProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
    </>
  );
}

export default App;
