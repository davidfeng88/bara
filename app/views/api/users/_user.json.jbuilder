json.extract! user, :id, :username
if user.avatar.attached?
  json.avatar_url url_for(user.avatar)
else
  json.avatar_url asset_path('capy.jpg')
end
