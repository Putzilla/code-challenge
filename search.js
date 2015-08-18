trendList = [];
var youtubeQuery = '';

// Twitter API
function twitterCall(callback){

    $.ajax({
        url: 'get_tweets.php',
        type: 'GET',
        success: function(response) {
            //console.log(response);
            var twitterNumber = response[0].trends.length;

            for (var i = 0; i < twitterNumber; i++) {
                $('#trends-container').append('<li>' + response[0].trends[i].name + '</li>');
                var thisTrend = response[0].trends[i].name;
                var trendString = thisTrend.toString();

                trendList.push(trendString);

            }
            callback();

        },
        error: function(errors) {
            $('.tweets-container p:first').text('Request error');
            console.log(errors);
        }

    });

}

twitterCall(function() {
    youtubeQuery = trendList.join('|');
});


// Youtube API
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCNjSr69Fj7brrcuVP6xzrslpYnSw4MA-8');

    search();
}

// Search for a specified string.
function search() {

    //console.log(youtubeQuery);
    var request = gapi.client.youtube.search.list({
        q: youtubeQuery,
        part: 'snippet',
        maxResults: 20
    });

    request.execute(function(response) {
        //console.log(response);
        var youtubeNumber = response.items.length;

        for (var i = 0; i < youtubeNumber; i++) {
            $('#list-container').append('<div class="col-sm-6 youtube-result"><a href="https://youtube.com//watch?v=' + response.items[i].id.videoId + '" target="_blank"><img src="'+ response.items[i].snippet.thumbnails.default.url +'" alt="" /><p>' + response.items[i].snippet.title + '</p></a></div>');
        }
    });
}
// END youtube API