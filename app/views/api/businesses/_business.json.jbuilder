json.extract! business,
              :id, :author_id, :name, :address, :city, :state, :zipcode,
              :lat, :lng, :price, :url, :phone, :average_rating, :tags
json.image_url asset_path(business.image.url)
json.number_of_reviews business.reviews.length
