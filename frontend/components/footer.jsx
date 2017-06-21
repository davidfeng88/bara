import React from 'react';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='container footer-container'>

        <div className='about'>
          <h3>About</h3>
            <a href="https://github.com/davidfeng88/bara" target="_blank">
            About Bara</a>
        </div>

        <div className='footer-picture'>
          <img src={window.staticImages.footerPic} />
        </div>

      </div>
    </div>
  );
};

export default Footer;
