export const price = { 1: '$', 2: '$$', 3: '$$$', 4: '$$$$' };

export const reviewNumber = business => {
  switch (business.number_of_reviews) {
    case 0:
      return "No reviews yet";
    case 1:
      return "1 review";
    default:
      return `${business.number_of_reviews.toString()} reviews`;
  }
};
