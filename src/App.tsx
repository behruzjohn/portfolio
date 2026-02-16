import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Heros from './components/Hero/Hero';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
