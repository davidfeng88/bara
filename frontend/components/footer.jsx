import React from 'react';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='container footer-container'>

        <div className='footer-links'>

          <div className='footer-links-col'>
            <h3>About Bara</h3>
              <a href="https://github.com/davidfeng88/bara" target="_blank">
              GitHub Repo</a>
          </div>

          <div className='footer-links-col2'>
            <h3>About the Developer: Ge "David" Feng</h3>
              <a href="http://davidfeng.us/" target="_blank">
              Portfolio Site</a>
              <a href="https://github.com/davidfeng88" target="_blank">
              GitHub</a>
              <a href="https://www.linkedin.com/in/gfeng/" target="_blank">
              LinkedIn</a>
              <a href="https://angel.co/ge-david-feng" target="_blank">
              AngelList</a>
          </div>
        </div>

        <div className='footer-picture'>
          <img src={window.staticImages.footerPic} />
        </div>

      </div>
    </div>
  );
};

export default Footer;
