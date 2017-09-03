json.partial! 'api/businesses/business', business: @business

json.reviews do
  # if biz has no review, biz.reviews == []
  @business.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
