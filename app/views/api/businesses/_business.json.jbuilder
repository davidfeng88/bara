json.extract! business,
              :id, :name, :address, :city, :state, :zipcode,
              :lat, :lng, :price, :url, :phone, :tags
json.averageRating business.average_rating

if business.images.attached?
  json.images business.images.map { |image| url_for(image) }
else
  json.images [asset_path('business-default-0.jpg'), asset_path('business-default-1.jpg'), asset_path('business-default-2.jpg')].shuffle
end

json.numberOfReviews business.reviews.length
