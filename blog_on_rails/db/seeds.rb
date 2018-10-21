# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
NUM_OF_POSTS = 100

NUM_OF_POSTS.times do
  Post.create title: ( "#{Faker::HarryPotter.spell} in #{Faker::HarryPotter.house}" ),
    body: (Faker::HarryPotter.quote)
end

puts ("🧙‍ Generated #{Post.count} 🧙‍")