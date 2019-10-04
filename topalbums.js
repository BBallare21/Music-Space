
function getAlbum(artist) {
    let lastAPIKey = "8173e09c55bc9e07b713c6edcd74e63e";
    let lastTopAlbum = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=" + lastAPIKey + "&format=json";

    fetch(lastTopAlbum)
    .then(function(response){
        // console.log(response);
        response.json().then(function(data){
        console.log(data);
        
        console.log(response);
        let top1 = data.topalbums.album[0].name;
        let top2 = data.topalbums.album[1].name;
        let top3 = data.topalbums.album[2].name;
        let top4 = data.topalbums.album[3].name;
        console.log(top1);
        console.log(top2);

        let data1 = data.topalbums.album
        let alDiv1 = $('<div>');
        let alDiv2 = $('<div>');
        let alDiv3 = $('<div>');
        let alDiv4 = $('<div>');
        let p1 = $('<p class="album mediaalbum">').text(top1);
        let p2 = $('<p class="album mediaalbum">').text(top2);
        let p3 = $('<p class="album mediaalbum">').text(top3);
        let p4 = $('<p class="album mediaalbum">').text(top4);
        let image1 = $('<img class=pic>');
        let image2 = $('<img class=pic>');
        let image3 = $('<img class=pic>');
        let image4 = $('<img class=pic>');
        image1.attr('src', data1[0].image[2]['#text']);
        console.log(image1);
        image2.attr('src', data1[1].image[2]['#text']);
        image3.attr('src', data1[2].image[2]['#text']);
        image4.attr('src', data1[3].image[2]['#text']);
        alDiv1.append(p1);
        alDiv1.prepend(image1);
        alDiv2.append(p2);
        alDiv2.prepend(image2);
        alDiv3.append(p3);
        alDiv3.prepend(image3);
        alDiv4.append(p4);
        alDiv4.prepend(image4);

        $('#album1').empty();
        $('#album1').append(alDiv1);
        $('#album2').empty();
        $('#album2').append(alDiv2);
        $('#album3').empty();
        $('#album3').append(alDiv3);
        $('#album4').empty();
        $('#album4').append(alDiv4);
    });
    })}
