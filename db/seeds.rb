# Users
User.destroy_all
User.create(username: 'Guest', password: 'password')
default_users = [
  'David Feng',

  'William Shakespeare', 'Du Fu', 'Li Bai',

  'Michelangelo', 'Pablo Picasso', 'Raphael', 'Claude Monet',
  'Vincent van Gogh', 'Leonardo da Vinci', 'Donatello',

  'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach',

  'Aristotle', 'Plato', 'Immanuel Kant', 'Confucius', 'Laozi', 'Mencius',

  'Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'James Clerk Maxwell',
  'Marie Curie', 'Dmitri Mendeleev', 'Nicolaus Copernicus', 'Charles Darwin',

  'Euclid', 'Carl Friedrich Gauss', 'Archimedes', 'Leonhard Euler',

  'James Watt', 'Thomas Edison', 'Nikola Tesla', 'Benjamin Franklin',

  'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'
]

default_users.each do |username|
  password = username.delete(' ')
  avatar_path = "app/assets/images/avatar/#{username}.jpg"
  avatar = File.open(avatar_path)
  User.create(username: username, password: password, avatar: avatar)
end

user_ids = (User.first.id..User.last.id).to_a

# Tags
Tag.destroy_all

default_tags = [
  'Mexican', 'Nightlife', 'Chinese', 'Japanese', 'Seafood',
  'American', 'French', 'Asian Fusion', 'Korean', 'Irish',
  'Italian'
]

default_tags.each do |label|
  Tag.create(label: label)
end

tag_ids = (Tag.first.id..Tag.last.id).to_a

# Businesses
Business.destroy_all

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
  phone: "(212) 256-0056",
  image: File.open("app/assets/images/business/Mexican.jpg"),
  tag_ids: [tag_ids[0], tag_ids[1]],
)

Business.create(
  author_id: user_ids.sample,
  name: "Shanghai",
  address: "1388 2nd Ave",
  lat: 40.768306,
  lng: -73.958399,
  city: 'New York',
  state: 'NY',
  zipcode: 10021,
  price: 1,
  phone: "(212) 288-8066",
  image: File.open("app/assets/images/business/Noodles.jpg"),
  tag_ids: [tag_ids[2]],
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
  phone: "(212) 388-0088",
  image: File.open("app/assets/images/business/Japanese.jpg"),
  tag_ids: [tag_ids[3]],
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
  phone: "(212) 233-8888",
  image: File.open("app/assets/images/business/Chinese.jpg"),
  tag_ids: [tag_ids[2], tag_ids[4]],
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
  phone: "(212) 362-3800",
  image: File.open("app/assets/images/business/French.jpg"),
  tag_ids: [tag_ids[5], tag_ids[6]],
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
  phone: "(212) 757-2224",
  image: File.open("app/assets/images/business/American.jpg"),
  tag_ids: [tag_ids[5]],
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
  phone: "(646) 833-7532",
  image: File.open("app/assets/images/business/Seafood.jpg"),
  tag_ids: [tag_ids[5], tag_ids[4]],
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
  phone: "(212) 772-2600",
  image: File.open("app/assets/images/business/French.jpg"),
  tag_ids: [tag_ids[6]],
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
  phone: "(212) 989-6699",
  image: File.open("app/assets/images/business/Chinese.jpg"),
  tag_ids: [tag_ids[2], tag_ids[7]],
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
  phone: "(212) 244-1115",
  image: File.open("app/assets/images/business/Korean.jpg"),
  tag_ids: [tag_ids[8]],
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
  phone: "(646) 568-4018",
  image: File.open("app/assets/images/business/HighEnd.jpg"),
  tag_ids: [tag_ids[1]],
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
  phone: "(646) 964-4623",
  image: File.open("app/assets/images/business/Italian.jpg"),
  tag_ids: [tag_ids[10]],
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
  phone: "(646) 649-2089",
  image: File.open("app/assets/images/business/American.jpg"),
  tag_ids: [tag_ids[5]],
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
  image: File.open("app/assets/images/business/Japanese.jpg"),
  tag_ids: [tag_ids[1], tag_ids[3], tag_ids[7]],
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
  phone: "(212) 489-6889",
  image: File.open("app/assets/images/business/Mexican.jpg"),
  tag_ids: [tag_ids[0]],
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
  phone: "(914) 437-9168",
  image: File.open("app/assets/images/business/Chinese.jpg"),
  tag_ids: [tag_ids[2]],
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
  phone: "(914) 686-2700",
  image: File.open("app/assets/images/business/Noodles.jpg"),
  tag_ids: [tag_ids[2]],
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
  phone: "(646) 422-7906",
  image: File.open("app/assets/images/business/Salmon.jpg"),
  tag_ids: [tag_ids[1], tag_ids[9]],
)

business_ids = (Business.first.id..Business.last.id).to_a

# Reviews
Review.destroy_all

270.times do
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
