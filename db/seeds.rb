User.destroy_all
User.create(username: 'guest', password: 'password')

20.times do
  User.create(
    username: Faker::Name.name,
    password: Faker::Lorem.word,
  )
end

user_ids = (User.first.id..User.last.id).to_a

Business.destroy_all
12.times do
  west_east = %w(W E).sample
  Business.create(
    author_id: user_ids.sample,
    name: Faker::Company.name,
    address: "#{rand(101..599)} #{west_east} #{rand(1..34).ordinalize} St",
    lat: rand(40.711073..40.753247),
    lng: rand(-74.009286..-73.976244),
    city: 'New York',
    state: 'NY',
    zipcode: rand(10001..10010),
    price: rand(1..4),
    url: Faker::Internet.url,
    phone: "(#{"#{rand(0..999)}".rjust(3, '0')})#{"#{rand(0..999)}".rjust(3, '0')}-#{"#{rand(0..9999)}".rjust(4, '0')}"
    )
end

10.times do
  west_east = %w(W E).sample
  Business.create(
    author_id: user_ids.sample,
    name: Faker::Company.name,
    address: "#{rand(101..599)} Lake St",
    lat: rand(41.020611..41.044825),
    lng: rand(-73.770136..-73.755716),
    city: 'White Plains',
    state: 'NY',
    zipcode: 10604,
    price: rand(1..4),
    url: Faker::Internet.url,
    phone: "(#{"#{rand(0..999)}".rjust(3, '0')})#{"#{rand(0..999)}".rjust(3, '0')}-#{"#{rand(0..9999)}".rjust(4, '0')}"
    )
end

3.times do
  west_east = %w(W E).sample
  Business.create(
    author_id: user_ids.sample,
    name: Faker::Company.name,
    address: "#{rand(101..599)} Lake St",
    lat: rand(41.788329..41.801827),
    lng: rand(-87.605483..-87.588289),
    city: 'Chicago',
    state: 'IL',
    zipcode: 60615,
    price: rand(1..4),
    url: Faker::Internet.url,
    phone: "(#{"#{rand(0..999)}".rjust(3, '0')})#{"#{rand(0..999)}".rjust(3, '0')}-#{"#{rand(0..9999)}".rjust(4, '0')}"
    )
end

business_ids = (Business.first.id..Business.last.id).to_a

Review.destroy_all
50.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: rand(1..5),
    body: Faker::Lorem.paragraph,
  )
end
