json.array! @businesses do |biz|
  json.partial! 'api/businesses/business', business: biz
end
