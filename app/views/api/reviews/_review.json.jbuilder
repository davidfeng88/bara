json.extract! review, :id, :author_id, :business_id, :rating, :body, :updated_at

json.author do
  json.partial! 'api/users/user', user: review.author
end
