import React from 'react';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='container footer-container'>

        <div className='footer-links'>

          <div className='footer-links-col'>
            <h3>About Bara</h3>
              <p><a href="https://github.com/davidfeng88/bara" target="_blank">
              GitHub Repo</a></p>
          </div>

          <div className='footer-links-col'>
            <h3>About Me</h3>
              <p><a href="http://davidfeng.us/" target="_blank">
              Portfolio Site</a></p>
              <p><a href="https://github.com/davidfeng88" target="_blank">
              GitHub</a></p>
              <p><a href="https://www.linkedin.com/in/gfeng/" target="_blank">
              LinkedIn</a></p>
              <p><a href="https://angel.co/ge-david-feng" target="_blank">
              AngelList</a></p>
          </div>

          <div className='footer-links-col'>
            <h3>Credits</h3>
              <p>Design: <a href="https://www.yelp.com/nyc" target="_blank">
              Yelp</a></p>
              <p>Developer: <a href="http://davidfeng.us/" target="_blank">
              Ge "David" Feng</a></p>
              <p>Icons: <a href="http://fontawesome.io/" target="_blank">
              Font Awesome</a></p>
              <p>Logo Designer: <a href="https://www.linkedin.com/in/meng-zhang-692b7644/" target="_blank">
              Meng Zhang</a></p>
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
