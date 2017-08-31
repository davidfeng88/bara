import React from 'react';

const SampleSearch = () => (
  <div>
    <h1>Try these searches:</h1>
    <div className='sample-search'>
      <div className='sample-search-title'>
        Address:
      </div>
      <div className='sample-search-entries'>
        <a href="/#/businesses/?name=&location=30%20water%20st">30 Water St</a>
        <a href="/#/businesses/?name=&location=1st%20ave">1st Ave</a>
      </div>

      <div className='sample-search-title'>
        City:
      </div>
      <div className='sample-search-entries'>
        <a href="/#/businesses/?name=&location=New%20York">New York</a>
      </div>

      <div className='sample-search-title'>
        State:
      </div>
      <div className='sample-search-entries'>
        <a href="/#/businesses/?name=&location=NY">NY</a>
      </div>

      <div className='sample-search-title'>
        Zip:
      </div>
      <div className='sample-search-entries'>
        <a href="/#/businesses/?name=&location=10013">10013</a>
      </div>
    </div>
  </div>
);

export default SampleSearch;
