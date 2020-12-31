# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trips = [
    {
        jid: "bffc7535-08d0-467f-a611-d9393eec69b3",
        nickname: "O'Hare",
        departureDate: "2020-12-31",
        flightNumber: "DL5707",
        address: "248 Perth Road",
        city: "Cary",
        state: "IL",
        zip: 60013,
        user_id: 2
    },

    {
        jid: "0470c578-5e80-4aa2-8ffb-f359d49b0a0c",
        nickname: "Midway",
        departureDate: "2020-12-31",
        flightNumber: "WN3630",
        address: "1627 W Touhy Avenue",
        city: "Chicago",
        state: "IL",
        zip: 60626,
        user_id: 2
    },

    {
        jid: "6c825bc0-6c9e-4f41-a5e3-9fc25a45f789",
        nickname: "Newark",
        departureDate: "2020-12-31",
        flightNumber: "UA2193",
        address: "9 Christopher St.",
        city: "New York",
        state: "NY",
        zip: 10014,
        user_id: 2
    },
]

Trip.create(trips)