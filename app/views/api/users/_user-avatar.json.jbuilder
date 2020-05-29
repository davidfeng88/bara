if user.avatar.attached?
  json.avatar url_for(user.avatar)
else
  json.avatar asset_path('user/default/capy.jpg')
end
