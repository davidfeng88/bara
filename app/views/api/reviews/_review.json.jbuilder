json.extract! review, :id, :author_id, :business_id, :rating, :body

json.author do
  json.partial! 'api/users/user', user: review.author
end
