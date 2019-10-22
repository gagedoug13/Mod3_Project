# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Show.destroy_all
Venue.destroy_all
Band.destroy_all

user_1 = User.create({
    name: "Gage"
})

shakey_graves = Band.create({
    name: "Shakey Graves"
})

red_rocks = Venue.create({
    name: "Red Rocks Amphitheatre"
})

show1 = Show.create({
    date: "Thurday, August 15, 2019",
    band: shakey_graves,
    venue: red_rocks,
    user: user_1
})