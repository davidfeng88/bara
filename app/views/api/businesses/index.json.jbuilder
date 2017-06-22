@businesses.each do |biz|
  json.set! biz.id do
    json.partial! 'api/businesses/business', business: biz
  end
end
