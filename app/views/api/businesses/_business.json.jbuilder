json.extract! business,
  :id, :author_id, :name, :address, :city, :state, :zipcode, :price, :url, :phone
json.image_url asset_path(business.image.url)
