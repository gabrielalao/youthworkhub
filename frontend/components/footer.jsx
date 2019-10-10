import React from 'react';
import Logo from './logo';

const Footer = () => (
  <footer className="footer">

    <div className='logo-image'>
      <Logo />
    </div>

    <div className="footer-text">
      <h2>Empower the youth</h2>
      <h5 className="tagline">and get your jobs done!</h5>
    </div>

    <div className='footer-links'>
      <a className='top-link'
         href="https://github.com/MixMasterT/youth_work_hub">
        <i className="fa fa-github fa-3x" aria-hidden="true"></i>
      </a>
      <a className='bottom-link'
         href="https://www.linkedin.com/in/torahoglander/">
        <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
      </a>
    </div>

  </footer>
);

export default Footer;
