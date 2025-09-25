import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/ben_arledge.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/barledge" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://x.com/benarledge" target="_blank" rel="noreferrer"><XIcon/></a>
            <a href="https://www.linkedin.com/in/benarledge/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ben Arledge</h1>
          <p>Full Stack Engineer, UI/UX Analyst, Project Leader</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/barledge" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://x.com/benarledge" target="_blank" rel="noreferrer"><XIcon/></a>
            <a href="https://www.linkedin.com/in/benarledge/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;