User.destroy_all
User.create(username: 'guest', password: 'password')
User.create(username: 'David Feng', password: 'password')
User.create(username: 'Ross Geller', password: 'password')
User.create(username: 'Chandler Bing', password: 'password')
User.create(username: 'Joey Tribbiani', password: 'password')
User.create(username: 'Rachel Green', password: 'password')
User.create(username: 'Monica Geller', password: 'password')
User.create(username: 'Phoebe Buffay', password: 'password')

user_ids = (User.first.id..User.last.id).to_a

Business.create(
  author_id: user_ids.sample,
  name: "Ippudo East Village",
  address: "65 4th Ave",
  lat: 40.730948,
  lng: -73.990288,
  city: 'New York',
  state: 'NY',
  zipcode: 10003,
  price: 2,
  url: "ippudony.com",
  phone: "(212) 388-0088"
)

Business.create(
  author_id: user_ids.sample,
  name: "Joe’s Shanghai",
  address: "9 Pell St",
  lat: 40.714700,
  lng: -73.997712,
  city: 'New York',
  state: 'NY',
  zipcode: 10013,
  price: 2,
  url: "joeshanghairestaurants.com",
  phone: "(212) 233-8888"
)

Business.create(
  author_id: user_ids.sample,
  name: "Burger & Lobster",
  address: "39 W 19th St",
  lat: 40.740123,
  lng: -73.993345,
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  price: 2,
  url: "burgerandlobster.com/en",
  phone: "(646) 833-7532"
)

Business.create(
  author_id: user_ids.sample,
  name: "Buddakan",
  address: "75 9th Ave",
  lat: 40.742287,
  lng: -74.004819,
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  price: 3,
  url: "buddakannyc.com",
  phone: "(212) 989-6699"
)

Business.create(
  author_id: user_ids.sample,
  name: "Woorijip Authentic Korean Food",
  address: "12 W 32nd St",
  lat: 40.747327,
  lng: -73.986506,
  city: 'New York',
  state: 'NY',
  zipcode: 10001,
  price: 1,
  url: "woorijipnyc.com",
  phone: "(212) 244-1115"
)

Business.create(
  author_id: user_ids.sample,
  name: "Morimoto",
  address: "88 10th Ave",
  lat: 40.743000,
  lng: -74.007189,
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  price: 4,
  url: "morimotonyc.com",
  phone: "(212) 989-8883"
)

Business.create(
  author_id: user_ids.sample,
  name: "Imperial Wok",
  address: "736 N Broadway",
  lat: 41.057609,
  lng: -73.765809,
  city: 'White Plains',
  state: 'NY',
  zipcode: 10603,
  price: 2,
  url: "imperialwokwp.com",
  phone: "(914) 686-2700"
)

business_ids = (Business.first.id..Business.last.id).to_a

Review.destroy_all

7.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: 1,
    body: "So bad. Will never come again!",
  )
end

10.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: 1,
    body: "Could be better...",
  )
end

15.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: 3,
    body: "I don't really know... Maybe I'll come back again?",
  )
end

10.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: 4,
    body: "Pretty good food!!",
  )
end

10.times do
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: 5,
    body: "Great food! Highly recommended!!",
  )
end
