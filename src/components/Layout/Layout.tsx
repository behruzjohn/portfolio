import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans flex flex-col'>
      <Navbar />
      <main className='flex-grow pt-16'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
