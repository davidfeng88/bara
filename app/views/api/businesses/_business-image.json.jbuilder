if business.images.attached?
  json.image url_for(business.images[0])
else
  json.image [asset_path('business/default/0.jpg'), asset_path('business/default/1.jpg'), asset_path('business/default/2.jpg')].sample(1)
end