json.partial! 'api/businesses/business', business: @business
json.partial! 'api/businesses/business-images', business: @business
json.extract! @business, :url
json.reviews do
  json.array! @business.reviews.order(updated_at: :desc) do |review|
    json.partial! 'api/reviews/review', review: review
  end
end
# if @business has no review, @business.reviews == [] and the "reviews"
# field will be an empty array

json.reviewers Hash[@business.reviews.map { |review| [review.user_id, review.id] }]
