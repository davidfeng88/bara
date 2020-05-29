json.array! @businesses do |biz|
  json.partial! 'api/businesses/business-base', business: biz
  json.partial! 'api/businesses/business-image', business: biz
end
