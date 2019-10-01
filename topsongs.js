
    let lastAPIKey = "8173e09c55bc9e07b713c6edcd74e63e";

    let lastTopTracks = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=" + lastAPIKey + "&format=json";

    // ===== Appending songs to table in html ======

$.ajax({
      url: lastTopTracks,
      method: "GET"
      }).then(function(response) {
          console.log(response);
//Song #1
$("#Song1").text(response.toptracks.track[0].name)
$("#songplays1").append(response.toptracks.track[0].playcount)
console.log(response.toptracks.track[0].name)
//Song #2
$("#Song2").append(response.toptracks.track[1].name)
$("#songplays2").append(response.toptracks.track[1].playcount)

//Song #3
$("#Song3").append(response.toptracks.track[2].name)
$("#songplays3").append(response.toptracks.track[2].playcount)

//Song #4
$("#Song4").append(response.toptracks.track[3].name)
$("#songplays4").append(response.toptracks.track[3].playcount)

//Song #5
$("#Song5").append(response.toptracks.track[4].name)
$("#songplays5").append(response.toptracks.track[4].playcount)
});

