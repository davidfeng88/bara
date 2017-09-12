json.partial! 'api/businesses/business', business: @business

json.reviews do
  json.array! @business.reviews.order(updated_at: :desc) do |review|
    json.partial! 'api/reviews/review', review: review
  end
end
# if @business has no review, @business.reviews == [] and the "reviews"
# field will be an empty array
