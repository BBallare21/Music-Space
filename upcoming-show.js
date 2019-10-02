
function getUpcomingShows(artist){

    let ticketAPIKey = "Ni82NUKOyTGYQYTtVKDK6zAzqMhxnI49";
    
    let ticketURL ="http://app.ticketmaster.com/discovery/v1/events.json?keyword=" + artist + "&apikey=" + ticketAPIKey;
    // $.ajax({
    //     url: ticketURL,
    //     method: "GET"
    //     }).then(function(response) {
    //         console.log(response);
    
        fetch(ticketURL)
            .then(function(response){
                console.log(response);
                response.json().then(function(data){
                console.log(data);
                
            
            let showName = data._embedded.events[0].name;
            let showDate = data._embedded.events[0].dates.start.localDate;
            var showTime = data._embedded.events[0].dates.start.localTime;
            let venue = data._embedded.events[0]._embedded.venue[0].name;
            let venueCity = data._embedded.events[0]._embedded.venue[0].city.name;
            let venueCountry = data._embedded.events[0]._embedded.venue[0].state.stateCode;
            let ticketLink = `https://www.ticketmaster.com/search?radius=10000&sort=relevance%2Cdesc&tab=events&q=${artist}&daterange=all`
            // showTime =JSON.stringify(((showTime + 12) % 12 + 1 ));
            // console.log(showTime);
    
            console.log("Show: " + showName);
            console.log("Date: " + showDate);
            console.log("Time: " + showTime);
            console.log("Venue: " + venue);
            // console.log(ticketLink);
    
            // let showNameDiv = $("#showName");
            $("#showName").text("Show: " +showName);
    
            // let showDateDiv = $("#showDate")
            $("#showDate").text("Date: "+showDate);
    
            // let showTimeDiv = $("#showTime");
            $("#showTime").text("Time: "+ showTime);
    
            // let venueDiv = $("#venue");
            $("#venue").text("Venue: "+venue);
    
            // let venueLocationDiv = $("#venueLocation");
            $("#venueLocation").text("Location: " + venueCity + ", " + venueCountry);
    
            $("#ticketBtn").attr('href', ticketLink);
            console.log(ticketLink);
            
            })
    
        });
    
    
    };
    