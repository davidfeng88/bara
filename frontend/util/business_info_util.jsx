import React from 'react';
import {
  Link
} from 'react-router-dom';

export const price = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

export const reviewNumber = business => {
  switch ( business.number_of_reviews ) {
    case 0:
      return "No reviews yet";
    case 1:
      return "1 review";
    default:
      return `${business.number_of_reviews.toString()} reviews`;
  }
};

const tagEntry = tag => {
  let label = encodeURIComponent( tag.label );
  let tagLink = `/businesses/?tag=${label}`;
  return (
    <Link key={label} to={tagLink}>
      {tag.label}
    </Link>
  );
};

export const tagContent = ( {
  tags
} ) => {
  if ( tags ) {
    let tagsArray = [];
    tags.forEach( ( tag, index ) => {
      if ( index === 0 ) {
        tagsArray.push( ' • ' );
      } else {
        tagsArray.push( ', ' );
      }
      tagsArray.push( tagEntry( tag ) );
    } );
    return tagsArray;
  } else {
    return null;
  }
};
