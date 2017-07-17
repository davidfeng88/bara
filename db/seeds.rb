User.destroy_all
User.create(username: 'guest', password: 'password')
User.create(username: 'David Feng', password: 'password')
User.create(username: 'William Shakespeare', password: Faker::Lorem.word)
User.create(username: 'Du Fu', password: Faker::Lorem.word)
User.create(username: 'Li Bai', password: Faker::Lorem.word)
User.create(username: 'Michelangelo', password: Faker::Lorem.word)
User.create(username: 'Pablo Picasso', password: Faker::Lorem.word)
User.create(username: 'Raphael', password: Faker::Lorem.word)
User.create(username: 'Claude Monet', password: Faker::Lorem.word)
User.create(username: 'Vincent van Gogh', password: Faker::Lorem.word)
User.create(username: 'Leonardo da Vinci', password: Faker::Lorem.word)
User.create(username: 'Donatello', password: Faker::Lorem.word)
User.create(username: 'Wolfgang Amadeus Mozart', password: Faker::Lorem.word)
User.create(username: 'Ludwig van Beethoven', password: Faker::Lorem.word)
User.create(username: 'Johann Sebastian Bach', password: Faker::Lorem.word)
User.create(username: 'Aristotle', password: Faker::Lorem.word)
User.create(username: 'Plato', password: Faker::Lorem.word)
User.create(username: 'Immanuel Kant', password: Faker::Lorem.word)
User.create(username: 'Confucius', password: Faker::Lorem.word)
User.create(username: 'Laozi', password: Faker::Lorem.word)
User.create(username: 'Mencius', password: Faker::Lorem.word)
User.create(username: 'Isaac Newton', password: Faker::Lorem.word)
User.create(username: 'Galileo Galilei', password: Faker::Lorem.word)
User.create(username: 'Albert Einstein', password: Faker::Lorem.word)
User.create(username: 'James Clerk Maxwell', password: Faker::Lorem.word)
User.create(username: 'Charles Darwin', password: Faker::Lorem.word)
User.create(username: 'James Clerk Maxwell', password: Faker::Lorem.word)
User.create(username: 'Leonhard Euler', password: Faker::Lorem.word)
User.create(username: 'James Watt', password: Faker::Lorem.word)
User.create(username: 'Thomas Edison', password: Faker::Lorem.word)
User.create(username: 'Nikola Tesla', password: Faker::Lorem.word)
User.create(username: 'Benjamin Franklin', password: Faker::Lorem.word)
User.create(username: 'Archimedes', password: Faker::Lorem.word)
User.create(username: 'Euclid', password: Faker::Lorem.word)
User.create(username: 'Carl Friedrich Gauss', password: Faker::Lorem.word)
User.create(username: 'Marie Curie', password: Faker::Lorem.word)
User.create(username: 'Dmitri Mendeleev', password: Faker::Lorem.word)
User.create(username: 'Nicolaus Copernicus', password: Faker::Lorem.word)
User.create(username: 'Bill Gates', password: Faker::Lorem.word)
User.create(username: 'Steve Jobs', password: Faker::Lorem.word)
User.create(username: 'Mark Zuckerberg', password: Faker::Lorem.word)

user_ids = (User.first.id..User.last.id).to_a

Business.create(
  author_id: user_ids.sample,
  name: "Conmigo",
  address: "1685 1st Ave",
  lat: 40.777917,
  lng: -73.948976,
  city: 'New York',
  state: 'NY',
  zipcode: 10128,
  price: 3,
  url: "conmigonyc.com",
  phone: "(212) 256-0056"
)

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
  name: "Dovetail",
  address: "103 W 77th St",
  lat: 40.780927,
  lng: -73.976625,
  city: 'New York',
  state: 'NY',
  zipcode: 10024,
  price: 4,
  url: "dovetailnyc.com",
  phone: "(212) 362-3800"
)

Business.create(
  author_id: user_ids.sample,
  name: "Print",
  address: "653 11th Ave",
  lat: 40.764561,
  lng: -73.995976,
  city: 'New York',
  state: 'NY',
  zipcode: 10036,
  price: 3,
  url: "printrestaurant.com",
  phone: "(212) 757-2224"
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
  name: "Cafe Boulud",
  address: "20 E 76th St",
  lat: 40.774278,
  lng: -73.963914,
  city: 'New York',
  state: 'NY',
  zipcode: 10021,
  price: 4,
  url: "cafeboulud.com/nyc",
  phone: "(212) 772-2600"
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
  name: "Agern",
  address: "89 E 42nd St",
  lat: 40.752569,
  lng: -73.977626,
  city: 'New York',
  state: 'NY',
  zipcode: 10017,
  price: 4,
  url: "agernrestaurant.com",
  phone: "(646) 568-4018"
)

Business.create(
  author_id: user_ids.sample,
  name: "The Dead Rabbit",
  address: "30 Water St",
  lat: 40.703290,
  lng: -74.011031,
  city: 'New York',
  state: 'NY',
  zipcode: 10004,
  price: 2,
  url: "deadrabbitnyc.com",
  phone: "(646) 422-7906"
)

Business.create(
  author_id: user_ids.sample,
  name: "Il Mattone",
  address: "49 Beach St",
  lat: 40.720791,
  lng: -74.009126,
  city: 'New York',
  state: 'NY',
  zipcode: 10013,
  price: 1,
  url: "ilmattonetribeca.com",
  phone: "(646) 964-4623"
)

Business.create(
  author_id: user_ids.sample,
  name: "Foxy Greens",
  address: "1049 1st Ave",
  lat: 40.758689,
  lng: -73.962948,
  city: 'New York',
  state: 'NY',
  zipcode: 10022,
  price: 1,
  phone: "(646) 649-2089"
)

Business.create(
  author_id: user_ids.sample,
  name: "Dinnertable",
  address: "206 Ave A",
  lat: 40.729435,
  lng: -73.980731,
  city: 'New York',
  state: 'NY',
  zipcode: 10009,
  price: 3,
  url: "dinnertable.nyc",
)

Business.create(
  author_id: user_ids.sample,
  name: "The Burrito Box",
  address: "885 9th Ave",
  lat: 40.768248,
  lng: -73.985716,
  city: 'New York',
  state: 'NY',
  zipcode: 10019,
  price: 1,
  url: "burritobox.com",
  phone: "(212) 489-6889"
)

Business.create(
  author_id: user_ids.sample,
  name: "Omandarin Chinese Cuisine",
  address: "361 N Central Ave",
  lat: 41.029552,
  lng: -73.790524,
  city: 'Hartsdale',
  state: 'NY',
  zipcode: 10530,
  price: 2,
  url: "omandarin.com",
  phone: "(914) 437-9168"
)

Business.create(
  author_id: user_ids.sample,
  name: "Imperial Wok",
  address: "736 N Broadway",
  lat: 41.057598,
  lng: -73.765689,
  city: 'White Plains',
  state: 'NY',
  zipcode: 10603,
  price: 2,
  url: "imperialwokwp.com",
  phone: "(914) 686-2700"
)

business_ids = (Business.first.id..Business.last.id).to_a

Review.destroy_all

50.times do
  random = rand(15)
  case random
  when 0
    rating = 1
    body = 'So bad. Will never come again!'
  when 1..2
    rating = 2
    body = 'Could be better...'
  when 3..5
    rating = 3
    body = 'I have no strong feelings one way or the other.'
  when 6..8
    rating = 4
    body = 'Pretty good food!!'
  else
    rating = 5
    body = 'Great food! Highly recommended!!'
  end
  Review.create(
    author_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: rating,
    body: body,
  )
end
