import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

export const Footer = () => {
    return (
      <div className="footer">
        <div className="socialMedia">
        <a href="https://github.com/SerkanBahtiyar">
          <GitHubIcon/>
        </a>
        <a href="https://www.instagram.com/serkan_bahtiyar/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/serkanbahtiyar/">
          <LinkedInIcon />
        </a>
        </div>
        <p>Tüm hakları saklıdır | BurgerYiyelim</p>
      </div>
    );
  };
