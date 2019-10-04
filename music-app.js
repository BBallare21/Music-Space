$(document).ready(function () {

    let submitBtn = $("#submitButton");

    submitBtn.on("click", function () {
        let artist = $("input").val();
        console.log(artist);
        if (artist) {
            getUpcomingShows(artist);
            getTopSongs(artist);
            getAlbum(artist);

        }
    });

   $("input").keyup(function(event) {
       console.log(event);
       console.log(event.key);
        if (event.keyCode === 13) {
            $("#submitButton").click();
        }
        $('#submitButton').click(
            function(){
                $('input').val('');
            });
   });

});

