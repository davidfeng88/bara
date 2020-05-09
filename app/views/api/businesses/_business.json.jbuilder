json.extract! business,
              :id, :author_id, :name, :address, :city, :state, :zipcode,
              :lat, :lng, :price, :url, :phone, :tags
json.averageRating business.average_rating

if business.image.attached?
  json.imageUrl url_for(business.image)
else
  json.imageUrl asset_path('business-default.jpg')
end

json.numberOfReviews business.reviews.length
