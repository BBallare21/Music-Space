
let ticketAPIKey = "Ni82NUKOyTGYQYTtVKDK6zAzqMhxnI49";

let artist = 'Taylor Swift'

let ticketURL ="http://app.ticketmaster.com/discovery/v1/events.json?keyword=" + artist + "&apikey=" + ticketAPIKey;

$.ajax({
    url: ticketURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);
        
        let showName = response._embedded.events[0].name
        let showDate = response._embedded.events[0].dates.start.localDate
        var showTime = response._embedded.events[0].dates.start.localTime
        let venue = response._embedded.events[0]._embedded.venue[0].name
        let ticketLink = "www.ticketmaster.com/search?q=" + artist
        // showTime =JSON.stringify(((showTime + 12) % 12 + 1 ));
        // console.log(showTime);
        
        

        console.log("Show: " + showName);
        console.log("Date: " + showDate);
        console.log("Time: " + showTime);
        console.log("Venue: " + venue);
        console.log(ticketLink);

        // let showNameDiv = $("#showName");
        $("#showName").text("Show: " +showName);

        // let showDateDiv = $("#showDate")
        $("#showDate").text("Date: "+showDate);

        // let showTimeDiv = $("#showTime");
        $("#showTime").text("Time: "+ showTime);

        // let venueDiv = $("#venue");
        $("#venue").text("Venue: "+venue);

        $("a").attr('href', ticketLink)
        // let ticketLinkDiv = $("#ticketLink");
        $("#ticketLink").text("Buy Tickets: "+ ticketLink);


});


