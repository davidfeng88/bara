import React from 'react';

const SampleSearch = () => (
  <div className='sample-search'>
    <p>Try these searches:</p>
    <div className='sample-search-title'>
      Name:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=bur&location=">bur (fuzzy)</a>
      <a href="/#/businesses/?name=Shanghai&location=">Shanghai</a>
    </div>
    <div className='sample-search-title'>
      Address:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=&location=1st%20ave">1st Ave</a>
      <a href="/#/businesses/?name=&location=New%20York">New York</a>
      <a href="/#/businesses/?name=&location=NY">NY</a>
      <a href="/#/businesses/?name=&location=10013">10013</a>
    </div>
    <div className='sample-search-title'>
      Name & Address:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=bur&location=19th">bur & 19th</a>
    </div>
    <div className='sample-search-title'>
      Prices:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=&location=New%20York&prices[]=4">
        "$$$$" in New York
      </a>
      <a href="/#/businesses/?name=&location=&prices[]=1&prices[]=3">
        "$" and "$$$"
      </a>
    </div>
  </div>
);

export default SampleSearch;
