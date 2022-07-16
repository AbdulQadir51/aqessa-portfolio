import React from 'react';
import avatarImage from '../../assets/images/aq.jpeg';

export default function About() {
    return ( 
        <div id="about" className="container-fluid bg-1 text-center">
        <h3 className="title">About Me</h3>
        <img src={avatarImage} className="img-responsive img-circle margin" alt="Abdulqadir Essa" width="250" height="250" />
        <div className="col-md-12">
          <div className="col-md-8 col-md-offset-2">
            <h3>I'm a Web Developer</h3>
            <p>
              Hello! I’m Abdulqadir. I am passionate about UI/UX design and Web
              Design. I am a skilled front-end developer and master of graphic
              design tools such as Photoshop and Sketch. I am a quick learner and
              a team worker that gets the job done.I can easily capitalize on low
              hanging fruits and quickly maximize timely deliverables for
              real-time schemas.
            </p>
          </div>
        </div>
      </div>
  );
}