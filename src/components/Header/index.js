import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Projects from '../Projects';
import Resume from '../Resume';


function Header() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Projects />;
        
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return(
      <>
      <header className="flex-row px-1" id="hero">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
     <main>
     {renderPage()}
      </main>
      </>
    );
  }
  
  export default Header;