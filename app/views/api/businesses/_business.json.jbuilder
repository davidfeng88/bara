json.extract! business, :id, :author_id, :name, :address, :city, :state, :zipcode, :price
json.image_url asset_path(business.image.url)
