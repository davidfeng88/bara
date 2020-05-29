json.extract! user, :id, :username
if user.avatar.attached?
  json.avatar url_for(user.avatar)
else
  json.avatar asset_path('capy.jpg')
end
