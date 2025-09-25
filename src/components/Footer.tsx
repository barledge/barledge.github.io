import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/barledge" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://x.com/benarledge" target="_blank" rel="noreferrer"><XIcon/></a>
        <a href="https://www.linkedin.com/in/benarledge/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;