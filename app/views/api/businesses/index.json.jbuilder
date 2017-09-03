@businesses.each do |biz|
  json.set! biz.id do
    json.partial! 'api/businesses/business', business: biz

    json.latest_review do
      if biz.latest_reviews.length > 0
        # if biz has no review, biz.latest_reviews == []
        review = biz.latest_reviews[0]
        json.partial! 'api/reviews/review', review: review
      end
    end
  end
end
