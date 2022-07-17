import React from 'react';
import project1_img from '../../assets/images/project-1.png';
import project2_img from '../../assets/images/project-2.png';
import project3_img from '../../assets/images/project-3.jpg';
import project4_img from '../../assets/images/project-4.jpg';

export default function Projects() {
    return (
    <div id="work" className="container-fluid bg-2 text-center">
        <div className="col-md-8 col-md-offset-2">
            <h3 className="title">Work</h3>
        <p>
          I'm AbdulQadir Essa UX / UI Designer. I am passionate about solving
          business problems through human-centered design. Curious by nature and
          business-minded.
        </p>
        <p>
          I create layouts that adjust to any type of screen size, desktop,
          tablet or mobile.
        </p>
        <p>Here are some of the projects which I have worked:</p>
      </div>
      <div className="row">
        <div className="col-md-6 project">
          <a className="box zoom" rel="noreferrer" target="_blank" href="https://teamgta.github.io/GetawayfromGTA/">
            <img src={project1_img} alt="teamgta" />
            <div className="text">
            <a className="nav-link" style={{fontSize:"50px"}} rel="noreferrer" target="_blank" href="https://github.com/TeamGTA/GetawayfromGTA" title="Github"><i className="fab fa-github"></i></a>
              <h1>Getaway from GTA</h1>
            </div>
          </a>
        </div>
        <div className="col-md-6 project">
          <a className="box zoom" rel="noreferrer"  target="_blank" href="https://immense-sea-90510.herokuapp.com/">
            <div className="box zoom">
              <img src={project2_img} alt="Jacked In The Box" />
              <div className="text">
            <a className="nav-link" style={{fontSize:"50px"}} rel="noreferrer" target="_blank" href="https://github.com/project2bootcamp/JackedInTheBox" title="Github"><i className="fab fa-github"></i></a>
                <h1>Jacked In The Box</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 project">
          <div className="box zoom">
            <img src={project3_img} alt="Restaurant Website" />
            <div className="text">
            <a className="nav-link" style={{fontSize:"50px"}} rel="noreferrer" target="_blank" href="https://github.com/AbdulQadir51" title="Github"><i className="fab fa-github"></i></a>
              <h1>Restaurant Website</h1>
            </div>
          </div>
        </div>
        <div className="col-md-6 project">
          <div className="box zoom">
            <img src={project4_img} alt="E-Commerce Website" />
            <div className="text">
            <a className="nav-link" style={{fontSize:"50px"}} rel="noreferrer" target="_blank" href="https://github.com/AbdulQadir51" title="Github"><i className="fab fa-github"></i></a>
              <h1>E-Commerce Website</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}