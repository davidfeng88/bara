json.partial! 'api/businesses/business-base', business: business
json.extract! business, :address, :city, :state, :zipcode, :lat, :lng, :phone