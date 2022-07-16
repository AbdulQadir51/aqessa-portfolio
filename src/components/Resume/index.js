import React from 'react';

export default function Resume(){
    return (
    <section id="resume" className="cv-block info">
      <div className="container">
        <div className="work-experience group" id="work-experience">
          <h2 className="text-center">Work Experience</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Web Developer</h3>
                <h4 className="organization">Amazing Co.</h4>
              </div>
              <div className="col-md-6">
                <time className="period">10/2013 - 04/2015</time>
              </div>
            </div>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Front End Developer</h3>
                <h4 className="organization">Innovative Org.</h4>
              </div>
              <div className="col-md-6">
                <time className="period">05/2015 - 12/2017</time>
              </div>
            </div>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Web Developer</h3>
                <h4 className="organization">Special Inc.</h4>
              </div>
              <div className="col-md-6">
                <time className="period">12/2017 - Present</time>
              </div>
            </div>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
          </div>
        </div>
        <div className="education group" id="education">
          <h2 className="text-center">Education</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>High School</h3>
                <h4 className="organization">Albert Einstein School</h4>
              </div>
              <div className="col-md-6">
                <time className="period">09/2005 - 05/2010</time>
              </div>
            </div>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Applied Physics</h3>
                <h4 className="organization">Stephen Hawking College</h4>
              </div>
              <div className="col-md-6">
                <time className="period">09/2010 - 06/2015</time>
              </div>
            </div>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
          </div>
        </div>
        <div className="group" id="skills">
          <div className="row">
            <div className="col-md-12">
              <div className="skills info-card">
                <h2>Skills</h2>
                <h3>HTML/CSS</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
                <h3>NodeJS</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
                <h3>JavaScript</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}