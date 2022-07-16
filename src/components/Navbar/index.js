import React from 'react';



export default function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#about">Me</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about"
                onClick={() => handlePageChange('About')}
                className={`mx-2 ${currentPage === 'About' && 'nav-active'}`}>About me</a>
            </li>
            <li>
              <a href="#Portfolio" 
                onClick={() => handlePageChange('Portfolio')}
                className={`mx-2 ${currentPage === 'Portfolio' && 'nav-active'}`}>Projects</a>
            </li>
            <li>
              <a href="#Resume" 
              onClick={() => handlePageChange('Resume')}
              className={`mx-2 ${currentPage === 'Resume' && 'nav-active'}`}>Resume</a>
            </li>
            <li>
              <a href="#Contact" 
               onClick={() => handlePageChange('Contact')}
               className={`mx-2 ${currentPage === 'Contact' && 'nav-active'}`}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}