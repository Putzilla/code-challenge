function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCNjSr69Fj7brrcuVP6xzrslpYnSw4MA-8');

    search();
}

// Search for a specified string.
function search() {
    var request = gapi.client.youtube.search.list({
        q: 'deadpool trailer',
        part: 'snippet',
        maxResults: 10
    });

    request.execute(function(response) {
        //var str = JSON.stringify(response.result);
        //$('#list-container').html('<pre>' + str + '</pre>');
        console.log(response);
        var resultNumber = response.items.length;
        var i = 0;

        while( i <= resultNumber) {
            $('#list-container').append('<li><a href="https://youtube.com//watch?v=' + response.items[i].id.videoId + '" target="_blank">' + response.items[i].snippet.title + '</a></li>');
            //console.log(response.items[i].snippet.title);
            i++;
        }
    });


}