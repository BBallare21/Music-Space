let lastAPIKey = "8173e09c55bc9e07b713c6edcd74e63e";
let trackSearch = "lover"
let trackArtist = ""

let lastTopAlbum = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=" + lastAPIKey + "&format=json";

$.ajax({
    url: lastTopAlbum,
    method: "GET"
    }).then(function(response) {
        console.log(response);
});

let lastTopTracks = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=" + lastAPIKey + "&format=json";

$.ajax({
    url: lastTopTracks,
    method: "GET"
    }).then(function(response) {
        console.log(response);
});


let ticketAPIKey = "Ni82NUKOyTGYQYTtVKDK6zAzqMhxnI49";

let artist = "taylor swift";

let ticketURL ="http://app.ticketmaster.com/discovery/v1/events.json?keyword=" + artist + "&apikey=" + ticketAPIKey;

$.ajax({
    url: ticketURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);
});


