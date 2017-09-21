json.array! @businesses do |biz|
  json.partial! 'api/businesses/business', business: biz
  json.latest_review do
    if !biz.latest_reviews.empty?
      review = biz.latest_reviews[0]
      json.partial! 'api/reviews/review', review: review
    else
      # if biz has no review, biz.latest_reviews == []
      # set this latest_review field value to be null
      json.nil!
    end
  end
end
