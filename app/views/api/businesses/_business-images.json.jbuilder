if business.images.attached?
  json.images business.images.map { |image| url_for(image) }
else
  json.images [asset_path('business/default/0.jpg'), asset_path('business/default/1.jpg'), asset_path('business/default/2.jpg')].shuffle
end