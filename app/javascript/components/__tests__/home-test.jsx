// run test: npm test
// update snapshots: npm test -- -u

import React from 'react';
import renderer from 'react-test-renderer';
import HomeHero from '../home/HomeHero';
import FeaturedBusinesses from '../home/FeaturedBusinesses';
import Categories from '../home/Categories';

jest.mock('react-rating');
jest.mock('../header/SearchBar', () => ('SearchBar Mock'));
jest.mock('../home/home_header/HomeHeaderContainer', () => ('HomeHeaderContainer Mock'));

window.staticImages = {};

const businesses = [{
  id: 464,
  author_id: 530,
  name: 'Buddakan',
  address: '75 9th Ave',
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  lat: 40.742287,
  lng: -74.004819,
  price: 3,
  url: 'buddakannyc.com',
  phone: '(212) 989-6699',
  averageRating: '3.1428571428571429',
  tags: [{
    id: 17,
    label: 'Chinese',
    created_at: '2017-09-02T21:10:59.608Z',
    updated_at: '2017-09-02T21:10:59.608Z',
  },
  {
    id: 22,
    label: 'Asian Fusion',
    created_at: '2017-09-02T21:10:59.629Z',
    updated_at: '2017-09-02T21:10:59.629Z',
  },
  ],
  imageUrl: 'http://s3.amazonaws.com/bara-dev/businesses/images/000/000/464/original/Chinese.jpg?1504386660',
  numberOfReviews: 14,
},
{
  id: 460,
  author_id: 542,
  name: 'Dovetail',
  address: '103 W 77th St',
  city: 'New York',
  state: 'NY',
  zipcode: 10024,
  lat: 40.780927,
  lng: -73.976625,
  price: 4,
  url: 'dovetailnyc.com',
  phone: '(212) 362-3800',
  averageRating: '4.5714285714285714',
  tags: [{
    id: 20,
    label: 'American',
    created_at: '2017-09-02T21:10:59.621Z',
    updated_at: '2017-09-02T21:10:59.621Z',
  },
  {
    id: 21,
    label: 'French',
    created_at: '2017-09-02T21:10:59.625Z',
    updated_at: '2017-09-02T21:10:59.625Z',
  },
  ],
  imageUrl: 'http://s3.amazonaws.com/bara-dev/businesses/images/000/000/460/original/French.jpg?1504386660',
  numberOfReviews: 14,
},
{
  id: 462,
  author_id: 530,
  name: 'Burger & Lobster',
  address: '39 W 19th St',
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  lat: 40.740123,
  lng: -73.993345,
  price: 2,
  url: 'burgerandlobster.com/en',
  phone: '(646) 833-7532',
  averageRating: '4.2727272727272727',
  tags: [{
    id: 20,
    label: 'American',
    created_at: '2017-09-02T21:10:59.621Z',
    updated_at: '2017-09-02T21:10:59.621Z',
  },
  {
    id: 19,
    label: 'Seafood',
    created_at: '2017-09-02T21:10:59.616Z',
    updated_at: '2017-09-02T21:10:59.616Z',
  },
  ],
  imageUrl: 'http://s3.amazonaws.com/bara-dev/businesses/images/000/000/462/original/Seafood.jpg?1504386660',
  numberOfReviews: 11,
},
];

it('renders HomeHero correctly', () => {
  const tree = renderer
    .create(<HomeHero
      handleHomeLogoClick={() => {}}
      hasDefaultBackground
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders FeaturedBusinesses correctly', () => {
  const tree = renderer
    .create(<FeaturedBusinesses
      featuredBusinesses={businesses}
      isLoading={false}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Categories correctly', () => {
  const tree = renderer
    .create(<Categories />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
