json.extract! business, :id, :name, :price, :tags
json.averageRating business.average_rating
json.numberOfReviews business.reviews.length