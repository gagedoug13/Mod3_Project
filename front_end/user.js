const button = document.querySelector(".button")

button.addEventListener("click", (event)=> {
    document.location.href = "http://localhost:3000/show.html"
})

const body = document.body

// function allExamples(examples) {
//     let arr = []
//     examples.forEach(example => {
//         arr.push({lat:example.location.lat, lng:example.location.lng})
//     })
//     console.log(arr)
// }
// // the real distance between is about 20 miles. It returns like 9 
// const lat1 = 39.9570
// const lon1 = 105.1719
// const lat2 = 39.7365
// const lon2 = 104.9900
// const unit = "K"


// function distance(lat1, lon1, lat2, lon2, unit) {
// 	if ((lat1 == lat2) && (lon1 == lon2)) {
// 		return 0;
// 	}
// 	else {
// 		var radlat1 = Math.PI * lat1/180;
// 		var radlat2 = Math.PI * lat2/180;
// 		var theta = lon1-lon2;
// 		var radtheta = Math.PI * theta/180;
// 		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
// 		if (dist > 1) {
// 			dist = 1;
// 		}
// 		dist = Math.acos(dist);
// 		dist = dist * 180/Math.PI;
//         dist = dist * 30 * 1.1515;
//         if (unit=="K") { dist = dist * 1.609344 }
// 		if (unit=="N") { dist = dist * 0.8684 }
// 		return dist;
// 	}
// }

// console.log(distance(lat1,lon1,lat2,lon2, unit))


    