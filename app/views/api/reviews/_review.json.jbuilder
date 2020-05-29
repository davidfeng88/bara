json.extract! review, :id, :user, :rating, :body
json.partial! 'api/users/user-avatar', user: review.user
