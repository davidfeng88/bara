json.extract! review, :id, :user, :rating, :body, :business
json.partial! 'api/users/user-avatar', user: review.user
