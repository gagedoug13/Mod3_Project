const body = document.querySelector('body')

function createShowCard(shows) {
    const div = document.createElement('div')
    div.className = "showCard"


    shows.events.forEach(show => {
        
        let divCard = document.createElement("div")
        divCard.className = "eachShowCard"

        const date = document.createElement('p')
        const venue = document.createElement('p')
        const tickets = document.createElement('p')
        const a_tag = document.createElement('a')
        
        a_tag.className = "band"
        date.className = "date"
        venue.className = "venue"
        a_tag.href = `https://www.stubhub.com/${show.webURI}`
        a_tag.target = "_blank"

        
        a_tag.innerHTML = `${show.performers[0].name}`
        date.innerText = `${show.eventDateLocal.slice(0,10)}`
        venue.innerText = `${show.venue.name}`
        
        if (show.ticketInfo.totalTickets == 0) {
            tickets.innerText = "This show is sold out!"
        } else if (show.ticketInfo.totalTickets == 1) {
            tickets.innerText = "Only 1 ticket left!"
        } else {
        tickets.innerText = `Only ${show.ticketInfo.totalTickets} tickets left!`
        }


        divCard.append(a_tag, date, venue, tickets)
        div.append(divCard)
    })
    body.append(div)
}
    
    const concertURL = "https://api.stubhub.com/sellers/search/events/v3?city=Denver&rows=100&categoryName=Concert"
    
    fetch(concertURL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer b4ZVRidcGOowRYpSRN21cQuzxugC"
        },
      })
      .then(response => response.json())
      .then(shows => createShowCard(shows))
      .catch(console.log)