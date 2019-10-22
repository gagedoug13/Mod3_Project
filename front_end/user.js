// import { Geokit, LatLngLiteral } from 'geokit';

// const location1: LatLngLiteral = {lat:39.0534, lng:-123.4453}
// const location2: LatLngLiteral = {lat: 37.7749,  lng: -122.4194}

// const distance: integer = Geokit.distance(location1, location2, 'miles')
// console.log(distance)


const body = document.body
const examples = [
        {
        "id":11129128,
        "type":"Concert",
        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
        "start": {
        "time":"20:00:00",
        "date":"2012-04-18",
        "datetime":"2012-04-18T20:00:00-0800"
        },
        "performance": [
        {
            "artist":{
            "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"Wild Flag",
            "id":29835,
            "identifier":[]
            },
            "id":21579303,
            "displayName":"Wild Flag",
            "billingIndex":1,
            "billing":"headline"
        }
        ],
        "location": {
        "city":"San Francisco, CA, US",
        "lng":-122.4332937,
        "lat":37.7842398
        },
        "venue": {
        "id":6239,
        "displayName":"The Fillmore",
        "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "lng":-122.4332937,
        "lat":37.7842398,
        "metroArea": {
            "uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"SF Bay Area",
            "country": { "displayName":"US" },
            "id":26330,
            "state": { "displayName":"CA" }
        }
        },
        "status":"ok",
        "popularity":0.012763
    },

        {
        "id":11129128,
        "type":"Concert",
        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
        "start": {
        "time":"20:00:00",
        "date":"2012-04-18",
        "datetime":"2012-04-18T20:00:00-0800"
        },
        "performance": [
        {
            "artist":{
            "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"Wild Flag",
            "id":29835,
            "identifier":[]
            },
            "id":21579303,
            "displayName":"Wild Flag",
            "billingIndex":1,
            "billing":"headline"
        }
        ],
        "location": {
        "city":"San Francisco, CA, US",
        "lng":-122.4332937,
        "lat":37.7842398
        },
        "venue": {
        "id":6239,
        "displayName":"The Fillmore",
        "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "lng":-122.4332937,
        "lat":37.7842398,
        "metroArea": {
            "uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"SF Bay Area",
            "country": { "displayName":"US" },
            "id":26330,
            "state": { "displayName":"CA" }
        }
        },
        "status":"ok",
        "popularity":0.012763
    },

        {
        "id":11129128,
        "type":"Concert",
        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
        "start": {
        "time":"20:00:00",
        "date":"2012-04-18",
        "datetime":"2012-04-18T20:00:00-0800"
        },
        "performance": [
        {
            "artist":{
            "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"Wild Flag",
            "id":29835,
            "identifier":[]
            },
            "id":21579303,
            "displayName":"Wild Flag",
            "billingIndex":1,
            "billing":"headline"
        }
        ],
        "location": {
        "city":"San Francisco, CA, US",
        "lng":-122.4332937,
        "lat":37.7842398
        },
        "venue": {
        "id":6239,
        "displayName":"The Fillmore",
        "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "lng":-122.4332937,
        "lat":37.7842398,
        "metroArea": {
            "uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"SF Bay Area",
            "country": { "displayName":"US" },
            "id":26330,
            "state": { "displayName":"CA" }
        }
        },
        "status":"ok",
        "popularity":0.012763
    },

        {
        "id":11129128,
        "type":"Concert",
        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
        "start": {
        "time":"20:00:00",
        "date":"2012-04-18",
        "datetime":"2012-04-18T20:00:00-0800"
        },
        "performance": [
        {
            "artist":{
            "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"Wild Flag",
            "id":29835,
            "identifier":[]
            },
            "id":21579303,
            "displayName":"Wild Flag",
            "billingIndex":1,
            "billing":"headline"
        }
        ],
        "location": {
        "city":"San Francisco, CA, US",
        "lng":-122.4332937,
        "lat":37.7842398
        },
        "venue": {
        "id":6239,
        "displayName":"The Fillmore",
        "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "lng":-122.4332937,
        "lat":37.7842398,
        "metroArea": {
            "uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"SF Bay Area",
            "country": { "displayName":"US" },
            "id":26330,
            "state": { "displayName":"CA" }
        }
        },
        "status":"ok",
        "popularity":0.012763
    }
]
function allExamples(examples) {
    let arr = []
    examples.forEach(example => {
        arr.push({lat:example.location.lat, lng:example.location.lng})
    })
    console.log(arr)
}
// the real distance between is about 20 miles. It returns like 9 
const lat1 = 39.9570
const lon1 = 105.1719
const lat2 = 39.7365
const lon2 = 104.9900
const unit = "K"


function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
        dist = dist * 30 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

console.log(distance(lat1,lon1,lat2,lon2, unit))

// const allObjects = Object.keys(examples).forEach(function (example){
//     console.log(examples[example]);
// });


// firstOne(example_1)

// console.log(examples)


// function createBandCard(bands) {
//     const div = document.createElement('div')
//     div.className = "bandCard"

//     bands.forEach(band => {
//         const p = document.createElement('p')
//         p.className = "band"

//         p.innerText = `${band.name}`

//         div.append(p)
//     })
//     body.append(div)
// }

// function createShowCard(shows) {
//     const div = document.createElement('div')
//     div.className = "showCard"

// // const bandsForm = document.querySelector('.bands-form')
// //     button.addEventListener('submit', event => {
// //     event.preventDefault()
    

//     shows.forEach(show => {
//         const band = document.createElement('h3')
//         const date = document.createElement('p')
//         const venue = document.createElement('p')
//         const user = document.createElement('p')
        
//         user.className = "user"
//         band.className = "band"
//         date.className = "date"
//         venue.className = "venue"

//         user.innerText = `${show.user.name}`
//         band.innerText = `${show.band.name}`
//         date.innerText = `${show.date}`
//         venue.innerText = `${show.venue.name}`

//         div.append(user, band, date, venue)
//     })
//     body.append(div)
// }
// })


// fetch("http://localhost:3000/shows")
//     .then(response => response.json())
//     .then(createShowCard)

// fetch("http://localhost:3000/bands")
//     .then(response => response.json())
//     .then(createBandCard)

// fetch("http://localhost:3000/users")
//     .then(response => response.json())
//     .then(createUserCard)