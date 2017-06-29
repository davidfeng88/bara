json.extract! business,
  :id, :author_id, :name, :address, :city, :state, :zipcode,
  :lat, :lng, :price, :url, :phone, :average_rating
json.image_url asset_path(business.image.url)

# reviews as an array
# if there is no review, it will be [] empty array.
# json.reviews do
#   json.partial! 'api/reviews/review', collection: business.reviews, as: :review
# end

# reviews as an object
# if there is no review, there will not be a key of reviews in the object
json.reviews do
  business.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end



# json.reviewsOrder business.reviews.map { |rev| rev.id }
