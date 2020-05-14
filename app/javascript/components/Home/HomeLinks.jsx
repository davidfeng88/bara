import React from 'react';

const HomeLinks = () => (
  <div className="home-header-links">
    <HomeRestaurantLink />
    <HomeNightlifeLink />
    <SearchExample />
    <LogoInstruction />
  </div>
);

export default HomeLinks;

const HomeRestaurantLink = () => (
  <span className="home-header-link">
    <i className="fa fa-cutlery" aria-hidden="true" />
    <a href="#/businesses/?name=&location=New%20York">
      Restaurants
    </a>
  </span>
);

const HomeNightlifeLink = () => (
  <span className="home-header-link">
    <i className="fa fa-glass" aria-hidden="true" />
    <a href="#/businesses/?name=&location=New%20York&tag=nightlife">
      Nightlife
    </a>
  </span>
);

const SearchExample = () => (
  <p>Search Example:&nbsp;
    <a href="#/businesses/?name=burger&location=19th%20St">
      find &#34;burger&#34; near &#34;19th St&#34;
    </a>
  </p>
);

const LogoInstruction = () => (
  <p>
    Click on bara logo for new random featured businesses
  </p>
);
