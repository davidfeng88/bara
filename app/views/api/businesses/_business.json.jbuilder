json.extract! business,
              :id, :author_id, :name, :address, :city, :state, :zipcode,
              :lat, :lng, :price, :url, :phone, :tags
json.averageRating business.average_rating
json.imageUrl asset_path(business.image.url)
json.numberOfReviews business.reviews.length
