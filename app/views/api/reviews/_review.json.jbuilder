json.extract! review, :id, :user, :business_id, :rating, :body, :updated_at
json.user_avatar url_for(review.user.avatar)
