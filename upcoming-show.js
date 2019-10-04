
function getUpcomingShows(artist){

    let ticketAPIKey = "Ni82NUKOyTGYQYTtVKDK6zAzqMhxnI49";
    
    let ticketURL ="https://app.ticketmaster.com/discovery/v1/events.json?keyword=" + artist + "&apikey=" + ticketAPIKey;
    
    fetch(ticketURL)
        .then(function(response){
            console.log(response);
            response.json().then(function(data){
            console.log(data);
            
            if (!data._embedded) {
              $("#showName").text('');
              $("#showDate").text('');
              $("#showTime").text('');
              $("#venue").text('');
    
              return;
            }
        
        let showName = data._embedded.events[0].name;
        let showDate = data._embedded.events[0].dates.start.localDate;
        var showTime = data._embedded.events[0].dates.start.localTime;
        let venue = data._embedded.events[0]._embedded.venue[0].name;
        let venueCity = data._embedded.events[0]._embedded.venue[0].city.name;
        let venueCountry = data._embedded.events[0]._embedded.venue[0].state.stateCode;
        let ticketLink = `https://www.ticketmaster.com/search?radius=10000&sort=relevance%2Cdesc&tab=events&q=${artist}&daterange=all`
        // showTime =JSON.stringify(((showTime + 12) % 12 + 1 ));
        // console.log(showTime);

        // format date pulled from API
        function formatCourseDate(showDate) {
            let dateObj = new Date(showDate + 'T00:00:00');
            let newDate = dateObj.toDateString()
            return newDate
            // return new Intl.DateTimeFormat('en-US').format(dateObj);
        }

        let eventDay = formatCourseDate(showDate);
        console.log(eventDay);


        function tConvert (showTime) {
            // Check correct time format and split into components
            let time = showTime.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [showTime];
          
            if (time.length > 1) { // If time format correct
              time = time.slice (1);  // Remove full string match value
              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
              time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return newTime = time.join (''); // return adjusted time or original string
          }

          tConvert(showTime);
          console.log(newTime);

        // console.log("Show: " + showName);
        // console.log("Date: " + showDate);
        // console.log("Time: " + showTime);
        // console.log("Venue: " + venue);
        // console.log(ticketLink);

        // let showNameDiv = $("#showName");
        $("#showName").text(showName);

        // let showDateDiv = $("#showDate")
        $("#showDate").text(eventDay);

        // let showTimeDiv = $("#showTime");
        $("#showTime").text("Time: "+ newTime);

        // let venueDiv = $("#venue");
        $("#venue").text("Venue: "+venue + " - " +venueCity + ", " + venueCountry);

        // let venueLocationDiv = $("#venueLocation");
        // $("#venueLocation").text("Location: " + venueCity + ", " + venueCountry);

        $("#ticketBtn").attr('href', ticketLink);
        console.log(ticketLink);
        
        })

    });
    
    let imageURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

    fetch(imageURL)
        .then(function(response){
            console.log(response);
            response.json().then(function(data){
            console.log(data);

            let artistImage = data.thumb_url;
            $("#artistPic").attr("src", artistImage)

            });
      });
};
    