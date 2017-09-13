json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)

reviewed_businesses = {}
user.reviews.each do |review|
  reviewed_businesses[review.business_id] = review.id
end

json.reviewed_businesses reviewed_businesses
# key: id of reviewed business, value: review id
