import * as React from "react";
import "./team.css";
import ProfileDri from './../img/profileDri.jpeg';
import ProfileSitora from './../img/profileSitora.png';
import ProfileSkyler from './../img/profileSkyler.jpeg';
import ProfileJoe from './../img/joe.png';
import GitHub from './../img/github.png';
import LinkedIn from './../img/linkedin.png';


const Team = () => {
  return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 main text-center">
              <h2>Meet the team</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12 main text-center">
              <h3>Columbia Engineering Coding Boot Camp</h3>
            </div>
        </div>
        <br /><br />
        <div className="row">
            <div className="avatar mx-auto">
              <img  src={ProfileDri} className="img_profile" alt="profile Adriana"/>
            </div>
            <div className="avatar mx-auto">
              <img src={ProfileJoe} className="img_profile" alt="profile Joe"/>
            </div>
            <div className="avatar mx-auto">
              <img src={ProfileSitora} className="img_profile" alt="profile Sitora"/>
            </div>
            <div className="avatar mx-auto">
              <img src={ProfileSkyler} className="img_profile" alt="profile Skyler"/>
            </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-3 main">
            <h4 className="text-capitalize text-center">Adriana Almeida</h4>
          </div>
          <div className="col-3 main">
            <h4 className="text-capitalize text-center">Joseph de Franco</h4>
          </div>
          <div className="col-3 main">
            <h4 className="text-capitalize text-center">Sitora Alexander</h4>
          </div>
          <div className="col-3 main">
            <h4 className="text-capitalize text-center">Skyler Rencher</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 main">
            <h6 className="text-capitalize text-center">Full Stack Developer</h6>
          </div>
          <div className="col-3 main">
            <h6 className="text-capitalize text-center">Full Stack Developer</h6>
          </div>
          <div className="col-3 main">
            <h6 className="text-capitalize text-center">Full Stack Developer</h6>
          </div>
          <div className="col-3 main">
            <h6 className="text-capitalize text-center">Full Stack Developer</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-3 main">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/adriana-abedala-do-carmo-almeida-a03241184/" target="#"><img src={LinkedIn} className="linkedin_size" alt="LinkedIn Adriana"/></a>
              &nbsp;
              <a href="https://github.com/adriana-carmo" target="#"><img src={GitHub} className="github_size" alt="GitHub Adriana"/></a>
            </div>
          </div>
          <div className="col-3 main">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/joseph-defranco-505a43aa/" target="#"><img src={LinkedIn} className="linkedin_size" alt="LinkedIn Joseph"/></a>
              &nbsp;
              <a href="https://github.com/jdefranco24" target="#"><img src={GitHub} className="github_size" alt="GitHub Joseph"/></a>
            </div>
          </div>
          <div className="col-3 main">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/sitora-alexander/" target="#"><img src={LinkedIn} className="linkedin_size" alt="LinkedIn Sitora"/></a>
              &nbsp;
              <a href="https://github.com/sitoraalexander" target="#"><img src={GitHub} className="github_size" alt="GitHub Sitora"/></a>
            </div>
          </div>
          <div className="col-3 main">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/skyler-rencher/" target="#"><img src={LinkedIn} className="linkedin_size" alt="LinkedIn Skyler"/></a>
              &nbsp;
              <a href="https://github.com/skycode20" target="#"><img src={GitHub}  className="github_size" alt="GitHub Skyler"/></a>
            </div>
          </div>
        </div> 
      </div>
  );
};

export default Team;
