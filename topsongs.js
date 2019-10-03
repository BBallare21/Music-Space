function getTopSongs(artist){
    let lastAPIKey = "8173e09c55bc9e07b713c6edcd74e63e";

    let lastTopTracks = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=" + lastAPIKey + "&format=json";

    // ===== Appending songs to table in html ======

// $.ajax({
//       url: lastTopTracks,
//       method: "GET"
//       }).then(function(response) {
//           console.log(response);

    fetch(lastTopTracks)
    .then(function(response){
        console.log(response);
        response.json().then(function(data){
        console.log(data);
    
//Song #1
$("#Song1").empty();
$("#Song1").text(data.toptracks.track[0].name)
$('#songplays1').empty();
$("#songplays1").append(data.toptracks.track[0].playcount)
console.log(data.toptracks.track[0].name)

//Song #2
$("#Song2").empty();
$("#Song2").append(data.toptracks.track[1].name)
$('#songplays2').empty();
$("#songplays2").append(data.toptracks.track[1].playcount)

//Song #3
$("#Song3").empty();
$("#Song3").append(data.toptracks.track[2].name)
$('#songplays3').empty();
$("#songplays3").append(data.toptracks.track[2].playcount)

//Song #4
$("#Song4").empty();
$("#Song4").append(data.toptracks.track[3].name)
$('#songplays4').empty();
$("#songplays4").append(data.toptracks.track[3].playcount)

//Song #5
$("#Song5").empty();
$("#Song5").append(data.toptracks.track[4].name)
$('#songplays5').empty();
$("#songplays5").append(data.toptracks.track[4].playcount)
});

})};
