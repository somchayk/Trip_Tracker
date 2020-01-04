# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do
  trip = Trip.create(
    name: Faker::Book.title,
    final_destination: Faker::Address.city,
    img_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['city']),
    start_date: Faker::Date.forward(days: 3),
    end_date: Faker::Date.forward(days: 50),
    expected_cost: Faker::Number.number(digits: 4)
  )
  3.times do
    review = Review.create(
      trip_id: trip.id,
      stars: [1,2,3,4,5].sample,
      subject: Faker::Commerce.product_name,
      body: Faker::Restaurant.review,
      author: Faker::FunnyName.two_word_name
    )
  end
  5.times do
    location = Location.create(
      trip_id: trip.id,
      name: Faker::Address.city,
      date_arrived: Faker::Date.forward(days: 50),
      latitude: Faker::Address.latitude,
      longitude: Faker::Address.longitude,
      img_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['city']),
      days: [1,2,3,4,5,6,7,8].sample,
      expected_cost: Faker::Number.number(digits: 3)
    )
  end

end

puts "Data Seeded"