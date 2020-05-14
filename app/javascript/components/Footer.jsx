import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <div className="footer">
    <div className="container footer-container">
      <FooterLinks />
      <FooterPicture />
    </div>
  </div>
);

export default Footer;

const FooterLinks = () => (
  <div className="footer-links">
    <AboutBara />
    <AboutMe />
    <Credits />
  </div>
);

const AboutBara = () => (
  <FooterLinkColumnTemplate
    title="About Bara"
  >
    <GitHubRepo />
  </FooterLinkColumnTemplate>
);

const AboutMe = () => (
  <FooterLinkColumnTemplate
    title="About Me"
  >
    <PortfolioSite />
    <GitHub />
    <LinkedIn />
    <AngelList />
  </FooterLinkColumnTemplate>
);

const Credits = () => (
  <FooterLinkColumnTemplate
    title="Credits"
  >
    <DesignCredit />
    <DeveloperCredit />
    <IconsCredit />
    <LogoDesignerCredit />
  </FooterLinkColumnTemplate>
);

const GitHubRepo = () => (
  <FooterLinkTemplate
    url="https://github.com/davidfeng88/bara"
    text="GitHub Repo"
  />
);

const PortfolioSite = () => (
  <FooterLinkTemplate
    url="https://davidfeng.us/"
    text="Portfolio Site"
  />
);

const GitHub = () => (
  <FooterLinkTemplate
    url="https://github.com/davidfeng88"
    text="GitHub"
  />
);

const LinkedIn = () => (
  <FooterLinkTemplate
    url="https://www.linkedin.com/in/gfeng/"
    text="LinkedIn"
  />
);

const AngelList = () => (
  <FooterLinkTemplate
    url="https://angel.co/ge-david-feng"
    text="AngelList"
  />
);

const DesignCredit = () => (
  <FooterLinkTemplate
    title="Design: "
    url="https://www.yelp.com/nyc"
    text="Yelp"
  />
);

const DeveloperCredit = () => (
  <FooterLinkTemplate
    title="Developer: "
    url="https://davidfeng.us/"
    text="Ge &#34;David&#34; Feng"
  />
);

const IconsCredit = () => (
  <FooterLinkTemplate
    title="Icons: "
    url="http://fontawesome.io/"
    text="Font Awesome"
  />
);

const LogoDesignerCredit = () => (
  <FooterLinkTemplate
    title="Logo Designer: "
    url="https://www.linkedin.com/in/meng-zhang-692b7644/"
    text="Meng Zhang"
  />
);

const FooterPicture = () => (
  <div className="footer-picture">
    <img alt="" src={window.staticImages.footerPic} />
  </div>
);

const FooterLinkColumnTemplate = ({
  title,
  children,
}) => (
  <div className="footer-links-col">
    <h3>{title}</h3>
    {children}
  </div>
);

FooterLinkColumnTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterLinkTemplate = ({
  title,
  url,
  text,
}) => (
  <p>
    {title}
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </a>
  </p>
);

FooterLinkTemplate.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

FooterLinkTemplate.defaultProps = {
  title: '',
  url: '',
  text: '',
};
