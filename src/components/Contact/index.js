import React from 'react';

export default function Contact(){
    return (
        <div id="contact" className="container-fluid bg-3">
      <h3 className="title">Contact Me</h3>
      <br />
      <div className="row">
        <div className="col-sm-6">
          <div className="mt-1">
            <div><i className="fas fa-phone"></i> +14372485253</div>
            <div>
              <a href="mailto:abdulessa93@gmail.com"><i className="far fa-envelope"></i> abdulessa93@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="header-social mb-3 d-print-none aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                    <span className="menu-title sr-only">LinkedIn</span>
                  </a>
                </li>
                <li className="nav-item">
                 
                  <a className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/AbdulQadir51" title="Github">
                    <i className="fab fa-github"></i>
                    <span className="menu-title sr-only">Github</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="https://www.facebook.com" title="Facebook">
                    <i className="fab fa-facebook"></i>
                    <span className="menu-title sr-only">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="https://www.instagram.com" title="Instagram">
                    <i className="fab fa-instagram"></i>
                    <span className="menu-title sr-only">Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    )
}