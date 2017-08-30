@businesses.each do |biz|
  json.set! biz.id do
    json.partial! 'api/businesses/business', business: biz

    json.latest_review do
      review = biz.latest_reviews[0]
      json.partial! 'api/reviews/review', review: review
    end
  end
end
