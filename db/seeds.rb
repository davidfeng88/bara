# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'guest', password: 'password')

10.times do
  User.create(
    username: Faker::Name.name,
    password: Faker::Lorem.word,
  )
end

Business.destroy_all
20.times do
  Business.create(
    author_id: User.order("RANDOM()").first.id,
    name: Faker::Company.name,
    address: "#{rand(101..599)} W #{rand(25..34).ordinalize} St",
    city: 'New York',
    state: 'NY',
    zipcode: 10001,
    price: rand(1..4),
    url: Faker::Internet.url,
    phone: "(#{"#{rand(0..999)}".rjust(3, '0')})#{"#{rand(0..999)}".rjust(3, '0')}-#{"#{rand(0..9999)}".rjust(4, '0')}"
    )
end

Review.destroy_all
70.times do
  Review.create(
    author_id: User.order("RANDOM()").first.id,
    business_id: Business.order("RANDOM()").first.id,
    rating: rand(1..5),
    body: Faker::Lorem.paragraph,
  )
end
